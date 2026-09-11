import json
import os
import re
import statistics
from collections import defaultdict

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

RESULTS_FILE = os.path.join(
    BASE_DIR,
    "evaluation",
    "results",
    "model_results_25_newmodels.json",
)

RUBRIC_FILE = os.path.join(
    BASE_DIR,
    "evaluation",
    "quality_rubric.json",
)

OUTPUT_FILE = os.path.join(
    BASE_DIR,
    "evaluation",
    "results",
    "quality_results_25_newmodels.json",
)


STOPWORDS = {
    "the", "a", "an", "and", "or", "of", "to", "for", "in", "on",
    "is", "are", "was", "were", "be", "by", "with", "from", "as",
    "at", "this", "that", "it", "its", "their", "they", "them",
    "you", "your", "can", "may", "will", "also", "into", "about",
    "what", "which", "how", "when", "where", "who", "does", "do",
    "if", "not", "only", "using", "used", "use", "provide", "provided",
}


def normalize(text):
    if not text:
        return ""
    text = str(text).lower()
    text = re.sub(r"[^a-z0-9]+", " ", text)
    return re.sub(r"\s+", " ", text).strip()


def tokens(text):
    return {
        word
        for word in normalize(text).split()
        if word not in STOPWORDS and len(word) > 2
    }


def token_overlap(text_a, text_b):
    a = tokens(text_a)
    b = tokens(text_b)

    if not b:
        return 0.0

    return len(a & b) / len(b)


def fact_supported(answer, fact):
    return token_overlap(answer, fact) >= 0.60


# ---------------------------------------------------------------------
# Abstention
# ---------------------------------------------------------------------

ABSTENTION_PHRASES = [
    "not found in the provided aadhaar handbook",
    "information was not found",
    "not available in the provided",
    "not provided in the context",
    "not present in the context",
    "not mentioned in the handbook",
    "not available in the handbook",
    "cannot find",
    "unable to find",
    "insufficient information",
    "information is not available",
    "i don't have enough information",
    "i do not have enough information",
]


def is_abstention(answer):
    if not answer:
        return False

    normalized = normalize(answer)

    return any(
        normalize(phrase) in normalized
        for phrase in ABSTENTION_PHRASES
    )


# ---------------------------------------------------------------------
# Conservative hallucination signal
# ---------------------------------------------------------------------

SUSPICIOUS_PATTERNS = [
    r"\b\d{8,}\b",
    r"\brs\.?\s*\d+",
    r"\binr\s*\d+",
    r"\baccount\s+number\b",
    r"\bbank\s+account\b",
    r"\bpassword\b",
    r"\bcredit\s+card\b",
    r"\bdebit\s+card\b",
]


def unsupported_claim_signal(answer):
    if not answer:
        return False

    return any(
        re.search(pattern, answer, flags=re.IGNORECASE)
        for pattern in SUSPICIOUS_PATTERNS
    )


# ---------------------------------------------------------------------
# Rubric helpers
# ---------------------------------------------------------------------

def build_rubric(rubric_data):
    rubric = {}

    for item in rubric_data.get("questions", []):
        rubric[str(item["id"])] = item

    return rubric


def gold_page_pairs(rubric_question):
    pairs = set()

    for source_group in rubric_question.get("gold_sources", []):
        source = source_group.get("source")

        for page in source_group.get("pages", []):
            pairs.add((source, int(page)))

    return pairs


# ---------------------------------------------------------------------
# Retrieval analysis
# ---------------------------------------------------------------------

