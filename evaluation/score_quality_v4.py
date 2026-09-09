import json
import re
from pathlib import Path


BASE_DIR = Path(__file__).resolve().parent

RESULTS_FILE = BASE_DIR / "results" / "model_results_v4.json"
RUBRIC_FILE = BASE_DIR / "quality_rubric.json"
OUTPUT_FILE = BASE_DIR / "results" / "quality_results_v4.json"


STOPWORDS = {
    "the", "a", "an", "is", "are", "was", "were",
    "what", "which", "how", "why", "can", "does", "do",
    "of", "for", "to", "in", "on", "and", "or",
    "with", "be", "by", "from", "as", "that", "this",
    "it", "its", "their", "they", "if", "should",
    "after", "during", "about", "information",
    "aadhaar", "resident"
}


def normalize(text):
    text = str(text).lower()
    text = re.sub(r"[^a-z0-9\s]", " ", text)
    return re.sub(r"\s+", " ", text).strip()


def tokens(text):
    return {
        word
        for word in normalize(text).split()
        if word not in STOPWORDS and len(word) > 2
    }


def fact_supported(answer, fact):
    """
    Conservative lexical check for expected facts.
    """
    fact_words = tokens(fact)
    answer_words = tokens(answer)

    if not fact_words:
        return False

    overlap = fact_words & answer_words
    score = len(overlap) / len(fact_words)

    return score >= 0.60


def expand_gold_sources(gold_sources):
    """
    Converts rubric source format:

        {
            "source": "UIAI_1.pdf",
            "pages": [9, 10, 63]
        }

    into:

        {
            ("UIAI_1.pdf", 9),
            ("UIAI_1.pdf", 10),
            ("UIAI_1.pdf", 63)
        }
    """
    gold = set()

    for item in gold_sources:
        source = item.get("source")
        pages = item.get("pages", [])

        for page in pages:
            gold.add((source, page))

    return gold


def source_match(retrieval_results, gold_sources):
    """
    Retrieval-quality proxy based on overlap between retrieved
    source/page pairs and the rubric's gold source/page pairs.
    """
    if not gold_sources:
        return None

    retrieved = {
        (item.get("source"), item.get("page"))
        for item in retrieval_results
    }

    gold = expand_gold_sources(gold_sources)

    if not gold:
        return None

    return round(len(retrieved & gold) / len(gold), 4)


def relevant_retrieval_count(retrieval_results, gold_sources):
    """
    Number of retrieved chunks whose source/page pair appears
    in the rubric gold sources.
    """
    if not gold_sources:
        return 0

    gold = expand_gold_sources(gold_sources)

    return sum(
        1
        for item in retrieval_results
        if (item.get("source"), item.get("page")) in gold
    )


def response_relevance(question, answer):
    """
    Simple topical relevance heuristic.

    1.0 = strong overlap
    0.5 = partial overlap
    0.0 = little/no overlap

    This is separate from correctness.
    """
    question_words = tokens(question)
    answer_words = tokens(answer)

    if not question_words or not answer_words:
        return 0.0

    overlap = question_words & answer_words
    score = len(overlap) / len(question_words)

    if score >= 0.50:
        return 1.0

    if score >= 0.25:
        return 0.5

    return 0.0


def abstention_answer(answer):
    """
    Q25 checks whether the model appropriately abstains
    when the requested information is not available.
    """
    text = normalize(answer)

    abstention_phrases = [
        "not available",
        "not provided",
        "not mentioned",
        "not specified",
        "cannot find",
        "cannot determine",
        "unable to find",
        "outside the handbook",
        "not covered",
        "not included",
        "refer to uidai",
        "official uidai",
        "check uidai",
    ]

    return any(
        phrase in text
        for phrase in abstention_phrases
    )


def unsupported_claim_signal(answer):
    """
    Conservative screening signal for suspicious claims.

    This is NOT proof of hallucination.
    It identifies answers that should be manually inspected.
    """
    text = normalize(answer)

    suspicious_patterns = [
        r"\b\d{8,}\b",
        r"\brs\s*\d+",
        r"\binr\s*\d+",
        r"\baccount number\b",
        r"\bbank account\b",
        r"\bpassword\b",
        r"\bcredit card\b",
        r"\bdebit card\b",
    ]

    return any(
        re.search(pattern, text)
        for pattern in suspicious_patterns
    )


def score_question(result, rubric_question):
    question_id = result["question_id"]

    generation = result.get("generation", {})
    answer = generation.get("answer", "") or ""

    retrieval = result.get("retrieval", {})
    retrieval_results = retrieval.get("results", []) or []

    generation_error = generation.get("error")

    expected_facts = rubric_question.get(
        "expected_facts",
        []
    )

    gold_sources = rubric_question.get(
        "gold_sources",
        []
    )

    # Q25 is an abstention test.
    if question_id == 25:

        correctness = (
            1.0
            if abstention_answer(answer)
            else 0.0
        )

        supported_facts = (
            1
            if correctness == 1.0
            else 0
        )

        total_expected_facts = 1

    else:

        supported_facts = sum(
            fact_supported(answer, fact)
            for fact in expected_facts
        )

        total_expected_facts = len(
            expected_facts
        )

        correctness = (
            supported_facts / total_expected_facts
            if total_expected_facts
            else 0.0
        )

    retrieval_quality = source_match(
        retrieval_results,
        gold_sources
    )

    relevant_chunks = relevant_retrieval_count(
        retrieval_results,
        gold_sources
    )

    relevance = response_relevance(
        result.get("question", ""),
        answer
    )

    hallucination_signal = unsupported_claim_signal(
        answer
    )

    # Test-pass criteria.
    if generation_error:
        test_pass = False

    elif correctness < 0.60:
        test_pass = False

    elif (
        retrieval_quality is not None
        and retrieval_quality <= 0
    ):
        test_pass = False

    elif relevance < 0.5:
        test_pass = False

    elif hallucination_signal:
        test_pass = False

    else:
        test_pass = True

    return {
        "question_id": question_id,
        "question": result.get("question"),
        "model": result.get("model"),
        "correctness_score": round(
            correctness,
            4
        ),
        "supported_facts": supported_facts,
        "total_expected_facts": total_expected_facts,
        "response_relevance": relevance,
        "retrieval_quality_score": retrieval_quality,
        "relevant_retrieved_chunks": relevant_chunks,
        "top_k": retrieval.get("top_k"),
        "hallucination_signal": hallucination_signal,
        "generation_error": generation_error,
        "test_pass": test_pass,
        "answer": answer,
    }


