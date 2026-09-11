import json
import re
import subprocess
import sys
import tempfile
import time
from pathlib import Path

import requests
import psutil


MODELS = [
    "qwen2.5-coder:1.5b",
    "llama3.2:3b",
    "deepseek-coder:1.3b"
]

OLLAMA_URL = "http://localhost:11434/api/chat"
RETRIEVAL_URL = "http://localhost:8001/retrieve"

QUESTIONS_FILE = Path("evaluation/questions_v5.json")
OUTPUT_FILE = Path("evaluation/results/model_results_v5_newmodels.json")

PROJECT_ROOT = Path("..").resolve()

CODE_GENERATION_TEST_DIR = Path("evaluation/tests/code_generation")
REFACTORING_TEST_DIR = Path("evaluation/tests/refactoring")


def load_questions():
    with open(QUESTIONS_FILE, "r", encoding="utf-8") as f:
        return json.load(f)["tasks"]


def read_target_files(target_files):
    parts = []

    for relative_path in target_files:
        path = PROJECT_ROOT / relative_path

        if not path.exists():
            parts.append(
                f"\n===== FILE: {relative_path} =====\n"
                "[FILE NOT FOUND]\n"
            )
            continue

        try:
            content = path.read_text(encoding="utf-8")
        except UnicodeDecodeError:
            content = path.read_text(
                encoding="utf-8",
                errors="replace"
            )

        parts.append(
            f"\n===== FILE: {relative_path} =====\n"
            f"{content}\n"
            f"===== END FILE: {relative_path} =====\n"
        )

    return "\n".join(parts)


def build_code_prompt(task):
    code_context = read_target_files(task["target_files"])

    code_instruction = ""

    if task["category"] == "Code Generation":
        code_instruction = """
CODE OUTPUT REQUIREMENT:
Generate the requested Python implementation.

Return the implementation inside a single Python code block.
Do not return an entire unrelated file.
Do not include explanations outside the code block.
""".strip()

    elif task["category"] == "Refactoring":
        code_instruction = """
CODE OUTPUT REQUIREMENT:
Return the complete refactored version of the primary target file.

Return ONLY the complete Python file inside a single Python code block.
Preserve unrelated existing functionality.
Do not include explanations outside the code block.
""".strip()

    else:
        code_instruction = """
Answer the task directly in normal text.
""".strip()

    return f"""
You are being evaluated on a software-engineering task.

CATEGORY:
{task["category"]}

TASK:
{task["task"]}

RELEVANT PROJECT FILES:
{code_context}

INSTRUCTIONS:
- Base your answer on the supplied project files.
- Do not invent files, functions, APIs, variables, or behavior.
- Do not modify the production project.
- Do not claim that code was tested unless tests were actually executed.
- Keep the answer focused on the task.

{code_instruction}
""".strip()


def get_resource_snapshot():
    process = psutil.Process()
    memory_mb = process.memory_info().rss / (1024 * 1024)
    cpu_times = process.cpu_times()

    return {
        "memory_mb": memory_mb,
        "cpu_user_seconds": cpu_times.user,
        "cpu_system_seconds": cpu_times.system
    }


def call_ollama(model, prompt):
    resource_before = get_resource_snapshot()
    start = time.perf_counter()

    response = requests.post(
        OLLAMA_URL,
        json={
            "model": model,
            "messages": [
                {
                    "role": "user",
                    "content": prompt
                }
            ],
            "stream": False,
            "think": False,
            "options": {
                "temperature": 0.1,
                "num_ctx": 8192
            },
            "keep_alive": 0
        },
        timeout=300
    )

    latency = time.perf_counter() - start

    response.raise_for_status()

    data = response.json()
    message = data.get("message", {})
    answer = message.get("content", "")

    resource_after = get_resource_snapshot()

    return {
        "answer": answer,
        "latency_seconds": latency,
        "prompt_tokens": data.get("prompt_eval_count"),
        "output_tokens": data.get("eval_count"),
        "total_tokens": (
            (data.get("prompt_eval_count") or 0)
            + (data.get("eval_count") or 0)
        ),
        "cpu_user_seconds": (
            resource_after["cpu_user_seconds"]
            - resource_before["cpu_user_seconds"]
        ),
        "cpu_system_seconds": (
            resource_after["cpu_system_seconds"]
            - resource_before["cpu_system_seconds"]
        ),
        "memory_before_mb": resource_before["memory_mb"],
        "memory_after_mb": resource_after["memory_mb"],
        "memory_delta_mb": (
            resource_after["memory_mb"]
            - resource_before["memory_mb"]
        )
    }

