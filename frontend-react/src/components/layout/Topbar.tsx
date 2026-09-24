import React from 'react';
import { Home, ChevronRight, Plus, MoreHorizontal } from 'lucide-react';
import { ViewId } from '../../types';

interface TopbarProps {
  activeView: ViewId;
  onSelectView: (view: ViewId) => void;
  onPrimaryAction?: () => void;
  primaryActionLabel?: string;
}

export const Topbar: React.FC<TopbarProps> = ({
  activeView,
  onSelectView,
  onPrimaryAction,
  primaryActionLabel = '+ Add New Query',
}) => {
  const getBreadcrumbs = (view: ViewId): { section: string; title: string } => {
    switch (view) {
      case 'assistant':
        return { section: 'Assistant & RAG', title: 'Assistant Chat' };
      case 'rag-vs-no-rag':
        return { section: 'Assistant & RAG', title: 'RAG vs No-RAG' };
      case 'knowledge-base':
        return { section: 'Assistant & RAG', title: 'Knowledge Base' };
      case 'eval-25':
        return { section: 'Evaluation Lab', title: '25-Question Evaluation' };
      case 'eval-dynamic':
        return { section: 'Evaluation Lab', title: 'Dynamic Evaluation' };
      case 'eval-7cat':
        return { section: 'Evaluation Lab', title: 'Seven-Category Evaluation' };
      case 'eval-rag':
        return { section: 'Evaluation Lab', title: 'RAG Analysis' };
      case 'eval-guardrails':
        return { section: 'Evaluation Lab', title: 'Guardrails & Safety' };
      case 'eval-ai-output':
        return { section: 'Evaluation Lab', title: 'AI Output Testing' };
      case 'models':
        return { section: 'System & Ops', title: 'Models / LLM' };
      case 'architecture':
        return { section: 'System & Ops', title: 'System Architecture' };
      case 'codebase':
        return { section: 'System & Ops', title: 'Codebase & Pipeline' };
      case 'system-status':
        return { section: 'System & Ops', title: 'System Status' };
      default:
        return { section: 'Dashboard', title: 'Overview' };
    }
  };

  const { section, title } = getBreadcrumbs(activeView);

  return (
    <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-[#E7ECE9] bg-white/90 px-8 backdrop-blur-md">
      {/* Breadcrumbs matching Image 1 */}
      <nav className="flex items-center gap-2 text-xs font-semibold text-[#64748B]">
        <button 
          onClick={() => onSelectView('assistant')}
          className="flex items-center text-slate-400 hover:text-[#1E6F50] transition-colors"
        >
          <Home className="h-4 w-4" />
        </button>
        <ChevronRight className="h-3.5 w-3.5 text-slate-300" />
        <span className="text-[#64748B]">{section}</span>
        <ChevronRight className="h-3.5 w-3.5 text-slate-300" />
        <span className="font-bold text-[#192823]">{title}</span>
      </nav>

      {/* Top right actions matching Image 1 & 2 */}
      <div className="flex items-center gap-3">
        <button
          onClick={onPrimaryAction}
          className="inline-flex items-center gap-2 rounded-xl bg-[#1E6F50] px-4 py-2 text-xs font-bold text-white shadow-sm shadow-[#1E6F50]/20 transition-all hover:bg-[#155A40] active:scale-95"
        >
          <Plus className="h-3.5 w-3.5" />
          {primaryActionLabel}
        </button>

        <button 
          className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#E7ECE9] bg-white text-slate-500 shadow-sm transition hover:bg-slate-50 hover:text-slate-700"
          title="More actions"
        >
          <MoreHorizontal className="h-4 w-4" />
        </button>
      </div>
    </header>
  );
};
