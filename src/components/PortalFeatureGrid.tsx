'use client';

import React from 'react';
import Link from 'next/link';
import {
  BookOpen,
  FileText,
  Megaphone,
  Calculator,
  CalendarCheck,
  Folder,
  ChevronRight,
} from 'lucide-react';

export const PortalFeatureGrid: React.FC = () => {
  const cards = [
    {
      id: 'syllabus',
      title: 'Syllabus',
      subtitle: 'Semester-wise subjects & topics',
      href: '/syllabus',
      icon: BookOpen,
      iconBg: 'bg-[#fef9c3]', // Soft pastel yellow
      iconColor: 'text-[#0a2558]',
    },
    {
      id: 'pyqs',
      title: 'Previous Year Papers',
      subtitle: 'Find PYQs easily',
      href: '/pyqs',
      icon: FileText,
      iconBg: 'bg-[#e0f2fe]', // Soft pastel blue
      iconColor: 'text-[#0a2558]',
    },
    {
      id: 'notices',
      title: 'University Notices',
      subtitle: 'Latest official updates',
      href: '/notices',
      icon: Megaphone,
      iconBg: 'bg-[#ffe4e6]', // Soft pastel peach/rose
      iconColor: 'text-[#0a2558]',
    },
    {
      id: 'sgpa',
      title: 'SGPA Calculator',
      subtitle: 'Calculate your semester GPA',
      href: '/sgpa',
      icon: Calculator,
      iconBg: 'bg-[#dcfce7]', // Soft pastel mint green
      iconColor: 'text-[#0a2558]',
    },
    {
      id: 'attendance',
      title: 'Attendance',
      subtitle: 'Track your attendance',
      href: '/attendance',
      icon: CalendarCheck,
      iconBg: 'bg-[#ede9fe]', // Soft pastel lavender
      iconColor: 'text-[#0a2558]',
    },
    {
      id: 'materials',
      title: 'Study Material',
      subtitle: 'Notes, Books & Resources',
      href: '/results', // Results & study portal
      icon: Folder,
      iconBg: 'bg-[#fef3c7]', // Soft pastel amber
      iconColor: 'text-[#0a2558]',
    },
  ];

  return (
    <div className="mx-auto max-w-xl px-4 pt-3 pb-2">
      <div className="grid grid-cols-2 gap-3 sm:gap-3.5">
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <Link
              key={card.id}
              href={card.href}
              className="group flex items-center justify-between gap-2.5 rounded-2xl bg-white p-3 sm:p-3.5 shadow-[0_2px_10px_rgba(10,37,88,0.04)] border border-slate-100/80 hover:border-slate-200 hover:shadow-xs active:scale-[0.98] transition cursor-pointer"
            >
              <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                {/* Rounded Icon Box */}
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${card.iconBg} ${card.iconColor}`}
                >
                  <Icon className="h-5 w-5 stroke-[2.2]" />
                </div>

                {/* Title & Subtitle */}
                <div className="min-w-0">
                  <h3 className="text-xs sm:text-[13px] font-bold text-[#0a2558] group-hover:text-blue-900 leading-tight truncate">
                    {card.title}
                  </h3>
                  <p className="text-[10px] sm:text-[11px] text-slate-500 font-normal leading-tight mt-0.5 line-clamp-2">
                    {card.subtitle}
                  </p>
                </div>
              </div>

              {/* Chevron Right */}
              <ChevronRight className="h-4 w-4 text-[#0a2558]/70 group-hover:text-[#0a2558] group-hover:translate-x-0.5 transition shrink-0" />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