def extract_code(answer):
    """
    Extract Python code from a Markdown code block.
    If no code fence exists, return the complete answer.
    """

    matches = re.findall(
        r"```(?:python|py)?\s*(.*?)```",
        answer,
        flags=re.DOTALL | re.IGNORECASE
    )

    if matches:
        return matches[0].strip()

    return answer.strip()


def test_file_for_task(task_id, candidate_path):
    """
    Execute the dedicated automated test against the isolated candidate.
    """

    if task_id.startswith("GEN-"):
        test_file = CODE_GENERATION_TEST_DIR / f"test_{task_id.lower().replace('-', '_')}.py"
    elif task_id.startswith("REF-"):
        test_file = REFACTORING_TEST_DIR / f"test_{task_id.lower().replace('-', '_')}.py"
    else:
        return {
            "test_passed": None,
            "test_output": "",
            "test_return_code": None
        }

    if not test_file.exists():
        return {
            "test_passed": False,
            "test_output": f"Test file not found: {test_file}",
            "test_return_code": None
        }

    command = [
        sys.executable,
        str(test_file),
        str(candidate_path)
    ]

    completed = subprocess.run(
        command,
        capture_output=True,
        text=True,
        timeout=120
    )

    output = (
        completed.stdout
        + "\n"
        + completed.stderr
    ).strip()

    return {
        "test_passed": completed.returncode == 0,
        "test_output": output,
        "test_return_code": completed.returncode
    }


def run_code_generation_test(task, answer):
    """
    Code Generation tasks produce a helper/function.
    The test itself determines whether the generated implementation
    satisfies the task requirements.
    """

    code = extract_code(answer)

    with tempfile.TemporaryDirectory(
        prefix=f"gen_{task['id'].lower()}_"
    ) as temp_dir:

        candidate_path = Path(temp_dir) / "candidate.py"
        candidate_path.write_text(
            code,
            encoding="utf-8"
        )

        result = test_file_for_task(
            task["id"],
            candidate_path
        )

    return result


def run_refactoring_test(task, answer):
    """
    Refactoring tasks require a complete replacement file.
    The replacement is written only to a temporary directory.
    """

    code = extract_code(answer)

    with tempfile.TemporaryDirectory(
        prefix=f"ref_{task['id'].lower()}_"
    ) as temp_dir:

        candidate_path = Path(temp_dir) / "candidate.py"

        candidate_path.write_text(
            code,
            encoding="utf-8"
        )

        result = test_file_for_task(
            task["id"],
            candidate_path
        )

    return result


