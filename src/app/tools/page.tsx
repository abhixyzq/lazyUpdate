'use client';

import React from 'react';
import Link from 'next/link';
import { SubpageHeader } from '@/components/SubpageHeader';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { BottomNav } from '@/components/BottomNav';
import { WhatsAppMonoIcon } from '@/components/OfficialBrandIcons';

export default function ToolsPage() {
  return (
    <div className="relative min-h-screen bg-transparent text-slate-900 pb-24 overflow-x-hidden flex flex-col justify-between">
      {/* Ambient Blue Glass Glow Orbs */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[550px] h-[360px] bg-gradient-to-b from-blue-200/30 via-indigo-100/15 to-transparent blur-3xl rounded-full transform-gpu will-change-transform" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-200/20 blur-3xl rounded-full transform-gpu will-change-transform" />

      {/* Top Navbar */}
      <SubpageHeader title="Student Tools" />

      {/* Centered Minimal Coming Soon Container */}
      <main className="mx-auto flex w-full max-w-md flex-1 flex-col items-center justify-center px-4 py-12 text-center">
        {/* Glass Card */}
        <div className="relative w-full overflow-hidden rounded-[32px] border border-blue-100/90 bg-white p-8 sm:p-10 shadow-sm">
          {/* Animated Glow Icon */}
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 border border-blue-200 text-[#0a2558] shadow-xs">
            <Sparkles className="h-8 w-8 stroke-[1.8] animate-pulse" />
          </div>

          {/* Badge */}
          <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-[#fef9c3] px-3 py-1 text-[11px] font-bold text-amber-900 shadow-2xs tracking-wide">
            <span className="h-2 w-2 rounded-full bg-amber-500 animate-ping" />
            UNDER DEVELOPMENT
          </span>

          {/* Heading */}
          <h1 className="mt-4 text-2xl sm:text-3xl font-extrabold text-[#0a2558] tracking-tight">
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
              className="flex items-center justify-center gap-2 rounded-2xl bg-[#0a2558] hover:bg-[#071d47] text-white font-bold py-3 px-4 text-xs transition shadow-xs active:scale-98"
            >
              <WhatsAppMonoIcon className="h-4 w-4" />
              <span>Get Notified on WhatsApp</span>
            </a>

            <Link
              href="/"
              className="flex items-center justify-center gap-1.5 rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-semibold py-2.5 px-4 text-xs transition active:scale-98"
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
