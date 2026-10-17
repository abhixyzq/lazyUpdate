'use client';

import React from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';

interface SearchInputBarProps {
  onOpenSearch: () => void;
}

export const SearchInputBar: React.FC<SearchInputBarProps> = ({ onOpenSearch }) => {
  return (
    <div className="mx-auto max-w-xl px-3 pt-3">
      <button
        onClick={onOpenSearch}
        type="button"
        className="w-full flex items-center justify-between rounded-2xl border border-emerald-200/80 bg-white/90 backdrop-blur-md px-3.5 py-2.5 text-left shadow-[0_2px_12px_-1px_rgba(16,185,129,0.06)] hover:border-emerald-400 hover:shadow-xs transition group"
      >
        <div className="flex items-center gap-2.5 text-slate-500 group-hover:text-slate-700 transition">
          <Search className="h-4 w-4 stroke-[2] text-emerald-600 group-hover:text-emerald-700 transition" />
          <span className="text-xs sm:text-[13px] font-normal text-slate-500">
            Search syllabus, PYQs, notices...
          </span>
        </div>
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-100 group-hover:bg-emerald-600 group-hover:text-white transition">
          <SlidersHorizontal className="h-3.5 w-3.5 stroke-[1.9]" />
        </div>
      </button>
    </div>
  );
};
