"""
Aadhaar AI Assistant — Week 3 + Week 4 Evaluation Console

Week 3:
    Assistant
    RAG vs No-RAG
    Knowledge Base
    Models / LLM
    Architecture
    Codebase
    System Status

Week 4:
    25-question model evaluation
    Seven-category evaluation
    RAG analysis
    Guardrails
    AI output testing
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


# ============================================================================
# CONFIG
# ============================================================================

APP_API = "http://localhost:8000"
RETRIEVAL_API = "http://localhost:8001"
LLM_API = "http://localhost:8002"
OLLAMA_API = "http://localhost:11434"

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

CHUNKS_FILE = os.path.join(REPO_ROOT, "data", "chunks.json")
KB_DIR = os.path.join(REPO_ROOT, "knowledge_base")
VECTOR_DB_DIR = os.path.join(REPO_ROOT, "vector_db")
EVAL_DIR = os.path.join(REPO_ROOT, "evaluation")
RESULTS_DIR = os.path.join(EVAL_DIR, "results")

ACTIVE_LLM = "qwen2.5-coder:1.5b"
EMBED_MODEL = "nomic-embed-text:latest"

MODELS = [
    "qwen2.5-coder:1.5b",
    "llama3.2:3b",
    "deepseek-coder:1.3b",
]

REQUEST_TIMEOUT = 5
GEN_TIMEOUT = 300


RESULT_FILES = {
    "25_raw": os.path.join(
        RESULTS_DIR,
        "model_results_25_newmodels.json",
    ),
    "25_quality": os.path.join(
        RESULTS_DIR,
        "quality_results_25_newmodels.json",
    ),
    "v5_raw": os.path.join(
        RESULTS_DIR,
        "model_results_v5_newmodels.json",
    ),
    "v5_quality": os.path.join(
        RESULTS_DIR,
        "quality_results_v5_newmodels_corrected.json",
    ),
    "rag": os.path.join(
        RESULTS_DIR,
        "rag_analysis_25_newmodels.json",
    ),
    "guardrails": os.path.join(
        RESULTS_DIR,
        "guardrail_results.json",
    ),
    "ai_output": os.path.join(
        RESULTS_DIR,
        "ai_output_test_results.json",
    ),
}


# ============================================================================
# PAGE CONFIG
# ============================================================================

st.set_page_config(
    page_title="Aadhaar AI Assistant · Evaluation Console",
    page_icon="🪪",
    layout="wide",
    initial_sidebar_state="expanded",
)


# ============================================================================
# DESIGN SYSTEM
# ============================================================================

CSS = """
<style>

@import url(
    'https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500&display=swap'
);

:root {
    --navy-950: #071A2D;
    --navy-900: #0B2850;
    --navy-800: #123B67;
    --blue-700: #1769C2;
    --blue-600: #2380D5;
    --blue-100: #EAF3FC;
    --blue-050: #F4F8FC;

    --page: #F4F7FB;
    --card: #FFFFFF;
    --border: #D8E3EF;

    --text: #172B4D;
    --muted: #5B718B;
    --subtle: #7B8EA3;

    --green: #16845B;
    --green-bg: #EAF7F1;

    --amber: #B7791F;
    --amber-bg: #FFF7E6;

    --red: #C53030;
    --red-bg: #FDEEEE;

    --radius: 14px;
}

/* Base */
html,
body,
[class*="css"] {
    font-family: 'Manrope', -apple-system, BlinkMacSystemFont, sans-serif;
}

.stApp {
    background: var(--page) !important;
    color: var(--text) !important;
}

.main .block-container {
    max-width: 1450px;
    padding-top: 1.5rem;
    padding-bottom: 3rem;
}

#MainMenu,
footer {
    visibility: hidden;
}

/* Sidebar */
section[data-testid="stSidebar"] {
    background: var(--navy-950) !important;
    border-right: 1px solid #183D61;
}

section[data-testid="stSidebar"] * {
    color: #F4F8FC !important;
}

section[data-testid="stSidebar"] p {
    color: #BBD0E5 !important;
}

section[data-testid="stSidebar"] div[role="radiogroup"] label {
    border-radius: 9px;
    padding: 7px 10px;
    margin: 2px 0;
}

section[data-testid="stSidebar"]
div[role="radiogroup"]
label[data-checked="true"] {
    background: var(--blue-700) !important;
}

section[data-testid="stSidebar"] hr {
    border-color: #25496B !important;
}

.sidebar-model {
    background: #123B67;
    border: 1px solid #2C5B82;
    border-radius: 8px;
    padding: 8px 10px;
    font-family: 'IBM Plex Mono', monospace;
    font-size: 11px;
    color: #DCEBFA !important;
}

/* Hero */
.hero {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    padding: 22px 26px;
    margin-bottom: 18px;
    border-radius: 18px;
    background: linear-gradient(
        135deg,
        #092B55 0%,
        #124C86 55%,
        #1769B5 100%
    );
    border: 1px solid #4B8BC1;
    box-shadow: 0 8px 24px rgba(7, 35, 70, .18);
}

.hero-left {
    display: flex;
    align-items: center;
    gap: 15px;
}

.hero-badge {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    background: #FFB52E;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
}

.hero-title {
    color: #FFFFFF !important;
    font-size: 21px;
    font-weight: 800;
}

.hero-sub {
    color: #DCEEFF !important;
    font-size: 12.5px;
    margin-top: 3px;
}

.hero-right {
    display: flex;
    gap: 8px;
    align-items: center;
    flex-wrap: wrap;
}

.pill {
    padding: 7px 11px;
    border-radius: 999px;
    color: #FFFFFF !important;
    background: rgba(4, 30, 57, .45);
    border: 1px solid rgba(200, 230, 255, .30);
    font-size: 11px;
    font-weight: 700;
}

.dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    display: inline-block;
    margin-right: 5px;
}

.dot-up {
    background: #34D399;
}

.dot-down {
    background: #F2685C;
}

.dot-warn {
    background: #F5B84F;
}

/* Cards */
.card {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 18px 20px;
    margin-bottom: 14px;
    box-shadow: 0 3px 12px rgba(31, 65, 99, .06);
}

.card-title {
    color: var(--text);
    font-size: 15px;
    font-weight: 800;
    margin-bottom: 4px;
}

.card-desc {
    color: var(--muted);
    font-size: 12.5px;
    line-height: 1.55;
}

/* KPI */
.kpi {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 15px 16px;
    box-shadow: 0 3px 12px rgba(31, 65, 99, .05);
}

.kpi-value {
    color: var(--text);
    font-size: 23px;
    font-weight: 800;
    line-height: 1.15;
}

.kpi-value.accent {
    color: var(--blue-700);
}

.kpi-label {
    color: var(--muted);
    font-size: 11.5px;
    margin-top: 5px;
}

/* Section headers */
.section-title {
    color: var(--text);
    font-size: 18px;
    font-weight: 800;
    margin: 8px 0 3px;
}

.section-subtitle {
    color: var(--muted);
    font-size: 12.5px;
    margin-bottom: 14px;
}

/* Status badges */
.badge {
    display: inline-block;
    padding: 3px 8px;
    border-radius: 6px;
    font-size: 10.5px;
    font-weight: 800;
}

.badge-ok {
    background: var(--green-bg);
    color: var(--green);
}

.badge-warn {
    background: var(--amber-bg);
    color: var(--amber);
}

.badge-down {
    background: var(--red-bg);
    color: var(--red);
}

.badge-blue {
    background: var(--blue-100);
    color: var(--blue-700);
}

/* Answer */
.answer-card {
    background: #FFFFFF;
    color: var(--text) !important;
    border: 1px solid var(--border);
    border-left: 4px solid var(--blue-700);
    border-radius: 11px;
    padding: 15px 17px;
    margin: 9px 0;
    line-height: 1.6;
}

.answer-card *,
.answer-card p,
.answer-card li {
    color: var(--text) !important;
}

.source-card {
    background: var(--blue-050);
    color: var(--text) !important;
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 8px 11px;
    margin-top: 6px;
    font-size: 11.5px;
}

/* Tables */
div[data-testid="stDataFrame"] {
    border: 1px solid var(--border);
    border-radius: 10px;
    overflow: hidden;
    background: #FFFFFF;
}

/* Inputs */
input,
textarea,
div[data-baseweb="select"] > div {
    background: #FFFFFF !important;
    color: var(--text) !important;
    border-color: #BFD0E0 !important;
}

input::placeholder,
textarea::placeholder {
    color: #71849A !important;
}

/* Buttons */
.stButton > button {
    background: var(--blue-700) !important;
    color: #FFFFFF !important;
    border: 1px solid var(--blue-700) !important;
    border-radius: 8px !important;
    font-weight: 700 !important;
}

.stButton > button:hover {
    background: var(--blue-600) !important;
}

/* Expanders */
[data-testid="stExpander"] {
    background: #FFFFFF !important;
    border: 1px solid var(--border) !important;
    border-radius: 10px !important;
}

[data-testid="stExpander"] * {
    color: var(--text);
}

/* Metrics */
div[data-testid="stMetric"] {
    background: #FFFFFF;
    border: 1px solid var(--border);
    border-radius: 11px;
    padding: 10px;
}

div[data-testid="stMetricLabel"] {
    color: var(--muted) !important;
}

div[data-testid="stMetricValue"] {
    color: var(--text) !important;
}

/* Chat */
[data-testid="stChatInput"] textarea {
    color: var(--text) !important;
}

/* Code */
pre {
    background: #0B2547 !important;
    color: #E8F1FA !important;
    border-radius: 9px;
}

pre code {
    color: #E8F1FA !important;
    background: transparent !important;
    font-family: 'IBM Plex Mono', monospace;
}

code {
    color: #1769C2 !important;
    font-family: 'IBM Plex Mono', monospace;
}

/* Dividers */
hr {
    border-color: var(--border) !important;
}


/* Guardrail UI */
.guardrail-flow {
    display: flex;
    align-items: stretch;
    gap: 8px;
    margin: 12px 0 18px 0;
    overflow-x: auto;
}

