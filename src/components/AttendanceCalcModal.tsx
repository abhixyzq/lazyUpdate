'use client';

import React, { useState } from 'react';
import { X, CheckCircle2, AlertTriangle, Calculator, Sparkles } from 'lucide-react';

interface AttendanceCalcModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AttendanceCalcModal: React.FC<AttendanceCalcModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [totalClasses, setTotalClasses] = useState(60);
  const [attendedClasses, setAttendedClasses] = useState(48);

  if (!isOpen) return null;

  const currentPercent = totalClasses > 0 ? ((attendedClasses / totalClasses) * 100).toFixed(1) : '0';
  const numPercent = Number(currentPercent);
  const isSafe = numPercent >= 75;

  // Calculate bunk or needed classes
  // 75% target: attended / (total + x) = 0.75 => x = (attended - 0.75 * total) / 0.75
  const maxBunk = Math.max(0, Math.floor((attendedClasses - 0.75 * totalClasses) / 0.75));
  // if below 75%: (attended + x) / (total + x) = 0.75 => x = (0.75 * total - attended) / 0.25
  const neededClasses = Math.max(0, Math.ceil((0.75 * totalClasses - attendedClasses) / 0.25));

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 pb-20 sm:p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 shadow-2xl text-slate-900"
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
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-yellow-50 text-yellow-600 border border-yellow-200 text-xl">
            😊
          </div>
          <div>
            <h3 className="text-base font-black text-slate-900">75% Attendance CalC</h3>
            <p className="text-[11px] text-slate-500">University Exam Eligibility Tracker</p>
          </div>
        </div>

        {/* Inputs */}
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-slate-50 p-3 border border-slate-200">
            <span className="text-[10px] font-bold text-slate-500 uppercase">Total Classes</span>
            <input
              type="number"
              value={totalClasses}
              onChange={(e) => setTotalClasses(Math.max(1, Number(e.target.value)))}
              className="mt-1 w-full bg-transparent text-xl font-black text-slate-900 focus:outline-none"
            />
          </div>

          <div className="rounded-2xl bg-slate-50 p-3 border border-slate-200">
            <span className="text-[10px] font-bold text-slate-500 uppercase">Attended Classes</span>
            <input
              type="number"
              value={attendedClasses}
              onChange={(e) => setAttendedClasses(Math.min(totalClasses, Math.max(0, Number(e.target.value))))}
              className="mt-1 w-full bg-transparent text-xl font-black text-blue-600 focus:outline-none"
            />
          </div>
        </div>

        {/* Percentage Card */}
        <div
          className={`mt-4 rounded-2xl border p-4 text-center ${
            isSafe
              ? 'border-emerald-200 bg-emerald-50/80 text-emerald-950'
              : 'border-rose-200 bg-rose-50/80 text-rose-950'
          }`}
        >
          <div className="text-4xl font-black">{currentPercent}%</div>
          <p className="text-xs font-bold mt-1">
            {isSafe ? (
              <span className="text-emerald-700">Eligible for Semester Examination!</span>
            ) : (
              <span className="text-rose-700">Shortage! Need to attend more classes.</span>
            )}
          </p>

          <div className="mt-2 text-xs text-slate-700">
            {isSafe ? (
              <span>
                🎉 You can safely bunk the next <span className="font-black text-amber-800">{maxBunk} classes</span> without falling below 75%!
              </span>
            ) : (
              <span>
                ⚠️ You must attend the next <span className="font-black text-rose-700">{neededClasses} consecutive classes</span> to touch 75%.
              </span>
            )}
          </div>
        </div>

        <div className="mt-5 space-y-2">
          <a
            href="/attendance"
            onClick={onClose}
            className="flex items-center justify-center gap-1.5 w-full rounded-2xl bg-blue-600 py-2.5 text-xs font-black text-white hover:bg-blue-700 transition shadow-md shadow-blue-500/20"
          >
            <span>Open Full Attendance Manager</span>
            <Sparkles className="h-3.5 w-3.5" />
          </a>
          <button
            onClick={onClose}
            className="w-full rounded-2xl border border-slate-200 py-2 text-xs font-bold text-slate-600 hover:bg-slate-50 transition"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
