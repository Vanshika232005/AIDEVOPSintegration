import React, { useState } from 'react';
import { FlaskConical, CheckCircle2, XCircle, Search, ChevronLeft, ChevronRight, ShieldCheck } from 'lucide-react';
import { PageHeader } from '../layout/PageHeader';
import { KpiCard } from '../common/KpiCard';
import { StatusBadge } from '../common/StatusBadge';
import { aiOutputData } from '../../data/aiOutputData';

export const AiOutputTestingView: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selectedModel, setSelectedModel] = useState('All Models');
  const [page, setPage] = useState(1);
  const pageSize = 10;

  const summary = aiOutputData.summary || {
    total_outputs: 75,
    overall_passed: 50,
    overall_pass_rate_percent: 66.67,
    relevance_pass_rate_percent: 96.0,
    context_support_pass_rate_percent: 68.0,
    unsupported_claim_pass_rate_percent: 93.33,
    format_pass_rate_percent: 98.67,
  };

  const results = aiOutputData.results || [];

  const filtered = results.filter((r: any) => {
    if (selectedModel !== 'All Models' && r.model !== selectedModel) return false;
    if (search) {
      const q = search.toLowerCase();
      return (
        r.question.toLowerCase().includes(q) ||
        r.model.toLowerCase().includes(q) ||
        String(r.question_id).includes(q)
      );
    }
    return true;
  });

  const totalPages = Math.ceil(filtered.length / pageSize);
  const paginated = filtered.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className="space-y-6">
      <PageHeader
        title="AI Output Testing & Quality Rubrics"
        subtitle="Granular evaluation across relevance, factual support, claim validity & format compliance"
        icon={FlaskConical}
      />

      {/* KPI Overview Cards matching Image 1 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <KpiCard
          title="Overall Pass Rate"
          value={`${summary.overall_pass_rate_percent}%`}
          subtitle={`${summary.overall_passed}/${summary.total_outputs} outputs passed`}
          icon={FlaskConical}
          variant="highlight"
        />
        <KpiCard
          title="Format Compliance"
          value={`${summary.format_pass_rate_percent}%`}
          subtitle="Bullet point & direct styling"
          icon={CheckCircle2}
          iconColor="green"
        />
        <KpiCard
          title="Relevance Pass"
          value={`${summary.relevance_pass_rate_percent}%`}
          subtitle="Direct answer to user prompt"
          icon={CheckCircle2}
          iconColor="blue"
        />
        <KpiCard
          title="Anti-Hallucination"
          value={`${summary.unsupported_claim_pass_rate_percent}%`}
          subtitle="Zero unverified claims"
          icon={ShieldCheck}
          iconColor="amber"
        />
      </div>

      {/* Results Table */}
      <div className="rounded-2xl border border-[#E7ECE9] bg-white shadow-sm overflow-hidden">
        {/* Table Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-6 border-b border-[#E7ECE9]">
          <div>
            <h2 className="text-base font-bold text-[#192823]">Output Quality Scorecards</h2>
            <p className="text-xs text-[#64748B]">Showing {filtered.length} of {results.length} evaluated model outputs</p>
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
                placeholder="Search prompt..."
                className="rounded-xl border border-[#CBD5E1] bg-[#F8FAF9] pl-10 pr-4 py-2 text-xs text-[#192823] outline-none focus:border-[#1E6F50] focus:bg-white focus:ring-2 focus:ring-[#1E6F50]/15 w-60"
              />
            </div>
          </div>
        </div>

        {/* Output Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-[#E7ECE9] bg-[#F8FAF9]/80 text-[#64748B]">
                <th className="py-3.5 px-4 font-semibold">Q#</th>
                <th className="py-3.5 px-4 font-semibold">Question Prompt</th>
                <th className="py-3.5 px-4 font-semibold">Model</th>
                <th className="py-3.5 px-4 font-semibold">Relevance</th>
                <th className="py-3.5 px-4 font-semibold">Context Support</th>
                <th className="py-3.5 px-4 font-semibold">No Hallucination</th>
                <th className="py-3.5 px-4 font-semibold">Format</th>
                <th className="py-3.5 px-4 font-semibold text-right">Overall</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E7ECE9]">
              {paginated.map((r: any, idx: number) => (
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
                  <td className="py-3.5 px-4">
                    {r.relevance_pass ? (
                      <span className="text-[#1E6F50] font-bold">✓ Pass</span>
                    ) : (
                      <span className="text-rose-500 font-bold">✗ Fail</span>
                    )}
                  </td>
                  <td className="py-3.5 px-4">
                    {r.context_support_pass ? (
                      <span className="text-[#1E6F50] font-bold">✓ Pass</span>
                    ) : (
                      <span className="text-rose-500 font-bold">✗ Fail</span>
                    )}
                  </td>
                  <td className="py-3.5 px-4">
                    {r.unsupported_claim_pass ? (
                      <span className="text-[#1E6F50] font-bold">✓ Valid</span>
                    ) : (
                      <span className="text-amber-600 font-bold">⚠ Claim</span>
                    )}
                  </td>
                  <td className="py-3.5 px-4">
                    {r.format_pass ? (
                      <span className="text-[#1E6F50] font-bold">✓ Format</span>
                    ) : (
                      <span className="text-rose-500 font-bold">✗ Format</span>
                    )}
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <StatusBadge
                      label={r.overall_pass ? 'PASSED' : 'FLAGGED'}
                      variant={r.overall_pass ? 'success' : 'error'}
                    />
                  </td>
                </tr>
              ))}
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
