import React, { useState } from 'react';
import { BookOpen, FileText, Database, Layers, Search, ChevronRight, UploadCloud, CheckCircle2, ChevronLeft } from 'lucide-react';
import { PageHeader } from '../layout/PageHeader';
import { KpiCard } from '../common/KpiCard';
import { StatusBadge } from '../common/StatusBadge';
import { chunksData } from '../../data/chunksData';

export const KnowledgeBaseView: React.FC = () => {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [expandedChunkId, setExpandedChunkId] = useState<number | null>(null);
  const pageSize = 10;

  const totalChunks = chunksData.length;
  const filteredChunks = chunksData.filter((c: any) => {
    if (!search) return true;
    const q = search.toLowerCase();
    return (
      (c.chunk && c.chunk.toLowerCase().includes(q)) ||
      (c.source && c.source.toLowerCase().includes(q)) ||
      String(c.page).includes(q)
    );
  });

  const totalPages = Math.ceil(filteredChunks.length / pageSize);
  const paginatedChunks = filteredChunks.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Knowledge Base & Vector Store"
        subtitle="UIDAI Aadhaar Handbook Corpus, Chunking Hierarchy & FAISS Embeddings"
        icon={BookOpen}
      />

      {/* 5 KPI Cards (1 highlighted forest green + 4 white outline) matching Image 1 */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <KpiCard
          title="PDF Documents"
          value="2"
          subtitle="Official UIDAI Guides"
          icon={FileText}
          variant="highlight"
        />
        <KpiCard
          title="Total Chunks"
          value={totalChunks}
          subtitle="Semantic units"
          icon={Layers}
          iconColor="green"
        />
        <KpiCard
          title="Embeddings"
          value={totalChunks}
          subtitle="Indexed in FAISS"
          icon={Database}
          iconColor="blue"
        />
        <KpiCard
          title="Dimensions"
          value="768"
          subtitle="nomic-embed-text"
          icon={Database}
          iconColor="amber"
        />
        <KpiCard
          title="Chunk / Overlap"
          value="1500 / 200"
          subtitle="Token stride"
          icon={Layers}
          iconColor="green"
        />
      </div>

      {/* Document Ingestion & Source Files */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="rounded-2xl border border-[#E7ECE9] bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-bold text-[#192823]">Ingested Source Documents</h2>
            <StatusBadge label="Synced" variant="success" />
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between rounded-xl border border-[#E7ECE9] bg-[#F8FAF9] p-3.5 transition hover:border-[#1E6F50]">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-[#1E6F50]">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#192823]">UIAI_1.pdf</div>
                  <div className="text-[11px] text-[#64748B]">Aadhaar Handbook Part 1 · 452 KB</div>
                </div>
              </div>
              <span className="rounded-md bg-emerald-50 px-2 py-1 text-[11px] font-bold text-[#1E6F50]">
                112 chunks
              </span>
            </div>

            <div className="flex items-center justify-between rounded-xl border border-[#E7ECE9] bg-[#F8FAF9] p-3.5 transition hover:border-[#1E6F50]">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-[#1E6F50]">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#192823]">UIAI_2.pdf</div>
                  <div className="text-[11px] text-[#64748B]">Aadhaar Handbook Part 2 · 438 KB</div>
                </div>
              </div>
              <span className="rounded-md bg-emerald-50 px-2 py-1 text-[11px] font-bold text-[#1E6F50]">
                112 chunks
              </span>
            </div>
          </div>
        </div>

        {/* Pipeline Stage Status */}
        <div className="lg:col-span-2 rounded-2xl border border-[#E7ECE9] bg-white p-6 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-bold text-[#192823]">Vector Ingestion Pipeline</h2>
              <span className="text-xs text-[#64748B]">Automated ETL Workflow</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="rounded-xl border border-emerald-100 bg-emerald-50/50 p-3.5">
                <div className="flex items-center gap-2 font-bold text-xs text-[#1E6F50] mb-1">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>1. Extraction</span>
                </div>
                <div className="text-[11px] text-[#475569]">process_documents.py</div>
                <div className="mt-2 text-[10px] text-emerald-800">Chunk size 1500 chars</div>
              </div>

              <div className="rounded-xl border border-emerald-100 bg-emerald-50/50 p-3.5">
                <div className="flex items-center gap-2 font-bold text-xs text-[#1E6F50] mb-1">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>2. Embeddings</span>
                </div>
                <div className="text-[11px] text-[#475569]">create_embeddings.py</div>
                <div className="mt-2 text-[10px] text-emerald-800">nomic-embed-text:latest</div>
              </div>

              <div className="rounded-xl border border-emerald-100 bg-emerald-50/50 p-3.5">
                <div className="flex items-center gap-2 font-bold text-xs text-[#1E6F50] mb-1">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>3. FAISS Store</span>
                </div>
                <div className="text-[11px] text-[#475569]">create_vector_db.py</div>
                <div className="mt-2 text-[10px] text-emerald-800">aadhaar.index (FlatL2)</div>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between rounded-xl bg-[#F8FAF9] p-3 text-xs text-[#64748B] border border-[#E7ECE9]">
            <span>Storage Location: <code className="text-[#192823]">vector_db/aadhaar.index</code></span>
            <span className="text-emerald-700 font-semibold">224 vectors indexed</span>
          </div>
        </div>
      </div>

      {/* Chunk Explorer Table matching Image 2 style */}
      <div className="rounded-2xl border border-[#E7ECE9] bg-white shadow-sm overflow-hidden">
        {/* Table Header Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-6 border-b border-[#E7ECE9]">
          <div>
            <h2 className="text-base font-bold text-[#192823]">Handbook Chunks Explorer</h2>
            <p className="text-xs text-[#64748B]">Showing {filteredChunks.length} of {totalChunks} indexed chunks</p>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setPage(1);
                }}
                placeholder="Search chunk text or page…"
                className="rounded-xl border border-[#CBD5E1] bg-[#F8FAF9] pl-10 pr-4 py-2 text-xs text-[#192823] outline-none focus:border-[#1E6F50] focus:bg-white focus:ring-2 focus:ring-[#1E6F50]/15 w-64"
              />
            </div>
          </div>
        </div>

        {/* Chunks List */}
        <div className="divide-y divide-[#E7ECE9]">
          {paginatedChunks.map((c: any, idx: number) => {
            const actualIndex = (page - 1) * pageSize + idx + 1;
            const isExpanded = expandedChunkId === actualIndex;

            return (
              <div key={actualIndex} className="p-4 hover:bg-[#F8FAF9] transition">
                <div 
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => setExpandedChunkId(isExpanded ? null : actualIndex)}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#EAF7EE] text-[11px] font-bold text-[#1E6F50]">
                      #{actualIndex}
                    </span>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-[#192823]">{c.source || 'Aadhaar Handbook'}</span>
                        <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[10px] font-semibold text-[#64748B]">
                          Page {c.page}
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-[#64748B] line-clamp-1">
                        {c.chunk}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className={`h-4 w-4 text-slate-400 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                </div>

                {/* Expanded Chunk Details */}
                {isExpanded && (
                  <div className="mt-3 rounded-xl border border-[#E7ECE9] bg-white p-4 text-xs leading-relaxed text-[#192823]">
                    <div className="text-[11px] font-bold text-[#1E6F50] mb-2 uppercase tracking-wide">
                      Full Chunk Content (Page {c.page})
                    </div>
                    <p className="whitespace-pre-wrap font-sans text-slate-700">{c.chunk}</p>
                  </div>
                )}
              </div>
            );
          })}
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
          <div className="flex items-center gap-1.5 text-xs">
            <span className="font-bold text-[#1E6F50] bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200/60">
              {page}
            </span>
            <span className="text-[#64748B]">of {totalPages || 1}</span>
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
