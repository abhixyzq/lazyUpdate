'use client';

import React from 'react';

// 1. Computer Monitor with Code Symbol (for BCA / IT) - inspired by Image 1 CSE icon
export const BCACourseIcon: React.FC<{ className?: string }> = ({ className = 'h-10 w-10' }) => (
  <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg" fill="none">
    {/* Monitor Frame */}
    <rect x="6" y="10" width="52" height="36" rx="6" fill="#0ea5e9" stroke="#0369a1" strokeWidth="2.5" />
    <rect x="10" y="14" width="44" height="28" rx="3" fill="#ffffff" />
    {/* Top colored dots */}
    <circle cx="16" cy="18" r="1.5" fill="#ef4444" />
    <circle cx="21" cy="18" r="1.5" fill="#f59e0b" />
    <circle cx="26" cy="18" r="1.5" fill="#10b981" />
    {/* Code Brackets */}
    <path
      d="M23 23L16 28L23 33M41 23L48 28L41 33M34 22L30 35"
      stroke="#0284c7"
      strokeWidth="3.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Stand & Base */}
    <path d="M26 46H38L41 54H23L26 46Z" fill="#64748b" stroke="#334155" strokeWidth="2" />
    <rect x="18" y="52" width="28" height="4" rx="2" fill="#f97316" />
  </svg>
);

