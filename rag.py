import json
import requests
import numpy as np
import faiss


# ============================================================
# Configuration
# ============================================================

EMBEDDING_MODEL = "nomic-embed-text"
LLM_MODEL = "qwen3:0.6b"

EMBED_URL = "http://localhost:11434/api/embed"
CHAT_URL = "http://localhost:11434/api/chat"

INDEX_FILE = "vector_db/aadhaar.index"
CHUNKS_FILE = "data/chunks.json"

TOP_K = 3


# ============================================================
# Generate embedding for user question
# ============================================================

def get_query_embedding(question):

    response = requests.post(
        EMBED_URL,
        json={
            "model": EMBEDDING_MODEL,
            "input": question
        },
        timeout=120
    )

    response.raise_for_status()

    data = response.json()

    return np.array(
        data["embeddings"][0],
        dtype="float32"
    )


# ============================================================
# Retrieve relevant chunks from FAISS
# ============================================================

def retrieve(question, top_k=TOP_K):

    # Load FAISS index
    index = faiss.read_index(INDEX_FILE)

    # Load original chunks
    with open(CHUNKS_FILE, "r", encoding="utf-8") as f:
        chunks = json.load(f)

    # Convert question into embedding
    query_vector = get_query_embedding(question)

    # FAISS expects 2D array
    query_vector = query_vector.reshape(1, -1)

    # Search
    distances, indices = index.search(
        query_vector,
        top_k
    )

    results = []

    for distance, index_position in zip(
        distances[0],
        indices[0]
    ):

        result = chunks[index_position].copy()

        result["distance"] = float(distance)

        results.append(result)

    return results


# ============================================================
# Generate answer using Qwen + retrieved context
# ============================================================

def generate_answer(question, results):

    context_parts = []

    for result in results:

        context_parts.append(
            f"""
Source: {result['source']}
Page: {result['page']}

{result['chunk']}
"""
        )

    context = "\n".join(context_parts)

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

    response = requests.post(
        CHAT_URL,
        json={
            "model": LLM_MODEL,
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

    data = response.json()

    return data["message"]["content"]


# ============================================================
# Main application
# ============================================================

def main():

    print("=" * 70)
    print("AADHAAR RAG ASSISTANT")
    print("=" * 70)

    question = input("\nEnter your question: ")

    print("\nSearching Aadhaar knowledge base...")

    # Retrieval
    results = retrieve(question)

    print("\nRetrieved sources:")

    for result in results:

        print(
            f"- Page {result['page']} "
            f"(distance: {result['distance']:.4f})"
        )

    print("\nGenerating answer using Qwen 3 0.6B...\n")

    # Generation
    answer = generate_answer(
        question,
        results
    )

    print("=" * 70)
    print("RAG ANSWER")
    print("=" * 70)

    print(answer)

    print("=" * 70)


if __name__ == "__main__":
    main()
