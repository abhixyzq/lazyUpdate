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
    },
    {
      id: 'scholarships',
      label: 'Scholarships',
      tag: 'PMS & NSP',
      href: '/scholarships',
      icon: GraduationCap,
    },
    {
      id: 'antiragging',
      label: 'Anti-Ragging',
      tag: 'UGC Helpline',
      href: '/antiragging',
      icon: Shield,
    },
  ];

  return (
    <section className="mx-auto max-w-xl px-3 pt-3">
      {/* Header */}
      <div className="flex items-center justify-between px-1 pb-2">
        <h3 className="text-sm font-bold text-slate-900 tracking-tight">
          Student Portals
        </h3>
        <span className="text-xs font-normal text-slate-400 flex items-center gap-0.5">
          <span>Govt & National</span>
          <ChevronRight className="h-3 w-3" />
        </span>
      </div>

      {/* 3 Grid Cards with Glass Green Effect */}
      <div className="grid grid-cols-3 gap-2.5">
        {portals.map((portal) => {
          const Icon = portal.icon;

          return (
            <Link
              key={portal.id}
              href={portal.href}
              className="group relative flex flex-col justify-between rounded-2xl border border-emerald-200/75 bg-gradient-to-br from-white/90 via-emerald-50/45 to-white/70 backdrop-blur-md p-3 shadow-[0_3px_12px_-1px_rgba(16,185,129,0.07)] hover:border-emerald-400 hover:shadow-[0_8px_24px_-4px_rgba(16,185,129,0.18)] hover:-translate-y-0.5 transition active:scale-97"
            >
              <div>
                {/* Frosted Glass Emerald Icon Badge */}
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-200/80 text-emerald-700 shadow-2xs group-hover:scale-105 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 transition mb-2">
                  <Icon className="h-4.5 w-4.5 stroke-[1.9]" />
                </div>

                {/* Title & Subtitle */}
                <h4 className="text-xs sm:text-[13px] font-semibold text-slate-900 group-hover:text-emerald-800 transition leading-tight">
                  {portal.label}
                </h4>
                <p className="text-[10px] text-slate-500 font-medium mt-0.5 truncate">
                  {portal.tag}
                </p>
              </div>

              {/* Bottom Right Chevron */}
              <div className="self-end mt-2 text-emerald-400/80 group-hover:text-emerald-700 group-hover:translate-x-0.5 transition">
                <ChevronRight className="h-3.5 w-3.5 stroke-[2]" />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
