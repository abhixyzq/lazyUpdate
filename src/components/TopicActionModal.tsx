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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-150"
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
          <span className="text-[10px] font-black uppercase tracking-wider text-blue-600">
            {paperName}
          </span>
          <h3 className="text-sm sm:text-base font-black text-slate-900 leading-snug mt-0.5">
            {topic}
          </h3>
          <span className="text-[11px] font-semibold text-slate-500 block mt-0.5">
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
            className="flex items-center justify-between rounded-2xl border border-rose-200 bg-rose-50/70 p-3.5 hover:bg-rose-100/80 active:scale-98 transition shadow-xs group"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white border border-rose-200 shadow-2xs">
                <YouTubeIcon className="h-5 w-5" />
              </div>
              <div className="text-left">
                <div className="text-xs sm:text-sm font-black text-slate-900 group-hover:text-rose-700 transition">
                  Search on YouTube
                </div>
                <div className="text-[10px] text-slate-500 font-medium">
                  Watch top video lectures & tutorials
                </div>
              </div>
            </div>
            <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-rose-600 transition shrink-0" />
          </a>

          {/* 2. Ask AI Option */}
          <div className="rounded-2xl border border-indigo-200 bg-gradient-to-br from-indigo-50/80 via-white to-purple-50/60 p-3.5 shadow-xs space-y-2.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 text-white shadow-xs">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-black text-slate-900">
                    Ask AI Explainer
                  </div>
                  <div className="text-[10px] text-slate-500 font-medium">
                    Instant exam notes, concepts & answers
                  </div>
                </div>
              </div>
            </div>

            {/* AI Action Buttons */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href={geminiUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="flex items-center justify-center gap-1.5 rounded-xl border border-blue-200 bg-white py-2 px-2.5 text-[11px] font-black text-blue-700 hover:bg-blue-50 active:scale-95 transition shadow-2xs"
              >
                <Sparkles className="h-3.5 w-3.5 text-blue-600" />
                <span>Google Gemini</span>
              </a>

              <a
                href={chatgptUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="flex items-center justify-center gap-1.5 rounded-xl border border-emerald-200 bg-white py-2 px-2.5 text-[11px] font-black text-emerald-800 hover:bg-emerald-50 active:scale-95 transition shadow-2xs"
              >
                <Bot className="h-3.5 w-3.5 text-emerald-600" />
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
            className={`w-full flex items-center justify-between rounded-2xl border p-3.5 active:scale-98 transition shadow-xs ${
              isCompleted
                ? 'border-emerald-300 bg-emerald-50/80 text-emerald-950'
                : 'border-slate-200 bg-slate-50 hover:bg-white text-slate-800'
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${
                  isCompleted
                    ? 'bg-emerald-600 border-emerald-600 text-white'
                    : 'bg-white border-slate-200 text-slate-400'
                }`}
              >
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <div className="text-left">
                <div className="text-xs sm:text-sm font-black">
                  {isCompleted ? 'Marked as Completed ✓' : 'Mark as Completed'}
                </div>
                <div className="text-[10px] text-slate-500 font-medium">
                  {isCompleted
                    ? 'Tap to unmark this topic'
                    : 'Double-tap also marks this topic completed'}
                </div>
              </div>
            </div>
            <span
              className={`rounded-full px-2 py-0.5 text-[10px] font-black ${
                isCompleted
                  ? 'bg-emerald-200 text-emerald-900'
                  : 'bg-slate-200 text-slate-700'
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
