import React from 'react';
import { Layers, Server, ArrowRight, ShieldCheck, Database, Cpu, Monitor, CheckCircle2 } from 'lucide-react';
import { PageHeader } from '../layout/PageHeader';
import { StatusBadge } from '../common/StatusBadge';

export const ArchitectureView: React.FC = () => {
  const layers = [
    {
      layer: 'Frontend Interface',
      component: 'frontend-react (Vite + Tailwind + TS)',
      port: ':3000',
      desc: 'Fixoria-inspired modern UI console with evaluation dashboards and interactive assistant',
      status: 'React 18',
    },
    {
      layer: 'API Bridge',
      component: 'services/api_server.py',
      port: ':8003',
      desc: 'CORS-enabled orchestration bridge and health monitoring router',
      status: 'FastAPI',
    },
    {
      layer: 'Application Orchestration',
      component: 'services/app/main.py',
      port: ':8000',
      desc: 'Guardrail enforcement (scope, length, domain) and RAG pipeline dispatch',
      status: 'FastAPI',
    },
    {
      layer: 'Semantic Retrieval',
      component: 'services/retrieval/main.py',
      port: ':8001',
      desc: 'Embedding query vectorization and FAISS vector similarity search',
      status: 'FAISS + nomic',
    },
    {
      layer: 'LLM Service',
      component: 'services/llm/main.py',
      port: ':8002',
      desc: 'Prompt assembly, strict context adherence guard, and Ollama dispatch',
      status: 'FastAPI + Ollama',
    },
    {
      layer: 'Local Model Engine',
      component: 'Ollama Runtime',
      port: ':11434',
      desc: 'Local neural execution engine for Qwen 2.5 Coder, Llama 3.2, and DeepSeek',
      status: 'Ollama',
    },
    {
      layer: 'Vector Index',
      component: 'vector_db/aadhaar.index',
      port: 'local fs',
      desc: 'FlatL2 FAISS index holding 224 vectors at 768 dimensions',
      status: 'IndexStore',
    },
    {
      layer: 'Document Corpus',
      component: 'knowledge_base/ (UIAI_1.pdf, UIAI_2.pdf)',
      port: 'local fs',
      desc: 'Official UIDAI Aadhaar Handbooks extracted and segmented into 1500-char chunks',
      status: 'Handbook PDFs',
    },
  ];

  const steps = [
    { title: '1. Resident Query', desc: 'User submits question via React Assistant or evaluation script', icon: Monitor },
    { title: '2. Guardrail Validation', desc: 'Application service checks Aadhaar scope, query length & domain', icon: ShieldCheck },
    { title: '3. FAISS Retrieval', desc: 'Retrieval service embeds query and fetches Top-3 closest chunks', icon: Database },
    { title: '4. Context Assembly', desc: 'Orchestrator builds strict grounded prompt with citations', icon: Layers },
    { title: '5. Local LLM Generation', desc: 'Qwen 2.5 Coder generates answer using ONLY Handbook context', icon: Cpu },
    { title: '6. Verified Response', desc: 'Answer rendered with source document, page, and FAISS distance', icon: CheckCircle2 },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        title="System Architecture & Microservices"
        subtitle="End-to-end multi-tier microservices architecture & request workflow"
        icon={Layers}
      />

      {/* Visual Request Flow Card */}
      <div className="rounded-2xl border border-[#E7ECE9] bg-white p-6 shadow-sm">
        <h2 className="text-sm font-bold text-[#192823] mb-4">Request Flow & Data Pipeline</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-3">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div key={idx} className="relative flex flex-col justify-between rounded-xl border border-[#E7ECE9] bg-[#F8FAF9] p-4">
                <div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-[#1E6F50] mb-3">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="text-xs font-bold text-[#192823]">{s.title}</div>
                  <p className="mt-1 text-[11px] leading-relaxed text-[#64748B]">{s.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Microservices Topology Table */}
      <div className="rounded-2xl border border-[#E7ECE9] bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Server className="h-5 w-5 text-[#1E6F50]" />
            <h2 className="text-sm font-bold text-[#192823]">Microservices & Component Topology</h2>
          </div>
          <span className="text-xs text-[#64748B]">Week 3 + Week 4 Architecture</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-[#E7ECE9] text-[#64748B]">
                <th className="pb-3 font-semibold">Tier / Layer</th>
                <th className="pb-3 font-semibold">Component File</th>
                <th className="pb-3 font-semibold">Port / Protocol</th>
                <th className="pb-3 font-semibold">Core Responsibility</th>
                <th className="pb-3 font-semibold text-right">Technology</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E7ECE9]">
              {layers.map((l, idx) => (
                <tr key={idx} className="hover:bg-[#F8FAF9] transition">
                  <td className="py-3.5 font-bold text-[#192823]">{l.layer}</td>
                  <td className="py-3.5 font-mono text-[#1E6F50]">{l.component}</td>
                  <td className="py-3.5 font-mono text-[#475569]">{l.port}</td>
                  <td className="py-3.5 text-[#475569]">{l.desc}</td>
                  <td className="py-3.5 text-right">
                    <StatusBadge label={l.status} variant="neutral" withDot={false} />
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
