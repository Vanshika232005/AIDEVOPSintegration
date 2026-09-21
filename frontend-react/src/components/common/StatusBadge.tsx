import React from 'react';

export type BadgeVariant = 'success' | 'warning' | 'info' | 'error' | 'neutral';

interface StatusBadgeProps {
  label: string;
  variant?: BadgeVariant;
  withDot?: boolean;
  className?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  label,
  variant = 'success',
  withDot = true,
  className = '',
}) => {
  const styles: Record<BadgeVariant, { bg: string; text: string; dot: string; border: string }> = {
    success: {
      bg: 'bg-[#EAF7EE]',
      text: 'text-[#1E6F50]',
      dot: 'bg-[#22C55E]',
      border: 'border-[#BFE7CB]',
    },
    warning: {
      bg: 'bg-[#FEF6E9]',
      text: 'text-[#B45309]',
      dot: 'bg-[#F59E0B]',
      border: 'border-[#FBD89D]',
    },
    info: {
      bg: 'bg-[#EEF6FD]',
      text: 'text-[#1D4ED8]',
      dot: 'bg-[#3B82F6]',
      border: 'border-[#BFDBFE]',
    },
    error: {
      bg: 'bg-[#FDEEEE]',
      text: 'text-[#DC2626]',
      dot: 'bg-[#EF4444]',
      border: 'border-[#FECACA]',
    },
    neutral: {
      bg: 'bg-[#F1F5F9]',
      text: 'text-[#475569]',
      dot: 'bg-[#94A3B8]',
      border: 'border-[#E2E8F0]',
    },
  };

  const style = styles[variant] || styles.neutral;

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold tracking-wide transition-all ${style.bg} ${style.text} ${style.border} ${className}`}
    >
      {withDot && <span className={`h-1.5 w-1.5 rounded-full ${style.dot}`} />}
      {label}
    </span>
  );
};
