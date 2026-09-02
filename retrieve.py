import json
import requests
import numpy as np
import faiss


EMBEDDING_MODEL = "nomic-embed-text"
OLLAMA_URL = "http://localhost:11434/api/embed"

INDEX_FILE = "vector_db/aadhaar.index"
CHUNKS_FILE = "data/chunks.json"


def get_query_embedding(question):
    response = requests.post(
        OLLAMA_URL,
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


def retrieve(question, top_k=5):

    # Load FAISS index
    index = faiss.read_index(INDEX_FILE)

    # Load original chunks
    with open(CHUNKS_FILE, "r", encoding="utf-8") as f:
        chunks = json.load(f)

    # Convert question into vector
    query_vector = get_query_embedding(question)

    # FAISS expects shape: (number_of_queries, dimensions)
    query_vector = query_vector.reshape(1, -1)

    # Search for similar chunks
    distances, indices = index.search(query_vector, top_k)

    results = []

    for distance, index_position in zip(
        distances[0],
        indices[0]
    ):
        result = chunks[index_position].copy()

        result["distance"] = float(distance)

        results.append(result)

    return results


if __name__ == "__main__":

    question = input("Enter your question: ")

    results = retrieve(question)

    print("\nRelevant information:\n")

    for i, result in enumerate(results, start=1):

        print("=" * 70)
        print(f"Result {i}")
        print(f"Page: {result['page']}")
        print(f"Distance: {result['distance']}")
        print(f"Source: {result['source']}")
        print()
        print(result["chunk"])
        print()