def run_rag_task(model, task):
    """
    RAG evaluation:
    1. Retrieve evidence once.
    2. Give identical evidence to the selected model.
    3. Record retrieval and generation metrics separately.
    """

    retrieval_start = time.perf_counter()

    response = requests.post(
        RETRIEVAL_URL,
        json={
            "question": task["task"],
            "top_k": 3
        },
        timeout=300
    )

    retrieval_latency = time.perf_counter() - retrieval_start
    response.raise_for_status()

    retrieval_data = response.json()
    results = retrieval_data.get("results", [])

    if not results:
        return {
            "answer": (
                "The information was not found in the provided "
                "Aadhaar Handbook."
            ),
            "sources": [],
            "retrieval_latency_seconds": retrieval_latency,
            "generation_latency_seconds": 0.0,
            "latency_seconds": retrieval_latency,
            "prompt_tokens": None,
            "output_tokens": None,
            "total_tokens": None,
            "cpu_user_seconds": None,
            "cpu_system_seconds": None,
            "memory_before_mb": None,
            "memory_after_mb": None,
            "memory_delta_mb": None
        }

    context_parts = []

    for i, result in enumerate(results, start=1):
        context_parts.append(
            f"""
--- DOCUMENT {i} ---
Source: {result.get("source", "Unknown")}
Page: {result.get("page", "Unknown")}

Content:
{result.get("chunk", "")}
""".strip()
        )

    context = "\n\n".join(context_parts)

    prompt = f"""
You are an Aadhaar information assistant.

Answer the user's question using ONLY the provided Aadhaar Handbook
context.

STRICT RULES:
1. Use only information present in the supplied context.
2. Do not use general knowledge.
3. Do not invent or guess information.
4. If the answer is not supported by the context, say:
   "The information was not found in the provided Aadhaar Handbook."
5. Give a concise and direct answer.
6. Do not mention that you are an AI or language model.

Aadhaar Handbook Context:
-------------------------
{context}
-------------------------

User Question:
{task["task"]}

Answer:
""".strip()

    generation_result = call_ollama(model, prompt)

    total_latency = (
        retrieval_latency
        + generation_result["latency_seconds"]
    )

    return {
        "answer": generation_result["answer"],
        "sources": [
            {
                "source": result.get("source"),
                "page": result.get("page"),
                "distance": result.get("distance")
            }
            for result in results
        ],
        "retrieval_latency_seconds": retrieval_latency,
        "generation_latency_seconds": (
            generation_result["latency_seconds"]
        ),
        "latency_seconds": total_latency,
        "prompt_tokens": generation_result["prompt_tokens"],
        "output_tokens": generation_result["output_tokens"],
        "total_tokens": generation_result["total_tokens"],
        "cpu_user_seconds": generation_result["cpu_user_seconds"],
        "cpu_system_seconds": generation_result["cpu_system_seconds"],
        "memory_before_mb": generation_result["memory_before_mb"],
        "memory_after_mb": generation_result["memory_after_mb"],
        "memory_delta_mb": generation_result["memory_delta_mb"]
    }


def run_model(model, tasks):
    results = []

    print()
    print("=" * 80)
    print(f"MODEL: {model}")
    print("=" * 80)

    for number, task in enumerate(tasks, start=1):

        print(
            f"[{number:02d}/{len(tasks)}] "
            f"{task['id']} | {task['category']}"
        )

        try:

            if task["category"] == "RAG based Question":

                result = run_rag_task(model, task)

                results.append({
                    "task_id": task["id"],
                    "category": task["category"],
                    "task": task["task"],
                    "model": model,
                    "answer": result["answer"],
                    "sources": result["sources"],
                    "latency_seconds": result["latency_seconds"],
                    "retrieval_latency_seconds": (
                        result["retrieval_latency_seconds"]
                    ),
                    "generation_latency_seconds": (
                        result["generation_latency_seconds"]
                    ),
                    "prompt_tokens": result["prompt_tokens"],
                    "output_tokens": result["output_tokens"],
                    "total_tokens": result["total_tokens"],
                    "cpu_user_seconds": None,
                    "cpu_system_seconds": None,
                    "memory_before_mb": None,
                    "memory_after_mb": None,
                    "memory_delta_mb": None,
                    "test_passed": None,
                    "test_output": "",
                    "status": "success"
                })

            else:

                prompt = build_code_prompt(task)
                result = call_ollama(model, prompt)

                test_result = {
                    "test_passed": None,
                    "test_output": "",
                    "test_return_code": None
                }

                if task["category"] == "Code Generation":
                    test_result = run_code_generation_test(
                        task,
                        result["answer"]
                    )

                elif task["category"] == "Refactoring":
                    test_result = run_refactoring_test(
                        task,
                        result["answer"]
                    )

                results.append({
                    "task_id": task["id"],
                    "category": task["category"],
                    "task": task["task"],
                    "model": model,
                    "answer": result["answer"],
                    "sources": [],
                    "latency_seconds": result["latency_seconds"],
                    "retrieval_latency_seconds": None,
                    "generation_latency_seconds": (
                        result["latency_seconds"]
                    ),
                    "prompt_tokens": result["prompt_tokens"],
                    "output_tokens": result["output_tokens"],
                    "total_tokens": result["total_tokens"],
                    "cpu_user_seconds": result["cpu_user_seconds"],
                    "cpu_system_seconds": result["cpu_system_seconds"],
                    "memory_before_mb": result["memory_before_mb"],
                    "memory_after_mb": result["memory_after_mb"],
                    "memory_delta_mb": result["memory_delta_mb"],
                    "test_passed": test_result["test_passed"],
                    "test_output": test_result["test_output"],
                    "test_return_code": (
                        test_result["test_return_code"]
                    ),
                    "status": (
                        "success"
                        if test_result["test_passed"] is not False
                        else "test_failed"
                    )
                })

                if task["category"] in [
                    "Code Generation",
                    "Refactoring"
                ]:
                    print(
                        "  Automated test:",
                        "PASS" if test_result["test_passed"]
                        else "FAIL"
                    )

        except Exception as e:

            print(f"  ERROR: {e}")

            results.append({
                "task_id": task["id"],
                "category": task["category"],
                "task": task["task"],
                "model": model,
                "answer": "",
                "sources": [],
                "latency_seconds": None,
                "retrieval_latency_seconds": None,
                "generation_latency_seconds": None,
                "prompt_tokens": None,
                "output_tokens": None,
                "total_tokens": None,
                "test_passed": False
                if task["category"] in [
                    "Code Generation",
                    "Refactoring"
                ]
                else None,
                "test_output": "",
                "test_return_code": None,
                "status": "error",
                "error": str(e)
            })

    return results


