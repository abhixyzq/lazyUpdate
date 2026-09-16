'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { SubpageHeader } from '@/components/SubpageHeader';
import { puCompleteSyllabusData, puFacultyList } from '@/data/puSyllabusComplete';
import { getCourseVectorIcon } from '@/components/SyllabusCourseIcons';
import { Search } from 'lucide-react';

export default function SyllabusCoursesPage() {
  const [selectedFaculty, setSelectedFaculty] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Section config matching official PU faculties
  const SECTIONS_CONFIG = useMemo(
    () => [
      {
        id: 'Social Science',
        name: 'Faculty of Social Science',
        icon: '🏛️',
      },
      {
        id: 'Humanities',
        name: 'Faculty of Humanities',
        icon: '📚',
      },
      {
        id: 'Science',
        name: 'Faculty of Science',
        icon: '🔬',
      },
      {
        id: 'Commerce',
        name: 'Faculty of Commerce',
        icon: '💼',
      },
      {
        id: 'Vocational',
        name: 'Vocational & Professional Courses',
        icon: '💻',
      },
      {
        id: 'Common NEP',
        name: 'Compulsory NEP Modules (AEDP, AEC & MDC)',
        icon: '🎯',
      },
    ],
    []
  );

  // Group filtered courses by faculty section
  const sectionsToDisplay = useMemo(() => {
    const targetSections =
      selectedFaculty === 'All'
        ? SECTIONS_CONFIG
        : SECTIONS_CONFIG.filter((s) => s.id === selectedFaculty);

    return targetSections
      .map((sec) => {
        const courses = puCompleteSyllabusData.filter((c) => {
          const matchesFaculty = c.faculty === sec.id;
          const matchesSearch =
            !searchQuery ||
            c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            c.shortCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
            c.description.toLowerCase().includes(searchQuery.toLowerCase());
          return matchesFaculty && matchesSearch;
        });

        return {
          ...sec,
          badge: `${courses.length} ${courses.length === 1 ? 'Subject' : 'Subjects'}`,
          courses,
        };
      })
      .filter((sec) => sec.courses.length > 0);
  }, [selectedFaculty, searchQuery, SECTIONS_CONFIG]);

  return (
    <div className="min-h-screen bg-transparent text-white pb-16">
      {/* 1. Top Subpage Header */}
      <SubpageHeader title="PU Syllabus (FYUGP CBCS)" />

      <main className="mx-auto max-w-xl px-3 pt-3 space-y-3.5">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search subject (e.g. History, Physics, Economics)..."
            className="w-full rounded-2xl border border-blue-900/80 bg-[#091a36] py-2.5 pl-10 pr-4 text-xs font-semibold text-white placeholder-slate-400 shadow-inner outline-hidden focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[10px] font-black text-slate-400 hover:text-white"
            >
              Clear
            </button>
          )}
        </div>

        {/* Faculty Category Filter Chips */}
        <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {puFacultyList.map((fac) => {
            const isSelected = selectedFaculty === fac.id;
            return (
              <button
                key={fac.id}
                onClick={() => setSelectedFaculty(fac.id)}
                className={`whitespace-nowrap rounded-xl px-3 py-1.5 text-xs font-black transition-all duration-150 shrink-0 ${
                  isSelected
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20 scale-102 border border-cyan-300/40'
                    : 'bg-[#0f2347] text-slate-300 border border-blue-900/60 hover:bg-[#152e59] hover:text-white'
                }`}
              >
                {fac.name} {!fac.count.startsWith('0') ? `(${fac.count.split(' ')[0]})` : ''}
              </button>
            );
          })}
        </div>

        {/* Section-Wise Course Catalog (Organized in Clean 3-Column Grid) */}
        <div className="space-y-4">
          {sectionsToDisplay.length > 0 ? (
            sectionsToDisplay.map((sec) => (
              <div
                key={sec.id}
                className="rounded-3xl border border-blue-900/80 bg-[#081830] p-3.5 sm:p-4 shadow-xl space-y-3"
              >
                {/* Section Header with Icon and Count Badge */}
                <div className="flex items-center justify-between border-b border-blue-800/60 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-base sm:text-lg">{sec.icon}</span>
                    <h3 className="text-xs sm:text-sm font-black uppercase tracking-wider text-white">
                      {sec.name}
                    </h3>
                  </div>
                  <span className="rounded-full border border-cyan-500/30 bg-cyan-950/70 px-2.5 py-0.5 text-[10px] font-bold text-cyan-300">
                    {sec.badge}
                  </span>
                </div>

                {/* 3-Column Grid for courses belonging to this section */}
                <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
                  {sec.courses.map((course) => (
                    <Link
                      key={course.id}
                      href={`/syllabus/${course.id}`}
                      className="group flex flex-col items-center justify-center rounded-2xl border border-blue-900/70 bg-[#091b36] p-2.5 sm:p-3 shadow-md hover:border-cyan-400 hover:bg-[#0f284e] active:scale-95 transition duration-150 text-center"
                    >
                      {/* Clean White Squircle containing the vector icon */}
                      <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-white p-1.5 shadow-md transition-all duration-200 group-hover:scale-105 group-hover:shadow-cyan-400/20">
                        {getCourseVectorIcon(course.id, 'h-9 w-9 sm:h-10 sm:w-10')}
                      </div>

                      {/* Bold Course Short Code */}
                      <span className="mt-2 text-center text-xs font-black text-white tracking-tight leading-tight line-clamp-2 max-w-full group-hover:text-cyan-200">
                        {course.shortCode}
                      </span>

                      {/* Degree / Type Subtitle */}
                      <span className="text-[10px] text-slate-400 line-clamp-1 mt-0.5">
                        {course.degree ? course.degree.split(' ')[0] : course.faculty}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="rounded-2xl border border-dashed border-blue-800/80 bg-[#081830]/80 p-8 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/20 text-2xl text-cyan-400 mb-2">
                🔍
              </div>
              <h4 className="text-sm font-black text-white">
                No subjects found
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                Try searching with a different keyword or selecting &quot;All&quot;.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
