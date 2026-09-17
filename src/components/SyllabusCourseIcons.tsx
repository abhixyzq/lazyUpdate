'use client';

import React from 'react';
import {
  Landmark,
  Pyramid,
  Scale,
  TrendingUp,
  Globe,
  Brain,
  Users,
  BookOpen,
  BookText,
  Scroll,
  Feather,
  Palette,
  Lightbulb,
  Music,
  Atom,
  FlaskConical,
  Calculator,
  Leaf,
  Dna,
  BarChart3,
  CircleDollarSign,
  UserCheck,
  Megaphone,
  Laptop,
  Briefcase,
  Gavel,
  Trophy,
  GraduationCap,
  BookMarked,
} from 'lucide-react';

interface IconProps {
  className?: string;
}

// ==========================================
// 🏛️ FACULTY OF SOCIAL SCIENCE (7 SUBJECTS)
// ==========================================

// 1. History (ba-history): Landmark Historical Monument
export const HistoryCourseIcon: React.FC<IconProps> = ({ className = 'h-7 w-7' }) => (
  <div className="flex h-full w-full items-center justify-center rounded-xl bg-amber-50 text-amber-700">
    <Landmark className={className} strokeWidth={2.2} />
  </div>
);

// 2. AI & AS / Archaeology (ba-aih-archaeology): Ancient Pyramid Relic
export const ArchaeologyCourseIcon: React.FC<IconProps> = ({ className = 'h-7 w-7' }) => (
  <div className="flex h-full w-full items-center justify-center rounded-xl bg-orange-50 text-orange-600">
    <Pyramid className={className} strokeWidth={2.2} />
  </div>
);

// 3. Political Science (ba-political-science): Scales of Justice & Governance
export const PolSciCourseIcon: React.FC<IconProps> = ({ className = 'h-7 w-7' }) => (
  <div className="flex h-full w-full items-center justify-center rounded-xl bg-rose-50 text-rose-600">
    <Scale className={className} strokeWidth={2.2} />
  </div>
);

// 4. Economics (ba-economics): Growth Trend & Economic Markets
export const EconomicsCourseIcon: React.FC<IconProps> = ({ className = 'h-7 w-7' }) => (
  <div className="flex h-full w-full items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
    <TrendingUp className={className} strokeWidth={2.2} />
  </div>
);

// 5. Geography (ba-geography): Terrestrial Globe
export const GeographyCourseIcon: React.FC<IconProps> = ({ className = 'h-7 w-7' }) => (
  <div className="flex h-full w-full items-center justify-center rounded-xl bg-sky-50 text-sky-600">
    <Globe className={className} strokeWidth={2.2} />
  </div>
);

// 6. Psychology (ba-psychology): Human Cognitive Brain & Mind
export const PsychologyCourseIcon: React.FC<IconProps> = ({ className = 'h-7 w-7' }) => (
  <div className="flex h-full w-full items-center justify-center rounded-xl bg-purple-50 text-purple-600">
    <Brain className={className} strokeWidth={2.2} />
  </div>
);

// 7. Sociology (ba-sociology): Community & Social People
export const SociologyCourseIcon: React.FC<IconProps> = ({ className = 'h-7 w-7' }) => (
  <div className="flex h-full w-full items-center justify-center rounded-xl bg-blue-50 text-blue-600">
    <Users className={className} strokeWidth={2.2} />
  </div>
);

// ==========================================
// 📚 FACULTY OF HUMANITIES (7 SUBJECTS)
// ==========================================

// 8. Hindi (ba-hindi): Open Book & Literature
export const HindiCourseIcon: React.FC<IconProps> = ({ className = 'h-7 w-7' }) => (
  <div className="flex h-full w-full items-center justify-center rounded-xl bg-amber-50 text-amber-700">
    <BookOpen className={className} strokeWidth={2.2} />
  </div>
);

// 9. English (ba-english): Classic Book Text & Literature
export const EnglishCourseIcon: React.FC<IconProps> = ({ className = 'h-7 w-7' }) => (
  <div className="flex h-full w-full items-center justify-center rounded-xl bg-indigo-50 text-indigo-700">
    <BookText className={className} strokeWidth={2.2} />
  </div>
);

