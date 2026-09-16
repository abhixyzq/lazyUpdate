'use client';

import React from 'react';
import Link from 'next/link';
import { CourseSyllabus } from '@/types';
import {
  getCourseVectorIcon,
  SemesterBookIcon,
} from '@/components/SyllabusCourseIcons';
import {
  ArrowLeft,
  FileDown,
  Layers,
  ChevronRight,
} from 'lucide-react';

interface CourseSemesterViewProps {
  course: CourseSyllabus;
}

const getOrdinal = (n: number) => {
  const s = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
};

export const CourseSemesterView: React.FC<CourseSemesterViewProps> = ({ course }) => {
  const totalPapers = course.semesters.reduce((sum, s) => sum + s.papers.length, 0);

  return (
    <div className="min-h-screen bg-transparent text-white pb-16">
      {/* 1. Subpage Sticky Header */}
      <header className="sticky top-0 z-40 border-b border-blue-900/60 bg-[#07172e]/95 backdrop-blur-md px-3 py-3">
        <div className="mx-auto flex max-w-xl items-center justify-between gap-3">
          <Link
            href="/syllabus"
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-900/40 text-cyan-300 border border-blue-800/80 hover:bg-cyan-500 hover:text-slate-950 transition active:scale-95 shrink-0"
          >
            <ArrowLeft className="h-4 w-4" />
          </Link>
          <div className="text-center min-w-0 flex-1">
            <h1 className="text-sm font-black text-white truncate">
              {course.shortCode} Syllabus
            </h1>
            <p className="text-[10px] font-bold text-cyan-400 truncate">
              {course.degree}
            </p>
          </div>
          <Link
            href="/"
            className="rounded-xl border border-blue-800/60 bg-[#0f2347] px-2.5 py-1.5 text-[11px] font-bold text-slate-300 hover:text-white hover:bg-[#152e59] transition shrink-0"
          >
            Home
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-xl px-3 pt-3 space-y-3.5">
        
        {/* Step 2 Indicator */}
        <div className="flex items-center justify-between px-1 text-xs">
          <div className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-400 text-[10px] font-black text-slate-950">
              2
            </span>
            <span className="font-black text-cyan-300 uppercase tracking-wider text-[11px]">
              Step 2: Select Semester
            </span>
          </div>
          <Link
            href="/syllabus"
            className="text-[11px] font-black text-cyan-400 hover:text-cyan-300 transition underline"
          >
            Change Subject
          </Link>
        </div>

        {/* Course Hero Card */}
        <div className="rounded-3xl border border-blue-800/80 bg-gradient-to-r from-[#0a1e3d] to-[#07172e] p-4 shadow-xl space-y-3">
          <div className="flex items-start gap-3.5">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white p-2 shadow-md shrink-0 border border-slate-200">
              {getCourseVectorIcon(course.id, 'h-10 w-10')}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <span className="text-[10px] font-black uppercase tracking-wider text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded-md border border-cyan-500/30">
                  {course.faculty}
                </span>
                <span className="text-[10px] font-bold text-amber-300 bg-amber-950/60 px-2 py-0.5 rounded-md border border-amber-500/30">
                  {course.degree}
                </span>
              </div>
              <h2 className="text-base sm:text-lg font-black text-white leading-tight">
                {course.name}
              </h2>
              <p className="text-[11px] text-slate-300 mt-1 line-clamp-2 leading-relaxed">
                {course.description}
              </p>
            </div>
          </div>

          {/* Quick Stats Strip */}
          <div className="grid grid-cols-3 gap-2 pt-2 border-t border-blue-900/60 text-center">
            <div className="rounded-xl bg-blue-950/60 border border-blue-900/60 py-1.5 px-2">
              <span className="text-[10px] text-slate-400 block font-semibold">Total Semesters</span>
              <span className="text-xs font-black text-white">{course.totalSemesters} Semesters</span>
            </div>
            <div className="rounded-xl bg-blue-950/60 border border-blue-900/60 py-1.5 px-2">
              <span className="text-[10px] text-slate-400 block font-semibold">Total Papers</span>
              <span className="text-xs font-black text-cyan-300">{totalPapers} Papers</span>
            </div>
            <div className="rounded-xl bg-blue-950/60 border border-blue-900/60 py-1.5 px-2">
              <span className="text-[10px] text-slate-400 block font-semibold">Curriculum</span>
              <span className="text-xs font-black text-emerald-300">CBCS / NEP</span>
            </div>
          </div>

          {/* Official PDFs Download Bar */}
          {course.officialPdfs && (
            <div className="space-y-1.5 pt-1">
              <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">
                Official Patna University Syllabus Downloads:
              </span>
              <div className="grid grid-cols-2 gap-2">
                {course.officialPdfs.sem1_2 && (
                  <a
                    href={course.officialPdfs.sem1_2}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 rounded-xl border border-cyan-500/40 bg-[#0d274c] py-2 px-2 text-center text-xs font-bold text-cyan-300 shadow-sm hover:bg-cyan-500 hover:text-slate-950 transition active:scale-95"
                  >
                    <FileDown className="h-3.5 w-3.5 shrink-0" />
                    <span>SEM 1 & 2 (PDF)</span>
                  </a>
                )}
                {course.officialPdfs.sem3_8 && (
                  <a
                    href={course.officialPdfs.sem3_8}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 rounded-xl border border-blue-500/40 bg-[#0d274c] py-2 px-2 text-center text-xs font-bold text-blue-300 shadow-sm hover:bg-blue-500 hover:text-white transition active:scale-95"
                  >
                    <FileDown className="h-3.5 w-3.5 shrink-0" />
                    <span>SEM 3 to 8 (PDF)</span>
                  </a>
                )}
              </div>
            </div>
          )}
        </div>

        {/* 8-Semester Cards Grid */}
        <div className="space-y-2.5">
          <div className="flex items-center justify-between px-1">
            <h3 className="text-xs font-black uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
              <Layers className="h-3.5 w-3.5 text-cyan-400" />
              All 8 Semesters
            </h3>
            <span className="text-[10px] font-bold text-slate-400">
              Click a semester to view syllabus
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {course.semesters.map((sem) => {
              const totalCredits = sem.papers.reduce((sum, p) => sum + (p.credits || 0), 0);
              const paperCodes = sem.papers.map((p) => p.code).slice(0, 4).join(', ');

              return (
                <Link
                  key={sem.semester}
                  href={`/syllabus/${course.id}/sem-${sem.semester}`}
                  className="group rounded-2xl border border-blue-900/80 bg-[#091a36] p-3.5 shadow-md hover:border-cyan-400 hover:bg-[#0d254a] active:scale-98 transition flex flex-col justify-between"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2.5">
                      <SemesterBookIcon className="h-6 w-6" />
                      <div>
                        <h4 className="text-sm font-black text-white group-hover:text-cyan-300 transition">
                          {getOrdinal(sem.semester)} Semester
                        </h4>
                        <span className="text-[11px] font-bold text-cyan-400">
                          {sem.papers.length} Papers • {totalCredits} Credits
                        </span>
                      </div>
                    </div>
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-900/40 text-cyan-400 border border-blue-800 group-hover:bg-cyan-500 group-hover:text-slate-950 transition shrink-0">
                      <ChevronRight className="h-3.5 w-3.5" />
                    </div>
                  </div>

                  <div className="rounded-xl bg-[#061226]/80 p-2 border border-blue-900/50 mt-1">
                    <span className="text-[10px] font-semibold text-slate-400 block truncate">
                      Includes: {paperCodes}{sem.papers.length > 4 ? '...' : ''}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Back Link */}
        <div className="pt-2 text-center">
          <Link
            href="/syllabus"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-white transition"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to All Courses
          </Link>
        </div>

      </main>
    </div>
  );
};