def main():

    with open(
        RESULTS_FILE,
        "r",
        encoding="utf-8"
    ) as f:
        results_data = json.load(f)

    with open(
        RUBRIC_FILE,
        "r",
        encoding="utf-8"
    ) as f:
        rubric_data = json.load(f)

    # IMPORTANT:
    # The rubric uses "id", while model results use "question_id".
    rubric_questions = {
        item["id"]: item
        for item in rubric_data["questions"]
    }

    output_models = []

    for model_data in results_data["models"]:

        model_name = model_data["model"]

        scored_questions = []

        for result in model_data["results"]:

            question_id = result["question_id"]

            rubric_question = rubric_questions.get(
                question_id
            )

            if rubric_question is None:
                continue

            scored = score_question(
                result,
                rubric_question
            )

            scored_questions.append(
                scored
            )

        count = len(scored_questions)

        successful = sum(
            1
            for item in scored_questions
            if not item["generation_error"]
        )

        correctness_values = [
            item["correctness_score"]
            for item in scored_questions
        ]

        retrieval_values = [
            item["retrieval_quality_score"]
            for item in scored_questions
            if item["retrieval_quality_score"] is not None
        ]

        relevance_values = [
            item["response_relevance"]
            for item in scored_questions
        ]

        hallucination_signals = sum(
            1
            for item in scored_questions
            if item["hallucination_signal"]
        )

        passes = sum(
            1
            for item in scored_questions
            if item["test_pass"]
        )

        model_output = {

            "model": model_name,

            "questions_expected": 25,

            "questions_scored": count,

            "successful_generations": successful,

            "generation_success_rate": round(
                successful / count * 100,
                2
            ) if count else 0.0,

            "average_correctness": round(
                sum(correctness_values)
                / len(correctness_values)
                * 100,
                2
            ) if correctness_values else 0.0,

            "average_response_relevance": round(
                sum(relevance_values)
                / len(relevance_values)
                * 100,
                2
            ) if relevance_values else 0.0,

            "average_retrieval_quality": round(
                sum(retrieval_values)
                / len(retrieval_values)
                * 100,
                2
            ) if retrieval_values else None,

            "hallucination_signal_rate": round(
                hallucination_signals
                / count
                * 100,
                2
            ) if count else 0.0,

            "test_pass_rate": round(
                passes
                / count
                * 100,
                2
            ) if count else 0.0,

            "questions": scored_questions
        }

        output_models.append(
            model_output
        )

    output = {

        "evaluation": {

            "rubric": rubric_data.get(
                "rubric_version"
            ),

            "source_results": str(
                RESULTS_FILE
            ),

            "note": (
                "Correctness is expected-fact coverage. "
                "Retrieval quality is a gold-page overlap proxy. "
                "Response relevance is a topical-overlap heuristic. "
                "Hallucination rate is reported as an "
                "unsupported-claim screening signal and "
                "requires manual validation."
            )
        },

        "models": output_models
    }

    OUTPUT_FILE.parent.mkdir(
        parents=True,
        exist_ok=True
    )

    with open(
        OUTPUT_FILE,
        "w",
        encoding="utf-8"
    ) as f:

        json.dump(
            output,
            f,
            indent=2,
            ensure_ascii=False
        )

    print(
        f"Created: {OUTPUT_FILE}"
    )

    print(
        "\n" + "=" * 70
    )

    print(
        "QUALITY EVALUATION SUMMARY"
    )

    print(
        "=" * 70
    )

    for model in output_models:

        print(
            f"\nMODEL: {model['model']}"
        )

        print(
            f"Questions scored: "
            f"{model['questions_scored']}/"
            f"{model['questions_expected']}"
        )

        print(
            f"Generation success: "
            f"{model['generation_success_rate']:.2f}%"
        )

        print(
            f"Average correctness: "
            f"{model['average_correctness']:.2f}%"
        )

        print(
            f"Average response relevance: "
            f"{model['average_response_relevance']:.2f}%"
        )

        if model[
            "average_retrieval_quality"
        ] is not None:

            print(
                f"Average retrieval quality: "
                f"{model['average_retrieval_quality']:.2f}%"
            )

        else:

            print(
                "Average retrieval quality: N/A"
            )

        print(
            f"Hallucination signal rate: "
            f"{model['hallucination_signal_rate']:.2f}%"
        )

        print(
            f"Test-pass rate: "
            f"{model['test_pass_rate']:.2f}%"
        )


if __name__ == "__main__":
    main()
