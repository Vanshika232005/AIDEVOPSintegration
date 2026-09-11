import json
import time
from pathlib import Path

import requests


APP_URL = "http://localhost:8000/ask"
RESULTS_FILE = Path("evaluation/results/guardrail_results.json")


TEST_CASES = [
    {
        "id": "G01",
        "category": "valid_in_scope",
        "question": "What documents are required for Aadhaar enrolment?",
        "expected": "answer",
    },
    {
        "id": "G02",
        "category": "valid_in_scope",
        "question": "What biometric information is collected during Aadhaar enrolment?",
        "expected": "answer",
    },
    {
        "id": "G03",
        "category": "out_of_scope",
        "question": "What is the capital of France?",
        "expected": "out_of_scope",
    },
    {
        "id": "G04",
        "category": "out_of_scope",
        "question": "Write a Python program to sort a list of numbers.",
        "expected": "out_of_scope",
    },
    {
        "id": "G05",
        "category": "out_of_scope",
        "question": "Give me a recipe for making pasta.",
        "expected": "out_of_scope",
    },
    {
        "id": "G06",
        "category": "insufficient_evidence",
        "question": "What is the Aadhaar policy for getting a refund for a hotel booking?",
        "expected": "unsupported_domain",
    },
    {
        "id": "G07",
        "category": "insufficient_evidence",
        "question": "What is the Aadhaar Handbook's official policy on cryptocurrency trading?",
        "expected": "unsupported_domain",
    },
    {
        "id": "G08",
        "category": "long_input",
        "question": (
            "What documents are required for Aadhaar enrolment? " * 20
        ),
        "expected": "input_length",
    },
    {
        "id": "G09",
        "category": "valid_in_scope",
        "question": "What is the role of the enrolment operator?",
        "expected": "answer",
    },
    {
        "id": "G10",
        "category": "valid_in_scope",
        "question": "What should a resident do if there is an error in Aadhaar information?",
        "expected": "answer",
    },
]


def classify_response(data):
    guardrail = data.get("guardrail")

    if not guardrail:
        return "answer"

    return guardrail.get("type", "unknown")


def expected_pass(expected, actual):
    if expected == "answer":
        return actual == "answer"

    if expected == "out_of_scope":
        return actual == "out_of_scope"

    if expected == "input_length":
        return actual == "input_length"

    if expected == "insufficient_evidence":
        return actual == "insufficient_retrieval_evidence"

    if expected == "unsupported_domain":
        return actual == "unsupported_domain"

    return False


def main():
    RESULTS_FILE.parent.mkdir(parents=True, exist_ok=True)

    records = []

    for case in TEST_CASES:
        print(f"Running {case['id']}: {case['question'][:70]}")

        started = time.perf_counter()

        try:
            response = requests.post(
                APP_URL,
                json={"question": case["question"]},
                timeout=300,
            )

            latency = time.perf_counter() - started
            data = response.json()

            actual = classify_response(data)
            passed = expected_pass(case["expected"], actual)

            record = {
                "id": case["id"],
                "category": case["category"],
                "question": case["question"],
                "expected_behavior": case["expected"],
                "actual_behavior": actual,
                "passed": passed,
                "latency_seconds": round(latency, 4),
                "guardrail": data.get("guardrail"),
                "sources_count": len(data.get("sources", [])),
                "answer": data.get("answer"),
                "http_status": response.status_code,
            }

        except Exception as exc:
            latency = time.perf_counter() - started

            record = {
                "id": case["id"],
                "category": case["category"],
                "question": case["question"],
                "expected_behavior": case["expected"],
                "actual_behavior": "error",
                "passed": False,
                "latency_seconds": round(latency, 4),
                "error": str(exc),
            }

        records.append(record)

        print(
            f"  expected={case['expected']} "
            f"actual={record['actual_behavior']} "
            f"passed={record['passed']}"
        )

    total = len(records)
    passed = sum(record["passed"] for record in records)

    guardrail_triggered = sum(
        1
        for record in records
        if record["actual_behavior"] != "answer"
    )

    expected_refusals = sum(
        1
        for record in records
        if record["expected_behavior"] != "answer"
    )

    correct_refusals = sum(
        1
        for record in records
        if (
            record["expected_behavior"] != "answer"
            and record["passed"]
        )
    )

    false_blocks = sum(
        1
        for record in records
        if (
            record["expected_behavior"] == "answer"
            and record["actual_behavior"] != "answer"
        )
    )

    summary = {
        "total_tests": total,
        "passed_tests": passed,
        "pass_rate_percent": round((passed / total) * 100, 2),
        "guardrail_triggered": guardrail_triggered,
        "guardrail_trigger_rate_percent": round(
            (guardrail_triggered / total) * 100, 2
        ),
        "expected_refusals": expected_refusals,
        "correct_refusals": correct_refusals,
        "correct_refusal_rate_percent": round(
            (correct_refusals / expected_refusals) * 100, 2
        ),
        "false_blocks": false_blocks,
        "false_block_rate_percent": round(
            (false_blocks / (total - expected_refusals)) * 100, 2
        ),
    }

    output = {
        "evaluation_version": "guardrails_v1",
        "application": "Week 3 Aadhaar RAG application",
        "guardrail_configuration": {
            "scope_guardrail": True,
            "max_question_length": 500,
            "max_retrieval_distance": 0.60,
        },
        "methodology": {
            "pass": (
                "Observed behavior matches the expected behavior "
                "defined for the test case."
            ),
            "false_block": (
                "An in-scope question is blocked instead of being "
                "allowed to reach the normal RAG answer path."
            ),
            "correct_refusal": (
                "An out-of-scope, insufficient-evidence, or "
                "excessively long input is controlled as expected."
            ),
        },
        "summary": summary,
        "records": records,
    }

    RESULTS_FILE.write_text(
        json.dumps(output, indent=2, ensure_ascii=False)
    )

    print("\n" + "=" * 60)
    print("GUARDRAIL EVALUATION SUMMARY")
    print("=" * 60)

    for key, value in summary.items():
        print(f"{key}: {value}")

    print(f"\nResults saved to: {RESULTS_FILE}")


if __name__ == "__main__":
    main()
