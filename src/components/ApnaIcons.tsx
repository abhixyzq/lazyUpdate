'use client';

import React from 'react';

// 1. PYQs Icon: Exam paper with check marks, question list & illuminated stopwatch
export const PYQsIcon: React.FC = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="pyqPaperGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#f0f7ff" />
      </linearGradient>
      <linearGradient id="pyqHeaderGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#2563eb" />
        <stop offset="100%" stopColor="#0284c7" />
      </linearGradient>
      <linearGradient id="pyqWatchGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fb923c" />
        <stop offset="100%" stopColor="#ea580c" />
      </linearGradient>
      <filter id="pyqShadow" x="-10%" y="-10%" width="130%" height="130%">
        <feDropShadow dx="1" dy="2" stdDeviation="2" floodColor="#0f172a" floodOpacity="0.15" />
      </filter>
    </defs>

    {/* Main Paper Sheet */}
    <rect x="14" y="10" width="58" height="78" rx="8" fill="url(#pyqPaperGrad)" stroke="#1e293b" strokeWidth="3.5" filter="url(#pyqShadow)" />
    
    {/* Exam Header Band */}
    <rect x="19" y="16" width="48" height="15" rx="4" fill="url(#pyqHeaderGrad)" />
    <circle cx="26" cy="23.5" r="2.5" fill="#ffffff" />
    <rect x="33" y="21.5" width="28" height="4" rx="2" fill="#ffffff" />

    {/* Question 1: Checkbox + Lines */}
    <rect x="20" y="38" width="8" height="8" rx="2" fill="#dbeafe" stroke="#2563eb" strokeWidth="1.5" />
    <path d="M 22 42 L 24.5 44.5 L 27 39.5" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="32" y="40" width="28" height="4" rx="2" fill="#64748b" />

    {/* Question 2: Checkbox + Lines */}
    <rect x="20" y="51" width="8" height="8" rx="2" fill="#dbeafe" stroke="#2563eb" strokeWidth="1.5" />
    <path d="M 22 55 L 24.5 57.5 L 27 52.5" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="32" y="53" width="20" height="4" rx="2" fill="#64748b" />

    {/* Question 3: Lines */}
    <rect x="20" y="66" width="30" height="4" rx="2" fill="#94a3b8" />
    <rect x="20" y="74" width="22" height="4" rx="2" fill="#cbd5e1" />

    {/* Stopwatch Badge */}
    <g filter="url(#pyqShadow)">
      {/* Top Button */}
      <rect x="68" y="44" width="6" height="5" rx="1.5" fill="#334155" />
      <circle cx="71" cy="65" r="19" fill="#ffffff" stroke="#1e293b" strokeWidth="3.5" />
      <circle cx="71" cy="65" r="14.5" fill="url(#pyqWatchGrad)" />
      {/* Watch dial markers */}
      <circle cx="71" cy="54" r="1.5" fill="#ffffff" />
      <circle cx="82" cy="65" r="1.5" fill="#ffffff" />
      <circle cx="71" cy="76" r="1.5" fill="#ffffff" />
      <circle cx="60" cy="65" r="1.5" fill="#ffffff" />
      {/* Hands */}
      <circle cx="71" cy="65" r="3" fill="#ffffff" />
      <path d="M 71 65 L 71 57" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 71 65 L 78 61" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
    </g>
  </svg>
);

// 2. Syllabus Icon: Open hardbound book with rich layered pages & golden ribbon
export const SyllabusIcon: React.FC = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bookCoverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0284c7" />
        <stop offset="100%" stopColor="#1d4ed8" />
      </linearGradient>
      <linearGradient id="pageGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#f1f5f9" />
      </linearGradient>
      <linearGradient id="ribbonGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="100%" stopColor="#d97706" />
      </linearGradient>
    </defs>

    {/* Book Cover Backing */}
    <path
      d="M 10 77 C 26 71 44 71 50 78 C 56 71 74 71 90 77 V 25 C 74 19 56 19 50 26 C 44 19 26 19 10 25 Z"
      fill="url(#bookCoverGrad)"
      stroke="#0f172a"
      strokeWidth="3.5"
      strokeLinejoin="round"
    />

    {/* Inner Pages */}
    <path
      d="M 14 73 C 28 67 44 67 50 74 C 56 67 72 67 86 73 V 22 C 72 16 56 16 50 23 C 44 16 28 16 14 22 Z"
      fill="url(#pageGrad)"
      stroke="#1e293b"
      strokeWidth="3"
      strokeLinejoin="round"
    />

    {/* Center Spine Shadow */}
    <path d="M 50 23 V 74" stroke="#64748b" strokeWidth="2.5" strokeLinecap="round" />

    {/* Left Page Text Lines */}
    <path d="M 22 32 C 30 30 38 30 42 32" stroke="#0284c7" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M 22 41 C 30 39 38 39 42 41" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M 22 50 C 30 48 38 48 42 50" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M 22 59 C 30 57 38 57 42 59" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" />

    {/* Right Page Text Lines */}
    <path d="M 58 32 C 66 30 74 30 78 32" stroke="#0284c7" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M 58 41 C 66 39 74 39 78 41" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M 58 50 C 66 48 74 48 78 50" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M 58 59 C 66 57 74 57 78 59" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" />

    {/* Golden Bookmark Ribbon */}
    <path d="M 48 20 V 52 L 53 47 L 58 52 V 20 Z" fill="url(#ribbonGrad)" stroke="#b45309" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

