'use client';

import React from 'react';
import Link from 'next/link';
import { SubpageHeader } from '@/components/SubpageHeader';
import { ArrowLeft, Clock, FileText, CheckCircle2, BookOpen } from 'lucide-react';

export default function PYQsPage() {
  return (
    <div className="min-h-screen bg-transparent text-slate-900 pb-28 sm:pb-16">
      <SubpageHeader title="Previous Year Questions" />

      <main className="mx-auto max-w-xl px-3 pt-4 space-y-4">
        {/* Coming Soon Hero Card */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-6 text-center shadow-sm space-y-4">
          {/* Ambient Glow */}
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 h-36 w-36 rounded-full bg-blue-100/60 blur-3xl pointer-events-none" />

          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-black text-amber-800 shadow-xs">
            <Clock className="h-3.5 w-3.5" />
            <span>Under Active Compilation</span>
          </div>

          {/* Large Visual Icon */}
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-slate-50 text-4xl border border-slate-200 shadow-xs">
            📑
          </div>

          <div className="space-y-1.5 max-w-md mx-auto">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              PYQs Coming Soon
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Patna University ke semester exams ke verified previous year question papers digitize aur format kiye ja rahe hain.
            </p>
          </div>

          {/* Feature Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2 text-left">
            <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-3 space-y-1">
              <span className="text-xs font-black text-blue-700 flex items-center gap-1.5">
                <FileText className="h-3.5 w-3.5" />
                Year-wise Papers
              </span>
              <p className="text-[11px] text-slate-500">
                2021 se 2025 tak ke authentic university question papers.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-3 space-y-1">
              <span className="text-xs font-black text-amber-800 flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5" />
                All Paper Types
              </span>
              <p className="text-[11px] text-slate-500">
                Major (MJC), Minor (MIC), MDC aur AEC papers covered.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-3 space-y-1">
              <span className="text-xs font-black text-emerald-700 flex items-center gap-1.5">
                <BookOpen className="h-3.5 w-3.5" />
                Subject Sorted
              </span>
              <p className="text-[11px] text-slate-500">
                Science, Social Science, Commerce & Humanities.
              </p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-3 flex flex-col sm:flex-row gap-2.5 justify-center">
            <Link
              href="/syllabus"
              className="flex items-center justify-center gap-1.5 rounded-xl bg-slate-900 px-5 py-2.5 text-xs font-black text-white shadow-xs hover:bg-slate-800 active:scale-98 transition"
            >
              <BookOpen className="h-4 w-4" />
              <span>Explore Syllabus Instead</span>
            </Link>

            <Link
              href="/"
              className="flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-slate-100 px-4 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-200 hover:text-slate-900 transition"
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
