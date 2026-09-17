'use client';

import React from 'react';
import Link from 'next/link';
import { SubpageHeader } from '@/components/SubpageHeader';
import { ArrowLeft, Clock, FileText, CheckCircle2, BookOpen } from 'lucide-react';

export default function PYQsPage() {
  return (
    <div className="min-h-screen bg-transparent text-white pb-16">
      <SubpageHeader title="Previous Year Questions" />

      <main className="mx-auto max-w-xl px-3 pt-4 space-y-4">
        {/* Coming Soon Hero Card */}
        <div className="relative overflow-hidden rounded-3xl border border-blue-900/80 bg-gradient-to-b from-[#0c234a] to-[#07172e] p-6 text-center shadow-2xl space-y-4">
          {/* Ambient Glow */}
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 h-36 w-36 rounded-full bg-cyan-500/20 blur-3xl pointer-events-none" />

          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/40 bg-amber-400/10 px-3 py-1 text-xs font-black text-amber-300 shadow-sm">
            <Clock className="h-3.5 w-3.5" />
            <span>Under Active Compilation</span>
          </div>

          {/* Large Visual Icon */}
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-[#123060] to-[#0a1e3d] text-4xl border border-cyan-500/40 shadow-xl shadow-cyan-500/10">
            📑
          </div>

          <div className="space-y-1.5 max-w-md mx-auto">
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              PYQs Coming Soon
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Patna University ke 4-Year FYUGP CBCS aur Annual Semester Exams ke verified previous year question papers digitize aur format kiye ja rahe hain.
            </p>
          </div>

          {/* Feature Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2 text-left">
            <div className="rounded-2xl border border-blue-900/70 bg-[#06142a] p-3 space-y-1">
              <span className="text-xs font-black text-cyan-300 flex items-center gap-1.5">
                <FileText className="h-3.5 w-3.5" />
                Year-wise Papers
              </span>
              <p className="text-[11px] text-slate-400">
                2021 se 2025 tak ke authentic university question papers.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-900/70 bg-[#06142a] p-3 space-y-1">
              <span className="text-xs font-black text-amber-300 flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5" />
                All Paper Types
              </span>
              <p className="text-[11px] text-slate-400">
                Major (MJC), Minor (MIC), MDC aur AEC papers covered.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-900/70 bg-[#06142a] p-3 space-y-1">
              <span className="text-xs font-black text-emerald-300 flex items-center gap-1.5">
                <BookOpen className="h-3.5 w-3.5" />
                Subject Sorted
              </span>
              <p className="text-[11px] text-slate-400">
                Science, Social Science, Commerce & Humanities.
              </p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-3 flex flex-col sm:flex-row gap-2.5 justify-center">
            <Link
              href="/syllabus"
              className="flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2.5 text-xs font-black text-white shadow-lg shadow-cyan-500/20 hover:scale-102 active:scale-98 transition"
            >
              <BookOpen className="h-4 w-4" />
              <span>Explore Syllabus Instead</span>
            </Link>

            <Link
              href="/"
              className="flex items-center justify-center gap-1.5 rounded-xl border border-blue-800 bg-[#091e3d] px-4 py-2.5 text-xs font-bold text-slate-300 hover:text-white hover:border-cyan-400 transition"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
