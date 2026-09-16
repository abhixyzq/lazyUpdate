'use client';

import React from 'react';
import { Flame, ChevronRight, Bell } from 'lucide-react';
import { puFlashUpdates } from '@/data/puNotices';

interface FlashTickerProps {
  onSelectNotice: (id: string) => void;
}

export const FlashTicker: React.FC<FlashTickerProps> = ({ onSelectNotice }) => {
  const marqueeItems = [...puFlashUpdates, ...puFlashUpdates];

  return (
    <div className="relative w-full border-b border-red-200/80 bg-gradient-to-r from-red-50 via-amber-50 to-orange-50 dark:border-red-950/60 dark:from-red-950/30 dark:via-slate-900/60 dark:to-orange-950/30 overflow-hidden text-xs">
      <div className="mx-auto flex max-w-7xl items-center">
        
        {/* Static Badge Left */}
        <div className="relative z-10 flex shrink-0 items-center gap-1.5 bg-red-600 px-3 py-2 font-bold uppercase tracking-wider text-white shadow-sm">
          <Flame className="h-4 w-4 animate-bounce text-yellow-300" />
          <span className="tracking-wide font-black">PU Alert</span>
          <div className="absolute right-[-8px] top-0 h-0 w-0 border-y-[17px] border-y-transparent border-l-[8px] border-l-red-600" />
        </div>

        {/* Marquee Wrapper */}
        <div className="relative flex-1 overflow-hidden py-2 pl-3">
          <div className="animate-marquee flex items-center space-x-8 whitespace-nowrap">
            {marqueeItems.map((item, index) => (
              <button
                key={`${item.id}-${index}`}
                onClick={() => item.targetNoticeId && onSelectNotice(item.targetNoticeId)}
                className="group inline-flex items-center space-x-2 text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition cursor-pointer text-left"
              >
                <span className="inline-flex items-center rounded bg-red-100 px-1.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-red-700 dark:bg-red-900/50 dark:text-red-300">
                  {item.badge}
                </span>
                <span className="text-xs">{item.text}</span>
                <ChevronRight className="h-3.5 w-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
              </button>
            ))}
          </div>
        </div>

        {/* Real-time Notice Timestamp Right */}
        <div className="hidden md:flex shrink-0 items-center gap-1 px-4 text-[11px] font-semibold text-red-600 dark:text-red-400">
          <Bell className="h-3.5 w-3.5 animate-pulse" />
          <span>Live PU Examination Feed</span>
        </div>

      </div>
    </div>
  );
};
