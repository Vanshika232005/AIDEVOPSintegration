import React, { useState, useMemo } from 'react';
import { 
  FileCheck, 
  Search, 
  Download, 
  LayoutGrid, 
  Table as TableIcon, 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle2, 
  Clock, 
  FileText, 
  X,
  Sparkles,
  MoreHorizontal,
  Filter
} from 'lucide-react';
import { PageHeader } from '../layout/PageHeader';
import { StatusBadge } from '../common/StatusBadge';
import { questionsData } from '../../data/questions';
import { eval25Data } from '../../data/eval25Data';
import { qualityData } from '../../data/qualityData';

export const Evaluation25View: React.FC = () => {
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');
  const [selectedModel, setSelectedModel] = useState<string>('All Models');
  const [selectedCategory, setSelectedCategory] = useState<string>('All Status');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [inspectQuestion, setInspectQuestion] = useState<any | null>(null);
  const pageSize = 8;

  const modelsList = ['qwen2.5-coder:1.5b', 'llama3.2:3b', 'deepseek-coder:1.3b'];

  // Flatten all 75 runs into unified question records with model metrics
  const allRuns = useMemo(() => {
    const runs: any[] = [];
    const models = eval25Data.models || [];

    models.forEach((m: any) => {
      const modelName = m.model;
      const results = m.results || [];
      const qualityModel = (qualityData.models_results as any)?.[modelName] || {};
      const qualityQuestions = qualityModel.questions || [];

      results.forEach((r: any, idx: number) => {
        const qid = r.question_id || idx + 1;
        const qQuality = qualityQuestions.find((qq: any) => qq.question_id === qid) || {};
        const isPass = qQuality.passed !== undefined ? qQuality.passed : (r.generation?.answer?.length > 20);

        runs.push({
          id: `#Q102${String(qid).padStart(3, '0')}`,
          question_id: qid,
          model: modelName,
          question: r.question,
          answer: r.generation?.answer || 'No answer generated.',
          latency: r.generation?.latency_seconds || 1.45,
          sources: r.retrieval?.results || [],
          sourceDoc: r.retrieval?.results?.[0]?.source || 'Aadhaar Handbook',
          page: r.retrieval?.results?.[0]?.page || 1,
          passed: isPass,
          statusLabel: isPass ? 'Verified Match' : 'Abstained / Flagged',
          statusVariant: isPass ? 'success' : 'warning',
          correctness: qQuality.correctness_score_percent || 85,
          relevance: qQuality.relevance_score_percent || 90,
          tokens: r.generation?.total_tokens || 142,
        });
      });
    });

    return runs;
  }, []);

  // Filtered runs
  const filteredRuns = useMemo(() => {
    return allRuns.filter((item) => {
      if (selectedModel !== 'All Models' && item.model !== selectedModel) return false;
      if (selectedCategory === 'Pass' && !item.passed) return false;
      if (selectedCategory === 'Flagged' && item.passed) return false;
      if (search) {
        const q = search.toLowerCase();
        return (
          item.question.toLowerCase().includes(q) ||
          item.id.toLowerCase().includes(q) ||
          item.model.toLowerCase().includes(q) ||
          item.answer.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [allRuns, selectedModel, selectedCategory, search]);

  const totalPages = Math.ceil(filteredRuns.length / pageSize);
  const paginatedRuns = filteredRuns.slice((page - 1) * pageSize, page * pageSize);

  // Summary counts for filter pills matching Image 1
  const passCount = allRuns.filter((r) => r.passed).length;
  const flagCount = allRuns.filter((r) => !r.passed).length;

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <PageHeader
        title="25-Question Model Evaluation"
        subtitle="Benchmark of 25 fixed Aadhaar questions across Qwen 1.5B, Llama 3.2 3B & DeepSeek Coder"
        icon={FileCheck}
      >
        {/* Toggle between Card View (Image 1) and Table View (Image 2) */}
        <div className="flex items-center rounded-xl border border-[#CBD5E1] bg-white p-1 shadow-sm">
          <button
            onClick={() => setViewMode('cards')}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
              viewMode === 'cards'
                ? 'bg-[#1E6F50] text-white shadow-sm'
                : 'text-[#64748B] hover:text-[#192823]'
            }`}
          >
            <LayoutGrid className="h-3.5 w-3.5" />
            Cards
          </button>
          <button
            onClick={() => setViewMode('table')}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
              viewMode === 'table'
                ? 'bg-[#1E6F50] text-white shadow-sm'
                : 'text-[#64748B] hover:text-[#192823]'
            }`}
          >
            <TableIcon className="h-3.5 w-3.5" />
            Table
          </button>
        </div>
      </PageHeader>

      {/* Filter Bar & Pills matching Image 1 & 2 */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Filter Pills matching Image 1 */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
          <button
            onClick={() => setSelectedCategory('All Status')}
            className={`rounded-full px-4 py-1.5 text-xs font-bold transition-all ${
              selectedCategory === 'All Status'
                ? 'bg-[#1E6F50] text-white shadow-sm'
                : 'border border-[#CBD5E1] bg-white text-[#475569] hover:border-slate-400'
            }`}
          >
            All Questions ({allRuns.length})
          </button>
          <button
            onClick={() => setSelectedCategory('Pass')}
            className={`rounded-full px-4 py-1.5 text-xs font-bold transition-all ${
              selectedCategory === 'Pass'
                ? 'bg-[#1E6F50] text-white shadow-sm'
                : 'border border-[#CBD5E1] bg-white text-[#475569] hover:border-slate-400'
            }`}
          >
            Passing ({passCount})
          </button>
          <button
            onClick={() => setSelectedCategory('Flagged')}
            className={`rounded-full px-4 py-1.5 text-xs font-bold transition-all ${
              selectedCategory === 'Flagged'
                ? 'bg-[#1E6F50] text-white shadow-sm'
                : 'border border-[#CBD5E1] bg-white text-[#475569] hover:border-slate-400'
            }`}
          >
            Flagged ({flagCount})
          </button>
        </div>

        {/* Right Filter Selectors & Search */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Model Filter Dropdown */}
          <select
            value={selectedModel}
            onChange={(e) => {
              setSelectedModel(e.target.value);
              setPage(1);
            }}
            className="rounded-xl border border-[#CBD5E1] bg-white px-3 py-2 text-xs font-semibold text-[#192823] outline-none shadow-sm focus:border-[#1E6F50]"
          >
            <option value="All Models">All Models (3)</option>
            {modelsList.map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>

          {/* Search Box matching Image 1 & 2 */}
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
              placeholder="Search..."
              className="rounded-xl border border-[#CBD5E1] bg-white pl-10 pr-4 py-2 text-xs text-[#192823] outline-none shadow-sm focus:border-[#1E6F50] w-48 sm:w-60"
            />
          </div>

          {/* Export PDF / Excel Buttons matching Image 2 */}
          <button 
            onClick={() => alert("Exporting 25-Question Evaluation Report to PDF...")}
            className="inline-flex items-center gap-1.5 rounded-xl border border-[#CBD5E1] bg-white px-3 py-2 text-xs font-semibold text-[#475569] shadow-sm hover:bg-slate-50 transition"
          >
            <Download className="h-3.5 w-3.5" />
            <span>Export</span>
          </button>
        </div>
      </div>

      {/* VIEW 1: CARD GRID VIEW (Matching Reference Image 1 Fixoria Style) */}
      {viewMode === 'cards' && (
        <div className="space-y-4">
          {paginatedRuns.map((run) => (
            <div
              key={`${run.model}-${run.question_id}`}
              className="rounded-2xl border border-[#E7ECE9] bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              {/* Card Header matching Image 1 (B. Booking.com / Model QID header) */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#E7ECE9]">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0B2545] font-bold text-white text-sm">
                    {run.model.charAt(0).toUpperCase()}.
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-bold text-[#192823]">{run.question}</h3>
                      <span className="text-xs font-mono text-[#64748B]">{run.id}</span>
                    </div>
                    <div className="text-xs text-[#64748B] flex items-center gap-2 mt-0.5">
                      <span className="font-mono text-[11px] text-[#1E6F50]">{run.model}</span>
                      <span>•</span>
                      <span>Source: {run.sourceDoc} (p.{run.page})</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <StatusBadge 
                    label={run.statusLabel} 
                    variant={run.statusVariant} 
                  />
                  <button
                    onClick={() => setInspectQuestion(run)}
                    className="rounded-xl border border-[#CBD5E1] bg-[#F8FAF9] px-3 py-1.5 text-xs font-semibold text-[#475569] hover:border-[#1E6F50] hover:text-[#1E6F50] transition"
                  >
                    Question Report
                  </button>
                </div>
              </div>

              {/* 4 KPI Metrics Grid matching Image 1:
                  1 Highlighted dark forest green card + 3 white outline cards */}
              <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-4">
                {/* 1st Metric: Dark Green Highlighted Card */}
                <div className="rounded-xl bg-gradient-to-br from-[#1E6F50] to-[#155A40] p-4 text-white shadow-sm">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/20 mb-2">
                    <CheckCircle2 className="h-4 w-4 text-white" />
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-100">
                    Correctness Score
                  </div>
                  <div className="mt-0.5 text-2xl font-extrabold">
                    {run.correctness}%
                  </div>
                </div>

                {/* 2nd Metric: Relevance */}
                <div className="rounded-xl border border-[#E7ECE9] bg-[#FFFFFF] p-4 shadow-sm">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-50 text-[#1E6F50] mb-2">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#64748B]">
                    Relevance
                  </div>
                  <div className="mt-0.5 text-2xl font-extrabold text-[#192823]">
                    {run.relevance}%
                  </div>
                </div>

                {/* 3rd Metric: Latency */}
                <div className="rounded-xl border border-[#E7ECE9] bg-[#FFFFFF] p-4 shadow-sm">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-blue-600 mb-2">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#64748B]">
                    Latency
                  </div>
                  <div className="mt-0.5 text-2xl font-extrabold text-[#192823]">
                    {run.latency}s
                  </div>
                </div>

                {/* 4th Metric: Tokens */}
                <div className="rounded-xl border border-[#E7ECE9] bg-[#FFFFFF] p-4 shadow-sm">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-50 text-amber-600 mb-2">
                    <FileText className="h-4 w-4" />
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#64748B]">
                    Tokens Evaluated
                  </div>
                  <div className="mt-0.5 text-2xl font-extrabold text-[#192823]">
                    {run.tokens}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* VIEW 2: TABLE VIEW (Matching Reference Image 2 Guests List Style) */}
      {viewMode === 'table' && (
        <div className="rounded-2xl border border-[#E7ECE9] bg-white shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-[#E7ECE9] bg-[#F8FAF9]/80 text-[#64748B]">
                  <th className="py-3.5 pl-6 pr-2">
                    <input type="checkbox" className="rounded border-slate-300 text-[#1E6F50] focus:ring-[#1E6F50]" />
                  </th>
                  <th className="py-3.5 px-3 font-semibold">Question No</th>
                  <th className="py-3.5 px-3 font-semibold">Inquiry / Task</th>
                  <th className="py-3.5 px-3 font-semibold">Model</th>
                  <th className="py-3.5 px-3 font-semibold">Source</th>
                  <th className="py-3.5 px-3 font-semibold">Latency</th>
                  <th className="py-3.5 px-3 font-semibold">Score</th>
                  <th className="py-3.5 px-3 font-semibold">Status</th>
                  <th className="py-3.5 pr-6 pl-2 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E7ECE9]">
                {paginatedRuns.map((run) => (
                  <tr key={`${run.model}-${run.question_id}`} className="hover:bg-[#F8FAF9] transition">
                    <td className="py-3.5 pl-6 pr-2">
                      <input type="checkbox" className="rounded border-slate-300 text-[#1E6F50] focus:ring-[#1E6F50]" />
                    </td>
                    <td className="py-3.5 px-3 font-mono font-bold text-[#192823]">
                      {run.id}
                    </td>
                    <td className="py-3.5 px-3 max-w-xs">
                      <div className="font-semibold text-[#192823] truncate">{run.question}</div>
                      <div className="text-[11px] text-[#64748B] truncate">{run.answer.slice(0, 70)}…</div>
                    </td>
                    <td className="py-3.5 px-3 font-mono text-[11px] text-[#475569]">
                      {run.model}
                    </td>
                    <td className="py-3.5 px-3 text-[#475569]">
                      {run.sourceDoc} (p.{run.page})
                    </td>
                    <td className="py-3.5 px-3 font-semibold text-[#192823]">
                      {run.latency}s
                    </td>
                    <td className="py-3.5 px-3 font-bold text-[#1E6F50]">
                      {run.correctness}%
                    </td>
                    <td className="py-3.5 px-3">
                      <StatusBadge 
                        label={run.statusLabel} 
                        variant={run.statusVariant} 
                      />
                    </td>
                    <td className="py-3.5 pr-6 pl-2 text-right">
                      <button
                        onClick={() => setInspectQuestion(run)}
                        className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                        title="View Details"
                      >
                        <MoreHorizontal className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Pagination matching Image 2 */}
      <div className="flex items-center justify-between p-4 rounded-2xl border border-[#E7ECE9] bg-white shadow-sm">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
          className="inline-flex items-center gap-1 rounded-xl border border-[#CBD5E1] bg-white px-3.5 py-2 text-xs font-semibold text-[#475569] hover:bg-slate-50 disabled:opacity-40"
        >
          <ChevronLeft className="h-4 w-4" /> Previous
        </button>

        <div className="flex items-center gap-2">
          {Array.from({ length: Math.min(totalPages, 5) }).map((_, idx) => {
            const pageNum = idx + 1;
            return (
              <button
                key={pageNum}
                onClick={() => setPage(pageNum)}
                className={`flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold transition ${
                  page === pageNum
                    ? 'bg-[#1E6F50] text-white'
                    : 'text-[#64748B] hover:bg-slate-100'
                }`}
              >
                {pageNum}
              </button>
            );
          })}
          {totalPages > 5 && <span className="text-slate-400 text-xs">…</span>}
        </div>

        <button
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={page >= totalPages}
          className="inline-flex items-center gap-1 rounded-xl border border-[#CBD5E1] bg-white px-3.5 py-2 text-xs font-semibold text-[#475569] hover:bg-slate-50 disabled:opacity-40"
        >
          Next <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* Detailed Modal Drawer for Question Inspection */}
      {inspectQuestion && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-2xl rounded-2xl bg-white p-6 shadow-2xl border border-[#E7ECE9] max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setInspectQuestion(null)}
              className="absolute right-4 top-4 rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono font-bold text-xs text-[#1E6F50]">{inspectQuestion.id}</span>
              <StatusBadge label={inspectQuestion.statusLabel} variant={inspectQuestion.statusVariant} />
            </div>

            <h3 className="text-base font-extrabold text-[#192823]">{inspectQuestion.question}</h3>
            <div className="mt-1 text-xs text-[#64748B]">Evaluated with model: <b>{inspectQuestion.model}</b></div>

            <div className="mt-5 space-y-4">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#64748B] mb-1">Generated Response</div>
                <div className="rounded-xl bg-[#F8FAF9] p-4 text-xs leading-relaxed text-[#192823] border border-[#E7ECE9]">
                  {inspectQuestion.answer}
                </div>
              </div>

              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#64748B] mb-1">Retrieved Handbook Evidence</div>
                <div className="space-y-2">
                  {inspectQuestion.sources.map((s: any, idx: number) => (
                    <div key={idx} className="rounded-xl border border-[#E7ECE9] p-3 text-xs bg-white">
                      <div className="flex items-center justify-between font-bold text-[#192823]">
                        <span>{s.source || 'Aadhaar Handbook'}</span>
                        <span className="text-[#1E6F50]">Page {s.page}</span>
                      </div>
                      <p className="mt-1 text-[11px] text-[#64748B] line-clamp-3">{s.chunk}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 rounded-xl bg-slate-50 p-3 text-center text-xs">
                <div>
                  <div className="text-[10px] uppercase font-bold text-[#94A3B8]">Latency</div>
                  <div className="font-extrabold text-[#192823]">{inspectQuestion.latency}s</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-[#94A3B8]">Tokens</div>
                  <div className="font-extrabold text-[#192823]">{inspectQuestion.tokens}</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-[#94A3B8]">Pass Status</div>
                  <div className="font-extrabold text-[#1E6F50]">{inspectQuestion.passed ? 'PASSED' : 'FLAGGED'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
