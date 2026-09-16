'use client';

import React from 'react';
import { puCollegesData } from '@/data/puColleges';
import { Building2, Search, X } from 'lucide-react';

interface CollegeFilterProps {
  selectedCollege: string;
  onSelectCollege: (id: string) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

export const CollegeFilter: React.FC<CollegeFilterProps> = ({
  selectedCollege,
  onSelectCollege,
  searchQuery,
  onSearchChange,
}) => {
  return (
    <div className="mx-auto max-w-7xl px-3 sm:px-6 pt-3 pb-2 space-y-2.5">
      
      {/* Search Input Bar */}
      <div className="relative w-full">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <Search className="h-4 w-4 text-slate-400" />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search PU notices, courses (e.g. Sem 2 Exam Form, B.Sc Physics, BCA, Result)..."
          className="w-full rounded-xl border border-slate-300 bg-white pl-9 pr-9 py-2 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-slate-800 dark:bg-slate-900 dark:text-white dark:placeholder-slate-500 transition shadow-2xs"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* College Horizontal Scroll Filter Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 scrollbar-none text-xs">
        <div className="flex items-center gap-1 text-slate-400 dark:text-slate-500 shrink-0 pr-1 font-semibold text-[11px]">
          <Building2 className="h-3.5 w-3.5 text-blue-600" />
          <span className="hidden sm:inline">College:</span>
        </div>
        
        {puCollegesData.map((col) => {
          const isSelected = selectedCollege === col.id;
          return (
            <button
              key={col.id}
              onClick={() => onSelectCollege(col.id)}
              className={`shrink-0 rounded-lg px-2.5 py-1 font-bold transition duration-150 ${
                isSelected
                  ? 'bg-blue-600 text-white shadow-2xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800/80 dark:text-slate-300 dark:hover:bg-slate-800'
              }`}
            >
              {col.shortName}
            </button>
          );
        })}
      </div>

    </div>
  );
};