// 10. Sanskrit (ba-sanskrit): Ancient Vedic Scroll
export const SanskritCourseIcon: React.FC<IconProps> = ({ className = 'h-7 w-7' }) => (
  <div className="flex h-full w-full items-center justify-center rounded-xl bg-yellow-50 text-yellow-700">
    <Scroll className={className} strokeWidth={2.2} />
  </div>
);

// 11. Urdu (ba-urdu): Calligraphy Feather Quill
export const UrduCourseIcon: React.FC<IconProps> = ({ className = 'h-7 w-7' }) => (
  <div className="flex h-full w-full items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
    <Feather className={className} strokeWidth={2.2} />
  </div>
);

// 12. Maithili (ba-maithili): Mithila Arts & Culture Palette
export const MaithiliCourseIcon: React.FC<IconProps> = ({ className = 'h-7 w-7' }) => (
  <div className="flex h-full w-full items-center justify-center rounded-xl bg-pink-50 text-pink-600">
    <Palette className={className} strokeWidth={2.2} />
  </div>
);

// 13. Philosophy (ba-philosophy): Enlightenment & Critical Thought Lightbulb
export const PhilosophyCourseIcon: React.FC<IconProps> = ({ className = 'h-7 w-7' }) => (
  <div className="flex h-full w-full items-center justify-center rounded-xl bg-violet-50 text-violet-600">
    <Lightbulb className={className} strokeWidth={2.2} />
  </div>
);

// 14. Music (ba-music): Universal Musical Notes
export const MusicCourseIcon: React.FC<IconProps> = ({ className = 'h-7 w-7' }) => (
  <div className="flex h-full w-full items-center justify-center rounded-xl bg-fuchsia-50 text-fuchsia-600">
    <Music className={className} strokeWidth={2.2} />
  </div>
);

// ==========================================
// 🔬 FACULTY OF SCIENCE (6 SUBJECTS)
// ==========================================

// 15. Physics (bsc-physics): Quantum Atom & Dynamics
export const PhysicsCourseIcon: React.FC<IconProps> = ({ className = 'h-7 w-7' }) => (
  <div className="flex h-full w-full items-center justify-center rounded-xl bg-cyan-50 text-cyan-600">
    <Atom className={className} strokeWidth={2.2} />
  </div>
);

// 16. Chemistry (bsc-chemistry): Laboratory Flask Conical
export const ChemistryCourseIcon: React.FC<IconProps> = ({ className = 'h-7 w-7' }) => (
  <div className="flex h-full w-full items-center justify-center rounded-xl bg-teal-50 text-teal-600">
    <FlaskConical className={className} strokeWidth={2.2} />
  </div>
);

// 17. Mathematics (bsc-mathematics): Precision Math Calculator
export const MathCourseIcon: React.FC<IconProps> = ({ className = 'h-7 w-7' }) => (
  <div className="flex h-full w-full items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
    <Calculator className={className} strokeWidth={2.2} />
  </div>
);

// 18. Botany (bsc-botany): Botanical Sprout / Leaf
export const BotanyCourseIcon: React.FC<IconProps> = ({ className = 'h-7 w-7' }) => (
  <div className="flex h-full w-full items-center justify-center rounded-xl bg-green-50 text-green-600">
    <Leaf className={className} strokeWidth={2.2} />
  </div>
);

// 19. Zoology (bsc-zoology): Genetic DNA Helix
export const ZoologyCourseIcon: React.FC<IconProps> = ({ className = 'h-7 w-7' }) => (
  <div className="flex h-full w-full items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
    <Dna className={className} strokeWidth={2.2} />
  </div>
);

// 20. Statistics (bsc-statistics): Bar Chart Frequency Distribution
export const StatisticsCourseIcon: React.FC<IconProps> = ({ className = 'h-7 w-7' }) => (
  <div className="flex h-full w-full items-center justify-center rounded-xl bg-blue-50 text-blue-600">
    <BarChart3 className={className} strokeWidth={2.2} />
  </div>
);

