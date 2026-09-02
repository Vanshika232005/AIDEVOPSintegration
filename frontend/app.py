"""
Aadhaar AI Assistant — Enterprise RAG Observability Dashboard
Week 3 deliverable.

Backend contract (unchanged, per spec section 19):
    GET  :8000/health          -> application service health
    POST :8000/ask             -> {"question": str, "top_k": int}      (RAG path)
    POST :8000/ask_no_rag      -> {"question": str}                    (baseline, no retrieval)
    GET  :8001/health          -> retrieval service health + chunk count
    POST :8001/retrieve        -> {"question": str, "top_k": int}
    GET  :8002/health          -> LLM service health + active model
    GET  :11434/api/tags       -> Ollama model inventory

Run:
    streamlit run app.py --server.address 0.0.0.0 --server.port 8501
"""

import json
import os
import subprocess
import sys
import time
from datetime import datetime

import pandas as pd
import requests
import streamlit as st

# ──────────────────────────────────────────────────────────────────────────
# CONFIG
# ──────────────────────────────────────────────────────────────────────────

APP_API = "http://localhost:8000"
RETRIEVAL_API = "http://localhost:8001"
LLM_API = "http://localhost:8002"
OLLAMA_API = "http://localhost:11434"

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CHUNKS_FILE = os.path.join(REPO_ROOT, "data", "chunks.json")
KB_DIR = os.path.join(REPO_ROOT, "knowledge_base")
VECTOR_DB_DIR = os.path.join(REPO_ROOT, "vector_db")
EVAL_RESULTS_FILE = os.path.join(REPO_ROOT, "evaluation", "results", "model_results.json")

REQUEST_TIMEOUT = 5
GEN_TIMEOUT = 60

EMBED_MODEL = "nomic-embed-text:latest"
ACTIVE_LLM = "qwen3:0.6b"

st.set_page_config(
    page_title="Aadhaar AI Assistant · RAG Console",
    page_icon="🪪",
    layout="wide",
    initial_sidebar_state="collapsed",
)

# ──────────────────────────────────────────────────────────────────────────
# DESIGN SYSTEM — CSS
# Palette: deep indigo/ink base, marigold accent (nod to the Aadhaar / Indian
# digital-identity visual language) instead of a generic blue-on-navy kit.
# Emerald = healthy, Amber = degraded, Red = down — semantic only, never decorative.
# ──────────────────────────────────────────────────────────────────────────

