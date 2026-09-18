'use client';

import React from 'react';
import Link from 'next/link';
import { X, Calendar as CalIcon, ExternalLink, ChevronRight } from 'lucide-react';
import { puHolidays2026, puCalendarMeta } from '@/data/puHolidays2026';

interface HolidaysCalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HolidaysCalendarModal: React.FC<HolidaysCalendarModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  // Highlight key major vacations and holidays
  const highlightHolidays = puHolidays2026.filter((h) => h.isLongBreak || h.daysCount > 1);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 shadow-2xl text-slate-900 max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-1 text-slate-400 hover:text-slate-700"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Title */}
        <div className="flex items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-50 text-amber-700 border border-amber-200">
            <CalIcon className="h-5 w-5" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h3 className="text-base font-black text-slate-900">
                दिन-पत्री – 2026
              </h3>
              <span className="rounded-md bg-blue-50 px-1.5 py-0.2 text-[9px] font-bold text-blue-700 border border-blue-200">
                Official
              </span>
            </div>
            <p className="text-[11px] text-slate-500">Patna University Gazetted Calendar (59 Days)</p>
          </div>
        </div>

        {/* Major Vacations Highlight List */}
        <div className="mt-4 space-y-2 text-xs">
          <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
            Major Festival & Vacation Breaks
          </div>
          {highlightHolidays.map((h) => (
            <div
              key={h.id}
              className="flex items-center justify-between p-3 rounded-2xl border border-slate-200/90 bg-slate-50/80"
            >
              <div>
                <h4 className="font-black text-slate-900">{h.nameHindi}</h4>
                <p className="text-[11px] text-slate-500">{h.nameEnglish}</p>
                <p className="text-[11px] text-blue-700 font-bold mt-0.5">{h.dateStr}</p>
              </div>
              <span className="rounded-xl bg-amber-50 border border-amber-200 px-2.5 py-1 text-[11px] font-black text-amber-900 shrink-0">
                {h.daysCount < 10 ? `0${h.daysCount}` : h.daysCount} दिन
              </span>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-5 space-y-2">
          <Link
            href="/calendar"
            onClick={onClose}
            className="w-full flex items-center justify-center gap-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 py-2.5 text-xs font-black text-white transition shadow-xs"
          >
            <span>Open Real Calendar & 2026 Grid 📅</span>
            <ChevronRight className="h-4 w-4" />
          </Link>
          <button
            onClick={onClose}
            className="w-full rounded-xl border border-slate-200 bg-slate-100 py-2 text-xs font-bold text-slate-700 hover:bg-slate-200 transition"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