// 3. Results Icon: Analytics graph report with 3D gradient bars and A+ medal
export const ResultsIcon: React.FC = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="resDocGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#f8fafc" />
      </linearGradient>
      <linearGradient id="bar1Grad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#38bdf8" />
        <stop offset="100%" stopColor="#0284c7" />
      </linearGradient>
      <linearGradient id="bar2Grad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#4ade80" />
        <stop offset="100%" stopColor="#16a34a" />
      </linearGradient>
      <linearGradient id="bar3Grad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#818cf8" />
        <stop offset="100%" stopColor="#4f46e5" />
      </linearGradient>
      <linearGradient id="medalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ef4444" />
        <stop offset="100%" stopColor="#b91c1c" />
      </linearGradient>
    </defs>

    {/* Report Card Base */}
    <rect x="14" y="10" width="60" height="78" rx="8" fill="url(#resDocGrad)" stroke="#1e293b" strokeWidth="3.5" />
    
    {/* Mini Donut Pie Chart */}
    <circle cx="28" cy="27" r="10" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="2" />
    <path d="M 28 17 A 10 10 0 0 1 38 27 L 28 27 Z" fill="#f59e0b" />
    <path d="M 28 27 L 38 27 A 10 10 0 0 1 28 37 Z" fill="#3b82f6" />
    <circle cx="28" cy="27" r="4.5" fill="#ffffff" />

    {/* Chart Grid Lines */}
    <line x1="20" y1="76" x2="66" y2="76" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="20" y1="46" x2="66" y2="46" stroke="#e2e8f0" strokeWidth="1.5" strokeDasharray="3 3" />
    <line x1="20" y1="61" x2="66" y2="61" stroke="#e2e8f0" strokeWidth="1.5" strokeDasharray="3 3" />

    {/* 3D Gradient Bars */}
    <rect x="23" y="56" width="8" height="20" rx="3" fill="url(#bar1Grad)" stroke="#0f172a" strokeWidth="1.8" />
    <rect x="35" y="44" width="8" height="32" rx="3" fill="url(#bar2Grad)" stroke="#0f172a" strokeWidth="1.8" />
    <rect x="47" y="32" width="8" height="44" rx="3" fill="url(#bar3Grad)" stroke="#0f172a" strokeWidth="1.8" />

    {/* Trend Line */}
    <path d="M 27 52 L 39 40 L 51 28" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="51" cy="28" r="2.5" fill="#f59e0b" />

    {/* A+ Award Distinction Badge */}
    <g>
      <circle cx="72" cy="66" r="18" fill="#ffffff" stroke="#1e293b" strokeWidth="3" />
      <circle cx="72" cy="66" r="14" fill="url(#medalGrad)" />
      {/* Crisp vector A+ symbol */}
      <path d="M 68 71 L 70 61 L 72 71 M 68.8 68.5 H 71.2" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 74 65 H 78 M 76 63 V 67" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" />
    </g>
  </svg>
);

