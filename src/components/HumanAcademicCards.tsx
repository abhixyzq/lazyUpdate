'use client';

import React from 'react';
import Link from 'next/link';
import { BookOpen, FileText, BarChart3, Megaphone, ArrowRight } from 'lucide-react';

export const HumanAcademicCards: React.FC = () => {
  return (
    <div className="mx-auto max-w-xl px-4 pt-4 space-y-3.5">
      {/* Section Title */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-base font-bold text-slate-900 tracking-tight">
            Academic Essentials
          </h2>
          <p className="text-xs text-slate-500 font-medium">
            Everything you need for your semester exams & classes
          </p>
        </div>
      </div>

      {/* 1. Primary Highlight: Syllabus (NEP FYUGP & CBCS) */}
      <Link
        href="/syllabus"
        className="group block relative overflow-hidden rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50/70 via-white to-emerald-50/20 p-4 sm:p-5 shadow-xs hover:border-emerald-400 hover:shadow-sm transition-all duration-200 active:scale-[0.99] cursor-pointer"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-1.5 min-w-0">
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-emerald-100/80 text-emerald-800 text-[11px] font-bold tracking-tight">
              <span>CBCS & 4-Year FYUGP</span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-emerald-800 transition">
              Course Syllabus
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
              Semester-wise detailed syllabus for Arts, Science, Commerce & Vocational courses at Patna University.
            </p>
          </div>

          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-xs group-hover:scale-105 transition">
            <BookOpen className="h-5 w-5 stroke-[2]" />
          </div>
        </div>

        {/* Quick subject pills inside the card for authentic student utility */}
        <div className="mt-3.5 pt-3 border-t border-emerald-100 flex items-center justify-between">
          <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none py-0.5 text-[11px] font-semibold text-emerald-900">
            <span className="rounded-md bg-white border border-emerald-200/80 px-2 py-0.5 shadow-2xs">B.A</span>
            <span className="rounded-md bg-white border border-emerald-200/80 px-2 py-0.5 shadow-2xs">B.Sc</span>
            <span className="rounded-md bg-white border border-emerald-200/80 px-2 py-0.5 shadow-2xs">B.Com</span>
            <span className="rounded-md bg-white border border-emerald-200/80 px-2 py-0.5 shadow-2xs">BCA / BBA</span>
          </div>

          <div className="flex items-center gap-1 text-xs font-bold text-emerald-700 group-hover:text-emerald-900 group-hover:translate-x-0.5 transition shrink-0 pl-2">
            <span>Browse</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </div>
        </div>
      </Link>

      {/* 2. Secondary Two-Column: PYQs & UMIS Results */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {/* PYQs Card */}
        <Link
          href="/pyqs"
          className="group flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-4 shadow-2xs hover:border-blue-400 hover:shadow-xs transition duration-200 active:scale-[0.99] cursor-pointer"
        >
          <div>
            <div className="flex items-center justify-between mb-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700 border border-blue-200/70 group-hover:bg-blue-600 group-hover:text-white transition">
                <FileText className="h-5 w-5 stroke-[2]" />
              </div>
              <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md">
                Semester Papers
              </span>
            </div>
            <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-blue-700 transition">
              Question Papers (PYQs)
            </h3>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Past year exam papers and question banks to prepare efficiently for exams.
            </p>
          </div>

          <div className="mt-3.5 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-600 group-hover:text-blue-700 transition">
            <span>View all papers</span>
            <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition" />
          </div>
        </Link>

        {/* Results Card */}
        <Link
          href="/results"
          className="group flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-4 shadow-2xs hover:border-amber-400 hover:shadow-xs transition duration-200 active:scale-[0.99] cursor-pointer"
        >
          <div>
            <div className="flex items-center justify-between mb-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-800 border border-amber-200/70 group-hover:bg-amber-600 group-hover:text-white transition">
                <BarChart3 className="h-5 w-5 stroke-[2]" />
              </div>
              <span className="text-[11px] font-semibold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-md">
                PU UMIS Portal
              </span>
            </div>
            <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-amber-800 transition">
              Check Examination Results
            </h3>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Direct access to download official semester marksheet using your Roll Number.
            </p>
          </div>

          <div className="mt-3.5 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-600 group-hover:text-amber-800 transition">
            <span>Open Result Portal</span>
            <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition" />
          </div>
        </Link>
      </div>
    </div>
  );
};