.flow-step {
    min-width: 135px;
    padding: 14px 12px;
    background: #FFFFFF;
    border: 1px solid #D8E3EF;
    border-radius: 12px;
    text-align: center;
    box-shadow: 0 2px 8px rgba(23, 43, 77, .05);
}

.flow-step b {
    display: block;
    color: #172B4D !important;
    font-size: 13px;
    margin-top: 7px;
}

.flow-step span {
    display: block;
    color: #5B718B !important;
    font-size: 11px;
    margin-top: 4px;
}

.flow-number {
    width: 28px;
    height: 28px;
    line-height: 28px;
    margin: 0 auto;
    border-radius: 50%;
    background: #EAF3FC;
    color: #1769C2 !important;
    font-weight: 800;
}

.flow-allow {
    border-color: #16845B;
    background: #EAF7F1;
}

.flow-allow .flow-number {
    background: #16845B;
    color: #FFFFFF !important;
}

.flow-arrow {
    display: flex;
    align-items: center;
    color: #7B8EA3;
    font-size: 22px;
    font-weight: 700;
}

.guardrail-control {
    min-height: 175px;
    padding: 17px;
    background: #FFFFFF;
    border: 1px solid #D8E3EF;
    border-radius: 14px;
    box-shadow: 0 2px 8px rgba(23, 43, 77, .05);
}

.guardrail-icon {
    font-size: 18px;
    margin-bottom: 8px;
}

.guardrail-control-title {
    color: #172B4D !important;
    font-weight: 800;
    font-size: 14px;
}

.guardrail-control-desc {
    color: #5B718B !important;
    font-size: 11px;
    line-height: 1.45;
    margin-top: 7px;
}

.guardrail-value {
    display: inline-block;
    margin-top: 12px;
    padding: 5px 9px;
    border-radius: 7px;
    background: #EAF3FC;
    color: #1769C2 !important;
    font-size: 11px;
    font-weight: 800;
}

.guardrail-result {
    margin: 12px 0;
    padding: 17px;
    border-radius: 12px;
    border: 1px solid #D8E3EF;
}

.guardrail-result.allowed {
    background: #EAF7F1;
    border-color: #9AD5B9;
}

.guardrail-result.blocked {
    background: #FDEEEE;
    border-color: #E8AAAA;
}

.guardrail-result-title {
    color: #172B4D !important;
    font-size: 14px;
    font-weight: 800;
}

.guardrail-result-reason {
    color: #5B718B !important;
    font-size: 12px;
    margin-top: 6px;
}

.guardrail-result-path {
    color: #1769C2 !important;
    font-size: 12px;
    font-weight: 700;
    margin-top: 9px;
}

.comparison-grid {
    display: flex;
    align-items: center;
    gap: 14px;
    margin-top: 10px;
}

.comparison-card {
    flex: 1;
    min-height: 180px;
    padding: 18px;
    border-radius: 14px;
    background: #FFFFFF;
}

.comparison-card.before {
    border: 1px solid #E8AAAA;
    background: #FFF8F8;
}

.comparison-card.after {
    border: 1px solid #9AD5B9;
    background: #F5FCF8;
}

.comparison-label {
    font-size: 10px;
    font-weight: 800;
    letter-spacing: .08em;
    color: #7B8EA3 !important;
}

.comparison-title {
    margin-top: 7px;
    color: #172B4D !important;
    font-size: 15px;
    font-weight: 800;
}

.comparison-card li {
    color: #52677F !important;
    font-size: 12px;
    margin: 7px 0;
}

.comparison-arrow {
    color: #1769C2;
    font-size: 28px;
    font-weight: 800;
}


</style>
"""

st.markdown(CSS, unsafe_allow_html=True)


# ============================================================================
# HELPERS
# ============================================================================

def safe_get(url, timeout=REQUEST_TIMEOUT):
    try:
        response = requests.get(url, timeout=timeout)

        if response.ok:
            return True, response.json()

        return False, f"HTTP {response.status_code}"

    except Exception as exc:
        return False, str(exc)


def safe_post(url, payload, timeout=GEN_TIMEOUT):
    try:
        response = requests.post(
            url,
            json=payload,
            timeout=timeout,
        )

        if response.ok:
            return True, response.json()

        return (
            False,
            f"HTTP {response.status_code}: "
            f"{response.text[:300]}",
        )

    except Exception as exc:
        return False, str(exc)


def load_json(path):
    if not os.path.exists(path):
        return None

    try:
        with open(path, "r", encoding="utf-8") as f:
            return json.load(f)
    except Exception:
        return None


@st.cache_data(ttl=15)
def get_service_health():
    services = {
        "UI / App (:8000)": f"{APP_API}/health",
        "Retrieval (:8001)": f"{RETRIEVAL_API}/health",
        "LLM (:8002)": f"{LLM_API}/health",
        "Ollama (:11434)": f"{OLLAMA_API}/api/tags",
    }

    result = {}

    for name, url in services.items():
        ok, data = safe_get(url, timeout=3)
        result[name] = {
            "ok": ok,
            "data": data,
        }

    return result


@st.cache_data(ttl=10)
def load_chunks():
    data = load_json(CHUNKS_FILE)
    return data if isinstance(data, list) else []


@st.cache_data(ttl=10)
def load_kb_files():
    if not os.path.isdir(KB_DIR):
        return []

    files = []

    for filename in sorted(os.listdir(KB_DIR)):
        if filename.lower().endswith(".pdf"):
            path = os.path.join(KB_DIR, filename)

            files.append({
                "name": filename,
                "size_kb": round(
                    os.path.getsize(path) / 1024,
                    1,
                ),
            })

    return files


def chunk_stats(chunks):
    counts = {}

    for chunk in chunks:
        source = chunk.get("source", "unknown")
        counts[source] = counts.get(source, 0) + 1

    return counts


def load_result(name):
    return load_json(RESULT_FILES[name])


def number(value):
    return isinstance(value, (int, float)) and not isinstance(value, bool)


def format_metric(value, suffix=""):
    if value is None:
        return "N/A"

    if isinstance(value, float):
        return f"{value:.2f}{suffix}"

    return f"{value}{suffix}"


def flatten_numeric(obj, prefix=""):
    """
    Recursively collect numeric values from nested evaluation JSON.
    Used only for defensive rendering of quality-result structures.
    """
    output = {}

    if isinstance(obj, dict):
        for key, value in obj.items():
            new_prefix = (
                f"{prefix}.{key}"
                if prefix
                else key
            )

            if number(value):
                output[new_prefix] = value

            elif isinstance(value, (dict, list)):
                output.update(
                    flatten_numeric(
                        value,
                        new_prefix,
                    )
                )

    elif isinstance(obj, list):
        for index, value in enumerate(obj):
            new_prefix = (
                f"{prefix}[{index}]"
                if prefix
                else f"[{index}]"
            )

            if number(value):
                output[new_prefix] = value

            elif isinstance(value, (dict, list)):
                output.update(
                    flatten_numeric(
                        value,
                        new_prefix,
                    )
                )

    return output


def find_metric(data, candidates):
    """
    Find the first matching metric key recursively.
    Matching is case-insensitive and tolerant of punctuation.
    """
    flattened = flatten_numeric(data)

    normalized = {
        re_key(path): value
        for path, value in flattened.items()
    }

    for candidate in candidates:
        target = re_key(candidate)

        for path, value in normalized.items():
            if (
                path == target
                or path.endswith("." + target)
                or target in path
            ):
                return value

    return None


def re_key(value):
    return "".join(
        character.lower()
        for character in str(value)
        if character.isalnum()
    )


def run_script(script, env=None, timeout=3600):
    environment = os.environ.copy()

    if env:
        environment.update(env)

    return subprocess.run(
        [sys.executable, script],
        cwd=REPO_ROOT,
        env=environment,
        capture_output=True,
        text=True,
        timeout=timeout,
    )


def validate_25_questions(data):
    if not isinstance(data, list):
        return False, "Question file must contain a JSON list."

    if len(data) != 25:
        return False, f"Expected exactly 25 questions; found {len(data)}."

    required = {"id", "question"}

    for index, item in enumerate(data, start=1):
        if not isinstance(item, dict):
            return False, f"Question {index} is not a JSON object."

        missing = required - set(item.keys())

        if missing:
            return False, (
                f"Question {index} is missing: "
                f"{', '.join(sorted(missing))}"
            )

    ids = [item["id"] for item in data]

    if len(set(ids)) != 25:
        return False, "Question IDs must be unique."

    return True, "25 questions validated successfully."


def render_status_badge(ok, text=None):
    if ok:
        label = text or "PASS"
        return (
            f'<span class="badge badge-ok">✓ {label}</span>'
        )

    label = text or "FAIL"
    return (
        f'<span class="badge badge-down">✗ {label}</span>'
    )


def render_model_kpis(model_rows):
    columns = st.columns(len(model_rows))

    for column, row in zip(columns, model_rows):
        with column:
            st.markdown(
                f"""
                <div class="card">
                    <div class="card-title">
                        {row["model"]}
                    </div>
                    <div class="card-desc">
                        Primary measured metrics
                    </div>
                </div>
                """,
                unsafe_allow_html=True,
            )

            for label, value in row["metrics"].items():
                st.metric(label, value)


# ============================================================================
# HEADER / GLOBAL STATE
# ============================================================================

health = get_service_health()

all_up = all(
    item["ok"]
    for item in health.values()
)

if all_up:
    overall_dot = "dot-up"
    overall_text = "All systems up"
elif any(item["ok"] for item in health.values()):
    overall_dot = "dot-warn"
    overall_text = "Degraded"
else:
    overall_dot = "dot-down"
    overall_text = "Services unavailable"


st.markdown(
    f"""
<div class="hero">
    <div class="hero-left">
        <div class="hero-badge">🪪</div>
        <div>
            <div class="hero-title">Aadhaar AI Assistant</div>
            <div class="hero-sub">
                Week 3 RAG Application · Week 4 LLM Evaluation Console
            </div>
        </div>
    </div>
    <div class="hero-right">
        <span class="pill">
            <span class="dot {overall_dot}"></span>
            {overall_text}
        </span>
        <span class="pill">🧠 {ACTIVE_LLM}</span>
    </div>