// 4. Notice Icon: Modern university circular megaphone with broadcast rings & exclamation seal
export const NoticeIcon: React.FC = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="noticeBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#f8fafc" />
      </linearGradient>
      <linearGradient id="megaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fb923c" />
        <stop offset="100%" stopColor="#ea580c" />
      </linearGradient>
      <linearGradient id="hornGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#fef08a" />
        <stop offset="100%" stopColor="#eab308" />
      </linearGradient>
    </defs>

    {/* Document Paper Base */}
    <rect x="22" y="12" width="56" height="74" rx="8" fill="url(#noticeBgGrad)" stroke="#1e293b" strokeWidth="3.5" />
    
    {/* Text Lines */}
    <rect x="32" y="24" width="36" height="4" rx="2" fill="#0284c7" />
    <rect x="32" y="32" width="30" height="3.5" rx="1.7" fill="#64748b" />
    <rect x="32" y="40" width="22" height="3.5" rx="1.7" fill="#94a3b8" />
    <rect x="32" y="48" width="18" height="3.5" rx="1.7" fill="#cbd5e1" />

    {/* Megaphone / Bullhorn on Left */}
    <g>
      {/* Handle */}
      <path d="M 22 62 L 18 72 L 23 74 L 26 65" fill="#334155" stroke="#0f172a" strokeWidth="2" strokeLinejoin="round" />
      {/* Body */}
      <path d="M 12 52 L 32 42 V 68 L 12 58 Z" fill="url(#megaGrad)" stroke="#0f172a" strokeWidth="3" strokeLinejoin="round" />
      {/* Horn Edge */}
      <ellipse cx="32" cy="55" rx="4" ry="13" fill="url(#hornGrad)" stroke="#0f172a" strokeWidth="2.5" />
      {/* Back Cap */}
      <path d="M 12 52 C 10 52 9 53 9 55 C 9 57 10 58 12 58 Z" fill="#9a3412" />
    </g>

    {/* Urgent Exclamation Badge on Right */}
    <g>
      <circle cx="70" cy="62" r="17" fill="#ffffff" stroke="#1e293b" strokeWidth="3" />
      <circle cx="70" cy="62" r="13" fill="#ef4444" />
      {/* Exclamation Mark */}
      <rect x="68.5" y="54" width="3" height="9" rx="1.5" fill="#ffffff" />
      <circle cx="70" cy="68" r="1.8" fill="#ffffff" />
    </g>
  </svg>
);

// 5. Attendance Icon: Biometric face-scanner with glowing HUD brackets & laughing emoji
export const AttendanceIcon: React.FC = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="faceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fef08a" />
        <stop offset="100%" stopColor="#facc15" />
      </linearGradient>
      <linearGradient id="cheekGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f87171" />
        <stop offset="100%" stopColor="#ef4444" />
      </linearGradient>
    </defs>

    {/* HUD Biometric Target Brackets */}
    <path d="M 16 32 V 20 C 16 17 17 16 20 16 H 32" stroke="#0f172a" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M 84 32 V 20 C 84 17 83 16 80 16 H 68" stroke="#0f172a" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M 16 68 V 80 C 16 83 17 84 20 84 H 32" stroke="#0f172a" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M 84 68 V 80 C 84 83 83 84 80 84 H 68" stroke="#0f172a" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />

    {/* Center Face */}
    <circle cx="50" cy="50" r="27" fill="url(#faceGrad)" stroke="#1e293b" strokeWidth="3.5" />
    
    {/* Happy Crescent Eyes */}
    <path d="M 37 44 C 39 39 45 39 47 44" stroke="#1e293b" strokeWidth="3.5" strokeLinecap="round" fill="none" />
    <path d="M 53 44 C 55 39 61 39 63 44" stroke="#1e293b" strokeWidth="3.5" strokeLinecap="round" fill="none" />

    {/* Rosy Cheeks */}
    <ellipse cx="35" cy="52" rx="3.5" ry="2" fill="url(#cheekGrad)" opacity="0.6" />
    <ellipse cx="65" cy="52" rx="3.5" ry="2" fill="url(#cheekGrad)" opacity="0.6" />

    {/* Laughing Open Mouth */}
    <path d="M 39 55 C 39 68 61 68 61 55 Z" fill="#1e293b" />
    {/* Tongue */}
    <path d="M 45 63 C 47 61 53 61 55 63 C 54 66 46 66 45 63 Z" fill="#f87171" />
  </svg>
);

