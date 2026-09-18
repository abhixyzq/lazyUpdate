'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { CourseSyllabus, SyllabusPaper } from '@/types';
import {
  ArrowLeft,
  BookOpen,
  Share2,
  Table,
  Award,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
} from 'lucide-react';
import { formatUnitTopics } from '@/utils/syllabusTopicParser';

interface SemesterDetailViewProps {
  course: CourseSyllabus;
  semesterNumber: number;
}

const getOrdinal = (n: number) => {
  const s = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
};

export const SemesterDetailView: React.FC<SemesterDetailViewProps> = ({
  course,
  semesterNumber,
}) => {
  const semesterData = useMemo(() => {
    return (
      course.semesters.find((s) => s.semester === semesterNumber) ||
      course.semesters[0]
    );
  }, [course, semesterNumber]);

  const [activePaperId, setActivePaperId] = useState<string>(
    semesterData.papers[0]?.id || ''
  );
  const [isCreditsTableOpen, setIsCreditsTableOpen] = useState<boolean>(false);

  // Active Paper
  const activePaper: SyllabusPaper | undefined = useMemo(() => {
    return (
      semesterData.papers.find((p) => p.id === activePaperId) ||
      semesterData.papers[0]
    );
  }, [semesterData, activePaperId]);

  // Paper Type Badge Helper
  const getPaperTypeBadge = (paperType: string) => {
    if (paperType.includes('Major'))
      return { label: 'Major', bg: 'bg-amber-50 text-amber-800 border-amber-200' };
    if (paperType.includes('Minor'))
      return { label: 'Minor', bg: 'bg-emerald-50 text-emerald-800 border-emerald-200' };
    if (paperType.includes('Multidisciplinary'))
      return { label: 'MDC', bg: 'bg-purple-50 text-purple-800 border-purple-200' };
    if (paperType.includes('Ability'))
      return { label: 'AEC', bg: 'bg-pink-50 text-pink-800 border-pink-200' };
    if (paperType.includes('Skill'))
      return { label: 'SEC', bg: 'bg-blue-50 text-blue-800 border-blue-200' };
    if (paperType.includes('Value Added'))
      return { label: 'VAC', bg: 'bg-orange-50 text-orange-800 border-orange-200' };
    if (paperType.includes('Internship'))
      return { label: 'Internship', bg: 'bg-teal-50 text-teal-800 border-teal-200' };
    if (paperType.includes('Research'))
      return { label: 'Research', bg: 'bg-indigo-50 text-indigo-800 border-indigo-200' };
    if (paperType.includes('Practical'))
      return { label: 'Practical', bg: 'bg-sky-50 text-sky-800 border-sky-200' };
    return { label: 'Core', bg: 'bg-slate-100 text-slate-800 border-slate-200' };
  };

  // Dynamic Semester Stats
  const semStats = useMemo(() => {
    const papers = semesterData.papers || [];
    const totalCredits = papers.reduce((sum, p) => sum + (p.credits || 0), 0);
    const totalTheory = papers.reduce((sum, p) => sum + (p.theoryMarks || 0), 0);
    const totalInternal = papers.reduce((sum, p) => sum + (p.internalMarks || 0), 0);
    return {
      totalCredits,
      totalTheory,
      totalInternal,
      grandTotal: totalTheory + totalInternal,
      paperCount: papers.length,
    };
  }, [semesterData]);

  // WhatsApp Share Handler
  const handleShare = () => {
    if (!activePaper) return;
    const shareText = `📖 *Patna University Syllabus*\n🎯 *Course:* ${course.name}\n📚 *Semester:* ${getOrdinal(semesterNumber)} Semester\n📝 *Paper:* ${activePaper.code} - ${activePaper.name}\n\nShared via Lazy PU - Patna University Student Portal`;
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;
    window.open(whatsappUrl, '_blank');
  };

  const prevSem = semesterNumber > 1 ? semesterNumber - 1 : null;
  const nextSem = semesterNumber < course.totalSemesters ? semesterNumber + 1 : null;

  return (
    <div className="min-h-screen bg-transparent text-slate-900 pb-16">
      {/* 1. Subpage Sticky Header */}
      <header className="sticky top-0 z-40 border-b border-slate-200/90 bg-white/95 backdrop-blur-md px-3 py-3">
        <div className="mx-auto flex max-w-xl items-center justify-between gap-3">
          <Link
            href={`/syllabus/${course.id}`}
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200 hover:text-slate-900 transition active:scale-95 shrink-0"
          >
            <ArrowLeft className="h-4 w-4" />
          </Link>
          <div className="text-center min-w-0 flex-1">
            <h1 className="text-sm font-black text-slate-900 truncate">
              {course.shortCode} • {getOrdinal(semesterNumber)} Sem
            </h1>
            <p className="text-[10px] font-bold text-blue-600 truncate">
              {course.name}
            </p>
          </div>
          <Link
            href={`/syllabus/${course.id}`}
            className="rounded-xl border border-slate-200 bg-slate-100 px-2.5 py-1.5 text-[11px] font-bold text-slate-700 hover:bg-slate-200 hover:text-slate-900 transition shrink-0"
          >
            Semesters
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-xl px-3 pt-3 space-y-3.5">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-500 px-1 overflow-x-auto scrollbar-none whitespace-nowrap">
          <Link href="/syllabus" className="hover:text-slate-900 transition">
            Syllabus
          </Link>
          <span>/</span>
          <Link href={`/syllabus/${course.id}`} className="hover:text-slate-900 transition truncate max-w-[120px]">
            {course.shortCode}
          </Link>
          <span>/</span>
          <span className="text-blue-600 font-black">
            {getOrdinal(semesterNumber)} Semester
          </span>
        </div>

        {/* Semester Stats Bar */}
        <div className="rounded-2xl border border-slate-200/90 bg-white p-3 shadow-sm">
          <div className="grid grid-cols-4 gap-2 text-center">
            <div className="rounded-xl bg-slate-50 border border-slate-200/80 py-1.5 px-1.5">
              <span className="text-[9px] text-slate-500 block font-semibold">Credits</span>
              <span className="text-xs sm:text-sm font-black text-amber-700">{semStats.totalCredits} Cr</span>
            </div>
            <div className="rounded-xl bg-slate-50 border border-slate-200/80 py-1.5 px-1.5">
              <span className="text-[9px] text-slate-500 block font-semibold">Theory</span>
              <span className="text-xs sm:text-sm font-black text-slate-900">{semStats.totalTheory} M</span>
            </div>
            <div className="rounded-xl bg-slate-50 border border-slate-200/80 py-1.5 px-1.5">
              <span className="text-[9px] text-slate-500 block font-semibold">Internal CIA</span>
              <span className="text-xs sm:text-sm font-black text-blue-700">{semStats.totalInternal} M</span>
            </div>
            <div className="rounded-xl bg-slate-50 border border-slate-200/80 py-1.5 px-1.5">
              <span className="text-[9px] text-slate-500 block font-semibold">Papers</span>
              <span className="text-xs sm:text-sm font-black text-emerald-700">{semStats.paperCount}</span>
            </div>
          </div>
        </div>

        {/* Paper Selector Tabs */}
        <div className="space-y-2">
          <div className="flex items-center justify-between px-1">
            <span className="text-[10px] font-black uppercase tracking-wider text-slate-500">
              Select Paper in this Semester:
            </span>
            <button
              onClick={() => setIsCreditsTableOpen(!isCreditsTableOpen)}
              className="text-[10px] font-bold text-blue-600 hover:text-blue-700 underline flex items-center gap-1"
            >
              <Table className="h-3 w-3" />
              Credit Scheme
            </button>
          </div>

          <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {semesterData.papers.map((paper) => {
              const isSelected = activePaper?.id === paper.id;
              const badge = getPaperTypeBadge(paper.paperType);

              return (
                <button
                  key={paper.id}
                  onClick={() => setActivePaperId(paper.id)}
                  className={`flex flex-col items-start rounded-xl px-3 py-2 text-left transition-all duration-150 shrink-0 border ${
                    isSelected
                      ? 'bg-blue-50 border-blue-500 shadow-xs scale-102 ring-1 ring-blue-500 text-blue-950'
                      : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-black text-slate-900">{paper.code}</span>
                    <span className={`text-[8px] font-black px-1.5 py-0.2 rounded border ${badge.bg}`}>
                      {badge.label}
                    </span>
                  </div>
                  <span className="text-[10px] font-medium text-slate-500 truncate max-w-[130px] mt-0.5">
                    {paper.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Paper Detailed View */}
        {activePaper ? (
          <div className="rounded-3xl border border-slate-200/90 bg-white p-4 shadow-sm space-y-4 animate-in fade-in duration-150">
            {/* Paper Header */}
            <div className="border-b border-slate-100 pb-3 space-y-2">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <span className="text-xs font-black uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-lg border border-blue-200">
                  {activePaper.code}
                </span>
                <span
                  className={`text-[10px] font-black uppercase px-2.5 py-0.5 rounded-lg border ${
                    getPaperTypeBadge(activePaper.paperType).bg
                  }`}
                >
                  {activePaper.paperType}
                </span>
                <span className="text-[10px] font-black text-amber-800 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                  {activePaper.credits} Credits
                </span>
              </div>

              <h2 className="text-base sm:text-lg font-black text-slate-900 leading-snug">
                {activePaper.name}
              </h2>

              <div className="flex items-center gap-3 text-xs text-slate-600 pt-1">
                <span>Theory: <strong className="text-slate-900">{activePaper.theoryMarks} M</strong></span>
                <span>•</span>
                <span>CIA Internal: <strong className="text-blue-700">{activePaper.internalMarks} M</strong></span>
                <span>•</span>
                <span>Total: <strong className="text-emerald-700">{activePaper.theoryMarks + activePaper.internalMarks} M</strong></span>
              </div>
            </div>

            {/* Action Buttons: WhatsApp Share */}
            <div>
              <button
                onClick={handleShare}
                className="w-full flex items-center justify-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 py-2.5 px-3 text-xs font-bold text-emerald-800 hover:bg-emerald-100 active:scale-98 transition shadow-xs"
              >
                <Share2 className="h-4 w-4 shrink-0" />
                <span>Share Paper Syllabus</span>
              </button>
            </div>

            {/* Units & Topics List (FAQ / Details Accordion Style) */}
            {activePaper.units && activePaper.units.length > 0 ? (
              <div className="space-y-2.5 pt-1">
                <div className="flex items-center justify-between px-1">
                  <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                    <BookOpen className="h-3.5 w-3.5 text-blue-600" />
                    Syllabus Units ({activePaper.units.length})
                  </h3>
                  <span className="text-[10px] text-slate-500">
                    Tap to expand topics
                  </span>
                </div>

                <div className="space-y-2">
                  {activePaper.units.map((unit, uIdx) => {
                    const topics = formatUnitTopics(unit.topics);
                    return (
                      <details
                        key={unit.unitNumber}
                        open={uIdx === 0}
                        className="group rounded-2xl border border-slate-200/80 bg-slate-50/70 p-3.5 shadow-xs transition-all duration-200 open:border-slate-300 open:bg-white open:shadow-xs"
                      >
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 select-none">
                          <div className="flex items-center gap-2.5 min-w-0">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-xs font-black text-blue-700 border border-blue-200">
                              {unit.unitNumber}
                            </span>
                            <h4 className="text-xs sm:text-sm font-black text-slate-900 group-hover:text-blue-600 transition truncate">
                              Unit {unit.unitNumber}: {unit.title}
                            </h4>
                          </div>

                          <div className="flex items-center gap-2 shrink-0">
                            {topics && topics.length > 0 && (
                              <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200">
                                {topics.length} {topics.length === 1 ? 'Topic' : 'Topics'}
                              </span>
                            )}
                            <ChevronDown className="h-4 w-4 text-slate-400 transition-transform duration-200 group-open:rotate-180 group-open:text-slate-700" />
                          </div>
                        </summary>

                        {topics && topics.length > 0 && (
                          <div className="mt-3 pt-3 border-t border-slate-100">
                            <ul className="space-y-2 pl-1 text-xs text-slate-700 leading-relaxed">
                              {topics.map((topic, tIdx) => (
                                <li key={tIdx} className="flex items-start gap-2">
                                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0 mt-1.5" />
                                  <span className="text-slate-800">{topic}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </details>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center text-xs text-slate-500 space-y-1">
                <p className="font-semibold text-slate-700">
                  {activePaper.paperType === 'Internship'
                    ? 'Summer Internship Paper — Practical evaluation / project viva.'
                    : activePaper.paperType === 'Research Project'
                    ? 'Research Project / Dissertation — Continuous supervision & thesis viva.'
                    : 'To be selected from University Academic Basket.'}
                </p>
              </div>
            )}

            {/* Recommended Books (Collapsible Details Style) */}
            {activePaper.recommendedBooks && activePaper.recommendedBooks.length > 0 && (
              <details className="group rounded-2xl border border-slate-200/80 bg-slate-50/70 p-3.5 shadow-xs transition-all duration-200 open:border-amber-300 open:bg-white">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-2 select-none">
                  <span className="text-xs font-black uppercase tracking-wider text-amber-800 flex items-center gap-1.5">
                    <Award className="h-3.5 w-3.5 text-amber-600" />
                    Recommended Reference Books ({activePaper.recommendedBooks.length})
                  </span>
                  <ChevronDown className="h-3.5 w-3.5 text-amber-600 transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <div className="mt-2.5 pt-2.5 border-t border-slate-100">
                  <ul className="space-y-1 text-[11px] text-slate-700 pl-4 list-disc">
                    {activePaper.recommendedBooks.map((book, bIdx) => (
                      <li key={bIdx} className="marker:text-amber-500">
                        {book}
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
            )}
          </div>
        ) : (
          <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center text-xs text-slate-500">
            No papers found for this semester.
          </div>
        )}

        {/* Credit Structure Modal / Drawer */}
        {isCreditsTableOpen && (
          <div className="rounded-2xl border border-blue-200 bg-white p-4 shadow-xl space-y-3 animate-in fade-in duration-150">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <h4 className="text-xs font-black uppercase tracking-wider text-blue-700 flex items-center gap-1.5">
                <Table className="h-4 w-4" />
                Semester {semesterNumber} Credit Breakdown
              </h4>
              <button
                onClick={() => setIsCreditsTableOpen(false)}
                className="text-[10px] font-bold text-slate-400 hover:text-slate-700"
              >
                Close ✕
              </button>
            </div>

            <div className="overflow-x-auto text-xs">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 text-[10px] uppercase text-slate-500">
                    <th className="py-1.5 px-2">Code</th>
                    <th className="py-1.5 px-2">Type</th>
                    <th className="py-1.5 px-2 text-center">Cr</th>
                    <th className="py-1.5 px-2 text-center">Theory</th>
                    <th className="py-1.5 px-2 text-center">CIA</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-[11px]">
                  {semesterData.papers.map((p) => (
                    <tr key={p.id} className="hover:bg-slate-50">
                      <td className="py-1.5 px-2 font-black text-slate-900">{p.code}</td>
                      <td className="py-1.5 px-2 text-slate-600">{p.paperType}</td>
                      <td className="py-1.5 px-2 text-center font-bold text-amber-700">{p.credits}</td>
                      <td className="py-1.5 px-2 text-center text-slate-700">{p.theoryMarks}</td>
                      <td className="py-1.5 px-2 text-center text-blue-700">{p.internalMarks}</td>
                    </tr>
                  ))}
                  <tr className="border-t border-slate-300 font-black text-slate-900">
                    <td className="py-2 px-2" colSpan={2}>Total Semester</td>
                    <td className="py-2 px-2 text-center text-amber-700">{semStats.totalCredits}</td>
                    <td className="py-2 px-2 text-center">{semStats.totalTheory}</td>
                    <td className="py-2 px-2 text-center text-blue-700">{semStats.totalInternal}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Quick Prev / Next Semester Switcher */}
        <div className="flex items-center justify-between gap-3 pt-2">
          {prevSem ? (
            <Link
              href={`/syllabus/${course.id}/sem-${prevSem}`}
              className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 hover:text-slate-900 hover:border-slate-300 shadow-xs transition"
            >
              <ChevronLeft className="h-3.5 w-3.5 text-blue-600" />
              <span>{getOrdinal(prevSem)} Semester</span>
            </Link>
          ) : (
            <div />
          )}

          {nextSem ? (
            <Link
              href={`/syllabus/${course.id}/sem-${nextSem}`}
              className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 hover:text-slate-900 hover:border-slate-300 shadow-xs transition"
            >
              <span>{getOrdinal(nextSem)} Semester</span>
              <ChevronRight className="h-3.5 w-3.5 text-blue-600" />
            </Link>
          ) : (
            <div />
          )}
        </div>

        {/* Back Link */}
        <div className="pt-2 text-center">
          <Link
            href={`/syllabus/${course.id}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-900 transition"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to {course.shortCode} Semesters
          </Link>
        </div>

      </main>
    </div>
  );
};
