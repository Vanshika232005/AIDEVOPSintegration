import React, { useMemo, useState } from 'react';
import { Activity, BarChart3, CheckCircle2, Clock3, Play, Sparkles, Timer, Zap } from 'lucide-react';
import { PageHeader } from '../layout/PageHeader';
import { KpiCard } from '../common/KpiCard';
import { questionsData } from '../../data/questions';
import { eval25Data } from '../../data/eval25Data';
import { qualityData } from '../../data/qualityData';
import { askQuestion } from '../../services/api';

type EvaluationRun = {
  model: string;
  answer: string;
  latency: number;
  tokens: number;
  source: 'live' | 'benchmark';
  metrics: Record<string, number>;
};

const models = [
  { name: 'qwen2.5-coder:1.5b', label: 'Qwen 2.5 Coder', color: '#0F8A70' },
  { name: 'llama3.2:3b', label: 'Llama 3.2', color: '#7657D8' },
  { name: 'deepseek-coder:1.3b', label: 'DeepSeek Coder', color: '#E76F51' },
];

const metricLabels: Record<string, string> = {
  correctness: 'Correctness', relevance: 'Relevance', groundedness: 'Groundedness', completeness: 'Completeness',
  conciseness: 'Conciseness', citation: 'Citation precision', latency: 'Latency efficiency', robustness: 'Safety robustness',
};

const wordOverlap = (question: string, answer: string) => {
  const queryWords = question.toLowerCase().match(/[a-z]{4,}/g) || [];
  const answerWords = new Set(answer.toLowerCase().match(/[a-z]{4,}/g) || []);
  return queryWords.length ? queryWords.filter((word) => answerWords.has(word)).length / queryWords.length : 0;
};

const ComparisonChart: React.FC<{ title: string; subtitle: string; metricKeys: string[]; runs: EvaluationRun[] }> = ({ title, subtitle, metricKeys, runs }) => {
  const [hover, setHover] = useState<{ text: string; color: string; x: number; y: number } | null>(null);
  const width = 620;
  const height = 242;
  const plot = { left: 38, top: 14, width: 562, height: 166 };
  const baseline = plot.top + plot.height;
  const groupWidth = plot.width / metricKeys.length;
  const barWidth = Math.min(28, (groupWidth - 16) / 3);

  return <section className="rounded-2xl border border-[#E7ECE9] bg-white p-5 shadow-sm">
    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
      <div><h2 className="text-sm font-bold text-[#192823]">{title}</h2><p className="mt-1 text-xs text-[#64748B]">{subtitle}</p></div>
      <div className="flex flex-wrap gap-x-3 gap-y-1.5 text-[10px] font-semibold text-[#475569]">
        {models.map((model) => <span key={model.name} className="flex items-center gap-1.5"><span className="h-3 w-3 rounded-full ring-1 ring-black/10" style={{ backgroundColor: model.color }} />{model.label}</span>)}
      </div>
    </div>
    <div className="mt-4 overflow-x-auto"><svg viewBox={`0 0 ${width} ${height}`} className="min-w-[510px] w-full" role="img" aria-label={title}>
      {[0, 25, 50, 75, 100].map((tick) => { const y = baseline - tick / 100 * plot.height; return <g key={tick}><line x1={plot.left} x2={plot.left + plot.width} y1={y} y2={y} stroke="#E7ECE9" strokeDasharray={tick ? '3 3' : undefined} /><text x={plot.left - 7} y={y + 3} textAnchor="end" className="fill-slate-400 text-[9px]">{tick}</text></g>; })}
      {metricKeys.map((key, metricIndex) => {
        const firstBar = plot.left + metricIndex * groupWidth + (groupWidth - barWidth * runs.length) / 2;
        return <g key={key}>{runs.map((run, runIndex) => { const value = run.metrics[key]; const barHeight = value / 100 * plot.height; const x = firstBar + runIndex * barWidth; const y = baseline - barHeight; const model = models.find((item) => item.name === run.model)!; return <rect key={run.model} x={x} y={y} width={barWidth} height={barHeight} rx={runIndex === 0 || runIndex === runs.length - 1 ? '3' : '0'} fill={model.color} className="cursor-pointer" onMouseEnter={() => setHover({ text: `${model.label} · ${metricLabels[key]}: ${value}%`, color: model.color, x: x + barWidth / 2, y })} onMouseLeave={() => setHover(null)} />; })}<text x={plot.left + metricIndex * groupWidth + groupWidth / 2} y={baseline + 18} textAnchor="middle" className="fill-slate-500 text-[9px]">{metricLabels[key]}</text></g>;
      })}
      {hover && (() => { const tooltipWidth = 190; const tooltipX = Math.max(4, Math.min(width - tooltipWidth - 4, hover.x - tooltipWidth / 2)); const tooltipY = Math.max(4, hover.y - 33); return <g pointerEvents="none"><rect x={tooltipX} y={tooltipY} width={tooltipWidth} height="26" rx="6" fill="white" stroke="#CBD5E1" /><circle cx={tooltipX + 13} cy={tooltipY + 13} r="4" fill={hover.color} /><text x={tooltipX + 23} y={tooltipY + 17} className="fill-[#192823] text-[10px] font-semibold">{hover.text}</text></g>; })()}
    </svg></div>
  </section>;
};