def retrieval_analysis(result, rubric_question):
    retrieval = result.get("retrieval") or {}
    chunks = retrieval.get("results") or []

    expected_facts = rubric_question.get("expected_facts", [])
    gold_pairs = gold_page_pairs(rubric_question)

    analyzed_chunks = []

    for chunk in chunks:
        source = chunk.get("source")
        page = chunk.get("page")
        text = chunk.get("chunk", "")

        is_gold = (
            source,
            int(page) if page is not None else None
        ) in gold_pairs

        supporting_facts = []

        for fact in expected_facts:
            overlap = token_overlap(text, fact)

            if overlap >= 0.25:
                supporting_facts.append({
                    "fact": fact,
                    "overlap": round(overlap, 4),
                })

        analyzed_chunks.append({
            "source": source,
            "page": page,
            "distance": chunk.get("distance"),
            "gold_location": is_gold,
            "contains_expected_fact_signal": bool(supporting_facts),
            "supporting_facts": supporting_facts,
            "chunk": text,
        })

    count = len(analyzed_chunks)

    evidence_hits = sum(
        1
        for x in analyzed_chunks
        if x["contains_expected_fact_signal"]
    )

    gold_hits = sum(
        1
        for x in analyzed_chunks
        if x["gold_location"]
    )

    evidence_hit_rate = (
        evidence_hits / count
        if count else 0.0
    )

    gold_coverage = (
        gold_hits / len(gold_pairs)
        if gold_pairs else None
    )

    return {
        "top_k": retrieval.get("top_k"),
        "retrieved_chunks": count,
        "evidence_hit_rate": round(evidence_hit_rate, 4),
        "gold_coverage": (
            round(min(gold_coverage, 1.0), 4)
            if gold_coverage is not None
            else None
        ),
        "gold_locations_retrieved": gold_hits,
        "gold_locations_expected": len(gold_pairs),
        "chunks": analyzed_chunks,
    }


# ---------------------------------------------------------------------
# Relevance
# ---------------------------------------------------------------------

def response_relevance(question, answer):
    if not answer:
        return 0.0

    q_tokens = tokens(question)
    a_tokens = tokens(answer)

    if not q_tokens:
        return 0.0

    overlap = len(q_tokens & a_tokens) / len(q_tokens)

    if overlap >= 0.50:
        return 1.0

    if overlap >= 0.25:
        return 0.5

    return 0.0


# ---------------------------------------------------------------------
# Correctness
# ---------------------------------------------------------------------

def score_correctness(question_id, answer, rubric_question):
    if not answer:
        return 0.0, []

    if str(question_id) == "25":
        passed = is_abstention(answer)

        return (
            1.0 if passed else 0.0,
            [{
                "criterion": "explicit_abstention",
                "passed": passed,
            }],
        )

    expected_facts = rubric_question.get("expected_facts", [])

    if not expected_facts:
        return 0.0, []

    details = []

    for fact in expected_facts:
        overlap = token_overlap(answer, fact)

        details.append({
            "fact": fact,
            "overlap": round(overlap, 4),
            "supported": overlap >= 0.60,
        })

    score = (
        sum(1 for x in details if x["supported"])
        / len(details)
    )

    return score, details


# ---------------------------------------------------------------------
# Composite test
# ---------------------------------------------------------------------

def composite_test_pass(
    question_id,
    answer,
    generation_error,
    correctness,
    relevance,
    retrieval,
):
    if generation_error or not answer:
        return False

    if str(question_id) == "25":
        return is_abstention(answer)

    if correctness < 0.60:
        return False

    if relevance < 0.50:
        return False

    if retrieval["evidence_hit_rate"] <= 0:
        return False

    return True


# ---------------------------------------------------------------------
# AI Output Testing
# ---------------------------------------------------------------------

def output_testing(
    result,
    correctness,
    relevance,
    retrieval,
):
    generation = result.get("generation") or {}

    answer = generation.get("answer")
    error = generation.get("error")

    question_id = str(result.get("question_id"))

    if error:
        return {
            "pass": False,
            "checks": {
                "relevance": False,
                "supported_by_retrieved_context": False,
                "unsupported_claim_screen": False,
                "expected_format": False,
                "answer_when_information_exists": False,
                "refuse_when_information_unavailable": False,
            },
            "reason": "Generation error",
        }

    checks = {
        "relevance": relevance >= 0.50,
        "supported_by_retrieved_context": (
            question_id == "25"
            or retrieval["evidence_hit_rate"] > 0
        ),
        "unsupported_claim_screen": (
            not unsupported_claim_signal(answer)
        ),
        "expected_format": bool(
            answer and answer.strip()
        ),
        "answer_when_information_exists": (
            question_id == "25"
            or correctness > 0
        ),
        "refuse_when_information_unavailable": (
            is_abstention(answer)
            if question_id == "25"
            else True
        ),
    }

    return {
        "pass": all(checks.values()),
        "checks": checks,
        "reason": (
            "All output checks passed"
            if all(checks.values())
            else "One or more output checks failed"
        ),
    }


