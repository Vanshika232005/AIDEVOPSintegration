import React, { useState } from 'react';
import { Search, Database, Layers, CheckCircle2, AlertCircle, ChevronLeft, ChevronRight, Filter } from 'lucide-react';
import { PageHeader } from '../layout/PageHeader';
import { KpiCard } from '../common/KpiCard';
import { StatusBadge } from '../common/StatusBadge';
import { ragAnalysisData } from '../../data/ragAnalysisData';

export const RagAnalysisView: React.FC = () => {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [selectedModel, setSelectedModel] = useState('All Models');
  const pageSize = 10;

  const records = ragAnalysisData.records || [];

  const filtered = records.filter((r: any) => {
    if (selectedModel !== 'All Models' && r.model !== selectedModel) return false;
    if (search) {
      const q = search.toLowerCase();
      return (
        r.question.toLowerCase().includes(q) ||
        r.rag_flow_analysis?.assessment?.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const totalPages = Math.ceil(filtered.length / pageSize);
  const paginated = filtered.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className="space-y-6">
      <PageHeader
        title="RAG Retrieval & Flow Analysis"
        subtitle="Detailed inspection of FAISS distances, context fact coverage & model decision paths"
        icon={Search}
      />

      {/* KPI Cards matching Image 1 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <KpiCard
          title="Total Evaluated Flows"
          value={records.length}
          subtitle="75 question-model pairs"
          icon={Database}
          variant="highlight"
        />
        <KpiCard
          title="Avg Retrieval Distance"
          value="0.264"
          subtitle="FAISS L2 distance"
          icon={Layers}
          iconColor="green"
        />
        <KpiCard
          title="Context Coverage"
          value="100%"
          subtitle="Key facts present in chunk"
          icon={CheckCircle2}
          iconColor="blue"
        />
        <KpiCard
          title="Avg Supported Facts"
          value="4.8"
          subtitle="Per retrieved context"
          icon={CheckCircle2}
          iconColor="amber"
        />
      </div>

      {/* Analysis Table Card */}
      <div className="rounded-2xl border border-[#E7ECE9] bg-white shadow-sm overflow-hidden">
        {/* Table Header Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-6 border-b border-[#E7ECE9]">
          <div>
            <h2 className="text-base font-bold text-[#192823]">Retrieval Flow Audit Trail</h2>
            <p className="text-xs text-[#64748B]">Showing {filtered.length} analyzed query workflows</p>
          </div>

          <div className="flex items-center gap-3">
            <select
              value={selectedModel}
              onChange={(e) => {
                setSelectedModel(e.target.value);
                setPage(1);
              }}
              className="rounded-xl border border-[#CBD5E1] bg-white px-3 py-2 text-xs font-semibold text-[#192823] outline-none shadow-sm focus:border-[#1E6F50]"
            >
              <option value="All Models">All Models</option>
              <option value="qwen2.5-coder:1.5b">qwen2.5-coder:1.5b</option>
              <option value="llama3.2:3b">llama3.2:3b</option>
              <option value="deepseek-coder:1.3b">deepseek-coder:1.3b</option>
            </select>

            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setPage(1);
                }}
                placeholder="Search analysis..."
                className="rounded-xl border border-[#CBD5E1] bg-[#F8FAF9] pl-10 pr-4 py-2 text-xs text-[#192823] outline-none focus:border-[#1E6F50] focus:bg-white focus:ring-2 focus:ring-[#1E6F50]/15 w-60"
              />
            </div>
          </div>
        </div>

        {/* Records Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-[#E7ECE9] bg-[#F8FAF9]/80 text-[#64748B]">
                <th className="py-3.5 px-4 font-semibold">Q#</th>
                <th className="py-3.5 px-4 font-semibold">Question</th>
                <th className="py-3.5 px-4 font-semibold">Model</th>
                <th className="py-3.5 px-4 font-semibold">Fact Coverage</th>
                <th className="py-3.5 px-4 font-semibold">Supported Facts</th>
                <th className="py-3.5 px-4 font-semibold">Flow Assessment</th>
                <th className="py-3.5 px-4 font-semibold text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E7ECE9]">
              {paginated.map((r: any, idx: number) => {
                const analysis = r.rag_flow_analysis || {};
                const isAbstained = analysis.model_abstained;

                return (
                  <tr key={idx} className="hover:bg-[#F8FAF9] transition">
                    <td className="py-3.5 px-4 font-mono font-bold text-[#192823]">
                      Q{r.question_id}
                    </td>
                    <td className="py-3.5 px-4 font-semibold text-[#192823] max-w-xs truncate">
                      {r.question}
                    </td>
                    <td className="py-3.5 px-4 font-mono text-[11px] text-[#475569]">
                      {r.model}
                    </td>
                    <td className="py-3.5 px-4 font-bold text-[#1E6F50]">
                      {((analysis.context_fact_coverage || 1) * 100).toFixed(0)}%
                    </td>
                    <td className="py-3.5 px-4 text-[#192823] font-medium">
                      {analysis.facts_supported_by_context || 0} facts
                    </td>
                    <td className="py-3.5 px-4 text-[#64748B] max-w-sm text-[11px]">
                      {analysis.assessment}
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      {isAbstained ? (
                        <StatusBadge label="Abstained" variant="warning" />
                      ) : (
                        <StatusBadge label="Retrieved & Grounded" variant="success" />
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Pagination matching Image 2 */}
        <div className="flex items-center justify-between p-4 border-t border-[#E7ECE9] bg-[#F8FAF9]/50">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="inline-flex items-center gap-1 rounded-xl border border-[#CBD5E1] bg-white px-3 py-1.5 text-xs font-semibold text-[#475569] hover:bg-slate-50 disabled:opacity-40"
          >
            <ChevronLeft className="h-4 w-4" /> Previous
          </button>
          <div className="text-xs text-[#64748B]">
            Page <span className="font-bold text-[#192823]">{page}</span> of {totalPages || 1}
          </div>
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page >= totalPages}
            className="inline-flex items-center gap-1 rounded-xl border border-[#CBD5E1] bg-white px-3 py-1.5 text-xs font-semibold text-[#475569] hover:bg-slate-50 disabled:opacity-40"
          >
            Next <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
