'use client';

import React from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  CheckCircle2,
  XCircle,
  MinusCircle,
  Sparkles,
  CheckCheck,
  RotateCcw,
} from 'lucide-react';
import {
  SubjectItem,
  DayAttendanceLog,
  AttendanceStatus,
  SubjectStats,
} from '@/types/attendance';
import {
  formatDateKey,
  formatDisplayDate,
  isToday,
} from '@/utils/attendanceStorage';

interface DailyAttendanceLoggerProps {
  currentDateKey: string;
  onDateChange: (dateKey: string) => void;
  subjects: SubjectItem[];
  dayLog: DayAttendanceLog;
  onMarkStatus: (subjectId: string, status: AttendanceStatus | null) => void;
  onMarkAll: (status: AttendanceStatus) => void;
  onClearDay: () => void;
  subjectStatsMap: Record<string, SubjectStats>;
}

export const DailyAttendanceLogger: React.FC<DailyAttendanceLoggerProps> = ({
  currentDateKey,
  onDateChange,
  subjects,
  dayLog,
  onMarkStatus,
  onMarkAll,
  onClearDay,
  subjectStatsMap,
}) => {
  // Date shift helpers
  const handlePrevDay = () => {
    const [y, m, d] = currentDateKey.split('-').map(Number);
    const prev = new Date(y, m - 1, d - 1);
    onDateChange(formatDateKey(prev));
  };

  const handleNextDay = () => {
    const [y, m, d] = currentDateKey.split('-').map(Number);
    const next = new Date(y, m - 1, d + 1);
    onDateChange(formatDateKey(next));
  };

  const handleGoToday = () => {
    onDateChange(formatDateKey(new Date()));
  };

  const isCurrentDayToday = isToday(currentDateKey);

  // Summary counts for this date
  const markedPresent = Object.values(dayLog).filter((s) => s === 'present').length;
  const markedAbsent = Object.values(dayLog).filter((s) => s === 'absent').length;
  const markedCancelled = Object.values(dayLog).filter((s) => s === 'cancelled').length;
  const totalMarked = markedPresent + markedAbsent + markedCancelled;

  return (
    <div className="space-y-3.5">
      {/* Date Navigator Bar */}
      <div className="rounded-3xl border border-slate-200/90 bg-white p-3 sm:p-4 shadow-xs">
        <div className="flex items-center justify-between gap-2">
          {/* Previous Day Button */}
          <button
            type="button"
            onClick={handlePrevDay}
            className="flex h-9 w-9 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 active:scale-95 transition shadow-2xs"
            title="Previous Day"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Center Date Display & Picker */}
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-1.5">
              <span className="text-xs sm:text-sm font-black text-slate-900">
                {formatDisplayDate(currentDateKey)}
              </span>
              {isCurrentDayToday && (
                <span className="rounded-full bg-emerald-100 px-1.5 py-0.2 text-[9px] font-black text-emerald-800">
                  Today
                </span>
              )}
            </div>

            {/* Date jump controls */}
            <div className="flex items-center gap-2 mt-1">
              {!isCurrentDayToday && (
                <button
                  type="button"
                  onClick={handleGoToday}
                  className="text-[10px] font-bold text-blue-600 hover:underline"
                >
                  Jump to Today
                </button>
              )}

              {/* Native Date Input Picker */}
              <label className="flex items-center gap-1 text-[10px] font-medium text-slate-400 hover:text-slate-700 cursor-pointer">
                <Calendar className="h-3 w-3" />
                <span>Change date</span>
                <input
                  type="date"
                  value={currentDateKey}
                  onChange={(e) => e.target.value && onDateChange(e.target.value)}
                  className="sr-only"
                />
              </label>
            </div>
          </div>

          {/* Next Day Button */}
          <button
            type="button"
            onClick={handleNextDay}
            className="flex h-9 w-9 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 active:scale-95 transition shadow-2xs"
            title="Next Day"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Quick Batch Actions Row */}
        <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between flex-wrap gap-2">
          <div className="text-[11px] font-semibold text-slate-500">
            Status:{' '}
            <span className="font-bold text-slate-800">
              {totalMarked}/{subjects.length} marked
            </span>
            {markedPresent > 0 && (
              <span className="ml-1.5 text-emerald-600 font-bold">({markedPresent} P)</span>
            )}
            {markedAbsent > 0 && (
              <span className="ml-1 text-rose-600 font-bold">({markedAbsent} A)</span>
            )}
          </div>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => onMarkAll('present')}
              className="flex items-center gap-1 rounded-xl bg-emerald-600 px-2.5 py-1 text-[11px] font-black text-white hover:bg-emerald-700 active:scale-95 transition shadow-2xs"
            >
              <CheckCheck className="h-3.5 w-3.5" />
              <span>Mark All Present</span>
            </button>

            {totalMarked > 0 && (
              <button
                type="button"
                onClick={onClearDay}
                className="flex items-center gap-0.5 rounded-xl border border-slate-200 bg-slate-50 px-2 py-1 text-[11px] font-bold text-slate-600 hover:bg-slate-100 active:scale-95 transition"
                title="Clear all markings for this date"
              >
                <RotateCcw className="h-3 w-3" />
                <span>Clear</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Subjects Daily Marking Cards */}
      <div className="space-y-2">
        {subjects.map((subject) => {
          const currentStatus = dayLog[subject.id] as AttendanceStatus | undefined;
          const stats = subjectStatsMap[subject.id];

          return (
            <div
              key={subject.id}
              className={`rounded-2xl border transition-all p-3 shadow-2xs ${
                currentStatus === 'present'
                  ? 'border-emerald-200 bg-emerald-50/40'
                  : currentStatus === 'absent'
                  ? 'border-rose-200 bg-rose-50/40'
                  : currentStatus === 'cancelled'
                  ? 'border-slate-300 bg-slate-100/50'
                  : 'border-slate-200/90 bg-white'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                
                {/* Subject Title & Stats Badge */}
                <div className="flex items-start gap-2.5 min-w-0">
                  <span
                    className="mt-1 h-3.5 w-3.5 shrink-0 rounded-full"
                    style={{ backgroundColor: subject.color || '#3b82f6' }}
                  />
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight truncate">
                        {subject.name}
                      </h4>
                      {subject.code && (
                        <span className="rounded bg-slate-100 px-1.5 py-0.2 text-[9px] font-bold text-slate-500 border border-slate-200">
                          {subject.code}
                        </span>
                      )}
                    </div>

                    {stats && (
                      <div className="flex items-center gap-2 mt-1 text-[10px] text-slate-500 font-medium">
                        <span className="font-bold text-slate-700">
                          {stats.percentage.toFixed(1)}%
                        </span>
                        <span>•</span>
                        <span>
                          {stats.attended}/{stats.held} classes
                        </span>
                        <span>•</span>
                        <span
                          className={`font-bold ${
                            stats.isSafe ? 'text-emerald-600' : 'text-rose-600'
                          }`}
                        >
                          {stats.isSafe
                            ? `Can bunk ${stats.canBunk}`
                            : `Attend ${stats.mustAttend}`}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* 3 State Toggle Buttons (Present, Absent, No Class) */}
                <div className="flex items-center gap-1.5 shrink-0 self-end sm:self-center">
                  
                  {/* Present Button */}
                  <button
                    type="button"
                    onClick={() =>
                      onMarkStatus(subject.id, currentStatus === 'present' ? null : 'present')
                    }
                    className={`flex items-center gap-1 rounded-xl px-2.5 py-1.5 text-xs font-black transition active:scale-95 ${
                      currentStatus === 'present'
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'border border-slate-200 bg-slate-50 text-slate-600 hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700'
                    }`}
                  >
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    <span>Present</span>
                  </button>

                  {/* Absent Button */}
                  <button
                    type="button"
                    onClick={() =>
                      onMarkStatus(subject.id, currentStatus === 'absent' ? null : 'absent')
                    }
                    className={`flex items-center gap-1 rounded-xl px-2.5 py-1.5 text-xs font-black transition active:scale-95 ${
                      currentStatus === 'absent'
                        ? 'bg-rose-600 text-white shadow-xs'
                        : 'border border-slate-200 bg-slate-50 text-slate-600 hover:border-rose-300 hover:bg-rose-50 hover:text-rose-700'
                    }`}
                  >
                    <XCircle className="h-3.5 w-3.5" />
                    <span>Absent</span>
                  </button>

                  {/* No Class / Holiday Button */}
                  <button
                    type="button"
                    onClick={() =>
                      onMarkStatus(subject.id, currentStatus === 'cancelled' ? null : 'cancelled')
                    }
                    className={`flex items-center gap-1 rounded-xl px-2 py-1.5 text-xs font-bold transition active:scale-95 ${
                      currentStatus === 'cancelled'
                        ? 'bg-slate-700 text-white shadow-xs'
                        : 'border border-slate-200 bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-800'
                    }`}
                    title="Class didn't take place / Holiday (Doesn't affect attendance)"
                  >
                    <MinusCircle className="h-3.5 w-3.5" />
                    <span className="hidden sm:inline">No Class</span>
                  </button>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
