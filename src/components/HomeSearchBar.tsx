'use client';

import React from 'react';
import Link from 'next/link';
import { Search } from 'lucide-react';

interface HomeSearchBarProps {
  onOpenSearch: () => void;
}

export const HomeSearchBar: React.FC<HomeSearchBarProps> = ({ onOpenSearch }) => {
  return (
    <div className="mx-auto max-w-xl px-4 pt-3">
      {/* Friendly Search Trigger */}
      <button
        onClick={onOpenSearch}
        type="button"
        className="w-full flex items-center justify-between rounded-2xl border border-slate-200/90 bg-white px-3.5 py-3 text-left shadow-2xs hover:border-emerald-500 hover:shadow-xs transition active:scale-[0.99] cursor-pointer"
      >
        <div className="flex items-center gap-3 text-slate-500">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
            <Search className="h-4 w-4 stroke-[2.2]" />
          </div>
          <span className="text-xs sm:text-sm font-medium text-slate-500">
            Search your subject, syllabus, papers or notices...
          </span>
        </div>
        <span className="hidden sm:inline-flex rounded-lg bg-slate-100 px-2 py-1 text-[11px] font-semibold text-slate-500">
          Search
        </span>
      </button>

      {/* Helpful College Quick Shortcuts */}
      <div className="flex items-center gap-1.5 mt-2.5 overflow-x-auto scrollbar-none pb-0.5">
        <Link
          href="/syllabus"
          className="inline-flex items-center rounded-lg bg-white border border-slate-200/90 px-2.5 py-1 text-[11px] font-semibold text-slate-700 hover:border-emerald-400 hover:text-emerald-800 transition shrink-0 shadow-2xs"
        >
          B.A Syllabus
        </Link>
        <Link
          href="/syllabus"
          className="inline-flex items-center rounded-lg bg-white border border-slate-200/90 px-2.5 py-1 text-[11px] font-semibold text-slate-700 hover:border-emerald-400 hover:text-emerald-800 transition shrink-0 shadow-2xs"
        >
          B.Sc Syllabus
        </Link>
        <Link
          href="/syllabus"
          className="inline-flex items-center rounded-lg bg-white border border-slate-200/90 px-2.5 py-1 text-[11px] font-semibold text-slate-700 hover:border-emerald-400 hover:text-emerald-800 transition shrink-0 shadow-2xs"
        >
          B.Com Syllabus
        </Link>
        <Link
          href="/pyqs"
          className="inline-flex items-center rounded-lg bg-white border border-slate-200/90 px-2.5 py-1 text-[11px] font-semibold text-slate-700 hover:border-emerald-400 hover:text-emerald-800 transition shrink-0 shadow-2xs"
        >
          Question Papers
        </Link>
        <Link
          href="/calendar"
          className="inline-flex items-center rounded-lg bg-white border border-slate-200/90 px-2.5 py-1 text-[11px] font-semibold text-slate-700 hover:border-emerald-400 hover:text-emerald-800 transition shrink-0 shadow-2xs"
        >
          Exam Dates
        </Link>
      </div>
    </div>
  );
};
