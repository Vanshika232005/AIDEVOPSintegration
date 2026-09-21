import React from 'react';
import { BarChart3, CheckCircle2, Award, Zap, Shield, BookOpen, Clock, Target } from 'lucide-react';
import { PageHeader } from '../layout/PageHeader';
import { KpiCard } from '../common/KpiCard';
import { StatusBadge } from '../common/StatusBadge';

export const SevenCategoryView: React.FC = () => {
  const categories = [
    {
      id: 'cat-1',
      name: '1. Factual Accuracy',
      icon: Target,
      qwen: 88,
      llama: 91,
      deepseek: 78,
      desc: 'Precision of technical details, fees, form numbers, and operational thresholds against UIDAI regulations.',
    },
    {
      id: 'cat-2',
      name: '2. Groundedness / Faithfulness',
      icon: Shield,
      qwen: 95,
      llama: 92,
      deepseek: 84,
      desc: 'Adherence to retrieved Handbook context without introducing outside unverified claims.',
    },
    {
      id: 'cat-3',
      name: '3. Answer Completeness',
      icon: CheckCircle2,
      qwen: 84,
      llama: 88,
      deepseek: 76,
      desc: 'Addressing all prerequisite clauses, documentation requirements, and fallback options.',
    },
    {
      id: 'cat-4',
      name: '4. Conciseness & Formatting',
      icon: Zap,
      qwen: 96,
      llama: 89,
      deepseek: 90,
      desc: 'Direct bullet-point formatting without repetitive preamble or model self-references.',
    },
    {
      id: 'cat-5',
      name: '5. Citation Precision',
      icon: BookOpen,
      qwen: 92,
      llama: 87,
      deepseek: 81,
      desc: 'Accurate page mapping and verified reference to Handbook sections.',
    },
    {
      id: 'cat-6',
      name: '6. Latency & Efficiency',
      icon: Clock,
      qwen: 94,
      llama: 76,
      deepseek: 92,
      desc: 'Generation speed (tokens/sec) and time-to-first-token in local hardware execution.',
    },
    {
      id: 'cat-7',
      name: '7. Out-of-Scope Robustness',
      icon: Award,
      qwen: 100,
      llama: 94,
      deepseek: 88,
      desc: 'Reliable refusal when prompts fall outside Handbook coverage (anti-hallucination).',
    },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        title="Seven-Category Quantitative Evaluation"
        subtitle="Cross-model benchmark matrix across seven fundamental evaluation pillars"
        icon={BarChart3}
      />

      {/* KPI Overview Cards matching Image 1 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <KpiCard
          title="Overall Leader"
          value="Qwen 2.5 Coder"
          subtitle="Highest composite grounding"
          icon={Award}
          variant="highlight"
        />
        <KpiCard
          title="Avg Groundedness"
          value="90.3%"
          subtitle="Across all three models"
          icon={Shield}
          iconColor="green"
        />
        <KpiCard
          title="Refusal Robustness"
          value="94.0%"
          subtitle="Correct out-of-scope blocks"
          icon={CheckCircle2}
          iconColor="blue"
        />
        <KpiCard
          title="Fastest Inference"
          value="1.35s"
          subtitle="DeepSeek Coder 1.3B"
          icon={Zap}
          iconColor="amber"
        />
      </div>

      {/* Seven Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <div
              key={cat.id}
              className="rounded-2xl border border-[#E7ECE9] bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-center justify-between pb-3 border-b border-[#E7ECE9]">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-[#1E6F50]">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="text-sm font-bold text-[#192823]">{cat.name}</h3>
                </div>
                <StatusBadge label="Benchmarked" variant="success" />
              </div>

              <p className="mt-3 text-xs leading-relaxed text-[#64748B]">
                {cat.desc}
              </p>

              {/* Progress Bars for each model */}
              <div className="mt-4 space-y-2.5">
                <div>
                  <div className="flex justify-between text-[11px] font-semibold text-[#192823] mb-1">
                    <span>qwen2.5-coder:1.5b</span>
                    <span className="font-bold text-[#1E6F50]">{cat.qwen}%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
                    <div 
                      className="h-full bg-[#1E6F50] rounded-full transition-all duration-500" 
                      style={{ width: `${cat.qwen}%` }} 
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] font-semibold text-[#192823] mb-1">
                    <span>llama3.2:3b</span>
                    <span className="font-bold text-blue-600">{cat.llama}%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
                    <div 
                      className="h-full bg-blue-600 rounded-full transition-all duration-500" 
                      style={{ width: `${cat.llama}%` }} 
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] font-semibold text-[#192823] mb-1">
                    <span>deepseek-coder:1.3b</span>
                    <span className="font-bold text-amber-600">{cat.deepseek}%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
                    <div 
                      className="h-full bg-amber-500 rounded-full transition-all duration-500" 
                      style={{ width: `${cat.deepseek}%` }} 
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
