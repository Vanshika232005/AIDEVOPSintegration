import json
import os
import time
import requests
import psutil
from datetime import datetime

# ============================================================
# WEEK 4 CONFIGURATION
# ============================================================

MODELS = [
    "qwen2.5-coder:1.5b",
    "llama3.2:3b",
    "deepseek-coder:1.3b"
]

QUESTIONS_FILE = os.environ.get("QUESTIONS_FILE", "evaluation/questions.json")
RESULTS_FILE = os.environ.get("RESULTS_FILE", "evaluation/results/model_results_25_newmodels.json")

RETRIEVAL_URL = "http://localhost:8001/retrieve"
OLLAMA_CHAT_URL = "http://localhost:11434/api/chat"

TOP_K = 3

os.makedirs("evaluation/results", exist_ok=True)


# ============================================================
# LOAD QUESTIONS
# ============================================================

with open(QUESTIONS_FILE, "r", encoding="utf-8") as f:
    questions = json.load(f)


# ============================================================
# RESOURCE MEASUREMENT
# ============================================================

def get_memory_mb():
    process = psutil.Process(os.getpid())
    return process.memory_info().rss / (1024 * 1024)


def get_cpu_percent():
    return psutil.cpu_percent(interval=0.1)


# ============================================================
# RETRIEVAL
# ============================================================

def retrieve(question):
    start = time.perf_counter()

    response = requests.post(
        RETRIEVAL_URL,
        json={
            "question": question,
            "top_k": TOP_K
        },
        timeout=120
    )

    response.raise_for_status()

    latency = time.perf_counter() - start

    return response.json()["results"], latency


# ============================================================
# BUILD CONTEXT
# ============================================================

def build_context(results):
    parts = []

    for result in results:
        parts.append(
            f"""
Source: {result['source']}
Page: {result['page']}

{result['chunk']}
"""
        )

    return "\n".join(parts)


# ============================================================
# LLM GENERATION
# ============================================================

def generate_answer(model, question, context):

    prompt = f"""
You are an Aadhaar information assistant.

Answer the user's question using ONLY the information
provided in the Aadhaar Handbook context below.

Rules:
1. Do not invent information.
2. Do not use outside knowledge.
3. If the answer is not present in the context, say:
   "The information was not found in the provided Aadhaar Handbook."
4. Give a clear and concise answer.
5. Mention the relevant page number when possible.

Aadhaar Handbook Context:
{context}

User Question:
{question}

Answer:
"""

    start = time.perf_counter()

    response = requests.post(
        OLLAMA_CHAT_URL,
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
                "temperature": 0.2,
                "num_ctx": 4096
            }
        },
        timeout=300
    )

    response.raise_for_status()

    latency = time.perf_counter() - start

    data = response.json()

    answer = data["message"]["content"]

    return {
        "answer": answer,
        "latency_seconds": latency,
        "prompt_tokens": data.get("prompt_eval_count", 0),
        "output_tokens": data.get("eval_count", 0),
        "total_tokens": (
            data.get("prompt_eval_count", 0)
            + data.get("eval_count", 0)
        ),
        "total_duration_ns": data.get("total_duration", 0),
        "load_duration_ns": data.get("load_duration", 0),
        "prompt_eval_duration_ns": data.get(
            "prompt_eval_duration", 0
        ),
        "eval_duration_ns": data.get(
            "eval_duration", 0
        )
    }


# ============================================================
# UNLOAD OLLAMA MODEL
# ============================================================

def unload_model(model):
    try:
        requests.post(
            OLLAMA_CHAT_URL,
            json={
                "model": model,
                "messages": [],
                "keep_alive": 0
            },
            timeout=30
        )
        time.sleep(2)
        print(f"  Unloaded model: {model}")
    except Exception as e:
        print(f"  Model unload warning: {e}")


# ============================================================
# MAIN EVALUATION
# ============================================================

print("=" * 80)
print("WEEK 4 — AADHAAR LLM MODEL EVALUATION")
print("=" * 80)

print(f"Questions: {len(questions)}")
print(f"Models: {len(MODELS)}")
print(f"Top-K retrieval: {TOP_K}")
print(f"Started: {datetime.now().isoformat()}")

all_results = []

