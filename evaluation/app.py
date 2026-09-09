import json
from pathlib import Path

import pandas as pd
import streamlit as st


# ============================================================
# PATHS
# ============================================================

BASE_DIR = Path(__file__).resolve().parent

QUALITY_FILE = BASE_DIR / "results" / "quality_results_v4.json"
RAW_FILE = BASE_DIR / "results" / "model_results_v4.json"


# ============================================================
# PAGE CONFIG
# ============================================================

st.set_page_config(
    page_title="Week 4 LLM Evaluation",
    page_icon="📊",
    layout="wide",
)


# ============================================================
# LOAD DATA
# ============================================================

@st.cache_data
def load_json(path):
    with open(path, "r", encoding="utf-8") as f:
        return json.load(f)


try:
    quality_data = load_json(QUALITY_FILE)
    raw_data = load_json(RAW_FILE)
except FileNotFoundError as e:
    st.error(f"Required evaluation file not found: {e}")
    st.stop()


quality_models = quality_data["models"]
raw_models = raw_data["models"]


# ============================================================
# BUILD DATAFRAMES
# ============================================================

summary_rows = []

for model in quality_models:
    summary_rows.append({
        "Model": model["model"],
        "Correctness (%)": model["average_correctness"],
        "Relevance (%)": model["average_response_relevance"],
        "Retrieval Quality (%)": model["average_retrieval_quality"],
        "Hallucination Signal (%)": model["hallucination_signal_rate"],
        "Test Pass (%)": model["test_pass_rate"],
        "Generation Success (%)": model["generation_success_rate"],
    })

summary_df = pd.DataFrame(summary_rows)


performance_rows = []

for model in raw_models:
    model_name = model["model"]

    retrieval_latencies = []
    generation_latencies = []
    total_latencies = []
    output_tokens = []
    total_tokens = []
    cpu_deltas = []
    memory_deltas = []

    for item in model["results"]:

        retrieval = item.get("retrieval", {})
        generation = item.get("generation", {})
        resources = item.get("resources", {})

        if isinstance(
            retrieval.get("latency_seconds"),
            (int, float)
        ):
            retrieval_latencies.append(
                retrieval["latency_seconds"]
            )

        if isinstance(
            generation.get("latency_seconds"),
            (int, float)
        ):
            generation_latencies.append(
                generation["latency_seconds"]
            )

        if (
            isinstance(
                retrieval.get("latency_seconds"),
                (int, float)
            )
            and isinstance(
                generation.get("latency_seconds"),
                (int, float)
            )
        ):
            total_latencies.append(
                retrieval["latency_seconds"]
                + generation["latency_seconds"]
            )

        if isinstance(
            generation.get("output_tokens"),
            (int, float)
        ):
            output_tokens.append(
                generation["output_tokens"]
            )

        if isinstance(
            generation.get("total_tokens"),
            (int, float)
        ):
            total_tokens.append(
                generation["total_tokens"]
            )

        cpu_before = resources.get(
            "cpu_before_percent"
        )
        cpu_after = resources.get(
            "cpu_after_percent"
        )

        memory_before = resources.get(
            "memory_before_mb"
        )
        memory_after = resources.get(
            "memory_after_mb"
        )

        if (
            isinstance(cpu_before, (int, float))
            and isinstance(cpu_after, (int, float))
        ):
            cpu_deltas.append(
                cpu_after - cpu_before
            )

        if (
            isinstance(memory_before, (int, float))
            and isinstance(memory_after, (int, float))
        ):
            memory_deltas.append(
                memory_after - memory_before
            )

    performance_rows.append({
        "Model": model_name,
        "Avg Retrieval Latency (s)": (
            sum(retrieval_latencies)
            / len(retrieval_latencies)
            if retrieval_latencies else None
        ),
        "Avg Generation Latency (s)": (
            sum(generation_latencies)
            / len(generation_latencies)
            if generation_latencies else None
        ),
        "Avg Total Latency (s)": (
            sum(total_latencies)
            / len(total_latencies)
            if total_latencies else None
        ),
        "Avg Output Tokens": (
            sum(output_tokens)
            / len(output_tokens)
            if output_tokens else None
        ),
        "Avg Total Tokens": (
            sum(total_tokens)
            / len(total_tokens)
            if total_tokens else None
        ),
        "Avg CPU Delta (%)": (
            sum(cpu_deltas)
            / len(cpu_deltas)
            if cpu_deltas else None
        ),
        "Avg Memory Delta (MB)": (
            sum(memory_deltas)
            / len(memory_deltas)
            if memory_deltas else None
        ),
    })

performance_df = pd.DataFrame(performance_rows)


# ============================================================
# HEADER
# ============================================================

st.title("📊 Week 4 — LLM Evaluation Dashboard")

st.markdown(
    """
Compare three LLMs under the same Aadhaar RAG evaluation setup.

**Models evaluated:** Qwen3 0.6B, Gemma3 270M, SmolLM2 360M  
**Evaluation set:** 25 representative Aadhaar questions  
**Total evaluations:** 75
"""
)