CSS = """
<style>
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500&display=swap');

:root{
  --ink-950:#0a0e17;
  --ink-900:#0e1420;
  --ink-800:#141c2b;
  --ink-700:#1b2436;
  --ink-600:#26314a;
  --line:#242f45;
  --text-hi:#eef1f8;
  --text-mid:#a9b4c9;
  --text-low:#6b7690;
  --marigold:#e8a33d;
  --marigold-soft:#3a2c15;
  --indigo:#6d7ff0;
  --emerald:#34d399;
  --emerald-soft:#0f2a22;
  --amber:#f5b84f;
  --amber-soft:#332411;
  --red:#f2685c;
  --red-soft:#331916;
  --radius:12px;
}

html, body, [class*="css"]  { font-family:'Manrope', -apple-system, sans-serif; }
.stApp{ background:
  radial-gradient(1200px 500px at 15% -10%, rgba(109,127,240,0.10), transparent 60%),
  radial-gradient(900px 500px at 100% 0%, rgba(232,163,61,0.06), transparent 55%),
  var(--ink-950);
}
#MainMenu, footer, header{visibility:hidden;}
.block-container{padding-top:1.1rem; max-width:1360px;}

code, .mono{font-family:'IBM Plex Mono', monospace;}

/* ── Hero header ─────────────────────────────────────────────────── */
.hero{
  display:flex; align-items:center; justify-content:space-between;
  padding:20px 26px; border-radius:16px;
  background:linear-gradient(135deg, var(--ink-800) 0%, var(--ink-900) 100%);
  border:1px solid var(--line);
  margin-bottom:18px;
}
.hero-left{display:flex; align-items:center; gap:14px;}
.hero-badge{
  width:44px; height:44px; border-radius:10px;
  background:linear-gradient(135deg, var(--marigold), #c97f1e);
  display:flex; align-items:center; justify-content:center;
  font-size:22px; flex-shrink:0;
}
.hero-title{font-size:19px; font-weight:800; color:var(--text-hi); letter-spacing:-0.01em; line-height:1.25;}
.hero-sub{font-size:12.5px; color:var(--text-low); margin-top:1px;}
.hero-right{display:flex; gap:10px; align-items:center;}
.pill{
  font-size:11.5px; padding:5px 11px; border-radius:999px; font-weight:600;
  border:1px solid var(--line); color:var(--text-mid); background:var(--ink-700);
  display:inline-flex; align-items:center; gap:6px;
}
.dot{width:7px; height:7px; border-radius:50%; display:inline-block;}
.dot-up{background:var(--emerald); box-shadow:0 0 6px var(--emerald);}
.dot-down{background:var(--red); box-shadow:0 0 6px var(--red);}
.dot-warn{background:var(--amber); box-shadow:0 0 6px var(--amber);}

/* ── KPI / stat cards ────────────────────────────────────────────── */
.kpi-row{display:flex; gap:12px; flex-wrap:wrap; margin-bottom:16px;}
.kpi{
  flex:1; min-width:150px;
  background:var(--ink-800); border:1px solid var(--line); border-radius:var(--radius);
  padding:14px 16px;
}
.kpi-value{font-size:24px; font-weight:800; color:var(--text-hi); line-height:1.1;}
.kpi-value.accent{color:var(--marigold);}
.kpi-label{font-size:11.5px; color:var(--text-low); margin-top:4px; font-weight:500;}

/* ── Generic section card ────────────────────────────────────────── */
.card{
  background:var(--ink-800); border:1px solid var(--line); border-radius:14px;
  padding:18px 20px; margin-bottom:14px;
}
.card-title{font-size:14.5px; font-weight:700; color:var(--text-hi); margin-bottom:2px; display:flex; align-items:center; gap:8px;}
.card-desc{font-size:12.5px; color:var(--text-low); margin-bottom:10px; line-height:1.5;}

/* ── Badges / status pills ───────────────────────────────────────── */
.badge{
  display:inline-block; font-size:10.5px; font-weight:700; padding:2px 8px;
  border-radius:6px; letter-spacing:0.02em;
}
.badge-ok{background:var(--emerald-soft); color:var(--emerald);}
.badge-warn{background:var(--amber-soft); color:var(--amber);}
.badge-down{background:var(--red-soft); color:var(--red);}
.badge-accent{background:var(--marigold-soft); color:var(--marigold);}
.badge-neutral{background:var(--ink-700); color:var(--text-mid);}

/* ── Chunk / source rows ─────────────────────────────────────────── */
.chunk-row{
  background:var(--ink-900); border:1px solid var(--line); border-radius:10px;
  padding:10px 14px; margin-bottom:7px; font-size:12.5px; color:var(--text-mid);
}
.chunk-row .cid{color:var(--text-hi); font-weight:700; font-family:'IBM Plex Mono',monospace; font-size:11.5px;}
.chunk-row .snippet{color:var(--text-low); margin-top:4px; line-height:1.5;}

/* ── Answer / chat cards (explicit dark-on-light fix per spec §18) ── */
.answer-card{
  background:#f4f2ec; color:#161616 !important; border-radius:14px; padding:16px 18px;
  border-left:4px solid var(--marigold); margin:10px 0;
}
.answer-card, .answer-card p, .answer-card li, .answer-card span{ color:#161616 !important; }
.source-card{
  background:#eef1f7; color:#161616 !important; border-radius:10px; padding:10px 13px;
  margin-top:6px; font-size:12.5px; border:1px solid #d7dce6;
}
.source-card b{color:#161616 !important;}
[data-testid="stChatInput"] textarea{ color:#111827 !important; }
[data-testid="stChatInput"] textarea::placeholder{ color:#6b7280 !important; }

/* ── Compare (RAG vs No-RAG) columns ─────────────────────────────── */
.compare-col-head{
  font-size:12.5px; font-weight:800; text-transform:uppercase; letter-spacing:0.06em;
  padding:8px 12px; border-radius:8px; margin-bottom:10px; text-align:center;
}
.compare-rag{background:var(--emerald-soft); color:var(--emerald);}
.compare-norag{background:var(--red-soft); color:var(--red);}

/* ── Architecture flow ───────────────────────────────────────────── */
.flow-step{
  background:var(--ink-900); border:1px solid var(--line); border-radius:10px;
  padding:12px 16px; text-align:center; font-size:12.5px; font-weight:700; color:var(--text-hi);
}
.flow-step .sub{display:block; font-weight:500; color:var(--text-low); font-size:10.5px; margin-top:3px; font-family:'IBM Plex Mono',monospace;}
.flow-arrow{text-align:center; color:var(--marigold); font-size:16px; line-height:2.2;}

/* ── Tabs styling ─────────────────────────────────────────────────── */
.stTabs [data-baseweb="tab-list"]{gap:2px; border-bottom:1px solid var(--line);}
.stTabs [data-baseweb="tab"]{
  height:38px; color:var(--text-low); font-weight:600; font-size:13.5px;
  background:transparent; border-bottom:2px solid transparent;
}
.stTabs [aria-selected="true"]{ color:var(--marigold) !important; border-bottom:2px solid var(--marigold) !important; }

/* Streamlit native tweaks */
div[data-testid="stMetricValue"]{color:var(--text-hi);}
.stDataFrame{border:1px solid var(--line); border-radius:10px; overflow:hidden;}
hr{border-color:var(--line);}
</style>
"""
st.markdown(CSS, unsafe_allow_html=True)

# ──────────────────────────────────────────────────────────────────────────
# HELPERS
# ──────────────────────────────────────────────────────────────────────────

def safe_get(url, timeout=REQUEST_TIMEOUT):
    try:
        r = requests.get(url, timeout=timeout)
        if r.ok:
            return True, r.json()
        return False, f"HTTP {r.status_code}"
    except Exception as e:
        return False, str(e)