def save_results(all_results, tasks):
    OUTPUT_FILE.parent.mkdir(parents=True, exist_ok=True)

    output = {
        "evaluation_version": "5.1_newmodels",
        "task_count": len(tasks),
        "model_count": len(MODELS),
        "expected_evaluations": len(tasks) * len(MODELS),
        "actual_evaluations": len(all_results),
        "models": MODELS,
        "results": all_results
    }

    temp_file = OUTPUT_FILE.with_suffix(".tmp")

    with open(temp_file, "w", encoding="utf-8") as f:
        json.dump(
            output,
            f,
            indent=2,
            ensure_ascii=False
        )

    temp_file.replace(OUTPUT_FILE)


def load_existing_results():
    if not OUTPUT_FILE.exists():
        return []

    try:
        with open(OUTPUT_FILE, "r", encoding="utf-8") as f:
            data = json.load(f)

        results = data.get("results", [])

        if isinstance(results, list):
            return results

    except Exception as e:
        print(f"Warning: could not load existing checkpoint: {e}")

    return []


def main():

    tasks = load_questions()

    print(f"Loaded {len(tasks)} evaluation tasks.")
    print(f"Models: {', '.join(MODELS)}")
    print(f"Expected evaluations: {len(tasks) * len(MODELS)}")
    print()

    all_results = load_existing_results()

    completed = {
        (r.get("model"), r.get("task_id"))
        for r in all_results
        if r.get("model") and r.get("task_id")
    }

    if completed:
        print(
            f"Resuming from checkpoint: "
            f"{len(completed)} evaluations already completed."
        )
        print()

    for model in MODELS:

        remaining_tasks = [
            task
            for task in tasks
            if (model, task["id"]) not in completed
        ]

        if not remaining_tasks:
            print(f"{model}: all tasks already completed.")
            continue

        print()
        print("=" * 80)
        print(f"STARTING MODEL: {model}")
        print(
            f"Remaining tasks for this model: "
            f"{len(remaining_tasks)}"
        )
        print("=" * 80)

        for task_number, task in enumerate(
            remaining_tasks,
            start=1
        ):

            print(
                f"[{task_number:02d}/{len(remaining_tasks)}] "
                f"{task['id']} | {task['category']}"
            )

            try:

                if task["category"] == "RAG based Question":

                    result = run_rag_task(model, task)

                    record = {
                        "task_id": task["id"],
                        "category": task["category"],
                        "task": task["task"],
                        "model": model,
                        "answer": result["answer"],
                        "sources": result["sources"],
                        "latency_seconds": result["latency_seconds"],
                        "retrieval_latency_seconds": (
                            result["retrieval_latency_seconds"]
                        ),
                        "generation_latency_seconds": (
                            result["generation_latency_seconds"]
                        ),
                        "prompt_tokens": result["prompt_tokens"],
                        "output_tokens": result["output_tokens"],
                        "total_tokens": result["total_tokens"],
                        "cpu_user_seconds": None,
                        "cpu_system_seconds": None,
                        "memory_before_mb": None,
                        "memory_after_mb": None,
                        "memory_delta_mb": None,
                        "test_passed": None,
                        "test_output": "",
                        "status": "success"
                    }

                else:

                    prompt = build_code_prompt(task)
                    result = call_ollama(model, prompt)

                    test_result = {
                        "test_passed": None,
                        "test_output": "",
                        "test_return_code": None
                    }

                    if task["category"] == "Code Generation":
                        test_result = run_code_generation_test(
                            task,
                            result["answer"]
                        )

                    elif task["category"] == "Refactoring":
                        test_result = run_refactoring_test(
                            task,
                            result["answer"]
                        )

                    record = {
                        "task_id": task["id"],
                        "category": task["category"],
                        "task": task["task"],
                        "model": model,
                        "answer": result["answer"],
                        "sources": [],
                        "latency_seconds": result["latency_seconds"],
                        "retrieval_latency_seconds": None,
                        "generation_latency_seconds": (
                            result["latency_seconds"]
                        ),
                        "prompt_tokens": result["prompt_tokens"],
                        "output_tokens": result["output_tokens"],
                        "total_tokens": result["total_tokens"],
                        "cpu_user_seconds": result["cpu_user_seconds"],
                        "cpu_system_seconds": result["cpu_system_seconds"],
                        "memory_before_mb": result["memory_before_mb"],
                        "memory_after_mb": result["memory_after_mb"],
                        "memory_delta_mb": result["memory_delta_mb"],
                        "test_passed": test_result["test_passed"],
                        "test_output": test_result["test_output"],
                        "test_return_code": (
                            test_result["test_return_code"]
                        ),
                        "status": (
                            "success"
                            if test_result["test_passed"] is not False
                            else "test_failed"
                        )
                    }

                    if task["category"] in [
                        "Code Generation",
                        "Refactoring"
                    ]:
                        print(
                            "  Automated test:",
                            "PASS"
                            if test_result["test_passed"]
                            else "FAIL"
                        )

            except Exception as e:

                print(f"  ERROR: {e}")

                record = {
                    "task_id": task["id"],
                    "category": task["category"],
                    "task": task["task"],
                    "model": model,
                    "answer": "",
                    "sources": [],
                    "latency_seconds": None,
                    "retrieval_latency_seconds": None,
                    "generation_latency_seconds": None,
                    "prompt_tokens": None,
                    "output_tokens": None,
                    "total_tokens": None,
                    "cpu_user_seconds": None,
                    "cpu_system_seconds": None,
                    "memory_before_mb": None,
                    "memory_after_mb": None,
                    "memory_delta_mb": None,
                    "test_passed": (
                        False
                        if task["category"] in [
                            "Code Generation",
                            "Refactoring"
                        ]
                        else None
                    ),
                    "test_output": "",
                    "test_return_code": None,
                    "status": "error",
                    "error": str(e)
                }

            all_results.append(record)
            completed.add((model, task["id"]))

            # Save immediately after every completed task.
            save_results(all_results, tasks)

            print(
                f"  Checkpoint saved "
                f"({len(all_results)}/{len(tasks) * len(MODELS)})"
            )

        # Make sure the Ollama model is unloaded before moving
        # to the next model.
        try:
            requests.post(
                OLLAMA_URL,
                json={
                    "model": model,
                    "keep_alive": 0,
                    "stream": False
                },
                timeout=30
            )
            print(f"Unloaded model: {model}")
        except Exception as e:
            print(f"Warning: could not unload {model}: {e}")

    save_results(all_results, tasks)

    print()
    print("=" * 80)
    print("EVALUATION COMPLETE")
    print("=" * 80)
    print(f"Tasks: {len(tasks)}")
    print(f"Models: {len(MODELS)}")
    print(
        f"Expected evaluations: "
        f"{len(tasks) * len(MODELS)}"
    )
    print(f"Actual evaluations: {len(all_results)}")
    print(f"Saved to: {OUTPUT_FILE}")


if __name__ == "__main__":
    main()
