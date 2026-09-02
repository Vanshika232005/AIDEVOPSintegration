import re
import requests
import os

from fastapi import FastAPI, HTTPException
from pydantic import BaseModel


# ============================================================
# Configuration
# ============================================================

OLLAMA_URL = "http://host.docker.internal:11434/api/chat"
MODEL = os.getenv("MODEL", "qwen3:0.6b")


# ============================================================
# FastAPI
# ============================================================

app = FastAPI(
    title="Aadhaar LLM Service",
    description="LLM service using Ollama and Qwen 3 0.6B",
    version="2.0"
)


# ============================================================
# Request Model
# ============================================================

class ChatRequest(BaseModel):
    question: str
    context: str = ""


# ============================================================
# Clean LLM Response
# ============================================================

def clean_answer(answer: str) -> str:
    """
    Clean formatting artifacts produced by the LLM.
    """

    # Remove Qwen thinking tags if they appear
    answer = re.sub(
        r"<think>.*?</think>",
        "",
        answer,
        flags=re.DOTALL
    )

    # Convert escaped newlines into real newlines
    answer = answer.replace("\\n", "\n")

    # Convert escaped tabs
    answer = answer.replace("\\t", "\t")

    # Remove excessive blank lines
    answer = re.sub(r"\n{3,}", "\n\n", answer)

    # Remove leading/trailing whitespace
    answer = answer.strip()

    return answer


# ============================================================
# Build RAG Prompt
# ============================================================

def build_prompt(question: str, context: str) -> str:

    return f"""
You are an Aadhaar information assistant.

Your job is to answer the user's question using ONLY the
provided Aadhaar Handbook context.

STRICT RULES:

1. Use ONLY information present in the provided context.
2. Do NOT use your general knowledge.
3. Do NOT invent or guess information.
4. If the answer is not present in the context, say:
   "The information was not found in the provided Aadhaar Handbook."
5. Give a concise and direct answer.
6. Do not mention that you are an AI or language model.
7. Do not repeat the entire context.
8. Use bullet points when listing multiple documents or requirements.
9. If page numbers are available in the context, mention them.
10. Only state information that is directly supported by the context.

Aadhaar Handbook Context:
-------------------------
{context}
-------------------------

User Question:
{question}

Answer:
""".strip()


# ============================================================
# Generate Answer
# ============================================================

@app.post("/generate")
def generate(request: ChatRequest):

    # --------------------------------------------------------
    # Validate question
    # --------------------------------------------------------

    question = request.question.strip()

    if not question:
        raise HTTPException(
            status_code=400,
            detail="Question cannot be empty."
        )

    # --------------------------------------------------------
    # Build prompt
    # --------------------------------------------------------

    if request.context.strip():

        prompt = build_prompt(
            question,
            request.context
        )

    else:

        # Direct LLM request without RAG context
        prompt = f"""
You are an Aadhaar information assistant.

Answer the following question:

{question}

However, do not invent official Aadhaar information.
If you do not have sufficient verified context, clearly
state that the information is unavailable.
""".strip()

    # --------------------------------------------------------
    # Call Ollama
    # --------------------------------------------------------

    try:

        response = requests.post(
            OLLAMA_URL,
            json={
                "model": MODEL,

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
                    "num_ctx": 2048
                }
            },

            timeout=300
        )

        response.raise_for_status()

    except requests.exceptions.RequestException as e:

        raise HTTPException(
            status_code=503,
            detail=f"Ollama service unavailable: {str(e)}"
        )

    # --------------------------------------------------------
    # Parse Ollama response
    # --------------------------------------------------------

    try:

        data = response.json()

        answer = data["message"]["content"]

    except (ValueError, KeyError, TypeError):

        raise HTTPException(
            status_code=502,
            detail="Invalid response received from Ollama."
        )

    # --------------------------------------------------------
    # Clean answer
    # --------------------------------------------------------

    answer = clean_answer(answer)

    # --------------------------------------------------------
    # Final response
    # --------------------------------------------------------

    return {
        "model": MODEL,
        "answer": answer
    }


# ============================================================
# Health Check
# ============================================================

@app.get("/health")
def health():

    return {
        "service": "llm",
        "status": "healthy",
        "model": MODEL
    }
