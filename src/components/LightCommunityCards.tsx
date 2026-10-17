'use client';

import React from 'react';
import { ChevronRight } from 'lucide-react';
import { WhatsAppMonoIcon, InstagramMonoIcon } from './OfficialBrandIcons';

export const LightCommunityCards: React.FC = () => {
  return (
    <div className="mx-auto max-w-xl px-3 pt-3">
      {/* Both in one row with glass green effect */}
      <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
        
        {/* 1. WhatsApp Channel (Glass Green + B&W Logo) */}
        <a
          href="https://whatsapp.com/channel/0029VbDWOxc3LdQXxMfsBl2G"
          target="_blank"
          rel="noreferrer"
          className="group relative flex flex-col justify-between rounded-2xl border border-emerald-200/80 bg-gradient-to-br from-white/90 via-emerald-50/50 to-white/70 backdrop-blur-md p-3 sm:p-3.5 shadow-[0_3px_14px_-1px_rgba(16,185,129,0.09)] hover:border-emerald-400 hover:shadow-[0_8px_24px_-4px_rgba(16,185,129,0.18)] hover:-translate-y-0.5 active:scale-98 transition"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-emerald-200/70 bg-white/95 text-slate-900 shadow-2xs group-hover:scale-105 transition">
              <WhatsAppMonoIcon className="h-5 w-5" />
            </div>

            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100/70 border border-emerald-200/80 text-emerald-800 shadow-2xs group-hover:bg-emerald-600 group-hover:text-white transition">
              <ChevronRight className="h-3.5 w-3.5 stroke-[2]" />
            </div>
          </div>

          <div className="min-w-0">
            <span className="block text-[10px] font-semibold text-emerald-700 leading-none">
              Join Our
            </span>
            <h3 className="text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-emerald-950 transition truncate mt-1">
              WhatsApp Channel
            </h3>
            <p className="text-[10px] text-slate-500 line-clamp-1 leading-tight mt-0.5">
              Instant updates & notices
            </p>
          </div>
        </a>

        {/* 2. Instagram (Glass Green + B&W Logo) */}
        <a
          href="https://instagram.com/_lazypu"
          target="_blank"
          rel="noreferrer"
          className="group relative flex flex-col justify-between rounded-2xl border border-emerald-200/80 bg-gradient-to-br from-white/90 via-emerald-50/50 to-white/70 backdrop-blur-md p-3 sm:p-3.5 shadow-[0_3px_14px_-1px_rgba(16,185,129,0.09)] hover:border-emerald-400 hover:shadow-[0_8px_24px_-4px_rgba(16,185,129,0.18)] hover:-translate-y-0.5 active:scale-98 transition"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-emerald-200/70 bg-white/95 text-slate-900 shadow-2xs group-hover:scale-105 transition">
              <InstagramMonoIcon className="h-5 w-5" />
            </div>

            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100/70 border border-emerald-200/80 text-emerald-800 shadow-2xs group-hover:bg-emerald-600 group-hover:text-white transition">
              <ChevronRight className="h-3.5 w-3.5 stroke-[2]" />
            </div>
          </div>

          <div className="min-w-0">
            <span className="block text-[10px] font-semibold text-emerald-700 leading-none">
              Follow Us
            </span>
            <h3 className="text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-emerald-950 transition truncate mt-1">
              Instagram @_lazypu
            </h3>
            <p className="text-[10px] text-slate-500 line-clamp-1 leading-tight mt-0.5">
              Updates, tips & memes
            </p>
          </div>
        </a>

      </div>
    </div>
  );
};