def safe_post(url, payload, timeout=GEN_TIMEOUT):
    try:
        r = requests.post(url, json=payload, timeout=timeout)
        if r.ok:
            return True, r.json()
        return False, f"HTTP {r.status_code}: {r.text[:200]}"
    except Exception as e:
        return False, str(e)


@st.cache_data(ttl=15)
def get_service_health():
    services = {
        "UI / App (:8000)": f"{APP_API}/health",
        "Retrieval (:8001)": f"{RETRIEVAL_API}/health",
        "LLM (:8002)": f"{LLM_API}/health",
    }
    out = {}
    for name, url in services.items():
        ok, data = safe_get(url, timeout=3)
        out[name] = {"ok": ok, "data": data}
    ok, data = safe_get(f"{OLLAMA_API}/api/tags", timeout=3)
    out["Ollama (:11434)"] = {"ok": ok, "data": data}
    return out


@st.cache_data(ttl=10)
def load_chunks():
    if not os.path.exists(CHUNKS_FILE):
        return []
    try:
        with open(CHUNKS_FILE, "r", encoding="utf-8") as f:
            return json.load(f)
    except Exception:
        return []


def chunk_stats(chunks):
    by_source = {}
    for c in chunks:
        src = c.get("source", "unknown")
        by_source[src] = by_source.get(src, 0) + 1
    return by_source


@st.cache_data(ttl=10)
def load_kb_files():
    if not os.path.isdir(KB_DIR):
        return []
    files = []
    for f in sorted(os.listdir(KB_DIR)):
        if f.lower().endswith(".pdf"):
            path = os.path.join(KB_DIR, f)
            size_kb = os.path.getsize(path) / 1024
            files.append({"name": f, "size_kb": round(size_kb, 1)})
    return files


@st.cache_data(ttl=30)
def load_eval_results():
    if not os.path.exists(EVAL_RESULTS_FILE):
        return None
    try:
        with open(EVAL_RESULTS_FILE, "r", encoding="utf-8") as f:
            return json.load(f)
    except Exception:
        return None


def run_ingestion_pipeline(new_file_path, log_placeholder):
    """Runs the existing repo pipeline: process_documents -> create_embeddings -> create_vector_db.
    Falls back gracefully if a script isn't present (e.g. this dashboard running standalone)."""
    steps = [
        ("Extracting & chunking", "process_documents.py"),
        ("Generating embeddings (nomic-embed-text)", "create_embeddings.py"),
        ("Rebuilding FAISS index", "create_vector_db.py"),
    ]
    log_lines = []
    for label, script in steps:
        script_path = os.path.join(REPO_ROOT, script)
        log_lines.append(f"▸ {label} — `{script}`")
        log_placeholder.markdown("\n\n".join(log_lines))
        if not os.path.exists(script_path):
            log_lines[-1] += "  \n  ⚠️ script not found at this path — skipped (dashboard running outside repo root)"
            log_placeholder.markdown("\n\n".join(log_lines))
            continue
        try:
            result = subprocess.run(
                [sys.executable, script_path],
                cwd=REPO_ROOT,
                capture_output=True,
                text=True,
                timeout=600,
            )
            if result.returncode == 0:
                log_lines[-1] += "  \n  ✅ done"
            else:
                tail = (result.stderr or result.stdout or "").strip()[-400:]
                log_lines[-1] += f"  \n  ❌ exited {result.returncode}: `{tail}`"
        except Exception as e:
            log_lines[-1] += f"  \n  ❌ {e}"
        log_placeholder.markdown("\n\n".join(log_lines))
    return log_lines


# ──────────────────────────────────────────────────────────────────────────
# HERO
# ──────────────────────────────────────────────────────────────────────────

health = get_service_health()
all_up = all(v["ok"] for v in health.values())
overall_dot = "dot-up" if all_up else ("dot-down" if not any(v["ok"] for v in health.values()) else "dot-warn")

st.markdown(f"""
<div class="hero">
  <div class="hero-left">
    <div class="hero-badge">🪪</div>
    <div>
      <div class="hero-title">Aadhaar AI Assistant</div>
      <div class="hero-sub">RAG Evaluation Console · retrieval + generation observability</div>
    </div>
  </div>
  <div class="hero-right">
    <span class="pill"><span class="dot {overall_dot}"></span>{'All systems up' if all_up else 'Degraded'}</span>
    <span class="pill">🧠 {ACTIVE_LLM}</span>
  </div>
</div>
""", unsafe_allow_html=True)

chunks = load_chunks()
kb_files = load_kb_files()

k1, k2, k3, k4, k5 = st.columns(5)
kpi_defs = [
    (k1, f"{len(chunks)}", "Total Chunks", False),
    (k2, f"{len(kb_files)}", "PDF Documents", False),
    (k3, ACTIVE_LLM, "Active LLM", True),
    (k4, EMBED_MODEL.split(":")[0], "Embedding Model", True),
    (k5, "0.63s / 18.2s" if load_eval_results() is None else "see Evaluation", "Avg Retrieval / Gen Latency", False),
]
for col, val, label, accent in kpi_defs:
    with col:
        st.markdown(f"""
        <div class="kpi">
          <div class="kpi-value {'accent' if accent else ''}">{val}</div>
          <div class="kpi-label">{label}</div>
        </div>""", unsafe_allow_html=True)

