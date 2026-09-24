import React, { useState } from 'react';
import { ViewId } from './types';
import { Sidebar } from './components/layout/Sidebar';
import { Topbar } from './components/layout/Topbar';

// View components
import { AssistantView } from './components/views/AssistantView';
import { RagVsNoRagView } from './components/views/RagVsNoRagView';
import { KnowledgeBaseView } from './components/views/KnowledgeBaseView';
import { ModelsView } from './components/views/ModelsView';
import { ArchitectureView } from './components/views/ArchitectureView';
import { Evaluation25View } from './components/views/Evaluation25View';
import { DynamicEvaluationView } from './components/views/DynamicEvaluationView';
import { SevenCategoryView } from './components/views/SevenCategoryView';
import { RagAnalysisView } from './components/views/RagAnalysisView';
import { GuardrailsView } from './components/views/GuardrailsView';
import { AiOutputTestingView } from './components/views/AiOutputTestingView';
import { CodebaseView } from './components/views/CodebaseView';
import { SystemStatusView } from './components/views/SystemStatusView';

export const App: React.FC = () => {
  const [activeView, setActiveView] = useState<ViewId>('eval-25');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const renderActiveView = () => {
    switch (activeView) {
      case 'assistant':
        return <AssistantView />;
      case 'rag-vs-no-rag':
        return <RagVsNoRagView />;
      case 'knowledge-base':
        return <KnowledgeBaseView />;
      case 'models':
        return <ModelsView />;
      case 'architecture':
        return <ArchitectureView />;
      case 'eval-25':
        return <Evaluation25View />;
      case 'eval-dynamic':
        return <DynamicEvaluationView />;
      case 'eval-7cat':
        return <SevenCategoryView />;
      case 'eval-rag':
        return <RagAnalysisView />;
      case 'eval-guardrails':
        return <GuardrailsView />;
      case 'eval-ai-output':
        return <AiOutputTestingView />;
      case 'codebase':
        return <CodebaseView />;
      case 'system-status':
        return <SystemStatusView />;
      default:
        return <Evaluation25View />;
    }
  };

  return (
    <div className="flex min-h-screen bg-ambient-glow font-sans">
      {/* Sidebar Navigation */}
      <Sidebar
        activeView={activeView}
        onSelectView={setActiveView}
        collapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
      />

      {/* Main Content Area */}
      <div className="flex flex-1 flex-col min-w-0">
        <Topbar
          activeView={activeView}
          onSelectView={setActiveView}
          onPrimaryAction={() => setActiveView('assistant')}
          primaryActionLabel="+ New Query"
        />

        <main className="flex-1 p-6 md:p-8 max-w-7xl w-full mx-auto">
          {renderActiveView()}
        </main>
      </div>
    </div>
  );
};

export default App;
