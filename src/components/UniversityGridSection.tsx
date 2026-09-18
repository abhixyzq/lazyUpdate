'use client';

import React from 'react';
import {
  PYQsIcon,
  SyllabusIcon,
  ResultsIcon,
  NoticeIcon,
  CalculatorIcon,
  TimeTableIcon,
  CalendarIcon,
} from './ApnaIcons';
import { InstagramIcon, WhatsAppIcon } from './OfficialBrandIcons';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export type ApnaActionType =
  | 'pyqs'
  | 'syllabus'
  | 'results'
  | 'notice'
  | 'sgpa'
  | 'timetable'
  | 'calendar';

interface UniversityGridSectionProps {
  universityTitle?: string;
  onSelectAction?: (action: ApnaActionType) => void;
  onInstagram?: () => void;
  onWhatsApp?: () => void;
}

export const UniversityGridSection: React.FC<UniversityGridSectionProps> = ({
  universityTitle = 'PATNA UNIVERSITY',
  onSelectAction,
}) => {
  const cards = [
    { id: 'pyqs' as ApnaActionType, label: 'PYQs', href: '/pyqs', icon: <PYQsIcon /> },
    { id: 'syllabus' as ApnaActionType, label: 'Syllabus', href: '/syllabus', icon: <SyllabusIcon /> },
    { id: 'results' as ApnaActionType, label: 'Results', href: '/results', icon: <ResultsIcon /> },
    { id: 'notice' as ApnaActionType, label: 'PU Notice', href: '/notices', icon: <NoticeIcon /> },
    { id: 'sgpa' as ApnaActionType, label: 'SGPA CalC', href: '/sgpa', icon: <CalculatorIcon /> },
    { id: 'timetable' as ApnaActionType, label: 'Time Table', href: '/timetable', icon: <TimeTableIcon /> },
  ];

  return (
    <div className="mx-auto max-w-xl px-3 pt-3">
      <div className="rounded-3xl border border-slate-200/90 bg-white p-3.5 sm:p-4 shadow-sm">
        
        {/* Section Header */}
        <div className="text-center pt-1 pb-3">
          <h2 className="text-sm sm:text-base font-black tracking-widest text-slate-900 uppercase">
            {universityTitle}
          </h2>
        </div>

        {/* 6 Primary Cards (2x3 Grid) */}
        <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
          {cards.map((card) => (
            <Link
              key={card.id}
              href={card.href}
              onClick={() => onSelectAction?.(card.id)}
              className="group flex flex-col items-center justify-center rounded-2xl border border-slate-200/80 bg-slate-50/70 p-2.5 sm:p-3 shadow-xs hover:border-blue-400 hover:bg-white hover:shadow-md active:scale-95 transition duration-150"
            >
              {/* Polished White Squircle with Illustrated Icon */}
              <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-white border border-slate-200 shadow-xs p-1.5 transition-all duration-200 group-hover:scale-105 group-hover:shadow-blue-500/10 group-hover:border-blue-300">
                {card.icon}
              </div>

              {/* Bold Label below */}
              <span className="mt-2 text-xs sm:text-sm font-black text-slate-800 tracking-tight truncate max-w-full group-hover:text-blue-600">
                {card.label}
              </span>
            </Link>
          ))}
        </div>

        {/* Wide Academic Calendar Banner Card */}
        <div className="mt-2.5 sm:mt-3">
          <Link
            href="/calendar"
            onClick={() => onSelectAction?.('calendar')}
            className="group flex items-center justify-between rounded-2xl border border-slate-200/80 bg-slate-50/70 p-3 sm:p-3.5 shadow-xs hover:border-blue-400 hover:bg-white hover:shadow-md active:scale-95 transition duration-150"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white border border-slate-200 shadow-xs p-1 transition-all duration-200 group-hover:scale-105 group-hover:border-blue-300">
                <CalendarIcon />
              </div>
              <div className="text-left">
                <div className="text-xs sm:text-sm font-black text-slate-900 group-hover:text-blue-600 transition">
                  Academic Calendar & Holidays
                </div>
                <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium">
                  Official PU 2026 exam schedule, events & holiday list
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1 rounded-full bg-blue-50 border border-blue-200/60 px-2.5 py-1 text-[10px] font-bold text-blue-700 shrink-0">
              <span className="hidden sm:inline">View</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </div>
          </Link>
        </div>

        {/* Dual Social Pill Action Buttons */}
        <div className="grid grid-cols-2 gap-2 pt-3 mt-1">
          {/* Authentic Official Instagram Logo */}
          <a
            href="https://instagram.com/_lazypu"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl border border-pink-200 bg-pink-50/70 py-2.5 px-3 text-xs font-bold text-pink-700 shadow-xs hover:bg-pink-100 active:scale-98 transition"
          >
            <InstagramIcon className="h-4 w-4 shrink-0" />
            <span>Instagram (@_lazypu)</span>
          </a>

          {/* Authentic Official WhatsApp Logo */}
          <a
            href="https://whatsapp.com/channel/0029VbDWOxc3LdQXxMfsBl2G"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 py-2.5 px-3 text-xs font-bold text-emerald-800 shadow-xs hover:bg-emerald-100 active:scale-98 transition"
          >
            <WhatsAppIcon className="h-4 w-4 shrink-0" />
            <span>WhatsApp Channel</span>
          </a>
        </div>

      </div>
    </div>
  );
};
