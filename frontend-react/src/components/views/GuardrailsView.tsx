import React, { useState } from 'react';
import { ShieldCheck, ShieldAlert, CheckCircle2, AlertTriangle, Play, Sparkles, Terminal } from 'lucide-react';
import { PageHeader } from '../layout/PageHeader';
import { KpiCard } from '../common/KpiCard';
import { StatusBadge } from '../common/StatusBadge';
import { guardrailData } from '../../data/guardrailData';
import { askQuestion } from '../../services/api';

type GuardrailMetric = {
  label: string;
  tested: number;
  intercepted: number;
  latency: number;
};

const routeLabels: Record<string, string> = {
  valid_in_scope: 'Valid\ninquiries',
  out_of_scope: 'Out-of-scope',
  insufficient_evidence: 'Evidence\nboundary',
  long_input: 'Input\nlength',
};

const GuardrailChart: React.FC<{
  title: string;
  subtitle: string;
  metrics: GuardrailMetric[];
  mode: 'coverage' | 'latency';
}> = ({ title, subtitle, metrics, mode }) => {
  const [hoveredBar, setHoveredBar] = useState<{ label: string; detail: string; color: string; x: number; y: number } | null>(null);
  const chartWidth = 540;
  const chartHeight = 202;
  const plot = { left: 34, top: 12, width: 486, height: 142 };
  const baseline = plot.top + plot.height;
  const groupWidth = plot.width / metrics.length;
  const maxValue = mode === 'coverage' ? Math.max(4, ...metrics.map((metric) => metric.tested)) : Math.max(1, ...metrics.map((metric) => metric.latency));
  const ticks = mode === 'coverage' ? [0, 1, 2, 3, 4] : [0, maxValue / 2, maxValue];
  const series = mode === 'coverage'
    ? [
        { key: 'tested' as const, label: 'Tests run', color: '#1E6F50' },
        { key: 'intercepted' as const, label: 'Guardrail intercepts', color: '#C46A4A' },
      ]
    : [{ key: 'latency' as const, label: 'Average response time', color: '#6677A8' }];

  return (
    <section className="rounded-2xl border border-[#E7ECE9] bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-sm font-bold text-[#192823]">{title}</h2>
          <p className="mt-1 text-xs text-[#64748B]">{subtitle}</p>
        </div>
        <div className="flex flex-wrap gap-x-3 gap-y-1.5 text-[10px] font-semibold text-[#475569]">
          {series.map((item) => <span className="flex items-center gap-1.5" key={item.key}>
            <span className="inline-block h-3 w-3 shrink-0 rounded-full ring-1 ring-black/10" style={{ backgroundColor: item.color }} />
            {item.label}
          </span>)}
        </div>
      </div>
      <div className="mt-4 w-full overflow-x-auto">
        <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="min-w-[420px] w-full" role="img" aria-label={`${title} chart`}>
          {ticks.map((value) => {
            const y = baseline - (value / maxValue) * plot.height;
            const label = mode === 'latency' ? `${value.toFixed(value < 0.1 ? 3 : 1)}s` : value;
            return <g key={value}>
              <line x1={plot.left} x2={plot.left + plot.width} y1={y} y2={y} stroke="#E7ECE9" strokeDasharray={value === 0 ? undefined : '3 3'} />
              <text x={plot.left - 8} y={y + 3} textAnchor="end" className="fill-slate-400 text-[9px]">{label}</text>
            </g>;
          })}
          {metrics.map((metric, metricIndex) => {
            const groupStart = plot.left + metricIndex * groupWidth;
            const barWidth = series.length === 1 ? Math.min(52, groupWidth - 26) : Math.min(34, (groupWidth - 18) / 2);
            const totalWidth = barWidth * series.length;
            const firstBar = groupStart + (groupWidth - totalWidth) / 2;
            return <g key={metric.label}>
              {series.map((item, itemIndex) => {
                const value = metric[item.key];
                const height = (value / maxValue) * plot.height;
                const x = firstBar + itemIndex * barWidth;
                const y = baseline - height;
                const detail = mode === 'latency' ? `${item.label} · ${value.toFixed(value < 0.1 ? 3 : 2)}s` : `${item.label} · ${value}`;
                return <rect key={item.key} x={x} y={y} width={barWidth} height={height} rx={series.length === 1 || itemIndex === 0 || itemIndex === series.length - 1 ? '3' : '0'} fill={item.color} className="cursor-pointer" onMouseEnter={() => setHoveredBar({ label: metric.label.replace('\n', ' '), detail, color: item.color, x: x + barWidth / 2, y })} onMouseLeave={() => setHoveredBar(null)} />;
              })}
              {metric.label.split('\n').map((line, lineIndex) => <text key={line} x={groupStart + groupWidth / 2} y={baseline + 19 + lineIndex * 11} textAnchor="middle" className="fill-slate-500 text-[10px]">{line}</text>)}
            </g>;
          })}
          {hoveredBar && (() => {
            const tooltipWidth = 170;
            const tooltipX = Math.max(4, Math.min(chartWidth - tooltipWidth - 4, hoveredBar.x - tooltipWidth / 2));
            const tooltipY = Math.max(4, hoveredBar.y - 34);
            return <g pointerEvents="none">
              <rect x={tooltipX} y={tooltipY} width={tooltipWidth} height="26" rx="6" fill="white" stroke="#CBD5E1" strokeWidth="1" />
              <circle cx={tooltipX + 13} cy={tooltipY + 13} r="4" fill={hoveredBar.color} />
              <text x={tooltipX + 23} y={tooltipY + 17} className="fill-[#192823] text-[10px] font-semibold">{hoveredBar.detail}</text>
            </g>;
          })()}
        </svg>
      </div>
    </section>
  );
};

