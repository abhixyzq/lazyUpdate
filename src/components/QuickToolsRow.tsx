'use client';

import React from 'react';
import Link from 'next/link';
import {
  Calculator,
  Calendar,
  Clock,
  Users,
  ChevronRight,
} from 'lucide-react';

export const QuickToolsRow: React.FC = () => {
  const tools = [
    {
      id: 'sgpa',
      label: 'SGPA Calc',
      tag: 'Predictor',
      href: '/sgpa',
      icon: Calculator,
      color: 'text-purple-600 bg-purple-50 border-purple-200/80',
    },
    {
      id: 'calendar',
      label: 'Calendar',
      tag: 'Routines',
      href: '/calendar',
      icon: Calendar,
      color: 'text-teal-600 bg-teal-50 border-teal-200/80',
    },
    {
      id: 'timetable',
      label: 'Timetable',
      tag: 'Schedule',
      href: '/timetable',
      icon: Clock,
      color: 'text-indigo-600 bg-indigo-50 border-indigo-200/80',
    },
    {
      id: 'attendance',
      label: 'Attendance',
      tag: 'Tracker',
      href: '/attendance',
      icon: Users,
      color: 'text-sky-600 bg-sky-50 border-sky-200/80',
    },
  ];

  return (
    <section className="mx-auto max-w-xl px-4 pt-4">
      {/* Section Header */}
      <div className="flex items-center justify-between pb-2">
        <h3 className="text-sm font-bold text-slate-900 tracking-tight">
          Quick Tools
        </h3>
        <Link
          href="/tools"
          className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-0.5 transition"
        >
          <span>All Tools</span>
          <ChevronRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      {/* 4-Column Minimal Icon Buttons */}
      <div className="grid grid-cols-4 gap-2 sm:gap-2.5">
        {tools.map((tool) => {
          const Icon = tool.icon;
          return (
            <Link
              key={tool.id}
              href={tool.href}
              className="group flex flex-col items-center rounded-2xl border border-slate-200/90 bg-white p-2.5 sm:p-3 text-center shadow-2xs hover:border-slate-300 hover:shadow-xs transition active:scale-95 cursor-pointer"
            >
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-xl border ${tool.color} shadow-2xs group-hover:scale-105 transition mb-1.5`}
              >
                <Icon className="h-5 w-5 stroke-[2]" />
              </div>
              <span className="text-xs font-bold text-slate-900 group-hover:text-emerald-700 transition leading-tight truncate w-full">
                {tool.label}
              </span>
              <span className="text-[10px] font-medium text-slate-400 truncate w-full mt-0.5">
                {tool.tag}
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
