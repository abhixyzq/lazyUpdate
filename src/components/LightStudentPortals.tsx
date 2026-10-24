'use client';

import React from 'react';
import Link from 'next/link';
import { Briefcase, GraduationCap, Shield, ChevronRight } from 'lucide-react';

export const LightStudentPortals: React.FC = () => {
  const portals = [
    {
      id: 'internships',
      label: 'Internships',
      tag: 'PM & AICTE',
      href: '/internships',
      icon: Briefcase,
      iconColor: 'bg-blue-50 text-blue-700 border-blue-200/90',
      hoverColor: 'group-hover:border-blue-500 group-hover:bg-blue-600',
    },
    {
      id: 'scholarships',
      label: 'Scholarships',
      tag: 'PMS & NSP',
      href: '/scholarships',
      icon: GraduationCap,
      iconColor: 'bg-emerald-50 text-emerald-700 border-emerald-200/90',
      hoverColor: 'group-hover:border-emerald-500 group-hover:bg-emerald-600',
    },
    {
      id: 'antiragging',
      label: 'Anti-Ragging',
      tag: 'UGC Helpline',
      href: '/antiragging',
      icon: Shield,
      iconColor: 'bg-rose-50 text-rose-700 border-rose-200/90',
      hoverColor: 'group-hover:border-rose-500 group-hover:bg-rose-600',
    },
  ];

  return (
    <section className="mx-auto max-w-xl px-3 pt-3">
      {/* Header */}
      <div className="flex items-center justify-between px-1 pb-2">
        <h3 className="text-sm sm:text-base font-extrabold text-slate-900 tracking-tight">
          Student Portals
        </h3>
        <span className="text-xs font-semibold text-slate-500 flex items-center gap-0.5">
          <span>Govt & National</span>
          <ChevronRight className="h-3 w-3" />
        </span>
      </div>

      {/* 3 Grid Cards with Crisp High-Visibility Solid Styling */}
      <div className="grid grid-cols-3 gap-2 sm:gap-2.5">
        {portals.map((portal) => {
          const Icon = portal.icon;

          return (
            <Link
              key={portal.id}
              href={portal.href}
              className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-3 shadow-2xs hover:border-slate-300 hover:shadow-xs transition active:scale-97 cursor-pointer"
            >
              <div>
                {/* Crisp Distinct Icon Badge */}
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-xl border ${portal.iconColor} shadow-2xs group-hover:scale-105 group-hover:text-white ${portal.hoverColor} transition mb-2`}
                >
                  <Icon className="h-4.5 w-4.5 stroke-[2]" />
                </div>

                {/* Title & Subtitle */}
                <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-emerald-700 transition leading-tight">
                  {portal.label}
                </h4>
                <p className="text-[10px] text-slate-600 font-semibold mt-0.5 truncate">
                  {portal.tag}
                </p>
              </div>

              {/* Bottom Right Chevron */}
              <div className="self-end mt-2 text-slate-400 group-hover:text-slate-700 group-hover:translate-x-0.5 transition">
                <ChevronRight className="h-3.5 w-3.5 stroke-[2.2]" />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
