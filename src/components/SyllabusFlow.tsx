'use client';

import React, { useState, useMemo } from 'react';
import { puCompleteSyllabusData } from '@/data/puSyllabusComplete';
import {
  getCourseVectorIcon,
  SemesterBookIcon,
} from './SyllabusCourseIcons';
import {
  ArrowLeft,
  ChevronDown,
  FileDown,
  Share2,
  Table,
  BookOpen,
} from 'lucide-react';

interface SyllabusFlowProps {
  onBackToHome?: () => void;
  defaultType?: 'syllabus' | 'pyq';
}

type NavigationStep = 'courses' | 'semesters' | 'subjects';

const getOrdinal = (n: number) => {
  const s = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
};

export const SyllabusFlow: React.FC<SyllabusFlowProps> = ({
  onBackToHome,
  defaultType = 'syllabus',
}) => {
  const [step, setStep] = useState<NavigationStep>('courses');
  const [selectedCourseId, setSelectedCourseId] = useState<string>('bca');
  const [selectedSemester, setSelectedSemester] = useState<number>(1);
  const [activeSubjectId, setActiveSubjectId] = useState<string>('bca-101');
  const [isCreditsTableOpen, setIsCreditsTableOpen] = useState(false);

  // Selected Course
  const currentCourse = useMemo(() => {
    return puCompleteSyllabusData.find((c) => c.id === selectedCourseId) || puCompleteSyllabusData[0];
  }, [selectedCourseId]);

  // Selected Semester Data
  const currentSemesterData = useMemo(() => {
    const sem = currentCourse.semesters.find((s) => s.semester === selectedSemester);
    return sem || currentCourse.semesters[0] || { semester: 1, papers: [] };
  }, [currentCourse, selectedSemester]);

  // Theory vs Lab Papers
  const theoryPapers = useMemo(() => {
    return currentSemesterData.papers.filter((p) => p.paperType !== 'Practical / Lab');
  }, [currentSemesterData]);

  const labPapers = useMemo(() => {
    return currentSemesterData.papers.filter((p) => p.paperType === 'Practical / Lab');
  }, [currentSemesterData]);

  // Active Subject
  const activePaper = useMemo(() => {
    const found = currentSemesterData.papers.find((p) => p.id === activeSubjectId);
    return found || currentSemesterData.papers[0] || null;
  }, [currentSemesterData, activeSubjectId]);

  // WhatsApp Share
  const handleShare = () => {
    if (!activePaper) return;
    const shareText = `📖 *Patna University Syllabus*\n🎯 *Course:* ${currentCourse.name}\n📚 *Semester:* ${selectedSemester}th Semester\n📝 *Paper:* ${activePaper.code} - ${activePaper.name}\n🔗 *Download PDF:* ${activePaper.pdfUrl}\n\nShared via Lazy PU - Patna University Student Portal`;
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="w-full max-w-xl mx-auto space-y-3.5 text-white pb-6">

      {/* ========================================================================= */}
      {/* SCREEN 1: COURSES / DEPARTMENTS (Inspired by Reference Image 1)           */}
      {/* ========================================================================= */}
      {step === 'courses' && (
        <div className="space-y-3.5 animate-in fade-in duration-150">
          
          {/* Top "MY BRANCH / COURSE" Card */}
          <div
            onClick={() => {
              setSelectedSemester(1);
              setStep('semesters');
            }}
            className="cursor-pointer rounded-2xl border border-blue-800/80 bg-gradient-to-r from-[#0a1e3d] to-[#07172e] p-3 sm:p-3.5 shadow-xl flex items-center justify-between gap-3 hover:border-cyan-400 transition"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white p-1.5 shadow-md shrink-0">
                {getCourseVectorIcon(currentCourse.id, 'h-9 w-9')}
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-cyan-400 block">
                  MY BRANCH
                </span>
                <h3 className="text-base font-black text-white leading-tight">
                  {currentCourse.shortCode}
                </h3>
                <span className="text-[11px] font-bold text-amber-300">
                  {currentCourse.degree}
                </span>
              </div>
            </div>

            <div className="text-right shrink-0">
              <span className="text-xs font-black text-cyan-300 hover:text-cyan-200 flex items-center gap-1">
                Open ➔
              </span>
            </div>
          </div>

          {/* Centered Section Title: CORE BRANCHES / DEPARTMENTS */}
          <div className="text-center pt-1 pb-1">
            <h2 className="text-xs sm:text-sm font-black tracking-widest text-[#00d2ff] uppercase">
              CORE BRANCHES & DEPARTMENTS
            </h2>
          </div>

          {/* Clean 3-Column Grid of Course Cards (Matching Image 1) */}
          <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
            {puCompleteSyllabusData.map((course) => (
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
                {/* Clean White Squircle containing the vector icon */}
                <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-white p-1.5 shadow-md transition-all duration-200 group-hover:scale-105 group-hover:shadow-cyan-400/20">
                  {getCourseVectorIcon(course.id, 'h-9 w-9 sm:h-10 sm:w-10')}
                </div>

                {/* Bold Course Short Code */}
                <span className="mt-2 text-center text-xs font-black text-white tracking-tight leading-tight line-clamp-2 max-w-full group-hover:text-cyan-200">
                  {course.shortCode}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SCREEN 2: SELECT YOUR SEMESTER (Inspired by Reference Image 2)            */}
      {/* ========================================================================= */}
      {step === 'semesters' && (
        <div className="space-y-3 animate-in fade-in duration-150">
          
          {/* Clean Back Navigation Button */}
          <button
            onClick={() => setStep('courses')}
            className="flex items-center gap-1.5 rounded-xl border border-cyan-500/40 bg-[#091b36] px-3.5 py-1.5 text-xs font-black text-cyan-300 hover:bg-[#0f284e] transition shadow-xs"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Courses
          </button>

          {/* Breadcrumb Course Info Card */}
          <div className="rounded-2xl border border-blue-900/80 bg-[#081830] p-3 text-center shadow-md">
            <span className="text-[11px] font-bold text-cyan-400 tracking-wider block">
              {defaultType === 'syllabus' ? 'Latest Syllabus' : 'Past Year Question Papers'}
            </span>
            <h2 className="text-base sm:text-lg font-black text-white mt-0.5">
              {currentCourse.name}
            </h2>
          </div>

          {/* "Select Your Semester" Card */}
          <div className="rounded-3xl border border-blue-900/80 bg-[#091a36] p-4 sm:p-5 shadow-2xl">
            <h3 className="text-center text-sm sm:text-base font-black text-[#fbbf24] tracking-wide mb-3 sm:mb-4">
              Select Your Semester
            </h3>

            {/* 2-Column Grid of Semester Buttons (Exact to Image 2) */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
              {Array.from({ length: currentCourse.totalSemesters }, (_, i) => i + 1).map((semNum) => {
                const semData = currentCourse.semesters.find((s) => s.semester === semNum);

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
                    {/* Emerald/Lime Book Icon Badge */}
                    <SemesterBookIcon className="h-6 w-6" />

                    <div className="overflow-hidden">
                      <div className="text-xs sm:text-sm font-black text-white group-hover:text-cyan-200 truncate">
                        {getOrdinal(semNum)} Semester
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
      {/* SCREEN 3: SUBJECTS & UNIT SYLLABUS DETAIL (Inspired by Reference Image 3)  */}
      {/* ========================================================================= */}
      {step === 'subjects' && (
        <div className="space-y-3 animate-in fade-in duration-150">
          
          {/* Clean Back Navigation Button */}
          <button
            onClick={() => setStep('semesters')}
            className="flex items-center gap-1.5 rounded-xl border border-cyan-500/40 bg-[#091b36] px-3.5 py-1.5 text-xs font-black text-cyan-300 hover:bg-[#0f284e] transition shadow-xs"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Semesters
          </button>

          {/* Top Header Card: Semester & Course Details */}
          <div className="rounded-2xl border border-blue-900/80 bg-[#081830] p-3.5 text-center shadow-md">
            <h2 className="text-base sm:text-lg font-black text-[#a3e635] tracking-tight">
              {getOrdinal(selectedSemester)} Semester {defaultType === 'syllabus' ? 'Syllabus' : 'PYQs'}
            </h2>
            <p className="text-xs sm:text-sm font-bold text-white mt-0.5">
              {currentCourse.name}
            </p>
            <p className="text-[10px] sm:text-xs text-slate-400 font-medium mt-0.5">
              For Batch 2024-28 Onwards
            </p>
          </div>

          {/* Credits Table Collapsible (Exact to Image 3) */}
          <div className="rounded-2xl border border-blue-900/80 bg-[#091b36] overflow-hidden shadow-md">
            <button
              onClick={() => setIsCreditsTableOpen(!isCreditsTableOpen)}
              className="flex w-full items-center justify-between p-3 text-xs sm:text-sm font-black text-cyan-400 hover:bg-blue-950/40 transition"
            >
              <span className="flex items-center gap-1.5">
                <Table className="h-4 w-4" /> Credits Table
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
              </div>
            )}
          </div>

          {/* Subjects Selection Container (Exact to Image 3) */}
          <div className="rounded-3xl border border-blue-900/80 bg-[#091a36] p-4 shadow-xl space-y-3">
            
            {/* 1. Theory Subjects Section */}
            <div>
              <h3 className="text-xs sm:text-sm font-black text-[#fbbf24] tracking-wide mb-2">
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
                          ? 'bg-[#fbbf24] text-slate-950 font-black shadow-lg border-2 border-amber-300'
                          : 'border border-blue-800/80 bg-[#0c234a] text-white hover:border-cyan-400 hover:bg-[#102d5e]'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="truncate">{paper.code ? `${paper.code}: ${paper.name}` : paper.name}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Lab Subjects Section (if applicable) */}
            {labPapers.length > 0 && (
              <div>
                <h3 className="text-xs sm:text-sm font-black text-cyan-400 tracking-wide mb-2 mt-2">
                  Lab Subjects
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
                            ? 'bg-cyan-400 text-slate-950 font-black shadow-lg border-2 border-cyan-200'
                            : 'border border-blue-800/80 bg-[#0c234a] text-white hover:border-cyan-400 hover:bg-[#102d5e]'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="truncate">{paper.code ? `${paper.code}: ${paper.name}` : paper.name}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Active Subject Units Detail (Clean & Exact to Image 3) */}
          {activePaper && (
            <div className="rounded-3xl border border-blue-900/80 bg-[#091a36] p-4 sm:p-5 shadow-2xl space-y-3.5">
              
              {/* Cyan Subject Title Header */}
              <div className="border-b border-blue-900/60 pb-2.5">
                <h3 className="text-base sm:text-lg font-black text-[#00d2ff] tracking-tight">
                  {activePaper.name}
                </h3>
                <span className="text-xs text-slate-400">
                  {activePaper.code} • {activePaper.credits} Credits ({activePaper.theoryMarks} End-Sem + {activePaper.internalMarks} Internal)
                </span>
              </div>

              {defaultType === 'syllabus' ? (
                /* Clean Units Breakdown */
                <div className="space-y-3">
                  {activePaper.units && activePaper.units.length > 0 ? (
                    activePaper.units.map((unit) => (
                      <div key={unit.unitNumber} className="space-y-1.5">
                        {/* Gold Unit Title (Exact to Image 3) */}
                        <h4 className="text-xs sm:text-sm font-black text-[#fbbf24]">
                          • Unit {unit.unitNumber}.0: {unit.title}
                        </h4>

                        {/* Prescribed Topics */}
                        <div className="rounded-xl border border-blue-900/60 bg-[#051326] p-2.5 text-xs text-slate-300">
                          <ul className="space-y-1 pl-3.5 list-disc text-[11px] sm:text-xs">
                            {unit.topics.map((topic, idx) => (
                              <li key={idx} className="leading-relaxed">
                                {topic}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-xs text-slate-400 italic">
                      Prescribed topics are included in the official PDF below.
                    </p>
                  )}

                  {/* Recommended Textbooks */}
                  {activePaper.recommendedBooks && activePaper.recommendedBooks.length > 0 && (
                    <div className="rounded-xl border border-blue-900/60 bg-[#061426] p-3 text-xs space-y-1">
                      <span className="font-bold text-cyan-400 block text-xs">📚 Recommended Textbooks:</span>
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
                <div className="space-y-2">
                  <p className="text-xs text-emerald-300 font-bold">Past Year Question Papers</p>
                  {[2024, 2023, 2022].map((yr) => (
                    <div
                      key={yr}
                      className="flex items-center justify-between rounded-xl border border-blue-900/70 bg-[#061428] p-2.5"
                    >
                      <span className="text-xs font-bold text-white">{yr} End-Sem Paper</span>
                      <a
                        href={activePaper.pdfUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-lg bg-emerald-600 px-2.5 py-1 text-xs font-black text-white hover:bg-emerald-500 transition"
                      >
                        PDF
                      </a>
                    </div>
                  ))}
                </div>
              )}

              {/* Action Buttons: Clean & Simple */}
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
    </div>
  );
};
