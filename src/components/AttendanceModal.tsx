'use client';

import React from 'react';
import { X, ClipboardCheck, CheckCircle2, AlertCircle } from 'lucide-react';

interface AttendanceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AttendanceModal: React.FC<AttendanceModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/65 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 shadow-2xl dark:border-slate-800 dark:bg-slate-900 dark:text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-200 transition"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 dark:bg-emerald-950/80 dark:text-emerald-300">
            <ClipboardCheck className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-base font-black text-slate-900 dark:text-white">
              75% Attendance Tracker
            </h3>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              Patna University Semester Rule
            </p>
          </div>
        </div>

        <div className="mt-4 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/40 text-center">
          <span className="text-3xl font-black text-emerald-600 dark:text-emerald-400">82.4%</span>
          <p className="text-xs font-bold text-emerald-800 dark:text-emerald-200 mt-1">
            Overall Attendance Status: Eligible for Sem Exam
          </p>
          <p className="text-[11px] text-emerald-600/80 dark:text-emerald-400/80 mt-0.5">
            Minimum 75% required by PU Examination Board
          </p>
        </div>

        <div className="mt-4 space-y-2 text-xs">
          <div className="flex justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/40">
            <span className="text-slate-600 dark:text-slate-300 font-medium">Major Paper (Calculus)</span>
            <span className="font-bold text-emerald-600">86% (43/50)</span>
          </div>
          <div className="flex justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/40">
            <span className="text-slate-600 dark:text-slate-300 font-medium">Minor Paper (Physics)</span>
            <span className="font-bold text-emerald-600">78% (39/50)</span>
          </div>
          <div className="flex justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/40">
            <span className="text-slate-600 dark:text-slate-300 font-medium">AEC (Environmental Science)</span>
            <span className="font-bold text-emerald-600">84% (21/25)</span>
          </div>
        </div>

        <div className="mt-4 text-center">
          <button
            onClick={onClose}
            className="w-full rounded-xl bg-slate-100 dark:bg-slate-800 py-2.5 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-200"
          >
            Close Tracker
          </button>
        </div>
      </div>
    </div>
  );
};
