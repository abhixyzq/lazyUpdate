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
            href="/syllabus"
            className="rounded-xl border border-blue-800/60 bg-[#0f2347] px-2.5 py-1.5 text-[11px] font-bold text-slate-300 hover:text-white hover:bg-[#152e59] transition shrink-0"
          >
            Subjects
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-xl px-3 pt-3 space-y-3.5">
        {/* Course Hero Card (Clean) */}
        <div className="rounded-3xl border border-blue-800/80 bg-gradient-to-r from-[#0a1e3d] to-[#07172e] p-4 shadow-xl">
          <div className="flex items-center gap-3.5">
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
              <h2 className="text-base sm:text-lg font-black text-white leading-tight truncate">
                {course.name}
              </h2>
              <p className="text-[11px] text-slate-300 mt-1">
                {course.totalSemesters} Semesters • {totalPapers} Papers Total
              </p>
            </div>
          </div>
        </div>

        {/* Semesters Grid */}
        <div className="space-y-2.5">
          <h3 className="text-xs font-black uppercase tracking-wider text-cyan-300 px-1">
            Select Semester
          </h3>

          {/* 2-Column (Mobile) / 4-Column (Tablet+) Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {course.semesters.map((sem) => {
              const totalCredits = sem.papers.reduce((sum, p) => sum + (p.credits || 0), 0);

              return (
                <Link
                  key={sem.semester}
                  href={`/syllabus/${course.id}/sem-${sem.semester}`}
                  className="group flex flex-col items-center justify-center rounded-2xl border border-blue-900/70 bg-[#091b36] p-3 shadow-md hover:border-cyan-400 hover:bg-[#0f284e] active:scale-95 transition duration-150 text-center"
                >
                  {/* Semester Book Icon Squircle */}
                  <div className="mb-2 transition group-hover:scale-105">
                    <SemesterBookIcon className="h-7 w-7" />
                  </div>

                  {/* Bold Semester Ordinal */}
                  <span className="text-xs sm:text-sm font-black text-white group-hover:text-cyan-200">
                    {getOrdinal(sem.semester)} Sem
                  </span>

                  {/* Paper Count & Credits Badge */}
                  <span className="text-[10px] text-slate-400 mt-0.5">
                    {sem.papers.length} Papers • {totalCredits} Cr
                  </span>
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
            Back to All Subjects
          </Link>
        </div>
      </main>
    </div>
  );
};