// 6. SGPA CalC Icon: Cute friendly scientific calculator with colorful keypad
export const CalculatorIcon: React.FC = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="calcBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#34d399" />
        <stop offset="100%" stopColor="#059669" />
      </linearGradient>
      <linearGradient id="calcLcdGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#ecfdf5" />
        <stop offset="100%" stopColor="#a7f3d0" />
      </linearGradient>
    </defs>

    {/* Calculator Body */}
    <rect x="20" y="10" width="60" height="80" rx="14" fill="url(#calcBodyGrad)" stroke="#1e293b" strokeWidth="3.5" />

    {/* Screen Frame */}
    <rect x="27" y="18" width="46" height="24" rx="8" fill="url(#calcLcdGrad)" stroke="#1e293b" strokeWidth="2.5" />
    
    {/* Kawaii Cute Face on Screen */}
    <circle cx="43" cy="28" r="2.5" fill="#065f46" />
    <circle cx="57" cy="28" r="2.5" fill="#065f46" />
    <path d="M 48 33 Q 50 35 52 33" stroke="#065f46" strokeWidth="2" strokeLinecap="round" fill="none" />

    {/* Keypad Grid (Row 1) */}
    <rect x="28" y="48" width="10" height="9" rx="3" fill="#ffffff" stroke="#1e293b" strokeWidth="1.8" />
    <rect x="45" y="48" width="10" height="9" rx="3" fill="#ffffff" stroke="#1e293b" strokeWidth="1.8" />
    <rect x="62" y="48" width="10" height="9" rx="3" fill="#fef08a" stroke="#1e293b" strokeWidth="1.8" />

    {/* Keypad Grid (Row 2) */}
    <rect x="28" y="61" width="10" height="9" rx="3" fill="#ffffff" stroke="#1e293b" strokeWidth="1.8" />
    <rect x="45" y="61" width="10" height="9" rx="3" fill="#ffffff" stroke="#1e293b" strokeWidth="1.8" />
    <rect x="62" y="61" width="10" height="9" rx="3" fill="#fed7aa" stroke="#1e293b" strokeWidth="1.8" />

    {/* Keypad Grid (Row 3) */}
    <rect x="28" y="74" width="10" height="9" rx="3" fill="#ffffff" stroke="#1e293b" strokeWidth="1.8" />
    <rect x="45" y="74" width="10" height="9" rx="3" fill="#38bdf8" stroke="#1e293b" strokeWidth="1.8" />
    {/* Equals button */}
    <rect x="62" y="74" width="10" height="9" rx="3" fill="#f43f5e" stroke="#1e293b" strokeWidth="1.8" />
  </svg>
);

// 7. Time Table Icon: Clean schedule grid with clocks and color-coded class blocks
export const TimeTableIcon: React.FC = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="ttHeaderGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#0284c7" />
        <stop offset="100%" stopColor="#2563eb" />
      </linearGradient>
    </defs>

    {/* Desk Calendar Board */}
    <rect x="14" y="14" width="72" height="72" rx="10" fill="#ffffff" stroke="#1e293b" strokeWidth="3.5" />

    {/* Blue Header Strip */}
    <path
      d="M 14 24 C 14 18.5 18.5 14 24 14 H 76 C 81.5 14 86 18.5 86 24 V 34 H 14 Z"
      fill="url(#ttHeaderGrad)"
      stroke="#1e293b"
      strokeWidth="3.5"
    />

    {/* Rings on Top */}
    <rect x="28" y="9" width="6" height="10" rx="3" fill="#334155" stroke="#1e293b" strokeWidth="1.5" />
    <rect x="66" y="9" width="6" height="10" rx="3" fill="#334155" stroke="#1e293b" strokeWidth="1.5" />

    {/* Header Dots */}
    <circle cx="34" cy="24" r="2.5" fill="#ffffff" />
    <circle cx="50" cy="24" r="2.5" fill="#ffffff" />
    <circle cx="66" cy="24" r="2.5" fill="#ffffff" />

    {/* Schedule Blocks (Class Periods) */}
    {/* Day 1 Row */}
    <rect x="20" y="40" width="16" height="10" rx="3" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="1.2" />
    <rect x="40" y="40" width="22" height="10" rx="3" fill="#bbf7d0" stroke="#22c55e" strokeWidth="1.2" />
    <rect x="66" y="40" width="14" height="10" rx="3" fill="#fed7aa" stroke="#f97316" strokeWidth="1.2" />

    {/* Day 2 Row */}
    <rect x="20" y="54" width="24" height="10" rx="3" fill="#fbcfe8" stroke="#ec4899" strokeWidth="1.2" />
    <rect x="48" y="54" width="14" height="10" rx="3" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="1.2" />
    <rect x="66" y="54" width="14" height="10" rx="3" fill="#e9d5ff" stroke="#a855f7" strokeWidth="1.2" />

    {/* Day 3 Row */}
    <rect x="20" y="68" width="18" height="10" rx="3" fill="#fed7aa" stroke="#f97316" strokeWidth="1.2" />
    <rect x="42" y="68" width="20" height="10" rx="3" fill="#bbf7d0" stroke="#22c55e" strokeWidth="1.2" />
    <rect x="66" y="68" width="14" height="10" rx="3" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="1.2" />
  </svg>
);

