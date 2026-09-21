import React, { useState } from 'react';
import { GitCompare, Sparkles, CheckCircle2, AlertTriangle, Clock, BookOpen, Layers } from 'lucide-react';
import { PageHeader } from '../layout/PageHeader';
import { StatusBadge } from '../common/StatusBadge';
import { askQuestion, askNoRag } from '../../services/api';
import { SourceCitation } from '../../types';

export const RagVsNoRagView: React.FC = () => {
  const [question, setQuestion] = useState('What is demographic authentication?');
  const [loading, setLoading] = useState(false);
  const [ragResult, setRagResult] = useState<{
    answer: string;
    sources: SourceCitation[];
    latency?: number;
  } | null>({
    answer: "Demographic authentication is an authentication type in Aadhaar where the resident's demographic inputs—such as name, address, date of birth, and gender—are matched against the corresponding data stored in the Central Identities Data Repository (CIDR). If the input matches, UIDAI returns a 'Yes' response.",
    sources: [
      { source: "Aadhaar Handbook", page: 48, distance: 0.198 },
      { source: "Aadhaar Handbook", page: 52, distance: 0.285 },
    ],
    latency: 1.42,
  });

  const [noRagResult, setNoRagResult] = useState<{
    answer: string;
    latency?: number;
  } | null>({
    answer: "Demographic authentication refers to verifying personal identifying parameters like name, age, address, and gender across electronic registries. In generic IT contexts, it does not mandate biometric verification.",
    latency: 0.86,
  });

  const sampleQuestions = [
    'What is demographic authentication?',
    'What documents are required for Aadhaar enrolment?',
    'Can a resident update their biometric details online?',
    'What is the fee for mandatory biometric update for children?',
  ];

  const handleRunComparison = async (selectedQ?: string) => {
    const q = selectedQ || question;
    if (!q.trim() || loading) return;
    setLoading(true);

    try {
      const [ragRes, noRagRes] = await Promise.all([
        askQuestion(q),
        askNoRag(q),
      ]);
      setRagResult({
        answer: ragRes.answer,
        sources: ragRes.sources,
        latency: ragRes.latency,
      });
      setNoRagResult({
        answer: noRagRes.answer,
        latency: noRagRes.latency,
      });
    } catch {
      // handled inside api client
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="RAG vs No-RAG Pipeline"
        subtitle="Side-by-side behavioral comparison: Retrieval-Grounded vs LLM-Only Baseline"
        icon={GitCompare}
      />

      {/* Query Control Card */}
      <div className="rounded-2xl border border-[#E7ECE9] bg-white p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-3 text-xs font-bold text-[#192823]">
          <Sparkles className="h-4 w-4 text-[#1E6F50]" />
          <span>Select or Enter Evaluation Prompt</span>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Type an Aadhaar inquiry to evaluate across both pipelines…"
            className="flex-1 rounded-xl border border-[#CBD5E1] bg-[#F8FAF9] px-4 py-3 text-sm text-[#192823] outline-none focus:border-[#1E6F50] focus:bg-white focus:ring-2 focus:ring-[#1E6F50]/15"
          />
          <button
            onClick={() => handleRunComparison()}
            disabled={loading || !question.trim()}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1E6F50] px-6 py-3 text-xs font-bold text-white shadow-sm shadow-[#1E6F50]/20 hover:bg-[#155A40] active:scale-95 disabled:opacity-40 transition"
          >
            {loading ? 'Evaluating Pipelines…' : '▶ Run Comparison'}
          </button>
        </div>

        {/* Chips */}
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <span className="text-[11px] text-[#64748B]">Examples:</span>
          {sampleQuestions.map((sq, i) => (
            <button
              key={i}
              onClick={() => {
                setQuestion(sq);
                handleRunComparison(sq);
              }}
              className="rounded-lg border border-[#E7ECE9] bg-[#F8FAF9] px-2.5 py-1 text-xs text-[#475569] hover:border-[#1E6F50] hover:text-[#1E6F50] transition"
            >
              {sq}
            </button>
          ))}
        </div>
      </div>

      {/* Side-by-side Result Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: RAG Pipeline */}
        <div className="flex flex-col rounded-2xl border-2 border-emerald-500/40 bg-white p-6 shadow-sm transition hover:shadow-md">
          <div className="flex items-center justify-between pb-4 border-b border-[#E7ECE9]">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#EAF7EE] text-[#1E6F50]">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-sm font-bold text-[#192823]">Retrieval-Grounded Pipeline</h2>
                <div className="text-[11px] text-[#64748B]">FAISS + Qwen 2.5 Coder 1.5B</div>
              </div>
            </div>
            <StatusBadge label="Grounded · High Fidelity" variant="success" />
          </div>

          <div className="mt-4 flex items-center gap-4 text-xs text-[#64748B]">
            <span className="flex items-center gap-1 font-semibold text-emerald-700">
              <Clock className="h-3.5 w-3.5" /> Latency: {ragResult?.latency || 0}s
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <BookOpen className="h-3.5 w-3.5" /> Citations: {ragResult?.sources.length || 0} chunks
            </span>
            <span>•</span>
            <span className="text-emerald-700 font-semibold">Hallucination Risk: Low</span>
          </div>

          <div className="mt-4 flex-1 rounded-xl bg-[#F8FAF9] p-4 text-sm leading-relaxed text-[#192823] border border-[#E7ECE9]">
            {ragResult ? ragResult.answer : 'No run yet.'}
          </div>

          {/* Citations Box */}
          {ragResult && ragResult.sources.length > 0 && (
            <div className="mt-4 pt-3 border-t border-[#E7ECE9]">
              <div className="text-xs font-bold text-[#1E6F50] mb-2 flex items-center gap-1.5">
                <BookOpen className="h-3.5 w-3.5" />
                <span>Verified UIDAI Handbook Sources</span>
              </div>
              <div className="space-y-2">
                {ragResult.sources.map((s, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between rounded-lg border border-[#CBD5E1]/60 bg-white px-3 py-2 text-xs"
                  >
                    <span className="font-semibold text-[#192823]">{s.source}</span>
                    <div className="flex items-center gap-2">
                      <span className="rounded bg-emerald-50 px-1.5 py-0.5 font-bold text-[#1E6F50]">
                        Page {s.page}
                      </span>
                      {s.distance !== undefined && (
                        <span className="text-[10px] text-[#64748B] font-mono">
                          dist: {s.distance.toFixed(4)}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right: No-RAG Pipeline */}
        <div className="flex flex-col rounded-2xl border border-amber-300/80 bg-white p-6 shadow-sm transition hover:shadow-md">
          <div className="flex items-center justify-between pb-4 border-b border-[#E7ECE9]">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
                <AlertTriangle className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-sm font-bold text-[#192823]">No-RAG Baseline</h2>
                <div className="text-[11px] text-[#64748B]">Zero-Context Ollama Inference</div>
              </div>
            </div>
            <StatusBadge label="Baseline · Unverified" variant="warning" />
          </div>

          <div className="mt-4 flex items-center gap-4 text-xs text-[#64748B]">
            <span className="flex items-center gap-1 font-semibold text-amber-700">
              <Clock className="h-3.5 w-3.5" /> Latency: {noRagResult?.latency || 0}s
            </span>
            <span>•</span>
            <span className="text-[#94A3B8]">Citations: 0 (No context)</span>
            <span>•</span>
            <span className="text-rose-600 font-semibold">Hallucination Risk: Moderate/High</span>
          </div>

          <div className="mt-4 flex-1 rounded-xl bg-[#F8FAF9] p-4 text-sm leading-relaxed text-[#192823] border border-[#E7ECE9]">
            {noRagResult ? noRagResult.answer : 'No run yet.'}
          </div>

          <div className="mt-4 rounded-xl bg-amber-50/70 p-3.5 border border-amber-200/60 text-xs text-amber-900 leading-relaxed">
            <b>Pipeline Diagnostic:</b> The No-RAG baseline answers solely from general pretraining weights. Without Aadhaar Handbook grounding, it lacks specific clause numbers, exact document lists, and UIDAI compliance directives.
          </div>
        </div>
      </div>
    </div>
  );
};
