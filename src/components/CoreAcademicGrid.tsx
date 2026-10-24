'use client';

import React from 'react';
import Link from 'next/link';
import { BookOpen, FileText, Megaphone, BarChart3, ArrowUpRight } from 'lucide-react';

export const CoreAcademicGrid: React.FC = () => {
  const cards = [
    {
      id: 'syllabus',
      title: 'Syllabus',
      subtitle: 'NEP FYUGP & CBCS courses',
      badge: 'Sem 1 - 8',
      href: '/syllabus',
      icon: BookOpen,
      iconBg: 'bg-emerald-50 text-emerald-700 border-emerald-200/90',
      badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200/70',
      hoverBorder: 'hover:border-emerald-400 hover:shadow-emerald-500/5',
      accentColor: 'text-emerald-700',
    },
    {
      id: 'pyqs',
      title: 'PYQs & Papers',
      subtitle: 'Previous semester question banks',
      badge: 'Solved Papers',
      href: '/pyqs',
      icon: FileText,
      iconBg: 'bg-blue-50 text-blue-700 border-blue-200/90',
      badgeBg: 'bg-blue-50 text-blue-700 border-blue-200/70',
      hoverBorder: 'hover:border-blue-400 hover:shadow-blue-500/5',
      accentColor: 'text-blue-700',
    },
    {
      id: 'notices',
      title: 'PU Notices',
      subtitle: 'Exam forms & university orders',
      badge: 'Live Board',
      href: '/notices',
      icon: Megaphone,
      iconBg: 'bg-rose-50 text-rose-700 border-rose-200/90',
      badgeBg: 'bg-rose-50 text-rose-700 border-rose-200/70',
      hoverBorder: 'hover:border-rose-400 hover:shadow-rose-500/5',
      accentColor: 'text-rose-700',
    },
    {
      id: 'results',
      title: 'Check Results',
      subtitle: 'Direct PU UMIS marksheet portal',
      badge: 'UMIS Online',
      href: '/results',
      icon: BarChart3,
      iconBg: 'bg-amber-50 text-amber-800 border-amber-200/90',
      badgeBg: 'bg-amber-50 text-amber-800 border-amber-200/70',
      hoverBorder: 'hover:border-amber-400 hover:shadow-amber-500/5',
      accentColor: 'text-amber-800',
    },
  ];

  return (
    <section className="mx-auto max-w-xl px-4 pt-4">
      {/* Section Header */}
      <div className="flex items-center justify-between pb-2.5">
        <h2 className="text-sm font-bold text-slate-900 tracking-tight flex items-center gap-2">
          <span>Academic Hub</span>
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
        </h2>
        <span className="text-[11px] font-medium text-slate-500">
          Patna University
        </span>
      </div>

      {/* 2x2 High-Visibility Grid */}
      <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <Link
              key={card.id}
              href={card.href}
              className={`group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-3.5 sm:p-4 shadow-2xs ${card.hoverBorder} hover:shadow-sm transition-all duration-150 active:scale-[0.98] cursor-pointer`}
            >
              <div>
                {/* Top Row: Icon + Badge */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl border ${card.iconBg} shadow-2xs group-hover:scale-105 transition`}
                  >
                    <Icon className="h-5 w-5 stroke-[2.2]" />
                  </div>

                  <span
                    className={`inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-bold ${card.badgeBg}`}
                  >
                    {card.badge}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className={`text-sm sm:text-base font-extrabold text-slate-900 group-hover:${card.accentColor} transition leading-snug`}>
                  {card.title}
                </h3>
                <p className="text-[11px] font-medium text-slate-500 mt-0.5 leading-relaxed">
                  {card.subtitle}
                </p>
              </div>

              {/* Bottom Action Indicator */}
              <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-slate-400 group-hover:text-slate-800 transition">
                <span className="text-[10px] font-bold uppercase tracking-wider">
                  Open
                </span>
                <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
