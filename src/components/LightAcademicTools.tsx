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
      iconBg: 'bg-emerald-50 text-emerald-700 border-emerald-200/90',
      activeHover: 'group-hover:border-emerald-500 group-hover:bg-emerald-600',
    },
    {
      id: 'pyqs',
      label: 'PYQs',
      tag: 'Past Year Papers',
      href: '/pyqs',
      icon: FileText,
      iconBg: 'bg-blue-50 text-blue-700 border-blue-200/90',
      activeHover: 'group-hover:border-blue-500 group-hover:bg-blue-600',
    },
    {
      id: 'notices',
      label: 'PU Notices',
      tag: 'Live Circulars',
      href: '/notices',
      icon: Megaphone,
      iconBg: 'bg-rose-50 text-rose-700 border-rose-200/90',
      activeHover: 'group-hover:border-rose-500 group-hover:bg-rose-600',
    },
    {
      id: 'results',
      label: 'Results',
      tag: 'UMIS Online',
      href: '/results',
      icon: BarChart3,
      iconBg: 'bg-amber-50 text-amber-800 border-amber-200/90',
      activeHover: 'group-hover:border-amber-500 group-hover:bg-amber-600',
    },
    {
      id: 'sgpa',
      label: 'SGPA Calculator',
      tag: 'Score Predictor',
      href: '/sgpa',
      icon: Calculator,
      iconBg: 'bg-purple-50 text-purple-700 border-purple-200/90',
      activeHover: 'group-hover:border-purple-500 group-hover:bg-purple-600',
    },
    {
      id: 'calendar',
      label: 'Calendar',
      tag: 'Exam Routines',
      href: '/calendar',
      icon: Calendar,
      iconBg: 'bg-teal-50 text-teal-700 border-teal-200/90',
      activeHover: 'group-hover:border-teal-500 group-hover:bg-teal-600',
    },
  ];

  return (
    <section className="mx-auto max-w-xl px-3 pt-4 space-y-2.5">
      {/* Section Header */}
      <div className="flex items-center justify-between px-1">
        <h2 className="text-sm sm:text-base font-extrabold text-slate-900 tracking-tight">
          Academic Tools
        </h2>
        <Link
          href="/tools"
          className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-0.5 transition"
        >
          <span>View All</span>
          <ChevronRight className="h-3.5 w-3.5 stroke-[2.2]" />
        </Link>
      </div>

      {/* 2x3 Grid of Crisp High-Visibility Solid Cards */}
      <div className="grid grid-cols-3 gap-2 sm:gap-2.5">
        {tools.map((tool) => {
          const Icon = tool.icon;
          return (
            <Link
              key={tool.id}
              href={tool.href}
              className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-3 shadow-2xs hover:border-slate-300 hover:shadow-xs transition active:scale-97 cursor-pointer"
            >
              <div>
                {/* Crisp Distinct Icon Badge */}
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-xl border ${tool.iconBg} shadow-2xs group-hover:scale-105 group-hover:text-white ${tool.activeHover} transition mb-2`}
                >
                  <Icon className="h-4.5 w-4.5 stroke-[2]" />
                </div>

                {/* Title & Tag */}
                <h3 className="text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-emerald-700 transition leading-tight">
                  {tool.label}
                </h3>
                <p className="text-[10px] text-slate-600 font-semibold mt-0.5 truncate">
                  {tool.tag}
                </p>
              </div>

              {/* Minimal Chevron */}
              <div className="self-end mt-2 text-slate-400 group-hover:text-slate-700 group-hover:translate-x-0.5 transition">
                <ChevronRight className="h-3.5 w-3.5 stroke-[2.2]" />
              </div>
            </Link>
          );
        })}
      </div>

      {/* Secondary Quick Action Row (3 Solid Clean Pills) */}
      <div className="grid grid-cols-3 gap-2 pt-0.5">
        <Link
          href="/timetable"
          className="flex items-center justify-between rounded-xl border border-slate-200/90 bg-white px-2.5 py-2 shadow-2xs hover:border-emerald-300 hover:shadow-xs transition active:scale-98 group cursor-pointer"
        >
          <div className="flex items-center gap-1.5 min-w-0">
            <Clock className="h-3.5 w-3.5 text-emerald-700 shrink-0 stroke-[2.2]" />
            <span className="text-[11px] font-bold text-slate-800 truncate">Timetable</span>
          </div>
          <ChevronRight className="h-3 w-3 text-slate-400 group-hover:text-emerald-700 shrink-0" />
        </Link>

        <Link
          href="/attendance"
          className="flex items-center justify-between rounded-xl border border-slate-200/90 bg-white px-2.5 py-2 shadow-2xs hover:border-blue-300 hover:shadow-xs transition active:scale-98 group cursor-pointer"
        >
          <div className="flex items-center gap-1.5 min-w-0">
            <Users className="h-3.5 w-3.5 text-blue-700 shrink-0 stroke-[2.2]" />
            <span className="text-[11px] font-bold text-slate-800 truncate">Attendance</span>
          </div>
          <ChevronRight className="h-3 w-3 text-slate-400 group-hover:text-blue-700 shrink-0" />
        </Link>

        <Link
          href="/contributors"
          className="flex items-center justify-between rounded-xl border border-slate-200/90 bg-white px-2.5 py-2 shadow-2xs hover:border-rose-300 hover:shadow-xs transition active:scale-98 group cursor-pointer"
        >
          <div className="flex items-center gap-1.5 min-w-0">
            <Heart className="h-3.5 w-3.5 text-rose-600 shrink-0 stroke-[2.2]" />
            <span className="text-[11px] font-bold text-slate-800 truncate">Supporters</span>
          </div>
          <ChevronRight className="h-3 w-3 text-slate-400 group-hover:text-rose-600 shrink-0" />
        </Link>
      </div>
    </section>
  );
};