// 8. Extras Icon: Designer backpack with study notebook and accessories
export const ExtrasIcon: React.FC = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bagGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#c084fc" />
        <stop offset="100%" stopColor="#9333ea" />
      </linearGradient>
      <linearGradient id="pocketGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#f3e8ff" />
        <stop offset="100%" stopColor="#d8b4fe" />
      </linearGradient>
    </defs>

    {/* Book behind bag */}
    <rect x="14" y="36" width="14" height="42" rx="3" fill="#38bdf8" stroke="#0f172a" strokeWidth="2.5" />
    <line x1="20" y1="40" x2="20" y2="74" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />

    {/* Backpack Handle */}
    <path d="M 38 24 V 16 C 38 12 54 12 54 16 V 24" stroke="#1e293b" strokeWidth="4" fill="none" strokeLinecap="round" />

    {/* Main Backpack Body */}
    <rect x="24" y="24" width="44" height="58" rx="14" fill="url(#bagGrad)" stroke="#1e293b" strokeWidth="3.5" />

    {/* Front Zipper Pocket */}
    <rect x="30" y="48" width="32" height="26" rx="8" fill="url(#pocketGrad)" stroke="#1e293b" strokeWidth="2.5" />
    {/* Zipper Pull */}
    <line x1="36" y1="48" x2="56" y2="48" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="46" cy="56" r="2.5" fill="#9333ea" />

    {/* Floating Smart Gadget on Right */}
    <rect x="62" y="42" width="24" height="40" rx="6" fill="#ffffff" stroke="#1e293b" strokeWidth="3" />
    <rect x="66" y="48" width="16" height="26" rx="3" fill="#38bdf8" />
    <circle cx="74" cy="77" r="1.8" fill="#64748b" />
  </svg>
);

// 9. Calendar Icon: Flip desk calendar with festive holidays marker & vibrant date blocks
export const CalendarIcon: React.FC = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="calHeadGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#f97316" />
        <stop offset="100%" stopColor="#dc2626" />
      </linearGradient>
    </defs>

    {/* Calendar Base */}
    <rect x="14" y="18" width="72" height="68" rx="10" fill="#ffffff" stroke="#1e293b" strokeWidth="3.5" />

    {/* Spiral Binder Rings */}
    <rect x="25" y="10" width="6" height="12" rx="3" fill="#334155" stroke="#1e293b" strokeWidth="1.5" />
    <rect x="47" y="10" width="6" height="12" rx="3" fill="#334155" stroke="#1e293b" strokeWidth="1.5" />
    <rect x="69" y="10" width="6" height="12" rx="3" fill="#334155" stroke="#1e293b" strokeWidth="1.5" />

    {/* Red / Orange Header Banner */}
    <path
      d="M 14 26 C 14 21.5 17.5 18 22 18 H 78 C 82.5 18 86 21.5 86 26 V 38 H 14 Z"
      fill="url(#calHeadGrad)"
      stroke="#1e293b"
      strokeWidth="3.5"
    />

    {/* Header Star Indicator */}
    <circle cx="50" cy="28" r="3.5" fill="#fef08a" />
    <circle cx="36" cy="28" r="2" fill="#ffffff" opacity="0.8" />
    <circle cx="64" cy="28" r="2" fill="#ffffff" opacity="0.8" />

    {/* Days Grid */}
    {/* Row 1 */}
    <rect x="22" y="46" width="10" height="9" rx="2.5" fill="#fed7aa" />
    <rect x="36" y="46" width="10" height="9" rx="2.5" fill="#f1f5f9" />
    <rect x="50" y="46" width="10" height="9" rx="2.5" fill="#f1f5f9" />
    <rect x="64" y="46" width="10" height="9" rx="2.5" fill="#f1f5f9" />

    {/* Row 2 */}
    <rect x="22" y="58" width="10" height="9" rx="2.5" fill="#f1f5f9" />
    <rect x="36" y="58" width="10" height="9" rx="2.5" fill="#fed7aa" />
    {/* Special Highlighted Holiday with Star */}
    <rect x="50" y="58" width="10" height="9" rx="2.5" fill="#ef4444" />
    <rect x="64" y="58" width="10" height="9" rx="2.5" fill="#f1f5f9" />

    {/* Row 3 */}
    <rect x="22" y="70" width="10" height="9" rx="2.5" fill="#f1f5f9" />
    <rect x="36" y="70" width="10" height="9" rx="2.5" fill="#f1f5f9" />
    <rect x="50" y="70" width="10" height="9" rx="2.5" fill="#fed7aa" />
    <rect x="64" y="70" width="10" height="9" rx="2.5" fill="#f1f5f9" />
  </svg>
);