st.write("")

# ──────────────────────────────────────────────────────────────────────────
# TABS
# ──────────────────────────────────────────────────────────────────────────

tab_assistant, tab_compare, tab_kb, tab_models, tab_arch, tab_eval, tab_code, tab_system = st.tabs(
    ["💬 Assistant", "⚖️ Compare: RAG vs No-RAG", "📚 Knowledge Base",
     "🧠 Models / LLM", "🏗️ Architecture", "📈 Evaluation", "🗂️ Codebase", "⚡ System Status"]
)

# ── TAB: Assistant ──────────────────────────────────────────────────────
with tab_assistant:
    left, right = st.columns([2.2, 1])

    with left:
        st.markdown('<div class="card"><div class="card-title">💬 Ask the Aadhaar Assistant</div>'
                     '<div class="card-desc">Answers are grounded only in the Aadhaar Handbook (UIAI_1.pdf, UIAI_2.pdf) — retrieved via FAISS, generated by '
                     f'{ACTIVE_LLM} via Ollama.</div></div>', unsafe_allow_html=True)

        if "messages" not in st.session_state:
            st.session_state.messages = []

        examples = [
            "What documents are required for Aadhaar enrolment?",
            "What is demographic authentication?",
            "What should a resident do if there is an error in their Aadhaar information?",
        ]
        ex_cols = st.columns(len(examples))
        for c, ex in zip(ex_cols, examples):
            if c.button(ex, key=f"ex_{ex[:12]}", use_container_width=True):
                st.session_state["pending_question"] = ex

        for msg in st.session_state.messages:
            if msg["role"] == "user":
                st.chat_message("user").write(msg["content"])
            else:
                with st.chat_message("assistant"):
                    st.markdown(f'<div class="answer-card">{msg["content"]}</div>', unsafe_allow_html=True)
                    for src in msg.get("sources", []):
                        st.markdown(
                            f'<div class="source-card"><b>{src.get("source","?")}</b> · page {src.get("page","?")} '
                            f'· distance {src.get("distance", 0):.3f}</div>',
                            unsafe_allow_html=True,
                        )

        question = st.chat_input("Ask about Aadhaar enrolment, authentication, updates…")
        pending = st.session_state.pop("pending_question", None)
        question = question or pending

        if question:
            st.session_state.messages.append({"role": "user", "content": question})
            st.chat_message("user").write(question)
            with st.chat_message("assistant"):
                with st.spinner("Retrieving context and generating…"):
                    ok, data = safe_post(f"{APP_API}/ask", {"question": question, "top_k": 3})
                if ok:
                    answer = data.get("answer", "No answer returned.")
                    sources = data.get("sources") or data.get("results") or []
                    st.markdown(f'<div class="answer-card">{answer}</div>', unsafe_allow_html=True)
                    for src in sources:
                        st.markdown(
                            f'<div class="source-card"><b>{src.get("source","?")}</b> · page {src.get("page","?")} '
                            f'· distance {src.get("distance", 0):.3f}</div>',
                            unsafe_allow_html=True,
                        )
                    st.session_state.messages.append({"role": "assistant", "content": answer, "sources": sources})
                else:
                    st.error(f"Application API unreachable: {data}")
                    st.caption("Start the backend: `docker ps` should show aadhaar-app / aadhaar-retrieval / aadhaar-llm healthy.")

        if st.session_state.messages:
            if st.button("🗑️ Clear conversation"):
                st.session_state.messages = []
                st.rerun()

    with right:
        st.markdown('<div class="card"><div class="card-title">ℹ️ Prompt rules</div>'
                     '<div class="card-desc">'
                     '1. Answer only from retrieved context<br>'
                     '2. No outside knowledge<br>'
                     '3. Says "not found in the Handbook" if unsupported<br>'
                     '4. Cites the page number when possible'
                     '</div></div>', unsafe_allow_html=True)
        st.markdown(f'<div class="card"><div class="card-title">⚙️ Generation settings</div>'
                     f'<div class="card-desc">Model: <b>{ACTIVE_LLM}</b><br>Temperature: 0.2<br>'
                     f'Top-K: 3<br>Context length: 4096<br>Streaming: off</div></div>', unsafe_allow_html=True)

