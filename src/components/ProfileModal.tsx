'use client';

import React from 'react';
import { X, User, ExternalLink, ShieldCheck, GraduationCap, Building2, BookOpen, Key } from 'lucide-react';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  studentName?: string;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({
  isOpen,
  onClose,
  studentName = 'Alex Kumar',
}) => {
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

        {/* Profile Card Top */}
        <div className="text-center pt-2">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-tr from-indigo-500 to-purple-600 text-3xl shadow-md shadow-indigo-500/20">
            👨‍🎓
          </div>
          <h3 className="mt-3 text-lg font-black text-slate-900 dark:text-white">
            {studentName}
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
            Patna Science College • B.Sc Mathematics (Hons)
          </p>
          <span className="inline-block mt-1.5 rounded-full bg-indigo-100 px-3 py-0.5 text-[10px] font-black text-indigo-700 dark:bg-indigo-950/80 dark:text-indigo-300">
            Roll No: 24PSC1089 • Sem-2
          </span>
        </div>

        {/* Info Grid */}
        <div className="mt-5 space-y-2 text-xs rounded-2xl bg-slate-50 p-3.5 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
          <div className="flex items-center justify-between py-1 border-b border-slate-200/60 dark:border-slate-800">
            <span className="text-slate-400 font-medium">University</span>
            <span className="font-bold text-slate-800 dark:text-slate-200">Patna University (PU)</span>
          </div>
          <div className="flex items-center justify-between py-1 border-b border-slate-200/60 dark:border-slate-800">
            <span className="text-slate-400 font-medium">Academic Session</span>
            <span className="font-bold text-slate-800 dark:text-slate-200">2024 - 2028</span>
          </div>
          <div className="flex items-center justify-between py-1">
            <span className="text-slate-400 font-medium">Registration Status</span>
            <span className="font-bold text-emerald-600 dark:text-emerald-400">Verified & Active</span>
          </div>
        </div>

        {/* Action button */}
        <div className="mt-5 space-y-2">
          <a
            href="https://pup.ac.in/umis"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 px-4 py-3 text-xs font-bold text-white shadow-md hover:from-indigo-700 hover:to-blue-700 transition active:scale-98"
          >
            <span>Login to Official PU UMIS Portal</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>

      </div>
    </div>
  );
};
