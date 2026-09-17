'use client';

import React from 'react';

// ==========================================
// 🏛️ FACULTY OF SOCIAL SCIENCE (7 SUBJECTS)
// ==========================================

// 1. History (ba-history): Ashokan Lion Pillar, Historic Sandstone Monument & Scroll
export const HistoryCourseIcon: React.FC<{ className?: string }> = ({ className = 'h-10 w-10' }) => (
  <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg" fill="none">
    {/* Sandstone Pedestal */}
    <rect x="14" y="52" width="36" height="6" rx="2" fill="#d97706" />
    <rect x="18" y="48" width="28" height="4" fill="#b45309" />
    <rect x="22" y="24" width="20" height="24" rx="1" fill="#fef3c7" stroke="#b45309" strokeWidth="2" />
    {/* Pillar fluting lines */}
    <line x1="27" y1="26" x2="27" y2="46" stroke="#d97706" strokeWidth="1.5" strokeDasharray="1 2" />
    <line x1="32" y1="26" x2="32" y2="46" stroke="#d97706" strokeWidth="1.5" strokeDasharray="1 2" />
    <line x1="37" y1="26" x2="37" y2="46" stroke="#d97706" strokeWidth="1.5" strokeDasharray="1 2" />
    {/* Capital & Lotus Base */}
    <path d="M18 24C18 20 25 18 32 18C39 18 46 20 46 24H18Z" fill="#f59e0b" stroke="#b45309" strokeWidth="2" />
    {/* Ashokan Chakra Wheel on Top */}
    <circle cx="32" cy="11" r="7" fill="#ffffff" stroke="#1e3a8a" strokeWidth="2" />
    <circle cx="32" cy="11" r="2" fill="#1e3a8a" />
    <line x1="32" y1="4" x2="32" y2="18" stroke="#1e3a8a" strokeWidth="1" />
    <line x1="25" y1="11" x2="39" y2="11" stroke="#1e3a8a" strokeWidth="1" />
    <line x1="27" y1="6" x2="37" y2="16" stroke="#1e3a8a" strokeWidth="1" />
    <line x1="27" y1="16" x2="37" y2="6" stroke="#1e3a8a" strokeWidth="1" />
    {/* Ancient Scroll Ribbon Accent */}
    <path d="M10 38C14 36 18 40 22 38" stroke="#ea580c" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M42 38C46 36 50 40 54 38" stroke="#ea580c" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

// 2. AI & AS / Archaeology (ba-aih-archaeology): Terracotta Harappan Vase, Excavation Trowel & Relic
export const ArchaeologyCourseIcon: React.FC<{ className?: string }> = ({ className = 'h-10 w-10' }) => (
  <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg" fill="none">
    {/* Ancient Terracotta Jar / Urn */}
    <ellipse cx="28" cy="14" rx="10" ry="3" fill="#fdba74" stroke="#9a3412" strokeWidth="2" />
    <path
      d="M20 15C16 22 12 30 12 38C12 48 19 54 28 54C37 54 44 48 44 38C44 30 40 22 36 15H20Z"
      fill="#ea580c"
      stroke="#7c2d12"
      strokeWidth="2.5"
    />
    {/* Harappan / Tribal Motif bands on vase */}
    <path d="M14 34H42" stroke="#fed7aa" strokeWidth="2" strokeDasharray="3 2" />
    <path d="M13 40L28 44L43 40" stroke="#ffedd5" strokeWidth="2" strokeLinecap="round" />
    <circle cx="28" cy="30" r="3" fill="#fef08a" />
    {/* Archaeologist Excavation Trowel leaning across */}
    <g transform="rotate(-35 44 32)">
      {/* Trowel Diamond Blade */}
      <polygon points="46,14 54,24 46,34 38,24" fill="#94a3b8" stroke="#334155" strokeWidth="2" />
      <line x1="46" y1="16" x2="46" y2="32" stroke="#ffffff" strokeWidth="1.5" />
      {/* Trowel Shank & Wooden Handle */}
      <rect x="44" y="34" width="4" height="6" fill="#64748b" />
      <rect x="43" y="40" width="6" height="14" rx="3" fill="#b45309" stroke="#78350f" strokeWidth="1.5" />
    </g>
  </svg>
);

// 3. Political Science (ba-political-science): Parliament Capitol Dome & Scales of Democracy
export const PolSciCourseIcon: React.FC<{ className?: string }> = ({ className = 'h-10 w-10' }) => (
  <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg" fill="none">
    {/* Parliament Base & Steps */}
    <rect x="8" y="52" width="48" height="6" rx="2" fill="#1e3a8a" stroke="#172554" strokeWidth="2" />
    <rect x="12" y="48" width="40" height="4" fill="#3b82f6" />
    {/* Classical Pillars */}
    <rect x="15" y="32" width="4" height="16" fill="#e2e8f0" stroke="#1e3a8a" strokeWidth="1.5" />
    <rect x="23" y="32" width="4" height="16" fill="#e2e8f0" stroke="#1e3a8a" strokeWidth="1.5" />
    <rect x="31" y="32" width="4" height="16" fill="#e2e8f0" stroke="#1e3a8a" strokeWidth="1.5" />
    <rect x="39" y="32" width="4" height="16" fill="#e2e8f0" stroke="#1e3a8a" strokeWidth="1.5" />
    <rect x="45" y="32" width="4" height="16" fill="#e2e8f0" stroke="#1e3a8a" strokeWidth="1.5" />
    {/* Pediment Architrave */}
    <rect x="12" y="28" width="40" height="4" fill="#1d4ed8" stroke="#172554" strokeWidth="1.5" />
    {/* Grand Central Dome */}
    <path d="M22 28C22 16 42 16 42 28H22Z" fill="#f59e0b" stroke="#b45309" strokeWidth="2" />
    {/* Saffron Flag atop dome */}
    <line x1="32" y1="16" x2="32" y2="6" stroke="#b45309" strokeWidth="2" strokeLinecap="round" />
    <path d="M32 7L42 10L32 13Z" fill="#f97316" />
    {/* Scales of Justice Emblem */}
    <circle cx="32" cy="24" r="3" fill="#ffffff" stroke="#1d4ed8" strokeWidth="1.5" />
  </svg>
);

// 4. Economics (ba-economics): Bull Market Trend Line, Candlestick Graph & Golden Rupee
export const EconomicsCourseIcon: React.FC<{ className?: string }> = ({ className = 'h-10 w-10' }) => (
  <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg" fill="none">
    {/* Graph Background Panel */}
    <rect x="8" y="8" width="48" height="48" rx="8" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" />
    {/* Grid Guidelines */}
    <line x1="14" y1="20" x2="50" y2="20" stroke="#a7f3d0" strokeWidth="1" strokeDasharray="2 2" />
    <line x1="14" y1="32" x2="50" y2="32" stroke="#a7f3d0" strokeWidth="1" strokeDasharray="2 2" />
    <line x1="14" y1="44" x2="50" y2="44" stroke="#a7f3d0" strokeWidth="1" strokeDasharray="2 2" />
    {/* Bar chart bars */}
    <rect x="14" y="38" width="6" height="12" rx="1" fill="#34d399" />
    <rect x="24" y="28" width="6" height="22" rx="1" fill="#10b981" />
    <rect x="34" y="22" width="6" height="28" rx="1" fill="#059669" />
    {/* Ascending Trend Line & Arrow */}
    <path d="M14 42L25 30L35 24L48 14" stroke="#047857" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M41 14H48V21" stroke="#047857" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
    {/* Golden Rupee Medallion */}
    <circle cx="46" cy="42" r="10" fill="#fbbf24" stroke="#d97706" strokeWidth="2" />
    <text x="42.5" y="46.5" fontSize="11" fontWeight="900" fill="#78350f" fontFamily="sans-serif">₹</text>
  </svg>
);

// 5. Geography (ba-geography): 3D Globe with Continents & Navigational Compass Needle
export const GeographyCourseIcon: React.FC<{ className?: string }> = ({ className = 'h-10 w-10' }) => (
  <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg" fill="none">
    {/* Globe Base */}
    <path d="M22 56H42M32 50V56" stroke="#475569" strokeWidth="3" strokeLinecap="round" />
    {/* Stand Axis Semi-Circle */}
    <path d="M12 30C12 41 21 50 32 50C43 50 52 41 52 30" stroke="#64748b" strokeWidth="3" fill="none" />
    {/* Globe Sphere */}
    <circle cx="32" cy="28" r="18" fill="#38bdf8" stroke="#0284c7" strokeWidth="2.5" />
    {/* Continents (Green Patches) */}
    <path d="M20 22C23 20 27 23 29 25C31 27 30 32 26 34C22 36 19 32 20 28Z" fill="#22c55e" />
    <path d="M36 20C40 18 45 22 46 26C45 30 40 32 37 30C34 28 34 22 36 20Z" fill="#22c55e" />
    <path d="M26 38C29 36 34 38 36 42C34 44 28 45 26 42Z" fill="#22c55e" />
    {/* Latitude / Longitude Meridian Lines */}
    <ellipse cx="32" cy="28" rx="8" ry="17.5" stroke="#ffffff" strokeWidth="1.2" strokeDasharray="2 2" fill="none" />
    <line x1="14" y1="28" x2="50" y2="28" stroke="#ffffff" strokeWidth="1.2" strokeDasharray="2 2" />
    {/* Compass Needle in Corner */}
    <circle cx="48" cy="14" r="7" fill="#ffffff" stroke="#ef4444" strokeWidth="1.5" />
    <polygon points="48,9 50,14 48,13 46,14" fill="#ef4444" />
    <polygon points="48,19 50,14 48,15 46,14" fill="#3b82f6" />
  </svg>
);

// 6. Psychology (ba-psychology): Human Profile Silhouette & Glowing Brain Synapses
export const PsychologyCourseIcon: React.FC<{ className?: string }> = ({ className = 'h-10 w-10' }) => (
  <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg" fill="none">
    {/* Head Outline Silhouette */}
    <path
      d="M16 54C16 46 20 42 22 38C20 34 18 28 18 22C18 12 26 6 36 6C46 6 52 14 52 24C52 32 48 37 44 40C44 43 45 46 45 54H16Z"
      fill="#faf5ff"
      stroke="#7e22ce"
      strokeWidth="2.5"
    />
    {/* Brain Organ Shape Inside Head */}
    <path
      d="M26 24C24 20 28 14 34 14C38 12 44 14 45 18C47 21 46 26 43 28C45 32 42 36 38 36C34 36 32 34 30 35C28 35 25 32 26 28C24 27 25 25 26 24Z"
      fill="#d8b4fe"
      stroke="#9333ea"
      strokeWidth="2"
    />
    {/* Synaptic Neural Nodes & Connectors */}
    <circle cx="30" cy="20" r="2" fill="#ec4899" />
    <circle cx="39" cy="20" r="2" fill="#ec4899" />
    <circle cx="34" cy="28" r="2" fill="#ec4899" />
    <line x1="30" y1="20" x2="34" y2="28" stroke="#7e22ce" strokeWidth="1.5" />
    <line x1="39" y1="20" x2="34" y2="28" stroke="#7e22ce" strokeWidth="1.5" />
    <line x1="30" y1="20" x2="39" y2="20" stroke="#7e22ce" strokeWidth="1.5" />
    {/* Insight Glow Sparkles */}
    <path d="M48 10L50 6L52 10L56 12L52 14L50 18L48 14L44 12Z" fill="#facc15" />
  </svg>
);

// 7. Sociology (ba-sociology): Interconnected Community Network & Social Nodes
export const SociologyCourseIcon: React.FC<{ className?: string }> = ({ className = 'h-10 w-10' }) => (
  <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg" fill="none">
    {/* Connection Network Lines */}
    <line x1="32" y1="18" x2="16" y2="44" stroke="#fda4af" strokeWidth="2.5" strokeDasharray="3 2" />
    <line x1="32" y1="18" x2="48" y2="44" stroke="#fda4af" strokeWidth="2.5" strokeDasharray="3 2" />
    <line x1="16" y1="44" x2="48" y2="44" stroke="#fda4af" strokeWidth="2.5" strokeDasharray="3 2" />
    <line x1="32" y1="18" x2="32" y2="36" stroke="#0284c7" strokeWidth="2" />
    <line x1="16" y1="44" x2="32" y2="36" stroke="#0284c7" strokeWidth="2" />
    <line x1="48" y1="44" x2="32" y2="36" stroke="#0284c7" strokeWidth="2" />
    {/* Central Figure (Leader/Community) */}
    <circle cx="32" cy="33" r="5" fill="#f43f5e" stroke="#be123c" strokeWidth="2" />
    {/* Top Person */}
    <circle cx="32" cy="14" r="5" fill="#0284c7" stroke="#0369a1" strokeWidth="2" />
    <path d="M26 24C26 20 38 20 38 24" stroke="#0369a1" strokeWidth="2" />
    {/* Bottom Left Person */}
    <circle cx="16" cy="40" r="5" fill="#10b981" stroke="#047857" strokeWidth="2" />
    <path d="M10 50C10 46 22 46 22 50" stroke="#047857" strokeWidth="2" />
    {/* Bottom Right Person */}
    <circle cx="48" cy="40" r="5" fill="#f59e0b" stroke="#b45309" strokeWidth="2" />
    <path d="M42 50C42 46 54 46 54 50" stroke="#b45309" strokeWidth="2" />
  </svg>
);

// ==========================================
// 📖 FACULTY OF HUMANITIES (7 SUBJECTS)
// ==========================================

// 8. Hindi (ba-hindi): Saffron Parchment, Devanagari 'अ' & Peacock Feather Quill
export const HindiCourseIcon: React.FC<{ className?: string }> = ({ className = 'h-10 w-10' }) => (
  <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg" fill="none">
    {/* Saffron Grantha Scroll / Book */}
    <rect x="10" y="8" width="44" height="48" rx="6" fill="#fff7ed" stroke="#ea580c" strokeWidth="2.5" />
    <rect x="14" y="12" width="36" height="40" rx="4" fill="#ffedd5" />
    {/* Red Bookmark Ribbon */}
    <path d="M18 8V24L22 20L26 24V8H18Z" fill="#dc2626" />
    {/* Royal Devanagari 'अ' Calligraphy */}
    <text x="21" y="42" fontSize="28" fontWeight="900" fill="#9a3412" fontFamily="serif">अ</text>
    {/* Peacock Feather Accent */}
    <path d="M40 16C46 12 50 18 44 26C42 22 40 18 40 16Z" fill="#0284c7" />
    <circle cx="44" cy="18" r="2" fill="#22c55e" />
  </svg>
);

// 9. English (ba-english): Classic Oxford Hardcover Book, Ornate 'A' & Gold Fountain Pen Nib
export const EnglishCourseIcon: React.FC<{ className?: string }> = ({ className = 'h-10 w-10' }) => (
  <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg" fill="none">
    {/* Oxford Navy Book Cover */}
    <rect x="10" y="8" width="44" height="48" rx="5" fill="#1e3a8a" stroke="#172554" strokeWidth="2.5" />
    {/* Inner Parchment Page */}
    <rect x="14" y="12" width="34" height="40" rx="3" fill="#fef9c3" />
    {/* Classic Typography 'A' */}
    <text x="21" y="42" fontSize="28" fontWeight="900" fill="#713f12" fontFamily="Times New Roman, serif">A</text>
    {/* Golden Fountain Pen Nib in Corner */}
    <polygon points="46,12 52,22 44,24" fill="#f59e0b" stroke="#b45309" strokeWidth="1.5" />
    <line x1="46" y1="14" x2="49" y2="20" stroke="#78350f" strokeWidth="1.5" />
    <circle cx="48" cy="18" r="0.8" fill="#78350f" />
  </svg>
);

// 10. Sanskrit (ba-sanskrit): Sacred Palm Leaf Manuscript (ताड़पत्र) & Vedic 'ॐ'
export const SanskritCourseIcon: React.FC<{ className?: string }> = ({ className = 'h-10 w-10' }) => (
  <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg" fill="none">
    {/* Sacred Palm Leaf Grantha */}
    <rect x="8" y="16" width="48" height="34" rx="4" fill="#fef3c7" stroke="#b45309" strokeWidth="2.5" />
    <rect x="10" y="18" width="44" height="30" rx="2" fill="#fffbeb" />
    {/* Traditional Red Binding Cord */}
    <line x1="18" y1="16" x2="18" y2="50" stroke="#dc2626" strokeWidth="2.5" />
    <line x1="46" y1="16" x2="46" y2="50" stroke="#dc2626" strokeWidth="2.5" />
    {/* Sacred Lotus Petal Base */}
    <path d="M24 44C28 40 36 40 40 44" stroke="#d97706" strokeWidth="2" strokeLinecap="round" />
    {/* Sacred 'ॐ' Devanagari Glyph */}
    <text x="24" y="38" fontSize="24" fontWeight="bold" fill="#b45309" fontFamily="serif">ॐ</text>
  </svg>
);

// 11. Urdu (ba-urdu): Nastaliq Calligraphy 'اردو', Crescent & Traditional Bamboo Qalam
export const UrduCourseIcon: React.FC<{ className?: string }> = ({ className = 'h-10 w-10' }) => (
  <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg" fill="none">
    {/* Emerald Green Islamic Arch Frame */}
    <rect x="10" y="8" width="44" height="48" rx="6" fill="#065f46" stroke="#064e3b" strokeWidth="2.5" />
    <path d="M16 18C16 12 32 10 32 10C32 10 48 12 48 18V50H16V18Z" fill="#f0fdf4" />
    {/* Nastaliq 'اردو' Script */}
    <text x="20" y="38" fontSize="24" fontWeight="bold" fill="#047857" fontFamily="Traditional Arabic, serif">اردو</text>
    {/* Crescent Moon Emblem */}
    <path d="M36 14C34 16 34 20 37 21C35 21 32 19 33 15C33.5 14.5 34.5 14.2 36 14Z" fill="#f59e0b" />
    {/* Traditional Qalam Pen */}
    <line x1="16" y1="46" x2="30" y2="46" stroke="#92400e" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

// 12. Maithili (ba-maithili): Madhubani Fish (मत्स्य) Lotus Motif & Tirhuta 'म'
export const MaithiliCourseIcon: React.FC<{ className?: string }> = ({ className = 'h-10 w-10' }) => (
  <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg" fill="none">
    {/* Madhubani Frame */}
    <rect x="8" y="8" width="48" height="48" rx="8" fill="#fefce8" stroke="#b91c1c" strokeWidth="2.5" />
    <rect x="11" y="11" width="42" height="42" stroke="#d97706" strokeWidth="1.5" strokeDasharray="3 2" fill="none" />
    {/* Traditional Mithila Fish Pair (शुभ मत्स्य) */}
    <path d="M16 28C22 20 30 22 36 28C30 32 22 32 16 28Z" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="1.5" />
    <circle cx="20" cy="27" r="1.5" fill="#ffffff" />
    <path d="M16 28L12 24V32L16 28Z" fill="#ef4444" />
    {/* Maithili Letter 'म' in Folk Calligraphy */}
    <text x="24" y="50" fontSize="22" fontWeight="900" fill="#991b1b" fontFamily="serif">म</text>
    {/* Lotus Floral Petals */}
    <circle cx="44" cy="38" r="4" fill="#f43f5e" />
    <circle cx="44" cy="38" r="2" fill="#fde047" />
  </svg>
);

// 13. Philosophy (ba-philosophy): The Thinker Silhouette, Torch of Wisdom & Yin-Yang Balance
export const PhilosophyCourseIcon: React.FC<{ className?: string }> = ({ className = 'h-10 w-10' }) => (
  <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg" fill="none">
    {/* Deep Cosmic Frame */}
    <rect x="8" y="8" width="48" height="48" rx="8" fill="#1e1b4b" stroke="#4338ca" strokeWidth="2.5" />
    {/* Yin-Yang Duality Disc (Ethics & Logic) */}
    <circle cx="32" cy="32" r="16" fill="#ffffff" stroke="#c7d2fe" strokeWidth="2" />
    <path d="M32 16C23 16 23 32 32 32C41 32 41 48 32 48C40.8 48 48 40.8 48 32C48 23.2 40.8 16 32 16Z" fill="#312e81" />
    <circle cx="32" cy="24" r="2.5" fill="#ffffff" />
    <circle cx="32" cy="40" r="2.5" fill="#312e81" />
    {/* Golden Flame of Truth (ज्ञानाग्नि) above */}
    <path d="M32 6C30 9 28 11 29 13C30 15 34 15 35 13C36 11 34 9 32 6Z" fill="#f59e0b" />
    <path d="M32 9C31 10.5 30 11.5 30.5 12.5C31 13.5 33 13.5 33.5 12.5C34 11.5 33 10.5 32 9Z" fill="#ef4444" />
  </svg>
);

// 14. Music (ba-music): Classical Indian Tanpura/Sitar & Musical Swara Clef
export const MusicCourseIcon: React.FC<{ className?: string }> = ({ className = 'h-10 w-10' }) => (
  <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg" fill="none">
    {/* Musical Violet Backdrop */}
    <rect x="8" y="8" width="48" height="48" rx="8" fill="#fdf4ff" stroke="#c026d3" strokeWidth="2.5" />
    {/* Sitar Body (Gourd / तुम्बा) */}
    <circle cx="26" cy="42" r="14" fill="#f59e0b" stroke="#b45309" strokeWidth="2.5" />
    <circle cx="26" cy="42" r="6" fill="#78350f" />
    {/* Sitar Neck & Fretboard */}
    <line x1="26" y1="42" x2="48" y2="12" stroke="#b45309" strokeWidth="4.5" strokeLinecap="round" />
    <line x1="27" y1="42" x2="49" y2="12" stroke="#fef3c7" strokeWidth="1.5" />
    {/* Tuning Pegs */}
    <circle cx="48" cy="12" r="2.5" fill="#d97706" />
    <circle cx="45" cy="16" r="2.5" fill="#d97706" />
    {/* Musical Notes & Swaras floating */}
    <g transform="translate(14, 10)">
      <circle cx="28" cy="14" r="3" fill="#c026d3" />
      <line x1="31" y1="14" x2="31" y2="4" stroke="#c026d3" strokeWidth="2" strokeLinecap="round" />
      <path d="M31 4C35 6 36 8 36 10" stroke="#c026d3" strokeWidth="2" strokeLinecap="round" />
    </g>
  </svg>
);

// ==========================================
// 🔬 FACULTY OF SCIENCE (5 SUBJECTS)
// ==========================================

// 15. Physics (bsc-physics): Dynamic Multi-Orbital Quantum Atom with Glowing Energy Core
export const PhysicsCourseIcon: React.FC<{ className?: string }> = ({ className = 'h-10 w-10' }) => (
  <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg" fill="none">
    {/* Atom Backdrop Panel */}
    <rect x="8" y="8" width="48" height="48" rx="8" fill="#eff6ff" stroke="#2563eb" strokeWidth="2" />
    {/* 3 Electron Orbit Ellipses */}
    <ellipse cx="32" cy="32" rx="24" ry="8" stroke="#3b82f6" strokeWidth="2.2" transform="rotate(30 32 32)" />
    <ellipse cx="32" cy="32" rx="24" ry="8" stroke="#06b6d4" strokeWidth="2.2" transform="rotate(-30 32 32)" />
    <ellipse cx="32" cy="32" rx="24" ry="8" stroke="#8b5cf6" strokeWidth="2.2" transform="rotate(90 32 32)" />
    {/* Fast Electrons in Orbit */}
    <circle cx="14" cy="22" r="2.8" fill="#ef4444" stroke="#b91c1c" strokeWidth="1" />
    <circle cx="50" cy="42" r="2.8" fill="#10b981" stroke="#047857" strokeWidth="1" />
    <circle cx="32" cy="8" r="2.8" fill="#f59e0b" stroke="#b45309" strokeWidth="1" />
    {/* Luminous Nucleus Core */}
    <circle cx="32" cy="32" r="6.5" fill="#ef4444" stroke="#dc2626" strokeWidth="2" />
    <circle cx="30" cy="30" r="2" fill="#ffffff" />
  </svg>
);

// 16. Chemistry (bsc-chemistry): Laboratory Erlenmeyer Flask with Chemical Reaction & Benzene
export const ChemistryCourseIcon: React.FC<{ className?: string }> = ({ className = 'h-10 w-10' }) => (
  <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg" fill="none">
    {/* Chemistry Card */}
    <rect x="8" y="8" width="48" height="48" rx="8" fill="#f0fdf4" stroke="#16a34a" strokeWidth="2" />
    {/* Flask Neck */}
    <rect x="28" y="14" width="8" height="12" fill="#e2e8f0" stroke="#334155" strokeWidth="2" />
    <rect x="26" y="12" width="12" height="3" rx="1.5" fill="#94a3b8" stroke="#334155" strokeWidth="1.5" />
    {/* Conical Flask Body */}
    <path
      d="M28 26L14 48C12.5 50.5 14.3 54 17.5 54H46.5C49.7 54 51.5 50.5 50 48L36 26H28Z"
      fill="#fef08a"
      stroke="#334155"
      strokeWidth="2.5"
    />
    {/* Boiling Toxic Liquid */}
    <path
      d="M19 44L16.5 50C15.8 51.5 17 52.5 18.5 52.5H45.5C47 52.5 48.2 51.5 47.5 50L45 44C41 46 36 43 32 44C27 45 23 42 19 44Z"
      fill="#22c55e"
    />
    {/* Effervescent Bubbles */}
    <circle cx="30" cy="38" r="2.5" fill="#15803d" />
    <circle cx="36" cy="32" r="2" fill="#15803d" />
    <circle cx="33" cy="46" r="1.8" fill="#ffffff" />
    {/* Benzene Molecule Ring in upper corner */}
    <polygon points="46,16 52,19 52,26 46,29 40,26 40,19" stroke="#0284c7" strokeWidth="1.5" fill="none" />
  </svg>
);

// 17. Mathematics (bsc-mathematics): Precision Drafting Compass, Golden Spiral, Integral & Pi
export const MathCourseIcon: React.FC<{ className?: string }> = ({ className = 'h-10 w-10' }) => (
  <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg" fill="none">
    {/* Blueprint Math Card */}
    <rect x="8" y="8" width="48" height="48" rx="8" fill="#f0f9ff" stroke="#0284c7" strokeWidth="2" />
    {/* Compass Hinge Top */}
    <circle cx="32" cy="15" r="4.5" fill="#f59e0b" stroke="#b45309" strokeWidth="2" />
    {/* Compass Legs */}
    <path d="M30 19L16 52M34 19L48 52" stroke="#0369a1" strokeWidth="3.5" strokeLinecap="round" />
    {/* Compass Arc Guide */}
    <path d="M22 38C28 35 36 35 42 38" stroke="#ef4444" strokeWidth="2" strokeDasharray="2 2" />
    <circle cx="16" cy="52" r="2" fill="#0369a1" />
    <circle cx="48" cy="52" r="2" fill="#0369a1" />
    {/* Calculus Integral Symbol '∫' */}
    <path d="M24 22C24 18 27 18 27 20C27 26 23 28 23 34C23 36 26 36 26 32" stroke="#b45309" strokeWidth="2.2" strokeLinecap="round" />
    {/* Pi Symbol 'π' */}
    <text x="36" y="32" fontSize="13" fontWeight="900" fill="#047857" fontFamily="serif">π</text>
  </svg>
);

// 18. Botany (bsc-botany): Sprouting Botanical Plant Leaf with Cellular Veins
export const BotanyCourseIcon: React.FC<{ className?: string }> = ({ className = 'h-10 w-10' }) => (
  <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg" fill="none">
    {/* Botanical Green Card */}
    <rect x="8" y="8" width="48" height="48" rx="8" fill="#f0fdf4" stroke="#16a34a" strokeWidth="2" />
    {/* Curved Sprouting Plant Stem */}
    <path d="M32 54C32 40 33 26 28 14" stroke="#15803d" strokeWidth="3.5" strokeLinecap="round" />
    {/* Main Lush Leaf */}
    <path
      d="M32 36C44 32 50 20 48 12C36 12 28 24 32 36Z"
      fill="#22c55e"
      stroke="#166534"
      strokeWidth="2"
    />
    {/* Leaf Veins */}
    <line x1="32" y1="36" x2="44" y2="18" stroke="#bbf7d0" strokeWidth="1.5" />
    <line x1="36" y1="30" x2="42" y2="30" stroke="#bbf7d0" strokeWidth="1.5" />
    <line x1="39" y1="24" x2="46" y2="22" stroke="#bbf7d0" strokeWidth="1.5" />
    {/* Secondary Young Sprout */}
    <path
      d="M30 42C20 40 14 30 16 22C26 22 30 32 30 42Z"
      fill="#86efac"
      stroke="#15803d"
      strokeWidth="1.8"
    />
    {/* Soil Base / Earthen Seed */}
    <ellipse cx="32" cy="54" rx="12" ry="3" fill="#78350f" />
  </svg>
);

// 19. Zoology (bsc-zoology): Double-Helix DNA Strand & Wildlife Fauna / Butterfly
export const ZoologyCourseIcon: React.FC<{ className?: string }> = ({ className = 'h-10 w-10' }) => (
  <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg" fill="none">
    {/* Zoology Teal Card */}
    <rect x="8" y="8" width="48" height="48" rx="8" fill="#f0fdfa" stroke="#0d9488" strokeWidth="2" />
    {/* DNA Ladder Strand Vertical */}
    <path d="M18 12C24 18 24 24 18 30C12 36 12 42 18 48C24 54 24 58 18 60" stroke="#0284c7" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M26 12C20 18 20 24 26 30C32 36 32 42 26 48C20 54 20 58 26 60" stroke="#0d9488" strokeWidth="2.5" strokeLinecap="round" />
    {/* DNA Base Pairs Rungs */}
    <line x1="19" y1="18" x2="25" y2="18" stroke="#f59e0b" strokeWidth="2" />
    <line x1="16" y1="27" x2="28" y2="27" stroke="#ef4444" strokeWidth="2" />
    <line x1="19" y1="36" x2="25" y2="36" stroke="#f59e0b" strokeWidth="2" />
    <line x1="16" y1="45" x2="28" y2="45" stroke="#ef4444" strokeWidth="2" />
    {/* Monarch Butterfly (Animal Kingdom Fauna) */}
    <g transform="translate(32, 16)">
      <ellipse cx="14" cy="16" rx="2" ry="10" fill="#1e293b" />
      {/* Upper Wings */}
      <path d="M14 10C22 2 28 8 26 16C22 18 16 14 14 10Z" fill="#f97316" stroke="#c2410c" strokeWidth="1.5" />
      <path d="M14 10C6 2 0 8 2 16C6 18 12 14 14 10Z" fill="#f97316" stroke="#c2410c" strokeWidth="1.5" />
      {/* Lower Wings */}
      <path d="M14 16C22 18 24 26 18 28C14 26 14 20 14 16Z" fill="#fbbf24" stroke="#d97706" strokeWidth="1.5" />
      <path d="M14 16C6 18 4 26 10 28C14 26 14 20 14 16Z" fill="#fbbf24" stroke="#d97706" strokeWidth="1.5" />
    </g>
  </svg>
);

// 19b. Statistics (bsc-statistics): Bell Curve Distribution, Histogram Bars & Sigma σ
export const StatisticsCourseIcon: React.FC<{ className?: string }> = ({ className = 'h-10 w-10' }) => (
  <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg" fill="none">
    {/* Indigo Card */}
    <rect x="8" y="8" width="48" height="48" rx="8" fill="#f5f3ff" stroke="#6366f1" strokeWidth="2" />
    {/* Grid baseline */}
    <line x1="12" y1="48" x2="52" y2="48" stroke="#cbd5e1" strokeWidth="1.5" />
    <line x1="12" y1="16" x2="12" y2="48" stroke="#cbd5e1" strokeWidth="1.5" />
    {/* Histogram frequency bars */}
    <rect x="15" y="40" width="6" height="8" rx="1" fill="#c7d2fe" />
    <rect x="23" y="28" width="6" height="20" rx="1" fill="#818cf8" />
    <rect x="31" y="20" width="6" height="28" rx="1" fill="#4f46e5" />
    <rect x="39" y="32" width="6" height="16" rx="1" fill="#818cf8" />
    <rect x="47" y="42" width="4" height="6" rx="1" fill="#c7d2fe" />
    {/* Gaussian Normal Bell Curve */}
    <path
      d="M13 46C18 46 22 42 27 28C30 20 34 20 37 28C42 42 46 46 51 46"
      stroke="#ef4444"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    {/* Sigma Greek Symbol 'σ' */}
    <text x="36" y="18" fontSize="11" fontWeight="bold" fill="#4338ca" fontFamily="serif">σ</text>
  </svg>
);

// ==========================================
// 💼 FACULTY OF COMMERCE (3 GROUPS)
// ==========================================

// 20. Accounting & Finance (bcom-accounting-finance): Ledger, Balance Scale & Golden Rupee
export const AccountingFinanceCourseIcon: React.FC<{ className?: string }> = ({ className = 'h-10 w-10' }) => (
  <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg" fill="none">
    {/* Ledger Book */}
    <rect x="8" y="12" width="48" height="44" rx="4" fill="#047857" stroke="#065f46" strokeWidth="2" />
    <rect x="12" y="14" width="40" height="40" rx="2" fill="#ffffff" />
    {/* Ledger Columns */}
    <line x1="26" y1="14" x2="26" y2="54" stroke="#94a3b8" strokeWidth="1.5" />
    <line x1="38" y1="14" x2="38" y2="54" stroke="#94a3b8" strokeWidth="1.5" />
    <line x1="12" y1="24" x2="52" y2="24" stroke="#cbd5e1" strokeWidth="1.5" />
    <line x1="12" y1="32" x2="52" y2="32" stroke="#cbd5e1" strokeWidth="1.5" />
    <line x1="12" y1="40" x2="52" y2="40" stroke="#cbd5e1" strokeWidth="1.5" />
    {/* Balance Scale on Ledger */}
    <line x1="32" y1="8" x2="32" y2="28" stroke="#d97706" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="20" y1="14" x2="44" y2="14" stroke="#d97706" strokeWidth="2" />
    {/* Left Pan with Rupee */}
    <path d="M16 22H24L20 25Z" fill="#f59e0b" stroke="#b45309" strokeWidth="1.5" />
    <line x1="20" y1="14" x2="16" y2="22" stroke="#b45309" strokeWidth="1" />
    <line x1="20" y1="14" x2="24" y2="22" stroke="#b45309" strokeWidth="1" />
    {/* Right Pan */}
    <path d="M40 22H48L44 25Z" fill="#f59e0b" stroke="#b45309" strokeWidth="1.5" />
    <line x1="44" y1="14" x2="40" y2="22" stroke="#b45309" strokeWidth="1" />
    <line x1="44" y1="14" x2="48" y2="22" stroke="#b45309" strokeWidth="1" />
    {/* Big Gold Rupee Coin at Bottom */}
    <circle cx="44" cy="42" r="10" fill="#fbbf24" stroke="#d97706" strokeWidth="2" />
    <text x="40.5" y="46.5" fontSize="11" fontWeight="900" fill="#78350f" fontFamily="sans-serif">₹</text>
  </svg>
);

// 21. Human Resource Management (bcom-hrm): Talent Search Loupe & Corporate Team Hierarchy
export const HRMCourseIcon: React.FC<{ className?: string }> = ({ className = 'h-10 w-10' }) => (
  <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg" fill="none">
    {/* Corporate Blue Card */}
    <rect x="8" y="8" width="48" height="48" rx="8" fill="#eff6ff" stroke="#2563eb" strokeWidth="2" />
    {/* Organizational Tree Connector Lines */}
    <line x1="26" y1="22" x2="26" y2="34" stroke="#93c5fd" strokeWidth="2" />
    <line x1="16" y1="34" x2="36" y2="34" stroke="#93c5fd" strokeWidth="2" />
    <line x1="16" y1="34" x2="16" y2="40" stroke="#93c5fd" strokeWidth="2" />
    <line x1="36" y1="34" x2="36" y2="40" stroke="#93c5fd" strokeWidth="2" />
    {/* Top Executive Person */}
    <circle cx="26" cy="18" r="4.5" fill="#2563eb" />
    <path d="M20 28C20 25 32 25 32 28" stroke="#2563eb" strokeWidth="2" />
    {/* Subordinate 1 */}
    <circle cx="16" cy="42" r="4" fill="#0d9488" />
    {/* Subordinate 2 */}
    <circle cx="36" cy="42" r="4" fill="#0d9488" />
    {/* Talent Search Magnifying Glass */}
    <circle cx="44" cy="24" r="10" fill="#fef08a" stroke="#ca8a04" strokeWidth="2.5" />
    <line x1="51" y1="31" x2="58" y2="38" stroke="#ca8a04" strokeWidth="3.5" strokeLinecap="round" />
    {/* Star inside Magnifier (Top Talent) */}
    <polygon points="44,18 45.5,22 50,22 46.5,25 48,29 44,26.5 40,29 41.5,25 38,22 42.5,22" fill="#eab308" />
  </svg>
);

// 22. Marketing (bcom-marketing): Megaphone Bullhorn with Bullseye Target & Rocket Launch
export const MarketingCourseIcon: React.FC<{ className?: string }> = ({ className = 'h-10 w-10' }) => (
  <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg" fill="none">
    {/* Fiery Marketing Card */}
    <rect x="8" y="8" width="48" height="48" rx="8" fill="#fff7ed" stroke="#ea580c" strokeWidth="2" />
    {/* Bullhorn Megaphone */}
    <path d="M14 26H20L34 16V44L20 34H14C12.5 34 12 32.5 12 30V30C12 27.5 12.5 26 14 26Z" fill="#ea580c" stroke="#c2410c" strokeWidth="2" />
    {/* Megaphone Handle */}
    <path d="M20 34V46C20 47.5 22 48 23 46L26 34" stroke="#9a3412" strokeWidth="2.5" strokeLinecap="round" />
    {/* Sound Waves */}
    <path d="M38 24C41 27 41 33 38 36" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M43 20C48 24 48 36 43 40" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" />
    {/* Target Bullseye in Upper Right */}
    <circle cx="50" cy="18" r="8" fill="#ffffff" stroke="#ef4444" strokeWidth="2" />
    <circle cx="50" cy="18" r="4" fill="#ef4444" />
    <circle cx="50" cy="18" r="1.5" fill="#ffffff" />
  </svg>
);

// ==========================================
// 💻 VOCATIONAL & EXTRA SPECIAL COURSES
// ==========================================

// 23. BCA / Computer Applications: Modern Laptop with Color Syntax Code & Database
export const BCACourseIcon: React.FC<{ className?: string }> = ({ className = 'h-10 w-10' }) => (
  <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg" fill="none">
    {/* Monitor Screen Frame */}
    <rect x="8" y="10" width="48" height="34" rx="5" fill="#0284c7" stroke="#0369a1" strokeWidth="2.5" />
    <rect x="12" y="14" width="40" height="26" rx="2" fill="#0f172a" />
    {/* Code syntax tags */}
    <text x="16" y="30" fontSize="11" fontWeight="bold" fill="#38bdf8" fontFamily="monospace">&lt;/&gt;</text>
    <circle cx="34" cy="22" r="1.5" fill="#ef4444" />
    <circle cx="39" cy="22" r="1.5" fill="#f59e0b" />
    <circle cx="44" cy="22" r="1.5" fill="#22c55e" />
    <line x1="34" y1="28" x2="46" y2="28" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
    <line x1="16" y1="35" x2="28" y2="35" stroke="#facc15" strokeWidth="2" strokeLinecap="round" />
    <line x1="32" y1="35" x2="44" y2="35" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" />
    {/* Laptop Keyboard Base */}
    <path d="M4 44H60L54 52H10L4 44Z" fill="#cbd5e1" stroke="#64748b" strokeWidth="2" />
    <rect x="26" y="46" width="12" height="2" rx="1" fill="#94a3b8" />
  </svg>
);

// 24. BBA / Business Administration: Executive Briefcase, Tie & Growth Bar
export const BBACourseIcon: React.FC<{ className?: string }> = ({ className = 'h-10 w-10' }) => (
  <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg" fill="none">
    {/* Briefcase Handle */}
    <path d="M24 16V10C24 8.5 25.5 7 27 7H37C38.5 7 40 8.5 40 10V16" stroke="#475569" strokeWidth="3" fill="none" />
    {/* Briefcase Body */}
    <rect x="8" y="16" width="48" height="38" rx="6" fill="#1e293b" stroke="#0f172a" strokeWidth="2.5" />
    {/* Leather Stitching / Metal Latches */}
    <line x1="8" y1="34" x2="56" y2="34" stroke="#64748b" strokeWidth="2" />
    <rect x="18" y="31" width="6" height="6" rx="1" fill="#f59e0b" stroke="#d97706" strokeWidth="1" />
    <rect x="40" y="31" width="6" height="6" rx="1" fill="#f59e0b" stroke="#d97706" strokeWidth="1" />
    {/* Corporate Growth Chart badge overlay */}
    <rect x="22" y="40" width="20" height="10" rx="2" fill="#f8fafc" />
    <path d="M25 47L30 43L35 45L39 41" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// 25. Law / Legal Studies (LL.B): Scales of Legal Justice & Gavel
export const LawCourseIcon: React.FC<{ className?: string }> = ({ className = 'h-10 w-10' }) => (
  <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg" fill="none">
    <rect x="8" y="8" width="48" height="48" rx="8" fill="#f8fafc" stroke="#334155" strokeWidth="2" />
    {/* Scales of Justice */}
    <line x1="32" y1="12" x2="32" y2="52" stroke="#d97706" strokeWidth="3" strokeLinecap="round" />
    <line x1="16" y1="20" x2="48" y2="20" stroke="#d97706" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M12 32H24L18 36Z" fill="#f59e0b" stroke="#b45309" strokeWidth="1.5" />
    <line x1="18" y1="20" x2="12" y2="32" stroke="#b45309" strokeWidth="1.2" />
    <line x1="18" y1="20" x2="24" y2="32" stroke="#b45309" strokeWidth="1.2" />
    <path d="M40 32H52L46 36Z" fill="#f59e0b" stroke="#b45309" strokeWidth="1.5" />
    <line x1="46" y1="20" x2="40" y2="32" stroke="#b45309" strokeWidth="1.2" />
    <line x1="46" y1="20" x2="52" y2="32" stroke="#b45309" strokeWidth="1.2" />
    {/* Pedestal Base */}
    <rect x="22" y="50" width="20" height="4" rx="2" fill="#78350f" />
  </svg>
);

// 26. Sports Science & Physical Education: Trophy & Laurel Wreath
export const SportsCourseIcon: React.FC<{ className?: string }> = ({ className = 'h-10 w-10' }) => (
  <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg" fill="none">
    <rect x="8" y="8" width="48" height="48" rx="8" fill="#fffbeb" stroke="#f59e0b" strokeWidth="2" />
    {/* Golden Trophy Cup */}
    <path d="M22 16H42V28C42 34 37 38 32 38C27 38 22 34 22 28V16Z" fill="#fef08a" stroke="#d97706" strokeWidth="2.5" />
    <path d="M22 20H15C15 26 18 29 22 29" stroke="#d97706" strokeWidth="2.5" />
    <path d="M42 20H49C49 26 46 29 42 29" stroke="#d97706" strokeWidth="2.5" />
    <rect x="29" y="38" width="6" height="8" fill="#d97706" />
    <rect x="22" y="46" width="20" height="5" rx="2" fill="#78350f" />
  </svg>
);

// 27. Common NEP / AEC / MDC / General Modules: Radiant Academic Cap & Book
export const CommonNEPCourseIcon: React.FC<{ className?: string }> = ({ className = 'h-10 w-10' }) => (
  <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg" fill="none">
    <rect x="8" y="8" width="48" height="48" rx="8" fill="#f5f3ff" stroke="#6366f1" strokeWidth="2" />
    {/* Graduation Cap */}
    <polygon points="32,16 54,26 32,36 10,26" fill="#4f46e5" stroke="#3730a3" strokeWidth="2" />
    <path d="M20 31V41C20 45 32 49 32 49C32 49 44 45 44 41V31" fill="#4338ca" />
    <path d="M50 28V42" stroke="#f59e0b" strokeWidth="2" />
    <circle cx="50" cy="43" r="2" fill="#f59e0b" />
  </svg>
);

// ==========================================
// 🎯 MASTER ICON MAPPER (100% UNIQUE FOR EVERY SUBJECT)
// ==========================================

export const getCourseVectorIcon = (courseId: string, className = 'h-10 w-10'): React.ReactNode => {
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

  // Faculty of Science (5 Subjects)
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

  // Vocational & Common
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

// Exact Book Icon for the Semester Buttons
export const SemesterBookIcon: React.FC<{ className?: string }> = ({ className = 'h-7 w-7' }) => (
  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-lime-300 p-1.5 shadow-sm">
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="#064e3b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" fill="#ffffff" fillOpacity="0.4" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" fill="#ffffff" fillOpacity="0.4" />
      <line x1="6" y1="8" x2="9" y2="8" stroke="#064e3b" strokeWidth="2" />
      <line x1="15" y1="8" x2="18" y2="8" stroke="#064e3b" strokeWidth="2" />
    </svg>
  </div>
);
