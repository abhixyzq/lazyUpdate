'use client';

import React from 'react';
import Link from 'next/link';
import { SubpageHeader } from '@/components/SubpageHeader';
import { BottomNav } from '@/components/BottomNav';
import { Sparkles, ArrowLeft } from 'lucide-react';
import { WhatsAppMonoIcon } from '@/components/OfficialBrandIcons';

export default function ToolsPage() {
  return (
    <div className="relative min-h-screen bg-[#f6faf7] text-slate-900 pb-24 overflow-x-hidden flex flex-col justify-between">
      {/* Ambient Emerald Glass Glow Orbs */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[550px] h-[360px] bg-gradient-to-b from-emerald-200/40 via-teal-100/25 to-transparent blur-3xl rounded-full transform-gpu will-change-transform" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-200/25 blur-3xl rounded-full transform-gpu will-change-transform" />

      {/* Top Navbar */}
      <SubpageHeader title="Student Tools" />

      {/* Centered Minimal Coming Soon Container */}
      <main className="mx-auto flex w-full max-w-md flex-1 flex-col items-center justify-center px-4 py-12 text-center">
        
        {/* Glass Card */}
        <div className="relative w-full overflow-hidden rounded-[32px] border border-emerald-200/80 bg-gradient-to-br from-white/90 via-emerald-50/50 to-white/75 backdrop-blur-md p-8 sm:p-10 shadow-[0_8px_30px_-4px_rgba(5,150,105,0.12)]">
          
          {/* Animated Glow Icon */}
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 border border-emerald-300/70 text-emerald-700 shadow-xs">
            <Sparkles className="h-8 w-8 stroke-[1.8] animate-pulse" />
          </div>

          {/* Badge */}
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-300/80 bg-white/95 px-3 py-1 text-[11px] font-bold text-emerald-800 shadow-2xs tracking-wide">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
            UNDER DEVELOPMENT
          </span>

          {/* Heading */}
          <h1 className="mt-4 text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Coming Soon
          </h1>

          {/* Subtext */}
          <p className="mt-2 text-xs sm:text-sm text-slate-500 font-normal leading-relaxed max-w-xs mx-auto">
            Powerful academic utilities and calculators for Patna University students are in the works. Stay tuned!
          </p>

          {/* Actions */}
          <div className="mt-6 flex flex-col gap-2.5">
            <a
              href="https://whatsapp.com/channel/0029VbDWOxc3LdQXxMfsBl2G"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-2xl bg-slate-900 hover:bg-black text-white font-semibold py-3 px-4 text-xs transition shadow-2xs active:scale-98"
            >
              <WhatsAppMonoIcon className="h-4 w-4" />
              <span>Get Notified on WhatsApp</span>
            </a>

            <Link
              href="/"
              className="flex items-center justify-center gap-1.5 rounded-2xl border border-emerald-200/90 bg-white/90 hover:bg-emerald-50/50 text-slate-700 font-semibold py-2.5 px-4 text-xs transition active:scale-98"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Back to Home</span>
            </Link>
          </div>

        </div>

      </main>

      {/* Persistent Bottom Nav */}
      <BottomNav />
    </div>
  );
}
