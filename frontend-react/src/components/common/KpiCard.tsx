import React from 'react';
import { LucideIcon } from 'lucide-react';

interface KpiCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: LucideIcon;
  variant?: 'highlight' | 'default';
  iconColor?: 'green' | 'blue' | 'amber' | 'red';
}

export const KpiCard: React.FC<KpiCardProps> = ({
  title,
  value,
  subtitle,
  icon: Icon,
  variant = 'default',
  iconColor = 'green',
}) => {
  if (variant === 'highlight') {
    return (
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1E6F50] to-[#16583E] p-6 text-white shadow-md shadow-[#1E6F50]/15 transition-all hover:shadow-lg">
        {Icon && (
          <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 backdrop-blur-sm">
            <Icon className="h-5 w-5 text-white" />
          </div>
        )}
        <div className="text-xs font-semibold uppercase tracking-wider text-emerald-100/80">
          {title}
        </div>
        <div className="mt-1 text-3xl font-extrabold tracking-tight text-white">
          {value}
        </div>
        {subtitle && (
          <div className="mt-2 text-xs text-emerald-100/70">
            {subtitle}
          </div>
        )}
      </div>
    );
  }

  const iconColors = {
    green: 'text-[#1E6F50] bg-emerald-50 border-emerald-100',
    blue: 'text-blue-600 bg-blue-50 border-blue-100',
    amber: 'text-amber-600 bg-amber-50 border-amber-100',
    red: 'text-red-500 bg-red-50 border-red-100',
  };

  return (
    <div className="group relative rounded-2xl border border-[#E7ECE9] bg-white p-6 shadow-sm transition-all duration-200 hover:border-[#CBD5E1] hover:shadow-md">
      {Icon && (
        <div className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border ${iconColors[iconColor]}`}>
          <Icon className="h-5 w-5" />
        </div>
      )}
      <div className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">
        {title}
      </div>
      <div className="mt-1 text-3xl font-extrabold tracking-tight text-[#192823]">
        {value}
      </div>
      {subtitle && (
        <div className="mt-2 text-xs text-[#94A3B8]">
          {subtitle}
        </div>
      )}
    </div>
  );
};
