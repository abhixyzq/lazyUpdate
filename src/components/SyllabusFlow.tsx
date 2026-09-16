'use client';

import React, { useState, useMemo } from 'react';
import { puCompleteSyllabusData, puStreamsList } from '@/data/puSyllabusComplete';
import { StreamType, CourseSyllabus, SyllabusPaper } from '@/types';
import {
  BookOpen,
  FileDown,
  Search,
  ChevronDown,
  ChevronUp,
  Share2,
  GraduationCap,
  Sparkles,
  Award,
  Layers,
  CheckCircle2,
  ExternalLink,
  BookMarked,
  HelpCircle,
  FileQuestion
} from 'lucide-react';

interface SyllabusFlowProps {
  onBackToHome?: () => void;
  defaultType?: 'syllabus' | 'pyq';
}

export const SyllabusFlow: React.FC<SyllabusFlowProps> = ({ onBackToHome, defaultType = 'syllabus' }) => {
  // Navigation State
  const [activeStream, setActiveStream] = useState<StreamType>('Vocational');
  const [selectedCourseId, setSelectedCourseId] = useState<string>('bca');
  const [selectedSemester, setSelectedSemester] = useState<number>(1);
  const [viewMode, setViewMode] = useState<'syllabus' | 'pyq'>(defaultType);
  const [expandedPaperId, setExpandedPaperId] = useState<string | null>('bca-101');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Available courses in currently active stream
  const coursesInStream = useMemo(() => {
    return puCompleteSyllabusData.filter(c => c.stream === activeStream);
  }, [activeStream]);

  // Currently selected course object
  const currentCourse = useMemo(() => {
    return puCompleteSyllabusData.find(c => c.id === selectedCourseId) || puCompleteSyllabusData[0];
  }, [selectedCourseId]);

  // Currently selected semester data
  const currentSemesterData = useMemo(() => {
    return currentCourse.semesters.find(s => s.semester === selectedSemester) || currentCourse.semesters[0];
  }, [currentCourse, selectedSemester]);

  // Handle stream change
  const handleStreamChange = (stream: StreamType) => {
    setActiveStream(stream);
    const firstCourse = puCompleteSyllabusData.find(c => c.stream === stream);
    if (firstCourse) {
      setSelectedCourseId(firstCourse.id);
      setSelectedSemester(1);
      const firstPaper = firstCourse.semesters[0]?.papers[0];
      setExpandedPaperId(firstPaper ? firstPaper.id : null);
    }
  };

  // Handle course change
  const handleCourseChange = (courseId: string) => {
    setSelectedCourseId(courseId);
    setSelectedSemester(1);
    const course = puCompleteSyllabusData.find(c => c.id === courseId);
    const firstPaper = course?.semesters[0]?.papers[0];
    setExpandedPaperId(firstPaper ? firstPaper.id : null);
  };

  // Handle share
  const handleShare = (paper: SyllabusPaper) => {
    const text = `📖 Patna University Syllabus: ${currentCourse.name} - Sem ${selectedSemester}\nPaper: ${paper.code} (${paper.name})\nDownload PDF: ${paper.pdfUrl}\nCheck full syllabus on Lazy PU!`;
    navigator.clipboard.writeText(text);
    setCopiedId(paper.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  // Search filter
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return null;
    const q = searchQuery.toLowerCase();
    const results: { course: CourseSyllabus; semester: number; paper: SyllabusPaper }[] = [];

    puCompleteSyllabusData.forEach(course => {
      course.semesters.forEach(sem => {
        sem.papers.forEach(paper => {
          const matchCourse = course.name.toLowerCase().includes(q);
          const matchPaper = paper.name.toLowerCase().includes(q) || paper.code.toLowerCase().includes(q);
          const matchUnits = paper.units.some(u => 
            u.title.toLowerCase().includes(q) || 
            u.topics.some(t => t.toLowerCase().includes(q))
          );

          if (matchCourse || matchPaper || matchUnits) {
            results.push({ course, semester: sem.semester, paper });
          }
        });
      });
    });

    return results;
  }, [searchQuery]);

  return (
    <div className="w-full space-y-4 text-white">
      
      {/* 1. Header Banner & Search Bar */}
      <div className="rounded-3xl border border-blue-900/60 bg-gradient-to-b from-[#0a1f3d] to-[#06142a] p-4 sm:p-5 shadow-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 rounded-lg bg-cyan-950/80 px-2.5 py-1 text-[11px] font-bold text-cyan-400 border border-cyan-800/60">
                <GraduationCap className="h-3.5 w-3.5" /> PATNA UNIVERSITY
              </span>
              <span className="text-[11px] font-bold text-slate-400">
                NEP 2020 4-Year CBCS & Vocational
              </span>
            </div>
            <h2 className="mt-2 text-xl sm:text-2xl font-black tracking-tight text-white flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-cyan-400" />
              Syllabus & PYQ Resource Hub
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-300">
              Department-wise detailed units, paper codes, marks scheme and 1-click official PDF downloads.
            </p>
          </div>

          {/* Mode Switcher: Syllabus vs PYQs */}
          <div className="flex items-center rounded-2xl border border-blue-800/80 bg-[#07172e] p-1 self-start sm:self-center shrink-0">
            <button
              onClick={() => setViewMode('syllabus')}
              className={`flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-black transition-all ${
                viewMode === 'syllabus'
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <BookMarked className="h-3.5 w-3.5" />
              <span>Syllabus</span>
            </button>
            <button
              onClick={() => setViewMode('pyq')}
              className={`flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-black transition-all ${
                viewMode === 'pyq'
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <FileQuestion className="h-3.5 w-3.5" />
              <span>PYQs (Past Papers)</span>
            </button>
          </div>
        </div>

        {/* Global Instant Search */}
        <div className="mt-4 relative">
          <Search className="pointer-events-none absolute left-3.5 top-3 h-4 w-4 text-cyan-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Quick search any topic or paper (e.g. C Programming, Mechanics, Calculus, Indus Valley, Ind-AS)..."
            className="w-full rounded-2xl border border-blue-900/90 bg-[#040e1f] pl-10 pr-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400/40 shadow-inner"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-2.5 rounded-full bg-slate-800 px-2 py-0.5 text-xs text-slate-300 hover:text-white"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* If Search is Active, show instant search results */}
      {searchResults ? (
        <div className="space-y-3">
          <div className="flex items-center justify-between px-1 text-xs text-slate-400 font-bold">
            <span>Found {searchResults.length} papers matching "{searchQuery}"</span>
            <button
              onClick={() => setSearchQuery('')}
              className="text-cyan-400 hover:underline"
            >
              Return to course browser
            </button>
          </div>

          {searchResults.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-blue-900/60 bg-[#08172e]/80 p-8 text-center text-slate-400">
              <HelpCircle className="mx-auto h-8 w-8 text-slate-500 mb-2" />
              <p className="font-bold text-sm">No exact syllabus topic found for "{searchQuery}"</p>
              <p className="text-xs mt-1">Try searching by broader terms like "Math", "Java", "Physics", or "History".</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-3">
              {searchResults.map(({ course, semester, paper }) => (
                <div
                  key={`${course.id}-${semester}-${paper.id}`}
                  className="rounded-2xl border border-blue-900/80 bg-[#091b36] p-4 hover:border-cyan-500/60 transition shadow-lg"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{course.icon}</span>
                      <div>
                        <span className="text-xs font-bold text-cyan-400">{course.name} • Sem {semester}</span>
                        <h4 className="text-sm font-black text-white">{paper.code}: {paper.name}</h4>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="rounded-lg bg-blue-950/80 px-2.5 py-1 text-[11px] font-bold text-blue-300 border border-blue-800/60">
                        {paper.paperType}
                      </span>
                      <a
                        href={paper.pdfUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1 rounded-xl bg-cyan-600 px-3 py-1.5 text-xs font-bold text-white hover:bg-cyan-500 transition"
                      >
                        <FileDown className="h-3.5 w-3.5" /> PDF ({paper.fileSize})
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        /* Standard UI Flow (Stream -> Course -> Semester -> Units/Papers) */
        <div className="space-y-4">
          
          {/* STEP 1: Faculty / Stream Selector Pills */}
          <div className="space-y-1.5">
            <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 px-1 flex items-center gap-1.5">
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-cyan-600 text-[10px] text-white font-black">1</span>
              SELECT FACULTY / STREAM
            </span>
            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
              {puStreamsList.map((stream) => {
                const isActive = activeStream === stream.id;
                return (
                  <button
                    key={stream.id}
                    onClick={() => handleStreamChange(stream.id)}
                    className={`flex shrink-0 items-center gap-2 rounded-2xl px-3.5 py-2.5 text-xs font-bold transition-all ${
                      isActive
                        ? 'border border-cyan-400 bg-gradient-to-r from-cyan-600/30 to-blue-600/30 text-white shadow-md'
                        : 'border border-blue-900/60 bg-[#07162d] text-slate-300 hover:border-blue-700 hover:text-white'
                    }`}
                  >
                    <span className="text-base">{stream.icon}</span>
                    <span className="font-extrabold">{stream.name}</span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-md ${
                      isActive ? 'bg-cyan-500/20 text-cyan-300' : 'bg-slate-800 text-slate-400'
                    }`}>
                      {stream.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* STEP 2: Course Cards Grid */}
          <div className="space-y-1.5">
            <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 px-1 flex items-center gap-1.5">
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-cyan-600 text-[10px] text-white font-black">2</span>
              SELECT COURSE / DEPARTMENT
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {coursesInStream.map((course) => {
                const isSelected = selectedCourseId === course.id;
                return (
                  <button
                    key={course.id}
                    onClick={() => handleCourseChange(course.id)}
                    className={`relative flex items-center gap-2.5 rounded-2xl p-3 text-left transition-all ${
                      isSelected
                        ? 'border-2 border-cyan-400 bg-gradient-to-br from-[#0c2548] to-[#081a33] text-white shadow-lg ring-2 ring-cyan-400/20'
                        : 'border border-blue-900/60 bg-[#06142a] text-slate-300 hover:border-blue-700 hover:bg-[#091b36]'
                    }`}
                  >
                    <span className="text-2xl shrink-0">{course.icon}</span>
                    <div className="overflow-hidden">
                      <div className="text-xs font-black truncate">{course.name}</div>
                      <div className="text-[10px] text-cyan-400/80 font-bold truncate">
                        {course.degree}
                      </div>
                    </div>
                    {isSelected && (
                      <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* STEP 3: Semester Segmented Bar */}
          <div className="rounded-2xl border border-blue-900/70 bg-[#061428] p-3 shadow-lg space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2 px-1">
              <div className="flex items-center gap-2">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-cyan-600 text-[10px] text-white font-black">3</span>
                <span className="text-xs font-black text-slate-300 uppercase tracking-wider">
                  SELECT SEMESTER
                </span>
                <span className="text-xs text-cyan-400 font-bold">
                  ({currentCourse.name})
                </span>
              </div>
              <span className="text-[11px] text-slate-400">
                Total {currentCourse.totalSemesters} Semesters
              </span>
            </div>

            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
              {Array.from({ length: currentCourse.totalSemesters }, (_, i) => i + 1).map((semNum) => {
                const isSemActive = selectedSemester === semNum;
                return (
                  <button
                    key={semNum}
                    onClick={() => {
                      setSelectedSemester(semNum);
                      const targetSem = currentCourse.semesters.find(s => s.semester === semNum);
                      const firstP = targetSem?.papers[0];
                      setExpandedPaperId(firstP ? firstP.id : null);
                    }}
                    className={`flex-1 min-w-[70px] rounded-xl py-2 px-3 text-xs font-black transition-all text-center ${
                      isSemActive
                        ? 'border border-cyan-400 bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                        : 'border border-blue-900/60 bg-[#081a34] text-slate-300 hover:border-blue-700 hover:text-white'
                    }`}
                  >
                    Sem {semNum}
                  </button>
                );
              })}
            </div>
          </div>

          {/* STEP 4: Content Section (Syllabus Units or Past Year Question Papers) */}
          <div className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2 px-1">
              <div>
                <h3 className="text-sm sm:text-base font-black text-white flex items-center gap-2">
                  <Layers className="h-4 w-4 text-cyan-400" />
                  {viewMode === 'syllabus'
                    ? `${currentCourse.name} • Semester ${selectedSemester} Syllabus`
                    : `${currentCourse.name} • Semester ${selectedSemester} Past Year Questions (PYQs)`}
                </h3>
                <p className="text-xs text-slate-400">
                  {currentSemesterData?.papers.length || 0} Papers prescribed under Patna University curriculum
                </p>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={currentSemesterData?.papers[0]?.pdfUrl || 'https://pup.ac.in'}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 rounded-xl border border-cyan-500/50 bg-[#0d2a52] px-3 py-1.5 text-xs font-bold text-cyan-300 hover:bg-[#133769] transition shadow-xs"
                >
                  <FileDown className="h-3.5 w-3.5" /> Download Entire Sem {selectedSemester} PDF
                </a>
              </div>
            </div>

            {/* List of Papers for Selected Semester */}
            {(!currentSemesterData || currentSemesterData.papers.length === 0) ? (
              <div className="rounded-3xl border border-dashed border-blue-900/60 bg-[#081830]/60 p-8 text-center text-slate-400">
                <BookOpen className="mx-auto h-8 w-8 text-slate-500 mb-2" />
                <p className="font-bold text-sm">Sem {selectedSemester} detailed papers are being formatted according to newest PU circular.</p>
                <p className="text-xs mt-1">Check back soon or download the master PDF above.</p>
              </div>
            ) : (
              <div className="space-y-3">
                {currentSemesterData.papers.map((paper) => {
                  const isExpanded = expandedPaperId === paper.id;
                  const isCopied = copiedId === paper.id;

                  if (viewMode === 'pyq') {
                    // PYQ View Card
                    return (
                      <div
                        key={paper.id}
                        className="rounded-3xl border border-emerald-900/60 bg-[#06182c] p-4 sm:p-5 shadow-xl transition"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="rounded-lg bg-emerald-950 px-2 py-0.5 text-xs font-bold text-emerald-400 border border-emerald-800/60">
                                {paper.code}
                              </span>
                              <span className="text-xs font-bold text-slate-400">
                                Past Year Papers Archive
                              </span>
                            </div>
                            <h4 className="mt-1 text-base font-black text-white">{paper.name}</h4>
                            <p className="text-xs text-slate-300 mt-0.5">
                              Includes 2024, 2023, 2022 & 2021 End-Semester Exam Question Papers with marking pattern.
                            </p>
                          </div>

                          <div className="flex flex-wrap items-center gap-2">
                            <a
                              href={paper.pdfUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-4 py-2 text-xs font-black text-white hover:from-emerald-500 hover:to-teal-500 shadow-md transition"
                            >
                              <FileDown className="h-4 w-4" />
                              <span>Download PYQ Papers ({paper.fileSize})</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    );
                  }

                  // Syllabus Detailed View Card
                  return (
                    <div
                      key={paper.id}
                      className="rounded-3xl border border-blue-900/70 bg-gradient-to-b from-[#081c38] to-[#06142a] overflow-hidden shadow-xl transition-all"
                    >
                      {/* Paper Main Header Bar */}
                      <div className="p-4 sm:p-5">
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                          <div className="space-y-1">
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="rounded-lg bg-cyan-950 px-2.5 py-0.5 text-xs font-black text-cyan-300 border border-cyan-800/80">
                                {paper.code}
                              </span>
                              <span className="rounded-lg bg-blue-950/80 px-2.5 py-0.5 text-xs font-bold text-blue-300 border border-blue-800/60">
                                {paper.paperType}
                              </span>
                              <span className="text-xs text-slate-400 font-semibold">
                                {paper.credits} Credits • Theory: {paper.theoryMarks} / Internal: {paper.internalMarks}
                              </span>
                            </div>

                            <h4 className="text-base sm:text-lg font-black text-white tracking-tight">
                              {paper.name}
                            </h4>
                          </div>

                          {/* Quick Actions */}
                          <div className="flex items-center gap-2 self-start sm:self-center shrink-0">
                            <a
                              href={paper.pdfUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="flex items-center gap-1 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 px-3.5 py-2 text-xs font-black text-white hover:from-blue-500 hover:to-cyan-500 shadow-md transition"
                            >
                              <FileDown className="h-3.5 w-3.5" /> PDF ({paper.fileSize})
                            </a>

                            <button
                              onClick={() => handleShare(paper)}
                              title="Share syllabus"
                              className="flex items-center gap-1 rounded-xl border border-blue-800/80 bg-[#092244] p-2 text-xs font-bold text-slate-300 hover:text-white transition"
                            >
                              {isCopied ? (
                                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                              ) : (
                                <Share2 className="h-4 w-4 text-cyan-400" />
                              )}
                            </button>

                            <button
                              onClick={() => setExpandedPaperId(isExpanded ? null : paper.id)}
                              className="flex items-center gap-1 rounded-xl border border-blue-800/80 bg-[#092244] px-3 py-2 text-xs font-bold text-cyan-300 hover:bg-[#0f2d59] transition"
                            >
                              <span>{isExpanded ? 'Hide Units' : 'View Units'}</span>
                              {isExpanded ? (
                                <ChevronUp className="h-3.5 w-3.5" />
                              ) : (
                                <ChevronDown className="h-3.5 w-3.5" />
                              )}
                            </button>
                          </div>
                        </div>

                        {/* Units Preview Summary (When collapsed) */}
                        {!isExpanded && paper.units && paper.units.length > 0 && (
                          <div className="mt-3 pt-3 border-t border-blue-900/50 flex flex-wrap gap-2 text-[11px] text-slate-400">
                            <span className="font-bold text-slate-300">Course Units:</span>
                            {paper.units.map(u => (
                              <span key={u.unitNumber} className="rounded-md bg-blue-950/60 px-2 py-0.5 text-slate-300 border border-blue-900/40">
                                Unit {u.unitNumber}: {u.title}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Expandable Accordion Body with Units & Recommended Books */}
                      {isExpanded && (
                        <div className="border-t border-blue-900/70 bg-[#040e1f] p-4 sm:p-5 space-y-4 animate-in fade-in duration-200">
                          
                          {/* Units Breakdown */}
                          <div className="space-y-3">
                            <h5 className="text-xs font-black uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                              <Sparkles className="h-3.5 w-3.5" /> Prescribed Syllabus Units
                            </h5>

                            <div className="grid grid-cols-1 gap-2.5">
                              {paper.units.map((unit) => (
                                <div
                                  key={unit.unitNumber}
                                  className="rounded-2xl border border-blue-900/80 bg-[#07172e] p-3.5 space-y-1.5 shadow-sm"
                                >
                                  <div className="flex items-center gap-2">
                                    <span className="flex h-5 w-5 items-center justify-center rounded-lg bg-cyan-600/30 text-[11px] font-black text-cyan-300 border border-cyan-500/40">
                                      U{unit.unitNumber}
                                    </span>
                                    <h6 className="text-xs sm:text-sm font-black text-white">
                                      {unit.title}
                                    </h6>
                                  </div>

                                  <ul className="pl-7 list-disc list-outside space-y-1 text-xs text-slate-300 leading-relaxed">
                                    {unit.topics.map((topic, tidx) => (
                                      <li key={tidx}>{topic}</li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Recommended Textbooks & Reference */}
                          {paper.recommendedBooks && paper.recommendedBooks.length > 0 && (
                            <div className="rounded-2xl border border-blue-900/60 bg-[#06152b] p-3.5 space-y-1.5">
                              <h5 className="text-xs font-black text-slate-300 flex items-center gap-1.5">
                                <BookOpen className="h-3.5 w-3.5 text-cyan-400" /> Recommended Books & Authors
                              </h5>
                              <ul className="pl-5 list-disc list-outside text-xs text-slate-400 space-y-0.5">
                                {paper.recommendedBooks.map((book, bidx) => (
                                  <li key={bidx}>{book}</li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Action Footer */}
                          <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-blue-900/60">
                            <span className="text-[11px] text-slate-400">
                              Official Patna University Curriculum • End-Semester weightage 70%
                            </span>
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => setViewMode('pyq')}
                                className="text-xs font-bold text-emerald-400 hover:text-emerald-300 underline flex items-center gap-1"
                              >
                                View {paper.pyqCount || 4} PYQs for this paper →
                              </button>
                            </div>
                          </div>

                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>

        </div>
      )}

      {/* Quick Academic Notice Banner */}
      <div className="rounded-2xl border border-blue-900/60 bg-[#061224] p-3 text-center text-xs text-slate-400">
        💡 <strong className="text-white">Student Tip:</strong> Patna University 4-Year CBCS papers require 75% mandatory lecture attendance to sit in End-Semester examinations. Use our <strong className="text-cyan-400">Attendance Tracker</strong> from the home screen.
      </div>

    </div>
  );
};
