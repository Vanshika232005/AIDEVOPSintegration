import React, { useState } from 'react';
import { BarChart3, CheckCircle2, Award, Zap, Shield, Clock } from 'lucide-react';
import { PageHeader } from '../layout/PageHeader';
import { KpiCard } from '../common/KpiCard';

type ModelScores = { label: string; qwen: number; llama: number; deepseek: number };

const modelSeries = [
  { key: 'qwen' as const, label: 'Qwen 2.5 Coder', color: '#1E6F50' },
  { key: 'llama' as const, label: 'Llama 3.2', color: '#2563EB' },
  { key: 'deepseek' as const, label: 'DeepSeek Coder', color: '#F59E0B' },
];

const qualityMetrics: ModelScores[] = [
  { label: 'Factual\naccuracy', qwen: 88, llama: 91, deepseek: 78 },
  { label: 'Groundedness', qwen: 95, llama: 92, deepseek: 84 },
  { label: 'Answer\ncompleteness', qwen: 84, llama: 88, deepseek: 76 },
  { label: 'Citation\nprecision', qwen: 92, llama: 87, deepseek: 81 },
];

const operationalMetrics: ModelScores[] = [
  { label: 'Conciseness', qwen: 96, llama: 89, deepseek: 90 },
  { label: 'Latency &\nefficiency', qwen: 94, llama: 76, deepseek: 92 },
  { label: 'Out-of-scope\nrobustness', qwen: 100, llama: 94, deepseek: 88 },
];

const ComparisonChart: React.FC<{ title: string; subtitle: string; metrics: ModelScores[] }> = ({ title, subtitle, metrics }) => {
  const [hoveredBar, setHoveredBar] = useState<{ model: string; value: number; color: string; x: number; y: number } | null>(null);
  const chartHeight = 202;
  const chartWidth = 540;
  const plot = { left: 34, top: 12, width: 486, height: 142 };
  const baseline = plot.top + plot.height;
  const groupWidth = plot.width / metrics.length;
  const barWidth = Math.min(34, (groupWidth - 18) / 3);

  return (
    <section className="rounded-2xl border border-[#E7ECE9] bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-sm font-bold text-[#192823]">{title}</h2>
          <p className="mt-1 text-xs text-[#64748B]">{subtitle}</p>
        </div>
        <div className="flex flex-wrap gap-x-3 gap-y-1.5 text-[10px] font-semibold text-[#475569]">
          {modelSeries.map((model) => (
            <span className="flex items-center gap-1.5" key={model.key}>
              <span className="inline-block h-3 w-3 shrink-0 rounded-full ring-1 ring-black/10" style={{ backgroundColor: model.color }} aria-hidden="true" />
              {model.label}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4 w-full overflow-x-auto">
        <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="min-w-[420px] w-full" role="img" aria-label={`${title} comparison chart`}>
          {[0, 25, 50, 75, 100].map((value) => {
            const y = baseline - (value / 100) * plot.height;
            return <g key={value}>
              <line x1={plot.left} x2={plot.left + plot.width} y1={y} y2={y} stroke="#E7ECE9" strokeDasharray={value === 0 ? undefined : '3 3'} />
              <text x={plot.left - 8} y={y + 3} textAnchor="end" className="fill-slate-400 text-[9px]">{value}</text>
            </g>;
          })}
          {metrics.map((metric, metricIndex) => {
            const groupStart = plot.left + metricIndex * groupWidth;
            const barsTotalWidth = modelSeries.length * barWidth;
            const firstBar = groupStart + (groupWidth - barsTotalWidth) / 2;
            return <g key={metric.label}>
              {modelSeries.map((model, modelIndex) => {
                const value = metric[model.key];
                const height = (value / 100) * plot.height;
                const x = firstBar + modelIndex * barWidth;
                const y = baseline - height;
                return <g key={model.key}>
                  <rect
                    x={x}
                    y={y}
                    width={barWidth}
                    height={height}
                    rx={modelIndex === 0 || modelIndex === modelSeries.length - 1 ? '3' : '0'}
                    fill={model.color}
                    className="cursor-pointer"
                    onMouseEnter={() => setHoveredBar({ model: model.label, value, color: model.color, x: x + barWidth / 2, y })}
                    onMouseLeave={() => setHoveredBar(null)}
                  />
                </g>;
              })}
              {metric.label.split('\n').map((line, lineIndex) => (
                <text key={line} x={groupStart + groupWidth / 2} y={baseline + 19 + lineIndex * 11} textAnchor="middle" className="fill-slate-500 text-[10px]">{line}</text>
              ))}
            </g>;
          })}
          {hoveredBar && (() => {
            const tooltipWidth = 152;
            const tooltipX = Math.max(4, Math.min(chartWidth - tooltipWidth - 4, hoveredBar.x - tooltipWidth / 2));
            const tooltipY = Math.max(4, hoveredBar.y - 34);
            return <g pointerEvents="none">
              <rect x={tooltipX} y={tooltipY} width={tooltipWidth} height="26" rx="6" fill="white" stroke="#CBD5E1" strokeWidth="1" />
              <circle cx={tooltipX + 13} cy={tooltipY + 13} r="4" fill={hoveredBar.color} />
              <text x={tooltipX + 23} y={tooltipY + 17} className="fill-[#192823] text-[10px] font-semibold">
                {`${hoveredBar.model} · ${hoveredBar.value}%`}
              </text>
            </g>;
          })()}
        </svg>
      </div>
    </section>
  );
};

export const SevenCategoryView: React.FC = () => (
  <div className="space-y-6">
    <PageHeader title="Seven-Category Quantitative Evaluation" subtitle="Cross-model benchmark matrix across seven fundamental evaluation pillars" icon={BarChart3} />

    <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
      <KpiCard title="Overall Leader" value="Qwen 2.5 Coder" subtitle="Highest composite grounding" icon={Award} variant="highlight" />
      <KpiCard title="Avg Groundedness" value="90.3%" subtitle="Across all three models" icon={Shield} iconColor="green" />
      <KpiCard title="Refusal Robustness" value="94.0%" subtitle="Correct out-of-scope blocks" icon={CheckCircle2} iconColor="blue" />
      <KpiCard title="Fastest Inference" value="1.35s" subtitle="DeepSeek Coder 1.3B" icon={Zap} iconColor="amber" />
    </div>

    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <ComparisonChart title="Answer Quality" subtitle="Accuracy, groundedness, completeness, and citation performance · higher is better" metrics={qualityMetrics} />
      <ComparisonChart title="Operational & Safety Performance" subtitle="Response quality under operational constraints and out-of-scope prompts · higher is better" metrics={operationalMetrics} />
    </div>

    <div className="flex items-center gap-2 rounded-xl border border-emerald-100 bg-emerald-50/60 px-4 py-3 text-xs text-[#426057]">
      <Clock className="h-4 w-4 shrink-0 text-[#1E6F50]" />
      Scores are normalized to a 0–100 benchmark scale; latency & efficiency combines generation speed and time-to-first-token.
    </div>
  </div>
);
