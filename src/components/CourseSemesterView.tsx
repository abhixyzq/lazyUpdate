'use client';

import React from 'react';
import Link from 'next/link';
import { CourseSyllabus } from '@/types';
import {
  getCourseVectorIcon,
} from '@/components/SyllabusCourseIcons';
import {
  ArrowLeft,
  BookMarked,
  Layers,
  ChevronRight,
  GraduationCap,
} from 'lucide-react';
import { BottomNav } from '@/components/BottomNav';
import { stripHindiTranslations } from '@/utils/syllabusTopicParser';

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
    <div className="min-h-screen bg-[#fafbfc] text-slate-900 pb-28 sm:pb-20">
      {/* 1. Subpage Sticky Header */}
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur-md px-4 py-2.5">
        <div className="mx-auto flex max-w-xl items-center justify-between gap-3">
          <Link
            href="/syllabus"
            className="flex h-8 w-8 items-center justify-center rounded-xl bg-white text-slate-600 border border-slate-200/80 hover:border-emerald-300 hover:text-emerald-700 transition active:scale-95 shrink-0"
            title="Back to All Subjects"
          >
            <ArrowLeft className="h-4 w-4" />
          </Link>
          <div className="text-center min-w-0 flex-1">
            <h1 className="text-xs sm:text-sm font-bold text-slate-900 truncate">
              {course.shortCode} Syllabus
            </h1>
            <p className="text-[11px] font-medium text-emerald-700 truncate">
              {stripHindiTranslations(course.name)}
            </p>
          </div>
          <Link
            href="/syllabus"
            className="rounded-xl border border-slate-200/80 bg-white px-3 py-1 text-[11px] font-semibold text-slate-600 hover:border-emerald-300 hover:text-emerald-700 transition shrink-0"
          >
            All Subjects
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-xl px-4 pt-4 space-y-4">
        {/* Course Hero Card (Lightweight & Clean) */}
        <div className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-2xs">
          <div className="flex items-center gap-3.5">
            <div className="h-12 w-12 shrink-0 transition-transform duration-200">
              {getCourseVectorIcon(course.id, 'h-6 w-6')}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5 flex-wrap mb-1">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
                  {course.faculty}
                </span>
                <span className="text-[10px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                  NEP 4-Year CBCS
                </span>
              </div>
              <h2 className="text-sm sm:text-base font-bold text-slate-900 leading-tight">
                {stripHindiTranslations(course.name)}
              </h2>
              <div className="flex items-center gap-3 mt-1 text-[11px] text-slate-400 font-normal">
                <span>{course.totalSemesters} Semesters</span>
                <span>•</span>
                <span>{totalPapers} Papers Total</span>
              </div>
            </div>
          </div>
        </div>

        {/* Semesters Section */}
        <div className="space-y-2.5">
          <div className="flex items-center justify-between px-1">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">
              Select Semester
            </h3>
            <span className="text-[11px] text-slate-400">
              {course.totalSemesters} Semesters Available
            </span>
          </div>

          {/* 2-Column Responsive Grid */}
          <div className="grid grid-cols-2 gap-2.5">
            {course.semesters.map((sem) => {
              const totalCredits = sem.papers.reduce((sum, p) => sum + (p.credits || 0), 0);

              return (
                <Link
                  key={sem.semester}
                  href={`/syllabus/${course.id}/sem-${sem.semester}`}
                  className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/70 bg-white p-3.5 shadow-2xs hover:border-emerald-500/50 hover:shadow-xs active:scale-98 transition duration-150"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50/80 text-emerald-700 transition group-hover:scale-105">
                      <BookMarked className="h-4 w-4" />
                    </div>
                    <span className="text-[10px] font-semibold text-slate-400 bg-slate-50 px-2 py-0.5 rounded-md border border-slate-100">
                      Sem {sem.semester}
                    </span>
                  </div>

                  <div className="mt-3">
                    <h4 className="text-xs sm:text-sm font-semibold text-slate-900 group-hover:text-emerald-700 transition">
                      {getOrdinal(sem.semester)} Semester
                    </h4>
                    <p className="text-[11px] text-slate-400 mt-0.5 font-normal">
                      {sem.papers.length} Papers • {totalCredits} Credits
                    </p>
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
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-emerald-700 transition"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to All Subjects
          </Link>
        </div>
      </main>

      {/* Persistent Bottom Nav */}
      <BottomNav />
    </div>
  );
};
