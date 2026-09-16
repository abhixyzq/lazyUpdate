'use client';

import React from 'react';
import { puSpotlightData } from '@/data/puNotices';
import { Flame, ArrowUpRight } from 'lucide-react';

interface SpotlightGridProps {
  onSelectItem: (id: string) => void;
}

export const SpotlightGrid: React.FC<SpotlightGridProps> = ({ onSelectItem }) => {
  return (
    <section className="mx-auto max-w-7xl px-3 sm:px-6 pt-3 pb-1">
      <div className="flex items-center justify-between pb-2">
        <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
          <span className="flex h-2 w-2 rounded-full bg-red-500 animate-ping" />
          <span>PU Fast Portals & Direct Links</span>
        </div>
        <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
          Instant Direct Links without Captcha
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
        {puSpotlightData.map((item) => (
          <button
            key={item.id}
            onClick={() => onSelectItem(item.targetId)}
            className={`group relative flex flex-col justify-between overflow-hidden rounded-xl bg-gradient-to-br ${item.gradientClass} p-2.5 text-left shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition duration-150`}
          >
            <div className="flex items-center justify-between w-full">
              {item.isHot ? (
                <span className="inline-flex items-center gap-0.5 rounded bg-black/35 px-1.5 py-0.5 text-[9px] font-black uppercase tracking-wide text-amber-300 backdrop-blur-xs">
                  <Flame className="h-2.5 w-2.5 fill-current text-yellow-300" />
                  HOT
                </span>
              ) : (
                <span className="rounded bg-white/20 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white backdrop-blur-xs">
                  PU Direct
                </span>
              )}
              <ArrowUpRight className="h-3.5 w-3.5 text-white/80 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>

            <div className="mt-2.5">
              <div className="text-xs font-black tracking-tight leading-tight line-clamp-1 drop-shadow-xs">
                {item.title}
              </div>
              <div className="text-[10px] text-white/90 font-medium truncate">
                {item.subTitle}
              </div>
            </div>

            <div className="mt-1.5 text-[9px] font-bold text-yellow-200 underline decoration-yellow-300/60 underline-offset-2">
              {item.tag}
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};
