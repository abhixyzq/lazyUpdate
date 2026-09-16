'use client';

import React from 'react';
import { X, Calendar as CalIcon, PartyPopper } from 'lucide-react';

interface HolidaysCalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HolidaysCalendarModal: React.FC<HolidaysCalendarModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const holidays = [
    { occasion: 'Durga Puja / Navratri Break', dates: '01 Oct - 10 Oct 2026', days: '10 Days Vacation' },
    { occasion: 'Diwali & Chhath Puja Holidays', dates: '28 Oct - 07 Nov 2026', days: '11 Days Vacation' },
    { occasion: 'Guru Nanak Jayanti', dates: '15 Nov 2026', days: '1 Day' },
    { occasion: 'Winter Vacation', dates: '24 Dec 2026 - 02 Jan 2027', days: '10 Days' },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-3xl border border-blue-900 bg-[#0a1b38] p-5 sm:p-6 shadow-2xl text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-1 text-slate-400 hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Title */}
        <div className="flex items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-500/20 text-orange-400 border border-orange-500/40">
            <CalIcon className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-base font-black text-white">University Holidays List</h3>
            <p className="text-[11px] text-cyan-300">Official Patna University & Bihar Govt List</p>
          </div>
        </div>

        {/* Holidays List */}
        <div className="mt-4 space-y-2.5 text-xs">
          {holidays.map((h, i) => (
            <div
              key={i}
              className="flex items-center justify-between p-3 rounded-2xl border border-blue-900/60 bg-[#11264c]"
            >
              <div>
                <h4 className="font-black text-white">{h.occasion}</h4>
                <p className="text-[11px] text-slate-300 mt-0.5">{h.dates}</p>
              </div>
              <span className="rounded-xl bg-orange-500/20 border border-orange-500/40 px-2.5 py-1 text-[10px] font-black text-orange-300">
                {h.days}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-5">
          <button
            onClick={onClose}
            className="w-full rounded-xl bg-[#00f0aa] py-2.5 text-xs font-black text-[#052b22] hover:bg-[#00d898]"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
