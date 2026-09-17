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
    <div className="min-h-screen bg-transparent text-slate-900 pb-12">
      <SubpageHeader title="Calendar" />

      <main className="mx-auto max-w-xl px-3 pt-4 space-y-4">
        
        {/* Next Big Vacation Banner */}
        <div className="rounded-3xl border border-amber-200 bg-amber-50/80 p-4 sm:p-5 shadow-xs space-y-2">
          <div className="flex items-center gap-2 text-amber-700">
            <PartyPopper className="h-5 w-5" />
            <span className="text-xs font-black uppercase tracking-wider">Next Upcoming Major Holidays</span>
          </div>
          <h2 className="text-base sm:text-lg font-black text-slate-900">
            Durga Puja, Diwali & Chhath Puja Vacation
          </h2>
          <p className="text-xs text-amber-950/80 leading-relaxed">
            University departments and colleges will remain closed for the grand festival season as per Patna University Gazette notification.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab('holidays')}
            className={`flex-1 rounded-xl py-2 px-3 text-xs font-bold transition ${
              activeTab === 'holidays'
                ? 'border border-slate-900 bg-slate-900 text-white shadow-xs font-black'
                : 'border border-slate-200 bg-white text-slate-600 hover:text-slate-900 hover:border-slate-300'
            }`}
          >
            PU Holidays List ({holidays.length})
          </button>
          <button
            onClick={() => setActiveTab('academic')}
            className={`flex-1 rounded-xl py-2 px-3 text-xs font-bold transition ${
              activeTab === 'academic'
                ? 'border border-slate-900 bg-slate-900 text-white shadow-xs font-black'
                : 'border border-slate-200 bg-white text-slate-600 hover:text-slate-900 hover:border-slate-300'
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
                className="flex items-center justify-between rounded-2xl border border-slate-200/90 bg-white p-3.5 shadow-xs hover:border-slate-300 transition"
              >
                <div>
                  <h3 className="text-xs sm:text-sm font-black text-slate-900">{h.name}</h3>
                  <div className="flex items-center gap-2 mt-1 text-[11px] text-slate-500">
                    <span className="text-blue-700 font-bold">{h.dates}</span>
                    <span>•</span>
                    <span>{h.type}</span>
                  </div>
                </div>

                <span className="rounded-xl bg-amber-50 px-2.5 py-1 text-xs font-bold text-amber-800 border border-amber-200 shrink-0">
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
                className="flex items-center justify-between rounded-2xl border border-slate-200/90 bg-white p-3.5 shadow-xs hover:border-slate-300 transition"
              >
                <div>
                  <h3 className="text-xs sm:text-sm font-black text-slate-900">{m.event}</h3>
                  <span className="text-[11px] text-blue-700 font-bold block mt-0.5">{m.date}</span>
                </div>

                <span
                  className={`rounded-xl px-2.5 py-1 text-[10px] font-bold border shrink-0 ${
                    m.status === 'Completed'
                      ? 'border-emerald-200 bg-emerald-50 text-emerald-800'
                      : m.status === 'Active'
                      ? 'border-blue-200 bg-blue-50 text-blue-800'
                      : 'border-slate-200 bg-slate-100 text-slate-600'
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
