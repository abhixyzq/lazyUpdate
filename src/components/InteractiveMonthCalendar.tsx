'use client';

import React, { useState, useMemo } from 'react';
import { puHolidays2026, puCalendarMeta, PUHoliday } from '@/data/puHolidays2026';
import {
  ChevronLeft,
  ChevronRight,
  Calendar as CalendarIcon,
  PartyPopper,
  Sparkles,
  Info,
  Clock,
  CheckCircle2,
} from 'lucide-react';

interface InteractiveMonthCalendarProps {
  initialYear?: number;
  initialMonth?: number; // 1 to 12
  onSelectDate?: (date: { year: number; month: number; day: number; holidays: PUHoliday[] }) => void;
}

const MONTH_NAMES = [
  { num: 1, en: 'January', hi: 'जनवरी' },
  { num: 2, en: 'February', hi: 'फरवरी' },
  { num: 3, en: 'March', hi: 'मार्च' },
  { num: 4, en: 'April', hi: 'अप्रैल' },
  { num: 5, en: 'May', hi: 'मई' },
  { num: 6, en: 'June', hi: 'जून' },
  { num: 7, en: 'July', hi: 'जुलाई' },
  { num: 8, en: 'August', hi: 'अगस्त' },
  { num: 9, en: 'September', hi: 'सितम्बर' },
  { num: 10, en: 'October', hi: 'अक्टूबर' },
  { num: 11, en: 'November', hi: 'नवम्बर' },
  { num: 12, en: 'December', hi: 'दिसम्बर' },
];

const WEEKDAY_NAMES = [
  { short: 'Sun', en: 'Sunday', hi: 'रवि', isWeekend: true },
  { short: 'Mon', en: 'Monday', hi: 'सोम', isWeekend: false },
  { short: 'Tue', en: 'Tuesday', hi: 'मंगल', isWeekend: false },
  { short: 'Wed', en: 'Wednesday', hi: 'बुध', isWeekend: false },
  { short: 'Thu', en: 'Thursday', hi: 'गुरु', isWeekend: false },
  { short: 'Fri', en: 'Friday', hi: 'शुक्र', isWeekend: false },
  { short: 'Sat', en: 'Saturday', hi: 'शनि', isWeekend: false },
];

