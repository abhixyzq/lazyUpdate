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
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-yellow-400/20 text-yellow-300 border border-yellow-400/40 text-xl">
            😊
          </div>
          <div>
            <h3 className="text-base font-black text-white">75% Attendance CalC</h3>
            <p className="text-[11px] text-cyan-300">University Exam Eligibility Tracker</p>
          </div>
        </div>

        {/* Inputs */}
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-[#11264c] p-3 border border-blue-900/60">
            <span className="text-[10px] font-bold text-slate-400 uppercase">Total Classes</span>
            <input
              type="number"
              value={totalClasses}
              onChange={(e) => setTotalClasses(Math.max(1, Number(e.target.value)))}
              className="mt-1 w-full bg-transparent text-xl font-black text-white focus:outline-none"
            />
          </div>

          <div className="rounded-2xl bg-[#11264c] p-3 border border-blue-900/60">
            <span className="text-[10px] font-bold text-slate-400 uppercase">Attended Classes</span>
            <input
              type="number"
              value={attendedClasses}
              onChange={(e) => setAttendedClasses(Math.min(totalClasses, Math.max(0, Number(e.target.value))))}
              className="mt-1 w-full bg-transparent text-xl font-black text-cyan-300 focus:outline-none"
            />
          </div>
        </div>

        {/* Percentage Card */}
        <div
          className={`mt-4 rounded-2xl border p-4 text-center ${
            isSafe
              ? 'border-emerald-500/50 bg-emerald-950/30'
              : 'border-rose-500/50 bg-rose-950/30'
          }`}
        >
          <div className="text-4xl font-black">{currentPercent}%</div>
          <p className="text-xs font-bold mt-1">
            {isSafe ? (
              <span className="text-emerald-400">Eligible for Semester Examination!</span>
            ) : (
              <span className="text-rose-400">Shortage! Need to attend more classes.</span>
            )}
          </p>

          <div className="mt-2 text-xs text-slate-200">
            {isSafe ? (
              <span>
                🎉 You can safely bunk the next <span className="font-black text-yellow-300">{maxBunk} classes</span> without falling below 75%!
              </span>
            ) : (
              <span>
                ⚠️ You must attend the next <span className="font-black text-rose-300">{neededClasses} consecutive classes</span> to touch 75%.
              </span>
            )}
          </div>
        </div>

        <div className="mt-5">
          <button
            onClick={onClose}
            className="w-full rounded-xl bg-[#00f0aa] py-2.5 text-xs font-black text-[#052b22] hover:bg-[#00d898]"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
};
