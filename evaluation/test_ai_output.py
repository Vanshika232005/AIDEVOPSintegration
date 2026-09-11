import json
import re
from pathlib import Path

INPUT_FILE = Path("evaluation/results/rag_analysis_25_newmodels.json")
OUTPUT_FILE = Path("evaluation/results/ai_output_test_results.json")

ABSTENTION_PHRASES = [
    "information was not found",
    "not found in the provided",
    "not available in the provided",
    "does not provide",
    "not available in the handbook",
    "cannot be found in the handbook",
    "information is not available",
    "not specified in the provided",
    "not mentioned in the provided",
    "unable to find",
]

def is_abstention(answer):
    text = answer if isinstance(answer, str) else ""
    text = text.lower()
    return any(phrase in text for phrase in ABSTENTION_PHRASES)


def is_valid_text(answer):
    if not isinstance(answer, str):
        return False

    text = answer.strip()

    if not text:
        return False

    malformed = [
        "traceback",
        "internal server error",
        "connection error",
        "httpconnectionpool",
    ]

    return not any(token in text.lower() for token in malformed)


def relevance_test(question, answer):
    """
    Lightweight relevance check.

    A valid abstention is considered relevant because it directly
    addresses the inability to answer from the available evidence.
    For non-abstaining answers, at least one meaningful question
    term must occur in the answer.
    """
    if is_abstention(answer):
        return True

    if not isinstance(answer, str):
        return False

    q_tokens = set(
        re.findall(r"[a-zA-Z]{4,}", question.lower())
    )

    a_tokens = set(
        re.findall(r"[a-zA-Z]{4,}", answer.lower())
    )

    stopwords = {
        "what", "when", "where", "which", "does",
        "have", "been", "that", "this", "from",
        "with", "your", "their", "should", "could",
        "would", "about", "during", "there",
        "information", "provided", "using",
        "according", "handbook",
    }

    meaningful_q = q_tokens - stopwords

    return bool(meaningful_q & a_tokens)


def run_output_tests(record):
    question = record["question"]
    answer = record["response"].get("answer")

    analysis = record["rag_flow_analysis"]

    context_coverage = analysis.get(
        "context_fact_coverage", 0.0
    )

    facts_supported = analysis.get(
        "facts_supported_by_context", 0
    )

    facts_missing = analysis.get(
        "facts_missing_from_context", 0
    )

    model_abstained = analysis.get(
        "model_abstained", False
    )

    unsupported_claim_signal = analysis.get(
        "unsupported_claim_signal", False
    )

    sufficient_context = (
        context_coverage >= 1.0
        and facts_missing == 0
        and facts_supported > 0
    )

    # ------------------------------------------------------------
    # 1. RELEVANCE
    # ------------------------------------------------------------
    relevance_pass = relevance_test(
        question,
        answer
    )

    # ------------------------------------------------------------
    # 2. CONTEXT SUPPORT
    #
    # If the answer is produced from sufficient retrieved
    # evidence, there must be no detected unsupported-claim signal.
    #
    # If the context is insufficient, the safe behavior is
    # abstention rather than unsupported completion.
    # ------------------------------------------------------------
    if sufficient_context:
        context_support_pass = (
            not model_abstained
            and not unsupported_claim_signal
        )
    else:
        context_support_pass = (
            model_abstained
            and not unsupported_claim_signal
        )

    # ------------------------------------------------------------
    # 3. UNSUPPORTED CLAIMS
    # ------------------------------------------------------------
    unsupported_claim_pass = (
        not unsupported_claim_signal
    )

    # ------------------------------------------------------------
    # 4. FORMAT
    # ------------------------------------------------------------
    format_pass = is_valid_text(answer)

    # ------------------------------------------------------------
    # 5. EXPECTED BEHAVIOR
    #
    # Sufficient evidence -> answer.
    # Insufficient evidence -> abstain.
    # ------------------------------------------------------------
    if sufficient_context:
        expected_behavior = "answer"
        behavior_pass = (
            not model_abstained
            and format_pass
        )
    else:
        expected_behavior = "abstain_or_caveat"
        behavior_pass = (
            model_abstained
            and format_pass
        )

    overall_pass = all([
        relevance_pass,
        context_support_pass,
        unsupported_claim_pass,
        format_pass,
        behavior_pass,
    ])

    return {
        "question_id": record["question_id"],
        "question": question,
        "model": record["model"],
        "expected_behavior": expected_behavior,
        "actual_behavior": (
            "abstain"
            if model_abstained
            else "answer"
        ),
        "context_fact_coverage": context_coverage,
        "facts_supported_by_context": facts_supported,
        "facts_missing_from_context": facts_missing,

        "relevance_pass": relevance_pass,
        "context_support_pass": context_support_pass,
        "unsupported_claim_pass": unsupported_claim_pass,
        "format_pass": format_pass,
        "behavior_pass": behavior_pass,
        "overall_pass": overall_pass,

        "unsupported_claim_signal": unsupported_claim_signal,

        "answer": answer,

        "latency_seconds": record["response"].get(
            "latency_seconds"
        ),
    }


