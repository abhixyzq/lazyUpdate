'use client';

import React, { useState } from 'react';
import { SubpageHeader } from '@/components/SubpageHeader';
import { Calendar as CalendarIcon, Sparkles, Clock, PartyPopper, CheckCircle2 } from 'lucide-react';

export default function CalendarPage() {
  const [activeTab, setActiveTab] = useState<'holidays' | 'academic'>('holidays');

  const holidays = [
    { name: 'Durga Puja & Dussehra Vacation', dates: '08 Oct - 14 Oct 2026', days: '7 Days', type: 'Major Festival' },
    { name: 'Diwali & Chhath Puja Holidays', dates: '30 Oct - 07 Nov 2026', days: '9 Days', type: 'State Holiday' },
    { name: 'Guru Nanak Jayanti & Kartik Purnima', dates: '15 Nov 2026', days: '1 Day', type: 'Gazetted' },
    { name: 'Winter Break / Vacation', dates: '25 Dec - 31 Dec 2026', days: '7 Days', type: 'University Vacation' },
    { name: 'Makar Sankranti', dates: '14 Jan 2027', days: '1 Day', type: 'Restricted' },
    { name: 'Republic Day & Saraswati Puja', dates: '26 Jan 2027', days: '1 Day', type: 'National Holiday' },
    { name: 'Maha Shivratri', dates: '17 Feb 2027', days: '1 Day', type: 'Gazetted' },
    { name: 'Holi Festival Vacation', dates: '12 Mar - 16 Mar 2027', days: '5 Days', type: 'Major Festival' },
    { name: 'Bihar Diwas', dates: '22 Mar 2027', days: '1 Day', type: 'State Celebration' },
    { name: 'Summer Vacation', dates: '20 May - 15 June 2027', days: '27 Days', type: 'Annual Vacation' },
  ];

  const milestones = [
    { event: 'Odd Semester (Sem 1, 3, 5) Classes Start', date: '01 July', status: 'Completed' },
    { event: 'Mid-Semester CIA Test & Assignment Submission', date: 'September', status: 'Active' },
    { event: 'Odd Semester Form Filling (Without Late Fee)', date: '15 Sept - 30 Sept', status: 'Active' },
    { event: 'Odd Semester End-Term Examinations', date: 'October - November', status: 'Upcoming' },
    { event: 'Even Semester (Sem 2, 4, 6) Commencement', date: '02 January', status: 'Upcoming' },
    { event: 'Even Semester Examinations & Degree Award', date: 'May - June', status: 'Upcoming' },
  ];

  return (
    <div className="min-h-screen bg-transparent text-white pb-12">
      <SubpageHeader
        title="Holidays & Calendar"
        badge="SESSION 2024-25"
        subtitle="Official PU Holidays, Vacations & Academic Milestones"
      />

      <main className="mx-auto max-w-xl px-3 pt-4 space-y-4">
        
        {/* Next Big Vacation Banner */}
        <div className="rounded-3xl border border-amber-500/40 bg-gradient-to-r from-[#261502] to-[#1a0f02] p-4 sm:p-5 shadow-xl space-y-2">
          <div className="flex items-center gap-2 text-amber-400">
            <PartyPopper className="h-5 w-5" />
            <span className="text-xs font-black uppercase tracking-wider">Next Upcoming Major Holidays</span>
          </div>
          <h2 className="text-base sm:text-lg font-black text-white">
            Durga Puja, Diwali & Chhath Puja Vacation
          </h2>
          <p className="text-xs text-amber-200/90 leading-relaxed">
            University departments and colleges will remain closed for the grand festival season as per Patna University Gazette notification.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab('holidays')}
            className={`flex-1 rounded-xl py-2 px-3 text-xs font-black transition ${
              activeTab === 'holidays'
                ? 'border border-cyan-400 bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md'
                : 'border border-blue-900/60 bg-[#07162d] text-slate-400 hover:text-white'
            }`}
          >
            PU Holidays List ({holidays.length})
          </button>
          <button
            onClick={() => setActiveTab('academic')}
            className={`flex-1 rounded-xl py-2 px-3 text-xs font-black transition ${
              activeTab === 'academic'
                ? 'border border-cyan-400 bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md'
                : 'border border-blue-900/60 bg-[#07162d] text-slate-400 hover:text-white'
            }`}
          >
            Academic Milestones
          </button>
        </div>

        {/* Content List */}
        {activeTab === 'holidays' ? (
          <div className="space-y-2.5">
            {holidays.map((h, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between rounded-2xl border border-blue-900/70 bg-[#091a36] p-3.5 shadow-md hover:border-cyan-500/50 transition"
              >
                <div>
                  <h3 className="text-xs sm:text-sm font-black text-white">{h.name}</h3>
                  <div className="flex items-center gap-2 mt-1 text-[11px] text-slate-400">
                    <span className="text-cyan-300 font-bold">{h.dates}</span>
                    <span>•</span>
                    <span className="text-slate-400">{h.type}</span>
                  </div>
                </div>

                <span className="rounded-xl bg-blue-950 px-2.5 py-1 text-xs font-black text-amber-300 border border-blue-800 shrink-0">
                  {h.days}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-2.5">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between rounded-2xl border border-blue-900/70 bg-[#091a36] p-3.5 shadow-md hover:border-cyan-500/50 transition"
              >
                <div>
                  <h3 className="text-xs sm:text-sm font-black text-white">{m.event}</h3>
                  <span className="text-[11px] text-cyan-300 font-bold block mt-0.5">{m.date}</span>
                </div>

                <span
                  className={`rounded-xl px-2.5 py-1 text-[10px] font-black border shrink-0 ${
                    m.status === 'Completed'
                      ? 'border-emerald-500/50 bg-emerald-500/20 text-emerald-300'
                      : m.status === 'Active'
                      ? 'border-cyan-500/50 bg-cyan-500/20 text-cyan-300'
                      : 'border-slate-700 bg-slate-800/60 text-slate-400'
                  }`}
                >
                  {m.status}
                </span>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
