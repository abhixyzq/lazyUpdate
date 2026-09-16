'use client';

import React from 'react';
import { Play } from 'lucide-react';
import { GooglePlayIcon } from './OfficialBrandIcons';

interface PromoAppCardProps {
  onDownloadApp: () => void;
  onSelectTag?: (tag: string) => void;
}

export const PromoAppCard: React.FC<PromoAppCardProps> = ({
  onDownloadApp,
  onSelectTag,
}) => {
  const tags = [
    'GATE 2027 Syllabus',
    'PYQs Mock Test',
    'Weightage Data',
    'Subject-wise PYQs',
    'Topic-wise PYQs',
    'GATE CalC',
  ];

  return (
    <div className="mx-auto max-w-xl px-3 pt-3">
      <div className="rounded-3xl border border-blue-900/80 bg-[#091a36] p-4 shadow-xl">
        
        {/* Top Row: App Icon + Titles */}
        <div className="flex items-center gap-3">
          {/* Target Logo Icon */}
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-900 to-blue-950 border border-cyan-500/40 p-2 shadow-md">
            <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
              <defs>
                <linearGradient id="gateGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00d2ff" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>
              <circle cx="50" cy="50" r="42" stroke="url(#gateGrad)" strokeWidth="4" />
              <circle cx="50" cy="50" r="28" stroke="#38bdf8" strokeWidth="2.5" strokeDasharray="5 3" opacity="0.8" />
              <circle cx="50" cy="50" r="14" fill="url(#gateGrad)" />
              <line x1="50" y1="4" x2="50" y2="96" stroke="#38bdf8" strokeWidth="2.5" />
              <line x1="4" y1="50" x2="96" y2="50" stroke="#38bdf8" strokeWidth="2.5" />
              <circle cx="50" cy="50" r="4" fill="#ffffff" />
            </svg>
          </div>

          <div>
            <h3 className="text-sm font-black text-white tracking-tight leading-tight">
              Apna GATE: PYQs, Syllabus & AI
            </h3>
            <p className="text-[11px] text-slate-300 font-medium mt-0.5 leading-snug">
              All-in-One App for GATE PYQs Practice & Analysis.
            </p>
          </div>
        </div>

        {/* Pill Tags Grid */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => onSelectTag && onSelectTag(tag)}
              className="rounded-xl border border-cyan-500/40 bg-[#0c2752] px-2.5 py-1 text-[10px] font-bold text-cyan-200 hover:border-cyan-400 hover:bg-[#113368] transition"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Golden Action Button with Authentic Google Play Store Icon */}
        <div className="mt-3 pt-1">
          <button
            onClick={onDownloadApp}
            className="flex w-full items-center justify-center gap-2.5 rounded-2xl border border-amber-400/80 bg-[#16233d] py-2.5 px-4 text-xs font-black text-amber-300 shadow-sm hover:bg-amber-400/10 active:scale-98 transition"
          >
            <GooglePlayIcon className="h-4 w-4 shrink-0" />
            <span>Download Apna GATE app</span>
          </button>
        </div>

      </div>
    </div>
  );
};
