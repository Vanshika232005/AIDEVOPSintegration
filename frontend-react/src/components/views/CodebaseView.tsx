import React from 'react';
import { Code2, FolderTree, FileCode, CheckCircle2, ArrowRight } from 'lucide-react';
import { PageHeader } from '../layout/PageHeader';
import { StatusBadge } from '../common/StatusBadge';

export const CodebaseView: React.FC = () => {
  const tree = `aadhaar-ai-assistant/
├── frontend-react/               [NEW: Modern React + Tailwind + Lucide Console]
│   ├── src/
│   │   ├── components/views/     (Assistant, Eval25, 7-Cat, RAG, Guardrails, Status...)
│   │   ├── data/                 (Preloaded 75 evaluations, chunks & guardrails)
│   │   └── services/api.ts       (API client with offline fallbacks)
│   └── vite.config.ts            (Proxy configuration)
├── frontend/
│   └── app.py                    (Preserved original Streamlit app)
├── services/
│   ├── api_server.py             [NEW: Unified CORS FastAPI Bridge]
│   ├── app/main.py               (Application Orchestrator + Guardrails)
│   ├── retrieval/main.py         (FAISS Vector Retrieval Service)
│   └── llm/main.py               (Ollama LLM Generation Service)
├── process_documents.py          (PDF Extraction & Character Chunking)
├── create_embeddings.py          (Ollama Nomic Embedding Generation)
├── create_vector_db.py           (FAISS FlatL2 Index Construction)
├── data/
│   └── chunks.json               (224 Ingested Aadhaar Handbook Chunks)
├── knowledge_base/
│   ├── UIAI_1.pdf                (UIDAI Handbook Part 1)
│   └── UIAI_2.pdf                (UIDAI Handbook Part 2)
├── vector_db/
│   └── aadhaar.index             (FAISS Binary Vector Index)
└── evaluation/
    ├── questions.json            (Fixed 25 Benchmark Inquiries)
    └── results/                  (Precomputed Week 4 Model Outputs & Metrics)`;

  const modules = [
    {
      module: 'frontend-react/',
      type: 'Client Tier',
      relationship: 'React 18 UI → API Bridge / Application Service',
      status: 'Active',
    },
    {
      module: 'services/api_server.py',
      type: 'Bridge Tier',
      relationship: 'FastAPI CORS bridge forwarding /ask, /chunks & health',
      status: 'Active',
    },
    {
      module: 'services/app/main.py',
      type: 'Application Tier',
      relationship: 'Validates 4 guardrails, dispatches to retrieval & LLM',
      status: 'Active',
    },
    {
      module: 'services/retrieval/main.py',
      type: 'Retrieval Tier',
      relationship: 'Query vectorization via nomic-embed-text & FAISS search',
      status: 'Active',
    },
    {
      module: 'services/llm/main.py',
      type: 'Inference Tier',
      relationship: 'Builds strict prompt & invokes Ollama runtime',
      status: 'Active',
    },
    {
      module: 'process_documents.py',
      type: 'Data Prep',
      relationship: 'PDF text extraction into 1500-char chunks with 200 overlap',
      status: 'ETL Pipeline',
    },
    {
      module: 'create_embeddings.py',
      type: 'Embedding',
      relationship: 'Generates 768-dim vector embeddings from chunks.json',
      status: 'ETL Pipeline',
    },
    {
      module: 'create_vector_db.py',
      type: 'Vector Store',
      relationship: 'Builds FlatL2 binary index vector_db/aadhaar.index',
      status: 'ETL Pipeline',
    },
    {
      module: 'evaluation/',
      type: 'Evaluation Lab',
      relationship: 'Multi-model testing suite across 25 questions & guardrails',
      status: 'Benchmarked',
    },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        title="Repository & Codebase Architecture"
        subtitle="Multi-file relationships, execution pipelines & component dependencies"
        icon={Code2}
      />

      {/* Codebase Tree Card */}
      <div className="rounded-2xl border border-[#E7ECE9] bg-white p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-3 text-sm font-bold text-[#192823]">
          <FolderTree className="h-4 w-4 text-[#1E6F50]" />
          <span>Project Repository Layout</span>
        </div>
        <pre className="rounded-xl bg-[#0B2545] p-5 text-xs text-emerald-300 font-mono overflow-x-auto leading-relaxed border border-slate-800 shadow-inner">
          {tree}
        </pre>
      </div>

      {/* Module Relationship Table */}
      <div className="rounded-2xl border border-[#E7ECE9] bg-white p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <FileCode className="h-5 w-5 text-[#1E6F50]" />
          <h2 className="text-sm font-bold text-[#192823]">Module Dependency Matrix</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-[#E7ECE9] text-[#64748B]">
                <th className="pb-3 font-semibold">Module / Directory</th>
                <th className="pb-3 font-semibold">Architecture Tier</th>
                <th className="pb-3 font-semibold">Functional Relationship</th>
                <th className="pb-3 font-semibold text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E7ECE9]">
              {modules.map((m, idx) => (
                <tr key={idx} className="hover:bg-[#F8FAF9] transition">
                  <td className="py-3.5 font-mono font-bold text-[#192823]">{m.module}</td>
                  <td className="py-3.5 text-[#475569]">{m.type}</td>
                  <td className="py-3.5 text-[#475569]">{m.relationship}</td>
                  <td className="py-3.5 text-right">
                    <StatusBadge label={m.status} variant="success" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
