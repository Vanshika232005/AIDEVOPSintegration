"""
Aadhaar AI Assistant - Modern React Frontend API Bridge
Provides unified endpoints, CORS, health checks, and data query APIs.
"""

import json
import os
import requests
from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional, List, Dict, Any

APP_API = os.getenv("APP_API", "http://localhost:8000")
RETRIEVAL_API = os.getenv("RETRIEVAL_API", "http://localhost:8001")
LLM_API = os.getenv("LLM_API", "http://localhost:8002")
OLLAMA_API = os.getenv("OLLAMA_API", "http://localhost:11434")

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_DIR = os.path.join(REPO_ROOT, "data")
EVAL_DIR = os.path.join(REPO_ROOT, "evaluation")
RESULTS_DIR = os.path.join(EVAL_DIR, "results")

app = FastAPI(
    title="Aadhaar AI React API Bridge",
    description="Bridge service for React frontend and evaluation console",
    version="1.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class QuestionRequest(BaseModel):
    question: str
    top_k: Optional[int] = 3
    model: Optional[str] = None

def safe_get(url: str, timeout: int = 3):
    try:
        r = requests.get(url, timeout=timeout)
        return r.status_code == 200, r.json() if r.status_code == 200 else None
    except Exception as e:
        return False, str(e)

def safe_post(url: str, payload: dict, timeout: int = 120):
    try:
        r = requests.post(url, json=payload, timeout=timeout)
        r.raise_for_status()
        return True, r.json()
    except Exception as e:
        return False, str(e)

@app.get("/health")
def health():
    return {"status": "healthy", "service": "api-bridge"}

@app.get("/services/status")
def services_status():
    app_ok, app_data = safe_get(f"{APP_API}/health")
    ret_ok, ret_data = safe_get(f"{RETRIEVAL_API}/health")
    llm_ok, llm_data = safe_get(f"{LLM_API}/health")
    ollama_ok, ollama_data = safe_get(f"{OLLAMA_API}/api/version")
    
    return {
        "services": {
            "app": {
                "name": "Application Orchestrator",
                "port": 8000,
                "ok": app_ok,
                "data": app_data if app_ok else None,
            },
            "retrieval": {
                "name": "FAISS Retrieval Service",
                "port": 8001,
                "ok": ret_ok,
                "data": ret_data if ret_ok else None,
            },
            "llm": {
                "name": "LLM Inference Service",
                "port": 8002,
                "ok": llm_ok,
                "data": llm_data if llm_ok else None,
            },
            "ollama": {
                "name": "Local Ollama Runtime",
                "port": 11434,
                "ok": ollama_ok,
                "data": ollama_data if ollama_ok else None,
            }
        }
    }

@app.post("/ask")
def proxy_ask(request: QuestionRequest):
    ok, data = safe_post(f"{APP_API}/ask", {"question": request.question, "model": request.model})
    if ok:
        return data
    # Fallback to local answering or descriptive status
    return {
        "question": request.question,
        "answer": f"Service offline: Unable to connect to Application Service at {APP_API}. Please ensure Docker containers or python services are running.",
        "sources": [],
        "fallback": True,
        "error": data
    }

@app.post("/ask_no_rag")
def proxy_ask_no_rag(request: QuestionRequest):
    ok, data = safe_post(f"{APP_API}/ask_no_rag", {"question": request.question})
    if ok:
        return data
    return {
        "question": request.question,
        "answer": f"Ollama offline: Unable to connect to Application Service at {APP_API}.",
        "sources": [],
        "fallback": True,
        "error": data
    }

@app.get("/chunks")
def get_chunks(search: Optional[str] = None, limit: int = 50, offset: int = 0):
    chunks_path = os.path.join(DATA_DIR, "chunks.json")
    if not os.path.exists(chunks_path):
        return {"total": 0, "chunks": []}
    
    with open(chunks_path, "r", encoding="utf-8") as f:
        chunks = json.load(f)
    
    if search:
        q = search.lower()
        chunks = [c for c in chunks if q in c.get("chunk", "").lower() or q in c.get("source", "").lower()]
    
    total = len(chunks)
    sliced = chunks[offset : offset + limit]
    return {
        "total": total,
        "offset": offset,
        "limit": limit,
        "chunks": sliced
    }

@app.get("/models")
def get_models():
    ok, data = safe_get(f"{OLLAMA_API}/api/tags")
    if ok and data and "models" in data:
        return data["models"]
    return [
        {"name": "qwen2.5-coder:1.5b", "details": {"parameter_size": "1.5B", "family": "qwen2"}},
        {"name": "llama3.2:3b", "details": {"parameter_size": "3.2B", "family": "llama"}},
        {"name": "deepseek-coder:1.3b", "details": {"parameter_size": "1.3B", "family": "deepseek"}},
    ]

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8003)
