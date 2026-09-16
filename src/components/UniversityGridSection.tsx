'use client';

import React from 'react';
import {
  PYQsIcon,
  SyllabusIcon,
  ResultsIcon,
  NoticeIcon,
  AttendanceIcon,
  CalculatorIcon,
  TimeTableIcon,
  ExtrasIcon,
  CalendarIcon,
} from './ApnaIcons';
import { Send, MessageCircle } from 'lucide-react';

export type ApnaActionType =
  | 'pyqs'
  | 'syllabus'
  | 'results'
  | 'notice'
  | 'attendance'
  | 'sgpa'
  | 'timetable'
  | 'extras'
  | 'calendar';

interface UniversityGridSectionProps {
  universityTitle?: string;
  onSelectAction: (action: ApnaActionType) => void;
  onTelegram: () => void;
  onWhatsApp: () => void;
}

export const UniversityGridSection: React.FC<UniversityGridSectionProps> = ({
  universityTitle = 'PATNA UNIVERSITY',
  onSelectAction,
  onTelegram,
  onWhatsApp,
}) => {
  const cards = [
    { id: 'pyqs' as ApnaActionType, label: 'PYQs', icon: <PYQsIcon /> },
    { id: 'syllabus' as ApnaActionType, label: 'Syllabus', icon: <SyllabusIcon /> },
    { id: 'results' as ApnaActionType, label: 'Results', icon: <ResultsIcon /> },
    { id: 'notice' as ApnaActionType, label: 'PU Notice', icon: <NoticeIcon /> },
    { id: 'attendance' as ApnaActionType, label: 'Attendance', icon: <AttendanceIcon /> },
    { id: 'sgpa' as ApnaActionType, label: 'SGPA CalC', icon: <CalculatorIcon /> },
    { id: 'timetable' as ApnaActionType, label: 'Time Table', icon: <TimeTableIcon /> },
    { id: 'extras' as ApnaActionType, label: 'Extras', icon: <ExtrasIcon /> },
    { id: 'calendar' as ApnaActionType, label: 'Calendar', icon: <CalendarIcon /> },
  ];

  return (
    <div className="mx-auto max-w-xl px-3 pt-3">
      <div className="rounded-3xl border border-blue-900/80 bg-[#091a36] p-3 sm:p-4 shadow-2xl">
        
        {/* Section Header */}
        <div className="text-center pt-1 pb-3">
          <h2 className="text-sm sm:text-base font-black tracking-widest text-[#00d2ff] uppercase">
            {universityTitle}
          </h2>
        </div>

        {/* The Exact 3x3 Card Grid */}
        <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
          {cards.map((card) => (
            <button
              key={card.id}
              onClick={() => onSelectAction(card.id)}
              className="group flex flex-col items-center justify-center rounded-2xl border border-blue-800/60 bg-[#12264c] p-2.5 sm:p-3 shadow-md hover:border-cyan-400 hover:bg-[#162e5c] active:scale-95 transition duration-150"
            >
              {/* Polished White Squircle with Illustrated Icon */}
              <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-gradient-to-b from-white to-slate-50 border border-slate-200/90 shadow-md p-1.5 transition-all duration-200 group-hover:scale-105 group-hover:shadow-cyan-400/20 group-hover:border-cyan-400/50">
                {card.icon}
              </div>

              {/* White bold Label below */}
              <span className="mt-2 text-xs sm:text-sm font-black text-white tracking-tight truncate max-w-full">
                {card.label}
              </span>
            </button>
          ))}
        </div>

        {/* Dual Social Pill Action Buttons */}
        <div className="grid grid-cols-2 gap-2 pt-3 mt-1">
          {/* Official Telegram Logo */}
          <button
            onClick={onTelegram}
            className="flex items-center justify-center gap-2 rounded-xl border border-blue-500/50 bg-[#0c234a] py-2.5 px-3 text-xs font-bold text-white shadow-xs hover:bg-[#112f62] active:scale-98 transition"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-[#29b6f6] shrink-0">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
            </svg>
            <span>Telegram Group</span>
          </button>

          {/* Official WhatsApp Logo */}
          <button
            onClick={onWhatsApp}
            className="flex items-center justify-center gap-2 rounded-xl border border-emerald-500/50 bg-[#0a3324] py-2.5 px-3 text-xs font-bold text-[#25d366] shadow-xs hover:bg-[#0d422f] active:scale-98 transition"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-[#25d366] shrink-0">
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.41a8.165 8.165 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.19-.09-1.11-.55-1.28-.61-.17-.06-.3-.09-.43.09-.12.19-.49.61-.6.74-.11.12-.23.14-.42.05-.19-.09-.8-.29-1.53-.94-.57-.5-.95-1.12-1.06-1.31-.11-.19-.01-.29.08-.38.08-.09.19-.23.28-.35.09-.12.12-.19.18-.33.06-.14.03-.26-.01-.35-.05-.09-.43-1.04-.59-1.43-.16-.37-.32-.32-.43-.33h-.37c-.12 0-.32.05-.49.23-.17.19-.64.63-.64 1.53s.66 1.78.75 1.9c.09.12 1.29 1.97 3.12 2.76.44.19.78.3 1.05.38.44.14.84.12 1.15.07.35-.05 1.11-.45 1.27-.89.16-.44.16-.82.11-.89-.05-.08-.18-.12-.37-.22z"/>
            </svg>
            <span>WhatsApp Channel</span>
          </button>
        </div>

      </div>
    </div>
  );
};
