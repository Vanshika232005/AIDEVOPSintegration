import json
from collections import defaultdict
from pathlib import Path
from statistics import mean


RESULTS_FILE = Path(
    "evaluation/results/model_results_v5_newmodels.json"
)

RAG_ANALYSIS_FILE = Path(
    "evaluation/results/rag_analysis_25_newmodels.json"
)

OUTPUT_FILE = Path(
    "evaluation/results/quality_results_v5_newmodels_corrected.json"
)

MODELS = [
    "qwen2.5-coder:1.5b",
    "llama3.2:3b",
    "deepseek-coder:1.3b",
]


def pct(value, total):
    return round((value / total) * 100, 2) if total else 0.0


def avg(rows, key):
    values = [
        r[key]
        for r in rows
        if isinstance(r.get(key), (int, float))
    ]
    return round(mean(values), 4) if values else 0.0


def score_rag(rows):
    """
    RAG scoring uses the dedicated 25-question RAG analysis.

    Retrieval is shared across models because the same retrieval
    results were supplied to each model. Therefore retrieval is
    reported as a shared pipeline metric rather than a model winner.

    Grounded correctness:
        average context-supported expected-fact coverage.

    Unsupported-claim rate:
        automated unsupported-claim signal / 25.

    Abstention:
        appropriate abstention means:
          - model abstained when context was insufficient, OR
          - model abstained on the explicit out-of-KB question (Q25).

        inappropriate abstention means:
          - model abstained despite sufficient context.
    """

    total = len(rows)

    context_sufficient = sum(
        r["rag_flow_analysis"]["context_fact_coverage"] >= 1.0
        for r in rows
    )

    facts_supported = sum(
        r["rag_flow_analysis"]["facts_supported_by_context"]
        for r in rows
    )

    facts_missing = sum(
        r["rag_flow_analysis"]["facts_missing_from_context"]
        for r in rows
    )

    expected_facts = sum(
        len(r["retrieval"].get("gold_locations", []))
        for r in []
    )

    # The dedicated analysis already gives per-question coverage.
    grounded_correctness = round(
        mean(
            r["rag_flow_analysis"]["context_fact_coverage"]
            for r in rows
        ) * 100,
        2
    )

    unsupported_claims = sum(
        bool(r["rag_flow_analysis"]["unsupported_claim_signal"])
        for r in rows
    )

    appropriate_abstentions = 0
    inappropriate_abstentions = 0

    for r in rows:
        flow = r["rag_flow_analysis"]
        qid = r["question_id"]
        abstained = bool(flow["model_abstained"])
        coverage = float(flow["context_fact_coverage"])

        if not abstained:
            continue

        if coverage < 1.0 or qid == 25:
            appropriate_abstentions += 1
        else:
            inappropriate_abstentions += 1

    # Shared retrieval statistics.
    retrieved_gold_locations = [
        r["retrieval"].get("gold_locations_retrieved", [])
        for r in rows
    ]

    retrieved_gold_count = sum(
        len(x) for x in retrieved_gold_locations
    )

    total_gold_count = sum(
        len(r["retrieval"].get("gold_locations", []))
        for r in rows
    )

    retrieval_gold_coverage = pct(
        retrieved_gold_count,
        total_gold_count
    )

    return {
        "questions": total,

        "context_sufficient_count": context_sufficient,
        "context_sufficiency_percent": pct(
            context_sufficient,
            total
        ),

        "facts_supported": facts_supported,
        "facts_missing": facts_missing,

        "grounded_answer_correctness_percent":
            grounded_correctness,

        "unsupported_claim_signal_count":
            unsupported_claims,

        "unsupported_claim_signal_rate_percent":
            pct(unsupported_claims, total),

        "appropriate_abstention_count":
            appropriate_abstentions,

        "appropriate_abstention_rate_percent":
            pct(appropriate_abstentions, total),

        "inappropriate_abstention_count":
            inappropriate_abstentions,

        "inappropriate_abstention_rate_percent":
            pct(inappropriate_abstentions, total),

        "shared_retrieval_gold_location_coverage_percent":
            retrieval_gold_coverage,

        "retrieval_is_shared_across_models": True,

        "avg_response_latency_seconds":
            avg(rows, "response_latency_seconds"),

        "avg_output_tokens":
            avg(rows, "response_output_tokens"),

        "avg_total_tokens":
            avg(rows, "response_total_tokens"),
    }


