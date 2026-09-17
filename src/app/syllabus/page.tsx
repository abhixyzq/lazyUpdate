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
    <div className="min-h-screen bg-transparent text-slate-900 pb-16">
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
            className="w-full rounded-2xl border border-slate-200/90 bg-white py-2.5 pl-10 pr-4 text-xs font-semibold text-slate-900 placeholder-slate-400 shadow-xs outline-hidden focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[10px] font-black text-slate-400 hover:text-slate-700"
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
                    ? 'bg-slate-900 text-white shadow-xs scale-102 border border-slate-800'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-slate-900'
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
                className="rounded-3xl border border-slate-200/90 bg-white p-3.5 sm:p-4 shadow-sm space-y-3"
              >
                {/* Section Header with Icon and Count Badge */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-base sm:text-lg">{sec.icon}</span>
                    <h3 className="text-xs sm:text-sm font-black uppercase tracking-wider text-slate-900">
                      {sec.name}
                    </h3>
                  </div>
                  <span className="rounded-full border border-blue-200 bg-blue-50 px-2.5 py-0.5 text-[10px] font-bold text-blue-700">
                    {sec.badge}
                  </span>
                </div>

                {/* 3-Column Grid for courses belonging to this section */}
                <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
                  {sec.courses.map((course) => (
                    <Link
                      key={course.id}
                      href={`/syllabus/${course.id}`}
                      className="group flex flex-col items-center justify-center rounded-2xl border border-slate-200/80 bg-slate-50/70 p-2.5 sm:p-3 shadow-xs hover:border-blue-400 hover:bg-white hover:shadow-md active:scale-95 transition duration-150 text-center"
                    >
                      {/* Clean White Squircle containing the vector icon */}
                      <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-white border border-slate-200 shadow-xs p-1.5 transition-all duration-200 group-hover:scale-105 group-hover:shadow-blue-500/10">
                        {getCourseVectorIcon(course.id, 'h-9 w-9 sm:h-10 sm:w-10')}
                      </div>

                      {/* Bold Course Short Code */}
                      <span className="mt-2 text-center text-xs font-black text-slate-900 tracking-tight leading-tight line-clamp-2 max-w-full group-hover:text-blue-600">
                        {course.shortCode}
                      </span>

                      {/* Degree / Type Subtitle */}
                      <span className="text-[10px] text-slate-500 line-clamp-1 mt-0.5">
                        {course.degree ? course.degree.split(' ')[0] : course.faculty}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-2xl text-slate-500 mb-2">
                🔍
              </div>
              <h4 className="text-sm font-black text-slate-900">
                No subjects found
              </h4>
              <p className="text-xs text-slate-500 mt-1">
                Try searching with a different keyword or selecting &quot;All&quot;.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
