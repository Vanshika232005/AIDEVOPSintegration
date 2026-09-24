export type ViewId = 
  | 'assistant'
  | 'rag-vs-no-rag'
  | 'knowledge-base'
  | 'models'
  | 'architecture'
  | 'eval-25'
  | 'eval-dynamic'
  | 'eval-7cat'
  | 'eval-rag'
  | 'eval-guardrails'
  | 'eval-ai-output'
  | 'codebase'
  | 'system-status';

export interface QuestionItem {
  id: number | string;
  question: string;
}

export interface SourceCitation {
  source: string;
  page: number | string;
  distance?: number;
  chunk?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  sources?: SourceCitation[];
  guardrail?: {
    triggered: boolean;
    type: string;
  };
  latency?: number;
  timestamp: string;
}

export interface ChunkItem {
  id?: string | number;
  source: string;
  page: number;
  chunk: string;
}

export interface ModelMetricSummary {
  name: string;
  correctness: number;
  relevance: number;
  passRate: number;
  latency?: number;
  color: string;
  icon: string;
}

export interface GuardrailRecord {
  id: string;
  category: string;
  question: string;
  expected_behavior: string;
  actual_behavior: string;
  passed: boolean;
  latency_seconds?: number;
  guardrail?: {
    triggered?: boolean;
    type?: string;
    threshold?: number;
    best_distance?: number;
  } | null;
  sources_count?: number;
  answer?: string;
}

export interface AiOutputRecord {
  question_id: number;
  question: string;
  model: string;
  expected_behavior: string;
  actual_behavior: string;
  relevance_pass: boolean;
  context_support_pass: boolean;
  unsupported_claim_pass: boolean;
  format_pass: boolean;
  behavior_pass: boolean;
  overall_pass: boolean;
  answer?: string;
  latency_seconds?: number;
}
