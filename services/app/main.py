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

from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="Aadhaar AI Assistant",
    description="Application orchestration service for Aadhaar RAG",
    version="1.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



# ============================================================
# Request model
# ============================================================

class QuestionRequest(BaseModel):
    question: str


# ============================================================
# Guardrail: Aadhaar scope validation
# ============================================================

AADHAAR_SCOPE_TERMS = {
    "aadhaar",
    "aadhar",
    "uidai",
    "enrolment",
    "enrollment",
    "resident",
    "biometric",
    "demographic",
    "authentication",
    "authenticator",
    "verification",
    "verifier",
    "operator",
    "enrolment centre",
    "enrollment centre",
    "aadhaar centre",
    "aadhaar number",
    "e-aadhaar",
    "eaadhaar",
    "proof of identity",
    "proof of address",
    "proof of date of birth",
    "proof of relationship",
    "poi",
    "poa",
    "dob",
    "update",
    "document",
    "documents",
    "form"
}

# Topics that are clearly outside the Aadhaar Handbook use case.
# These are checked even when the question also contains
# Aadhaar-related words.
UNSUPPORTED_DOMAIN_TERMS = {
    "hotel booking",
    "hotel refund",
    "booking refund",
    "cryptocurrency",
    "crypto trading",
    "cryptocurrency trading",
    "stock trading",
    "share trading",
    "python program",
    "python code",
    "javascript code",
    "recipe",
    "pasta recipe",
    "medical diagnosis",
    "prescription",
    "investment advice",
    "loan advice",
}


def has_unsupported_domain(question: str) -> bool:
    """Return True when the question contains a clearly unsupported topic."""
    normalized = question.lower()
    return any(term in normalized for term in UNSUPPORTED_DOMAIN_TERMS)


def is_aadhaar_related(question: str) -> bool:
    """Return True when the question contains an Aadhaar-related scope signal."""
    normalized = question.lower()
    return any(term in normalized for term in AADHAAR_SCOPE_TERMS)


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
    # Guardrail 1: restrict the assistant to Aadhaar scope
    # --------------------------------------------------------

    if not is_aadhaar_related(question):
        return {
            "question": question,
            "answer": (
                "I can only answer questions related to Aadhaar "
                "services and the provided Aadhaar Handbook."
            ),
            "sources": [],
            "guardrail": {
                "triggered": True,
                "type": "out_of_scope"
            }
        }

    # --------------------------------------------------------
    # Guardrail 1b: reject unsupported domains even when the
    # question contains Aadhaar-related terminology.
    # --------------------------------------------------------

    if has_unsupported_domain(question):
        return {
            "question": question,
            "answer": (
                "The requested topic is outside the scope of the "
                "provided Aadhaar Handbook."
            ),
            "sources": [],
            "guardrail": {
                "triggered": True,
                "type": "unsupported_domain"
            }
        }

    # --------------------------------------------------------
    # Guardrail 2: limit excessively long inputs
    # --------------------------------------------------------

    MAX_QUESTION_LENGTH = 500

    if len(question) > MAX_QUESTION_LENGTH:
        return {
            "question": question[:MAX_QUESTION_LENGTH],
            "answer": (
                "The question is too long. "
                "Please provide a shorter Aadhaar-related question."
            ),
            "sources": [],
            "guardrail": {
                "triggered": True,
                "type": "input_length"
            }
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

    # --------------------------------------------------------
    # Guardrail 3: require sufficiently relevant evidence
    # before sending the question to the LLM.
    #
    # The retrieval service returns FAISS distance values.
    # Lower distance means the retrieved chunk is closer to
    # the query in the embedding space.
    # --------------------------------------------------------

    if not results:
        return {
            "question": question,
            "answer": (
                "The information was not found in the provided "
                "Aadhaar Handbook."
            ),
            "sources": [],
            "guardrail": {
                "triggered": True,
                "type": "no_retrieved_evidence"
            }
        }

    MAX_RETRIEVAL_DISTANCE = 0.90

    best_distance = results[0].get("distance")

    if (
        isinstance(best_distance, (int, float))
        and best_distance > MAX_RETRIEVAL_DISTANCE
    ):
        return {
            "question": question,
            "answer": (
                "The information was not found in the provided "
                "Aadhaar Handbook."
            ),
            "sources": [
                {
                    "source": result.get("source"),
                    "page": result.get("page"),
                    "distance": result.get("distance")
                }
                for result in results
            ],
            "guardrail": {
                "triggered": True,
                "type": "insufficient_retrieval_evidence",
                "best_distance": best_distance,
                "threshold": MAX_RETRIEVAL_DISTANCE
            }
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
NO_RAG_MODEL = "qwen2.5-coder:1.5b"


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