export const InteractiveMonthCalendar: React.FC<InteractiveMonthCalendarProps> = ({
  initialYear = 2026,
  initialMonth = new Date().getFullYear() === 2026 ? new Date().getMonth() + 1 : 9, // default to Sept 2026
  onSelectDate,
}) => {
  const [currentYear, setCurrentYear] = useState<number>(initialYear);
  const [currentMonth, setCurrentMonth] = useState<number>(initialMonth);

  // Today's real local date
  const today = new Date();
  const isCurrentYear = today.getFullYear() === currentYear;
  const isCurrentMonth = isCurrentYear && today.getMonth() + 1 === currentMonth;
  const todayDateNum = isCurrentMonth ? today.getDate() : null;

  // Selected Day in the active month (defaults to today if in current month, or 1st of month)
  const [selectedDay, setSelectedDay] = useState<number>(todayDateNum || 1);

  // Helper to map holidays to day numbers
  const getDaysForHoliday = (h: PUHoliday, month: number): number[] => {
    if (h.monthNum !== month) {
      // Special cross-month vacation: Summer vacation (May 23 - June 21)
      if (h.dateStr.includes('मई') && h.dateStr.includes('जून') && month === 6) {
        return Array.from({ length: 21 }, (_, i) => i + 1);
      }
      return [];
    }

    const days: number[] = [];
    const rangeMatch = h.dateStr.match(/(\d+)\s*-\s*(\d+)/);
    if (rangeMatch) {
      const start = parseInt(rangeMatch[1], 10);
      const end = parseInt(rangeMatch[2], 10);
      for (let d = start; d <= end; d++) days.push(d);
    } else {
      const singleMatch = h.dateStr.match(/(\d+)/);
      if (singleMatch) {
        days.push(parseInt(singleMatch[1], 10));
      }
    }
    return days;
  };

  // Build a fast lookup map for the current month: dayNum -> PUHoliday[]
  const holidaysMap = useMemo(() => {
    const map = new Map<number, PUHoliday[]>();
    puHolidays2026.forEach((h) => {
      const days = getDaysForHoliday(h, currentMonth);
      days.forEach((d) => {
        const existing = map.get(d) || [];
        existing.push(h);
        map.set(d, existing);
      });
    });

    // Also include Summer Vacation for faculty if in May 23-31 or June 1-21
    if (currentMonth === 5) {
      for (let d = 23; d <= 31; d++) {
        const existing = map.get(d) || [];
        if (!existing.some((x) => x.nameHindi.includes('ग्रीष्मावकाश'))) {
          existing.push({
            id: 9901,
            nameHindi: 'ग्रीष्मावकाश (शिक्षक अवकाश)',
            nameEnglish: 'Summer Vacation (Faculty)',
            dateStr: '23 मई - 21 जून 2026',
            daysCount: 30,
            month: 'मई',
            monthNum: 5,
            category: 'Vacation',
            isLongBreak: true,
          });
          map.set(d, existing);
        }
      }
    } else if (currentMonth === 6) {
      for (let d = 1; d <= 21; d++) {
        const existing = map.get(d) || [];
        if (!existing.some((x) => x.nameHindi.includes('ग्रीष्मावकाश'))) {
          existing.push({
            id: 9902,
            nameHindi: 'ग्रीष्मावकाश (शिक्षक अवकाश)',
            nameEnglish: 'Summer Vacation (Faculty)',
            dateStr: '23 मई - 21 जून 2026',
            daysCount: 30,
            month: 'जून',
            monthNum: 6,
            category: 'Vacation',
            isLongBreak: true,
          });
          map.set(d, existing);
        }
      }
    }

    return map;
  }, [currentMonth]);

  // Calendar Grid Calculations
  const firstDayOfWeek = new Date(currentYear, currentMonth - 1, 1).getDay(); // 0 (Sun) to 6 (Sat)
  const totalDaysInMonth = new Date(currentYear, currentMonth, 0).getDate(); // 28, 29, 30, or 31

  // Handle month changes
  const handlePrevMonth = () => {
    if (currentMonth === 1) {
      setCurrentYear((y) => y - 1);
      setCurrentMonth(12);
    } else {
      setCurrentMonth((m) => m - 1);
    }
    setSelectedDay(1);
  };

  const handleNextMonth = () => {
    if (currentMonth === 12) {
      setCurrentYear((y) => y + 1);
      setCurrentMonth(1);
    } else {
      setCurrentMonth((m) => m + 1);
    }
    setSelectedDay(1);
  };

  const handleJumpToToday = () => {
    const now = new Date();
    setCurrentYear(now.getFullYear());
    setCurrentMonth(now.getMonth() + 1);
    setSelectedDay(now.getDate());
  };

  const handleSelectDay = (day: number) => {
    setSelectedDay(day);
    const dayHolidays = holidaysMap.get(day) || [];
    onSelectDate?.({
      year: currentYear,
      month: currentMonth,
      day,
      holidays: dayHolidays,
    });
  };

  // Details of currently selected day
  const selectedDateObj = new Date(currentYear, currentMonth - 1, selectedDay);
  const selectedDayOfWeek = selectedDateObj.getDay();
  const isSelectedSunday = selectedDayOfWeek === 0;
  const selectedHolidays = holidaysMap.get(selectedDay) || [];
  const isSelectedHoliday = selectedHolidays.length > 0;

  // Month metadata
  const currentMonthInfo = MONTH_NAMES.find((m) => m.num === currentMonth) || MONTH_NAMES[0];
  const monthHolidaysCount = Array.from(holidaysMap.keys()).length;

  return (
    <div className="rounded-3xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-xs space-y-4">
      
      {/* 1. Header: Month Navigation & Quick Jump */}
      <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-1.5">
              <CalendarIcon className="h-4 w-4 text-blue-600" />
              <span>{currentMonthInfo.en} {currentYear}</span>
            </h3>
            <span className="text-xs font-bold text-slate-400">
              ({currentMonthInfo.hi})
            </span>
          </div>
          <p className="text-[11px] text-slate-500 font-medium">
            {monthHolidaysCount > 0 ? `${monthHolidaysCount} days off in this month` : 'Regular Academic Month'}
          </p>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={handleJumpToToday}
            className="hidden sm:inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-bold text-slate-700 hover:bg-slate-100 active:scale-95 transition"
            title="Jump to Today"
          >
            Today
          </button>
          
          <button
            onClick={handlePrevMonth}
            aria-label="Previous month"
            className="flex h-8 w-8 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 active:scale-95 transition shadow-2xs"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          
          <button
            onClick={handleNextMonth}
            aria-label="Next month"
            className="flex h-8 w-8 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 active:scale-95 transition shadow-2xs"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* 2. Month Selector Pills (Quick Jump) */}
      <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
        {MONTH_NAMES.map((m) => {
          const isSelected = m.num === currentMonth;
          return (
            <button
              key={m.num}
              onClick={() => {
                setCurrentMonth(m.num);
                setSelectedDay(1);
              }}
              className={`shrink-0 rounded-xl px-2.5 py-1 text-[11px] font-bold transition-all ${
                isSelected
                  ? 'bg-blue-600 text-white shadow-xs font-black'
                  : 'bg-slate-100/80 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900'
              }`}
            >
              {m.en.substring(0, 3)}
            </button>
          );
        })}
      </div>

      {/* 3. The 7-Column Real Calendar Grid */}
      <div className="space-y-1.5">
        {/* Weekday Header Row */}
        <div className="grid grid-cols-7 gap-1 text-center">
          {WEEKDAY_NAMES.map((w, idx) => (
            <div
              key={idx}
              className={`py-1 text-[11px] font-black uppercase tracking-wider ${
                w.isWeekend ? 'text-rose-600' : 'text-slate-400'
              }`}
            >
              {w.short}
            </div>
          ))}
        </div>

        {/* Date Matrix Grid */}
        <div className="grid grid-cols-7 gap-1">
          {/* Empty cells before Day 1 */}
          {Array.from({ length: firstDayOfWeek }).map((_, i) => (
            <div key={`empty-${i}`} className="h-10 sm:h-12 rounded-xl bg-transparent" />
          ))}

          {/* Actual Month Days */}
          {Array.from({ length: totalDaysInMonth }).map((_, i) => {
            const dayNum = i + 1;
            const dateObj = new Date(currentYear, currentMonth - 1, dayNum);
            const isSunday = dateObj.getDay() === 0;
            const dayHolidays = holidaysMap.get(dayNum) || [];
            const isHoliday = dayHolidays.length > 0;
            const isToday = isCurrentMonth && todayDateNum === dayNum;
            const isSelected = selectedDay === dayNum;

            return (
              <button
                key={dayNum}
                onClick={() => handleSelectDay(dayNum)}
                className={`relative flex flex-col items-center justify-center h-10 sm:h-12 rounded-2xl transition-all duration-150 active:scale-95 text-xs font-bold ${
                  isSelected
                    ? 'bg-slate-900 text-white shadow-md z-10 ring-2 ring-slate-900'
                    : isToday
                    ? 'bg-blue-50 border border-blue-400 text-blue-700 font-black'
                    : isHoliday
                    ? 'bg-amber-50/90 border border-amber-200/90 text-amber-950 hover:bg-amber-100'
                    : isSunday
                    ? 'bg-rose-50/60 border border-rose-100 text-rose-700 hover:bg-rose-100/60'
                    : 'bg-slate-50/70 border border-slate-200/60 text-slate-800 hover:bg-white hover:border-slate-300'
                }`}
              >
                <span>{dayNum}</span>

                {/* Event indicators below date */}
                <div className="flex items-center gap-0.5 mt-0.5">
                  {isHoliday && (
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        isSelected ? 'bg-amber-300' : 'bg-amber-500'
                      }`}
                      title={dayHolidays.map((h) => h.nameHindi).join(', ')}
                    />
                  )}
                  {isToday && !isSelected && (
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 4. Legend Key */}
      <div className="flex items-center justify-between flex-wrap gap-2 pt-1 px-1 text-[10px] font-bold text-slate-500 border-t border-slate-100">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400 border border-amber-500" />
          <span>Holiday / Vacation</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400 border border-rose-500" />
          <span>Sunday Off</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />
          <span>Today</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-slate-200 border border-slate-300" />
          <span>Academic Day</span>
        </div>
      </div>

      {/* 5. Selected Day Detail Inspector Card */}
      <div className="rounded-2xl border border-slate-200/90 bg-slate-50/80 p-3.5 space-y-2">
        <div className="flex items-center justify-between">
          <div className="text-xs font-black text-slate-900 flex items-center gap-1.5">
            <span>
              {WEEKDAY_NAMES[selectedDayOfWeek].en}, {selectedDay} {currentMonthInfo.en} {currentYear}
            </span>
            <span className="text-[10px] font-semibold text-slate-400">
              ({WEEKDAY_NAMES[selectedDayOfWeek].hi})
            </span>
          </div>

          <div>
            {isSelectedHoliday ? (
              <span className="rounded-md bg-amber-100 text-amber-900 px-2 py-0.5 text-[10px] font-black border border-amber-300">
                Official Holiday
              </span>
            ) : isSelectedSunday ? (
              <span className="rounded-md bg-rose-100 text-rose-800 px-2 py-0.5 text-[10px] font-black border border-rose-300">
                Weekly Holiday
              </span>
            ) : (
              <span className="rounded-md bg-emerald-50 text-emerald-800 px-2 py-0.5 text-[10px] font-black border border-emerald-200">
                Academic Day
              </span>
            )}
          </div>
        </div>

        {/* Status Content */}
        {isSelectedHoliday ? (
          <div className="space-y-2 pt-1">
            {selectedHolidays.map((h, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 bg-white rounded-xl p-2.5 border border-amber-200 shadow-2xs"
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-800">
                  <PartyPopper className="h-3.5 w-3.5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-black text-slate-900">
                    {h.nameHindi}
                  </div>
                  <div className="text-[11px] font-medium text-slate-600">
                    {h.nameEnglish}
                  </div>
                  <div className="flex items-center gap-2 mt-1 text-[10px] font-bold text-amber-900">
                    <span>{h.dateStr}</span>
                    <span>•</span>
                    <span>{h.category} Category</span>
                    <span>•</span>
                    <span>College & Offices Closed</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : isSelectedSunday ? (
          <p className="text-xs text-slate-600 leading-relaxed pt-0.5">
            साप्ताहिक अवकाश (Sunday Off) — Regular weekly holiday for all Patna University departments, constituent colleges, and administrative offices.
          </p>
        ) : (
          <div className="flex items-center gap-2 pt-0.5 text-xs text-slate-700">
            <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
            <span>
              Regular Academic & Teaching Day — Classes, laboratory practicals, and university office hours operational.
            </span>
          </div>
        )}
      </div>

    </div>
  );
};
