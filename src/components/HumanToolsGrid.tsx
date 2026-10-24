'use client';

import React from 'react';
import Link from 'next/link';
import {
  Calculator,
  Calendar,
  Clock,
  Users,
  Briefcase,
  GraduationCap,
  ShieldAlert,
  ChevronRight,
} from 'lucide-react';

export const HumanToolsGrid: React.FC = () => {
  const tools = [
    {
      id: 'sgpa',
      title: 'SGPA Calculator',
      description: 'Calculate semester grade points',
      href: '/sgpa',
      icon: Calculator,
    },
    {
      id: 'calendar',
      title: 'Academic Calendar',
      description: 'PU official holidays & exam routines',
      href: '/calendar',
      icon: Calendar,
    },
    {
      id: 'timetable',
      title: 'Class Timetable',
      description: 'Daily periods & college routine',
      href: '/timetable',
      icon: Clock,
    },
    {
      id: 'attendance',
      title: 'Attendance Tracker',
      description: 'Track your 75% exam criteria',
      href: '/attendance',
      icon: Users,
    },
  ];

  const portals = [
    {
      id: 'internships',
      title: 'Student Internships',
      tag: 'AICTE & Govt',
      href: '/internships',
      icon: Briefcase,
    },
    {
      id: 'scholarships',
      title: 'Scholarship Schemes',
      tag: 'PMS & NSP',
      href: '/scholarships',
      icon: GraduationCap,
    },
    {
      id: 'antiragging',
      title: 'Anti-Ragging Cell',
      tag: 'UGC Helpline',
      href: '/antiragging',
      icon: ShieldAlert,
    },
  ];

  return (
    <div className="mx-auto max-w-xl px-4 pt-4 space-y-4">
      {/* 1. Student Utilities */}
      <div>
        <div className="flex items-center justify-between pb-2.5">
          <h2 className="text-sm font-bold text-slate-900 tracking-tight">
            Student Utilities
          </h2>
          <Link
            href="/tools"
            className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 transition flex items-center gap-0.5"
          >
            <span>All Tools</span>
            <ChevronRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <Link
                key={tool.id}
                href={tool.href}
                className="group flex items-start gap-3 rounded-2xl border border-slate-200/90 bg-white p-3 shadow-2xs hover:border-slate-300 hover:shadow-xs transition active:scale-[0.98] cursor-pointer"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700 group-hover:bg-emerald-50 group-hover:text-emerald-700 transition">
                  <Icon className="h-4.5 w-4.5 stroke-[2]" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-emerald-800 transition truncate">
                    {tool.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 font-normal truncate mt-0.5">
                    {tool.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* 2. Official Student Portals */}
      <div>
        <h2 className="text-sm font-bold text-slate-900 tracking-tight pb-2">
          Government & Welfare Portals
        </h2>

        <div className="grid grid-cols-3 gap-2">
          {portals.map((portal) => {
            const Icon = portal.icon;
            return (
              <Link
                key={portal.id}
                href={portal.href}
                className="group flex flex-col justify-between rounded-xl border border-slate-200/90 bg-white p-2.5 shadow-2xs hover:border-emerald-300 hover:shadow-xs transition active:scale-97 cursor-pointer"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-100 text-slate-700 group-hover:bg-emerald-50 group-hover:text-emerald-700 transition">
                    <Icon className="h-3.5 w-3.5 stroke-[2]" />
                  </div>
                  <ChevronRight className="h-3 w-3 text-slate-300 group-hover:text-slate-600" />
                </div>
                <div>
                  <span className="block text-[11px] font-bold text-slate-900 group-hover:text-emerald-800 truncate">
                    {portal.title}
                  </span>
                  <span className="block text-[9px] font-medium text-slate-500 truncate mt-0.5">
                    {portal.tag}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
