'use client';

import React from 'react';

interface AlertStripProps {
  onJoin: () => void;
  text?: string;
  universityName?: string;
}

export const AlertStrip: React.FC<AlertStripProps> = ({
  onJoin,
  text = 'Join Lazy PU whatsapp channel for latest notices & circulars... more',
}) => {
  return (
    <div className="mx-auto max-w-xl px-3 pt-3">
      <div className="flex items-center justify-between gap-2 rounded-xl border border-amber-500/80 bg-[#081832] px-3 py-2 shadow-sm text-xs">
        
        {/* Left: Premium Golden Notification Bell SVG + text */}
        <div className="flex items-center gap-2.5 min-w-0 flex-1">
          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-amber-500/20 border border-amber-400/40 text-amber-300 shadow-xs">
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-amber-400" stroke="currentColor" strokeWidth="1.5">
              <path d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <p className="truncate text-xs text-slate-100 font-medium">
            {text}
          </p>
        </div>

        {/* Right: Bright Teal/Cyan 'Join Now' Button */}
        <button
          onClick={onJoin}
          className="shrink-0 rounded-lg bg-[#00f0aa] px-3 py-1 font-black text-xs text-[#052b22] hover:bg-[#00d898] active:scale-95 transition shadow-sm shadow-[#00f0aa]/20"
        >
          Join Now
        </button>

      </div>
    </div>
  );
};
