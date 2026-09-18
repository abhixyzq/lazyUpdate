'use client';

import React from 'react';

interface AlertStripProps {
  onJoin?: () => void;
  href?: string;
  text?: string;
  universityName?: string;
}

export const AlertStrip: React.FC<AlertStripProps> = ({
  onJoin,
  href,
  text = 'Join Lazy PU whatsapp channel for latest notices & circulars... more',
}) => {
  return (
    <div className="mx-auto max-w-xl px-3 pt-3">
      <div className="flex items-center justify-between gap-2.5 rounded-2xl border border-amber-200/90 bg-amber-50/80 px-3.5 py-2.5 shadow-xs text-xs">
        
        {/* Left: Golden Notification Bell SVG + text */}
        <div className="flex items-center gap-2.5 min-w-0 flex-1">
          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-amber-100 border border-amber-300/80 text-amber-600 shadow-xs">
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-amber-500" stroke="currentColor" strokeWidth="1.5">
              <path d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <p className="truncate text-xs text-amber-950 font-semibold">
            {text}
          </p>
        </div>

        {/* Right: Sleek 'Join Now' Button / Link */}
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-xl bg-slate-900 px-3.5 py-1.5 font-black text-xs text-white hover:bg-slate-800 active:scale-95 transition shadow-xs"
          >
            Join Now
          </a>
        ) : (
          <button
            onClick={onJoin}
            className="shrink-0 rounded-xl bg-slate-900 px-3.5 py-1.5 font-black text-xs text-white hover:bg-slate-800 active:scale-95 transition shadow-xs"
          >
            Join Now
          </button>
        )}

      </div>
    </div>
  );
};
