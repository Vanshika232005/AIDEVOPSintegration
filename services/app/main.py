import requests

from fastapi import FastAPI
from pydantic import BaseModel


# ============================================================
# Service URLs
# ============================================================

RETRIEVAL_URL = "http://retrieval:8001/retrieve"
LLM_URL = "http://llm:8002/generate"


# ============================================================
# FastAPI Application
# ============================================================

app = FastAPI(
    title="Aadhaar AI Assistant",
    description="Application orchestration service for Aadhaar RAG",
    version="1.0"
)


# ============================================================
# Request model
# ============================================================

class QuestionRequest(BaseModel):
    question: str


# ============================================================
# Main RAG endpoint
# ============================================================

@app.post("/ask")
def ask(request: QuestionRequest):

    question = request.question.strip()

    if not question:
        return {
            "error": "Question cannot be empty."
        }

    # --------------------------------------------------------
    # Step 1: Call Retrieval Service
    # --------------------------------------------------------

    try:
        retrieval_response = requests.post(
            RETRIEVAL_URL,
            json={
                "question": question,
                "top_k": 3
            },
            timeout=120
        )

        retrieval_response.raise_for_status()

    except requests.RequestException as e:
        return {
            "error": "Retrieval service failed.",
            "details": str(e)
        }

    retrieval_data = retrieval_response.json()

    results = retrieval_data.get("results", [])

    if not results:
        return {
            "question": question,
            "answer": "The information was not found in the provided Aadhaar Handbook.",
            "sources": []
        }

    # --------------------------------------------------------
    # Step 2: Build context for LLM
    # --------------------------------------------------------

    context_parts = []

    for i, result in enumerate(results, start=1):

        source = result.get("source", "Unknown")
        page = result.get("page", "Unknown")
        chunk = result.get("chunk", "")

        context_parts.append(
            f"""
--- DOCUMENT {i} ---
Source: {source}
Page: {page}

Content:
{chunk}
"""
        )

    context = "\n".join(context_parts)

    # --------------------------------------------------------
    # Step 3: Call LLM Service
    # --------------------------------------------------------

    try:
        llm_response = requests.post(
            LLM_URL,
            json={
                "question": question,
                "context": context
            },
            timeout=300
        )

        llm_response.raise_for_status()

    except requests.RequestException as e:
        return {
            "error": "LLM service failed.",
            "details": str(e)
        }

    llm_data = llm_response.json()

    # --------------------------------------------------------
    # Step 4: Return final response
    # --------------------------------------------------------

    return {
        "question": question,
        "answer": llm_data.get(
            "answer",
            "The information was not found in the provided Aadhaar Handbook."
        ),
        "sources": [
            {
                "source": result.get("source"),
                "page": result.get("page"),
                "distance": result.get("distance")
            }
            for result in results
        ]
    }
# ============================================================
# No-RAG endpoint
# ============================================================

OLLAMA_URL = "http://host.docker.internal:11434/api/chat"
NO_RAG_MODEL = "qwen3:0.6b"


@app.post("/ask_no_rag")
def ask_no_rag(request: QuestionRequest):

    question = request.question.strip()

    if not question:
        return {
            "error": "Question cannot be empty."
        }

    try:

        response = requests.post(
            OLLAMA_URL,
            json={
                "model": NO_RAG_MODEL,
                "messages": [
                    {
                        "role": "user",
                        "content": question
                    }
                ],
                "stream": False,
                "think": False,
                "options": {
                    "temperature": 0.2,
                    "num_ctx": 1024
                }
            },
            timeout=300
        )

        response.raise_for_status()

        data = response.json()

        return {
            "question": question,
            "answer": data["message"]["content"],
            "sources": []
        }

    except requests.RequestException as e:

        return {
            "error": "Ollama No-RAG request failed.",
            "details": str(e)
        }

# ============================================================
# Health check
# ============================================================

@app.get("/health")
def health():

    return {
        "service": "application",
        "status": "healthy"
    }
