import { ChatMessage, SourceCitation } from '../types';

const API_BASE = '/api';
const BRIDGE_BASE = '/bridge';

export async function checkServicesHealth() {
  try {
    const res = await fetch(`${BRIDGE_BASE}/services/status`);
    if (res.ok) {
      return await res.json();
    }
  } catch {
    // try direct app health
  }

  try {
    const appRes = await fetch(`${API_BASE}/health`);
    const isHealthy = appRes.ok;
    return {
      services: {
        app: { name: 'Application Orchestrator', port: 8000, ok: isHealthy },
        retrieval: { name: 'FAISS Retrieval Service', port: 8001, ok: isHealthy },
        llm: { name: 'LLM Inference Service', port: 8002, ok: isHealthy },
        ollama: { name: 'Local Ollama Runtime', port: 11434, ok: isHealthy },
      }
    };
  } catch {
    return {
      services: {
        app: { name: 'Application Orchestrator', port: 8000, ok: false },
        retrieval: { name: 'FAISS Retrieval Service', port: 8001, ok: false },
        llm: { name: 'LLM Inference Service', port: 8002, ok: false },
        ollama: { name: 'Local Ollama Runtime', port: 11434, ok: false },
      }
    };
  }
}

export async function askQuestion(question: string): Promise<{
  answer: string;
  sources: SourceCitation[];
  guardrail?: { triggered: boolean; type: string };
  latency?: number;
}> {
  const startTime = performance.now();
  
  try {
    // Try bridge first, then direct API
    let res = await fetch(`${BRIDGE_BASE}/ask`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question, top_k: 3 }),
    }).catch(() => null);

    if (!res || !res.ok) {
      res = await fetch(`${API_BASE}/ask`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question }),
      });
    }

    if (res && res.ok) {
      const data = await res.json();
      const endTime = performance.now();
      return {
        answer: data.answer || 'No response returned from model.',
        sources: data.sources || data.results || [],
        guardrail: data.guardrail,
        latency: Number(((endTime - startTime) / 1000).toFixed(2)),
      };
    }
  } catch (err) {
    console.warn('Backend unavailable, using contextual fallback', err);
  }

  // Graceful offline fallback with helpful message
  const endTime = performance.now();
  return {
    answer: `[Local Standby Mode]: Application backend is offline.
    
To get live responses from your local Qwen2.5 / FAISS pipeline:
1. Ensure your services are running (\`docker-compose up\` or \`uvicorn services.app.main:app --port 8000\`).
2. Run the bridge API: \`python services/api_server.py\`.

Grounded query: "${question}"`,
    sources: [
      { source: "Aadhaar Handbook (Offline Preview)", page: 12, distance: 0.28 }
    ],
    latency: Number(((endTime - startTime) / 1000).toFixed(2)),
  };
}

export async function askNoRag(question: string): Promise<{
  answer: string;
  sources: SourceCitation[];
  latency?: number;
}> {
  const startTime = performance.now();
  try {
    let res = await fetch(`${BRIDGE_BASE}/ask_no_rag`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question }),
    }).catch(() => null);

    if (!res || !res.ok) {
      res = await fetch(`${API_BASE}/ask_no_rag`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question }),
      });
    }

    if (res && res.ok) {
      const data = await res.json();
      const endTime = performance.now();
      return {
        answer: data.answer || 'No answer.',
        sources: [],
        latency: Number(((endTime - startTime) / 1000).toFixed(2)),
      };
    }
  } catch {
    // fallback
  }

  const endTime = performance.now();
  return {
    answer: `[No-RAG Baseline Offline]: Direct Ollama connection not reachable. In live mode, this baseline produces general LLM responses without UIDAI document context.`,
    sources: [],
    latency: Number(((endTime - startTime) / 1000).toFixed(2)),
  };
}
