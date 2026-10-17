'use client';

import React from 'react';
import Link from 'next/link';
import {
  BookOpen,
  FileText,
  Megaphone,
  BarChart3,
  Calculator,
  Calendar,
  Clock,
  Users,
  Heart,
  ChevronRight,
} from 'lucide-react';

export const LightAcademicTools: React.FC = () => {
  const tools = [
    {
      id: 'syllabus',
      label: 'Syllabus',
      tag: 'CBCS (FYUGP)',
      href: '/syllabus',
      icon: BookOpen,
    },
    {
      id: 'pyqs',
      label: 'PYQs',
      tag: 'Past Year Papers',
      href: '/pyqs',
      icon: FileText,
    },
    {
      id: 'notices',
      label: 'PU Notices',
      tag: 'Live Circulars',
      href: '/notices',
      icon: Megaphone,
    },
    {
      id: 'results',
      label: 'Results',
      tag: 'UMIS Online',
      href: '/results',
      icon: BarChart3,
    },
    {
      id: 'sgpa',
      label: 'SGPA Calculator',
      tag: 'Score Predictor',
      href: '/sgpa',
      icon: Calculator,
    },
    {
      id: 'calendar',
      label: 'Calendar',
      tag: 'Exam Routines',
      href: '/calendar',
      icon: Calendar,
    },
  ];

  return (
    <section className="mx-auto max-w-xl px-3 pt-4 space-y-3">
      {/* Section Header */}
      <div className="flex items-center justify-between px-1">
        <h2 className="text-base font-bold text-slate-900 tracking-tight">
          Academic Tools
        </h2>
        <Link
          href="/tools"
          className="text-xs font-normal text-slate-400 hover:text-emerald-700 flex items-center gap-0.5 transition"
        >
          <span>View All</span>
          <ChevronRight className="h-3 w-3" />
        </Link>
      </div>

      {/* 2x3 Grid of Glass Green Cards */}
      <div className="grid grid-cols-3 gap-2.5">
        {tools.map((tool) => {
          const Icon = tool.icon;
          return (
            <Link
              key={tool.id}
              href={tool.href}
              className="group relative flex flex-col justify-between rounded-2xl border border-emerald-200/75 bg-gradient-to-br from-white/90 via-emerald-50/45 to-white/70 backdrop-blur-md p-3 shadow-[0_3px_12px_-1px_rgba(16,185,129,0.07)] hover:border-emerald-400 hover:shadow-[0_8px_24px_-4px_rgba(16,185,129,0.18)] hover:-translate-y-0.5 transition active:scale-97"
            >
              <div>
                {/* Frosted Glass Emerald Icon Badge */}
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-200/80 text-emerald-700 shadow-2xs group-hover:scale-105 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 transition mb-2">
                  <Icon className="h-4.5 w-4.5 stroke-[1.9]" />
                </div>

                {/* Title & Tag */}
                <h3 className="text-xs sm:text-[13px] font-semibold text-slate-900 group-hover:text-emerald-800 transition leading-tight">
                  {tool.label}
                </h3>
                <p className="text-[10px] text-slate-500 font-medium mt-0.5 truncate">
                  {tool.tag}
                </p>
              </div>

              {/* Minimal Chevron */}
              <div className="self-end mt-2 text-emerald-400/80 group-hover:text-emerald-700 group-hover:translate-x-0.5 transition">
                <ChevronRight className="h-3.5 w-3.5 stroke-[2]" />
              </div>
            </Link>
          );
        })}
      </div>

      {/* Secondary Quick Action Row (3 Glass Pills) */}
      <div className="grid grid-cols-3 gap-2 pt-0.5">
        <Link
          href="/timetable"
          className="flex items-center justify-between rounded-xl border border-emerald-200/70 bg-gradient-to-r from-emerald-50/60 via-white/85 to-emerald-50/40 backdrop-blur-md px-2.5 py-2 hover:border-emerald-400 hover:shadow-xs shadow-[0_2px_8px_-1px_rgba(16,185,129,0.06)] transition active:scale-98 group"
        >
          <div className="flex items-center gap-1.5 min-w-0">
            <Clock className="h-3.5 w-3.5 text-emerald-700 group-hover:text-emerald-800 shrink-0 stroke-[1.9]" />
            <span className="text-[11px] font-semibold text-slate-800 truncate">Timetable</span>
          </div>
          <ChevronRight className="h-3 w-3 text-emerald-400 group-hover:text-emerald-700 shrink-0" />
        </Link>

        <Link
          href="/attendance"
          className="flex items-center justify-between rounded-xl border border-emerald-200/70 bg-gradient-to-r from-emerald-50/60 via-white/85 to-emerald-50/40 backdrop-blur-md px-2.5 py-2 hover:border-emerald-400 hover:shadow-xs shadow-[0_2px_8px_-1px_rgba(16,185,129,0.06)] transition active:scale-98 group"
        >
          <div className="flex items-center gap-1.5 min-w-0">
            <Users className="h-3.5 w-3.5 text-emerald-700 group-hover:text-emerald-800 shrink-0 stroke-[1.9]" />
            <span className="text-[11px] font-semibold text-slate-800 truncate">Attendance</span>
          </div>
          <ChevronRight className="h-3 w-3 text-emerald-400 group-hover:text-emerald-700 shrink-0" />
        </Link>

        <Link
          href="/contributors"
          className="flex items-center justify-between rounded-xl border border-rose-200/80 bg-gradient-to-r from-rose-50/50 via-white/85 to-rose-50/30 backdrop-blur-md px-2.5 py-2 hover:border-rose-400 hover:shadow-xs shadow-[0_2px_8px_-1px_rgba(244,63,94,0.06)] transition active:scale-98 group"
        >
          <div className="flex items-center gap-1.5 min-w-0">
            <Heart className="h-3.5 w-3.5 text-rose-600 shrink-0 stroke-[1.9]" />
            <span className="text-[11px] font-semibold text-slate-800 truncate">Supporters</span>
          </div>
          <ChevronRight className="h-3 w-3 text-rose-300 group-hover:text-rose-600 shrink-0" />
        </Link>
      </div>
    </section>
  );
};
