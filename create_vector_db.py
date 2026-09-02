import json
import numpy as np
import faiss
from pathlib import Path


EMBEDDINGS_FILE = Path("data/embeddings.npy")
CHUNKS_FILE = Path("data/chunks.json")
INDEX_FILE = Path("vector_db/aadhaar.index")


def main():

    print("Loading embeddings...")

    embeddings = np.load(EMBEDDINGS_FILE)

    print(f"Embedding shape: {embeddings.shape}")

    # Create FAISS index
    dimension = embeddings.shape[1]

    index = faiss.IndexFlatL2(dimension)

    # Add vectors
    index.add(embeddings)

    print(f"Vectors stored in FAISS: {index.ntotal}")

    # Create output directory
    INDEX_FILE.parent.mkdir(parents=True, exist_ok=True)

    # Save FAISS index
    faiss.write_index(index, str(INDEX_FILE))

    print(f"FAISS index saved to: {INDEX_FILE}")

    # Verify chunks
    with open(CHUNKS_FILE, "r", encoding="utf-8") as f:
        chunks = json.load(f)

    print(f"Chunks available: {len(chunks)}")

    if index.ntotal == len(chunks):
        print("SUCCESS: Every chunk has a corresponding vector.")
    else:
        print("WARNING: Number of vectors and chunks do not match.")


if __name__ == "__main__":
    main()
