'use client';

import React, { useState, useMemo } from 'react';
import { SubpageHeader } from '@/components/SubpageHeader';
import { puHolidays2026, puCalendarMeta, PUHoliday } from '@/data/puHolidays2026';
import { InteractiveMonthCalendar } from '@/components/InteractiveMonthCalendar';
import {
  Calendar as CalendarIcon,
  Search,
  Info,
} from 'lucide-react';

export default function CalendarPage() {
  const [activeTab, setActiveTab] = useState<'holidays' | 'monthView'>('holidays');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMonth, setSelectedMonth] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const months = [
    { id: 'all', label: 'All 2026' },
    { id: 'जनवरी', label: 'Jan' },
    { id: 'फरवरी', label: 'Feb' },
    { id: 'मार्च', label: 'Mar' },
    { id: 'अप्रैल', label: 'Apr' },
    { id: 'मई', label: 'May' },
    { id: 'जून', label: 'Jun' },
    { id: 'अगस्त', label: 'Aug' },
    { id: 'सितम्बर', label: 'Sep' },
    { id: 'अक्टूबर', label: 'Oct' },
    { id: 'नवम्बर', label: 'Nov' },
    { id: 'दिसम्बर', label: 'Dec' },
  ];

  const filteredHolidays = useMemo(() => {
    return puHolidays2026.filter((h) => {
      const matchMonth = selectedMonth === 'all' || h.month === selectedMonth;
      const matchCategory =
        selectedCategory === 'all' ||
        (selectedCategory === 'long' && h.isLongBreak) ||
        h.category === selectedCategory;
      const matchSearch =
        h.nameHindi.toLowerCase().includes(searchQuery.toLowerCase()) ||
        h.nameEnglish.toLowerCase().includes(searchQuery.toLowerCase()) ||
        h.dateStr.toLowerCase().includes(searchQuery.toLowerCase());
      return matchMonth && matchCategory && matchSearch;
    });
  }, [selectedMonth, selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-transparent text-slate-900 pb-28 sm:pb-16">
      <SubpageHeader title="Calendar 2026" />

      <main className="mx-auto max-w-xl px-3 pt-4 space-y-4">
        
        {/* Official Calendar Header Banner */}
        <div className="rounded-3xl border border-slate-200 bg-white p-4 sm:p-5 shadow-xs space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-slate-700">
              <CalendarIcon className="h-5 w-5 text-blue-600" />
              <span className="text-xs font-bold uppercase tracking-wider">
                Patna University Official Gazette
              </span>
            </div>
            <span className="rounded-md bg-blue-50 px-2 py-0.5 text-[10px] font-bold text-blue-700 border border-blue-200">
              Session 2026
            </span>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-black text-slate-900">
              दिन-पत्री – 2026
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Patna University Official Gazetted Holidays & Vacation Schedule
            </p>
          </div>

          {/* Key Stat Badges */}
          <div className="grid grid-cols-3 gap-2 pt-1 text-center">
            <div className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-2.5">
              <div className="text-lg sm:text-xl font-black text-slate-900">
                {puCalendarMeta.totalHolidays}
              </div>
              <span className="text-[10px] font-bold text-slate-500">कुल अवकाश (Days)</span>
            </div>

            <div className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-2.5">
              <div className="text-lg sm:text-xl font-black text-blue-700">
                {puCalendarMeta.excludingSundays}
              </div>
              <span className="text-[10px] font-bold text-slate-500">Working Day Offs</span>
            </div>

            <div className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-2.5">
              <div className="text-lg sm:text-xl font-black text-amber-800">
                {puCalendarMeta.summerVacation.daysCount}
              </div>
              <span className="text-[10px] font-bold text-slate-500">ग्रीष्मावकाश (Days)</span>
            </div>
          </div>
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
            📋 Holiday List ({puHolidays2026.length})
          </button>
          <button
            onClick={() => setActiveTab('monthView')}
            className={`flex-1 rounded-xl py-2 px-3 text-xs font-bold transition ${
              activeTab === 'monthView'
                ? 'border border-slate-900 bg-slate-900 text-white shadow-xs font-black'
                : 'border border-slate-200 bg-white text-slate-600 hover:text-slate-900 hover:border-slate-300'
            }`}
          >
            📅 Monthly Grid
          </button>
        </div>

        {/* 1. Monthly Grid View */}
        {activeTab === 'monthView' && (
          <InteractiveMonthCalendar />
        )}

        {/* 2. Holidays List View */}
        {activeTab === 'holidays' && (
          <div className="space-y-3">
            {/* Search Bar */}
            <div className="relative">
              <Search className="pointer-events-none absolute left-3.5 top-2.5 h-4 w-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search holiday (e.g., होली, Chhath, Durga Puja, Eid)..."
                className="w-full rounded-2xl border border-slate-200 bg-white pl-10 pr-4 py-2 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:border-slate-400 focus:outline-none shadow-xs"
              />
            </div>

            {/* Month Filter Slider */}
            <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              {months.map((m) => (
                <button
                  key={m.id}
                  onClick={() => setSelectedMonth(m.id)}
                  className={`shrink-0 rounded-xl px-3 py-1.5 text-xs font-bold transition ${
                    selectedMonth === m.id
                      ? 'bg-slate-900 text-white shadow-xs font-black'
                      : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>

            {/* Quick Filter: Major Vacations */}
            <div className="flex items-center gap-2 text-xs">
              <button
                onClick={() =>
                  setSelectedCategory(selectedCategory === 'long' ? 'all' : 'long')
                }
                className={`rounded-lg px-2.5 py-1 text-[11px] font-bold border transition ${
                  selectedCategory === 'long'
                    ? 'bg-amber-50 text-amber-900 border-amber-300 shadow-2xs'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                }`}
              >
                ⭐ Major Vacations Only (होली, दुर्गा पूजा, छठ, शीतकालीन)
              </button>
            </div>

            {/* Holidays List */}
            <div className="space-y-2.5">
              {filteredHolidays.length === 0 ? (
                <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center text-xs text-slate-500">
                  No holidays match your search query.
                </div>
              ) : (
                filteredHolidays.map((h) => (
                  <div
                    key={h.id}
                    className={`flex items-center justify-between rounded-2xl border p-3.5 shadow-xs transition hover:border-slate-300 ${
                      h.isLongBreak
                        ? 'border-amber-200/90 bg-amber-50/40'
                        : 'border-slate-200/90 bg-white'
                    }`}
                  >
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <h3 className="text-xs sm:text-sm font-black text-slate-900">
                          {h.nameHindi}
                        </h3>
                        {h.isLongBreak && (
                          <span className="rounded-md bg-amber-100 px-1.5 py-0.2 text-[9px] font-black text-amber-900 border border-amber-300">
                            दीर्घकालीन
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-500 font-medium">
                        {h.nameEnglish}
                      </p>
                      <div className="text-[11px] text-blue-700 font-bold pt-0.5">
                        {h.dateStr}
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span
                        className={`rounded-xl px-2.5 py-1 text-xs font-black border ${
                          h.daysCount > 1
                            ? 'bg-amber-50 text-amber-900 border-amber-300'
                            : 'bg-slate-100 text-slate-700 border-slate-200'
                        }`}
                      >
                        {h.daysCount < 10 ? `0${h.daysCount}` : h.daysCount} दिन
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Official University Footnote */}
            <div className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-3.5 text-xs text-slate-600 space-y-1.5 leading-relaxed">
              <div className="flex items-center gap-1.5 font-bold text-slate-900">
                <Info className="h-4 w-4 text-blue-600 shrink-0" />
                <span>आधिकारिक विश्वविद्यालय टिप्पणी:</span>
              </div>
              <p>• {puCalendarMeta.noteHindi}</p>
              <p>• लाल अंक अंगीभूत महाविद्यालयों, विश्वविद्यालय विभागों एवं शैक्षिक संस्थानों के अवकाश के द्योतक हैं।</p>
              <p>• {puCalendarMeta.summerVacation.titleHindi}: <b>{puCalendarMeta.summerVacation.dates}</b> ({puCalendarMeta.summerVacation.daysCount} दिन)</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