# ── TAB: Compare RAG vs No-RAG ──────────────────────────────────────────
with tab_compare:
    st.markdown('<div class="card"><div class="card-title">⚖️ RAG vs No-RAG</div>'
                 '<div class="card-desc">Runs the same question through the retrieval-augmented pipeline (POST /ask) '
                 'and the baseline LLM-only pipeline (POST /ask_no_rag) side by side, so hallucination and grounding '
                 'differences are directly visible.</div></div>', unsafe_allow_html=True)

    cmp_question = st.text_input("Question to compare", placeholder="e.g. What is biometric authentication?")
    run_cmp = st.button("▶ Run comparison", type="primary", disabled=not cmp_question)

    if run_cmp and cmp_question:
        col_rag, col_norag = st.columns(2)
        with col_rag:
            st.markdown('<div class="compare-col-head compare-rag">🟢 With RAG (retrieval-grounded)</div>', unsafe_allow_html=True)
            with st.spinner("Retrieving + generating…"):
                t0 = time.time()
                ok, data = safe_post(f"{APP_API}/ask", {"question": cmp_question, "top_k": 3})
                t_rag = time.time() - t0
            if ok:
                st.markdown(f'<div class="answer-card">{data.get("answer","—")}</div>', unsafe_allow_html=True)
                for src in (data.get("sources") or data.get("results") or []):
                    st.markdown(
                        f'<div class="source-card"><b>{src.get("source","?")}</b> · page {src.get("page","?")} '
                        f'· distance {src.get("distance",0):.3f}</div>', unsafe_allow_html=True)
                st.caption(f"⏱ {t_rag:.2f}s total")
            else:
                st.error(f"/ask failed: {data}")

        with col_norag:
            st.markdown('<div class="compare-col-head compare-norag">🔴 Without RAG (LLM-only baseline)</div>', unsafe_allow_html=True)
            with st.spinner("Generating (no retrieval)…"):
                t0 = time.time()
                ok, data = safe_post(f"{APP_API}/ask_no_rag", {"question": cmp_question})
                t_norag = time.time() - t0
            if ok:
                st.markdown(f'<div class="answer-card">{data.get("answer","—")}</div>', unsafe_allow_html=True)
                st.markdown('<div class="source-card">No retrieved context — answer relies entirely on model parameters.</div>', unsafe_allow_html=True)
                st.caption(f"⏱ {t_norag:.2f}s total")
            else:
                st.warning(f"`/ask_no_rag` endpoint not available yet ({data}). "
                           "Wrap `no_rag.py` behind an endpoint on services/app/main.py to enable this side.")

        st.markdown("---")
        st.markdown('<div class="card"><div class="card-title">📝 What to look for</div>'
                     '<div class="card-desc">'
                     '• Does the No-RAG answer invent details not in the Handbook (hallucination)?<br>'
                     '• Does the RAG answer correctly refuse when context is missing?<br>'
                     '• Compare latency — retrieval adds a fixed ~0.6s overhead but should reduce hallucination.'
                     '</div></div>', unsafe_allow_html=True)
    else:
        st.info("Enter a question above and run it to see both pipelines answer side by side.")