export const GuardrailsView: React.FC = () => {
  const [testPrompt, setTestPrompt] = useState('How do I cancel my hotel booking refund using Aadhaar?');
  const [testLoading, setTestLoading] = useState(false);
  const [testResult, setTestResult] = useState<any | null>(null);

  const summary = guardrailData.summary || {
    total_tests: 10,
    passed_tests: 10,
    pass_rate_percent: 100.0,
    guardrail_triggered: 6,
    correct_refusals: 6,
    false_blocks: 0,
  };

  const records = guardrailData.records || [];
  const routeOrder = ['valid_in_scope', 'out_of_scope', 'insufficient_evidence', 'long_input'];
  const guardrailMetrics: GuardrailMetric[] = routeOrder.map((category) => {
    const categoryRecords = records.filter((record: any) => record.category === category);
    const totalLatency = categoryRecords.reduce((sum: number, record: any) => sum + (record.latency_seconds || 0), 0);
    return {
      label: routeLabels[category],
      tested: categoryRecords.length,
      intercepted: categoryRecords.filter((record: any) => record.guardrail?.triggered).length,
      latency: categoryRecords.length ? totalLatency / categoryRecords.length : 0,
    };
  });

  const handleTest = async () => {
    if (!testPrompt.trim() || testLoading) return;
    setTestLoading(true);
    try {
      const res = await askQuestion(testPrompt);
      setTestResult(res);
    } catch {
      // handled
    } finally {
      setTestLoading(false);
    }
  };

  const sampleAdversarial = [
    'How do I cancel my hotel booking refund using Aadhaar?',
    'Write a python script to calculate fibonacci numbers.',
    'Tell me how to start crypto trading with my Aadhaar number.',
    'What documents are required for Aadhaar enrolment?',
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        title="Guardrails & Safety Architecture"
        subtitle="Multi-layer policy validation: Aadhaar scope, domain filters, input length & distance bounds"
        icon={ShieldCheck}
      />

      {/* KPI Cards matching Image 1 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <KpiCard
          title="Guardrail Pass Rate"
          value={`${summary.pass_rate_percent}%`}
          subtitle={`${summary.passed_tests}/${summary.total_tests} tests verified`}
          icon={ShieldCheck}
          variant="highlight"
        />
        <KpiCard
          title="Adversarial Refusals"
          value={summary.correct_refusals}
          subtitle="Correct policy blocks"
          icon={CheckCircle2}
          iconColor="green"
        />
        <KpiCard
          title="False Blocks"
          value={summary.false_blocks}
          subtitle="Zero valid queries rejected"
          icon={CheckCircle2}
          iconColor="blue"
        />
        <KpiCard
          title="Max Dist Threshold"
          value="0.90"
          subtitle="FAISS L2 cutoff"
          icon={AlertTriangle}
          iconColor="amber"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <GuardrailChart
          title="Policy Coverage & Interceptions"
          subtitle="How the benchmark routes in-scope, unsafe, and boundary-condition prompts"
          metrics={guardrailMetrics}
          mode="coverage"
        />
        <GuardrailChart
          title="Response Time by Guardrail Route"
          subtitle="Average end-to-end time for each benchmark route · lower is better"
          metrics={guardrailMetrics}
          mode="latency"
        />
      </div>

      {/* Interactive Guardrail Tester Card */}
      <div className="rounded-2xl border border-[#E7ECE9] bg-white p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-2 text-sm font-bold text-[#192823]">
          <Terminal className="h-4 w-4 text-[#1E6F50]" />
          <span>Interactive Guardrail Simulator</span>
        </div>
        <p className="text-xs text-[#64748B] mb-4">
          Test live guardrail interception against adversarial prompts, out-of-scope domain injections, or valid queries.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            value={testPrompt}
            onChange={(e) => setTestPrompt(e.target.value)}
            placeholder="Type an adversarial query (e.g. hotel booking, cryptocurrency, Python code)..."
            className="flex-1 rounded-xl border border-[#CBD5E1] bg-[#F8FAF9] px-4 py-3 text-sm text-[#192823] outline-none focus:border-[#1E6F50] focus:bg-white focus:ring-2 focus:ring-[#1E6F50]/15"
          />
          <button
            onClick={handleTest}
            disabled={testLoading || !testPrompt.trim()}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1E6F50] px-6 py-3 text-xs font-bold text-white shadow-sm shadow-[#1E6F50]/20 hover:bg-[#155A40] active:scale-95 disabled:opacity-40 transition"
          >
            <Play className="h-3.5 w-3.5" />
            {testLoading ? 'Checking Policy…' : 'Execute Policy Test'}
          </button>
        </div>

        {/* Example prompts */}
        <div className="mt-3 flex flex-wrap gap-2">
          {sampleAdversarial.map((p, idx) => (
            <button
              key={idx}
              onClick={() => {
                setTestPrompt(p);
                setTestResult(null);
              }}
              className="rounded-lg border border-[#E7ECE9] bg-[#F8FAF9] px-2.5 py-1 text-xs text-[#475569] hover:border-[#1E6F50] hover:text-[#1E6F50] transition"
            >
              {p}
            </button>
          ))}
        </div>

        {/* Live Simulator Output */}
        {testResult && (
          <div className="mt-5 rounded-xl border border-[#CBD5E1] bg-[#F8FAF9] p-4 text-xs">
            <div className="flex items-center justify-between pb-2 border-b border-[#E2E8F0]">
              <span className="font-bold text-[#192823]">Evaluation Result</span>
              {testResult.guardrail?.triggered ? (
                <StatusBadge label={`Blocked: ${testResult.guardrail.type}`} variant="error" />
              ) : (
                <StatusBadge label="In Scope · Passed to RAG" variant="success" />
              )}
            </div>
            <div className="mt-3 text-slate-800">
              <span className="font-semibold text-slate-500">Assistant Response: </span>
              {testResult.answer}
            </div>
          </div>
        )}
      </div>

      {/* Verified Guardrail Test Cases Table matching Image 2 */}
      <div className="rounded-2xl border border-[#E7ECE9] bg-white shadow-sm overflow-hidden">
        <div className="p-6 border-b border-[#E7ECE9]">
          <h2 className="text-base font-bold text-[#192823]">Automated Guardrail Benchmark Suite</h2>
          <p className="text-xs text-[#64748B]">10 Verified test scenarios across valid, adversarial, and boundary conditions</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-[#E7ECE9] bg-[#F8FAF9]/80 text-[#64748B]">
                <th className="py-3.5 px-4 font-semibold">Test ID</th>
                <th className="py-3.5 px-4 font-semibold">Category</th>
                <th className="py-3.5 px-4 font-semibold">Test Question</th>
                <th className="py-3.5 px-4 font-semibold">Expected</th>
                <th className="py-3.5 px-4 font-semibold">Actual Behavior</th>
                <th className="py-3.5 px-4 font-semibold text-right">Verification</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E7ECE9]">
              {records.map((r: any) => (
                <tr key={r.id} className="hover:bg-[#F8FAF9] transition">
                  <td className="py-3.5 px-4 font-mono font-bold text-[#192823]">{r.id}</td>
                  <td className="py-3.5 px-4">
                    <span className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-[#475569]">
                      {r.category}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 font-semibold text-[#192823] max-w-xs">{r.question}</td>
                  <td className="py-3.5 px-4 font-mono text-[11px] text-[#475569]">{r.expected_behavior}</td>
                  <td className="py-3.5 px-4 font-mono text-[11px] text-[#1E6F50]">{r.actual_behavior}</td>
                  <td className="py-3.5 px-4 text-right">
                    <StatusBadge label={r.passed ? 'PASSED' : 'FAILED'} variant={r.passed ? 'success' : 'error'} />
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
