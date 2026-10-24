'use client';

import React from 'react';
import { ChevronRight } from 'lucide-react';
import { WhatsAppIcon, InstagramIcon } from './OfficialBrandIcons';

export const LightCommunityCards: React.FC = () => {
  return (
    <div className="mx-auto max-w-xl px-3 pt-3">
      {/* Both in one row with crisp, high-visibility solid white styling */}
      <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
        
        {/* 1. WhatsApp Channel */}
        <a
          href="https://whatsapp.com/channel/0029VbDWOxc3LdQXxMfsBl2G"
          target="_blank"
          rel="noreferrer"
          className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-3 sm:p-3.5 shadow-2xs hover:border-emerald-400 hover:shadow-xs active:scale-98 transition cursor-pointer"
        >
          <div className="flex items-center justify-between mb-2.5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-200/80 bg-emerald-50 shadow-2xs group-hover:scale-105 transition">
              <WhatsAppIcon className="h-5 w-5" />
            </div>

            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-400 group-hover:bg-emerald-600 group-hover:text-white transition">
              <ChevronRight className="h-3.5 w-3.5 stroke-[2.2]" />
            </div>
          </div>

          <div className="min-w-0">
            <span className="block text-[10px] font-black uppercase tracking-wider text-emerald-700 leading-none">
              JOIN CHANNEL
            </span>
            <h3 className="text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-emerald-700 transition truncate mt-1">
              WhatsApp Updates
            </h3>
            <p className="text-[11px] text-slate-600 font-medium truncate mt-0.5">
              Instant alerts & notices
            </p>
          </div>
        </a>

        {/* 2. Instagram Page */}
        <a
          href="https://instagram.com/_lazypu"
          target="_blank"
          rel="noreferrer"
          className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-3 sm:p-3.5 shadow-2xs hover:border-pink-400 hover:shadow-xs active:scale-98 transition cursor-pointer"
        >
          <div className="flex items-center justify-between mb-2.5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-rose-200/80 bg-rose-50 shadow-2xs group-hover:scale-105 transition">
              <InstagramIcon className="h-5 w-5" />
            </div>

            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-400 group-hover:bg-pink-600 group-hover:text-white transition">
              <ChevronRight className="h-3.5 w-3.5 stroke-[2.2]" />
            </div>
          </div>

          <div className="min-w-0">
            <span className="block text-[10px] font-black uppercase tracking-wider text-rose-600 leading-none">
              FOLLOW US
            </span>
            <h3 className="text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-rose-700 transition truncate mt-1">
              @_lazypu
            </h3>
            <p className="text-[11px] text-slate-600 font-medium truncate mt-0.5">
              Campus updates & reels
            </p>
          </div>
        </a>

      </div>
    </div>
  );
};
