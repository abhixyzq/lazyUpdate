'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { SubpageHeader } from '@/components/SubpageHeader';
import { puCompleteSyllabusData, puFacultyList } from '@/data/puSyllabusComplete';
import { getCourseVectorIcon } from '@/components/SyllabusCourseIcons';
import {
  Search,
  Landmark,
  BookOpen,
  Atom,
  Briefcase,
  Laptop,
  GraduationCap,
  ChevronRight,
  BookMarked,
  X,
} from 'lucide-react';
import { BottomNav } from '@/components/BottomNav';
import { stripHindiTranslations } from '@/utils/syllabusTopicParser';

export default function SyllabusCoursesPage() {
  const [selectedFaculty, setSelectedFaculty] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Section config matching official PU faculties with clean Lucide icons
  const SECTIONS_CONFIG = useMemo(
    () => [
      {
        id: 'Social Science',
        name: 'Faculty of Social Science',
        IconComponent: Landmark,
      },
      {
        id: 'Humanities',
        name: 'Faculty of Humanities',
        IconComponent: BookOpen,
      },
      {
        id: 'Science',
        name: 'Faculty of Science',
        IconComponent: Atom,
      },
      {
        id: 'Commerce',
        name: 'Faculty of Commerce',
        IconComponent: Briefcase,
      },
      {
        id: 'Vocational',
        name: 'Vocational & Professional Courses',
        IconComponent: Laptop,
      },
      {
        id: 'Common NEP',
        name: 'Compulsory NEP Modules (AEDP, AEC & MDC)',
        IconComponent: GraduationCap,
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
    <div className="min-h-screen bg-[#fafbfc] text-slate-900 pb-28 sm:pb-20">
      {/* 1. Universal Subpage Header */}
      <SubpageHeader title="PU Syllabus" />

      <main className="mx-auto max-w-xl px-4 pt-3 space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search subject (e.g. History, Physics, Economics)..."
            className="w-full rounded-2xl border border-slate-200/80 bg-white py-2.5 pl-10 pr-9 text-xs font-medium text-slate-900 placeholder-slate-400 shadow-2xs outline-hidden focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-700 transition"
              title="Clear search"
            >
              <X className="h-3.5 w-3.5" />
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
                className={`whitespace-nowrap rounded-xl px-3 py-1.5 text-xs font-semibold transition-all duration-150 shrink-0 ${
                  isSelected
                    ? 'bg-emerald-700 text-white shadow-2xs'
                    : 'bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                {fac.name} {!fac.count.startsWith('0') ? `(${fac.count.split(' ')[0]})` : ''}
              </button>
            );
          })}
        </div>

        {/* Section-Wise Course Catalog */}
        <div className="space-y-5">
          {sectionsToDisplay.length > 0 ? (
            sectionsToDisplay.map((sec) => {
              const Icon = sec.IconComponent;
              return (
                <div key={sec.id} className="space-y-2.5">
                  {/* Section Title Header */}
                  <div className="flex items-center justify-between px-1">
                    <div className="flex items-center gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
                        <Icon className="h-3.5 w-3.5 stroke-[2.2]" />
                      </div>
                      <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                        {sec.name}
                      </h3>
                    </div>
                    <span className="rounded-full border border-emerald-200/60 bg-emerald-50/70 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-800">
                      {sec.badge}
                    </span>
                  </div>

                  {/* 2 Columns in One Row Card Grid */}
                  <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
                    {sec.courses.map((course) => (
                      <Link
                        key={course.id}
                        href={`/syllabus/${course.id}`}
                        className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/70 bg-white p-3 shadow-2xs hover:border-emerald-500/50 hover:shadow-xs active:scale-98 transition duration-150"
                      >
                        <div className="flex items-start justify-between gap-1.5">
                          <div className="h-9 w-9 shrink-0 transition-transform duration-150 group-hover:scale-105">
                            {getCourseVectorIcon(course.id, 'h-4 w-4 sm:h-5 sm:w-5')}
                          </div>
                          <ChevronRight className="h-3.5 w-3.5 text-slate-300 group-hover:text-emerald-600 group-hover:translate-x-0.5 transition shrink-0 mt-0.5" />
                        </div>

                        <div className="mt-2.5 min-w-0">
                          <h4 className="text-xs font-semibold text-slate-900 group-hover:text-emerald-700 transition line-clamp-2 leading-snug">
                            {stripHindiTranslations(course.name)}
                          </h4>
                          <div className="flex items-center gap-1 mt-1 text-[10px] text-slate-400 font-normal truncate">
                            <span>{course.shortCode}</span>
                            <span>•</span>
                            <span>{course.totalSemesters} Sems</span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })
          ) : (
            <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-8 text-center">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-slate-400 mb-2">
                <Search className="h-5 w-5" />
              </div>
              <h4 className="text-xs font-semibold text-slate-800">
                No subjects found
              </h4>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Try searching with a different keyword or selecting &quot;All&quot;.
              </p>
            </div>
          )}
        </div>
      </main>

      {/* Persistent Bottom Nav */}
      <BottomNav />
    </div>
  );
}
