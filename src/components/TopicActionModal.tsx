'use client';

import React, { useState } from 'react';
import {
  X,
  Sparkles,
  ExternalLink,
  CheckCircle2,
  Circle,
  Copy,
  Check,
  Bot,
} from 'lucide-react';
import { YouTubeIcon } from './OfficialBrandIcons';

interface TopicActionModalProps {
  isOpen: boolean;
  onClose: () => void;
  topic: string;
  courseName: string;
  paperName: string;
  isCompleted: boolean;
  onToggleComplete: () => void;
}

export const TopicActionModal: React.FC<TopicActionModalProps> = ({
  isOpen,
  onClose,
  topic,
  courseName,
  paperName,
  isCompleted,
  onToggleComplete,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  // Search query for YouTube
  const youtubeQuery = `${courseName} ${paperName} ${topic}`;
  const youtubeUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(youtubeQuery)}`;

  // AI prompt for college examination preparation
  const aiPrompt = `Please explain the syllabus topic "${topic}" from ${courseName} (${paperName}) for university examinations. Provide:\n1. Core Concept & Key Definitions\n2. Important Bullet Points with Diagrams/Formulas if applicable\n3. Expected 5-mark and 10-mark Exam Questions and Answers`;

  const geminiUrl = `https://gemini.google.com/app?text=${encodeURIComponent(aiPrompt)}`;
  const chatgptUrl = `https://chatgpt.com/?q=${encodeURIComponent(aiPrompt)}`;

  const handleCopyPrompt = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(aiPrompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 pb-20 sm:p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 shadow-2xl text-slate-900 animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header with Topic Details */}
        <div className="pb-3 border-b border-slate-100 pr-6">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-700">
            {paperName}
          </span>
          <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug mt-0.5">
            {topic}
          </h3>
          <span className="text-[11px] font-medium text-slate-500 block mt-0.5">
            {courseName}
          </span>
        </div>

        {/* Action Options List */}
        <div className="mt-4 space-y-2.5">
          
          {/* 1. Search on YouTube */}
          <a
            href={youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="flex items-center justify-between rounded-2xl border border-slate-200/80 bg-white p-3 hover:border-rose-300 hover:bg-rose-50/40 active:scale-98 transition shadow-2xs group"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-rose-50 border border-rose-100">
                <YouTubeIcon className="h-4 w-4" />
              </div>
              <div className="text-left">
                <div className="text-xs font-semibold text-slate-900 group-hover:text-rose-700 transition">
                  Search on YouTube
                </div>
                <div className="text-[10px] text-slate-400 font-normal">
                  Watch top video lectures & tutorials
                </div>
              </div>
            </div>
            <ExternalLink className="h-3.5 w-3.5 text-slate-300 group-hover:text-rose-600 transition shrink-0" />
          </a>

          {/* 2. Ask AI Option */}
          <div className="rounded-2xl border border-slate-200/80 bg-white p-3.5 shadow-2xs space-y-2.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-emerald-700 text-white shadow-2xs">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-900">
                    Ask AI Explainer
                  </div>
                  <div className="text-[10px] text-slate-400 font-normal">
                    Instant exam notes, concepts & answers
                  </div>
                </div>
              </div>
            </div>

            {/* AI Action Buttons */}
            <div className="grid grid-cols-2 gap-2 pt-0.5">
              <a
                href={geminiUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="flex items-center justify-center gap-1.5 rounded-xl border border-slate-200/80 bg-slate-50 py-2 px-2.5 text-[11px] font-semibold text-slate-700 hover:bg-slate-100 active:scale-95 transition"
              >
                <Sparkles className="h-3.5 w-3.5 text-slate-600" />
                <span>Google Gemini</span>
              </a>

              <a
                href={chatgptUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="flex items-center justify-center gap-1.5 rounded-xl border border-emerald-200/70 bg-emerald-50/60 py-2 px-2.5 text-[11px] font-semibold text-emerald-800 hover:bg-emerald-100/60 active:scale-95 transition"
              >
                <Bot className="h-3.5 w-3.5 text-emerald-700" />
                <span>ChatGPT</span>
              </a>
            </div>

            {/* Copy Prompt Button */}
            <button
              type="button"
              onClick={handleCopyPrompt}
              className="w-full flex items-center justify-center gap-1 text-[10px] font-bold text-slate-500 hover:text-slate-800 py-1 transition"
            >
              {copied ? (
                <>
                  <Check className="h-3 w-3 text-emerald-600" />
                  <span className="text-emerald-600 font-black">AI Study Prompt Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="h-3 w-3" />
                  <span>Copy exam-oriented study prompt</span>
                </>
              )}
            </button>
          </div>

          {/* 3. Mark as Completed Button */}
          <button
            type="button"
            onClick={() => {
              onToggleComplete();
              onClose();
            }}
            className={`w-full flex items-center justify-between rounded-2xl border p-3 active:scale-98 transition shadow-2xs ${
              isCompleted
                ? 'border-emerald-300 bg-emerald-50/70 text-emerald-950'
                : 'border-slate-200/80 bg-white hover:bg-slate-50 text-slate-800'
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border ${
                  isCompleted
                    ? 'bg-emerald-700 border-emerald-700 text-white'
                    : 'bg-slate-50 border-slate-200 text-slate-400'
                }`}
              >
                <CheckCircle2 className="h-4 w-4" />
              </div>
              <div className="text-left">
                <div className="text-xs sm:text-sm font-semibold">
                  {isCompleted ? 'Marked as Completed ✓' : 'Mark as Completed'}
                </div>
                <div className="text-[10px] text-slate-400 font-normal">
                  {isCompleted
                    ? 'Tap to unmark this topic'
                    : 'Double-tap on topic also toggles completion'}
                </div>
              </div>
            </div>
            <span
              className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold ${
                isCompleted
                  ? 'bg-emerald-100 text-emerald-800'
                  : 'bg-slate-100 text-slate-600'
              }`}
            >
              {isCompleted ? 'Done' : 'Pending'}
            </span>
          </button>

        </div>

        {/* Footer Hint */}
        <div className="mt-4 pt-3 border-t border-slate-100 text-center text-[10px] text-slate-400 font-medium">
          💡 Double-tap any topic anytime to toggle completion
        </div>

      </div>
    </div>
  );
};