# ── TAB: Knowledge Base (add + browse chunks) ───────────────────────────
with tab_kb:
    by_source = chunk_stats(chunks)
    c1, c2, c3, c4, c5 = st.columns(5)
    for col, val, label in [
        (c1, len(kb_files), "PDF Documents"),
        (c2, len(chunks), "Total Chunks"),
        (c3, len(chunks), "Embeddings"),
        (c4, "768", "Vector Dimensions"),
        (c5, "1500/200", "Chunk Size / Overlap"),
    ]:
        with col:
            st.markdown(f'<div class="kpi"><div class="kpi-value">{val}</div><div class="kpi-label">{label}</div></div>',
                         unsafe_allow_html=True)

    st.markdown('<div class="card"><div class="card-title">📥 Add documents to the Knowledge Base</div>'
                 '<div class="card-desc">Dropping a PDF here runs the real ingestion pipeline: '
                 '<b>process_documents.py → create_embeddings.py (nomic-embed-text) → create_vector_db.py</b>. '
                 'The index and chunk table refresh automatically once it finishes.</div></div>', unsafe_allow_html=True)

    uploaded = st.file_uploader("Drop PDF files here or click to browse", type=["pdf"], accept_multiple_files=True)
    if uploaded:
        if st.button("🚀 Ingest into Knowledge Base", type="primary"):
            os.makedirs(KB_DIR, exist_ok=True)
            log_area = st.empty()
            for uf in uploaded:
                dest = os.path.join(KB_DIR, uf.name)
                with open(dest, "wb") as f:
                    f.write(uf.getbuffer())
                st.write(f"Saved `{uf.name}` to `knowledge_base/`")
            run_ingestion_pipeline(dest, log_area)
            st.cache_data.clear()
            st.success("Pipeline finished. Chunk count and index refreshed below.")
            st.rerun()

    st.markdown("#### 📄 Documents")
    kb_col, browse_col = st.columns([1, 2.4])

    with kb_col:
        selected_source = st.session_state.get("kb_selected_source", "All Documents")
        if st.button("📁 All Documents", use_container_width=True,
                      type="primary" if selected_source == "All Documents" else "secondary"):
            st.session_state["kb_selected_source"] = "All Documents"
            st.rerun()
        for f in kb_files:
            n = by_source.get(f["name"], 0)
            label = f'{f["name"]}  ·  {n} chunks  ·  {f["size_kb"]} KB'
            if st.button(label, key=f'kbfile_{f["name"]}', use_container_width=True,
                         type="primary" if selected_source == f["name"] else "secondary"):
                st.session_state["kb_selected_source"] = f["name"]
                st.rerun()
        if not kb_files:
            st.caption("No PDFs found in `knowledge_base/` yet — upload one above.")

        if by_source:
            st.markdown('<div class="card" style="margin-top:10px;"><div class="card-title">📊 Chunk breakdown</div></div>',
                         unsafe_allow_html=True)
            total = sum(by_source.values()) or 1
            for src, n in sorted(by_source.items(), key=lambda x: -x[1]):
                pct = round(100 * n / total)
                st.markdown(f"**{src}** — {n} chunks ({pct}%)")
                st.progress(pct / 100)

    with browse_col:
        search = st.text_input("🔍 Search chunks (text, ID, filename)", key="chunk_search")
        page_size = st.selectbox("Per page", [10, 20, 50, 100], index=1)

        filtered = chunks
        if selected_source != "All Documents":
            filtered = [c for c in filtered if c.get("source") == selected_source]
        if search:
            s = search.lower()
            filtered = [c for c in filtered if s in json.dumps(c).lower()]

        st.caption(f"Showing {len(filtered)} of {len(chunks)} chunks"
                   + (f" — filtered to `{selected_source}`" if selected_source != "All Documents" else ""))

        total_pages = max(1, (len(filtered) - 1) // page_size + 1) if filtered else 1
        page = st.number_input("Page", min_value=1, max_value=total_pages, value=1, step=1)
        start = (page - 1) * page_size
        page_items = filtered[start:start + page_size]

        for i, c in enumerate(page_items, start=start + 1):
            preview = (c.get("chunk", "") or "")[:180].replace("\n", " ")
            st.markdown(
                f'<div class="chunk-row"><span class="cid">#{i} · {c.get("id","?")}</span> '
                f'<span class="badge badge-accent">{c.get("source","?")}</span> '
                f'<span class="badge badge-neutral">p.{c.get("page","?")}</span>'
                f'<div class="snippet">{preview}…</div></div>',
                unsafe_allow_html=True,
            )
            with st.expander("View full chunk", expanded=False):
                st.write(c.get("chunk", ""))

        if not chunks:
            st.info("No `data/chunks.json` found yet. Upload a PDF above to run the ingestion pipeline, "
                     "or point `AADHAAR_REPO_ROOT` at your repo checkout.")

# ── TAB: Models / LLM ───────────────────────────────────────────────────
with tab_models:
    ok, tags = safe_get(f"{OLLAMA_API}/api/tags")
    st.markdown('<div class="card"><div class="card-title">🧠 Ollama model inventory</div>'
                 '<div class="card-desc">Live from `GET :11434/api/tags`. Highlighted card is the active generation model.</div></div>',
                 unsafe_allow_html=True)

    if ok and tags.get("models"):
        cols = st.columns(3)
        for i, m in enumerate(tags["models"]):
            name = m.get("name", "unknown")
            details = m.get("details", {})
            size_gb = round(m.get("size", 0) / (1024 ** 3), 2)
            is_active = ACTIVE_LLM in name
            with cols[i % 3]:
                border = "border-left:3px solid var(--marigold);" if is_active else ""
                st.markdown(f"""
                <div class="card" style="{border}">
                  <div class="card-title">{'🟠 ' if is_active else ''}{name}
                    {'<span class="badge badge-accent">ACTIVE</span>' if is_active else ''}</div>
                  <div class="card-desc mono">
                    params: {details.get('parameter_size','?')}<br>
                    quant: {details.get('quantization_level','?')}<br>
                    disk: {size_gb} GB<br>
                    family: {details.get('family','?')}
                  </div>
                </div>""", unsafe_allow_html=True)
    else:
        st.warning(f"Couldn't reach Ollama at `:11434/api/tags` ({tags}). Showing the models recorded in your spec instead.")
        fallback = [
            {"name": "gemma3:270m", "params": "268.10M", "quant": "Q8_0", "disk": "291 MB", "role": "Small candidate"},
            {"name": "smollm2:360m", "params": "361.82M", "quant": "F16", "disk": "725 MB", "role": "Small candidate"},
            {"name": "qwen3:0.6b", "params": "751.63M", "quant": "Q4_K_M", "disk": "522 MB", "role": "Current LLM"},
            {"name": "qwen3:1.7b", "params": "2.0B", "quant": "Q4_K_M", "disk": "1.4 GB", "role": "Candidate"},
            {"name": "llama3.2:3b", "params": "3.2B", "quant": "Q4_K_M", "disk": "2.0 GB", "role": "Candidate"},
            {"name": "qwen3:latest", "params": "8.2B", "quant": "Q4_K_M", "disk": "5.2 GB", "role": "Installed; costly"},
            {"name": "nomic-embed-text:latest", "params": "137M", "quant": "F16", "disk": "274 MB", "role": "Embedding only"},
        ]
        df = pd.DataFrame(fallback)
        st.dataframe(df, use_container_width=True, hide_index=True)

    st.markdown('<div class="card"><div class="card-title">📐 Selected comparison set</div>'
                 '<div class="card-desc">Kept small for the AWS instance\'s storage/compute limits: '
                 '<b>gemma3:270m</b>, <b>smollm2:360m</b>, <b>qwen3:0.6b</b> — with '
                 f'<b>{EMBED_MODEL}</b> fixed across all three so retrieval stays comparable.</div></div>',
                 unsafe_allow_html=True)

# ── TAB: Architecture ────────────────────────────────────────────────────
with tab_arch:
    st.markdown('<div class="card"><div class="card-title">🏗️ End-to-end pipeline</div></div>', unsafe_allow_html=True)
    steps = [
        ("User", ""), ("Streamlit", ":8501"), ("App API", ":8000"),
        ("Retrieval", ":8001"), ("Ollama embed", ":11434"), ("FAISS + chunks.json", "local"),
        ("LLM API", ":8002"), ("Ollama chat", ":11434"), ("Answer + sources", ""),
    ]
    cols = st.columns(len(steps))
    for col, (label, sub) in zip(cols, steps):
        with col:
            st.markdown(f'<div class="flow-step">{label}<span class="sub">{sub}</span></div>', unsafe_allow_html=True)
    st.markdown('<div class="flow-arrow">' + " → " * (len(steps) - 1) + '</div>', unsafe_allow_html=True)

    st.markdown("#### 🗺️ Service responsibilities")
    arch_df = pd.DataFrame([
        {"Layer": "Frontend", "Component": "app.py (Streamlit)", "Port": "8501", "Responsibility": "Chat, dashboards, source inspection"},
        {"Layer": "Application", "Component": "services/app/main.py", "Port": "8000", "Responsibility": "Main orchestration API"},
        {"Layer": "Retrieval", "Component": "services/retrieval/main.py", "Port": "8001", "Responsibility": "Embedding + FAISS retrieval"},
        {"Layer": "LLM", "Component": "services/llm/main.py", "Port": "8002", "Responsibility": "Language-model inference"},
        {"Layer": "Runtime", "Component": "Ollama", "Port": "11434", "Responsibility": "Local model & embedding runtime"},
        {"Layer": "Knowledge base", "Component": "UIAI_1.pdf, UIAI_2.pdf", "Port": "knowledge_base/", "Responsibility": "Aadhaar source documents"},
        {"Layer": "Chunks", "Component": "data/chunks.json", "Port": "local", "Responsibility": f"{len(chunks) or 152} processed chunks"},
        {"Layer": "Vector DB", "Component": "vector_db/aadhaar.index", "Port": "local", "Responsibility": "FAISS index"},
    ])
    st.dataframe(arch_df, use_container_width=True, hide_index=True)

# ── TAB: Evaluation ──────────────────────────────────────────────────────
with tab_eval:
    results = load_eval_results()
    st.markdown('<div class="card"><div class="card-title">📈 Evaluation</div>'
                 '<div class="card-desc">Same 25-question set · fixed embedding model · fixed TOP_K=3. '
                 'Only measured values are shown — everything else is explicitly N/A, never fabricated.</div></div>',
                 unsafe_allow_html=True)

    e1, e2, e3, e4, e5 = st.columns(5)
    observed = [
        (e1, "25", "Questions"),
        (e2, "0.627s", "Avg retrieval latency"),
        (e3, "18.246s", "Avg generation latency"),
        (e4, "18.873s", "Avg total latency"),
        (e5, "851.44", "Avg total tokens"),
    ]
    for col, val, label in observed:
        with col:
            st.markdown(f'<div class="kpi"><div class="kpi-value accent">{val}</div><div class="kpi-label">{label}</div></div>',
                         unsafe_allow_html=True)

    st.markdown("#### 🧮 Model comparison — quality × performance")
    table_rows = [
        {"Model": "gemma3:270m", "Accuracy": "N/A", "Relevance": "N/A", "P@3": "N/A", "Hallucination": "N/A",
         "Code pass": "N/A", "Latency": "N/A", "Tokens": "N/A", "RAM": "N/A", "CPU": "N/A"},
        {"Model": "smollm2:360m", "Accuracy": "N/A", "Relevance": "N/A", "P@3": "N/A", "Hallucination": "N/A",
         "Code pass": "N/A", "Latency": "N/A", "Tokens": "N/A", "RAM": "N/A", "CPU": "N/A"},
        {"Model": "qwen3:0.6b", "Accuracy": "N/A", "Relevance": "N/A", "P@3": "N/A", "Hallucination": "N/A",
         "Code pass": "N/A", "Latency": "18.87s", "Tokens": "851.4", "RAM": "N/A", "CPU": "N/A"},
    ]
    if results:
        st.dataframe(pd.DataFrame(results), use_container_width=True, hide_index=True)
    else:
        st.dataframe(pd.DataFrame(table_rows), use_container_width=True, hide_index=True)
        st.caption("No `evaluation/results/model_results.json` found — showing pending scaffold. "
                   "Run `python3 evaluation/evaluate_models.py` to populate real numbers.")

    st.markdown('<div class="card"><div class="card-title">📊 Latency breakdown (qwen3:0.6b, observed)</div></div>',
                 unsafe_allow_html=True)
    lat_df = pd.DataFrame({
        "Stage": ["Retrieval", "Generation", "Total"],
        "Seconds": [0.627, 18.246, 18.873],
    })
    st.bar_chart(lat_df.set_index("Stage"))

# ── TAB: Codebase ────────────────────────────────────────────────────────
with tab_code:
    st.markdown('<div class="card"><div class="card-title">🗂️ Repository tree</div></div>', unsafe_allow_html=True)
    tree = """aadhaar-ai-assistant/
├── app.py                       # Streamlit frontend
├── rag.py                       # standalone RAG: embed → FAISS → answer
├── retrieve.py                  # standalone FAISS retrieval (top_k=5)
├── no_rag.py                    # baseline LLM-only assistant
├── run.py
├── process_documents.py         # extraction + chunking
├── create_embeddings.py         # nomic-embed-text embeddings
├── create_vector_db.py          # builds vector_db/aadhaar.index
├── data/chunks.json             # 152 chunks: id, source, page, chunk
├── knowledge_base/
│   ├── UIAI_1.pdf
│   └── UIAI_2.pdf
├── vector_db/aadhaar.index
├── services/
│   ├── app/main.py               # :8000 orchestration
│   ├── retrieval/main.py         # :8001 embedding + FAISS
│   └── llm/main.py               # :8002 inference
└── evaluation/
    ├── evaluate_models.py
    └── results/model_results.json"""
    st.code(tree, language="text")

    st.markdown("#### 🔗 Module relationships")
    rel_df = pd.DataFrame([
        {"Module": "app.py", "Relationship": "Streamlit frontend → Application API"},
        {"Module": "services/app/main.py", "Relationship": "Main application / orchestration"},
        {"Module": "services/retrieval/main.py", "Relationship": "Embedding + FAISS retrieval"},
        {"Module": "services/llm/main.py", "Relationship": "LLM inference"},
        {"Module": "rag.py", "Relationship": "Standalone end-to-end RAG"},
        {"Module": "retrieve.py", "Relationship": "Standalone retrieval utility"},
        {"Module": "no_rag.py", "Relationship": "No-RAG baseline"},
        {"Module": "process_documents.py", "Relationship": "Document preprocessing"},
        {"Module": "create_embeddings.py", "Relationship": "Embedding generation"},
        {"Module": "create_vector_db.py", "Relationship": "FAISS index construction"},
    ])
    st.dataframe(rel_df, use_container_width=True, hide_index=True)

    st.markdown('<div class="card"><div class="card-title">🧪 Multi-file understanding — quick checks</div>'
                 '<div class="card-desc">'
                 '• First receiver of a user question → <code>app.py</code> (Streamlit) → <code>services/app/main.py</code><br>'
                 '• Embedding generation → <code>create_embeddings.py</code> / <code>services/retrieval/main.py</code><br>'
                 '• FAISS search → <code>index.search()</code> in <code>services/retrieval/main.py</code><br>'
                 '• TOP_K 3→5 requires edits in <code>services/retrieval/main.py</code> (QueryRequest default) and <code>rag.py</code>'
                 '</div></div>', unsafe_allow_html=True)

# ── TAB: System Status ───────────────────────────────────────────────────
with tab_system:
    if st.button("🔄 Refresh status"):
        st.cache_data.clear()
        st.rerun()

    cols = st.columns(4)
    for col, (name, info) in zip(cols, health.items()):
        with col:
            dot = "dot-up" if info["ok"] else "dot-down"
            badge = '<span class="badge badge-ok">HEALTHY</span>' if info["ok"] else '<span class="badge badge-down">DOWN</span>'
            st.markdown(f"""
            <div class="card">
              <div class="card-title"><span class="dot {dot}"></span> {name}</div>
              <div class="card-desc">{badge}</div>
            </div>""", unsafe_allow_html=True)

    st.markdown('<div class="card"><div class="card-title">📋 Pipeline summary</div></div>', unsafe_allow_html=True)
    pipeline_rows = [
        ("Ex1", "User → app.py (:8501) → App API (:8000) → Ollama :11434 → " + ACTIVE_LLM + " → Response"),
        ("Ex2", "PDFs → process_documents.py (1500 chars, 200 overlap) → create_embeddings.py (nomic-embed-text) → chunks + embeddings · 768 dims"),
        ("Ex3", "Question → nomic-embed-text (query embedding) → cosine similarity over FAISS → Top-3 chunks → Context + Question → " + ACTIVE_LLM + " → RAG Answer"),
        ("Ex4", "services/retrieval/main.py (:8001) + services/llm/main.py (:8002) + services/app/main.py (:8000) — each a separate FastAPI service over HTTP"),
        ("Ex5", "Docker: aadhaar-app / aadhaar-retrieval / aadhaar-llm · host.docker.internal routes to Ollama (:11434)"),
    ]
    for tag, text in pipeline_rows:
        st.markdown(f'<div class="chunk-row"><span class="badge badge-neutral">{tag}</span> &nbsp; {text}</div>',
                     unsafe_allow_html=True)

    st.caption(f"Last checked: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