def calculate_rate(results, field):
    total = len(results)

    if total == 0:
        return 0.0

    passed = sum(
        1 for result in results
        if result[field]
    )

    return round(
        passed / total * 100,
        2
    )


def main():
    if not INPUT_FILE.exists():
        raise FileNotFoundError(
            f"Input file not found: {INPUT_FILE}"
        )

    with INPUT_FILE.open() as f:
        data = json.load(f)

    records = data["records"]

    results = [
        run_output_tests(record)
        for record in records
    ]

    total = len(results)

    summary = {
        "total_outputs": total,

        "overall_passed": sum(
            r["overall_pass"]
            for r in results
        ),

        "overall_pass_rate_percent": calculate_rate(
            results,
            "overall_pass"
        ),

        "relevance_pass_rate_percent": calculate_rate(
            results,
            "relevance_pass"
        ),

        "context_support_pass_rate_percent": calculate_rate(
            results,
            "context_support_pass"
        ),

        "unsupported_claim_pass_rate_percent": calculate_rate(
            results,
            "unsupported_claim_pass"
        ),

        "format_pass_rate_percent": calculate_rate(
            results,
            "format_pass"
        ),

        "behavior_pass_rate_percent": calculate_rate(
            results,
            "behavior_pass"
        ),
    }

    output = {
        "evaluation_version": "ai_output_testing_v2",

        "input": str(INPUT_FILE),

        "methodology": {
            "relevance": (
                "Non-abstaining answers must contain "
                "meaningful terminology related to the question. "
                "Valid abstentions are treated as relevant responses."
            ),

            "context_support": (
                "When retrieved context is sufficient, the model "
                "must answer without an unsupported-claim signal. "
                "When retrieved context is insufficient, the model "
                "must abstain without an unsupported-claim signal."
            ),

            "unsupported_claims": (
                "The existing RAG analysis must not identify "
                "an unsupported-claim signal."
            ),

            "format": (
                "The output must be a non-empty string and must "
                "not contain obvious malformed or runtime-error output."
            ),

            "expected_behavior": (
                "If all expected facts are supported by retrieved "
                "context, the expected behavior is to answer. "
                "If required information is missing from retrieved "
                "context, the expected behavior is to abstain."
            ),

            "overall_pass": (
                "All five AI output criteria must pass."
            ),

            "evaluation_scope": (
                "The same 75 previously generated model responses "
                "were tested; no new LLM generation was performed."
            ),
        },

        "summary": summary,

        "results": results,
    }

    OUTPUT_FILE.parent.mkdir(
        parents=True,
        exist_ok=True
    )

    with OUTPUT_FILE.open("w") as f:
        json.dump(
            output,
            f,
            indent=2,
            ensure_ascii=False
        )

    print("=" * 60)
    print("AI OUTPUT TESTING V2 SUMMARY")
    print("=" * 60)

    for key, value in summary.items():
        print(f"{key}: {value}")

    print()
    print(f"Results saved to: {OUTPUT_FILE}")


if __name__ == "__main__":
    main()