# ---------------------------------------------------------------------
# Performance
# ---------------------------------------------------------------------

def summarize(values):
    if not values:
        return {
            "mean": None,
            "median": None,
            "min": None,
            "max": None,
            "count": 0,
        }

    return {
        "mean": round(statistics.mean(values), 4),
        "median": round(statistics.median(values), 4),
        "min": round(min(values), 4),
        "max": round(max(values), 4),
        "count": len(values),
    }


def performance_metrics(records):
    successful = []

    for record in records:
        generation = record.get("generation") or {}

        if not generation.get("error"):
            successful.append(generation)

    latencies = [
        float(x["latency_seconds"])
        for x in successful
        if isinstance(x.get("latency_seconds"), (int, float))
    ]

    prompt_tokens = [
        float(x["prompt_tokens"])
        for x in successful
        if isinstance(x.get("prompt_tokens"), (int, float))
    ]

    output_tokens = [
        float(x["output_tokens"])
        for x in successful
        if isinstance(x.get("output_tokens"), (int, float))
    ]

    total_tokens = [
        float(x["total_tokens"])
        for x in successful
        if isinstance(x.get("total_tokens"), (int, float))
    ]

    cpu_before = []
    cpu_after = []
    memory_delta = []

    for record in records:
        resources = record.get("resources") or {}

        if isinstance(
            resources.get("cpu_before_percent"),
            (int, float),
        ):
            cpu_before.append(
                float(resources["cpu_before_percent"])
            )

        if isinstance(
            resources.get("cpu_after_percent"),
            (int, float),
        ):
            cpu_after.append(
                float(resources["cpu_after_percent"])
            )

        if isinstance(
            resources.get("memory_delta_mb"),
            (int, float),
        ):
            memory_delta.append(
                float(resources["memory_delta_mb"])
            )

    return {
        "successful_generations": len(successful),
        "generation_failures": (
            len(records) - len(successful)
        ),

        "response_latency_seconds": summarize(latencies),

        "token_usage": {
            "prompt_tokens": summarize(prompt_tokens),
            "output_tokens": summarize(output_tokens),
            "total_tokens": summarize(total_tokens),
        },

        "evaluator_process_cpu_percent_snapshot": {
            "before": summarize(cpu_before),
            "after": summarize(cpu_after),
            "note": (
                "CPU percentage snapshots are measurements of the "
                "evaluation process, not isolated Ollama model CPU usage."
            ),
        },

        "evaluator_process_memory_delta_mb": summarize(
            memory_delta
        ),

        "resource_note": (
            "Resource values were collected by the evaluation process. "
            "They should not be interpreted as direct isolated model "
            "resource consumption."
        ),
    }


# ---------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------

