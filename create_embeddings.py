import json
import requests
import numpy as np
from pathlib import Path


CHUNKS_FILE = Path("data/chunks.json")
EMBEDDINGS_FILE = Path("data/embeddings.npy")

OLLAMA_URL = "http://localhost:11434/api/embed"
MODEL = "nomic-embed-text"


def get_embedding(text):
    response = requests.post(
        OLLAMA_URL,
        json={
            "model": MODEL,
            "input": text
        },
        timeout=120
    )

    response.raise_for_status()

    data = response.json()

    return data["embeddings"][0]


def main():

    print("Loading chunks...")

    with open(CHUNKS_FILE, "r", encoding="utf-8") as f:
        chunks = json.load(f)

    print(f"Total chunks: {len(chunks)}")
    print("Creating embeddings...")

    embeddings = []

    for i, item in enumerate(chunks, start=1):

        embedding = get_embedding(item["chunk"])

        embeddings.append(embedding)

        print(f"Embedded {i}/{len(chunks)}")

    embeddings = np.array(embeddings, dtype="float32")

    np.save(EMBEDDINGS_FILE, embeddings)

    print()
    print("Embedding generation complete.")
    print(f"Shape: {embeddings.shape}")
    print(f"Saved to: {EMBEDDINGS_FILE}")


if __name__ == "__main__":
    main()