</div>
""",
    unsafe_allow_html=True,
)


chunks = load_chunks()
kb_files = load_kb_files()

k1, k2, k3, k4, k5 = st.columns(5)

global_kpis = [
    (k1, str(len(chunks)), "Knowledge chunks", False),
    (k2, str(len(kb_files)), "PDF documents", False),
    (k3, ACTIVE_LLM, "Active LLM", True),
    (k4, EMBED_MODEL.split(":")[0], "Embedding model", True),
    (
        k5,
        "3",
        "Week 4 models",
        True,
    ),
]

for column, value, label, accent in global_kpis:
    with column:
        st.markdown(
            f"""
            <div class="kpi">
                <div class="kpi-value {"accent" if accent else ""}">
                    {value}
                </div>
                <div class="kpi-label">
                    {label}
                </div>
            </div>
            """,
            unsafe_allow_html=True,
        )


# ============================================================================
# SIDEBAR
# ============================================================================

with st.sidebar:

    st.markdown("## Aadhaar AI Assistant")
    st.caption("RAG + LLM Evaluation Console")

    page = st.radio(
        "Navigation",
        [
            "Assistant",
            "RAG vs No-RAG",
            "Knowledge Base",
            "Models / LLM",
            "Architecture",
            "Evaluation",
            "Codebase",
            "System Status",
        ],
        label_visibility="collapsed",
    )

    st.divider()

    st.caption("SYSTEM")

    st.markdown("**Active LLM**")
    st.markdown(
        f'<div class="sidebar-model">{ACTIVE_LLM}</div>',
        unsafe_allow_html=True,
    )

    st.markdown("**Embedding model**")
    st.markdown(
        f'<div class="sidebar-model">'
        f'{EMBED_MODEL}'
        f'</div>',
        unsafe_allow_html=True,
    )

    st.markdown("**Evaluation set**")
    st.markdown(
        '<div class="sidebar-model">25 questions · 3 models</div>',
        unsafe_allow_html=True,
    )


# ============================================================================
# ASSISTANT — WEEK 3
# ============================================================================

if page == "Assistant":

    left, right = st.columns([2.2, 1])

    with left:

        st.markdown(
            """
            <div class="card">
                <div class="card-title">
                    💬 Ask the Aadhaar Assistant
                </div>
                <div class="card-desc">
                    Answers are grounded in the Aadhaar Handbook
                    through FAISS retrieval and local Ollama inference.
                </div>
            </div>
            """,
            unsafe_allow_html=True,
        )

        if "messages" not in st.session_state:
            st.session_state.messages = []

        examples = [
            "What documents are required for Aadhaar enrolment?",
            "What is demographic authentication?",
            "What should a resident do if there is an error in their Aadhaar information?",
        ]

        example_columns = st.columns(len(examples))

        for column, example in zip(
            example_columns,
            examples,
        ):
            if column.button(
                example,
                key=f"example_{example[:10]}",
                width="stretch",
            ):
                st.session_state["pending_question"] = example

        for message in st.session_state.messages:

            if message["role"] == "user":
                st.chat_message("user").write(
                    message["content"]
                )

            else:
                with st.chat_message("assistant"):

                    st.markdown(
                        f'<div class="answer-card">'
                        f'{message["content"]}'
                        f'</div>',
                        unsafe_allow_html=True,
                    )

                    for source in message.get(
                        "sources",
                        [],
                    ):
                        st.markdown(
                            f"""
                            <div class="source-card">
                                <b>{source.get("source", "?")}</b>
                                · page {source.get("page", "?")}
                                · distance {source.get("distance", 0):.3f}
                            </div>
                            """,
                            unsafe_allow_html=True,
                        )

        question = st.chat_input(
            "Ask about Aadhaar enrolment, authentication, updates…"
        )

        pending = st.session_state.pop(
            "pending_question",
            None,
        )

        question = question or pending

        if question:

            st.session_state.messages.append({
                "role": "user",
                "content": question,
            })

            st.chat_message("user").write(question)

            with st.chat_message("assistant"):

                with st.spinner(
                    "Retrieving context and generating…"
                ):
                    ok, data = safe_post(
                        f"{APP_API}/ask",
                        {
                            "question": question,
                            "top_k": 3,
                        },
                    )

                if ok:

                    answer = data.get(
                        "answer",
                        "No answer returned.",
                    )

                    sources = (
                        data.get("sources")
                        or data.get("results")
                        or []
                    )

                    st.markdown(
                        f'<div class="answer-card">'
                        f'{answer}'
                        f'</div>',
                        unsafe_allow_html=True,
                    )

                    for source in sources:
                        st.markdown(
                            f"""
                            <div class="source-card">
                                <b>{source.get("source", "?")}</b>
                                · page {source.get("page", "?")}
                                · distance {source.get("distance", 0):.3f}
                            </div>
                            """,
                            unsafe_allow_html=True,
                        )

                    st.session_state.messages.append({
                        "role": "assistant",
                        "content": answer,
                        "sources": sources,
                    })

                else:
                    st.error(
                        f"Application API unreachable: {data}"
                    )

        if st.session_state.messages:

            if st.button(
                "🗑️ Clear conversation"
            ):
                st.session_state.messages = []
                st.rerun()

    with right:

        st.markdown(
            """
            <div class="card">
                <div class="card-title">
                    ℹ️ RAG rules
                </div>
                <div class="card-desc">
                    1. Answer from retrieved context<br>
                    2. Do not use outside knowledge<br>
                    3. Abstain when evidence is unavailable<br>
                    4. Show retrieved sources
                </div>
            </div>
            """,
            unsafe_allow_html=True,
        )

        st.markdown(
            f"""
            <div class="card">
                <div class="card-title">
                    ⚙️ Generation settings
                </div>
                <div class="card-desc">
                    Model: <b>{ACTIVE_LLM}</b><br>
                    Top-K: 3<br>
                    Local Ollama runtime<br>
                    Streaming: off
                </div>
            </div>
            """,
            unsafe_allow_html=True,
        )


# ============================================================================
# RAG VS NO-RAG — WEEK 3
# ============================================================================

elif page == "RAG vs No-RAG":

    st.markdown(
        """
        <div class="card">
            <div class="card-title">
                ⚖️ RAG vs No-RAG
            </div>
            <div class="card-desc">
                Run the same question through the retrieval-grounded
                pipeline and the LLM-only baseline.
            </div>
        </div>
        """,
        unsafe_allow_html=True,
    )

    comparison_question = st.text_input(
        "Question to compare",
        placeholder="e.g. What is biometric authentication?",
    )

    run_comparison = st.button(
        "▶ Run comparison",
        type="primary",
        disabled=not comparison_question,
    )

    if run_comparison:

        rag_column, no_rag_column = st.columns(2)

        with rag_column:

            st.markdown(
                """
                <div class="card">
                    <div class="card-title">
                        🟢 With RAG
                    </div>
                    <div class="card-desc">
                        Retrieval-grounded answer
                    </div>
                </div>
                """,
                unsafe_allow_html=True,
            )

            with st.spinner("Retrieving + generating…"):

                start = time.time()

                ok, data = safe_post(
                    f"{APP_API}/ask",
                    {
                        "question": comparison_question,
                        "top_k": 3,
                    },
                )

                latency = time.time() - start

            if ok:

                st.markdown(
                    f'<div class="answer-card">'
                    f'{data.get("answer", "—")}'
                    f'</div>',
                    unsafe_allow_html=True,
                )

                for source in (
                    data.get("sources")
                    or data.get("results")
                    or []
                ):
                    st.markdown(
                        f"""
                        <div class="source-card">
                            <b>{source.get("source", "?")}</b>
                            · page {source.get("page", "?")}
                            · distance {source.get("distance", 0):.3f}
                        </div>
                        """,
                        unsafe_allow_html=True,
                    )

                st.caption(
                    f"Total latency: {latency:.2f}s"
                )

            else:
                st.error(str(data))

        with no_rag_column:

            st.markdown(
                """
                <div class="card">
                    <div class="card-title">
                        🔴 Without RAG
                    </div>
                    <div class="card-desc">
                        LLM-only baseline
                    </div>
                </div>
                """,
                unsafe_allow_html=True,
            )

            with st.spinner("Generating…"):

                start = time.time()

                ok, data = safe_post(
                    f"{APP_API}/ask_no_rag",
                    {
                        "question": comparison_question,
                    },
                )

                latency = time.time() - start

            if ok:

                st.markdown(
                    f'<div class="answer-card">'
                    f'{data.get("answer", "—")}'
                    f'</div>',
                    unsafe_allow_html=True,
                )

                st.markdown(
                    '<div class="source-card">'
                    'No retrieved context — baseline depends on model parameters.'
                    '</div>',
                    unsafe_allow_html=True,
                )

                st.caption(
                    f"Total latency: {latency:.2f}s"
                )

            else:
                st.warning(
                    f"/ask_no_rag unavailable: {data}"
                )


# ============================================================================
# KNOWLEDGE BASE — WEEK 3
# ============================================================================

elif page == "Knowledge Base":

    by_source = chunk_stats(chunks)

    c1, c2, c3, c4, c5 = st.columns(5)

    values = [
        (c1, len(kb_files), "PDF documents"),
        (c2, len(chunks), "Total chunks"),
        (c3, len(chunks), "Embeddings"),
        (c4, "768", "Vector dimensions"),
        (c5, "1500 / 200", "Chunk / overlap"),
    ]

    for column, value, label in values:
        with column:
            st.markdown(
                f"""
                <div class="kpi">
                    <div class="kpi-value">{value}</div>
                    <div class="kpi-label">{label}</div>
                </div>
                """,
                unsafe_allow_html=True,
            )

    st.markdown(
        """
        <div class="card">
            <div class="card-title">
                📥 Add documents to the Knowledge Base
            </div>
            <div class="card-desc">
                PDF ingestion uses the existing Week 3 pipeline:
                process_documents.py → create_embeddings.py →
                create_vector_db.py.
            </div>
        </div>
        """,
        unsafe_allow_html=True,
    )

    uploaded = st.file_uploader(
        "Drop PDF files here",
        type=["pdf"],
        accept_multiple_files=True,
    )

    if uploaded:

        if st.button(
            "🚀 Ingest into Knowledge Base",
            type="primary",
        ):

            os.makedirs(KB_DIR, exist_ok=True)

            log_area = st.empty()

            for uploaded_file in uploaded:

                destination = os.path.join(
                    KB_DIR,
                    uploaded_file.name,
                )

                with open(destination, "wb") as f:
                    f.write(uploaded_file.getbuffer())

                st.write(
                    f"Saved `{uploaded_file.name}`"
                )

            scripts = [
                "process_documents.py",
                "create_embeddings.py",
                "create_vector_db.py",
            ]

            log_lines = []

            for script in scripts:

                script_path = os.path.join(
                    REPO_ROOT,
                    script,
                )

                log_lines.append(
                    f"▸ {script}"
                )

                try:
                    result = subprocess.run(
                        [
                            sys.executable,
                            script_path,
                        ],
                        cwd=REPO_ROOT,
                        capture_output=True,
                        text=True,
                        timeout=600,
                    )

                    if result.returncode == 0:
                        log_lines[-1] += " — ✓ complete"
                    else:
                        log_lines[-1] += (
                            f" — ✗ {result.stderr[-300:]}"
                        )

                except Exception as exc:
                    log_lines[-1] += f" — ✗ {exc}"

                log_area.code(
                    "\n".join(log_lines)
                )

            st.cache_data.clear()

            st.success(
                "Knowledge-base ingestion completed."
            )

    st.markdown("### Documents")

    for source in kb_files:

        count = by_source.get(
            source["name"],
            0,
        )

        st.markdown(
            f"""
            <div class="card">
                <div class="card-title">
                    📄 {source["name"]}
                </div>
                <div class="card-desc">
                    {count} chunks · {source["size_kb"]} KB
                </div>
            </div>
            """,
            unsafe_allow_html=True,
        )

    search = st.text_input(
        "🔍 Search chunks"
    )

    filtered = chunks

    if search:

        query = search.lower()

        filtered = [
            chunk
            for chunk in chunks
            if query in json.dumps(chunk).lower()
        ]

    st.caption(
        f"Showing {len(filtered)} of {len(chunks)} chunks"
    )

    for index, chunk in enumerate(
        filtered[:50],
        start=1,
    ):

        preview = (
            chunk.get("chunk", "")
            or ""
        )[:220].replace("\n", " ")

        with st.expander(
            f"#{index} · {chunk.get('source', '?')} · p.{chunk.get('page', '?')}"
        ):
            st.write(preview)
            st.caption(
                f"Chunk ID: {chunk.get('id', '?')}"
            )
            st.write(
                chunk.get("chunk", "")
            )


# ============================================================================
# MODELS / LLM — WEEK 3 + WEEK 4
# ============================================================================

elif page == "Models / LLM":

    st.markdown(
        """
        <div class="card">
            <div class="card-title">
                🧠 Ollama model inventory
            </div>
            <div class="card-desc">
                Live model inventory from Ollama.
                The Week 4 comparison uses exactly three models.
            </div>
        </div>
        """,
        unsafe_allow_html=True,
    )

    ok, tags = safe_get(
        f"{OLLAMA_API}/api/tags"
    )

    if ok and tags.get("models"):

        rows = []

        for model in tags["models"]:

            details = model.get(
                "details",
                {},
            )

            rows.append({
                "Model": model.get("name", "unknown"),
                "Parameters": details.get(
                    "parameter_size",
                    "N/A",
                ),
                "Quantization": details.get(
                    "quantization_level",
                    "N/A",
                ),
                "Family": details.get(
                    "family",
                    "N/A",
                ),
                "Active": (
                    "YES"
                    if ACTIVE_LLM in model.get(
                        "name",
                        "",
                    )
                    else "NO"
                ),
            })

        st.dataframe(
            pd.DataFrame(rows),
            width="stretch",
            hide_index=True,
        )

    st.markdown(
        """
        <div class="card">
            <div class="card-title">
                📊 Week 4 comparison set
            </div>
            <div class="card-desc">
                The same application, knowledge base, prompts,
                retrieval configuration and 25-question task set
                are evaluated across exactly three small models.
            </div>
        </div>
        """,
        unsafe_allow_html=True,
    )

    model_columns = st.columns(3)

    for column, model in zip(
        model_columns,
        MODELS,
    ):

        with column:

            st.markdown(
                f"""
                <div class="card">
                    <div class="card-title">
                        {model}
                    </div>
                    <div class="card-desc">
                        Included in Week 4 evaluation ✓
                    </div>
                </div>
                """,
                unsafe_allow_html=True,
            )


# ============================================================================
# ARCHITECTURE — WEEK 3
# ============================================================================

elif page == "Architecture":

    st.markdown(
        """
        <div class="section-title">
            🏗️ End-to-end architecture
        </div>
        <div class="section-subtitle">
            Week 3 application architecture with Week 4 evaluation
            and observability layered on top.
        </div>
        """,
        unsafe_allow_html=True,
    )

    architecture = pd.DataFrame([
        {
            "Layer": "Frontend",
            "Component": "frontend/app.py",
            "Port": "8501",
            "Responsibility": "Assistant + evaluation console",
        },
        {
            "Layer": "Application",
            "Component": "services/app/main.py",
            "Port": "8000",
            "Responsibility": "Guardrails + orchestration",
        },
        {
            "Layer": "Retrieval",
            "Component": "services/retrieval/main.py",
            "Port": "8001",
            "Responsibility": "Embeddings + FAISS",
        },
        {
            "Layer": "LLM",
            "Component": "services/llm/main.py",
            "Port": "8002",
            "Responsibility": "Model inference",
        },
        {
            "Layer": "Runtime",
            "Component": "Ollama",
            "Port": "11434",
            "Responsibility": "Local LLM + embeddings",
        },
        {
            "Layer": "Knowledge",
            "Component": "UIAI_1.pdf + UIAI_2.pdf",
            "Port": "local",
            "Responsibility": "Aadhaar Handbook",
        },
        {
            "Layer": "Vector DB",
            "Component": "vector_db/aadhaar.index",
            "Port": "local",
            "Responsibility": "FAISS index",
        },
    ])

    st.dataframe(
        architecture,
        width="stretch",
        hide_index=True,
    )

    st.markdown(
        """
        <div class="card">
            <div class="card-title">
                Request flow
            </div>
            <div class="card-desc">
                User → Streamlit → Application API →
                guardrail → retrieval → FAISS context →
                LLM API → Ollama → response + sources.
            </div>
        </div>
        """,
        unsafe_allow_html=True,
    )


# ============================================================================
# EVALUATION — WEEK 4
# ============================================================================

elif page == "Evaluation":

    st.markdown(
        """
        <div class="section-title">
            📊 Week 4 Evaluation Workspace
        </div>
        <div class="section-subtitle">
            Quantitative comparison of the same Aadhaar application
            across three small LLMs.
        </div>
        """,
        unsafe_allow_html=True,
    )

    evaluation_view = st.selectbox(
        "Evaluation view",
        [
            "25-Question Evaluation",
            "Seven-Category Evaluation",
            "RAG Analysis",
            "Guardrails",
            "AI Output Testing",
        ],
    )

    # ------------------------------------------------------------------------
    # 25-QUESTION EVALUATION
    # ------------------------------------------------------------------------

    if evaluation_view == "25-Question Evaluation":

        st.markdown(
            """
            <div class="card">
                <div class="card-title">
                    📝 25-Question Model Evaluation
                </div>
                <div class="card-desc">
                    Upload a representative 25-question JSON set,
                    validate it, and run the same questions against
                    Qwen 1.5B, Llama 3.2 3B and DeepSeek Coder 1.3B.
                </div>
            </div>
            """,
            unsafe_allow_html=True,
        )

        # Load the official 25-question evaluation set.
        questions_file = os.path.join(
            EVAL_DIR,
            "questions.json",
        )

        questions_data = load_json(questions_file)

        if isinstance(questions_data, list):
            questions = questions_data
        else:
            questions = []

        if questions:
            question_options = [
                f'{item.get("id", f"Q{index + 1}")} — '
                f'{item.get("question", "")}'
                for index, item in enumerate(questions)
            ]

            selected_question_label = st.selectbox(
                "Select an evaluation question",
                question_options,
                key="selected_25_question",
            )

            selected_question_index = question_options.index(
                selected_question_label
            )

            selected_question = questions[
                selected_question_index
            ]

            st.markdown(
                f"""
                <div class="card">
                    <div class="card-title">
                        Selected question
                    </div>
                    <div class="card-desc"
                         style="font-size:14px; color:#172B4D;">
                        <b>{selected_question.get("id", "")}</b>
                        &nbsp;·&nbsp;
                        {selected_question.get("question", "")}
                    </div>
                </div>
                """,
                unsafe_allow_html=True,
            )

            st.caption(
                "The dropdown contains the complete fixed "
                "25-question Week 4 evaluation set."
            )

            st.markdown("### Run evaluation")

            st.info(
                "The evaluation always uses the same 25 questions "
                "for all three models. Selecting a question below "
                "controls which result you inspect; it does not "
                "change the evaluation task set."
            )

            if st.button(
                "▶ Run 25 × 3 Model Evaluation",
                type="primary",
            ):

                st.warning(
                    "This runs 75 model evaluations "
                    "(25 questions × 3 models)."
                )

                progress = st.progress(0)
                status = st.empty()

                status.info(
                    "Running the existing Week 4 evaluator..."
                )

                uploaded_path = os.path.join(
                    EVAL_DIR,
                    "questions.json",
                )

                try:

                    result = run_script(
                        "evaluation/evaluate_models_25_newmodels.py",
                        env={
                            "QUESTIONS_FILE": uploaded_path,
                            "RESULTS_FILE": os.path.join(
                                RESULTS_DIR,
                                "model_results_25_newmodels.json",
                            ),
                        },
                        timeout=3600,
                    )

                    progress.progress(1.0)

                    if result.returncode == 0:

                        status.success(
                            "75 model evaluations completed."
                        )

                        score_result = run_script(
                            "evaluation/score_quality_25_newmodels.py",
                            timeout=600,
                        )

                        if score_result.returncode == 0:
                            st.success(
                                "Quality scoring completed."
                            )
                        else:
                            st.warning(
                                "Evaluation completed, but "
                                "quality scoring returned an error."
                            )

                    else:

                        st.error(
                            "Evaluation failed."
                        )

                        if result.stderr:
                            st.code(
                                result.stderr[-4000:]
                            )

                except subprocess.TimeoutExpired:
                    st.error(
                        "Evaluation exceeded the 1-hour UI timeout."
                    )

        else:

            st.error(
                "The official evaluation/questions.json file "
                "could not be loaded."
            )

        st.markdown("### Current 25-question results")

        raw_25 = load_result("25_raw")
        quality_25 = load_result("25_quality")

        if raw_25:

            st.success(
                f'{raw_25.get("questions_expected", 25)} questions · '
                f'{len(raw_25.get("results", []))} recorded runs'
            )

        if quality_25:

            model_results = quality_25.get(
                "models_results",
                {},
            )

            comparison_rows = []

            for model in MODELS:

                model_data = model_results.get(
                    model,
                    {},
                )

                comparison_rows.append({
                    "Model": model,
                    "Correctness": format_metric(
                        find_metric(
                            model_data,
                            [
                                "correctness",
                                "accuracy",
                            ],
                        ),
                        "%",
                    ),
                    "Relevance": format_metric(
                        find_metric(
                            model_data,
                            [
                                "response_relevance",
                                "relevance",
                            ],
                        ),
                        "%",
                    ),
                    "Retrieval": format_metric(
                        find_metric(
                            model_data,
                            [
                                "retrieval_evidence_hit_rate",
                                "retrieval_quality",
                            ],
                        ),
                        "%",
                    ),
                    "Hallucination": format_metric(
                        find_metric(
                            model_data,
                            [
                                "hallucination_signal_rate",
                                "hallucination_rate",
                            ],
                        ),
                        "%",
                    ),
                    "Code pass": format_metric(
                        find_metric(
                            model_data,
                            [
                                "composite_test_pass_rate",
                                "test_pass_rate",
                            ],
                        ),
                        "%",
                    ),
                    "Latency": format_metric(
                        find_metric(
                            model_data,
                            [
                                "average_total_latency",
                                "avg_total_latency",
                                "latency",
                            ],
                        ),
                        "s",
                    ),
                    "Tokens": format_metric(
                        find_metric(
                            model_data,
                            [
                                "average_total_tokens",
                                "avg_total_tokens",
                                "total_tokens",
                            ],
                        ),
                    ),
                })

            st.markdown(
                "#### Model comparison"
            )

            st.dataframe(
                pd.DataFrame(comparison_rows),
                width="stretch",
                hide_index=True,
            )

            shared = quality_25.get(
                "shared_retrieval_pipeline",
                {},
            )

            if shared:

                st.markdown(
                    "#### Shared retrieval pipeline"
                )

                r1, r2 = st.columns(2)

                with r1:
                    st.metric(
                        "Evidence hit rate",
                        format_metric(
                            shared.get(
                                "average_evidence_hit_rate_percent"
                            ),
                            "%",
                        ),
                    )

                with r2:
                    st.metric(
                        "Gold coverage",
                        format_metric(
                            shared.get(
                                "average_gold_coverage_percent"
                            ),
                            "%",
                        ),
                    )

        else:

            st.info(
                "No 25-question quality result is currently available."
            )

        # Question-level inspection
        if raw_25 and isinstance(raw_25.get("results"), list):

            raw_records = raw_25["results"]

            st.markdown(
                "#### 🔎 Compare all 3 models for one question"
            )

            st.caption(
                "Select one of the fixed 25 evaluation questions. "
                "The stored result from each of the three models "
                "is displayed side-by-side."
            )

            question_options = []

            seen_questions = set()

            for record in raw_records:

                question_id = record.get("question_id")
                question = record.get("question", "")

                key = (
                    question_id,
                    question,
                )

                if key not in seen_questions:
                    seen_questions.add(key)

                    question_options.append(
                        (
                            question_id,
                            question,
                        )
                    )

            question_options.sort(
                key=lambda item: int(item[0])
                if str(item[0]).isdigit()
                else str(item[0])
            )

            question_labels = [
                f"Q{question_id} — {question}"
                for question_id, question
                in question_options
            ]

            selected_label = st.selectbox(
                "Evaluation question",
                question_labels,
                key="comparison_question_25",
            )

            selected_index = question_labels.index(
                selected_label
            )

            selected_question_id = question_options[
                selected_index
            ][0]

            selected_question_text = question_options[
                selected_index
            ][1]

            st.markdown(
                f"""
                <div class="card">
                    <div class="card-title">
                        Selected evaluation question
                    </div>
                    <div class="card-desc"
                         style="font-size:14px; color:#172B4D;">
                        <b>Q{selected_question_id}</b>
                        &nbsp;·&nbsp;
                        {selected_question_text}
                    </div>
                </div>
                """,
                unsafe_allow_html=True,
            )

            selected_records = [
                record
                for record in raw_records
                if record.get("question_id")
                == selected_question_id
            ]

            model_columns = st.columns(3)

            for column, model in zip(
                model_columns,
                MODELS,
            ):

                with column:

                    record = next(
                        (
                            item
                            for item in selected_records
                            if item.get("model")
                            == model
                        ),
                        None,
                    )

                    st.markdown(
                        f"""
                        <div class="card">
                            <div class="card-title">
                                {model}
                            </div>
                        </div>
                        """,
                        unsafe_allow_html=True,
                    )

                    if not record:

                        st.error(
                            "No result recorded for this model."
                        )
                        continue

                    generation = record.get(
                        "generation",
                        {},
                    )

                    resources = record.get(
                        "resources",
                        {},
                    )

                    status = (
                        "success"
                        if generation.get("error") is None
                        and generation.get("answer") is not None
                        else "error"
                    )

                    if status == "success":
                        st.markdown(
                            '<span class="badge badge-ok">'
                            '✓ COMPLETED'
                            '</span>',
                            unsafe_allow_html=True,
                        )

                    elif status == "test_failed":
                        st.markdown(
                            '<span class="badge badge-warn">'
                            '⚠ TEST FAILED'
                            '</span>',
                            unsafe_allow_html=True,
                        )

                    else:
                        st.markdown(
                            '<span class="badge badge-down">'
                            '✗ ERROR'
                            '</span>',
                            unsafe_allow_html=True,
                        )

                    st.markdown(
                        "##### Response"
                    )

                    answer = generation.get(
                        "answer"
                    )

                    if answer:

                        st.markdown(
                            f"""
                            <div class="answer-card">
                                {answer}
                            </div>
                            """,
                            unsafe_allow_html=True,
                        )

                    else:

                        st.warning(
                            "No answer returned."
                        )

                    st.markdown(
                        "##### Retrieved sources"
                    )

                    retrieval = record.get(
                        "retrieval",
                        {},
                    )

                    retrieval_results = retrieval.get(
                        "results",
                        [],
                    )

                    if retrieval_results:

                        for source in retrieval_results:

                            source_name = source.get(
                                "source",
                                "?",
                            )

                            page_number = source.get(
                                "page",
                                "?",
                            )

                            distance = source.get(
                                "distance"
                            )

                            distance_text = (
                                f"{distance:.4f}"
                                if isinstance(
                                    distance,
                                    (int, float),
                                )
                                else "N/A"
                            )

                            st.markdown(
                                f"""
                                <div class="source-card">
                                    <b>{source_name}</b>
                                    · page {page_number}
                                    · distance {distance_text}
                                </div>
                                """,
                                unsafe_allow_html=True,
                            )

                    else:

                        st.caption(
                            "No retrieval sources recorded."
                        )

                    st.markdown(
                        "##### Performance"
                    )

                    latency = generation.get(
                        "latency_seconds"
                    )

                    retrieval_latency = retrieval.get(
                        "latency_seconds"
                    )

                    output_tokens = generation.get(
                        "output_tokens"
                    )

                    total_tokens = generation.get(
                        "total_tokens"
                    )

                    performance = pd.DataFrame([
                        {
                            "Metric": "Total latency",
                            "Value": (
                                f"{latency:.2f}s"
                                if isinstance(
                                    latency,
                                    (int, float),
                                )
                                else "N/A"
                            ),
                        },
                        {
                            "Metric": "Retrieval latency",
                            "Value": (
                                f"{retrieval_latency:.3f}s"
                                if isinstance(
                                    retrieval_latency,
                                    (int, float),
                                )
                                else "N/A"
                            ),
                        },
                        {
                            "Metric": "Output tokens",
                            "Value": (
                                str(output_tokens)
                                if output_tokens is not None
                                else "N/A"
                            ),
                        },
                        {
                            "Metric": "Total tokens",
                            "Value": (
                                str(total_tokens)
                                if total_tokens is not None
                                else "N/A"
                            ),
                        },
                    ])

                    st.dataframe(
                        performance,
                        width="stretch",
                        hide_index=True,
                    )

                    if record.get("test_passed") is not None:

                        st.markdown(
                            "##### Test result"
                        )

                        test_passed = record.get(
                            "test_passed"
                        )

                        if test_passed:
                            st.success(
                                "Automated test: PASS"
                            )
                        else:
                            st.warning(
                                "Automated test: FAIL"
                            )

                        test_output = record.get(
                            "test_output"
                        )

                        if test_output:

                            with st.expander(
                                "Test output"
                            ):
                                st.code(
                                    str(test_output)
                                )

                    with st.expander(
                        "Raw evaluation record"
                    ):
                        st.json(
                            record,
                            expanded=False,
                        )

        else:

            st.warning(
                "No 25-question evaluation records "
                "were found."
            )

        # --------------------------------------------------------------------
        # QUANTITATIVE INTERPRETATION
        # --------------------------------------------------------------------

        st.markdown(
            """
            <div class="card">
                <div class="card-title">
                    📌 Quantitative analysis
                </div>
                <div class="card-desc">
                    Model winners should be determined category-by-category
                    using the predefined primary metric. Accuracy,
                    hallucination, retrieval, code-test performance,
                    latency and resource usage should be considered
                    together rather than collapsed into one arbitrary
                    overall score.
                </div>
            </div>
            """,
            unsafe_allow_html=True,
        )

    # ------------------------------------------------------------------------
    # SEVEN CATEGORY
    # ------------------------------------------------------------------------

    elif evaluation_view == "Seven-Category Evaluation":

        st.markdown(
            """
            <div class="card">
                <div class="card-title">
                    🧪 Seven-Category Evaluation
                </div>
                <div class="card-desc">
                    35 tasks × 3 models = 105 evaluations.
                    Each category uses its own primary metric.
                </div>
            </div>
            """,
            unsafe_allow_html=True,
        )

        raw_v5 = load_result("v5_raw")

        if raw_v5:

            results = raw_v5.get(
                "results",
                [],
            )

            category_order = [
                "Explanation",
                "Code Retrieval",
                "Dependency Understanding",
                "Bug Analysis",
                "Code Generation",
                "Refactoring",
                "RAG",
            ]

            rows = []

            for category in category_order:

                category_records = [
                    record
                    for record in results
                    if record.get("category") == category
                ]

                for model in MODELS:

                    model_records = [
                        record
                        for record in category_records
                        if record.get("model") == model
                    ]

                    if not model_records:
                        continue

                    passed = sum(
                        1
                        for record in model_records
                        if record.get("test_passed")
                    )

                    total = len(model_records)

                    pass_rate = (
                        passed / total * 100
                        if total
                        else 0
                    )

                    rows.append({
                        "Category": category,
                        "Model": model,
                        "Tasks": total,
                        "Primary / test pass": (
                            f"{pass_rate:.1f}%"
                        ),
                        "Passed": passed,
                    })

            category_df = pd.DataFrame(rows)

            st.dataframe(
                category_df,
                width="stretch",
                hide_index=True,
            )

            st.markdown(
                "#### Category × model view"
            )

            if not category_df.empty:

                pivot = category_df.pivot(
                    index="Category",
                    columns="Model",
                    values="Primary / test pass",
                )

                st.dataframe(
                    pivot,
                    width="stretch",
                )

            st.markdown(
                "#### Task-level inspection"
            )

            selected_category = st.selectbox(
                "Category",
                category_order,
                key="v5_category",
            )

            category_records = [
                record
                for record in results
                if record.get("category")
                == selected_category
            ]

            if category_records:

                task_df = pd.DataFrame([
                    {
                        "Task": record.get(
                            "task_id",
                            "?",
                        ),
                        "Model": record.get(
                            "model",
                            "?",
                        ),
                        "Status": record.get(
                            "status",
                            "?",
                        ),
                        "Latency (s)": record.get(
                            "latency_seconds"
                        ),
                        "Output tokens": record.get(
                            "output_tokens"
                        ),
                        "Test passed": record.get(
                            "test_passed"
                        ),
                    }
                    for record in category_records
                ])

                st.dataframe(
                    task_df,
                    width="stretch",
                    hide_index=True,
                )

        else:

            st.warning(
                "Seven-category result file not found."
            )

    # ------------------------------------------------------------------------
    # RAG ANALYSIS
    # ------------------------------------------------------------------------

    elif evaluation_view == "RAG Analysis":

        st.markdown(
            """
            <div class="card">
                <div class="card-title">
                    🔎 RAG Pipeline Analysis
                </div>
                <div class="card-desc">
                    QUESTION → RETRIEVED CONTEXT → LLM RESPONSE.
                    Inspect supported facts, missing facts, abstention
                    and unsupported-claim signals.
                </div>
            </div>
            """,
            unsafe_allow_html=True,
        )

        rag_data = load_result("rag")

        if rag_data:

            records = rag_data.get(
                "records",
                [],
            )

            st.metric(
                "RAG records",
                len(records),
            )

            if records:

                selected_model = st.selectbox(
                    "Model",
                    MODELS,
                    key="rag_model",
                )

                model_records = [
                    record
                    for record in records
                    if record.get("model")
                    == selected_model
                ]

                if model_records:

                    labels = [
                        f'Q{record.get("question_id")}'
                        for record in model_records
                    ]

                    selected_q = st.selectbox(
                        "Question",
                        labels,
                        key="rag_question",
                    )

                    selected = next(
                        record
                        for record in model_records
                        if f'Q{record.get("question_id")}'
                        == selected_q
                    )

                    st.markdown(
                        "#### Question"
                    )

                    st.info(
                        selected.get(
                            "question",
                            "",
                        )
                    )

                    retrieval = selected.get(
                        "retrieval",
                        {},
                    )

                    analysis = selected.get(
                        "rag_flow_analysis",
                        {},
                    )

                    response = selected.get(
                        "response",
                        {},
                    )

                    m1, m2, m3, m4 = st.columns(4)

                    with m1:
                        st.metric(
                            "Context coverage",
                            f'{analysis.get("context_fact_coverage", 0) * 100:.1f}%',
                        )

                    with m2:
                        st.metric(
                            "Supported facts",
                            analysis.get(
                                "facts_supported_by_context",
                                0,
                            ),
                        )

                    with m3:
                        st.metric(
                            "Missing facts",
                            analysis.get(
                                "facts_missing_from_context",
                                0,
                            ),
                        )

                    with m4:
                        st.metric(
                            "Latency",
                            format_metric(
                                response.get(
                                    "latency_seconds"
                                ),
                                "s",
                            ),
                        )

                    st.markdown(
                        "#### Retrieved context"
                    )

                    chunks_retrieved = retrieval.get(
                        "gold_locations_retrieved",
                        [],
                    )

                    if chunks_retrieved:

                        for chunk in chunks_retrieved:

                            with st.expander(
                                f'{chunk.get("source", "?")} · '
                                f'p.{chunk.get("page", "?")}'
                            ):

                                st.write(
                                    chunk.get(
                                        "chunk",
                                        "",
                                    )
                                )

                                st.caption(
                                    f'Distance: {chunk.get("distance", 0):.4f}'
                                )

                    else:
                        st.info(
                            "No detailed retrieved chunks stored."
                        )

                    st.markdown(
                        "#### LLM response"
                    )

                    answer = response.get(
                        "answer"
                    )

                    if answer:
                        st.markdown(
                            f'<div class="answer-card">'
                            f'{answer}'
                            f'</div>',
                            unsafe_allow_html=True,
                        )
                    else:
                        st.error(
                            "Model returned no answer."
                        )

                    st.markdown(
                        "#### RAG flow assessment"
                    )

                    assessment_rows = [
                        {
                            "Property": "Model abstained",
                            "Value": analysis.get(
                                "model_abstained",
                                False,
                            ),
                        },
                        {
                            "Property": "Unsupported claim signal",
                            "Value": analysis.get(
                                "unsupported_claim_signal",
                                False,
                            ),
                        },
                        {
                            "Property": "Assessment",
                            "Value": analysis.get(
                                "assessment",
                                "",
                            ),
                        },
                    ]

                    st.dataframe(
                        pd.DataFrame(assessment_rows).assign(Value=lambda df: df["Value"].astype(str)),
                        width="stretch",
                        hide_index=True,
                    )

        else:

            st.warning(
                "RAG analysis result file not found."
            )

    # ------------------------------------------------------------------------
    # GUARDRAILS
    # ------------------------------------------------------------------------

    elif evaluation_view == "Guardrails":

        # --------------------------------------------------------------------
        # GUARDRAIL INTRODUCTION
        # --------------------------------------------------------------------

        st.markdown(
            """
            <div class="card">
                <div class="card-title">
                    🛡️ Guardrails — Controlled AI Behavior
                </div>
                <div class="card-desc">
                    Guardrails are application-level checks that decide
                    whether a user question is allowed to proceed to
                    retrieval and LLM generation.
                </div>
            </div>
            """,
            unsafe_allow_html=True,
        )

        st.markdown("### How a question is controlled")

        flow_html = (
            '<div class="guardrail-flow">'
            '<div class="flow-step">'
            '<div class="flow-number">1</div>'
            '<b>User Question</b>'
            '<span>Incoming request</span>'
            '</div>'
            '<div class="flow-arrow">→</div>'
            '<div class="flow-step">'
            '<div class="flow-number">2</div>'
            '<b>Scope Check</b>'
            '<span>Aadhaar related?</span>'
            '</div>'
            '<div class="flow-arrow">→</div>'
            '<div class="flow-step">'
            '<div class="flow-number">3</div>'
            '<b>Domain Check</b>'
            '<span>Unsupported request?</span>'
            '</div>'
            '<div class="flow-arrow">→</div>'
            '<div class="flow-step">'
            '<div class="flow-number">4</div>'
            '<b>Length Check</b>'
            '<span>≤ 500 characters?</span>'
            '</div>'
            '<div class="flow-arrow">→</div>'
            '<div class="flow-step">'
            '<div class="flow-number">5</div>'
            '<b>Evidence Check</b>'
            '<span>Enough RAG evidence?</span>'
            '</div>'
            '<div class="flow-arrow">→</div>'
            '<div class="flow-step flow-allow">'
            '<div class="flow-number">✓</div>'
            '<b>ALLOW</b>'
            '<span>RAG → LLM → Answer</span>'
            '</div>'
            '</div>'
        )

        st.markdown(
            flow_html,
            unsafe_allow_html=True,
        )

        st.caption(
            "If a guardrail fails, the request is blocked before "
            "normal LLM generation."
        )

        # --------------------------------------------------------------------
        # GUARDRAIL CONTROLS
        # --------------------------------------------------------------------

        st.markdown("### Active guardrail controls")

        guardrails = load_result("guardrails")

        configuration = {}

        if guardrails:
            configuration = guardrails.get(
                "guardrail_configuration",
                {},
            )

        c1, c2, c3, c4 = st.columns(4)

        controls = [
            (
                c1,
                "🎯 Scope",
                "Aadhaar scope check",
                "Blocks clearly out-of-scope questions.",
                "Enabled",
            ),
            (
                c2,
                "🚫 Domain",
                "Unsupported-domain check",
                "Blocks clearly unsupported request types.",
                "Enabled",
            ),
            (
                c3,
                "📏 Input",
                "Maximum input length",
                "Rejects excessively long questions.",
                f'{configuration.get("max_question_length", 500)} characters',
            ),
            (
                c4,
                "📚 Evidence",
                "Retrieval evidence threshold",
                "Blocks when retrieval evidence is insufficient.",
                f'{configuration.get("max_retrieval_distance", 0.90)}',
            ),
        ]

        for column, icon, title, description, value in controls:

            with column:

                st.markdown(
                    f"""
                    <div class="guardrail-control">
                        <div class="guardrail-icon">{icon}</div>
                        <div class="guardrail-control-title">
                            {title}
                        </div>
                        <div class="guardrail-control-desc">
                            {description}
                        </div>
                        <div class="guardrail-value">
                            {value}
                        </div>
                    </div>
                    """,
                    unsafe_allow_html=True,
                )

        st.info(
            "The retrieval threshold is calibrated against the "
            "25 representative in-scope evaluation questions; "
            "it is not a universal similarity threshold."
        )

        # --------------------------------------------------------------------
        # LIVE GUARDRAIL DEMONSTRATION
        # --------------------------------------------------------------------

        st.markdown("### 🧪 Try the guardrail")

        st.caption(
            "Enter a question and observe whether the application "
            "allows it to proceed to RAG/LLM processing or blocks it."
        )

        live_question = st.text_area(
            "Question",
            value="What documents are required for Aadhaar enrolment?",
            height=100,
            key="guardrail_live_question",
        )

        check_button = st.button(
            "🛡️ Check Guardrail",
            type="primary",
            key="check_guardrail_live",
        )

        if check_button:

            if not live_question.strip():

                st.error(
                    "BLOCKED — empty input."
                )

            else:

                try:

                    live_response = requests.post(
                        f"{APP_API}/ask",
                        json={
                            "question": live_question.strip()
                        },
                        timeout=GEN_TIMEOUT,
                    )

                    response_data = live_response.json()

                    guardrail_info = response_data.get(
                        "guardrail",
                        {},
                    )

                    guardrail_triggered = (
                        guardrail_info.get(
                            "triggered",
                            False,
                        )
                        if isinstance(
                            guardrail_info,
                            dict,
                        )
                        else False
                    )

                    guardrail_type = (
                        guardrail_info.get(
                            "type",
                            "unknown",
                        )
                        if isinstance(
                            guardrail_info,
                            dict,
                        )
                        else "unknown"
                    )

                    answer = response_data.get(
                        "answer"
                    )

                    sources = response_data.get(
                        "sources",
                        [],
                    )

                    if guardrail_triggered:

                        st.error(
                            "🛑 BLOCKED — Guardrail triggered"
                        )

                        reason_map = {
                            "out_of_scope":
                                "The question is outside the supported Aadhaar scope.",
                            "unsupported_domain":
                                "The request belongs to an unsupported domain.",
                            "input_length":
                                "The question exceeds the maximum input length.",
                            "insufficient_retrieval_evidence":
                                "The retrieval pipeline did not provide sufficient evidence.",
                        }

                        reason = reason_map.get(
                            guardrail_type,
                            f"Guardrail type: {guardrail_type}",
                        )

                        st.markdown(
                            f"""
                            <div class="guardrail-result blocked">
                                <div class="guardrail-result-title">
                                    Request stopped before normal generation
                                </div>
                                <div class="guardrail-result-reason">
                                    {reason}
                                </div>
                                <div class="guardrail-result-path">
                                    User → Guardrail → BLOCK
                                </div>
                            </div>
                            """,
                            unsafe_allow_html=True,
                        )

                        col_a, col_b = st.columns(2)

                        with col_a:
                            st.metric(
                                "Guardrail",
                                "TRIGGERED",
                            )

                        with col_b:
                            st.metric(
                                "Type",
                                guardrail_type,
                            )

                    else:

                        st.success(
                            "✓ ALLOWED — Question passed the guardrails"
                        )

                        st.markdown(
                            """
                            <div class="guardrail-result allowed">
                                <div class="guardrail-result-title">
                                    Request proceeds through the pipeline
                                </div>
                                <div class="guardrail-result-path">
                                    User → Guardrail → RAG → LLM → Answer
                                </div>
                            </div>
                            """,
                            unsafe_allow_html=True,
                        )

                        col_a, col_b, col_c = st.columns(3)

                        with col_a:
                            st.metric(
                                "Guardrail",
                                "PASSED",
                            )

                        with col_b:
                            st.metric(
                                "Sources",
                                len(sources)
                                if isinstance(
                                    sources,
                                    list,
                                )
                                else 0,
                            )

                        with col_c:
                            st.metric(
                                "Response",
                                "Generated"
                                if answer
                                else "Unavailable",
                            )

                        if answer:

                            st.markdown(
                                "#### Model response"
                            )

                            st.markdown(
                                f"""
                                <div class="answer-card">
                                    {answer}
                                </div>
                                """,
                                unsafe_allow_html=True,
                            )

                        if sources:

                            with st.expander(
                                "Retrieved sources"
                            ):

                                st.json(
                                    sources,
                                    expanded=False,
                                )

                except requests.RequestException as exc:

                    st.error(
                        f"Could not reach the application API: {exc}"
                    )

                except ValueError:

                    st.error(
                        "The application returned an invalid JSON response."
                    )

        # --------------------------------------------------------------------
        # WITHOUT vs WITH GUARDRAIL
        # --------------------------------------------------------------------

        st.markdown(
            "### Without Guardrail → With Guardrail"
        )

        st.caption(
            "The guardrail changes the application behavior by "
            "stopping unsupported requests before normal LLM generation."
        )

        before_col, arrow_col, after_col = st.columns(
            [5, 1, 5]
        )

        with before_col:

            st.markdown("#### 🔴 Without Guardrail")

            with st.container(border=True):

                st.markdown("**LLM receives the request**")

                st.markdown(
                    """
                    - Out-of-scope questions may be attempted.
                    - Unsupported domains may be answered.
                    - Insufficient evidence may still produce claims.
                    """
                )

                st.caption(
                    "The application does not apply the "
                    "application-level blocking controls first."
                )

        with arrow_col:

            st.markdown(
                "<div style='text-align:center; "
                "font-size:32px; margin-top:80px;'>→</div>",
                unsafe_allow_html=True,
            )

        with after_col:

            st.markdown("#### 🟢 With Guardrail")

            with st.container(border=True):

                st.markdown("**Application controls the request**")

                st.markdown(
                    """
                    - Out-of-scope requests are blocked.
                    - Unsupported domains are blocked.
                    - Excessively long inputs are blocked.
                    - Insufficient retrieval evidence is blocked.
                    """
                )

                st.caption(
                    "Only requests that pass the application "
                    "checks proceed to the RAG + LLM pipeline."
                )

        # --------------------------------------------------------------------
        # QUANTITATIVE EFFECTIVENESS
        # --------------------------------------------------------------------

        if guardrails:

            summary = guardrails.get(
                "summary",
                {},
            )

            st.markdown(
                "### 📊 Guardrail effectiveness"
            )

            m1, m2, m3, m4 = st.columns(4)

            effectiveness_metrics = [
                (
                    m1,
                    "Test pass rate",
                    summary.get(
                        "pass_rate_percent",
                        0,
                    ),
                    "%",
                ),
                (
                    m2,
                    "Correct refusal rate",
                    summary.get(
                        "correct_refusal_rate_percent",
                        0,
                    ),
                    "%",
                ),
                (
                    m3,
                    "False blocks",
                    summary.get(
                        "false_blocks",
                        0,
                    ),
                    "",
                ),
                (
                    m4,
                    "Guardrail triggered",
                    summary.get(
                        "guardrail_trigger_rate_percent",
                        0,
                    ),
                    "%",
                ),
            ]

            for column, label, value, suffix in effectiveness_metrics:

                with column:

                    st.metric(
                        label,
                        f"{value}{suffix}",
                    )

            st.markdown(
                "### Guardrail test cases"
            )

            records = guardrails.get(
                "records",
                [],
            )

            if records:

                guardrail_df = pd.DataFrame([
                    {
                        "Test": record.get("id"),
                        "Category": record.get("category"),
                        "Question": record.get("question"),
                        "Expected": record.get(
                            "expected_behavior"
                        ),
                        "Actual": record.get(
                            "actual_behavior"
                        ),
                        "Guardrail": (
                            record.get("guardrail")
                            or "None"
                        ),
                        "Result": (
                            "PASS"
                            if record.get("passed")
                            else "FAIL"
                        ),
                    }
                    for record in records
                ])

                guardrail_df["Expected"] = guardrail_df["Expected"].astype(str)
                guardrail_df["Actual"] = guardrail_df["Actual"].astype(str)
                guardrail_df["Guardrail"] = guardrail_df["Guardrail"].apply(
                    lambda x: json.dumps(x, ensure_ascii=False)
                    if isinstance(x, dict)
                    else str(x)
                )
                guardrail_df["Result"] = guardrail_df["Result"].astype(str)

                st.dataframe(
                    guardrail_df,
                    width="stretch",
                    hide_index=True,
                )

        else:

            st.warning(
                "Guardrail result file not found."
            )

    # ------------------------------------------------------------------------
    # AI OUTPUT TESTING
    # ------------------------------------------------------------------------

    elif evaluation_view == "AI Output Testing":

        st.markdown(
            """
            <div class="card">
                <div class="card-title">
                    ✅ AI Output Testing
                </div>
                <div class="card-desc">
                    75 existing model outputs are tested for relevance,
                    context support, unsupported claims, output format,
                    and expected behavior.
                </div>
            </div>
            """,
            unsafe_allow_html=True,
        )

        output_data = load_result(
            "ai_output"
        )

        if output_data:

            summary = output_data.get(
                "summary",
                {},
            )

            c1, c2, c3, c4, c5, c6 = st.columns(6)

            summary_metrics = [
                (
                    c1,
                    summary.get(
                        "overall_pass_rate_percent",
                        0,
                    ),
                    "Overall",
                ),
                (
                    c2,
                    summary.get(
                        "relevance_pass_rate_percent",
                        0,
                    ),
                    "Relevance",
                ),
                (
                    c3,
                    summary.get(
                        "context_support_pass_rate_percent",
                        0,
                    ),
                    "Context support",
                ),
                (
                    c4,
                    summary.get(
                        "unsupported_claim_pass_rate_percent",
                        0,
                    ),
                    "No unsupported claims",
                ),
                (
                    c5,
                    summary.get(
                        "format_pass_rate_percent",
                        0,
                    ),
                    "Format",
                ),
                (
                    c6,
                    summary.get(
                        "behavior_pass_rate_percent",
                        0,
                    ),
                    "Expected behavior",
                ),
            ]

            for column, value, label in summary_metrics:

                with column:
                    st.metric(
                        label,
                        f"{value:.2f}%",
                    )

            st.markdown(
                "### Model-level output testing"
            )

            results = output_data.get(
                "results",
                [],
            )

            model_rows = []

            for model in MODELS:

                model_results = [
                    result
                    for result in results
                    if result.get("model")
                    == model
                ]

                total = len(model_results)

                if total == 0:
                    continue

                model_rows.append({
                    "Model": model,
                    "Outputs": total,
                    "Overall pass": (
                        sum(
                            r.get(
                                "overall_pass",
                                False,
                            )
                            for r in model_results
                        )
                        / total
                        * 100
                    ),
                    "Relevance": (
                        sum(
                            r.get(
                                "relevance_pass",
                                False,
                            )
                            for r in model_results
                        )
                        / total
                        * 100
                    ),
                    "Context support": (
                        sum(
                            r.get(
                                "context_support_pass",
                                False,
                            )
                            for r in model_results
                        )
                        / total
                        * 100
                    ),
                    "Unsupported claims": (
                        sum(
                            r.get(
                                "unsupported_claim_pass",
                                False,
                            )
                            for r in model_results
                        )
                        / total
                        * 100
                    ),
                    "Format": (
                        sum(
                            r.get(
                                "format_pass",
                                False,
                            )
                            for r in model_results
                        )
                        / total
                        * 100
                    ),
                    "Behavior": (
                        sum(
                            r.get(
                                "behavior_pass",
                                False,
                            )
                            for r in model_results
                        )
                        / total
                        * 100
                    ),
                })

            if model_rows:

                model_df = pd.DataFrame(
                    model_rows
                )

                percentage_columns = [
                    "Overall pass",
                    "Relevance",
                    "Context support",
                    "Unsupported claims",
                    "Format",
                    "Behavior",
                ]

                for column in percentage_columns:
                    model_df[column] = (
                        model_df[column]
                        .round(2)
                        .astype(str)
                        + "%"
                    )

                st.dataframe(
                    model_df,
                    width="stretch",
                    hide_index=True,
                )

            st.markdown(
                "### Failed-output inspection"
            )

            failed = [
                result
                for result in results
                if not result.get(
                    "overall_pass",
                    False,
                )
            ]

            st.caption(
                f"{len(failed)} of {len(results)} outputs failed "
                "at least one acceptance criterion."
            )

            if failed:

                failed_df = pd.DataFrame([
                    {
                        "Q": result.get(
                            "question_id"
                        ),
                        "Model": result.get(
                            "model"
                        ),
                        "Expected": result.get(
                            "expected_behavior"
                        ),
                        "Actual": result.get(
                            "actual_behavior"
                        ),
                        "Context": result.get(
                            "context_support_pass"
                        ),
                        "Unsupported": result.get(
                            "unsupported_claim_pass"
                        ),
                        "Format": result.get(
                            "format_pass"
                        ),
                        "Behavior": result.get(
                            "behavior_pass"
                        ),
                    }
                    for result in failed
                ])

                st.dataframe(
                    failed_df,
                    width="stretch",
                    hide_index=True,
                )

                selected_failure = st.selectbox(
                    "Inspect failed output",
                    range(len(failed)),
                    format_func=lambda index: (
                        f'Q{failed[index].get("question_id")} · '
                        f'{failed[index].get("model")}'
                    ),
                )

                selected = failed[
                    selected_failure
                ]

                st.markdown(
                    "#### Question"
                )

                st.info(
                    selected.get(
                        "question",
                        "",
                    )
                )

                st.markdown(
                    "#### Model response"
                )

                answer = selected.get(
                    "answer"
                )

                if answer:
                    st.markdown(
                        f'<div class="answer-card">'
                        f'{answer}'
                        f'</div>',
                        unsafe_allow_html=True,
                    )
                else:
                    st.error(
                        "No valid response was returned."
                    )

                st.markdown(
                    "#### Test results"
                )

                st.json({
                    key: selected.get(key)
                    for key in [
                        "expected_behavior",
                        "actual_behavior",
                        "context_fact_coverage",
                        "facts_supported_by_context",
                        "facts_missing_from_context",
                        "relevance_pass",
                        "context_support_pass",
                        "unsupported_claim_pass",
                        "format_pass",
                        "behavior_pass",
                        "unsupported_claim_signal",
                        "latency_seconds",
                    ]
                })

        else:

            st.warning(
                "AI output testing result file not found."
            )


# ============================================================================
# CODEBASE — WEEK 3 + WEEK 4
# ============================================================================

elif page == "Codebase":

    st.markdown(
        """
        <div class="section-title">
            🗂️ Repository & Multi-file Understanding
        </div>
        <div class="section-subtitle">
            Existing Week 3 codebase plus Week 4 repository-understanding
            evaluation.
        </div>
        """,
        unsafe_allow_html=True,
    )

    tree = """aadhaar-ai-assistant/