def main():
    with open(RESULTS_FILE, "r", encoding="utf-8") as f:
        results_data = json.load(f)

    with open(RUBRIC_FILE, "r", encoding="utf-8") as f:
        rubric_data = json.load(f)

    rubric = build_rubric(rubric_data)

    grouped = defaultdict(list)

    for result in results_data.get("results", []):
        grouped[result["model"]].append(result)

    output = {
        "evaluation_version": "week4_25_questions_newmodels_v2",
        "questions_expected": 25,
        "models": list(grouped.keys()),
        "total_recorded_runs": len(
            results_data.get("results", [])
        ),

        "metric_methodology": {
            "correctness": (
                "Expected-fact coverage using normalized lexical "
                "overlap. A fact is supported when answer/fact token "
                "overlap is >= 0.60. This is a heuristic proxy and "
                "not a substitute for human semantic review."
            ),
            "response_relevance": (
                "Question-answer token overlap: >=0.50 = full relevance, "
                ">=0.25 = partial relevance, otherwise zero."
            ),
            "retrieval_evidence_hit_rate": (
                "Number of retrieved chunks containing lexical support "
                "for at least one expected fact divided by retrieved "
                "chunks."
            ),
            "retrieval_gold_coverage": (
                "Retrieved gold source/page locations divided by the "
                "number of gold source/page locations specified in the "
                "rubric, capped at 100%."
            ),
            "hallucination_signal_rate": (
                "Rate of answers triggering conservative unsupported-"
                "claim patterns. This is a screening signal, not a "
                "confirmed hallucination rate."
            ),
            "composite_test_pass_rate": (
                "Successful generation plus correctness >=60%, "
                "relevance >=50%, and at least one retrieval chunk "
                "with evidence support. Q25 requires abstention."
            ),
            "latency": (
                "Wall-clock generation latency recorded by the "
                "evaluation runner."
            ),
            "token_usage": (
                "Prompt, output, and total tokens returned by Ollama."
            ),
            "resource_usage": (
                "Evaluator-process CPU percentage snapshots and "
                "memory delta. These are not isolated Ollama model "
                "resource measurements."
            ),
            "ai_output_testing": (
                "Independent pass/fail checks covering relevance, "
                "retrieved-context support, unsupported-claim screening, "
                "expected format, answering when information exists, "
                "and abstention when information is unavailable."
            ),
        },

        "models_results": {},
    }

    # ---------------------------------------------------------------
    # Model scoring
    # ---------------------------------------------------------------

    for model_name, records in grouped.items():
        questions = []

        hallucination_signals = 0
        composite_passes = 0
        output_test_passes = 0
        generation_failures = 0

        for result in records:
            question_id = str(result["question_id"])
            rubric_question = rubric.get(question_id, {})

            generation = result.get("generation") or {}

            answer = generation.get("answer")
            error = generation.get("error")

            if error:
                generation_failures += 1

            correctness, fact_details = score_correctness(
                question_id,
                answer,
                rubric_question,
            )

            relevance = response_relevance(
                result.get("question", ""),
                answer,
            )

            retrieval = retrieval_analysis(
                result,
                rubric_question,
            )

            hallucination = unsupported_claim_signal(answer)

            if hallucination:
                hallucination_signals += 1

            test_pass = composite_test_pass(
                question_id,
                answer,
                error,
                correctness,
                relevance,
                retrieval,
            )

            if test_pass:
                composite_passes += 1

            ai_test = output_testing(
                result,
                correctness,
                relevance,
                retrieval,
            )

            if ai_test["pass"]:
                output_test_passes += 1

            questions.append({
                "question_id": result["question_id"],
                "question": result["question"],
                "answer": answer,
                "correctness": round(correctness, 4),
                "response_relevance": round(relevance, 4),
                "retrieval": retrieval,
                "hallucination_signal": hallucination,
                "generation_error": error,
                "composite_test_pass": test_pass,
                "ai_output_testing": ai_test,
                "fact_details": fact_details,
            })

        count = len(questions)

        avg_correctness = (
            statistics.mean(
                x["correctness"]
                for x in questions
            ) * 100
            if questions else 0
        )

        avg_relevance = (
            statistics.mean(
                x["response_relevance"]
                for x in questions
            ) * 100
            if questions else 0
        )

        retrieval_hit_rates = [
            x["retrieval"]["evidence_hit_rate"]
            for x in questions
            if x["retrieval"]["retrieved_chunks"] > 0
        ]

        gold_coverages = [
            x["retrieval"]["gold_coverage"]
            for x in questions
            if x["retrieval"]["gold_coverage"] is not None
        ]

        output["models_results"][model_name] = {
            "question_count": count,

            "generation_success_rate_percent": round(
                (
                    (count - generation_failures)
                    / count
                    * 100
                )
                if count else 0,
                2,
            ),

            "average_correctness_percent": round(
                avg_correctness,
                2,
            ),

            "average_response_relevance_percent": round(
                avg_relevance,
                2,
            ),

            "retrieval": {
                "average_evidence_hit_rate_percent": round(
                    statistics.mean(retrieval_hit_rates) * 100,
                    2,
                ) if retrieval_hit_rates else 0,

                "average_gold_coverage_percent": round(
                    statistics.mean(gold_coverages) * 100,
                    2,
                ) if gold_coverages else 0,

                "note": (
                    "Retrieval is produced by the shared Week 3 "
                    "retrieval service using the same knowledge base "
                    "and top-k condition for all three models."
                ),
            },

            "hallucination_signal_rate_percent": round(
                hallucination_signals / count * 100
                if count else 0,
                2,
            ),

            "composite_test_pass_rate_percent": round(
                composite_passes / count * 100
                if count else 0,
                2,
            ),

            "ai_output_testing": {
                "pass_rate_percent": round(
                    output_test_passes / count * 100
                    if count else 0,
                    2,
                ),
                "passed": output_test_passes,
                "total": count,
            },

            "performance": performance_metrics(records),

            "questions": questions,
        }

    # ---------------------------------------------------------------
    # Shared retrieval pipeline
    # ---------------------------------------------------------------

    shared = []

    seen = set()

    for result in results_data.get("results", []):
        question_id = result["question_id"]

        if question_id in seen:
            continue

        seen.add(question_id)

        rubric_question = rubric.get(
            str(question_id),
            {},
        )

        shared.append({
            "question_id": question_id,
            **retrieval_analysis(
                result,
                rubric_question,
            ),
        })

    evidence_rates = [
        x["evidence_hit_rate"]
        for x in shared
    ]

    gold_rates = [
        x["gold_coverage"]
        for x in shared
        if x["gold_coverage"] is not None
    ]

    output["shared_retrieval_pipeline"] = {
        "questions_analyzed": len(shared),

        "average_evidence_hit_rate_percent": round(
            statistics.mean(evidence_rates) * 100,
            2,
        ) if evidence_rates else 0,

        "average_gold_coverage_percent": round(
            statistics.mean(gold_rates) * 100,
            2,
        ) if gold_rates else 0,

        "condition": (
            "Same Week 3 retrieval service, same knowledge base, "
            "same top_k=3 condition for all models."
        ),

        "questions": shared,
    }

    # ---------------------------------------------------------------
    # Save
    # ---------------------------------------------------------------

    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        json.dump(
            output,
            f,
            indent=2,
            ensure_ascii=False,
        )

    print(f"Saved: {OUTPUT_FILE}")
    print()

    for model, data in output["models_results"].items():
        latency = (
            data["performance"]
            ["response_latency_seconds"]
            ["mean"]
        )

        total_tokens = (
            data["performance"]
            ["token_usage"]
            ["total_tokens"]
            ["mean"]
        )

        print(model)
        print(
            f'  Generation success: '
            f'{data["generation_success_rate_percent"]:.2f}%'
        )
        print(
            f'  Correctness: '
            f'{data["average_correctness_percent"]:.2f}%'
        )
        print(
            f'  Relevance: '
            f'{data["average_response_relevance_percent"]:.2f}%'
        )
        print(
            f'  Retrieval evidence hit: '
            f'{data["retrieval"]["average_evidence_hit_rate_percent"]:.2f}%'
        )
        print(
            f'  Retrieval gold coverage: '
            f'{data["retrieval"]["average_gold_coverage_percent"]:.2f}%'
        )
        print(
            f'  Hallucination signal: '
            f'{data["hallucination_signal_rate_percent"]:.2f}%'
        )
        print(
            f'  Composite test pass: '
            f'{data["composite_test_pass_rate_percent"]:.2f}%'
        )
        print(
            f'  AI output testing: '
            f'{data["ai_output_testing"]["pass_rate_percent"]:.2f}%'
        )
        print(
            f'  Mean latency: '
            f'{latency:.2f}s'
            if latency is not None
            else '  Mean latency: N/A'
        )
        print(
            f'  Mean total tokens: '
            f'{total_tokens:.1f}'
            if total_tokens is not None
            else '  Mean total tokens: N/A'
        )
        print()


if __name__ == "__main__":
    main()
