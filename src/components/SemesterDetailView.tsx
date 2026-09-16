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
      return { label: 'Major', bg: 'bg-amber-400/20 text-amber-300 border-amber-500/40' };
    if (paperType.includes('Minor'))
      return { label: 'Minor', bg: 'bg-emerald-400/20 text-emerald-300 border-emerald-500/40' };
    if (paperType.includes('Multidisciplinary'))
      return { label: 'MDC', bg: 'bg-purple-400/20 text-purple-300 border-purple-500/40' };
    if (paperType.includes('Ability'))
      return { label: 'AEC', bg: 'bg-pink-400/20 text-pink-300 border-pink-500/40' };
    if (paperType.includes('Skill'))
      return { label: 'SEC', bg: 'bg-cyan-400/20 text-cyan-300 border-cyan-500/40' };
    if (paperType.includes('Value Added'))
      return { label: 'VAC', bg: 'bg-orange-400/20 text-orange-300 border-orange-500/40' };
    if (paperType.includes('Internship'))
      return { label: 'Internship', bg: 'bg-teal-400/20 text-teal-300 border-teal-500/40' };
    if (paperType.includes('Research'))
      return { label: 'Research', bg: 'bg-indigo-400/20 text-indigo-300 border-indigo-500/40' };
    if (paperType.includes('Practical'))
      return { label: 'Practical', bg: 'bg-sky-400/20 text-sky-300 border-sky-500/40' };
    return { label: 'Core', bg: 'bg-blue-400/20 text-blue-300 border-blue-500/40' };
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
    <div className="min-h-screen bg-transparent text-white pb-16">
      {/* 1. Subpage Sticky Header */}
      <header className="sticky top-0 z-40 border-b border-blue-900/60 bg-[#07172e]/95 backdrop-blur-md px-3 py-3">
        <div className="mx-auto flex max-w-xl items-center justify-between gap-3">
          <Link
            href={`/syllabus/${course.id}`}
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-900/40 text-cyan-300 border border-blue-800/80 hover:bg-cyan-500 hover:text-slate-950 transition active:scale-95 shrink-0"
          >
            <ArrowLeft className="h-4 w-4" />
          </Link>
          <div className="text-center min-w-0 flex-1">
            <h1 className="text-sm font-black text-white truncate">
              {course.shortCode} • {getOrdinal(semesterNumber)} Sem
            </h1>
            <p className="text-[10px] font-bold text-cyan-400 truncate">
              {course.name}
            </p>
          </div>
          <Link
            href={`/syllabus/${course.id}`}
            className="rounded-xl border border-blue-800/60 bg-[#0f2347] px-2.5 py-1.5 text-[11px] font-bold text-slate-300 hover:text-white hover:bg-[#152e59] transition shrink-0"
          >
            Semesters
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-xl px-3 pt-3 space-y-3.5">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-400 px-1 overflow-x-auto scrollbar-none whitespace-nowrap">
          <Link href="/syllabus" className="hover:text-cyan-300 transition">
            Syllabus
          </Link>
          <span>/</span>
          <Link href={`/syllabus/${course.id}`} className="hover:text-cyan-300 transition truncate max-w-[120px]">
            {course.shortCode}
          </Link>
          <span>/</span>
          <span className="text-cyan-400 font-black">
            {getOrdinal(semesterNumber)} Semester
          </span>
        </div>

        {/* Semester Stats Bar */}
        <div className="rounded-2xl border border-blue-800/80 bg-gradient-to-r from-[#0a1e3d] to-[#07172e] p-3 shadow-lg">
          <div className="grid grid-cols-4 gap-2 text-center">
            <div className="rounded-xl bg-blue-950/60 border border-blue-900/60 py-1 px-1.5">
              <span className="text-[9px] text-slate-400 block font-semibold">Credits</span>
              <span className="text-xs sm:text-sm font-black text-amber-300">{semStats.totalCredits} Cr</span>
            </div>
            <div className="rounded-xl bg-blue-950/60 border border-blue-900/60 py-1 px-1.5">
              <span className="text-[9px] text-slate-400 block font-semibold">Theory</span>
              <span className="text-xs sm:text-sm font-black text-white">{semStats.totalTheory} M</span>
            </div>
            <div className="rounded-xl bg-blue-950/60 border border-blue-900/60 py-1 px-1.5">
              <span className="text-[9px] text-slate-400 block font-semibold">Internal CIA</span>
              <span className="text-xs sm:text-sm font-black text-cyan-300">{semStats.totalInternal} M</span>
            </div>
            <div className="rounded-xl bg-blue-950/60 border border-blue-900/60 py-1 px-1.5">
              <span className="text-[9px] text-slate-400 block font-semibold">Papers</span>
              <span className="text-xs sm:text-sm font-black text-emerald-300">{semStats.paperCount}</span>
            </div>
          </div>
        </div>

        {/* Paper Selector Tabs */}
        <div className="space-y-2">
          <div className="flex items-center justify-between px-1">
            <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
              Select Paper in this Semester:
            </span>
            <button
              onClick={() => setIsCreditsTableOpen(!isCreditsTableOpen)}
              className="text-[10px] font-bold text-cyan-400 hover:text-cyan-300 underline flex items-center gap-1"
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
                      ? 'bg-gradient-to-br from-[#123060] to-[#0d2247] border-cyan-400 shadow-md shadow-cyan-500/20 scale-102 ring-1 ring-cyan-400'
                      : 'bg-[#081830] border-blue-900/80 hover:bg-[#0e2547] text-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-black text-white">{paper.code}</span>
                    <span className={`text-[8px] font-black px-1.5 py-0.2 rounded border ${badge.bg}`}>
                      {badge.label}
                    </span>
                  </div>
                  <span className="text-[10px] font-medium text-slate-400 truncate max-w-[130px] mt-0.5">
                    {paper.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Paper Detailed View */}
        {activePaper ? (
          <div className="rounded-3xl border border-blue-800/80 bg-[#091a36] p-4 shadow-xl space-y-4 animate-in fade-in duration-150">
            {/* Paper Header */}
            <div className="border-b border-blue-900/60 pb-3 space-y-2">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <span className="text-xs font-black uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-2.5 py-0.5 rounded-lg border border-cyan-500/40">
                  {activePaper.code}
                </span>
                <span
                  className={`text-[10px] font-black uppercase px-2.5 py-0.5 rounded-lg border ${
                    getPaperTypeBadge(activePaper.paperType).bg
                  }`}
                >
                  {activePaper.paperType}
                </span>
                <span className="text-[10px] font-black text-amber-300 bg-amber-950/60 px-2 py-0.5 rounded-md border border-amber-500/30">
                  {activePaper.credits} Credits
                </span>
              </div>

              <h2 className="text-base sm:text-lg font-black text-white leading-snug">
                {activePaper.name}
              </h2>

              <div className="flex items-center gap-3 text-xs text-slate-300 pt-1">
                <span>Theory: <strong className="text-white">{activePaper.theoryMarks} M</strong></span>
                <span>•</span>
                <span>CIA Internal: <strong className="text-cyan-300">{activePaper.internalMarks} M</strong></span>
                <span>•</span>
                <span>Total: <strong className="text-emerald-300">{activePaper.theoryMarks + activePaper.internalMarks} M</strong></span>
              </div>
            </div>

            {/* Action Buttons: WhatsApp Share */}
            <div>
              <button
                onClick={handleShare}
                className="w-full flex items-center justify-center gap-2 rounded-xl border border-emerald-500/40 bg-[#0a2e20] py-2.5 px-3 text-xs font-bold text-emerald-400 hover:bg-[#0e3b2a] active:scale-98 transition"
              >
                <Share2 className="h-4 w-4 shrink-0" />
                <span>Share Paper Syllabus</span>
              </button>
            </div>

            {/* Units & Topics List (FAQ / Details Accordion Style) */}
            {activePaper.units && activePaper.units.length > 0 ? (
              <div className="space-y-2.5 pt-1">
                <div className="flex items-center justify-between px-1">
                  <h3 className="text-xs font-black uppercase tracking-wider text-cyan-300 flex items-center gap-1.5">
                    <BookOpen className="h-3.5 w-3.5" />
                    Syllabus Units ({activePaper.units.length})
                  </h3>
                  <span className="text-[10px] text-slate-400">
                    Tap to expand topics
                  </span>
                </div>

                <div className="space-y-2">
                  {activePaper.units.map((unit, uIdx) => (
                    <details
                      key={unit.unitNumber}
                      open={uIdx === 0}
                      className="group rounded-2xl border border-blue-900/70 bg-[#06142a] p-3.5 shadow-sm transition-all duration-200 open:border-cyan-500/50 open:bg-[#071833]"
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 select-none">
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-cyan-500/20 text-xs font-black text-cyan-300 border border-cyan-500/30">
                            {unit.unitNumber}
                          </span>
                          <h4 className="text-xs sm:text-sm font-black text-white group-hover:text-cyan-200 transition truncate">
                            Unit {unit.unitNumber}: {unit.title}
                          </h4>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          {unit.topics && unit.topics.length > 0 && (
                            <span className="text-[10px] font-bold text-slate-400 bg-blue-950/60 px-2 py-0.5 rounded-md border border-blue-900/60">
                              {unit.topics.length} {unit.topics.length === 1 ? 'Topic' : 'Topics'}
                            </span>
                          )}
                          <ChevronDown className="h-4 w-4 text-cyan-400 transition-transform duration-200 group-open:rotate-180" />
                        </div>
                      </summary>

                      {unit.topics && unit.topics.length > 0 && (
                        <div className="mt-3 pt-3 border-t border-blue-900/50">
                          <ul className="space-y-2 pl-1 text-xs text-slate-300 leading-relaxed">
                            {unit.topics.map((topic, tIdx) => (
                              <li key={tIdx} className="flex items-start gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5" />
                                <span className="text-slate-200">{topic}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </details>
                  ))}
                </div>
              </div>
            ) : (
              <div className="rounded-2xl border border-blue-900/70 bg-[#06142a] p-4 text-center text-xs text-slate-400 space-y-1">
                <p className="font-semibold text-slate-300">
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
              <details className="group rounded-2xl border border-blue-900/60 bg-[#06142a] p-3.5 shadow-sm transition-all duration-200 open:border-amber-500/40">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-2 select-none">
                  <span className="text-xs font-black uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
                    <Award className="h-3.5 w-3.5 text-amber-400" />
                    Recommended Reference Books ({activePaper.recommendedBooks.length})
                  </span>
                  <ChevronDown className="h-3.5 w-3.5 text-amber-400 transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <div className="mt-2.5 pt-2.5 border-t border-blue-900/50">
                  <ul className="space-y-1 text-[11px] text-slate-300 pl-4 list-disc">
                    {activePaper.recommendedBooks.map((book, bIdx) => (
                      <li key={bIdx} className="marker:text-amber-400">
                        {book}
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
            )}
          </div>
        ) : (
          <div className="rounded-2xl border border-blue-900 bg-[#081830] p-6 text-center text-xs text-slate-400">
            No papers found for this semester.
          </div>
        )}

        {/* Credit Structure Modal / Drawer */}
        {isCreditsTableOpen && (
          <div className="rounded-2xl border border-cyan-500/40 bg-[#081830] p-4 shadow-xl space-y-3 animate-in fade-in duration-150">
            <div className="flex items-center justify-between border-b border-blue-900/60 pb-2">
              <h4 className="text-xs font-black uppercase tracking-wider text-cyan-300 flex items-center gap-1.5">
                <Table className="h-4 w-4" />
                Semester {semesterNumber} Credit Breakdown
              </h4>
              <button
                onClick={() => setIsCreditsTableOpen(false)}
                className="text-[10px] font-bold text-slate-400 hover:text-white"
              >
                Close ✕
              </button>
            </div>

            <div className="overflow-x-auto text-xs">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-blue-900/80 text-[10px] uppercase text-slate-400">
                    <th className="py-1.5 px-2">Code</th>
                    <th className="py-1.5 px-2">Type</th>
                    <th className="py-1.5 px-2 text-center">Cr</th>
                    <th className="py-1.5 px-2 text-center">Theory</th>
                    <th className="py-1.5 px-2 text-center">CIA</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-blue-950/60 text-[11px]">
                  {semesterData.papers.map((p) => (
                    <tr key={p.id} className="hover:bg-blue-950/40">
                      <td className="py-1.5 px-2 font-black text-white">{p.code}</td>
                      <td className="py-1.5 px-2 text-slate-300">{p.paperType}</td>
                      <td className="py-1.5 px-2 text-center font-bold text-amber-300">{p.credits}</td>
                      <td className="py-1.5 px-2 text-center text-slate-300">{p.theoryMarks}</td>
                      <td className="py-1.5 px-2 text-center text-cyan-300">{p.internalMarks}</td>
                    </tr>
                  ))}
                  <tr className="border-t border-cyan-500/40 font-black text-white">
                    <td className="py-2 px-2" colSpan={2}>Total Semester</td>
                    <td className="py-2 px-2 text-center text-amber-300">{semStats.totalCredits}</td>
                    <td className="py-2 px-2 text-center">{semStats.totalTheory}</td>
                    <td className="py-2 px-2 text-center text-cyan-300">{semStats.totalInternal}</td>
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
              className="flex items-center gap-1.5 rounded-xl border border-blue-800/80 bg-[#091a36] px-3.5 py-2 text-xs font-bold text-slate-300 hover:text-white hover:border-cyan-400 transition"
            >
              <ChevronLeft className="h-3.5 w-3.5 text-cyan-400" />
              <span>{getOrdinal(prevSem)} Semester</span>
            </Link>
          ) : (
            <div />
          )}

          {nextSem ? (
            <Link
              href={`/syllabus/${course.id}/sem-${nextSem}`}
              className="flex items-center gap-1.5 rounded-xl border border-blue-800/80 bg-[#091a36] px-3.5 py-2 text-xs font-bold text-slate-300 hover:text-white hover:border-cyan-400 transition"
            >
              <span>{getOrdinal(nextSem)} Semester</span>
              <ChevronRight className="h-3.5 w-3.5 text-cyan-400" />
            </Link>
          ) : (
            <div />
          )}
        </div>

        {/* Back Link */}
        <div className="pt-2 text-center">
          <Link
            href={`/syllabus/${course.id}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-white transition"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to {course.shortCode} Semesters
          </Link>
        </div>

      </main>
    </div>
  );
};
