import React from 'react';
import { Cpu, CheckCircle2, Zap, ShieldCheck, Box, HardDrive } from 'lucide-react';
import { PageHeader } from '../layout/PageHeader';
import { StatusBadge } from '../common/StatusBadge';

export const ModelsView: React.FC = () => {
  const models = [
    {
      name: 'qwen2.5-coder:1.5b',
      title: 'Qwen 2.5 Coder',
      size: '1.5B params',
      quantization: 'Q4_K_M',
      family: 'qwen2',
      isActive: true,
      correctness: '28.3%',
      relevance: '82.0%',
      passRate: '20.0%',
      desc: 'Selected as the primary orchestrator model for Week 3 and Week 4. Highly optimized for code parsing and strict rule compliance.',
    },
    {
      name: 'llama3.2:3b',
      title: 'Meta Llama 3.2',
      size: '3.2B params',
      quantization: 'Q4_K_M',
      family: 'llama',
      isActive: false,
      correctness: '29.3%',
      relevance: '82.0%',
      passRate: '28.0%',
      desc: 'Largest parameter model in the evaluation benchmark. Highest raw correctness and broad syntactic phrasing capability.',
    },
    {
      name: 'deepseek-coder:1.3b',
      title: 'DeepSeek Coder',
      size: '1.3B params',
      quantization: 'Q4_K_M',
      family: 'deepseek',
      isActive: false,
      correctness: '21.5%',
      relevance: '82.0%',
      passRate: '12.0%',
      desc: 'Lightweight code and logical reasoning model. Compact footprint with fast inference execution.',
    },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        title="Models & LLM Inference Runtimes"
        subtitle="Ollama Model Inventory & Evaluation Benchmark Set"
        icon={Cpu}
      />

      {/* Model Benchmark Trio Cards matching Image 1 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {models.map((m) => (
          <div
            key={m.name}
            className={`flex flex-col justify-between rounded-2xl border bg-white p-6 shadow-sm transition-all hover:shadow-md ${
              m.isActive ? 'border-[#1E6F50] ring-1 ring-[#1E6F50]' : 'border-[#E7ECE9]'
            }`}
          >
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#E7ECE9]">
                <div className="flex items-center gap-2.5">
                  <div className={`flex h-9 w-9 items-center justify-center rounded-xl font-bold text-xs ${
                    m.isActive ? 'bg-[#1E6F50] text-white' : 'bg-slate-100 text-slate-700'
                  }`}>
                    <Cpu className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#192823]">{m.title}</h3>
                    <div className="font-mono text-[10px] text-[#64748B]">{m.name}</div>
                  </div>
                </div>
                {m.isActive ? (
                  <StatusBadge label="Active Default" variant="success" />
                ) : (
                  <StatusBadge label="Benchmarked" variant="neutral" />
                )}
              </div>

              <p className="mt-4 text-xs leading-relaxed text-[#475569]">
                {m.desc}
              </p>

              <div className="mt-5 grid grid-cols-3 gap-2 rounded-xl bg-[#F8FAF9] p-3 border border-[#E7ECE9] text-center">
                <div>
                  <div className="text-[10px] uppercase font-bold text-[#94A3B8]">Correctness</div>
                  <div className="text-sm font-extrabold text-[#192823]">{m.correctness}</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-[#94A3B8]">Relevance</div>
                  <div className="text-sm font-extrabold text-[#192823]">{m.relevance}</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-[#94A3B8]">Pass Rate</div>
                  <div className="text-sm font-extrabold text-[#1E6F50]">{m.passRate}</div>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-[#E7ECE9] flex items-center justify-between text-[11px] text-[#64748B]">
              <span>Parameters: <b>{m.size}</b></span>
              <span>Quant: <b>{m.quantization}</b></span>
            </div>
          </div>
        ))}
      </div>

      {/* Ollama Inventory Table */}
      <div className="rounded-2xl border border-[#E7ECE9] bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <HardDrive className="h-5 w-5 text-[#1E6F50]" />
            <h2 className="text-sm font-bold text-[#192823]">Ollama Local Weights Inventory</h2>
          </div>
          <span className="text-xs text-[#64748B]">Runtime port :11434</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-[#E7ECE9] text-[#64748B]">
                <th className="pb-3 font-semibold">Model Name</th>
                <th className="pb-3 font-semibold">Parameter Size</th>
                <th className="pb-3 font-semibold">Quantization</th>
                <th className="pb-3 font-semibold">Architecture Family</th>
                <th className="pb-3 font-semibold">Role in Pipeline</th>
                <th className="pb-3 font-semibold text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E7ECE9]">
              {models.map((m) => (
                <tr key={m.name} className="hover:bg-[#F8FAF9] transition">
                  <td className="py-3 font-mono font-semibold text-[#192823]">{m.name}</td>
                  <td className="py-3 text-[#475569]">{m.size}</td>
                  <td className="py-3 text-[#475569]">{m.quantization}</td>
                  <td className="py-3 text-[#475569]">{m.family}</td>
                  <td className="py-3 text-[#475569]">
                    {m.isActive ? 'Production Orchestrator' : 'Evaluation Benchmark Model'}
                  </td>
                  <td className="py-3 text-right">
                    {m.isActive ? (
                      <StatusBadge label="Serving" variant="success" />
                    ) : (
                      <StatusBadge label="Ready" variant="neutral" />
                    )}
                  </td>
                </tr>
              ))}
              <tr className="hover:bg-[#F8FAF9] transition">
                <td className="py-3 font-mono font-semibold text-[#192823]">nomic-embed-text:latest</td>
                <td className="py-3 text-[#475569]">137M params</td>
                <td className="py-3 text-[#475569]">F16</td>
                <td className="py-3 text-[#475569]">nomic-bert</td>
                <td className="py-3 text-[#475569]">Vector Embeddings Service (768-dim)</td>
                <td className="py-3 text-right">
                  <StatusBadge label="Serving" variant="success" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