st.divider()


# ============================================================
# SIDEBAR
# ============================================================

st.sidebar.title("Navigation")

section = st.sidebar.radio(
    "Select section",
    [
        "Overview",
        "Quality Comparison",
        "Performance",
        "Question Analysis",
        "Model Comparison",
        "Methodology",
    ],
)


# ============================================================
# OVERVIEW
# ============================================================

if section == "Overview":

    st.header("Evaluation Overview")

    col1, col2, col3, col4 = st.columns(4)

    with col1:
        st.metric(
            "Models",
            "3"
        )

    with col2:
        st.metric(
            "Questions",
            "25"
        )

    with col3:
        st.metric(
            "Evaluations",
            "75"
        )

    with col4:
        st.metric(
            "Knowledge Base",
            "UIDAI Handbook"
        )

    st.subheader("Overall Quality")

    st.dataframe(
        summary_df.style.format(
            {
                "Correctness (%)": "{:.2f}",
                "Relevance (%)": "{:.2f}",
                "Retrieval Quality (%)": "{:.2f}",
                "Hallucination Signal (%)": "{:.2f}",
                "Test Pass (%)": "{:.2f}",
                "Generation Success (%)": "{:.2f}",
            }
        ),
        use_container_width=True,
        hide_index=True,
    )

    st.subheader("Key Findings")

    best_correctness = summary_df.loc[
        summary_df["Correctness (%)"].idxmax(),
        "Model"
    ]

    best_relevance = summary_df.loc[
        summary_df["Relevance (%)"].idxmax(),
        "Model"
    ]

    best_test_pass = summary_df.loc[
        summary_df["Test Pass (%)"].idxmax(),
        "Model"
    ]

    fastest = performance_df.loc[
        performance_df["Avg Total Latency (s)"].idxmin(),
        "Model"
    ]

    st.markdown(
        f"""
- **Best correctness:** {best_correctness}
- **Best response relevance:** {best_relevance}
- **Best test-pass rate:** {best_test_pass}
- **Fastest average total latency:** {fastest}
"""
    )


# ============================================================
# QUALITY COMPARISON
# ============================================================

elif section == "Quality Comparison":

    st.header("Quality Comparison")

    quality_chart = summary_df.set_index(
        "Model"
    )[
        [
            "Correctness (%)",
            "Relevance (%)",
            "Retrieval Quality (%)",
            "Test Pass (%)",
        ]
    ]

    st.bar_chart(
        quality_chart
    )

    st.subheader("Hallucination Signal")

    hallucination_chart = summary_df.set_index(
        "Model"
    )[
        ["Hallucination Signal (%)"]
    ]

    st.bar_chart(
        hallucination_chart
    )

    st.info(
        """
Hallucination Signal is a conservative automated screening
metric for suspicious unsupported-claim patterns. It is not
equivalent to manually verified hallucination rate.
"""
    )


# ============================================================
# PERFORMANCE
# ============================================================

elif section == "Performance":

    st.header("Performance and Resource Usage")

    st.subheader("Latency")

    latency_chart = performance_df.set_index(
        "Model"
    )[
        [
            "Avg Retrieval Latency (s)",
            "Avg Generation Latency (s)",
            "Avg Total Latency (s)",
        ]
    ]

    st.bar_chart(
        latency_chart
    )

    st.dataframe(
        performance_df.style.format(
            {
                "Avg Retrieval Latency (s)": "{:.3f}",
                "Avg Generation Latency (s)": "{:.3f}",
                "Avg Total Latency (s)": "{:.3f}",
                "Avg Output Tokens": "{:.1f}",
                "Avg Total Tokens": "{:.1f}",
                "Avg CPU Delta (%)": "{:.2f}",
                "Avg Memory Delta (MB)": "{:.2f}",
            }
        ),
        use_container_width=True,
        hide_index=True,
    )

    st.subheader("Token Usage")

    token_chart = performance_df.set_index(
        "Model"
    )[
        [
            "Avg Output Tokens",
            "Avg Total Tokens",
        ]
    ]

    st.bar_chart(
        token_chart
    )

    st.subheader("Resource Measurements")

    resource_chart = performance_df.set_index(
        "Model"
    )[
        [
            "Avg CPU Delta (%)",
            "Avg Memory Delta (MB)",
        ]
    ]

    st.bar_chart(
        resource_chart
    )

    st.warning(
        """
Resource measurements represent the evaluation process'
observed CPU and memory deltas. They are not direct
per-model GPU telemetry from the Ollama process.
"""
    )


# ============================================================
# QUESTION ANALYSIS
# ============================================================