├── frontend/app.py
├── rag.py
├── retrieve.py
├── no_rag.py
├── process_documents.py
├── create_embeddings.py
├── create_vector_db.py
├── data/chunks.json
├── knowledge_base/
│   ├── UIAI_1.pdf
│   └── UIAI_2.pdf
├── vector_db/aadhaar.index
├── services/
│   ├── app/main.py
│   ├── retrieval/main.py
│   └── llm/main.py
└── evaluation/
    ├── 25-question evaluation
    ├── seven-category evaluation
    ├── RAG analysis
    ├── guardrails
    └── AI output testing"""

    st.code(
        tree,
        language="text",
    )

    relationships = pd.DataFrame([
        {
            "Module": "frontend/app.py",
            "Relationship": "Streamlit UI → Application API",
        },
        {
            "Module": "services/app/main.py",
            "Relationship": "Guardrails + orchestration",
        },
        {
            "Module": "services/retrieval/main.py",
            "Relationship": "Embedding + FAISS retrieval",
        },
        {
            "Module": "services/llm/main.py",
            "Relationship": "Ollama LLM inference",
        },
        {
            "Module": "process_documents.py",
            "Relationship": "PDF extraction + chunking",
        },
        {
            "Module": "create_embeddings.py",
            "Relationship": "Embedding generation",
        },
        {
            "Module": "create_vector_db.py",
            "Relationship": "FAISS index construction",
        },
        {
            "Module": "evaluation/",
            "Relationship": "Week 4 evaluation + testing",
        },
    ])

    st.dataframe(
        relationships,
        width="stretch",
        hide_index=True,
    )

    st.markdown(
        """
        <div class="card">
            <div class="card-title">
                🔗 Multi-file execution path
            </div>
            <div class="card-desc">
                Streamlit receives the question → services/app/main.py
                validates guardrails → retrieval service generates the
                query embedding and performs FAISS search → LLM service
                calls Ollama → application returns the answer and sources.
            </div>
        </div>
        """,
        unsafe_allow_html=True,
    )


# ============================================================================
# SYSTEM STATUS — WEEK 3
# ============================================================================

elif page == "System Status":

    if st.button(
        "🔄 Refresh status"
    ):
        st.cache_data.clear()
        st.rerun()

    columns = st.columns(
        len(health)
    )

    for column, (name, info) in zip(
        columns,
        health.items(),
    ):

        with column:

            badge = (
                '<span class="badge badge-ok">HEALTHY</span>'
                if info["ok"]
                else
                '<span class="badge badge-down">DOWN</span>'
            )

            st.markdown(
                f"""
                <div class="card">
                    <div class="card-title">
                        {name}
                    </div>
                    <div class="card-desc">
                        {badge}
                    </div>
                </div>
                """,
                unsafe_allow_html=True,
            )

    st.markdown(
        "### Pipeline"
    )

    pipeline = pd.DataFrame([
        {
            "Stage": "Frontend",
            "Endpoint": ":8501",
            "Status": "Streamlit",
        },
        {
            "Stage": "Application",
            "Endpoint": ":8000",
            "Status": "FastAPI + guardrails",
        },
        {
            "Stage": "Retrieval",
            "Endpoint": ":8001",
            "Status": "FAISS + embeddings",
        },
        {
            "Stage": "LLM",
            "Endpoint": ":8002",
            "Status": "Ollama inference",
        },
        {
            "Stage": "Ollama",
            "Endpoint": ":11434",
            "Status": "Local model runtime",
        },
    ])

    st.dataframe(
        pipeline,
        width="stretch",
        hide_index=True,
    )

    st.caption(
        "Last checked: "
        + datetime.now().strftime(
            "%Y-%m-%d %H:%M:%S"
        )
    )
