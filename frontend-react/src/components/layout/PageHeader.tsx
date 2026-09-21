import React from 'react';
import { LucideIcon, Star } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  starred?: boolean;
  onToggleStar?: () => void;
  children?: React.ReactNode;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  icon: Icon,
  starred = false,
  onToggleStar,
  children,
}) => {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6">
      <div className="flex items-center gap-4">
        {/* Dark rounded icon badge matching Image 1 & 2 */}
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#192823] to-[#2C3E37] text-white shadow-md">
          <Icon className="h-7 w-7 text-emerald-400" />
        </div>
        <div>
          <div className="flex items-center gap-2.5">
            <h1 className="text-2xl font-extrabold tracking-tight text-[#192823]">
              {title}
            </h1>
            <button
              onClick={onToggleStar}
              className="text-slate-400 hover:text-amber-400 transition-colors"
              title="Add to favorites"
            >
              <Star className={`h-4 w-4 ${starred ? 'fill-amber-400 text-amber-400' : ''}`} />
            </button>
          </div>
          <p className="mt-0.5 text-xs font-medium text-[#64748B]">
            {subtitle}
          </p>
        </div>
      </div>

      {children && (
        <div className="flex items-center gap-3">
          {children}
        </div>
      )}
    </div>
  );
};