def main():
    if not RESULTS_FILE.exists():
        raise FileNotFoundError(
            f"Missing {RESULTS_FILE}"
        )

    if not RAG_ANALYSIS_FILE.exists():
        raise FileNotFoundError(
            f"Missing {RAG_ANALYSIS_FILE}"
        )

    with RESULTS_FILE.open("r", encoding="utf-8") as f:
        raw = json.load(f)

    with RAG_ANALYSIS_FILE.open("r", encoding="utf-8") as f:
        rag_data = json.load(f)

    results = raw["results"]
    rag_records = rag_data["records"]

    by_model_raw = defaultdict(list)
    by_model_rag = defaultdict(list)

    for r in results:
        by_model_raw[r["model"]].append(r)

    for r in rag_records:
        by_model_rag[r["model"]].append(r)

    output = {
        "evaluation_version":
            "week4_quality_v5_newmodels_corrected",

        "models": MODELS,

        "methodology": {
            "rag_source":
                "evaluation/results/rag_analysis_25_newmodels.json",

            "rag_retrieval":
                "Retrieval is shared across all three models because the same retrieval pipeline and retrieved context were used.",

            "grounded_answer_correctness":
                "Mean expected-fact coverage supported by the retrieved context.",

            "unsupported_claim_rate":
                "Percentage of responses flagged by the automated evaluator as containing unsupported factual claims. This is a proxy, not human-confirmed hallucination.",

            "appropriate_abstention":
                "Abstention when context is insufficient or when the explicit out-of-KB question requires refusal.",

            "inappropriate_abstention":
                "Abstention when the retrieved context contains sufficient evidence.",

            "retrieval_comparison_rule":
                "Retrieval quality is reported as a shared pipeline metric and is not used to rank the models."
        },

        "rag": {},
    }

    for model in MODELS:
        rows = by_model_rag[model]

        if len(rows) != 25:
            raise ValueError(
                f"{model}: expected 25 RAG records, found {len(rows)}"
            )

        output["rag"][model] = score_rag(rows)

    # ---------------------------------------------------------
    # Also preserve useful global execution/performance data
    # from the 105-task evaluation.
    # ---------------------------------------------------------

    output["global_execution"] = {}

    for model in MODELS:
        rows = by_model_raw[model]

        successful = sum(
            r.get("status") == "success"
            for r in rows
        )

        test_failed = sum(
            r.get("status") == "test_failed"
            for r in rows
        )

        errors = sum(
            r.get("status") == "error"
            for r in rows
        )

        output["global_execution"][model] = {
            "evaluation_records": len(rows),
            "execution_success_percent": pct(
                successful,
                len(rows)
            ),
            "test_failed_count": test_failed,
            "error_count": errors,
            "avg_latency_seconds": avg(
                rows,
                "latency_seconds"
            ),
            "avg_output_tokens": avg(
                rows,
                "output_tokens"
            ),
            "avg_total_tokens": avg(
                rows,
                "total_tokens"
            ),
        }

    OUTPUT_FILE.parent.mkdir(
        parents=True,
        exist_ok=True
    )

    temp_file = OUTPUT_FILE.with_suffix(".tmp")

    with temp_file.open("w", encoding="utf-8") as f:
        json.dump(
            output,
            f,
            indent=2,
            ensure_ascii=False
        )

    temp_file.replace(OUTPUT_FILE)

    print("=" * 80)
    print("CORRECTED RAG SCORING COMPLETE")
    print("=" * 80)
    print(f"Output: {OUTPUT_FILE}")

    print("\nRAG RESULTS")
    print("-" * 80)

    for model in MODELS:
        r = output["rag"][model]

        print(f"\n{model}")
        print(
            f"  Context sufficient: "
            f"{r['context_sufficiency_percent']}%"
        )
        print(
            f"  Grounded correctness: "
            f"{r['grounded_answer_correctness_percent']}%"
        )
        print(
            f"  Unsupported-claim rate: "
            f"{r['unsupported_claim_signal_rate_percent']}%"
        )
        print(
            f"  Appropriate abstention: "
            f"{r['appropriate_abstention_rate_percent']}%"
        )
        print(
            f"  Inappropriate abstention: "
            f"{r['inappropriate_abstention_rate_percent']}%"
        )
        print(
            f"  Shared retrieval gold coverage: "
            f"{r['shared_retrieval_gold_location_coverage_percent']}%"
        )

    print("\n" + "=" * 80)


if __name__ == "__main__":
    main()
