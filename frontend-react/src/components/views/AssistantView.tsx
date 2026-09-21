import React, { useState } from 'react';
import { 
  MessageSquare, 
  Send, 
  Trash2, 
  BookOpen, 
  Sliders, 
  Sparkles, 
  ExternalLink,
  ShieldAlert,
  Clock
} from 'lucide-react';
import { PageHeader } from '../layout/PageHeader';
import { StatusBadge } from '../common/StatusBadge';
import { ChatMessage } from '../../types';
import { askQuestion } from '../../services/api';

export const AssistantView: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'init-1',
      role: 'assistant',
      content: 'Hello! I am your Aadhaar AI Assistant. All my answers are strictly grounded in the official UIDAI Aadhaar Handbook via FAISS semantic retrieval and local Ollama inference. How can I assist you with Aadhaar enrolment, updates, or biometric authentication today?',
      sources: [],
      timestamp: 'Just now',
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sampleQuestions = [
    'What documents are required for Aadhaar enrolment?',
    'What is demographic authentication?',
    'What should a resident do if there is an error in their Aadhaar information?',
    'Can an NRI enrol for Aadhaar?',
  ];

  const handleSend = async (questionText?: string) => {
    const text = (questionText || input).trim();
    if (!text || loading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const response = await askQuestion(text);
      const assistantMsg: ChatMessage = {
        id: `asst-${Date.now()}`,
        role: 'assistant',
        content: response.answer,
        sources: response.sources,
        guardrail: response.guardrail,
        latency: response.latency,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, assistantMsg]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: `asst-err-${Date.now()}`,
          role: 'assistant',
          content: 'Sorry, an error occurred while connecting to the application service.',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setMessages([
      {
        id: `init-${Date.now()}`,
        role: 'assistant',
        content: 'Conversation reset. Ask any question regarding Aadhaar regulations or processes.',
        sources: [],
        timestamp: 'Just now',
      }
    ]);
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Aadhaar AI Assistant"
        subtitle="Retrieval-Augmented Generation grounded in official UIDAI Handbook"
        icon={MessageSquare}
      >
        <button
          onClick={handleClear}
          className="inline-flex items-center gap-1.5 rounded-xl border border-[#E7ECE9] bg-white px-3 py-2 text-xs font-semibold text-[#64748B] hover:bg-rose-50 hover:text-rose-600 hover:border-rose-200 transition"
        >
          <Trash2 className="h-3.5 w-3.5" />
          Clear Chat
        </button>
      </PageHeader>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Chat Stream (2 Columns) */}
        <div className="lg:col-span-2 flex flex-col h-[720px] rounded-2xl border border-[#E7ECE9] bg-white shadow-sm overflow-hidden">
          {/* Suggested Prompts Banner */}
          <div className="p-4 border-b border-[#E7ECE9] bg-[#F8FAF9]/80">
            <div className="flex items-center gap-2 mb-2 text-xs font-bold text-[#192823]">
              <Sparkles className="h-3.5 w-3.5 text-[#1E6F50]" />
              <span>Suggested Queries</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {sampleQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(q)}
                  disabled={loading}
                  className="rounded-lg border border-[#E7ECE9] bg-white px-2.5 py-1.5 text-xs text-[#475569] hover:border-[#1E6F50] hover:text-[#1E6F50] transition disabled:opacity-50 text-left"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-6 space-y-5">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div className="flex items-center gap-2 mb-1 text-[11px] text-[#94A3B8] font-medium">
                  <span>{msg.role === 'user' ? 'You' : 'Aadhaar Assistant (qwen2.5-coder)'}</span>
                  <span>•</span>
                  <span>{msg.timestamp}</span>
                  {msg.latency && (
                    <>
                      <span>•</span>
                      <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                        <Clock className="h-3 w-3" /> {msg.latency}s
                      </span>
                    </>
                  )}
                </div>

                <div
                  className={`max-w-[88%] rounded-2xl p-4 text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user'
                      ? 'bg-[#1E6F50] text-white rounded-tr-none'
                      : 'bg-[#F8FAF9] text-[#192823] border border-[#E7ECE9] rounded-tl-none'
                  }`}
                >
                  <p className="whitespace-pre-wrap">{msg.content}</p>

                  {/* Guardrail alert */}
                  {msg.guardrail?.triggered && (
                    <div className="mt-3 flex items-center gap-2 rounded-xl bg-amber-50 p-2.5 text-xs text-amber-800 border border-amber-200">
                      <ShieldAlert className="h-4 w-4 shrink-0 text-amber-600" />
                      <span>Guardrail Active: <b>{msg.guardrail.type}</b></span>
                    </div>
                  )}

                  {/* Source Citations */}
                  {msg.sources && msg.sources.length > 0 && (
                    <div className="mt-4 pt-3 border-t border-[#E2E8F0]">
                      <div className="flex items-center gap-1.5 mb-2 text-xs font-bold text-[#1E6F50]">
                        <BookOpen className="h-3.5 w-3.5" />
                        <span>Verified Citations ({msg.sources.length})</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {msg.sources.map((s, idx) => (
                          <div
                            key={idx}
                            className="rounded-xl border border-[#CBD5E1]/70 bg-white p-2.5 text-xs transition hover:border-[#1E6F50]"
                          >
                            <div className="flex items-center justify-between font-semibold text-[#1E293B]">
                              <span className="truncate">{s.source}</span>
                              <span className="rounded bg-emerald-50 px-1.5 py-0.5 text-[10px] font-bold text-[#1E6F50]">
                                p.{s.page}
                              </span>
                            </div>
                            {s.distance !== undefined && (
                              <div className="mt-1 flex items-center justify-between text-[11px] text-[#64748B]">
                                <span>FAISS dist:</span>
                                <span className="font-mono font-medium">{s.distance.toFixed(4)}</span>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex items-center gap-3 text-xs text-[#64748B]">
                <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-emerald-50 text-[#1E6F50] animate-spin">
                  ⏳
                </div>
                <span>Retrieving Aadhaar Handbook chunks and generating answer…</span>
              </div>
            )}
          </div>

          {/* Input Bar */}
          <div className="p-4 border-t border-[#E7ECE9] bg-white">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-3"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Aadhaar enrolment, documents, authentication, updates…"
                className="flex-1 rounded-xl border border-[#CBD5E1] bg-[#F8FAF9] px-4 py-3 text-sm text-[#192823] outline-none transition focus:border-[#1E6F50] focus:bg-white focus:ring-2 focus:ring-[#1E6F50]/15"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#1E6F50] px-5 text-sm font-bold text-white shadow-sm shadow-[#1E6F50]/20 hover:bg-[#155A40] active:scale-95 disabled:opacity-40 transition"
              >
                <Send className="h-4 w-4" />
                <span>Send</span>
              </button>
            </form>
          </div>
        </div>

        {/* Sidebar Info Panels (1 Column) */}
        <div className="space-y-6">
          {/* RAG Rules Card */}
          <div className="rounded-2xl border border-[#E7ECE9] bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between pb-3 border-b border-[#E7ECE9]">
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-[#1E6F50]" />
                <h3 className="text-sm font-bold text-[#192823]">UIDAI RAG Rules</h3>
              </div>
              <StatusBadge label="Enforced" variant="success" />
            </div>
            <ul className="mt-4 space-y-2.5 text-xs text-[#475569]">
              <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#1E6F50] mt-1.5 shrink-0" />
                <span>1. Answer strictly from retrieved Aadhaar Handbook context.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#1E6F50] mt-1.5 shrink-0" />
                <span>2. Never invent dates, fees, or unverified documents.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#1E6F50] mt-1.5 shrink-0" />
                <span>3. Abstain when query falls outside Handbook coverage.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#1E6F50] mt-1.5 shrink-0" />
                <span>4. Always link verified document name and page number.</span>
              </li>
            </ul>
          </div>

          {/* Generation Settings Card */}
          <div className="rounded-2xl border border-[#E7ECE9] bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 pb-3 border-b border-[#E7ECE9]">
              <Sliders className="h-5 w-5 text-[#1E6F50]" />
              <h3 className="text-sm font-bold text-[#192823]">Inference Settings</h3>
            </div>
            <div className="mt-4 space-y-3 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-[#64748B]">Active Model:</span>
                <span className="font-mono font-bold text-[#192823] bg-slate-100 px-2 py-0.5 rounded">
                  qwen2.5-coder:1.5b
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#64748B]">Retrieval Top-K:</span>
                <span className="font-bold text-[#192823]">3 Chunks</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#64748B]">Vector Engine:</span>
                <span className="font-bold text-[#192823]">FAISS (FlatL2, 768-dim)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#64748B]">Temperature:</span>
                <span className="font-bold text-[#192823]">0.1 (Strict Grounding)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#64748B]">Runtime:</span>
                <span className="font-bold text-emerald-700">Local Ollama</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
