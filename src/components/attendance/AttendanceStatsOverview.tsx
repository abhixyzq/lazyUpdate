'use client';

import React from 'react';
import {
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  Award,
  TrendingUp,
  Info,
} from 'lucide-react';
import { OverallAttendanceStats } from '@/types/attendance';

interface AttendanceStatsOverviewProps {
  stats: OverallAttendanceStats;
  targetPercentage?: number;
  courseName: string;
  semester: number;
}

export const AttendanceStatsOverview: React.FC<AttendanceStatsOverviewProps> = ({
  stats,
  targetPercentage = 75,
  courseName,
  semester,
}) => {
  const { totalAttended, totalHeld, percentage, isSafe, canBunk, mustAttend } = stats;
  const missedClasses = Math.max(0, totalHeld - totalAttended);

  // SVG Radial Progress computation
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = totalHeld > 0
    ? circumference - (Math.min(100, percentage) / 100) * circumference
    : circumference;

  return (
    <div className="rounded-3xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-xs space-y-4">
      {/* Course & Semester Header */}
      <div className="flex items-center justify-between pb-2.5 border-b border-slate-100">
        <div>
          <h2 className="text-sm sm:text-base font-black text-slate-900 leading-tight">
            {courseName}
          </h2>
          <span className="text-[11px] font-bold text-slate-500">
            Semester {semester} • Target: {targetPercentage}%
          </span>
        </div>

        <span
          className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-black border ${
            isSafe
              ? 'border-emerald-200 bg-emerald-50 text-emerald-800'
              : 'border-rose-200 bg-rose-50 text-rose-800'
          }`}
        >
          {isSafe ? (
            <>
              <CheckCircle2 className="h-3.5 w-3.5" />
              <span>Exam Eligible</span>
            </>
          ) : (
            <>
              <AlertTriangle className="h-3.5 w-3.5" />
              <span>Shortage Alert</span>
            </>
          )}
        </span>
      </div>

      {/* Main Gauge + Metrics Row */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Circular Gauge */}
        <div className="relative flex items-center justify-center shrink-0">
          <svg className="h-28 w-28 -rotate-90 transform" viewBox="0 0 100 100">
            {/* Background ring */}
            <circle
              cx="50"
              cy="50"
              r={radius}
              className="text-slate-100"
              strokeWidth="9"
              stroke="currentColor"
              fill="transparent"
            />
            {/* Progress ring */}
            <circle
              cx="50"
              cy="50"
              r={radius}
              className={`transition-all duration-700 ease-out ${
                isSafe ? 'text-emerald-500' : 'text-rose-500'
              }`}
              strokeWidth="9"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
            />
          </svg>

          {/* Centered Percentage Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <span className="text-2xl sm:text-3xl font-black text-slate-900 leading-none tracking-tight">
              {percentage.toFixed(1)}%
            </span>
            <span className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider mt-1">
              Overall
            </span>
          </div>
        </div>

        {/* Quick Metric Tiles */}
        <div className="grid grid-cols-3 gap-2 w-full">
          <div className="rounded-2xl border border-emerald-100 bg-emerald-50/50 p-2.5 text-center">
            <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider block">
              Attended
            </span>
            <span className="text-lg sm:text-xl font-black text-emerald-700">
              {totalAttended}
            </span>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-2.5 text-center">
            <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block">
              Total Held
            </span>
            <span className="text-lg sm:text-xl font-black text-slate-800">
              {totalHeld}
            </span>
          </div>

          <div className="rounded-2xl border border-rose-100 bg-rose-50/50 p-2.5 text-center">
            <span className="text-[10px] font-bold text-rose-800 uppercase tracking-wider block">
              Missed
            </span>
            <span className="text-lg sm:text-xl font-black text-rose-700">
              {missedClasses}
            </span>
          </div>
        </div>

      </div>

      {/* Smart Bunk / Attend Recommendation Banner */}
      <div
        className={`rounded-2xl border p-3.5 text-xs text-left leading-relaxed ${
          isSafe
            ? 'border-emerald-200 bg-emerald-50/80 text-emerald-950'
            : 'border-amber-200 bg-amber-50/80 text-amber-950'
        }`}
      >
        <div className="flex items-center gap-1.5 font-black text-xs mb-1">
          <Sparkles className="h-4 w-4 text-amber-600" />
          <span>75% Smart Attendance Advice</span>
        </div>

        {totalHeld === 0 ? (
          <p className="text-slate-600">
            Start logging your daily attendance to see real-time bunk limits and exam eligibility advice!
          </p>
        ) : isSafe ? (
          <p>
            🎉 <b>Great job!</b> You are above the {targetPercentage}% requirement. You can safely bunk{' '}
            <span className="font-black text-emerald-900 underline">
              {canBunk} more {canBunk === 1 ? 'class' : 'classes'}
            </span>{' '}
            overall and still remain eligible for semester exams!
          </p>
        ) : (
          <p>
            ⚠️ <b>Attendance Shortage!</b> You are below {targetPercentage}%. You must attend the next{' '}
            <span className="font-black text-amber-950 underline">
              {mustAttend} consecutive {mustAttend === 1 ? 'class' : 'classes'}
            </span>{' '}
            without bunking to restore your 75% exam form eligibility!
          </p>
        )}
      </div>
    </div>
  );
};
