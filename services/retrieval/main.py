import json
import requests
import numpy as np
import faiss

from fastapi import FastAPI
from pydantic import BaseModel


# ============================================================
# Configuration
# ============================================================

EMBEDDING_MODEL = "nomic-embed-text:latest"
EMBED_URL = "http://host.docker.internal:11434/api/embed"

INDEX_FILE = "vector_db/aadhaar.index"
CHUNKS_FILE = "data/chunks.json"


# ============================================================
# FastAPI
# ============================================================

app = FastAPI(
    title="Aadhaar Retrieval Service",
    description="Retrieval/RAG service for Aadhaar documents",
    version="1.0"
)


# ============================================================
# Request model
# ============================================================

class QueryRequest(BaseModel):
    question: str
    top_k: int = 3


# ============================================================
# Load knowledge base
# ============================================================

index = faiss.read_index(INDEX_FILE)

with open(CHUNKS_FILE, "r", encoding="utf-8") as f:
    chunks = json.load(f)


# ============================================================
# Generate query embedding
# ============================================================

def get_embedding(question):

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
# Retrieval endpoint
# ============================================================

@app.post("/retrieve")
def retrieve(request: QueryRequest):

    query_vector = get_embedding(
        request.question
    )

    query_vector = query_vector.reshape(1, -1)

    distances, indices = index.search(
        query_vector,
        request.top_k
    )

    results = []

    for distance, index_position in zip(
        distances[0],
        indices[0]
    ):

        chunk = chunks[index_position]

        results.append({
            "source": chunk["source"],
            "page": chunk["page"],
            "chunk": chunk["chunk"],
            "distance": float(distance)
        })

    return {
        "question": request.question,
        "results": results
    }


# ============================================================
# Health check
# ============================================================

@app.get("/health")
def health():

    return {
        "service": "retrieval",
        "status": "healthy",
        "chunks": len(chunks)
    }
