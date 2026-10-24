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
        className="w-full flex items-center justify-between rounded-2xl border border-slate-200/90 bg-white px-3.5 py-2.5 text-left shadow-2xs hover:border-emerald-500 hover:shadow-xs transition group cursor-pointer"
      >
        <div className="flex items-center gap-2.5 text-slate-500 group-hover:text-slate-800 transition">
          <Search className="h-4.5 w-4.5 stroke-[2.2] text-emerald-600 group-hover:text-emerald-700 transition" />
          <span className="text-xs sm:text-[13px] font-medium text-slate-500 group-hover:text-slate-800">
            Search syllabus, PYQs, notices...
          </span>
        </div>
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-100 text-slate-600 border border-slate-200 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 transition">
          <SlidersHorizontal className="h-3.5 w-3.5 stroke-[2]" />
        </div>
      </button>
    </div>
  );
};
