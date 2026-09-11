import json
import os
import re

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
    "rag_analysis_25_newmodels.json",
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


def overlap(text_a, text_b):
    a = tokens(text_a)
    b = tokens(text_b)

    if not b:
        return 0.0

    return len(a & b) / len(b)


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

    text = normalize(answer)

    return any(
        normalize(phrase) in text
        for phrase in ABSTENTION_PHRASES
    )


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
        re.search(pattern, answer, re.IGNORECASE)
        for pattern in SUSPICIOUS_PATTERNS
    )


def build_rubric(data):
    return {
        str(q["id"]): q
        for q in data.get("questions", [])
    }


def gold_locations(rubric_question):
    locations = []

    for source_group in rubric_question.get("gold_sources", []):
        source = source_group.get("source")

        for page in source_group.get("pages", []):
            locations.append({
                "source": source,
                "page": page,
            })

    return locations


def analyze_context(result, rubric_question):
    retrieval = result.get("retrieval") or {}

    chunks = retrieval.get("results") or []

    expected_facts = rubric_question.get(
        "expected_facts",
        [],
    )

    gold = gold_locations(rubric_question)

    gold_pairs = {
        (x["source"], int(x["page"]))
        for x in gold
    }

    chunk_analysis = []

    for chunk in chunks:
        source = chunk.get("source")
        page = chunk.get("page")
        text = chunk.get("chunk", "")

        pair = (
            source,
            int(page) if page is not None else None,
        )

        supported_facts = []

        for fact in expected_facts:
            score = overlap(text, fact)

            if score >= 0.25:
                supported_facts.append({
                    "fact": fact,
                    "overlap": round(score, 4),
                })

        chunk_analysis.append({
            "source": source,
            "page": page,
            "distance": chunk.get("distance"),
            "gold_location": pair in gold_pairs,
            "supporting_facts": supported_facts,
            "chunk": text,
        })

    supported_fact_ids = []

    for index, fact in enumerate(expected_facts):
        fact_supported = False

        for chunk in chunks:
            score = overlap(
                chunk.get("chunk", ""),
                fact,
            )

            if score >= 0.25:
                fact_supported = True
                break

        if fact_supported:
            supported_fact_ids.append(index)

    missing_fact_ids = [
        i
        for i in range(len(expected_facts))
        if i not in supported_fact_ids
    ]

    gold_retrieved = [
        item
        for item in chunk_analysis
        if item["gold_location"]
    ]

    return {
        "top_k": retrieval.get("top_k"),
        "retrieval_latency_seconds": retrieval.get(
            "latency_seconds"
        ),

        "gold_locations": gold,
        "gold_locations_retrieved": gold_retrieved,

        "retrieved_chunk_count": len(chunk_analysis),

        "retrieved_gold_location_count": len(
            gold_retrieved
        ),

        "expected_fact_count": len(
            expected_facts
        ),

        "facts_with_context_support": [
            expected_facts[i]
            for i in supported_fact_ids
        ],

        "facts_missing_from_retrieved_context": [
            expected_facts[i]
            for i in missing_fact_ids
        ],

        "chunk_analysis": chunk_analysis,
    }


def assess_rag_flow(
    question_id,
    answer,
    rag,
):
    facts_supported = len(
        rag["facts_with_context_support"]
    )

    facts_missing = len(
        rag["facts_missing_from_retrieved_context"]
    )

    total_facts = rag["expected_fact_count"]

    if total_facts:
        context_fact_coverage = (
            facts_supported / total_facts
        )
    else:
        context_fact_coverage = None

    abstained = is_abstention(answer)

    unsupported_signal = unsupported_claim_signal(
        answer
    )

    # Q25 is explicitly designed to test information
    # unavailable in the handbook.
    if str(question_id) == "25":
        if abstained:
            assessment = (
                "Appropriate abstention for out-of-KB question."
            )
        else:
            assessment = (
                "Inappropriate answer: expected abstention "
                "because the rubric provides no gold evidence."
            )

    elif context_fact_coverage == 0:
        if abstained:
            assessment = (
                "Appropriate abstention because retrieved "
                "context lacks expected answer evidence."
            )
        else:
            assessment = (
                "Context insufficient, but model answered. "
                "Review for unsupported claims."
            )

    elif context_fact_coverage < 1:
        if abstained:
            assessment = (
                "Partial context support; model abstained "
                "despite some evidence being retrieved."
            )
        else:
            assessment = (
                "Partial context support; response should be "
                "checked against missing facts."
            )

    else:
        if abstained:
            assessment = (
                "Relevant evidence was retrieved, but the model "
                "abstained despite sufficient context."
            )
        else:
            assessment = (
                "Retrieved context contains support for all "
                "expected facts; response should be checked "
                "for faithful use of that evidence."
            )

    return {
        "context_fact_coverage": (
            round(context_fact_coverage, 4)
            if context_fact_coverage is not None
            else None
        ),

        "facts_supported_by_context": facts_supported,
        "facts_missing_from_context": facts_missing,

        "model_abstained": abstained,

        "unsupported_claim_signal": unsupported_signal,

        "assessment": assessment,
    }


def main():
    with open(
        RESULTS_FILE,
        "r",
        encoding="utf-8",
    ) as f:
        results_data = json.load(f)

    with open(
        RUBRIC_FILE,
        "r",
        encoding="utf-8",
    ) as f:
        rubric_data = json.load(f)

    rubric = build_rubric(rubric_data)

    records = []

    for result in results_data.get("results", []):
        question_id = str(result["question_id"])

        rubric_question = rubric.get(
            question_id,
            {},
        )

        generation = result.get(
            "generation"
        ) or {}

        answer = generation.get("answer")

        rag = analyze_context(
            result,
            rubric_question,
        )

        flow = assess_rag_flow(
            question_id,
            answer,
            rag,
        )

        records.append({
            "question_id": result["question_id"],
            "question": result["question"],
            "model": result["model"],

            "retrieval": rag,

            "response": {
                "answer": answer,
                "latency_seconds": generation.get(
                    "latency_seconds"
                ),
                "error": generation.get("error"),
            },

            "rag_flow_analysis": flow,
        })

    output = {
        "evaluation_version": (
            "week4_rag_analysis_25_newmodels"
        ),

        "record_count": len(records),

        "methodology": {
            "retrieved_context": (
                "The exact context retrieved by the Week 3 "
                "retrieval service and passed to the LLM."
            ),
            "context_support": (
                "A retrieved chunk is considered to provide "
                "lexical support for an expected fact when "
                "normalized token overlap with that fact is "
                "at least 0.25. This is an automated proxy, "
                "not human semantic judgment."
            ),
            "gold_location": (
                "A retrieved source/page pair is a gold location "
                "when it matches a source/page specified by "
                "quality_rubric.json."
            ),
            "unsupported_claim_signal": (
                "Conservative screening patterns only. A signal "
                "does not prove hallucination."
            ),
            "assessment": (
                "Qualitative automated classification of the "
                "retrieval-context-response relationship."
            ),
        },

        "records": records,
    }

    with open(
        OUTPUT_FILE,
        "w",
        encoding="utf-8",
    ) as f:
        json.dump(
            output,
            f,
            indent=2,
            ensure_ascii=False,
        )

    print(
        f"Saved: {OUTPUT_FILE}"
    )

    print(
        f"Records: {len(records)}"
    )

    models = sorted({
        x["model"]
        for x in records
    })

    print(
        f"Models: {len(models)}"
    )

    for model in models:
        count = sum(
            1
            for x in records
            if x["model"] == model
        )

        print(
            f"  {model}: {count} records"
        )


if __name__ == "__main__":
    main()
