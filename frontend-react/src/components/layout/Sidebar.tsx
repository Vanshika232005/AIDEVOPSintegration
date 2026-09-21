import React from 'react';
import { 
  MessageSquare, 
  GitCompare, 
  BookOpen, 
  FileCheck, 
  BarChart3, 
  Search, 
  ShieldCheck, 
  FlaskConical, 
  Cpu, 
  Layers, 
  Code2, 
  Activity, 
  Bell, 
  HelpCircle, 
  ChevronDown,
  Sparkles,
  PanelLeftClose
} from 'lucide-react';
import { ViewId } from '../../types';

interface SidebarProps {
  activeView: ViewId;
  onSelectView: (view: ViewId) => void;
  collapsed?: boolean;
  onToggleCollapse?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeView,
  onSelectView,
  collapsed = false,
  onToggleCollapse,
}) => {
  const sections = [
    {
      title: 'ASSISTANT & RAG',
      items: [
        { id: 'assistant' as ViewId, label: 'Assistant', icon: MessageSquare },
        { id: 'rag-vs-no-rag' as ViewId, label: 'RAG vs No-RAG', icon: GitCompare },
        { id: 'knowledge-base' as ViewId, label: 'Knowledge Base', icon: BookOpen },
      ]
    },
    {
      title: 'EVALUATION LAB',
      items: [
        { id: 'eval-25' as ViewId, label: '25-Question Eval', icon: FileCheck },
        { id: 'eval-7cat' as ViewId, label: '7-Category Eval', icon: BarChart3 },
        { id: 'eval-rag' as ViewId, label: 'RAG Analysis', icon: Search },
        { id: 'eval-guardrails' as ViewId, label: 'Guardrails', icon: ShieldCheck },
        { id: 'eval-ai-output' as ViewId, label: 'AI Output Testing', icon: FlaskConical },
      ]
    },
    {
      title: 'SYSTEM & OPS',
      items: [
        { id: 'models' as ViewId, label: 'Models / LLM', icon: Cpu },
        { id: 'architecture' as ViewId, label: 'Architecture', icon: Layers },
        { id: 'codebase' as ViewId, label: 'Codebase', icon: Code2 },
        { id: 'system-status' as ViewId, label: 'System Status', icon: Activity },
      ]
    }
  ];

  return (
    <aside className={`sticky top-0 flex h-screen flex-col border-r border-[#E7ECE9] bg-white text-[#192823] transition-all duration-300 select-none ${collapsed ? 'w-20' : 'w-64'}`}>
      {/* Brand Header */}
      <div className="flex h-16 items-center justify-between px-5 border-b border-[#E7ECE9]">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#1E6F50] to-[#144E37] text-white shadow-sm">
            <Sparkles className="h-5 w-5 text-emerald-200" />
          </div>
          {!collapsed && (
            <div className="flex items-center gap-1.5">
              <span className="text-base font-extrabold tracking-tight text-[#192823]">Aadhaar AI</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#1E6F50] bg-emerald-50 px-1.5 py-0.5 rounded-md border border-emerald-200/60">2.0</span>
            </div>
          )}
        </div>
        {onToggleCollapse && (
          <button 
            onClick={onToggleCollapse} 
            className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
            title="Toggle Sidebar"
          >
            <PanelLeftClose className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Organization / Workspace Switcher Card */}
      {!collapsed && (
        <div className="p-3">
          <div className="flex items-center justify-between rounded-xl border border-[#E7ECE9] bg-[#F8FAF9] p-2.5 transition hover:border-[#CBD5E1]">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#1E6F50] font-bold text-white text-xs">
                A
              </div>
              <div className="min-w-0 truncate">
                <div className="truncate text-xs font-bold text-[#192823]">Aadhaar AI Console</div>
                <div className="text-[11px] text-[#64748B]">UIDAI Handbook RAG</div>
              </div>
            </div>
            <ChevronDown className="h-4 w-4 text-slate-400 shrink-0" />
          </div>
        </div>
      )}

      {/* Navigation Sections */}
      <div className="flex-1 overflow-y-auto px-3 py-2 space-y-5">
        {sections.map((section) => (
          <div key={section.title}>
            {!collapsed && (
              <div className="px-2 pb-1.5 text-[10px] font-bold tracking-wider text-[#94A3B8] uppercase">
                {section.title}
              </div>
            )}
            <div className="space-y-0.5">
              {section.items.map((item) => {
                const Icon = item.icon;
                const isActive = activeView === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => onSelectView(item.id)}
                    className={`group flex w-full items-center gap-3 rounded-xl px-3 py-2 text-xs font-semibold transition-all ${
                      isActive
                        ? 'bg-[#1E6F50] text-white shadow-sm shadow-[#1E6F50]/20'
                        : 'text-[#475569] hover:bg-[#F1F5F3] hover:text-[#192823]'
                    }`}
                    title={collapsed ? item.label : undefined}
                  >
                    <Icon className={`h-4 w-4 shrink-0 transition-colors ${
                      isActive ? 'text-white' : 'text-[#64748B] group-hover:text-[#1E6F50]'
                    }`} />
                    {!collapsed && <span className="truncate">{item.label}</span>}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Footer / Status / Profile */}
      <div className="border-t border-[#E7ECE9] p-3 space-y-1">
        <button 
          onClick={() => onSelectView('system-status')}
          className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-xs font-semibold text-[#475569] hover:bg-[#F1F5F3] transition"
        >
          <div className="flex items-center gap-2.5">
            <Bell className="h-4 w-4 text-slate-400" />
            {!collapsed && <span>Notifications</span>}
          </div>
          
        </button>

        <a 
          href="https://uidai.gov.in" 
          target="_blank" 
          rel="noreferrer"
          className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-semibold text-[#475569] hover:bg-[#F1F5F3] transition"
        >
          <HelpCircle className="h-4 w-4 text-slate-400" />
          {!collapsed && <span>Support & Docs</span>}
        </a>

        {/* User Card */}
        {!collapsed && (
          <div className="mt-2 flex items-center gap-3 rounded-xl bg-[#F8FAF9] p-2 border border-[#E7ECE9]">
            <div className="h-8 w-8 shrink-0 overflow-hidden rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold text-xs">
              HS
            </div>
            <div className="min-w-0 truncate">
              <div className="truncate text-xs font-bold text-[#192823]">Harsh Soni</div>
              <div className="text-[10px] text-[#64748B]">User</div>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};