// ==========================================
// 💼 FACULTY OF COMMERCE (3 GROUPS)
// ==========================================

// 21. Accounting & Finance (bcom-accounting-finance): Currency & Financial Ledger
export const AccountingFinanceCourseIcon: React.FC<IconProps> = ({ className = 'h-7 w-7' }) => (
  <div className="flex h-full w-full items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
    <CircleDollarSign className={className} strokeWidth={2.2} />
  </div>
);

// 22. Human Resource Management (bcom-hrm): Talent & People Check
export const HRMCourseIcon: React.FC<IconProps> = ({ className = 'h-7 w-7' }) => (
  <div className="flex h-full w-full items-center justify-center rounded-xl bg-blue-50 text-blue-700">
    <UserCheck className={className} strokeWidth={2.2} />
  </div>
);

// 23. Marketing Management (bcom-marketing): Promotion Megaphone
export const MarketingCourseIcon: React.FC<IconProps> = ({ className = 'h-7 w-7' }) => (
  <div className="flex h-full w-full items-center justify-center rounded-xl bg-orange-50 text-orange-600">
    <Megaphone className={className} strokeWidth={2.2} />
  </div>
);

// ==========================================
// 💻 VOCATIONAL & SPECIAL COURSES
// ==========================================

// 24. BCA / Computer Applications: Laptop
export const BCACourseIcon: React.FC<IconProps> = ({ className = 'h-7 w-7' }) => (
  <div className="flex h-full w-full items-center justify-center rounded-xl bg-slate-100 text-slate-700">
    <Laptop className={className} strokeWidth={2.2} />
  </div>
);

// 25. BBA / Business Administration: Briefcase
export const BBACourseIcon: React.FC<IconProps> = ({ className = 'h-7 w-7' }) => (
  <div className="flex h-full w-full items-center justify-center rounded-xl bg-amber-50 text-amber-800">
    <Briefcase className={className} strokeWidth={2.2} />
  </div>
);

// 26. Law / LL.B: Courtroom Gavel
export const LawCourseIcon: React.FC<IconProps> = ({ className = 'h-7 w-7' }) => (
  <div className="flex h-full w-full items-center justify-center rounded-xl bg-red-50 text-red-700">
    <Gavel className={className} strokeWidth={2.2} />
  </div>
);

// 27. Sports Science: Championship Trophy
export const SportsCourseIcon: React.FC<IconProps> = ({ className = 'h-7 w-7' }) => (
  <div className="flex h-full w-full items-center justify-center rounded-xl bg-amber-50 text-amber-600">
    <Trophy className={className} strokeWidth={2.2} />
  </div>
);

// 28. Common NEP / AEC / MDC: Graduation Cap & Official Mascot
export const CommonNEPCourseIcon: React.FC<IconProps> = ({ className = 'h-7 w-7' }) => (
  <div className="flex h-full w-full items-center justify-center rounded-xl bg-amber-50/50 p-0.5">
    <img src="/lazy-pu-logo.png" alt="Lazy PU Mascot" className={`${className} object-contain`} />
  </div>
);

// Backward-compatible Aliases
export const CommerceCourseIcon = AccountingFinanceCourseIcon;
export const ZoologyBioCourseIcon = ZoologyCourseIcon;
export const HindiSanskritCourseIcon = HindiCourseIcon;
export const UrduPersianCourseIcon = UrduCourseIcon;
export const GenericAcademicIcon = CommonNEPCourseIcon;

// ==========================================
// 🎯 MASTER ICON MAPPER (100% READY-MADE LUCIDE ICONS)
// ==========================================