// 2. Mathematics (Geometry Compass & Ruler & Math Pi)
export const MathCourseIcon: React.FC<{ className?: string }> = ({ className = 'h-10 w-10' }) => (
  <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg" fill="none">
    {/* Compass / Ruler */}
    <circle cx="32" cy="14" r="5" fill="#f59e0b" stroke="#b45309" strokeWidth="2" />
    <path d="M30 18L14 54M34 18L50 54" stroke="#d97706" strokeWidth="4" strokeLinecap="round" />
    <path d="M20 40H44" stroke="#0ea5e9" strokeWidth="3" strokeDasharray="2 3" />
    <circle cx="14" cy="54" r="2.5" fill="#b45309" />
    <circle cx="50" cy="54" r="2.5" fill="#b45309" />
    {/* Pi & Sigma Symbols */}
    <rect x="25" y="27" width="14" height="13" rx="2" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.5" />
    <path d="M28 31H36M30 31V38M34 31V38" stroke="#b45309" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

// 3. Physics (Quantum Atom Orbitals & Energy Core)
export const PhysicsCourseIcon: React.FC<{ className?: string }> = ({ className = 'h-10 w-10' }) => (
  <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg" fill="none">
    {/* Atom Rings */}
    <ellipse cx="32" cy="32" rx="26" ry="10" stroke="#3b82f6" strokeWidth="2.5" transform="rotate(30 32 32)" />
    <ellipse cx="32" cy="32" rx="26" ry="10" stroke="#06b6d4" strokeWidth="2.5" transform="rotate(-30 32 32)" />
    <ellipse cx="32" cy="32" rx="26" ry="10" stroke="#8b5cf6" strokeWidth="2.5" transform="rotate(90 32 32)" />
    {/* Orbiting particles */}
    <circle cx="12" cy="20" r="3" fill="#ef4444" />
    <circle cx="52" cy="44" r="3" fill="#10b981" />
    <circle cx="32" cy="6" r="3" fill="#f59e0b" />
    {/* Nucleus */}
    <circle cx="32" cy="32" r="7" fill="#ef4444" stroke="#b91c1c" strokeWidth="2" />
    <circle cx="30" cy="30" r="2" fill="#ffffff" />
  </svg>
);

// 4. Chemistry (Conical Beaker Flask with Bubbles)
export const ChemistryCourseIcon: React.FC<{ className?: string }> = ({ className = 'h-10 w-10' }) => (
  <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg" fill="none">
    {/* Flask Neck */}
    <rect x="27" y="8" width="10" height="14" fill="#e2e8f0" stroke="#475569" strokeWidth="2" />
    <rect x="25" y="6" width="14" height="4" rx="2" fill="#cbd5e1" stroke="#334155" strokeWidth="2" />
    {/* Flask Body */}
    <path
      d="M27 22L10 50C8.5 52.5 10.3 56 13.5 56H50.5C53.7 56 55.5 52.5 54 50L37 22H27Z"
      fill="#fef08a"
      stroke="#ca8a04"
      strokeWidth="2.5"
    />
    {/* Liquid inside */}
    <path
      d="M16 46L13.5 53C12.8 54.5 14 55.5 15.5 55.5H48.5C50 55.5 51.2 54.5 50.5 53L48 46C44 48 38 45 32 46C26 47 20 44 16 46Z"
      fill="#22c55e"
    />
    <circle cx="28" cy="40" r="2.5" fill="#15803d" />
    <circle cx="36" cy="35" r="2" fill="#15803d" />
    <circle cx="33" cy="48" r="2" fill="#ffffff" />
  </svg>
);

// 5. Commerce / B.Com (Ledger Book & Rupee Coin)
export const CommerceCourseIcon: React.FC<{ className?: string }> = ({ className = 'h-10 w-10' }) => (
  <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg" fill="none">
    {/* Ledger Book */}
    <rect x="10" y="10" width="36" height="46" rx="4" fill="#047857" stroke="#065f46" strokeWidth="2.5" />
    <path d="M16 10V56" stroke="#fbbf24" strokeWidth="3" />
    <line x1="22" y1="20" x2="38" y2="20" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
    <line x1="22" y1="28" x2="38" y2="28" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
    <line x1="22" y1="36" x2="38" y2="36" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
    {/* Golden Rupee Coin */}
    <circle cx="44" cy="42" r="14" fill="#fbbf24" stroke="#d97706" strokeWidth="2.5" />
    <text x="39" y="47" fontSize="13" fontWeight="bold" fill="#78350f" fontFamily="sans-serif">₹</text>
  </svg>
);

// 6. BBA / Management (Briefcase with Growth Chart)
export const BBACourseIcon: React.FC<{ className?: string }> = ({ className = 'h-10 w-10' }) => (
  <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg" fill="none">
    {/* Briefcase handle */}
    <path d="M24 16V10C24 8.5 25.5 7 27 7H37C38.5 7 40 8.5 40 10V16" stroke="#334155" strokeWidth="3" />
    {/* Briefcase Body */}
    <rect x="8" y="16" width="48" height="38" rx="6" fill="#1e293b" stroke="#0f172a" strokeWidth="2.5" />
    <path d="M8 28H56" stroke="#475569" strokeWidth="2" />
    {/* Golden Clasp */}
    <rect x="28" y="25" width="8" height="7" rx="2" fill="#fbbf24" stroke="#d97706" strokeWidth="1.5" />
    {/* Growth Line Arrow */}
    <path d="M16 46L26 38L34 43L46 32" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M41 32H46V37" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// 7. History (Classical Ashoka Monument Pillar & Scroll)
export const HistoryCourseIcon: React.FC<{ className?: string }> = ({ className = 'h-10 w-10' }) => (
  <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg" fill="none">
    {/* Monument Pillar Top */}
    <rect x="14" y="10" width="36" height="6" rx="2" fill="#f59e0b" stroke="#b45309" strokeWidth="2" />
    <rect x="18" y="16" width="28" height="4" fill="#d97706" />
    {/* Columns */}
    <rect x="20" y="20" width="5" height="28" fill="#fef3c7" stroke="#b45309" strokeWidth="1.5" />
    <rect x="29" y="20" width="6" height="28" fill="#fef3c7" stroke="#b45309" strokeWidth="1.5" />
    <rect x="39" y="20" width="5" height="28" fill="#fef3c7" stroke="#b45309" strokeWidth="1.5" />
    {/* Base */}
    <rect x="16" y="48" width="32" height="6" fill="#d97706" stroke="#b45309" strokeWidth="2" />
    <rect x="12" y="54" width="40" height="5" rx="2" fill="#b45309" />
  </svg>
);

// 8. Political Science (Indian Constitution & Scales of Justice)
export const PolSciCourseIcon: React.FC<{ className?: string }> = ({ className = 'h-10 w-10' }) => (
  <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg" fill="none">
    {/* Scales of Justice */}
    <line x1="32" y1="10" x2="32" y2="48" stroke="#475569" strokeWidth="3.5" strokeLinecap="round" />
    <line x1="14" y1="18" x2="50" y2="18" stroke="#d97706" strokeWidth="3.5" strokeLinecap="round" />
    <circle cx="32" cy="10" r="3.5" fill="#f59e0b" />
    {/* Left Pan */}
    <line x1="16" y1="18" x2="10" y2="34" stroke="#d97706" strokeWidth="1.8" />
    <line x1="16" y1="18" x2="22" y2="34" stroke="#d97706" strokeWidth="1.8" />
    <path d="M6 34C6 38 26 38 26 34Z" fill="#fbbf24" stroke="#b45309" strokeWidth="1.5" />
    {/* Right Pan */}
    <line x1="48" y1="18" x2="42" y2="34" stroke="#d97706" strokeWidth="1.8" />
    <line x1="48" y1="18" x2="54" y2="34" stroke="#d97706" strokeWidth="1.8" />
    <path d="M38 34C38 38 58 38 58 34Z" fill="#fbbf24" stroke="#b45309" strokeWidth="1.5" />
    {/* Stand Base */}
    <rect x="22" y="48" width="20" height="6" rx="2" fill="#334155" />
  </svg>
);

// 9. English / Literature (Open Book with Quill Pen)
export const EnglishCourseIcon: React.FC<{ className?: string }> = ({ className = 'h-10 w-10' }) => (
  <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg" fill="none">
    {/* Open Book */}
    <path
      d="M8 44C14 41 24 41 32 44C40 41 50 41 56 44V18C50 15 40 15 32 18C24 15 14 15 8 18V44Z"
      fill="#f8fafc"
      stroke="#3b82f6"
      strokeWidth="2.5"
    />
    <path d="M32 18V44" stroke="#1d4ed8" strokeWidth="2.5" />
    <line x1="14" y1="24" x2="26" y2="24" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
    <line x1="14" y1="30" x2="26" y2="30" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
    <line x1="38" y1="24" x2="50" y2="24" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
    <line x1="38" y1="30" x2="50" y2="30" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
    {/* Quill Pen */}
    <path
      d="M54 8C54 8 46 16 42 26L40 32L46 30C48 24 54 8 54 8Z"
      fill="#f97316"
      stroke="#c2410c"
      strokeWidth="1.5"
    />
  </svg>
);

// 10. Zoology / Biology (Microscope with Bio Cell)
export const ZoologyBioCourseIcon: React.FC<{ className?: string }> = ({ className = 'h-10 w-10' }) => (
  <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg" fill="none">
    {/* Microscope Eyepiece */}
    <rect x="20" y="8" width="10" height="18" rx="2" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="2" transform="rotate(-30 20 8)" />
    {/* Arm curve */}
    <path d="M32 20C42 22 48 30 46 42C44 48 40 52 34 52" stroke="#475569" strokeWidth="4" strokeLinecap="round" />
    {/* Stage */}
    <rect x="14" y="38" width="22" height="4" rx="1" fill="#0ea5e9" stroke="#0284c7" strokeWidth="1.5" />
    {/* Base */}
    <rect x="12" y="52" width="36" height="6" rx="2" fill="#1e293b" stroke="#0f172a" strokeWidth="2" />
    <circle cx="25" cy="46" r="3" fill="#f59e0b" />
  </svg>
);

// 11. Botany / Plant Science (Green Sprout Leaf)
export const BotanyCourseIcon: React.FC<{ className?: string }> = ({ className = 'h-10 w-10' }) => (
  <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg" fill="none">
    {/* Pot */}
    <path d="M20 38H44L41 54H23L20 38Z" fill="#b45309" stroke="#78350f" strokeWidth="2.5" />
    <rect x="18" y="34" width="28" height="5" rx="2" fill="#d97706" stroke="#78350f" strokeWidth="2" />
    {/* Plant stem & leaves */}
    <path d="M32 34V18" stroke="#15803d" strokeWidth="3.5" strokeLinecap="round" />
    <path d="M32 24C24 24 20 18 20 18C20 28 28 30 32 30" fill="#22c55e" stroke="#166534" strokeWidth="2" />
    <path d="M32 20C40 20 44 12 44 12C44 24 36 26 32 26" fill="#4ade80" stroke="#166534" strokeWidth="2" />
  </svg>
);

// 12. Law (Patna Law College / LL.B - Judge Gavel)
export const LawCourseIcon: React.FC<{ className?: string }> = ({ className = 'h-10 w-10' }) => (
  <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg" fill="none">
    {/* Gavel Head */}
    <rect x="12" y="16" width="16" height="26" rx="4" fill="#78350f" stroke="#451a03" strokeWidth="2.5" transform="rotate(45 12 16)" />
    <rect x="18" y="10" width="4" height="26" fill="#fbbf24" transform="rotate(45 18 10)" />
    {/* Gavel Handle */}
    <rect x="28" y="28" width="6" height="30" rx="3" fill="#b45309" stroke="#451a03" strokeWidth="2" transform="rotate(-45 28 28)" />
    {/* Sound block base */}
    <ellipse cx="44" cy="52" rx="16" ry="6" fill="#451a03" stroke="#290e02" strokeWidth="2" />
    <ellipse cx="44" cy="50" rx="14" ry="4" fill="#92400e" />
  </svg>
);

// 13. Default / Generic Cap Icon
export const GenericAcademicIcon: React.FC<{ className?: string }> = ({ className = 'h-10 w-10' }) => (
  <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg" fill="none">
    <path d="M32 10L6 22L32 34L58 22L32 10Z" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="2.5" />
    <path d="M16 27V42C16 42 22 48 32 48C42 48 48 42 48 42V27" stroke="#1d4ed8" strokeWidth="3" fill="#60a5fa" fillOpacity="0.2" />
    <path d="M52 24V40" stroke="#f59e0b" strokeWidth="2.5" />
    <circle cx="52" cy="42" r="3" fill="#f59e0b" />
  </svg>
);

// Helper function to pick the exact course icon
export const getCourseVectorIcon = (courseId: string, className = 'h-10 w-10'): React.ReactNode => {
  const id = courseId.toLowerCase();
  if (id.includes('bca') || id.includes('computer') || id.includes('it')) {
    return <BCACourseIcon className={className} />;
  }
  if (id.includes('math')) {
    return <MathCourseIcon className={className} />;
  }
  if (id.includes('physic')) {
    return <PhysicsCourseIcon className={className} />;
  }
  if (id.includes('chem')) {
    return <ChemistryCourseIcon className={className} />;
  }
  if (id.includes('bcom') || id.includes('account') || id.includes('commerce')) {
    return <CommerceCourseIcon className={className} />;
  }
  if (id.includes('bba') || id.includes('manage') || id.includes('business')) {
    return <BBACourseIcon className={className} />;
  }
  if (id.includes('hist')) {
    return <HistoryCourseIcon className={className} />;
  }
  if (id.includes('pol') || id.includes('civic')) {
    return <PolSciCourseIcon className={className} />;
  }
  if (id.includes('eng') || id.includes('lit')) {
    return <EnglishCourseIcon className={className} />;
  }
  if (id.includes('zoo') || id.includes('bio')) {
    return <ZoologyBioCourseIcon className={className} />;
  }
  if (id.includes('botan')) {
    return <BotanyCourseIcon className={className} />;
  }
  if (id.includes('law') || id.includes('llb')) {
    return <LawCourseIcon className={className} />;
  }
  return <GenericAcademicIcon className={className} />;
};

// 14. Exact Book Icon for the Semester Buttons (Inspired by Image 2)
export const SemesterBookIcon: React.FC<{ className?: string }> = ({ className = 'h-7 w-7' }) => (
  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-lime-300 p-1.5 shadow-md">
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="#064e3b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" fill="#ffffff" fillOpacity="0.4" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" fill="#ffffff" fillOpacity="0.4" />
      <line x1="6" y1="8" x2="9" y2="8" stroke="#064e3b" strokeWidth="2" />
      <line x1="15" y1="8" x2="18" y2="8" stroke="#064e3b" strokeWidth="2" />
    </svg>
  </div>
);
