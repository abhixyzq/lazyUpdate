'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { SubpageHeader } from '@/components/SubpageHeader';
import { puCompleteSyllabusData, puFacultyList } from '@/data/puSyllabusComplete';
import { getCourseVectorIcon } from '@/components/SyllabusCourseIcons';
import {
  Search,
  BookOpen,
  Sparkles,
  ChevronRight,
  FileDown,
  GraduationCap,
  Layers,
} from 'lucide-react';

export default function SyllabusCoursesPage() {
  const [selectedFaculty, setSelectedFaculty] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Filter courses based on faculty and search query
  const filteredCourses = useMemo(() => {
    return puCompleteSyllabusData.filter((course) => {
      const matchesFaculty =
        selectedFaculty === 'All' || course.faculty === selectedFaculty;
      const matchesSearch =
        course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.shortCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesFaculty && matchesSearch;
    });
  }, [selectedFaculty, searchQuery]);

  return (
    <div className="min-h-screen bg-transparent text-white pb-16">
      {/* 1. Top Subpage Header */}
      <SubpageHeader title="PU Syllabus (FYUGP CBCS)" />

      <main className="mx-auto max-w-xl px-3 pt-3 space-y-3.5">
        
        {/* Step Indicator */}
        <div className="flex items-center justify-between px-1 text-xs">
          <div className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-400 text-[10px] font-black text-slate-950">
              1
            </span>
            <span className="font-black text-cyan-300 uppercase tracking-wider text-[11px]">
              Step 1: Choose Your Course
            </span>
          </div>
          <span className="text-[10px] font-bold text-slate-400">
            {puCompleteSyllabusData.length} Subjects Active
          </span>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search subject (e.g. History, Economics, Geography)..."
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
                {fac.name} {fac.count !== '0 Subjects' && fac.count !== '0 Groups' && fac.count !== '0 Courses' && fac.count !== '0 Modules' ? `(${fac.count.split(' ')[0]})` : ''}
              </button>
            );
          })}
        </div>

        {/* Important Info Card */}
        <div className="rounded-2xl border border-blue-800/60 bg-gradient-to-r from-[#0a1e3d] to-[#0d2852] p-3 shadow-lg flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-400/20 text-amber-300 border border-amber-400/30 shrink-0">
              <Sparkles className="h-4 w-4" />
            </div>
            <div>
              <h4 className="text-xs font-black text-white">
                Raj Bhavan Bihar FYUGP Syllabus
              </h4>
              <p className="text-[10px] text-slate-300 leading-tight">
                Uniform 4-Year CBCS curriculum for Patna University (PU).
              </p>
            </div>
          </div>
          <a
            href="https://www.pup.ac.in/UnderGraduateCourse.aspx"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 rounded-lg bg-blue-950/80 border border-cyan-500/40 px-2 py-1 text-[10px] font-black text-cyan-300 hover:bg-cyan-500 hover:text-slate-950 transition shrink-0"
          >
            <FileDown className="h-3 w-3" />
            Official
          </a>
        </div>

        {/* Course Cards Grid */}
        <div className="space-y-2.5">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => {
              const totalPapers = course.semesters.reduce(
                (sum, s) => sum + s.papers.length,
                0
              );

              return (
                <Link
                  key={course.id}
                  href={`/syllabus/${course.id}`}
                  className="group block rounded-2xl border border-blue-900/80 bg-[#091a36] p-3.5 shadow-md hover:border-cyan-400 hover:bg-[#0c2247] active:scale-98 transition duration-150"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      {/* Course Vector Icon */}
                      <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-white p-1.5 shadow-md shrink-0 border border-slate-200 group-hover:scale-105 transition">
                        {getCourseVectorIcon(course.id, 'h-9 w-9')}
                      </div>

                      {/* Course Info */}
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 flex-wrap mb-0.5">
                          <span className="text-[10px] font-black uppercase tracking-wider text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded-md border border-cyan-500/30">
                            {course.faculty}
                          </span>
                          <span className="text-[10px] font-bold text-amber-300 bg-amber-950/60 px-2 py-0.5 rounded-md border border-amber-500/30">
                            {course.degree}
                          </span>
                        </div>
                        <h3 className="text-sm sm:text-base font-black text-white group-hover:text-cyan-300 transition truncate">
                          {course.name}
                        </h3>
                        <p className="text-[11px] text-slate-400 flex items-center gap-3 mt-1">
                          <span className="flex items-center gap-1">
                            <Layers className="h-3 w-3 text-cyan-400" />
                            {course.totalSemesters} Semesters
                          </span>
                          <span className="flex items-center gap-1">
                            <BookOpen className="h-3 w-3 text-emerald-400" />
                            {totalPapers} Papers
                          </span>
                        </p>
                      </div>
                    </div>

                    {/* Right Arrow */}
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-900/40 text-cyan-400 border border-blue-800 group-hover:bg-cyan-500 group-hover:text-slate-950 transition shrink-0">
                      <ChevronRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              );
            })
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

        {/* Special Downloads Footer Card */}
        <div className="rounded-2xl border border-blue-900/60 bg-[#081830] p-3 text-center space-y-1.5">
          <p className="text-[11px] text-slate-300">
            Need Research Methodology or Common NEP papers?
          </p>
          <a
            href="https://www.pup.ac.in/download/research%20methodology%2020231219808584518.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-black text-cyan-300 hover:text-cyan-200 underline"
          >
            <FileDown className="h-3.5 w-3.5" />
            Download Official Research Methodology Syllabus (PDF)
          </a>
        </div>

      </main>
    </div>
  );
}
