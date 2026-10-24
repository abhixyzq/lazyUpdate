'use client';

import React from 'react';
import Link from 'next/link';
import { BookOpen, FileText, Sparkles, CheckCircle2 } from 'lucide-react';

export const LightHeroBanner: React.FC = () => {
  return (
    <div className="mx-auto max-w-xl px-3 pt-3">
      <div className="relative overflow-hidden rounded-2xl border border-emerald-200/90 bg-gradient-to-br from-emerald-50/80 via-white to-white p-4 sm:p-5 shadow-xs">
        
        {/* Top Eyebrow with Active Session Pill */}
        <div className="flex items-center justify-between gap-2">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100/90 text-emerald-800 text-[10px] sm:text-[11px] font-bold tracking-wide uppercase border border-emerald-200/90">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 animate-pulse" />
            <span>PATNA UNIVERSITY</span>
          </div>

          <span className="text-[11px] font-semibold text-slate-500 tracking-tight">
            CBCS FYUGP & Reg.
          </span>
        </div>

        {/* Content Row: Headline & Clean Vector Emblem */}
        <div className="relative flex items-center justify-between gap-3 mt-3">
          {/* Left Text */}
          <div className="min-w-0 flex-1">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-tight">
              Study Smarter, <br />
              <span className="text-emerald-700">Stay Ahead at PU.</span>
            </h2>

            <p className="mt-1.5 text-xs sm:text-[13px] text-slate-600 font-medium leading-relaxed">
              Fast, direct links to CBCS syllabus, previous year papers, circulars & marksheet portal.
            </p>
          </div>

          {/* Right Clean Featherweight Vector Graphic (Razor sharp, 0 lag) */}
          <div className="relative shrink-0 w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center">
            <div className="relative flex items-center justify-center">
              {/* Soft decorative ring */}
              <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-2xl bg-emerald-100/60 border border-emerald-200/80 flex items-center justify-center">
                <svg
                  viewBox="0 0 80 80"
                  className="w-14 h-14 sm:w-16 sm:h-16 text-emerald-700"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Classical Academic Pillars & Pediment */}
                  <path
                    d="M14 62H66M18 58H62"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  {/* Columns */}
                  <path
                    d="M24 38V58M35 38V58M45 38V58M56 38V58"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  {/* Architrave */}
                  <path
                    d="M20 38H60"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  {/* Pediment (Triangle) */}
                  <polygon
                    points="40,20 18,34 62,34"
                    fill="#ecfdf5"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinejoin="round"
                  />
                  {/* Graduation Cap at Top */}
                  <polygon
                    points="40,10 54,16 40,22 26,16"
                    fill="#047857"
                    stroke="#047857"
                    strokeWidth="1.5"
                  />
                  <line x1="52" y1="17" x2="52" y2="24" stroke="#047857" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>

              {/* Verified Badge */}
              <div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-600 text-white shadow-2xs">
                <CheckCircle2 className="h-3.5 w-3.5 stroke-[2.5]" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Feature Badges */}
        <div className="mt-3.5 pt-3 border-t border-emerald-100/80 flex items-center gap-2 overflow-x-auto scrollbar-none">
          <Link
            href="/syllabus"
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white border border-emerald-200/80 text-emerald-800 text-[11px] font-semibold hover:border-emerald-400 hover:bg-emerald-50/50 transition shrink-0"
          >
            <BookOpen className="h-3 w-3 text-emerald-600 stroke-[2.2]" />
            <span>NEP FYUGP Syllabus</span>
          </Link>

          <Link
            href="/pyqs"
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white border border-emerald-200/80 text-emerald-800 text-[11px] font-semibold hover:border-emerald-400 hover:bg-emerald-50/50 transition shrink-0"
          >
            <FileText className="h-3 w-3 text-emerald-600 stroke-[2.2]" />
            <span>Solved PYQs</span>
          </Link>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-50/60 text-emerald-700 text-[11px] font-semibold shrink-0">
            <Sparkles className="h-3 w-3 text-emerald-600" />
            <span>100% Free & Ad-Free</span>
          </div>
        </div>

      </div>
    </div>
  );
};
