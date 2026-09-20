'use client';

import React, { useState, useMemo } from 'react';
import {
  puCompleteSyllabusData,
  puFacultyList,
  puSpecialSyllabusDownloads,
} from '@/data/puSyllabusComplete';
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
  ExternalLink,
  Award,
  BookOpen,
  CheckCircle2,
  FileText,
  Info,
  Layers,
  Sparkles,
  HelpCircle,
  Clock,
  Check,
} from 'lucide-react';
import { CampusPartnerBanner } from './CampusPartnerBanner';

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
  const [selectedFaculty, setSelectedFaculty] = useState<string>('All');
  const [selectedCourseId, setSelectedCourseId] = useState<string>('bca');
  const [selectedSemester, setSelectedSemester] = useState<number>(1);
  const [activeSubjectId, setActiveSubjectId] = useState<string>('bca-101');
  const [isCreditsTableOpen, setIsCreditsTableOpen] = useState(false);
  const [creditTableTab, setCreditTableTab] = useState<'current' | 'framework' | 'exam'>('current');

  // Helper for colored paper type badges
  const getPaperTypeBadge = (paperType: string) => {
    if (paperType.includes('Major')) return { label: 'Major', bg: 'bg-amber-400/20 text-amber-300 border-amber-500/40' };
    if (paperType.includes('Minor')) return { label: 'Minor', bg: 'bg-emerald-400/20 text-emerald-300 border-emerald-500/40' };
    if (paperType.includes('Multidisciplinary')) return { label: 'MDC', bg: 'bg-purple-400/20 text-purple-300 border-purple-500/40' };
    if (paperType.includes('Ability')) return { label: 'AEC', bg: 'bg-pink-400/20 text-pink-300 border-pink-500/40' };
    if (paperType.includes('Skill')) return { label: 'SEC', bg: 'bg-cyan-400/20 text-cyan-300 border-cyan-500/40' };
    if (paperType.includes('Value Added')) return { label: 'VAC', bg: 'bg-orange-400/20 text-orange-300 border-orange-500/40' };
    if (paperType.includes('Internship')) return { label: 'Internship', bg: 'bg-teal-400/20 text-teal-300 border-teal-500/40' };
    if (paperType.includes('Research')) return { label: 'Research', bg: 'bg-indigo-400/20 text-indigo-300 border-indigo-500/40' };
    if (paperType.includes('Practical')) return { label: 'Practical', bg: 'bg-sky-400/20 text-sky-300 border-sky-500/40' };
    return { label: 'Core', bg: 'bg-blue-400/20 text-blue-300 border-blue-500/40' };
  };

  // Sections configuration matching official PU structure
  const sectionsToDisplay = useMemo(() => {
    const SECTIONS_CONFIG = [
      {
        id: 'Social Science',
        name: 'Faculty of Social Science',
        icon: '🏛️',
        badge: '7 Subjects',
      },
      {
        id: 'Science',
        name: 'Faculty of Science',
        icon: '🔬',
        badge: '5 Subjects',
      },
      {
        id: 'Humanities',
        name: 'Faculty of Humanities',
        icon: '📚',
        badge: '9 Subjects',
      },
      {
        id: 'Commerce',
        name: 'Faculty of Commerce',
        icon: '💼',
        badge: '5 Groups',
      },
      {
        id: 'Vocational',
        name: 'Vocational & Professional Courses',
        icon: '💻',
        badge: '3 Degrees',
      },
      {
        id: 'Common NEP',
        name: 'Compulsory NEP Modules (AEDP, AEC & MDC)',
        icon: '🎯',
        badge: '11 Modules',
      },
    ];

    const targetSections =
      selectedFaculty === 'All'
        ? SECTIONS_CONFIG
        : SECTIONS_CONFIG.filter((s) => s.id === selectedFaculty);

    return targetSections
      .map((sec) => ({
        ...sec,
        courses: puCompleteSyllabusData.filter((c) => c.faculty === sec.id),
      }))
      .filter((sec) => sec.courses.length > 0);
  }, [selectedFaculty]);

  // Selected Course
  const currentCourse = useMemo(() => {
    return puCompleteSyllabusData.find((c) => c.id === selectedCourseId) || puCompleteSyllabusData[0] || null;
  }, [selectedCourseId]);

  // Selected Semester Data
  const currentSemesterData = useMemo(() => {
    if (!currentCourse || !currentCourse.semesters) {
      return { semester: 1, papers: [] };
    }
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

  // Determine appropriate PDF URL for active paper
  const activePaperPdfUrl = useMemo(() => {
    if (activePaper?.pdfUrl) return activePaper.pdfUrl;
    if (selectedSemester <= 2 && currentCourse?.officialPdfs?.sem1_2) {
      return currentCourse.officialPdfs.sem1_2;
    }
    if (selectedSemester > 2 && currentCourse?.officialPdfs?.sem3_8) {
      return currentCourse.officialPdfs.sem3_8;
    }
    return currentCourse?.officialPdfs?.annualHons || '#';
  }, [activePaper, selectedSemester, currentCourse]);

  // Dynamic Semester Credits and Marks Stats
  const semCreditsStats = useMemo(() => {
    const papers = currentSemesterData.papers || [];
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
  }, [currentSemesterData]);

  // WhatsApp Share
  const handleShare = () => {
    if (!activePaper) return;
    const courseName = currentCourse?.name || 'Patna University Course';
    const shareText = `📖 *Patna University Syllabus*\n🎯 *Course:* ${courseName}\n📚 *Semester:* ${selectedSemester}th Semester\n📝 *Paper:* ${activePaper.code} - ${activePaper.name}\n🔗 *Download Official PDF:* ${activePaperPdfUrl}\n\nShared via Lazy PU - Patna University Student Portal`;
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (puCompleteSyllabusData.length === 0) {
    return (
      <div className="w-full max-w-xl mx-auto space-y-4 pt-4 text-white pb-6">
        <div className="rounded-3xl border border-blue-900/80 bg-[#081830] p-8 text-center shadow-xl space-y-4">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-3xl text-cyan-400">
            📚
          </div>
          <h2 className="text-xl font-black text-white">सिलेबस डेटाबेस खाली है</h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
            पुराने और असत्यापित डेटा को पूरी तरह हटा दिया गया है। जैसे ही आप नए और प्रमाणित विषयों का डेटा प्रदान करेंगे, वे यहाँ सीधे उपलब्ध हो जाएँगे।
          </p>
          <div className="pt-2">
            <button
              onClick={onBackToHome}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-xs font-black text-white shadow-lg shadow-cyan-500/20 hover:scale-105 active:scale-95 transition"
            >
              होम पेज पर लौटें
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-xl mx-auto space-y-3.5 text-white pb-6">

      {/* ========================================================================= */}
      {/* SCREEN 1: COURSES / DEPARTMENTS BY FACULTY                                 */}
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
                {getCourseVectorIcon(currentCourse.id, 'h-6 w-6')}
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

          {/* Official PU Compulsory MJC-14 Syllabus Download Banner */}
          <div className="rounded-2xl border border-blue-800/80 bg-gradient-to-br from-[#0b2144] to-[#081830] p-3 sm:p-3.5 shadow-xl space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-400/20 text-amber-300 text-sm shrink-0">
                  🎓
                </span>
                <div>
                  <h3 className="text-xs sm:text-sm font-black text-white">
                    MJC-14 Research Methodology
                  </h3>
                  <p className="text-[10px] font-bold text-cyan-300">
                    Official Patna University Compulsory Syllabus
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-0.5">
              {puSpecialSyllabusDownloads.map((item, idx) => (
                <a
                  key={idx}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-xl border border-blue-700/60 bg-[#0d2850] px-3 py-2 text-xs font-black text-cyan-200 hover:border-cyan-400 hover:bg-[#12366b] transition shadow-xs group"
                >
                  <div className="overflow-hidden">
                    <div className="text-[11px] font-black text-white group-hover:text-cyan-200 truncate">
                      {item.faculty}
                    </div>
                    <div className="text-[10px] text-amber-300/90 font-medium">
                      {item.badge}
                    </div>
                  </div>
                  <FileDown className="h-4 w-4 text-cyan-300 shrink-0 ml-1 group-hover:scale-110 transition" />
                </a>
              ))}
            </div>
          </div>

          {/* Faculty Header & Filter Pills */}
          <div className="space-y-2 pt-1">
            <div className="text-center">
              <h2 className="text-xs sm:text-sm font-black tracking-widest text-[#00d2ff] uppercase">
                CORE FACULTIES & DEPARTMENTS
              </h2>
            </div>

            {/* Horizontal Scrollable Faculty Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              {puFacultyList.map((fac) => {
                const isActive = selectedFaculty === fac.id;
                return (
                  <button
                    key={fac.id}
                    onClick={() => setSelectedFaculty(fac.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-black shrink-0 transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20 scale-[1.02]'
                        : 'border border-blue-900/80 bg-[#0a1d3b] text-slate-300 hover:text-white hover:border-cyan-500/40'
                    }`}
                  >
                    {fac.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Section-Wise Course Catalog (Organized by Faculty/Stream) */}
          <div className="space-y-4">
            {sectionsToDisplay.map((sec) => (
              <div
                key={sec.id}
                className="rounded-3xl border border-blue-900/80 bg-[#081830] p-3.5 sm:p-4 shadow-xl space-y-3"
              >
                {/* Section Header with Icon and Count Badge */}
                <div className="flex items-center justify-between border-b border-blue-800/60 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-base sm:text-lg">{sec.icon}</span>
                    <h3 className="text-xs sm:text-sm font-black uppercase tracking-wider text-white">
                      {sec.name}
                    </h3>
                  </div>
                  <span className="rounded-full border border-cyan-500/30 bg-cyan-950/70 px-2.5 py-0.5 text-[10px] font-bold text-cyan-300">
                    {sec.badge}
                  </span>
                </div>

                {/* 3-Column Grid for courses belonging to this section */}
                <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
                  {sec.courses.map((course) => (
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
                        {getCourseVectorIcon(course.id, 'h-7 w-7 sm:h-8 sm:w-8')}
                      </div>

                      {/* Bold Course Short Code */}
                      <span className="mt-2 text-center text-xs font-black text-white tracking-tight leading-tight line-clamp-2 max-w-full group-hover:text-cyan-200">
                        {course.shortCode}
                      </span>

                      {/* Degree / Type Subtitle */}
                      <span className="text-[10px] text-slate-400 line-clamp-1 mt-0.5">
                        {course.degree ? course.degree.split(' ')[0] : course.faculty}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            ))}

            {sectionsToDisplay.length === 0 && (
              <div className="rounded-3xl border border-blue-900/80 bg-[#081830] p-8 text-center shadow-xl space-y-3">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-3xl">
                  📚
                </div>
                <h3 className="text-base font-bold text-white">सिलेबस डेटाबेस खाली है</h3>
                <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
                  सत्यापित और प्रामाणिक सिलेबस जोड़ने के लिए डेटाबेस तैयार है। जैसे ही आप विषयवार नया डेटा प्रदान करेंगे, वह यहाँ लाइव अपडेट हो जाएगा।
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SCREEN 2: SELECT YOUR SEMESTER & OFFICIAL PU PDF DOWNLOADS HUB              */}
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
              {defaultType === 'syllabus' ? 'Latest Official Syllabus' : 'Past Year Question Papers'}
            </span>
            <h2 className="text-base sm:text-lg font-black text-white mt-0.5">
              {currentCourse.name}
            </h2>
            <p className="text-[11px] font-bold text-amber-300 mt-0.5">
              {currentCourse.degree}
            </p>
          </div>

          {/* Official PU Website PDF Download Hub */}
          {currentCourse.officialPdfs && (
            <div className="rounded-2xl border border-blue-900/80 bg-[#071933] p-3 shadow-md space-y-2">
              <span className="text-[11px] font-black uppercase tracking-wider text-cyan-400 block text-center">
                Official pup.ac.in Full Syllabus PDFs
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {currentCourse.officialPdfs.sem1_2 && (
                  <a
                    href={currentCourse.officialPdfs.sem1_2}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-xl border border-cyan-600/60 bg-[#0b274d] px-3 py-2 text-xs font-black text-white hover:bg-[#10376d] transition shadow-xs group"
                  >
                    <div className="overflow-hidden">
                      <div className="truncate text-[11px] text-cyan-200">SEM-1 & 2 Syllabus</div>
                      <div className="text-[10px] text-slate-400">Official PDF</div>
                    </div>
                    <FileDown className="h-4 w-4 text-cyan-400 shrink-0 ml-1 group-hover:scale-110 transition" />
                  </a>
                )}

                {currentCourse.officialPdfs.sem3_8 && (
                  <a
                    href={currentCourse.officialPdfs.sem3_8}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-xl border border-blue-600/60 bg-[#0b274d] px-3 py-2 text-xs font-black text-white hover:bg-[#10376d] transition shadow-xs group"
                  >
                    <div className="overflow-hidden">
                      <div className="truncate text-[11px] text-cyan-200">SEM-3 to 8 Syllabus</div>
                      <div className="text-[10px] text-slate-400">Official PDF</div>
                    </div>
                    <FileDown className="h-4 w-4 text-cyan-400 shrink-0 ml-1 group-hover:scale-110 transition" />
                  </a>
                )}

                {currentCourse.officialPdfs.annualHons && (
                  <a
                    href={currentCourse.officialPdfs.annualHons}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-xl border border-amber-600/60 bg-[#1c2415] px-3 py-2 text-xs font-black text-white hover:bg-[#28351e] transition shadow-xs group"
                  >
                    <div className="overflow-hidden">
                      <div className="truncate text-[11px] text-amber-200">Annual (Part I, II, III)</div>
                      <div className="text-[10px] text-slate-400">Hons / Subs / Gen</div>
                    </div>
                    <FileDown className="h-4 w-4 text-amber-400 shrink-0 ml-1 group-hover:scale-110 transition" />
                  </a>
                )}

                {currentCourse.officialPdfs.otherPdfs?.map((other, idx) => (
                  <a
                    key={idx}
                    href={other.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-xl border border-emerald-600/60 bg-[#0d2a20] px-3 py-2 text-xs font-black text-white hover:bg-[#133e2f] transition shadow-xs group"
                  >
                    <div className="overflow-hidden">
                      <div className="truncate text-[11px] text-emerald-200">{other.label}</div>
                      <div className="text-[10px] text-slate-400">Special PU PDF</div>
                    </div>
                    <ExternalLink className="h-4 w-4 text-emerald-400 shrink-0 ml-1 group-hover:scale-110 transition" />
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* "Select Your Semester" Card */}
          <div className="rounded-3xl border border-blue-900/80 bg-[#091a36] p-4 sm:p-5 shadow-2xl">
            <h3 className="text-center text-sm sm:text-base font-black text-[#fbbf24] tracking-wide mb-3 sm:mb-4">
              Select Your Semester
            </h3>

            {/* 2-Column Grid of Semester Buttons */}
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
      {/* SCREEN 3: SUBJECTS & UNIT SYLLABUS DETAIL                                  */}
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
              Official Patna University Curriculum
            </p>
          </div>

          {/* Upgraded Interactive Credits & Examination Structure Table */}
          <div className="rounded-3xl border border-blue-800/80 bg-gradient-to-b from-[#0a1e3d] to-[#07162c] overflow-hidden shadow-2xl transition-all">
            {/* Header Trigger */}
            <button
              onClick={() => setIsCreditsTableOpen(!isCreditsTableOpen)}
              className="flex w-full items-center justify-between p-3.5 sm:p-4 text-left hover:bg-blue-900/30 transition group"
            >
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/30 border border-cyan-400/30 text-cyan-300 shadow-inner shrink-0 group-hover:scale-105 transition">
                  <Table className="h-5 w-5" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-xs sm:text-sm font-black text-white group-hover:text-cyan-300 transition">
                      Credits & Examination Structure
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-bold">
                      Exam Structure
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    {getOrdinal(selectedSemester)} Sem: <span className="text-cyan-300 font-bold">{semCreditsStats.paperCount} Papers</span> • <span className="text-amber-300 font-bold">{semCreditsStats.totalCredits} Credits</span> • <span className="text-emerald-300 font-bold">{semCreditsStats.grandTotal} Marks</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <div className="hidden sm:flex items-center gap-1 text-[11px] font-bold text-cyan-300">
                  <span>{isCreditsTableOpen ? 'Hide Details' : 'View Full Table'}</span>
                </div>
                <div className="h-7 w-7 rounded-xl bg-blue-950 border border-blue-800 flex items-center justify-center text-cyan-300 group-hover:border-cyan-400 transition">
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-300 ${
                      isCreditsTableOpen ? 'rotate-180 text-cyan-300' : 'text-slate-400'
                    }`}
                  />
                </div>
              </div>
            </button>

            {/* Collapsible Content */}
            {isCreditsTableOpen && (
              <div className="p-3.5 sm:p-4 pt-0 border-t border-blue-900/60 space-y-3.5 bg-[#051326] animate-in fade-in duration-200">
                
                {/* 1. Quick Stats Metric Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-3">
                  <div className="p-2.5 rounded-2xl bg-[#091f3e] border border-blue-800/80 shadow-xs">
                    <div className="text-[10px] uppercase font-bold text-slate-400">Semester Papers</div>
                    <div className="text-base sm:text-lg font-black text-white mt-0.5 flex items-center gap-1.5">
                      <BookOpen className="h-4 w-4 text-cyan-400" />
                      {semCreditsStats.paperCount} Subjects
                    </div>
                  </div>

                  <div className="p-2.5 rounded-2xl bg-[#091f3e] border border-blue-800/80 shadow-xs">
                    <div className="text-[10px] uppercase font-bold text-slate-400">Total Credits</div>
                    <div className="text-base sm:text-lg font-black text-amber-300 mt-0.5 flex items-center gap-1.5">
                      <Award className="h-4 w-4 text-amber-400" />
                      {semCreditsStats.totalCredits} Credits
                    </div>
                  </div>

                  <div className="p-2.5 rounded-2xl bg-[#091f3e] border border-blue-800/80 shadow-xs">
                    <div className="text-[10px] uppercase font-bold text-slate-400">End-Sem (ESE)</div>
                    <div className="text-base sm:text-lg font-black text-cyan-300 mt-0.5 flex items-center gap-1.5">
                      <FileText className="h-4 w-4 text-cyan-400" />
                      70 / Paper
                    </div>
                  </div>

                  <div className="p-2.5 rounded-2xl bg-[#091f3e] border border-blue-800/80 shadow-xs">
                    <div className="text-[10px] uppercase font-bold text-slate-400">Internal (CIA)</div>
                    <div className="text-base sm:text-lg font-black text-emerald-300 mt-0.5 flex items-center gap-1.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                      30 / Paper
                    </div>
                  </div>
                </div>

                {/* 2. Interactive Navigation Tabs */}
                <div className="flex rounded-2xl bg-[#08172c] p-1 border border-blue-900/80 gap-1">
                  <button
                    onClick={() => setCreditTableTab('current')}
                    className={`flex-1 py-1.5 px-2 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 ${
                      creditTableTab === 'current'
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md'
                        : 'text-slate-400 hover:text-white hover:bg-blue-950/50'
                    }`}
                  >
                    <span>📋 {getOrdinal(selectedSemester)} Sem Papers</span>
                  </button>

                  <button
                    onClick={() => setCreditTableTab('framework')}
                    className={`flex-1 py-1.5 px-2 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 ${
                      creditTableTab === 'framework'
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md'
                        : 'text-slate-400 hover:text-white hover:bg-blue-950/50'
                    }`}
                  >
                    <span>🏛️ Degree Framework (160 Cr)</span>
                  </button>

                  <button
                    onClick={() => setCreditTableTab('exam')}
                    className={`flex-1 py-1.5 px-2 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 ${
                      creditTableTab === 'exam'
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md'
                        : 'text-slate-400 hover:text-white hover:bg-blue-950/50'
                    }`}
                  >
                    <span>📝 Exam (70+30)</span>
                  </button>
                </div>

                {/* TAB 1: CURRENT SEMESTER PAPERS TABLE */}
                {creditTableTab === 'current' && (
                  <div className="space-y-2">
                    <div className="rounded-2xl border border-blue-900/80 overflow-hidden bg-[#07172e]">
                      <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse text-xs">
                          <thead>
                            <tr className="border-b border-blue-800/80 bg-[#0a2347] text-cyan-200">
                              <th className="py-2.5 px-3 font-black">Paper Code & Type</th>
                              <th className="py-2.5 px-3 font-black">Subject Title</th>
                              <th className="py-2.5 px-3 font-black text-center">Credits</th>
                              <th className="py-2.5 px-3 font-black text-right">Marks (ESE + CIA)</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-blue-900/50 text-slate-300">
                            {currentSemesterData.papers.map((p) => {
                              const isActive = activePaper?.id === p.id;
                              const badge = getPaperTypeBadge(p.paperType);

                              return (
                                <tr
                                  key={p.id}
                                  onClick={() => setActiveSubjectId(p.id)}
                                  className={`cursor-pointer transition-colors ${
                                    isActive
                                      ? 'bg-cyan-500/15 text-white font-bold'
                                      : 'hover:bg-blue-900/30'
                                  }`}
                                >
                                  <td className="py-2.5 px-3 whitespace-nowrap">
                                    <div className="flex items-center gap-1.5">
                                      <span className="font-black text-white">{p.code}</span>
                                      <span className={`text-[9px] px-1.5 py-0.5 rounded-md border font-extrabold ${badge.bg}`}>
                                        {badge.label}
                                      </span>
                                    </div>
                                  </td>
                                  <td className="py-2.5 px-3">
                                    <div className="font-medium truncate max-w-[200px] sm:max-w-[260px] text-slate-200">
                                      {p.name}
                                    </div>
                                  </td>
                                  <td className="py-2.5 px-3 text-center whitespace-nowrap">
                                    <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 font-black text-[11px] border border-amber-400/30">
                                      {p.credits} Cr
                                    </span>
                                  </td>
                                  <td className="py-2.5 px-3 text-right whitespace-nowrap">
                                    <span className="text-cyan-300 font-bold">{p.theoryMarks}</span>
                                    <span className="text-slate-500 mx-1">+</span>
                                    <span className="text-amber-300 font-bold">{p.internalMarks}</span>
                                    <span className="text-slate-500 mx-1">=</span>
                                    <span className="text-white font-black">{p.theoryMarks + p.internalMarks}</span>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                          <tfoot>
                            <tr className="bg-[#0a2347]/90 border-t border-cyan-500/40 text-xs font-black">
                              <td className="py-2.5 px-3 text-cyan-300" colSpan={2}>
                                Semester Total ({semCreditsStats.paperCount} Papers)
                              </td>
                              <td className="py-2.5 px-3 text-center text-amber-300">
                                {semCreditsStats.totalCredits} Credits
                              </td>
                              <td className="py-2.5 px-3 text-right text-emerald-300">
                                {semCreditsStats.grandTotal} Marks
                              </td>
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                    </div>
                    <p className="text-[10px] text-slate-400 italic text-center">
                      💡 Click any paper row to instantly view its prescribed Units & Topics below.
                    </p>
                  </div>
                )}

                {/* TAB 2: 4-YEAR CBCS DEGREE FRAMEWORK (160 CREDITS) */}
                {creditTableTab === 'framework' && (
                  <div className="space-y-2.5 text-xs">
                    <div className="rounded-2xl border border-blue-900/80 bg-[#081830] p-3 space-y-2">
                      <div className="flex items-center justify-between border-b border-blue-900/60 pb-2">
                        <span className="font-black text-amber-300 flex items-center gap-1.5">
                          <Layers className="h-4 w-4 text-amber-400" />
                          Official Bihar Degree Framework
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-black">
                          Total 160 Credits
                        </span>
                      </div>

                      <div className="space-y-1.5 pt-1">
                        <div className="flex items-center justify-between p-2 rounded-xl bg-[#0c234a]/80 border border-blue-800/60">
                          <div>
                            <span className="font-black text-white block">1. Major Core Courses (MJC-1 to MJC-16)</span>
                            <span className="text-[10px] text-slate-400">16 Courses across Semesters I to VIII</span>
                          </div>
                          <span className="text-amber-300 font-black text-xs px-2 py-0.5 rounded-md bg-amber-400/10 border border-amber-400/20">
                            80 Credits
                          </span>
                        </div>

                        <div className="flex items-center justify-between p-2 rounded-xl bg-[#0c234a]/80 border border-blue-800/60">
                          <div>
                            <span className="font-black text-white block">2. Minor Courses (MIC-1 to MIC-10)</span>
                            <span className="text-[10px] text-slate-400">10 Courses across Semesters I to VIII</span>
                          </div>
                          <span className="text-emerald-300 font-black text-xs px-2 py-0.5 rounded-md bg-emerald-400/10 border border-emerald-400/20">
                            32 Credits
                          </span>
                        </div>

                        <div className="flex items-center justify-between p-2 rounded-xl bg-[#0c234a]/80 border border-blue-800/60">
                          <div>
                            <span className="font-black text-white block">3. Multidisciplinary Courses (MDC-1 to MDC-3)</span>
                            <span className="text-[10px] text-slate-400">3 Courses in Semesters I, II, III</span>
                          </div>
                          <span className="text-purple-300 font-black text-xs px-2 py-0.5 rounded-md bg-purple-400/10 border border-purple-400/20">
                            09 Credits
                          </span>
                        </div>

                        <div className="flex items-center justify-between p-2 rounded-xl bg-[#0c234a]/80 border border-blue-800/60">
                          <div>
                            <span className="font-black text-white block">4. Ability Enhancement Courses (AEC-1 to AEC-4)</span>
                            <span className="text-[10px] text-slate-400">MIL (Hindi/Urdu/Eng), EVS, Disaster Mgmt, Sports/NSS</span>
                          </div>
                          <span className="text-pink-300 font-black text-xs px-2 py-0.5 rounded-md bg-pink-400/10 border border-pink-400/20">
                            08 Credits
                          </span>
                        </div>

                        <div className="flex items-center justify-between p-2 rounded-xl bg-[#0c234a]/80 border border-blue-800/60">
                          <div>
                            <span className="font-black text-white block">5. Skill Enhancement Courses (SEC-1 to SEC-3)</span>
                            <span className="text-[10px] text-slate-400">IT Tools, Big Data, SPSS, Presentation, AWS, etc.</span>
                          </div>
                          <span className="text-cyan-300 font-black text-xs px-2 py-0.5 rounded-md bg-cyan-400/10 border border-cyan-400/20">
                            09 Credits
                          </span>
                        </div>

                        <div className="flex items-center justify-between p-2 rounded-xl bg-[#0c234a]/80 border border-blue-800/60">
                          <div>
                            <span className="font-black text-white block">6. Value Added Courses (VAC-1 to VAC-2)</span>
                            <span className="text-[10px] text-slate-400">Constitutional Values, Ayurveda, Swachh Bharat, Fit India</span>
                          </div>
                          <span className="text-orange-300 font-black text-xs px-2 py-0.5 rounded-md bg-orange-400/10 border border-orange-400/20">
                            06 Credits
                          </span>
                        </div>

                        <div className="flex items-center justify-between p-2 rounded-xl bg-[#0c234a]/80 border border-blue-800/60">
                          <div>
                            <span className="font-black text-white block">7. Summer Internship (INT-1)</span>
                            <span className="text-[10px] text-slate-400">4-Week Institutional Internship in Semester V</span>
                          </div>
                          <span className="text-teal-300 font-black text-xs px-2 py-0.5 rounded-md bg-teal-400/10 border border-teal-400/20">
                            04 Credits
                          </span>
                        </div>

                        <div className="flex items-center justify-between p-2 rounded-xl bg-[#0c234a]/80 border border-blue-800/60">
                          <div>
                            <span className="font-black text-white block">8. Research Project / Dissertation (RP-1)</span>
                            <span className="text-[10px] text-slate-400">Independent Dissertation under Faculty Guide in Sem VIII</span>
                          </div>
                          <span className="text-indigo-300 font-black text-xs px-2 py-0.5 rounded-md bg-indigo-400/10 border border-indigo-400/20">
                            12 Credits
                          </span>
                        </div>
                      </div>

                      {/* Degree Exit Options Banner */}
                      <div className="mt-3 p-2.5 rounded-xl bg-blue-950/70 border border-cyan-500/30 text-[11px] text-slate-300 space-y-1">
                        <span className="font-black text-cyan-300 block">🎓 Multiple Entry & Exit Options (NEP 2020):</span>
                        <ul className="list-disc pl-4 space-y-0.5 text-[10px] text-slate-300">
                          <li><b className="text-white">1st Year Exit (40 Credits):</b> Under Graduate Certificate</li>
                          <li><b className="text-white">2nd Year Exit (80 Credits):</b> Under Graduate Diploma</li>
                          <li><b className="text-white">3rd Year Exit (120 Credits):</b> Bachelor Degree</li>
                          <li><b className="text-white">4th Year Complete (160 Credits):</b> Bachelor Degree with Honours / Research</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 3: OFFICIAL EXAM & EVALUATION PATTERN */}
                {creditTableTab === 'exam' && (
                  <div className="space-y-3 text-xs">
                    <div className="rounded-2xl border border-blue-900/80 bg-[#081830] p-3 sm:p-3.5 space-y-3">
                      <div>
                        <div className="flex items-center justify-between border-b border-blue-900/60 pb-2">
                          <span className="font-black text-cyan-300 flex items-center gap-1.5">
                            <Clock className="h-4 w-4 text-cyan-400" />
                            End-Semester Examination (ESE - 70 Marks)
                          </span>
                          <span className="text-[10px] font-bold text-slate-400">3 Hours Duration</span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2.5">
                          <div className="p-2.5 rounded-xl bg-[#092244] border border-blue-800">
                            <span className="text-[10px] font-bold text-amber-300 block uppercase">Part - A (Compulsory)</span>
                            <div className="text-sm font-black text-white mt-1">10 × 2 = 20 Marks</div>
                            <p className="text-[10px] text-slate-400 mt-0.5">Objective / Multiple Choice Questions (All Compulsory)</p>
                          </div>

                          <div className="p-2.5 rounded-xl bg-[#092244] border border-blue-800">
                            <span className="text-[10px] font-bold text-cyan-300 block uppercase">Part - B (Short Answer)</span>
                            <div className="text-sm font-black text-white mt-1">4 × 5 = 20 Marks</div>
                            <p className="text-[10px] text-slate-400 mt-0.5">Answer any 4 out of 6 short answer questions</p>
                          </div>

                          <div className="p-2.5 rounded-xl bg-[#092244] border border-blue-800">
                            <span className="text-[10px] font-bold text-emerald-300 block uppercase">Part - C (Long Answer)</span>
                            <div className="text-sm font-black text-white mt-1">3 × 10 = 30 Marks</div>
                            <p className="text-[10px] text-slate-400 mt-0.5">Answer any 3 out of 5 descriptive long answer questions</p>
                          </div>
                        </div>

                        {/* Strict OMR Rule */}
                        <div className="mt-2.5 p-2 rounded-xl bg-red-950/40 border border-red-800/60 text-[11px] text-red-300 flex items-center gap-2">
                          <span className="text-base shrink-0">⚠️</span>
                          <span><b>Strict University Regulation:</b> Examinations shall strictly NOT be held on OMR Sheets. Answers must be written in official answer booklets.</span>
                        </div>
                      </div>

                      {/* Continuous Internal Assessment (CIA - 30 Marks) */}
                      <div className="border-t border-blue-900/60 pt-2.5">
                        <div className="flex items-center justify-between pb-1.5">
                          <span className="font-black text-amber-300 flex items-center gap-1.5">
                            <CheckCircle2 className="h-4 w-4 text-amber-400" />
                            Continuous Internal Assessment (CIA - 30 Marks)
                          </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
                          <div className="p-2 rounded-xl bg-[#071933] border border-blue-900 text-center">
                            <div className="text-xs font-black text-white">15 Marks</div>
                            <div className="text-[10px] text-slate-400">Written Mid-Term Test</div>
                          </div>

                          <div className="p-2 rounded-xl bg-[#071933] border border-blue-900 text-center">
                            <div className="text-xs font-black text-white">10 Marks</div>
                            <div className="text-[10px] text-slate-400">Seminar / Presentation / Quiz</div>
                          </div>

                          <div className="p-2 rounded-xl bg-[#071933] border border-blue-900 text-center">
                            <div className="text-xs font-black text-white">05 Marks</div>
                            <div className="text-[10px] text-slate-400">Attendance & Conduct</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

              </div>
            )}
          </div>
          {/* Subjects Selection Container */}
          <div className="rounded-3xl border border-blue-900/80 bg-[#091a36] p-4 shadow-xl space-y-3">
            
            {/* 1. Theory Subjects Section */}
            <div>
              <h3 className="text-xs sm:text-sm font-black text-[#fbbf24] tracking-wide mb-2">
                Theory Subjects
              </h3>

              <div className="space-y-2">
                {theoryPapers.length > 0 ? (
                  theoryPapers.map((paper) => {
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
                  })
                ) : (
                  <p className="text-xs text-slate-400 italic">
                    Refer to the complete Semester PDF syllabus below.
                  </p>
                )}
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

          {/* Active Subject Units Detail */}
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
                        {/* Gold Unit Title */}
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
                      Detailed syllabus topics are available in the official PDF below.
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
                        href={activePaperPdfUrl}
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
                  href={activePaperPdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 py-2.5 px-4 text-xs font-black text-white shadow-lg hover:from-cyan-500 hover:to-blue-500 active:scale-98 transition"
                >
                  <FileDown className="h-4 w-4" /> Download Official PU PDF
                </a>

                <button
                  onClick={handleShare}
                  className="flex items-center justify-center gap-1.5 rounded-xl border border-emerald-500/50 bg-[#0a3324] py-2.5 px-4 text-xs font-black text-[#25d366] hover:bg-[#0d422f] active:scale-98 transition"
                >
                  <Share2 className="h-4 w-4" /> WhatsApp Share
                </button>
              </div>

              {/* In-Page Campus Partner / Sponsored Banner */}
              <CampusPartnerBanner sourcePage="syllabus" />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