export const getCourseVectorIcon = (courseId: string, className = 'h-7 w-7'): React.ReactNode => {
  const id = courseId.toLowerCase().trim();

  // Faculty of Social Science (7 Subjects)
  if (id === 'ba-history' || id.includes('history')) {
    return <HistoryCourseIcon className={className} />;
  }
  if (
    id === 'ba-aih-archaeology' ||
    id.includes('aih') ||
    id.includes('archaeolog') ||
    id.includes('ancient')
  ) {
    return <ArchaeologyCourseIcon className={className} />;
  }
  if (id === 'ba-political-science' || id.includes('political') || id.includes('pol-sci')) {
    return <PolSciCourseIcon className={className} />;
  }
  if (id === 'ba-economics' || id.includes('econom')) {
    return <EconomicsCourseIcon className={className} />;
  }
  if (id === 'ba-geography' || id.includes('geograph')) {
    return <GeographyCourseIcon className={className} />;
  }
  if (id === 'ba-psychology' || id.includes('psycholog')) {
    return <PsychologyCourseIcon className={className} />;
  }
  if (id === 'ba-sociology' || id.includes('sociolog')) {
    return <SociologyCourseIcon className={className} />;
  }

  // Faculty of Humanities (7 Subjects)
  if (id === 'ba-hindi' || id === 'hindi') {
    return <HindiCourseIcon className={className} />;
  }
  if (id === 'ba-english' || id === 'english') {
    return <EnglishCourseIcon className={className} />;
  }
  if (id === 'ba-sanskrit' || id === 'sanskrit') {
    return <SanskritCourseIcon className={className} />;
  }
  if (id === 'ba-urdu' || id === 'urdu' || id.includes('persian') || id.includes('arabic')) {
    return <UrduCourseIcon className={className} />;
  }
  if (id === 'ba-maithili' || id === 'maithili') {
    return <MaithiliCourseIcon className={className} />;
  }
  if (id === 'ba-philosophy' || id === 'philosophy') {
    return <PhilosophyCourseIcon className={className} />;
  }
  if (id === 'ba-music' || id === 'music') {
    return <MusicCourseIcon className={className} />;
  }

  // Faculty of Science (6 Subjects)
  if (id === 'bsc-physics' || id.includes('physic')) {
    return <PhysicsCourseIcon className={className} />;
  }
  if (id === 'bsc-chemistry' || id.includes('chem')) {
    return <ChemistryCourseIcon className={className} />;
  }
  if (id === 'bsc-mathematics' || id.includes('math')) {
    return <MathCourseIcon className={className} />;
  }
  if (id === 'bsc-botany' || id.includes('botan')) {
    return <BotanyCourseIcon className={className} />;
  }
  if (id === 'bsc-zoology' || id.includes('zoo') || id.includes('biolog')) {
    return <ZoologyCourseIcon className={className} />;
  }
  if (id === 'bsc-statistics' || id.includes('statistic')) {
    return <StatisticsCourseIcon className={className} />;
  }

  // Faculty of Commerce (3 Groups)
  if (
    id === 'bcom-accounting-finance' ||
    id.includes('account') ||
    id.includes('finance')
  ) {
    return <AccountingFinanceCourseIcon className={className} />;
  }
  if (id === 'bcom-hrm' || id.includes('hrm') || id.includes('human-resource')) {
    return <HRMCourseIcon className={className} />;
  }
  if (id === 'bcom-marketing' || id.includes('marketing')) {
    return <MarketingCourseIcon className={className} />;
  }

  // Vocational & Special
  if (id.includes('bca') || id.includes('computer') || id.includes('it')) {
    return <BCACourseIcon className={className} />;
  }
  if (id.includes('bba') || id.includes('business') || id.includes('manage')) {
    return <BBACourseIcon className={className} />;
  }
  if (id.includes('law') || id.includes('llb')) {
    return <LawCourseIcon className={className} />;
  }
  if (id.includes('sport') || id.includes('physical')) {
    return <SportsCourseIcon className={className} />;
  }

  return <CommonNEPCourseIcon className={className} />;
};

// Ready-made Book Icon for Semester Buttons
export const SemesterBookIcon: React.FC<{ className?: string }> = ({ className = 'h-5 w-5' }) => (
  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-xs">
    <BookMarked className={className} strokeWidth={2.2} />
  </div>
);