elif section == "Question Analysis":

    st.header("Question-Level Analysis")

    all_questions = quality_models[0]["questions"]

    question_options = {
        f"Q{q['question_id']}: {q['question']}":
        q["question_id"]
        for q in all_questions
    }

    selected_label = st.selectbox(
        "Select a question",
        list(question_options.keys())
    )

    question_id = question_options[
        selected_label
    ]

    st.subheader(
        f"Question {question_id}"
    )

    st.write(
        selected_label.split(": ", 1)[1]
    )

    for model in quality_models:

        question_data = next(
            (
                q
                for q in model["questions"]
                if q["question_id"] == question_id
            ),
            None
        )

        if question_data is None:
            continue

        st.markdown(
            f"### {model['model']}"
        )

        col1, col2, col3, col4 = st.columns(4)

        with col1:
            st.metric(
                "Correctness",
                f"{question_data['correctness_score'] * 100:.1f}%"
            )

        with col2:
            st.metric(
                "Relevance",
                f"{question_data['response_relevance'] * 100:.1f}%"
            )

        with col3:
            retrieval_score = question_data[
                "retrieval_quality_score"
            ]

            if retrieval_score is not None:
                st.metric(
                    "Retrieval",
                    f"{retrieval_score * 100:.1f}%"
                )
            else:
                st.metric(
                    "Retrieval",
                    "N/A"
                )

        with col4:
            st.metric(
                "Test Pass",
                "PASS"
                if question_data["test_pass"]
                else "FAIL"
            )

        st.write("**Answer:**")

        st.write(
            question_data["answer"]
            if question_data["answer"]
            else "No answer recorded."
        )

        st.write(
            f"Supported facts: "
            f"{question_data['supported_facts']}/"
            f"{question_data['total_expected_facts']}"
        )

        st.write(
            f"Relevant retrieved chunks: "
            f"{question_data['relevant_retrieved_chunks']}/"
            f"{question_data['top_k']}"
        )

        if question_data["hallucination_signal"]:
            st.error(
                "Unsupported-claim signal detected — manual inspection recommended."
            )
        else:
            st.success(
                "No unsupported-claim signal detected."
            )

        if question_data["generation_error"]:
            st.error(
                f"Generation error: "
                f"{question_data['generation_error']}"
            )

        st.divider()


# ============================================================
# MODEL COMPARISON
# ============================================================

elif section == "Model Comparison":

    st.header("Model-by-Model Comparison")
    selected_question = st.selectbox(
        "Choose question",
        range(1, 26),
        format_func=lambda x: f"Question {x}"
    )
    question_text = next(
        item["question"]
        for model in quality_models
        for item in model["questions"]
        if item["question_id"] == selected_question
    )

    st.markdown(f"### Question {selected_question}")
    st.info(question_text)

    for model in quality_models:

        q = next(
            (
                item
                for item in model["questions"]
                if item["question_id"] == selected_question
            ),
            None
        )

        if q is None:
            continue

        st.subheader(
            model["model"]
        )

        col1, col2, col3 = st.columns(3)

        with col1:
            st.metric(
                "Correctness",
                f"{q['correctness_score'] * 100:.1f}%"
            )

        with col2:
            st.metric(
                "Relevance",
                f"{q['response_relevance'] * 100:.1f}%"
            )

        with col3:
            st.metric(
                "Test",
                "PASS" if q["test_pass"] else "FAIL"
            )

        st.write(
            q["answer"]
            if q["answer"]
            else "No answer recorded."
        )

        st.divider()


# ============================================================
# METHODOLOGY
# ============================================================

elif section == "Methodology":

    st.header("Evaluation Methodology")

    st.markdown(
        """
### Models

Three locally available models were evaluated:

- `qwen3:0.6b`
- `gemma3:270m`
- `smollm2:360m`

### Controlled Conditions

The evaluation used the same:

- 25 questions
- knowledge base
- retrieval service
- top-k retrieval setting
- prompt structure
- Ollama environment
- evaluation procedure

### Metrics

**Correctness**

Measures expected-fact coverage against the evaluation rubric.

**Response relevance**

Measures topical overlap between the question and generated answer.

**Retrieval quality**

Measures overlap between retrieved source/page pairs and rubric gold source/page pairs.

**Hallucination signal**

A conservative screening mechanism for suspicious unsupported claims. It requires manual validation before being treated as a confirmed hallucination.

**Test-pass rate**

A question passes when it meets the defined correctness, retrieval, relevance, generation and unsupported-claim criteria.

**Latency**

Retrieval and generation latency were recorded during evaluation.

**Token usage**

Prompt, output and total token counts were recorded by Ollama where available.

**Resources**

CPU and memory measurements were collected by the evaluation process.

### Important Limitation

The automated quality metrics are heuristic measurements.
They should be combined with manual inspection of representative
good, bad, irrelevant-retrieval and hallucination cases.
"""
    )

    st.subheader("Evaluation Files")

    st.code(
        """
evaluation/
├── questions.json
├── quality_rubric.json
├── handbook_evidence.json
├── evaluate_models_v4.py
├── score_quality_v4.py
└── results/
    ├── model_results_v4.json
    └── quality_results_v4.json
""",
        language="text",
    )

