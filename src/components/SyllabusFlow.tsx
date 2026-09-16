'use client';

import React, { useState, useMemo } from 'react';
import { puCompleteSyllabusData, puStreamsList } from '@/data/puSyllabusComplete';
import { StreamType, CourseSyllabus, SyllabusPaper, SyllabusUnit } from '@/types';
import {
  getCourseVectorIcon,
  SemesterBookIcon,
} from './SyllabusCourseIcons';
import {
  BookOpen,
  FileDown,
  Search,
  ChevronDown,
  Share2,
  CheckCircle2,
  Circle,
  ExternalLink,
  BookMarked,
  FileQuestion,
  ArrowLeft,
  Settings,
  Sparkles,
  Check,
  X,
  Copy,
  Table,
  GraduationCap
} from 'lucide-react';

const YouTubeIcon: React.FC<{ className?: string }> = ({ className = 'h-3.5 w-3.5' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

interface SyllabusFlowProps {
  onBackToHome?: () => void;
  defaultType?: 'syllabus' | 'pyq';
}

type NavigationStep = 'courses' | 'semesters' | 'subjects';

// Ordinal helper: 1 -> 1st, 2 -> 2nd...
const getOrdinal = (n: number) => {
  const s = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
};

export const SyllabusFlow: React.FC<SyllabusFlowProps> = ({
  onBackToHome,
  defaultType = 'syllabus',
}) => {
  // 3-Stage Navigation State
  const [step, setStep] = useState<NavigationStep>('courses');
  const [selectedCourseId, setSelectedCourseId] = useState<string>('bca');
  const [selectedSemester, setSelectedSemester] = useState<number>(1);
  const [activeSubjectId, setActiveSubjectId] = useState<string>('bca-101');
  const [streamFilter, setStreamFilter] = useState<'All' | StreamType>('All');
  const [viewMode, setViewMode] = useState<'syllabus' | 'pyq'>(defaultType);
  const [searchQuery, setSearchQuery] = useState('');
  const [isCreditsTableOpen, setIsCreditsTableOpen] = useState(false);
  const [completedUnits, setCompletedUnits] = useState<Record<string, boolean>>({});
  const [aiModalTopic, setAiModalTopic] = useState<{ unitTitle: string; topics: string[] } | null>(null);
  const [copiedShare, setCopiedShare] = useState(false);

  // Selected Course
  const currentCourse = useMemo(() => {
    return puCompleteSyllabusData.find((c) => c.id === selectedCourseId) || puCompleteSyllabusData[0];
  }, [selectedCourseId]);

  // Selected Semester Data
  const currentSemesterData = useMemo(() => {
    const sem = currentCourse.semesters.find((s) => s.semester === selectedSemester);
    return sem || currentCourse.semesters[0] || { semester: 1, papers: [] };
  }, [currentCourse, selectedSemester]);

  // Categorize Papers into Theory vs Lab
  const theoryPapers = useMemo(() => {
    return currentSemesterData.papers.filter((p) => p.paperType !== 'Practical / Lab');
  }, [currentSemesterData]);

  const labPapers = useMemo(() => {
    return currentSemesterData.papers.filter((p) => p.paperType === 'Practical / Lab');
  }, [currentSemesterData]);

  // Active Selected Paper (Default to first available paper in semester)
  const activePaper = useMemo(() => {
    const found = currentSemesterData.papers.find((p) => p.id === activeSubjectId);
    return found || currentSemesterData.papers[0] || null;
  }, [currentSemesterData, activeSubjectId]);

  // Filtered courses for Screen 1
  const displayedCourses = useMemo(() => {
    if (streamFilter === 'All') return puCompleteSyllabusData;
    return puCompleteSyllabusData.filter((c) => c.stream === streamFilter);
  }, [streamFilter]);

  // Global Search across all courses
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return null;
    const q = searchQuery.toLowerCase();
    const list: { course: CourseSyllabus; semester: number; paper: SyllabusPaper }[] = [];

    puCompleteSyllabusData.forEach((course) => {
      course.semesters.forEach((sem) => {
        sem.papers.forEach((paper) => {
          const matchCourse = course.name.toLowerCase().includes(q) || course.shortCode.toLowerCase().includes(q);
          const matchPaper = paper.name.toLowerCase().includes(q) || paper.code.toLowerCase().includes(q);
          const matchUnits = paper.units.some(
            (u) => u.title.toLowerCase().includes(q) || u.topics.some((t) => t.toLowerCase().includes(q))
          );
          if (matchCourse || matchPaper || matchUnits) {
            list.push({ course, semester: sem.semester, paper });
          }
        });
      });
    });

    return list;
  }, [searchQuery]);

  // Toggle unit complete
  const toggleUnitDone = (unitKey: string) => {
    setCompletedUnits((prev) => ({
      ...prev,
      [unitKey]: !prev[unitKey],
    }));
  };

  // WhatsApp Share Handler
  const handleShare = () => {
    if (!activePaper) return;
    const shareText = `📖 *Patna University Syllabus*\n🎯 *Course:* ${currentCourse.name}\n📚 *Semester:* ${selectedSemester}th Semester\n📝 *Paper:* ${activePaper.code} - ${activePaper.name}\n🔗 *Download PDF:* ${activePaper.pdfUrl}\n\nShared via Lazy PU - The Smart Student Portal for Patna University!`;
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCopyLink = () => {
    if (!activePaper) return;
    const text = `Patna University Syllabus: ${currentCourse.name} (Sem ${selectedSemester}) - ${activePaper.code}: ${activePaper.name}\nDownload PDF: ${activePaper.pdfUrl}`;
    navigator.clipboard.writeText(text);
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 2000);
  };

  return (
    <div className="w-full max-w-xl mx-auto space-y-3.5 text-white pb-6">

      {/* Top Universal Mode & Navigation Strip */}
      <div className="flex items-center justify-between gap-2 px-1">
        {step === 'courses' ? (
          <button
            onClick={onBackToHome}
            className="flex items-center gap-1.5 rounded-xl border border-cyan-500/40 bg-[#091b36] px-3 py-1.5 text-xs font-black text-cyan-300 hover:bg-[#0f284e] transition shadow-xs"
          >
            <ArrowLeft className="h-4 w-4" /> Home
          </button>
        ) : step === 'semesters' ? (
          <button
            onClick={() => setStep('courses')}
            className="flex items-center gap-1.5 rounded-xl border border-cyan-500/40 bg-[#091b36] px-3 py-1.5 text-xs font-black text-cyan-300 hover:bg-[#0f284e] transition shadow-xs"
          >
            <ArrowLeft className="h-4 w-4" /> All Courses
          </button>
        ) : (
          <button
            onClick={() => setStep('semesters')}
            className="flex items-center gap-1.5 rounded-xl border border-cyan-500/40 bg-[#091b36] px-3 py-1.5 text-xs font-black text-cyan-300 hover:bg-[#0f284e] transition shadow-xs"
          >
            <ArrowLeft className="h-4 w-4" /> Semesters
          </button>
        )}

        {/* Mode Toggle: Syllabus vs PYQs */}
        <div className="flex items-center rounded-xl border border-blue-900 bg-[#07172e] p-0.5 shadow-inner">
          <button
            onClick={() => setViewMode('syllabus')}
            className={`flex items-center gap-1 rounded-lg px-2.5 py-1 text-[11px] font-black transition ${
              viewMode === 'syllabus'
                ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-xs'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <BookMarked className="h-3 w-3" />
            <span>Syllabus</span>
          </button>
          <button
            onClick={() => setViewMode('pyq')}
            className={`flex items-center gap-1 rounded-lg px-2.5 py-1 text-[11px] font-black transition ${
              viewMode === 'pyq'
                ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-xs'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <FileQuestion className="h-3 w-3" />
            <span>PYQs</span>
          </button>
        </div>
      </div>

      {/* Global Quick Search Bar */}
      <div className="relative">
        <Search className="pointer-events-none absolute left-3.5 top-2.5 h-4 w-4 text-cyan-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search any subject or topic (e.g., C Programming, Calculus, Indus Valley)..."
          className="w-full rounded-2xl border border-blue-900/90 bg-[#06142a] pl-10 pr-9 py-2 text-xs text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400/30 shadow-inner"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute right-3 top-2 rounded-full p-0.5 text-slate-400 hover:text-white"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        )}
      </div>

      {/* If Search is Active, display live search results list */}
      {searchResults ? (
        <div className="space-y-2.5 animate-in fade-in duration-150">
          <div className="flex items-center justify-between px-1 text-xs text-slate-400 font-bold">
            <span>Found {searchResults.length} topics matching "{searchQuery}"</span>
            <button onClick={() => setSearchQuery('')} className="text-cyan-400 hover:underline">
              Close Search
            </button>
          </div>

          {searchResults.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-blue-900/60 bg-[#081830] p-6 text-center text-slate-400">
              <p className="font-bold text-sm">No exact topic found for "{searchQuery}"</p>
              <p className="text-xs mt-1">Try typing "BCA", "Math", "Java", "Physics", or "Constitutional Law".</p>
            </div>
          ) : (
            <div className="space-y-2">
              {searchResults.map(({ course, semester, paper }) => (
                <button
                  key={`${course.id}-${semester}-${paper.id}`}
                  onClick={() => {
                    setSelectedCourseId(course.id);
                    setSelectedSemester(semester);
                    setActiveSubjectId(paper.id);
                    setSearchQuery('');
                    setStep('subjects');
                  }}
                  className="flex w-full items-center justify-between rounded-2xl border border-blue-900/70 bg-[#091b36] p-3 text-left hover:border-cyan-400 hover:bg-[#0e274c] transition shadow-md group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white p-1 shrink-0 shadow-xs">
                      {getCourseVectorIcon(course.id, 'h-7 w-7')}
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-cyan-400">
                        {course.shortCode} • {getOrdinal(semester)} Sem
                      </div>
                      <div className="text-xs font-black text-white group-hover:text-cyan-200">
                        {paper.code}: {paper.name}
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-1 rounded-md bg-blue-950 text-blue-300 border border-blue-800/60 shrink-0">
                    {paper.paperType}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      ) : (
        <>
          {/* ========================================================================= */}
          {/* SCREEN 1: COURSES / DEPARTMENTS GRID (Inspired by Image 1)               */}
          {/* ========================================================================= */}
          {step === 'courses' && (
            <div className="space-y-3.5 animate-in fade-in duration-150">
              
              {/* Top "MY COURSE" Card (Matching Image 1 top banner) */}
              <div className="rounded-2xl border border-blue-800/80 bg-gradient-to-r from-[#0a1e3d] to-[#07172e] p-3 sm:p-3.5 shadow-xl flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white p-1.5 shadow-md shrink-0">
                    {getCourseVectorIcon(currentCourse.id, 'h-9 w-9')}
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-cyan-400 block">
                      MY BRANCH / COURSE
                    </span>
                    <h3 className="text-sm sm:text-base font-black text-white leading-tight">
                      {currentCourse.shortCode}
                    </h3>
                    <span className="text-[11px] font-bold text-amber-300">
                      {currentCourse.degree}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setStep('semesters')}
                  className="flex items-center gap-1 rounded-xl bg-cyan-600 px-3 py-2 text-xs font-black text-white shadow-md hover:bg-cyan-500 active:scale-95 transition shrink-0"
                >
                  <span>Open</span>
                  <Settings className="h-3.5 w-3.5" />
                </button>
              </div>

              {/* Stream / Faculty Filter Bar */}
              <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                {(['All', 'Vocational', 'Science', 'Commerce', 'Arts'] as const).map((stream) => {
                  const isActive = streamFilter === stream;
                  return (
                    <button
                      key={stream}
                      onClick={() => setStreamFilter(stream)}
                      className={`flex shrink-0 items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-bold transition-all ${
                        isActive
                          ? 'border border-cyan-400 bg-cyan-500/20 text-white shadow-xs font-black'
                          : 'border border-blue-900/60 bg-[#07162d] text-slate-400 hover:text-white'
                      }`}
                    >
                      <span>{stream === 'All' ? 'All Courses' : stream}</span>
                    </button>
                  );
                })}
              </div>

              {/* Centered Section Title: CORE BRANCHES / PU COURSES */}
              <div className="text-center pt-1 pb-1">
                <h2 className="text-xs sm:text-sm font-black tracking-widest text-[#00d2ff] uppercase">
                  PATNA UNIVERSITY COURSES
                </h2>
              </div>

              {/* 3-Column Grid of High-Fidelity Course Cards (Inspired by Image 1) */}
              <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
                {displayedCourses.map((course) => (
                  <button
                    key={course.id}
                    onClick={() => {
                      setSelectedCourseId(course.id);
                      setSelectedSemester(1);
                      const firstP = course.semesters[0]?.papers[0];
                      if (firstP) setActiveSubjectId(firstP.id);
                      setStep('semesters');
                    }}
                    className="group flex flex-col items-center justify-center rounded-2xl border border-blue-900/70 bg-[#091b36] p-2.5 sm:p-3 shadow-md hover:border-cyan-400 hover:bg-[#0f284e] active:scale-95 transition duration-150"
                  >
                    {/* Polished White Squircle containing the high-contrast vector icon */}
                    <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-white p-1.5 shadow-md transition-all duration-200 group-hover:scale-105 group-hover:shadow-cyan-400/20">
                      {getCourseVectorIcon(course.id, 'h-9 w-9 sm:h-10 sm:w-10')}
                    </div>

                    {/* Bold course short label below */}
                    <span className="mt-2 text-center text-xs font-black text-white tracking-tight leading-tight line-clamp-2 max-w-full group-hover:text-cyan-200">
                      {course.shortCode}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* SCREEN 2: SELECT YOUR SEMESTER (Inspired by Image 2)                      */}
          {/* ========================================================================= */}
          {step === 'semesters' && (
            <div className="space-y-3.5 animate-in fade-in duration-150">
              
              {/* Breadcrumb Course Info Card */}
              <div className="rounded-2xl border border-blue-900/80 bg-[#081830] p-3.5 text-center shadow-lg">
                <span className="text-xs font-bold text-cyan-400 tracking-wider block">
                  {viewMode === 'syllabus' ? 'Latest Syllabus' : 'Past Year Question Papers (PYQs)'}
                </span>
                <h2 className="text-base sm:text-lg font-black text-white mt-0.5">
                  {currentCourse.name}
                </h2>
                <span className="text-[11px] text-slate-400 font-semibold block mt-0.5">
                  {currentCourse.degree} • Patna University
                </span>
              </div>

              {/* Main Selection Box: Select Your Semester */}
              <div className="rounded-3xl border border-blue-900/80 bg-[#091a36] p-4 sm:p-5 shadow-2xl">
                <h3 className="text-center text-sm sm:text-base font-black text-[#fbbf24] tracking-wide mb-3 sm:mb-4">
                  Select Your Semester
                </h3>

                {/* 2-Column Grid of Semester Buttons (Inspired by Image 2) */}
                <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                  {Array.from({ length: currentCourse.totalSemesters }, (_, i) => i + 1).map((semNum) => {
                    const semData = currentCourse.semesters.find((s) => s.semester === semNum);
                    const subjectCount = semData?.papers.length || 4;

                    return (
                      <button
                        key={semNum}
                        onClick={() => {
                          setSelectedSemester(semNum);
                          if (semData && semData.papers.length > 0) {
                            setActiveSubjectId(semData.papers[0].id);
                          }
                          setStep('subjects');
                        }}
                        className="flex items-center gap-2.5 sm:gap-3 rounded-2xl border border-blue-800/80 bg-[#0c234a] p-3 text-left shadow-md hover:border-cyan-400 hover:bg-[#102d5e] active:scale-97 transition group"
                      >
                        {/* Lime/Emerald Book Icon Badge */}
                        <SemesterBookIcon className="h-6 w-6" />

                        <div className="overflow-hidden">
                          <div className="text-xs sm:text-sm font-black text-white group-hover:text-cyan-200 truncate">
                            {getOrdinal(semNum)} Semester
                          </div>
                          <div className="text-[10px] text-slate-400 font-semibold">
                            {subjectCount} Subjects
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* SCREEN 3: SUBJECTS & UNIT SYLLABUS DETAIL (Inspired by Image 3)            */}
          {/* ========================================================================= */}
          {step === 'subjects' && (
            <div className="space-y-3.5 animate-in fade-in duration-150">
              
              {/* Header Card: Semester & Course Details */}
              <div className="rounded-2xl border border-blue-900/80 bg-[#081830] p-3.5 text-center shadow-lg">
                <h2 className="text-base sm:text-lg font-black text-[#a3e635] tracking-tight">
                  {getOrdinal(selectedSemester)} Semester {viewMode === 'syllabus' ? 'Syllabus' : 'PYQs'}
                </h2>
                <p className="text-xs sm:text-sm font-bold text-white mt-0.5">
                  {currentCourse.name}
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 font-medium mt-0.5">
                  For Batch 2024-28 Onwards (PU FYUGP CBCS)
                </p>
              </div>

              {/* Credits Table Collapsible Accordion (Inspired by Image 3) */}
              <div className="rounded-2xl border border-blue-900/80 bg-[#091b36] overflow-hidden shadow-md">
                <button
                  onClick={() => setIsCreditsTableOpen(!isCreditsTableOpen)}
                  className="flex w-full items-center justify-between p-3 text-xs sm:text-sm font-black text-cyan-400 hover:bg-blue-950/40 transition"
                >
                  <span className="flex items-center gap-1.5">
                    <Table className="h-4 w-4" /> Credits Table & Examination Matrix
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 text-cyan-400 transition-transform duration-200 ${
                      isCreditsTableOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isCreditsTableOpen && (
                  <div className="p-3 pt-0 text-xs border-t border-blue-900/60 space-y-2 bg-[#061426]">
                    <div className="grid grid-cols-3 gap-2 text-center pt-2">
                      <div className="p-2 rounded-xl bg-blue-950/80 border border-blue-900">
                        <div className="text-[10px] text-slate-400">Total Credits</div>
                        <div className="text-sm font-black text-white">20 - 22</div>
                      </div>
                      <div className="p-2 rounded-xl bg-blue-950/80 border border-blue-900">
                        <div className="text-[10px] text-slate-400">End-Sem Marks</div>
                        <div className="text-sm font-black text-cyan-300">70 / Paper</div>
                      </div>
                      <div className="p-2 rounded-xl bg-blue-950/80 border border-blue-900">
                        <div className="text-[10px] text-slate-400">Internal Marks</div>
                        <div className="text-sm font-black text-amber-300">30 / Paper</div>
                      </div>
                    </div>
                    <div className="text-[11px] text-slate-400 leading-relaxed pt-1">
                      • Major Course (MJC): 4-6 Credits | Minor Course (MIC): 4 Credits<br />
                      • Multidisciplinary (MDC) / SEC: 3 Credits | Value Added (VAC): 2 Credits
                    </div>
                  </div>
                )}
              </div>

              {/* Main Subjects Container (Inspired by Image 3) */}
              <div className="rounded-3xl border border-blue-900/80 bg-[#091a36] p-4 shadow-xl space-y-3.5">
                
                {/* 1. Theory Subjects Section */}
                <div>
                  <h3 className="text-xs sm:text-sm font-black text-[#fbbf24] tracking-wide mb-2.5 flex items-center gap-1.5">
                    Theory Subjects
                  </h3>

                  <div className="space-y-2">
                    {theoryPapers.map((paper) => {
                      const isActive = activePaper?.id === paper.id;
                      return (
                        <button
                          key={paper.id}
                          onClick={() => setActiveSubjectId(paper.id)}
                          className={`w-full rounded-2xl py-2.5 px-3.5 text-xs sm:text-sm font-bold text-left transition-all ${
                            isActive
                              ? 'bg-[#fbbf24] text-slate-950 font-black shadow-lg border-2 border-amber-300 scale-[1.01]'
                              : 'border border-blue-800/80 bg-[#0c234a] text-white hover:border-cyan-400 hover:bg-[#102d5e]'
                          }`}
                        >
                          <div className="flex items-center justify-between gap-2">
                            <span className="truncate">{paper.code ? `${paper.code}: ${paper.name}` : paper.name}</span>
                            <span
                              className={`text-[10px] px-2 py-0.5 rounded-full shrink-0 ${
                                isActive ? 'bg-black/20 text-slate-950' : 'bg-blue-950 text-cyan-300'
                              }`}
                            >
                              {paper.credits} Credits
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Lab Subjects Section (if any) */}
                {labPapers.length > 0 && (
                  <div>
                    <h3 className="text-xs sm:text-sm font-black text-cyan-400 tracking-wide mb-2.5 flex items-center gap-1.5">
                      Lab & Practical Subjects
                    </h3>

                    <div className="space-y-2">
                      {labPapers.map((paper) => {
                        const isActive = activePaper?.id === paper.id;
                        return (
                          <button
                            key={paper.id}
                            onClick={() => setActiveSubjectId(paper.id)}
                            className={`w-full rounded-2xl py-2.5 px-3.5 text-xs sm:text-sm font-bold text-left transition-all ${
                              isActive
                                ? 'bg-cyan-400 text-slate-950 font-black shadow-lg border-2 border-cyan-200 scale-[1.01]'
                                : 'border border-blue-800/80 bg-[#0c234a] text-white hover:border-cyan-400 hover:bg-[#102d5e]'
                            }`}
                          >
                            <div className="flex items-center justify-between gap-2">
                              <span className="truncate">{paper.code ? `${paper.code}: ${paper.name}` : paper.name}</span>
                              <span
                                className={`text-[10px] px-2 py-0.5 rounded-full shrink-0 ${
                                  isActive ? 'bg-black/20 text-slate-950' : 'bg-cyan-950 text-cyan-300'
                                }`}
                              >
                                Practical
                              </span>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Active Subject Detailed Unit Card (Inspired by Image 3 bottom section) */}
              {activePaper && (
                <div className="rounded-3xl border border-blue-900/80 bg-[#091a36] p-4 sm:p-5 shadow-2xl space-y-4">
                  
                  {/* Subject Title in Bright Cyan */}
                  <div className="border-b border-blue-900/60 pb-3">
                    <h3 className="text-base sm:text-lg font-black text-[#00d2ff] tracking-tight">
                      {activePaper.name}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 mt-1.5">
                      <span className="rounded-lg bg-blue-950 px-2 py-0.5 text-[11px] font-bold text-cyan-300 border border-blue-800/60">
                        {activePaper.code} • {activePaper.paperType}
                      </span>
                      <span className="text-xs text-slate-400">
                        {activePaper.credits} Credits ({activePaper.theoryMarks} End-Sem + {activePaper.internalMarks} Internal)
                      </span>
                    </div>
                  </div>

                  {/* Syllabus Mode vs PYQ Mode rendering */}
                  {viewMode === 'syllabus' ? (
                    <div className="space-y-4">
                      {/* Units Breakdown */}
                      {activePaper.units && activePaper.units.length > 0 ? (
                        activePaper.units.map((unit) => {
                          const unitKey = `${activePaper.id}-unit-${unit.unitNumber}`;
                          const isDone = !!completedUnits[unitKey];

                          return (
                            <div key={unit.unitNumber} className="space-y-2">
                              {/* Unit Header with Gold Bullet */}
                              <div className="flex items-start justify-between gap-2">
                                <h4 className="text-xs sm:text-sm font-black text-[#fbbf24] flex items-center gap-1.5">
                                  <span>•</span>
                                  <span>Unit {unit.unitNumber}.0: {unit.title}</span>
                                </h4>
                              </div>

                              {/* Collapsible/Badge: Theory Session Outcomes (TSOs) */}
                              <div className="rounded-xl border border-blue-900/70 bg-[#051326] p-2.5 space-y-2">
                                <div className="text-[11px] font-bold text-slate-400 flex items-center gap-1">
                                  <span>►</span>
                                  <span>Prescribed Topics & Learning Outcomes:</span>
                                </div>

                                <ul className="space-y-1 pl-4 text-xs text-slate-300 list-disc">
                                  {unit.topics.map((topic, idx) => (
                                    <li key={idx} className="leading-relaxed">
                                      {topic}
                                    </li>
                                  ))}
                                </ul>

                                {/* Action Buttons at bottom of unit (Inspired by Image 3) */}
                                <div className="flex flex-wrap items-center gap-2 pt-1.5 border-t border-blue-900/50">
                                  {/* Ask AI Doubt Button */}
                                  <button
                                    onClick={() =>
                                      setAiModalTopic({
                                        unitTitle: `Unit ${unit.unitNumber}: ${unit.title}`,
                                        topics: unit.topics,
                                      })
                                    }
                                    className="flex items-center gap-1 rounded-lg border border-cyan-500/40 bg-cyan-950/60 px-2.5 py-1 text-[11px] font-bold text-cyan-300 hover:bg-cyan-900/60 transition"
                                  >
                                    <Sparkles className="h-3 w-3 text-cyan-400" />
                                    <span>Ask AI</span>
                                  </button>

                                  {/* YouTube Search Button */}
                                  <a
                                    href={`https://www.youtube.com/results?search_query=${encodeURIComponent(
                                      `${activePaper.name} ${unit.title} Patna University lecture`
                                    )}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-1 rounded-lg border border-red-500/40 bg-red-950/60 px-2.5 py-1 text-[11px] font-bold text-red-300 hover:bg-red-900/60 transition"
                                  >
                                    <YouTubeIcon className="h-3 w-3 text-red-400" />
                                    <span>YouTube</span>
                                  </a>

                                  {/* Mark as Done Tracker */}
                                  <button
                                    onClick={() => toggleUnitDone(unitKey)}
                                    className={`flex items-center gap-1 rounded-lg px-2.5 py-1 text-[11px] font-bold transition ${
                                      isDone
                                        ? 'bg-emerald-600 text-white font-black'
                                        : 'border border-emerald-500/40 bg-emerald-950/60 text-emerald-300 hover:bg-emerald-900/60'
                                    }`}
                                  >
                                    {isDone ? <Check className="h-3 w-3" /> : <Circle className="h-3 w-3" />}
                                    <span>{isDone ? 'Done' : 'Mark as Done'}</span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          );
                        })
                      ) : (
                        <p className="text-xs text-slate-400 italic">
                          Topics are aligned with the master CBCS notification. Download PDF below.
                        </p>
                      )}

                      {/* Recommended Textbooks */}
                      {activePaper.recommendedBooks && activePaper.recommendedBooks.length > 0 && (
                        <div className="rounded-xl border border-blue-900/60 bg-[#061426] p-3 text-xs space-y-1">
                          <span className="font-bold text-cyan-400 block">📚 Recommended Textbooks & Authors:</span>
                          <ul className="list-disc pl-4 text-slate-300 space-y-0.5 text-[11px]">
                            {activePaper.recommendedBooks.map((book, idx) => (
                              <li key={idx}>{book}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ) : (
                    /* PYQs Mode View */
                    <div className="space-y-3">
                      <div className="rounded-2xl border border-emerald-500/40 bg-[#06241a] p-3.5 text-xs text-emerald-200">
                        <p className="font-bold text-sm text-emerald-300">Patna University PYQs Archive</p>
                        <p className="mt-1">
                          Showing verified end-semester question papers for <b>{activePaper.name}</b>.
                        </p>
                      </div>

                      <div className="space-y-2">
                        {[2024, 2023, 2022].map((yr) => (
                          <div
                            key={yr}
                            className="flex items-center justify-between rounded-xl border border-blue-900/70 bg-[#061428] p-3 hover:border-emerald-500/60 transition"
                          >
                            <div>
                              <div className="text-xs font-black text-white">
                                {yr} End-Semester Question Paper
                              </div>
                              <div className="text-[10px] text-slate-400">
                                70 Marks • Regular & Backlog Batch
                              </div>
                            </div>
                            <a
                              href={activePaper.pdfUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="flex items-center gap-1 rounded-xl bg-emerald-600 px-3 py-1.5 text-xs font-bold text-white hover:bg-emerald-500 transition"
                            >
                              <FileDown className="h-3.5 w-3.5" /> PDF
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Primary Action Buttons Bar */}
                  <div className="pt-2 border-t border-blue-900/60 flex flex-col sm:flex-row gap-2">
                    <a
                      href={activePaper.pdfUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 py-2.5 px-4 text-xs font-black text-white shadow-lg hover:from-cyan-500 hover:to-blue-500 active:scale-98 transition"
                    >
                      <FileDown className="h-4 w-4" /> Download Official PDF ({activePaper.fileSize})
                    </a>

                    <button
                      onClick={handleShare}
                      className="flex items-center justify-center gap-1.5 rounded-xl border border-emerald-500/50 bg-[#0a3324] py-2.5 px-4 text-xs font-black text-[#25d366] hover:bg-[#0d422f] active:scale-98 transition"
                    >
                      <Share2 className="h-4 w-4" /> WhatsApp Share
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </>
      )}

      {/* Quick AI Study Assistant Modal */}
      {aiModalTopic && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/80 backdrop-blur-xs animate-in fade-in duration-150"
          onClick={() => setAiModalTopic(null)}
        >
          <div
            className="relative w-full max-w-md rounded-3xl border border-cyan-500/50 bg-[#081830] p-5 shadow-2xl text-white space-y-3"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setAiModalTopic(null)}
              className="absolute right-4 top-4 rounded-full p-1 text-slate-400 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2 text-cyan-400">
              <Sparkles className="h-5 w-5" />
              <h3 className="text-sm font-black">AI Study Companion</h3>
            </div>

            <p className="text-xs font-bold text-[#fbbf24]">{aiModalTopic.unitTitle}</p>

            <div className="rounded-xl border border-blue-900 bg-[#040e1f] p-3 text-xs space-y-2 text-slate-300">
              <p className="font-bold text-white text-[11px]">Key Exam Questions for this Unit:</p>
              <ul className="list-disc pl-4 space-y-1 text-[11px]">
                {aiModalTopic.topics.slice(0, 3).map((t, idx) => (
                  <li key={idx}>Explain the core concepts and real-world application of "{t}".</li>
                ))}
                <li>What are the high-weightage 10-mark theoretical questions typically asked in PU exams?</li>
              </ul>
            </div>

            <div className="flex gap-2">
              <a
                href={`https://chatgpt.com/?q=${encodeURIComponent(
                  `Act as an expert professor for Patna University. Explain in detail with examples and exam answers: ${aiModalTopic.unitTitle} topics: ${aiModalTopic.topics.join(
                    ', '
                  )}`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 text-center rounded-xl bg-cyan-600 py-2 px-3 text-xs font-black text-white hover:bg-cyan-500 transition"
              >
                Explain with AI (ChatGPT)
              </a>
              <button
                onClick={() => setAiModalTopic(null)}
                className="rounded-xl border border-blue-800 bg-[#0c234a] py-2 px-3 text-xs font-bold text-slate-300 hover:text-white"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
