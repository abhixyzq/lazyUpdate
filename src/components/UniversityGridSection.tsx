'use client';

import React from 'react';
import Link from 'next/link';
import {
  PYQsIcon,
  SyllabusIcon,
  ResultsIcon,
  NoticeIcon,
  CalculatorIcon,
  CalendarIcon,
} from './ApnaIcons';
import { InstagramIcon, WhatsAppIcon } from './OfficialBrandIcons';
import { ChevronRight, Clock, CalendarCheck2, Heart } from 'lucide-react';

export const UniversityGridSection: React.FC = () => {
  const cards = [
    {
      id: 'syllabus',
      label: 'Syllabus',
      tag: 'CBCS FYUGP',
      href: '/syllabus',
      icon: <SyllabusIcon />,
    },
    {
      id: 'pyqs',
      label: 'PYQs',
      tag: 'Past Papers',
      href: '/pyqs',
      icon: <PYQsIcon />,
    },
    {
      id: 'notice',
      label: 'PU Notices',
      tag: 'Live Circulars',
      href: '/notices',
      icon: <NoticeIcon />,
    },
    {
      id: 'results',
      label: 'Results',
      tag: 'UMIS Online',
      href: '/results',
      icon: <ResultsIcon />,
    },
    {
      id: 'sgpa',
      label: 'SGPA CalC',
      tag: 'Score Predictor',
      href: '/sgpa',
      icon: <CalculatorIcon />,
    },
    {
      id: 'calendar',
      label: 'Calendar',
      tag: 'Exam Routines',
      href: '/calendar',
      icon: <CalendarIcon />,
    },
  ];

  return (
    <div className="mx-auto max-w-xl px-3 pt-3 space-y-3">
      {/* Primary Academic Container */}
      <div className="rounded-3xl border border-slate-200/90 bg-white p-3.5 sm:p-4 shadow-xs space-y-3">
        
        {/* Section Header */}
        <div className="flex items-center justify-between pb-1 px-1">
          <div>
            <h2 className="text-xs sm:text-sm font-black tracking-widest text-slate-900 uppercase">
              PATNA UNIVERSITY
            </h2>
            <p className="text-[10px] text-slate-400 font-medium">
              Verified CBCS syllabi, question papers & live gazettes
            </p>
          </div>
          <span className="rounded-full bg-slate-100 text-slate-600 px-2 py-0.5 text-[10px] font-bold border border-slate-200/80">
            Ad-Free
          </span>
        </div>

        {/* 6 Primary Cards (2x3 Grid) */}
        <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
          {cards.map((card) => (
            <Link
              key={card.id}
              href={card.href}
              className="group flex flex-col items-center justify-center rounded-2xl border border-slate-200/80 bg-slate-50/70 p-2.5 sm:p-3 shadow-2xs hover:border-slate-300 hover:bg-white hover:shadow-xs active:scale-97 transition duration-150"
            >
              {/* Icon Container */}
              <div className="flex h-13 w-13 sm:h-15 sm:w-15 items-center justify-center rounded-2xl bg-white border border-slate-200/90 shadow-2xs p-1.5 transition-all duration-200 group-hover:scale-105 group-hover:border-slate-300">
                {card.icon}
              </div>

              {/* Title & Subtitle */}
              <span className="mt-2 text-xs sm:text-sm font-black text-slate-900 tracking-tight truncate max-w-full group-hover:text-blue-600 transition">
                {card.label}
              </span>
              <span className="text-[9px] text-slate-400 font-semibold truncate max-w-full">
                {card.tag}
              </span>
            </Link>
          ))}
        </div>

        {/* Quick Student Tools Row */}
        <div className="grid grid-cols-3 gap-2 pt-1 border-t border-slate-100">
          <Link
            href="/timetable"
            className="flex items-center justify-center gap-1.5 rounded-xl border border-slate-200/80 bg-slate-50/70 p-2 text-center hover:bg-white hover:border-slate-300 transition active:scale-98"
          >
            <Clock className="h-3.5 w-3.5 text-amber-500" />
            <span className="text-[11px] font-bold text-slate-800">Timetable</span>
          </Link>

          <Link
            href="/attendance"
            className="flex items-center justify-center gap-1.5 rounded-xl border border-slate-200/80 bg-slate-50/70 p-2 text-center hover:bg-white hover:border-slate-300 transition active:scale-98"
          >
            <CalendarCheck2 className="h-3.5 w-3.5 text-emerald-600" />
            <span className="text-[11px] font-bold text-slate-800">Attendance</span>
          </Link>

          <Link
            href="/contributors"
            className="flex items-center justify-center gap-1.5 rounded-xl border border-rose-200/80 bg-rose-50/60 p-2 text-center hover:bg-rose-50 hover:border-rose-300 transition active:scale-98"
          >
            <Heart className="h-3.5 w-3.5 text-rose-500 fill-rose-500" />
            <span className="text-[11px] font-bold text-rose-700">Supporters</span>
          </Link>
        </div>

        {/* Community Channels Row */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          <a
            href="https://whatsapp.com/channel/0029VbDWOxc3LdQXxMfsBl2G"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50/80 py-2.5 px-3 text-xs font-bold text-emerald-800 shadow-2xs hover:bg-emerald-100 active:scale-98 transition"
          >
            <WhatsAppIcon className="h-4 w-4 shrink-0" />
            <span>WhatsApp Channel</span>
          </a>

          <a
            href="https://instagram.com/_lazypu"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl border border-pink-200 bg-pink-50/80 py-2.5 px-3 text-xs font-bold text-pink-700 shadow-2xs hover:bg-pink-100 active:scale-98 transition"
          >
            <InstagramIcon className="h-4 w-4 shrink-0" />
            <span>Instagram @_lazypu</span>
          </a>
        </div>

      </div>
    </div>
  );
};
