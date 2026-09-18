'use client';

import React, { useState, useMemo } from 'react';
import { puSyllabusPYQData } from '@/data/puSyllabusPYQ';
import { SyllabusPYQItem } from '@/types';
import {
  BookOpen,
  FileDown,
  Search,
  Filter,
  GraduationCap,
  Calendar,
  Sparkles,
  FileText,
  Clock
} from 'lucide-react';

export const SyllabusPYQView: React.FC = () => {
  const [activeStream, setActiveStream] = useState<'All' | 'Science' | 'Arts' | 'Commerce' | 'Vocational'>('All');
  const [activeType, setActiveType] = useState<'all' | 'syllabus' | 'pyq'>('all');
  const [selectedSemester, setSelectedSemester] = useState<number | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(() => {
    return puSyllabusPYQData.filter((item) => {
      if (activeStream !== 'All' && item.stream !== activeStream) return false;
      if (activeType !== 'all' && item.type !== activeType) return false;
      if (selectedSemester !== 'all' && item.semester !== selectedSemester) return false;

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(q);
        const matchesCourse = item.course.toLowerCase().includes(q);
        const matchesSubject = item.subject.toLowerCase().includes(q);
        return matchesTitle || matchesCourse || matchesSubject;
      }

      return true;
    });
  }, [activeStream, activeType, selectedSemester, searchQuery]);

  return (
    <div className="mx-auto max-w-7xl px-3 sm:px-6 py-4 space-y-4">
      
      {/* Header Banner */}
      <div className="rounded-2xl border border-purple-200/80 bg-gradient-to-r from-purple-50 via-indigo-50 to-blue-50 p-4 sm:p-6 dark:border-purple-900/40 dark:from-purple-950/30 dark:via-slate-900 dark:to-indigo-950/30 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-purple-700 dark:text-purple-300">
              <BookOpen className="h-4 w-4" />
              <span>Patna University Academic Repository</span>
            </div>
            <h1 className="mt-1 text-xl sm:text-2xl font-black tracking-tight text-slate-900 dark:text-white">
              Syllabus & Previous Year Question Papers (PYQs)
            </h1>
            <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-2xl">
              Official syllabi and past semester examination question papers for B.A., B.Sc, B.Com, BCA & BBA with 1-click PDF download.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="rounded-xl bg-purple-600 px-3 py-1.5 text-xs font-black text-white shadow-xs">
              Updated Syllabi
            </span>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="mt-4 pt-3 border-t border-purple-200/60 dark:border-purple-900/40 grid grid-cols-1 md:grid-cols-4 gap-2.5">
          
          {/* Search Input */}
          <div className="relative md:col-span-2">
            <Search className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by subject, course (e.g. Calculus, Physics, C Programming, History)..."
              className="w-full rounded-xl border border-slate-300 bg-white pl-9 pr-4 py-2 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white shadow-2xs"
            />
          </div>

          {/* Type Selector (All / Syllabus / PYQ) */}
          <div className="flex rounded-xl border border-slate-300 bg-white p-1 dark:border-slate-700 dark:bg-slate-900 text-xs font-bold">
            <button
              onClick={() => setActiveType('all')}
              className={`flex-1 rounded-lg py-1.5 transition ${
                activeType === 'all'
                  ? 'bg-purple-600 text-white shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-300'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveType('syllabus')}
              className={`flex-1 rounded-lg py-1.5 transition ${
                activeType === 'syllabus'
                  ? 'bg-purple-600 text-white shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-300'
              }`}
            >
              Syllabus
            </button>
            <button
              onClick={() => setActiveType('pyq')}
              className={`flex-1 rounded-lg py-1.5 transition ${
                activeType === 'pyq'
                  ? 'bg-purple-600 text-white shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-300'
              }`}
            >
              PYQs
            </button>
          </div>

          {/* Semester Selector */}
          <select
            value={selectedSemester}
            onChange={(e) =>
              setSelectedSemester(e.target.value === 'all' ? 'all' : Number(e.target.value))
            }
            className="rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs font-bold text-slate-800 dark:border-slate-700 dark:bg-slate-900 dark:text-white shadow-2xs focus:outline-none"
          >
            <option value="all">All Semesters</option>
            <option value="1">Semester 1 (1st Sem)</option>
            <option value="2">Semester 2 (2nd Sem)</option>
            <option value="3">Semester 3 (3rd Sem)</option>
            <option value="4">Semester 4 (4th Sem)</option>
          </select>
        </div>

        {/* Stream Pills */}
        <div className="mt-3 flex items-center gap-1.5 overflow-x-auto text-xs font-bold">
          {(['All', 'Science', 'Arts', 'Commerce', 'Vocational'] as const).map((stream) => (
            <button
              key={stream}
              onClick={() => setActiveStream(stream)}
              className={`rounded-lg px-3 py-1.5 transition shrink-0 ${
                activeStream === stream
                  ? 'bg-purple-700 text-white shadow-xs'
                  : 'bg-white/80 text-slate-700 hover:bg-white dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
              }`}
            >
              {stream === 'All' ? 'All Faculties' : stream}
            </button>
          ))}
        </div>

      </div>

      {/* Grid of Syllabus & PYQ Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-4 shadow-xs dark:border-slate-800 dark:bg-slate-900 hover:shadow-md hover:border-purple-300 dark:hover:border-purple-800 transition"
          >
            {/* Top Row: Stream & Type Badge */}
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="rounded-md bg-purple-100 px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wide text-purple-700 dark:bg-purple-950/80 dark:text-purple-300 border border-purple-200/60 dark:border-purple-800/40">
                  {item.stream} • Sem {item.semester}
                </span>

                <span
                  className={`rounded-md px-2 py-0.5 text-[10px] font-black uppercase tracking-wide ${
                    item.type === 'pyq'
                      ? 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300'
                      : 'bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300'
                  }`}
                >
                  {item.type === 'pyq' ? `PYQ ${item.year || ''}` : 'Syllabus'}
                </span>
              </div>

              {/* Title */}
              <h3 className="mt-2 text-sm font-black text-slate-900 dark:text-white leading-snug line-clamp-2">
                {item.title}
              </h3>

              {/* Subject details */}
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-400 font-medium line-clamp-1">
                {item.subject}
              </p>
            </div>

            {/* Bottom Row: File size & Download Button */}
            <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-2.5 dark:border-slate-800/80">
              <span className="text-[11px] font-semibold text-slate-400">
                PDF • {item.fileSize}
              </span>

              <a
                href={item.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-xl bg-purple-600 px-3 py-1.5 text-xs font-bold text-white shadow-2xs hover:bg-purple-700 active:scale-95 transition"
              >
                <FileDown className="h-3.5 w-3.5" />
                <span>Download PDF</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="rounded-2xl border border-dashed border-slate-300 p-12 text-center text-slate-500 dark:border-slate-800">
          <BookOpen className="mx-auto h-8 w-8 text-slate-400 mb-2 opacity-60" />
          <p className="text-sm font-bold">No syllabus or PYQ matches your filter.</p>
          <p className="text-xs text-slate-400 mt-1">Try resetting the semester or search term.</p>
        </div>
      )}

    </div>
  );
};
