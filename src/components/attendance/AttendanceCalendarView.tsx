'use client';

import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Calendar as CalendarIcon,
  Circle,
  ArrowRight,
} from 'lucide-react';
import { DayAttendanceLog, AttendanceProfile } from '@/types/attendance';
import { formatDateKey } from '@/utils/attendanceStorage';

interface AttendanceCalendarViewProps {
  profile: AttendanceProfile;
  selectedDateKey: string;
  onSelectDate: (dateKey: string) => void;
}

export const AttendanceCalendarView: React.FC<AttendanceCalendarViewProps> = ({
  profile,
  selectedDateKey,
  onSelectDate,
}) => {
  const [viewDate, setViewDate] = useState(() => {
    const [y, m] = selectedDateKey.split('-').map(Number);
    return new Date(y, m - 1, 1);
  });

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();

  const handlePrevMonth = () => {
    setViewDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setViewDate(new Date(year, month + 1, 1));
  };

  const monthName = viewDate.toLocaleDateString('en-IN', {
    month: 'long',
    year: 'numeric',
  });

  // Calculate calendar grid days
  const firstDayIndex = new Date(year, month, 1).getDay(); // 0 = Sun
  // Convert to Mon = 0
  const adjustedFirstDay = (firstDayIndex + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const todayKey = formatDateKey(new Date());

  const getDayStatus = (dayNum: number) => {
    const key = `${year}-${String(month + 1).padStart(2, '0')}-${String(dayNum).padStart(2, '0')}`;
    const log = profile.dailyLogs[key];
    if (!log) return null;

    const values = Object.values(log);
    if (values.length === 0) return null;

    const present = values.filter((v) => v === 'present').length;
    const absent = values.filter((v) => v === 'absent').length;
    const cancelled = values.filter((v) => v === 'cancelled').length;

    if (present > 0 && absent === 0) return 'all-present';
    if (present > 0 && absent > 0) return 'partial';
    if (absent > 0 && present === 0) return 'all-absent';
    if (cancelled > 0) return 'cancelled';
    return null;
  };

  return (
    <div className="rounded-3xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-xs space-y-4">
      {/* Month Navigator */}
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <CalendarIcon className="h-4 w-4 text-blue-600" />
          <h3 className="text-sm font-black text-slate-900">{monthName}</h3>
        </div>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={handlePrevMonth}
            className="flex h-8 w-8 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 active:scale-95 transition"
            title="Previous Month"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={handleNextMonth}
            className="flex h-8 w-8 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 active:scale-95 transition"
            title="Next Month"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Weekday headers */}
      <div className="grid grid-cols-7 gap-1 text-center">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
          <span key={day} className="text-[10px] font-black uppercase text-slate-400 py-1">
            {day}
          </span>
        ))}
      </div>

      {/* Calendar days grid */}
      <div className="grid grid-cols-7 gap-1">
        {/* Leading blanks */}
        {Array.from({ length: adjustedFirstDay }).map((_, i) => (
          <div key={`blank-${i}`} className="h-10 rounded-xl" />
        ))}

        {/* Days */}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const dayNum = i + 1;
          const dayKey = `${year}-${String(month + 1).padStart(2, '0')}-${String(dayNum).padStart(2, '0')}`;
          const isSelected = dayKey === selectedDateKey;
          const isCurrentToday = dayKey === todayKey;
          const status = getDayStatus(dayNum);

          return (
            <button
              type="button"
              key={dayNum}
              onClick={() => onSelectDate(dayKey)}
              className={`relative flex h-10 flex-col items-center justify-center rounded-xl transition text-xs font-bold ${
                isSelected
                  ? 'bg-blue-600 text-white shadow-sm ring-2 ring-blue-600/30'
                  : isCurrentToday
                  ? 'bg-blue-50 text-blue-800 border border-blue-200'
                  : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-100'
              }`}
            >
              <span>{dayNum}</span>

              {/* Status indicator dot */}
              {status && (
                <span
                  className={`mt-0.5 h-1.5 w-1.5 rounded-full ${
                    status === 'all-present'
                      ? isSelected ? 'bg-white' : 'bg-emerald-500'
                      : status === 'partial'
                      ? isSelected ? 'bg-amber-200' : 'bg-amber-500'
                      : status === 'all-absent'
                      ? isSelected ? 'bg-rose-200' : 'bg-rose-500'
                      : isSelected ? 'bg-slate-300' : 'bg-slate-400'
                  }`}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Calendar Legend */}
      <div className="pt-2 border-t border-slate-100 flex items-center justify-between flex-wrap gap-2 text-[10px] font-bold text-slate-500">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          <span>Attended All</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-amber-500" />
          <span>Partial</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-rose-500" />
          <span>Missed All</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-slate-400" />
          <span>No Class</span>
        </div>
      </div>
    </div>
  );
};
