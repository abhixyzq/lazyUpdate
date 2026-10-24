'use client';

import React from 'react';
import Link from 'next/link';
import { SubpageHeader } from '@/components/SubpageHeader';
import { ArrowLeft, Clock, FileText, CheckCircle2, BookOpen } from 'lucide-react';
import { BottomNav } from '@/components/BottomNav';

export default function PYQsPage() {
  return (
    <div className="min-h-screen bg-transparent text-slate-900 pb-28 sm:pb-16">
      <SubpageHeader title="Previous Year Questions" />

      <main className="mx-auto max-w-xl px-3 pt-4 space-y-4">
        {/* Coming Soon Hero Card */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-6 text-center shadow-2xs space-y-4">
          {/* Ambient Glow */}
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 h-36 w-36 rounded-full bg-blue-100/50 blur-3xl pointer-events-none" />

          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-[#fef9c3] px-3 py-1 text-xs font-bold text-amber-900 shadow-2xs">
            <Clock className="h-3.5 w-3.5 stroke-[2]" />
            <span>Under Active Compilation</span>
          </div>

          {/* Large Visual Icon */}
          <div className="mx-auto flex h-18 w-18 items-center justify-center rounded-3xl bg-blue-50 text-3xl border border-blue-100 shadow-2xs">
            📑
          </div>

          <div className="space-y-1.5 max-w-md mx-auto">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0a2558] tracking-tight">
              PYQs Coming Soon
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
              Patna University ke semester exams ke verified previous year question papers digitize aur format kiye ja rahe hain.
            </p>
          </div>

          {/* Feature Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2 text-left">
            <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-3 space-y-1">
              <span className="text-xs font-bold text-[#0a2558] flex items-center gap-1.5">
                <FileText className="h-3.5 w-3.5 stroke-[2]" />
                Year-wise Papers
              </span>
              <p className="text-[11px] text-slate-400 font-normal">
                2021 se 2025 tak ke authentic university question papers.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-3 space-y-1">
              <span className="text-xs font-bold text-[#0a2558] flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 stroke-[2]" />
                All Paper Types
              </span>
              <p className="text-[11px] text-slate-400 font-normal">
                Major (MJC), Minor (MIC), MDC aur AEC papers covered.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-3 space-y-1">
              <span className="text-xs font-bold text-[#0a2558] flex items-center gap-1.5">
                <BookOpen className="h-3.5 w-3.5 stroke-[2]" />
                Subject Sorted
              </span>
              <p className="text-[11px] text-slate-400 font-normal">
                Science, Social Science, Commerce & Humanities.
              </p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-3 flex flex-col sm:flex-row gap-2.5 justify-center">
            <Link
              href="/syllabus"
              className="flex items-center justify-center gap-1.5 rounded-xl bg-[#0a2558] hover:bg-[#071d47] px-5 py-2.5 text-xs font-bold text-white shadow-xs active:scale-98 transition"
            >
              <BookOpen className="h-4 w-4 stroke-[2]" />
              <span>Explore Syllabus Instead</span>
            </Link>

            <Link
              href="/"
              className="flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition"
            >
              <ArrowLeft className="h-4 w-4" />
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
