import json
import os

BASE_DIR = r"c:\Users\nares\AIDEVOPSintegration"
OUT_DIR = os.path.join(BASE_DIR, "frontend-react", "src", "data")
os.makedirs(OUT_DIR, exist_ok=True)

# 1. Questions
with open(os.path.join(BASE_DIR, "evaluation", "questions.json"), "r", encoding="utf-8") as f:
    questions = json.load(f)

with open(os.path.join(OUT_DIR, "questions.ts"), "w", encoding="utf-8") as f:
    f.write(f"export const questionsData = {json.dumps(questions, indent=2)};\n")
print(f"Exported {len(questions)} questions")

# 2. Model results 25
with open(os.path.join(BASE_DIR, "evaluation", "results", "model_results_25_newmodels.json"), "r", encoding="utf-8") as f:
    model_results_25 = json.load(f)

with open(os.path.join(OUT_DIR, "eval25Data.ts"), "w", encoding="utf-8") as f:
    f.write(f"export const eval25Data = {json.dumps(model_results_25, indent=2)};\n")
print("Exported eval25Data")

# 3. Quality results 25
with open(os.path.join(BASE_DIR, "evaluation", "results", "quality_results_25_newmodels.json"), "r", encoding="utf-8") as f:
    quality_results = json.load(f)

with open(os.path.join(OUT_DIR, "qualityData.ts"), "w", encoding="utf-8") as f:
    f.write(f"export const qualityData = {json.dumps(quality_results, indent=2)};\n")
print("Exported qualityData")

# 4. RAG analysis
with open(os.path.join(BASE_DIR, "evaluation", "results", "rag_analysis_25_newmodels.json"), "r", encoding="utf-8") as f:
    rag_analysis = json.load(f)

with open(os.path.join(OUT_DIR, "ragAnalysisData.ts"), "w", encoding="utf-8") as f:
    f.write(f"export const ragAnalysisData = {json.dumps(rag_analysis, indent=2)};\n")
print("Exported ragAnalysisData")

# 5. Guardrail results
with open(os.path.join(BASE_DIR, "evaluation", "results", "guardrail_results.json"), "r", encoding="utf-8") as f:
    guardrail_results = json.load(f)

with open(os.path.join(OUT_DIR, "guardrailData.ts"), "w", encoding="utf-8") as f:
    f.write(f"export const guardrailData = {json.dumps(guardrail_results, indent=2)};\n")
print("Exported guardrailData")

# 6. AI Output test results
with open(os.path.join(BASE_DIR, "evaluation", "results", "ai_output_test_results.json"), "r", encoding="utf-8") as f:
    ai_output_results = json.load(f)

with open(os.path.join(OUT_DIR, "aiOutputData.ts"), "w", encoding="utf-8") as f:
    f.write(f"export const aiOutputData = {json.dumps(ai_output_results, indent=2)};\n")
print("Exported aiOutputData")

# 7. Chunks data
with open(os.path.join(BASE_DIR, "data", "chunks.json"), "r", encoding="utf-8") as f:
    chunks = json.load(f)

with open(os.path.join(OUT_DIR, "chunksData.ts"), "w", encoding="utf-8") as f:
    f.write(f"export const chunksData = {json.dumps(chunks, indent=2)};\n")
print(f"Exported {len(chunks)} chunks")

print("All data exported successfully!")
