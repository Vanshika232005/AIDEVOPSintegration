import json
import time
import requests
import psutil
import os
import statistics

# ============================================================
# CONFIGURATION
# ============================================================

MODELS = [
    "qwen3:0.6b",
    "gemma3:270m",
    "smollm2:360m"
]

OLLAMA_CHAT_URL = "http://localhost:11434/api/chat"
OLLAMA_EMBED_URL = "http://localhost:11434/api/embed"

EMBEDDING_MODEL = "nomic-embed-text"

QUESTIONS_FILE = "evaluation/questions.json"
RESULTS_FILE = "evaluation/results/model_results.json"

TOP_K = 3

# ============================================================
# DIRECTORIES
# ============================================================

os.makedirs("evaluation/results", exist_ok=True)


# ============================================================
# LOAD QUESTIONS
# ============================================================

with open(QUESTIONS_FILE, "r", encoding="utf-8") as f:
    questions = json.load(f)


# ============================================================
# SYSTEM RESOURCE MEASUREMENT
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
        "http://localhost:8001/retrieve",
        json={
            "question": question,
            "top_k": TOP_K
        },
        timeout=120
    )

    response.raise_for_status()

    data = response.json()

    latency = time.perf_counter() - start

    return data["results"], latency


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
# MAIN EVALUATION
# ============================================================

all_results = []

print("=" * 80)
print("AADHAAR MODEL QUANTITATIVE EVALUATION")
print("=" * 80)

print(f"\nQuestions: {len(questions)}")
print(f"Models: {len(MODELS)}")
print(f"Top-K retrieval: {TOP_K}")

for model in MODELS:

    print("\n")
    print("=" * 80)
    print(f"EVALUATING MODEL: {model}")
    print("=" * 80)

    model_results = []

    for index, item in enumerate(questions, start=1):

        question = item["question"]

        print(
            f"\n[{index}/{len(questions)}] "
            f"{question}"
        )

        # ----------------------------------------------------
        # System resources before request
        # ----------------------------------------------------

        memory_before = get_memory_mb()
        cpu_before = get_cpu_percent()

        # ----------------------------------------------------
        # Retrieval
        # ----------------------------------------------------

        try:

            retrieved_results, retrieval_latency = retrieve(
                question
            )

        except Exception as e:

            print("Retrieval ERROR:", e)

            continue

        context = build_context(
            retrieved_results
        )

        # ----------------------------------------------------
        # LLM
        # ----------------------------------------------------

        try:

            generation = generate_answer(
                model,
                question,
                context
            )

        except Exception as e:

            print("LLM ERROR:", e)

            continue

        # ----------------------------------------------------
        # System resources after request
        # ----------------------------------------------------

        memory_after = get_memory_mb()
        cpu_after = get_cpu_percent()

        memory_used = max(
            0,
            memory_after - memory_before
        )

        # ----------------------------------------------------
        # Retrieval information
        # ----------------------------------------------------

        retrieved_pages = [
            result["page"]
            for result in retrieved_results
        ]

        retrieved_distances = [
            result["distance"]
            for result in retrieved_results
        ]

        # ----------------------------------------------------
        # Store result
        # ----------------------------------------------------

        result = {

            "model": model,

            "question_id": item["id"],

            "question": question,

            "retrieval": {

                "top_k": TOP_K,

                "latency_seconds":
                    retrieval_latency,

                "pages":
                    retrieved_pages,

                "distances":
                    retrieved_distances,

                "results":
                    retrieved_results
            },

            "generation": {

                "answer":
                    generation["answer"],

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
                    ]
            },

            "resources": {

                "cpu_before_percent":
                    cpu_before,

                "cpu_after_percent":
                    cpu_after,

                "memory_before_mb":
                    memory_before,

                "memory_after_mb":
                    memory_after,

                "memory_delta_mb":
                    memory_used
            }
        }

        model_results.append(result)

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
            f"{generation['answer'][:100]}..."
        )

    # --------------------------------------------------------
    # Add model results
    # --------------------------------------------------------

    all_results.append({
        "model": model,
        "results": model_results
    })


# ============================================================
# SAVE RESULTS
# ============================================================

with open(
    RESULTS_FILE,
    "w",
    encoding="utf-8"
) as f:

    json.dump(
        all_results,
        f,
        indent=2,
        ensure_ascii=False
    )


# ============================================================
# SUMMARY
# ============================================================

print("\n")
print("=" * 80)
print("EVALUATION COMPLETE")
print("=" * 80)

for model_data in all_results:

    model = model_data["model"]
    results = model_data["results"]

    if not results:
        continue

    retrieval_latencies = [
        r["retrieval"]["latency_seconds"]
        for r in results
    ]

    generation_latencies = [
        r["generation"]["latency_seconds"]
        for r in results
    ]

    total_tokens = [
        r["generation"]["total_tokens"]
        for r in results
    ]

    output_tokens = [
        r["generation"]["output_tokens"]
        for r in results
    ]

    print(f"\nMODEL: {model}")

    print(
        "Questions evaluated:",
        len(results)
    )

    print(
        "Average retrieval latency:",
        f"{statistics.mean(retrieval_latencies):.3f}s"
    )

    print(
        "Average generation latency:",
        f"{statistics.mean(generation_latencies):.3f}s"
    )

    print(
        "Average total latency:",
        f"{statistics.mean(retrieval_latencies) + statistics.mean(generation_latencies):.3f}s"
    )

    print(
        "Average output tokens:",
        f"{statistics.mean(output_tokens):.2f}"
    )

    print(
        "Average total tokens:",
        f"{statistics.mean(total_tokens):.2f}"
    )

print(
    f"\nDetailed results saved to:"
    f"\n{RESULTS_FILE}"
)

print("=" * 80)