for model in MODELS:

    print("\n")
    print("=" * 80)
    print(f"EVALUATING MODEL: {model}")
    print("=" * 80)

    model_results = []

    for index, item in enumerate(questions, start=1):

        question_id = item["id"]
        question = item["question"]

        print(
            f"\n[{index}/{len(questions)}] "
            f"Q{question_id}: {question}"
        )

        memory_before = get_memory_mb()
        cpu_before = get_cpu_percent()

        # ----------------------------------------------------
        # RETRIEVAL
        # ----------------------------------------------------

        retrieval_error = None

        try:
            retrieved_results, retrieval_latency = retrieve(
                question
            )
        except Exception as e:
            retrieved_results = []
            retrieval_latency = None
            retrieval_error = str(e)

        # ----------------------------------------------------
        # GENERATION
        # ----------------------------------------------------

        generation = None
        generation_error = None

        if retrieval_error is None:

            context = build_context(retrieved_results)

            try:
                generation = generate_answer(
                    model,
                    question,
                    context
                )
            except Exception as e:
                generation_error = str(e)

        else:
            context = ""

        memory_after = get_memory_mb()
        cpu_after = get_cpu_percent()

        # ----------------------------------------------------
        # RETRIEVAL INFORMATION
        # ----------------------------------------------------

        retrieved_pages = [
            result.get("page")
            for result in retrieved_results
        ]

        retrieved_distances = [
            result.get("distance")
            for result in retrieved_results
        ]

        # ----------------------------------------------------
        # RESULT RECORD
        # ----------------------------------------------------

        result = {
            "model": model,
            "question_id": question_id,
            "question": question,

            "retrieval": {
                "top_k": TOP_K,
                "latency_seconds": retrieval_latency,
                "pages": retrieved_pages,
                "distances": retrieved_distances,
                "results": retrieved_results,
                "error": retrieval_error
            },

            "context": context,

            "generation": (
                {
                    "answer": generation["answer"],
                    "latency_seconds":
                        generation["latency_seconds"],
                    "prompt_tokens":
                        generation["prompt_tokens"],
                    "output_tokens":
                        generation["output_tokens"],
                    "total_tokens":
                        generation["total_tokens"],
                    "total_duration_ns":
                        generation["total_duration_ns"],
                    "load_duration_ns":
                        generation["load_duration_ns"],
                    "prompt_eval_duration_ns":
                        generation[
                            "prompt_eval_duration_ns"
                        ],
                    "eval_duration_ns":
                        generation[
                            "eval_duration_ns"
                        ],
                    "error": None
                }
                if generation is not None
                else {
                    "answer": None,
                    "latency_seconds": None,
                    "prompt_tokens": 0,
                    "output_tokens": 0,
                    "total_tokens": 0,
                    "total_duration_ns": 0,
                    "load_duration_ns": 0,
                    "prompt_eval_duration_ns": 0,
                    "eval_duration_ns": 0,
                    "error": generation_error
                }
            ),

            "resources": {
                "cpu_before_percent": cpu_before,
                "cpu_after_percent": cpu_after,
                "memory_before_mb": memory_before,
                "memory_after_mb": memory_after,
                "memory_delta_mb": max(
                    0,
                    memory_after - memory_before
                )
            }
        }

        model_results.append(result)

        # ----------------------------------------------------
        # TERMINAL SUMMARY
        # ----------------------------------------------------

        if retrieval_error:
            print(f"  Retrieval ERROR: {retrieval_error}")

        elif generation_error:
            print(
                f"  Retrieval: "
                f"{retrieval_latency:.3f}s"
            )
            print(
                f"  Generation ERROR: "
                f"{generation_error}"
            )

        else:
            print(
                f"  Retrieval: "
                f"{retrieval_latency:.3f}s"
            )
            print(
                f"  Generation: "
                f"{generation['latency_seconds']:.3f}s"
            )
            print(
                f"  Tokens: "
                f"{generation['total_tokens']}"
            )
            print(
                f"  Answer: "
                f"{generation['answer'][:120]}..."
            )

    all_results.append({
        "model": model,
        "questions_expected": len(questions),
        "questions_recorded": len(model_results),
        "results": model_results
    })

    # Unload completed model before starting the next model.
    unload_model(model)


# ============================================================
# SAVE RESULTS
# ============================================================

output = {
    "evaluation": {
        "timestamp": datetime.now().isoformat(),
        "questions": len(questions),
        "models": MODELS,
        "top_k": TOP_K
    },
    "models": all_results
}

with open(
    RESULTS_FILE,
    "w",
    encoding="utf-8"
) as f:
    json.dump(
        output,
        f,
        indent=2,
        ensure_ascii=False
    )


# ============================================================
# FINAL SUMMARY
# ============================================================

print("\n")
print("=" * 80)
print("WEEK 4 EVALUATION COMPLETE")
print("=" * 80)

for model_data in all_results:

    model = model_data["model"]
    results = model_data["results"]

    successful = [
        r for r in results
        if r["generation"]["error"] is None
    ]

    print(f"\nMODEL: {model}")
    print(
        f"Questions recorded: "
        f"{len(results)}/{len(questions)}"
    )
    print(
        f"Successful generations: "
        f"{len(successful)}/{len(questions)}"
    )

    if successful:

        retrieval_latencies = [
            r["retrieval"]["latency_seconds"]
            for r in successful
            if isinstance(r["retrieval"].get("latency_seconds"), (int, float))
        ]

        generation_latencies = [
            r["generation"]["latency_seconds"]
            for r in successful
            if isinstance(r["generation"].get("latency_seconds"), (int, float))
        ]

        output_tokens = [
            r["generation"]["output_tokens"]
            for r in successful
        ]

        total_tokens = [
            r["generation"]["total_tokens"]
            for r in successful
        ]

        print(
            f"Average retrieval latency: "
            f"{sum(retrieval_latencies) / len(retrieval_latencies):.3f}s"
        )

        print(
            f"Average generation latency: "
            f"{sum(generation_latencies) / len(generation_latencies):.3f}s"
        )

        total_latency_values = [
            r["retrieval"]["latency_seconds"]
            + r["generation"]["latency_seconds"]
            for r in successful
            if isinstance(r["retrieval"].get("latency_seconds"), (int, float))
            and isinstance(r["generation"].get("latency_seconds"), (int, float))
        ]

        if total_latency_values:
            print(
                f"Average total latency: "
                f"{sum(total_latency_values) / len(total_latency_values):.3f}s"
            )

        print(
            f"Average output tokens: "
            f"{sum(output_tokens) / len(output_tokens):.2f}"
        )

        print(
            f"Average total tokens: "
            f"{sum(total_tokens) / len(total_tokens):.2f}"
        )

print("\nDetailed results saved to:")
print(RESULTS_FILE)

print("=" * 80)