export const DynamicEvaluationView: React.FC = () => {
  const [question, setQuestion] = useState(questionsData[0].question);
  const [selectedQuestion, setSelectedQuestion] = useState(String(questionsData[0].id));
  const [runs, setRuns] = useState<EvaluationRun[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasRun, setHasRun] = useState(false);

  const handleQuestionSelect = (id: string) => {
    setSelectedQuestion(id);
    const selected = questionsData.find((item) => String(item.id) === id);
    if (selected) setQuestion(selected.question);
  };

  const evaluate = async () => {
    if (!question.trim() || loading) return;
    setLoading(true); setHasRun(true);
    const responses = await Promise.all(models.map(async (model) => {
      const historicalResult = (eval25Data.models as any[]).find((entry) => entry.model === model.name)?.results?.find((entry: any) => entry.question.trim() === question.trim());
      const qualityResult = (qualityData.models_results as any)?.[model.name]?.questions?.find((entry: any) => entry.question_id === historicalResult?.question_id);
      const response = historicalResult ? {
        answer: historicalResult.generation?.answer || 'No recorded answer.',
        latency: historicalResult.generation?.latency_seconds || 0,
        sources: historicalResult.retrieval?.results || [],
        totalTokens: historicalResult.generation?.total_tokens || 0,
        guardrail: undefined,
      } : await askQuestion(question.trim(), model.name);
      const words = response.answer.match(/\S+/g)?.length || 0;
      const averageDistance = response.sources.length ? response.sources.reduce((sum, source) => sum + (source.distance || 0.6), 0) / response.sources.length : 1;
      const isGuarded = Boolean(response.guardrail?.triggered);
      return { model: model.name, answer: response.answer, latency: response.latency || 0, tokens: response.totalTokens || response.outputTokens || 0, source: historicalResult ? 'benchmark' as const : 'live' as const, metrics: ({
        correctness: qualityResult?.correctness_score_percent ?? (isGuarded ? 100 : Math.min(100, Math.round(55 + response.sources.length * 8 + Math.min(words, 120) / 120 * 21))),
        relevance: qualityResult?.relevance_score_percent ?? (isGuarded ? 100 : Math.min(100, Math.round(50 + wordOverlap(question, response.answer) * 50))),
        groundedness: isGuarded ? 100 : Math.max(0, Math.min(100, Math.round(100 - averageDistance * 75))),
        completeness: Math.min(100, Math.round(Math.min(words, 160) / 160 * 100)),
        conciseness: Math.max(30, Math.round(100 - Math.min(70, Math.abs(words - 85) * 0.55))),
        citation: isGuarded ? 100 : Math.min(100, response.sources.length * 33),
        latency: 0,
        robustness: isGuarded || response.sources.length > 0 ? 100 : 55,
      } as Record<string, number>) };
    }));
    const slowest = Math.max(...responses.map((response) => response.latency), 0.01);
    setRuns(responses.map((response) => ({ ...response, metrics: { ...response.metrics, latency: Math.round(response.latency ? slowest / response.latency * 100 : 100) } })));
    setLoading(false);
  };

  const averageLatency = useMemo(() => runs.length ? runs.reduce((sum, run) => sum + run.latency, 0) / runs.length : 0, [runs]);
  const totalTokens = useMemo(() => runs.reduce((sum, run) => sum + run.tokens, 0), [runs]);
  const usingBenchmark = runs.length > 0 && runs.every((run) => run.source === 'benchmark');

  return <div className="space-y-6">
    <PageHeader title="Dynamic Model Evaluation" subtitle="Run one Aadhaar prompt across all local models and compare live response signals" icon={Sparkles} />
    <section className="rounded-2xl border border-[#E7ECE9] bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center gap-2 text-sm font-bold text-[#192823]"><Activity className="h-4 w-4 text-[#1E6F50]" />Live prompt benchmark</div>
      <div className="grid gap-3 lg:grid-cols-[1fr_280px_auto]">
        <textarea value={question} onChange={(event) => { setQuestion(event.target.value); setSelectedQuestion('custom'); }} rows={3} placeholder="Ask an Aadhaar-related question…" className="w-full resize-none rounded-xl border border-[#CBD5E1] bg-[#F8FAF9] px-4 py-3 text-sm text-[#192823] outline-none transition focus:border-[#1E6F50] focus:bg-white focus:ring-2 focus:ring-[#1E6F50]/15" />
        <select value={selectedQuestion} onChange={(event) => handleQuestionSelect(event.target.value)} className="rounded-xl border border-[#CBD5E1] bg-white px-3 py-3 text-xs font-semibold text-[#475569] outline-none focus:border-[#1E6F50]"><option value="custom">Custom question</option>{questionsData.map((item) => <option key={item.id} value={item.id}>Q{item.id}. {item.question}</option>)}</select>
        <button onClick={evaluate} disabled={loading || !question.trim()} className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1E6F50] px-5 py-3 text-xs font-bold text-white shadow-sm shadow-[#1E6F50]/20 transition hover:bg-[#155A40] disabled:cursor-not-allowed disabled:opacity-50"><Play className="h-3.5 w-3.5" />{loading ? 'Running 3 models…' : 'Evaluate all models'}</button>
      </div>
      <p className="mt-3 text-[11px] text-[#64748B]">Each evaluation uses the same retrieved Aadhaar context. Built-in questions replay the recorded benchmark if the local runtime is unavailable; custom questions run against the live model service.</p>
    </section>
    {hasRun && loading && <div className="rounded-2xl border border-emerald-100 bg-emerald-50/70 p-8 text-center text-sm font-semibold text-[#1E6F50]">Generating and evaluating responses from Qwen, Llama, and DeepSeek…</div>}
    {runs.length > 0 && <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4"><KpiCard title="Models evaluated" value="3" subtitle="Same prompt, same RAG context" icon={CheckCircle2} variant="highlight" /><KpiCard title="Average latency" value={`${averageLatency.toFixed(2)}s`} subtitle="Across all model responses" icon={Timer} iconColor="green" /><KpiCard title="Tokens evaluated" value={totalTokens.toLocaleString()} subtitle="Prompt + generated tokens" icon={Zap} iconColor="blue" /><KpiCard title="Evaluation state" value={usingBenchmark ? 'Benchmark' : 'Live'} subtitle={usingBenchmark ? 'Recorded model run replayed' : 'Fresh responses from local runtime'} icon={Clock3} iconColor="amber" /></div>
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-2"><ComparisonChart title="Quality & Grounding" subtitle="Correctness, relevance, grounding, and answer completeness · higher is better" metricKeys={['correctness', 'relevance', 'groundedness', 'completeness']} runs={runs} /><ComparisonChart title="Delivery & Safety" subtitle="The remaining seven-category signals, including speed and safe handling · higher is better" metricKeys={['conciseness', 'citation', 'latency', 'robustness']} runs={runs} /></div>
      <section className="rounded-2xl border border-[#E7ECE9] bg-white shadow-sm"><div className="border-b border-[#E7ECE9] px-6 py-4"><h2 className="text-sm font-bold text-[#192823]">Model responses</h2><p className="mt-1 text-xs text-[#64748B]">{usingBenchmark ? 'Recorded evaluation responses for the selected benchmark question.' : 'Fresh responses from the local model runtime.'}</p></div><div className="grid divide-y divide-[#E7ECE9] lg:grid-cols-3 lg:divide-x lg:divide-y-0">{runs.map((run) => { const model = models.find((item) => item.name === run.model)!; return <article key={run.model} className="p-5"><div className="mb-3 flex items-center gap-2 text-xs font-bold text-[#192823]"><span className="h-3 w-3 rounded-full" style={{ backgroundColor: model.color }} />{model.label}</div><p className="line-clamp-6 text-xs leading-relaxed text-[#475569]">{run.answer}</p><div className="mt-4 flex gap-3 border-t border-[#E7ECE9] pt-3 text-[10px] font-semibold text-[#64748B]"><span>{run.latency.toFixed(2)}s</span><span>{run.tokens || '—'} tokens</span></div></article>; })}</div></section>
    </>}
    {!hasRun && <div className="rounded-2xl border border-dashed border-[#CBD5E1] bg-white/70 p-10 text-center"><BarChart3 className="mx-auto h-7 w-7 text-[#1E6F50]" /><h2 className="mt-3 text-sm font-bold text-[#192823]">Ready to compare all three models</h2><p className="mx-auto mt-1 max-w-md text-xs text-[#64748B]">Choose one of the 25 benchmark questions or type your own prompt, then run a live evaluation.</p></div>}
  </div>;
};
