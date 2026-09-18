'use client';

import React, { useState } from 'react';
import { X, Sparkles, Calculator, CheckCircle2, AlertTriangle } from 'lucide-react';
import { OverallAttendanceStats } from '@/types/attendance';

interface AttendanceSimulatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  stats: OverallAttendanceStats;
  targetPercentage?: number;
}

export const AttendanceSimulatorModal: React.FC<AttendanceSimulatorModalProps> = ({
  isOpen,
  onClose,
  stats,
  targetPercentage = 75,
}) => {
  const [attendFuture, setAttendFuture] = useState<number>(5);
  const [bunkFuture, setBunkFuture] = useState<number>(0);

  if (!isOpen) return null;

  const currentAttended = stats.totalAttended;
  const currentHeld = stats.totalHeld;

  const simAttended = currentAttended + attendFuture;
  const simHeld = currentHeld + attendFuture + bunkFuture;
  const simPercentage = simHeld > 0 ? (simAttended / simHeld) * 100 : 0;
  const isSimSafe = simPercentage >= targetPercentage;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 shadow-2xl text-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Title */}
        <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-50 text-amber-600 border border-amber-200">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-base font-black text-slate-900">What-If Attendance Simulator</h3>
            <p className="text-[11px] text-slate-500 font-medium">
              Simulate future classes and see target impact
            </p>
          </div>
        </div>

        {/* Current Standing Card */}
        <div className="mt-4 p-3 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase block">Current Standing</span>
            <span className="font-black text-slate-900 text-sm">
              {stats.percentage.toFixed(1)}% ({currentAttended}/{currentHeld})
            </span>
          </div>
          <span
            className={`rounded-full px-2 py-0.5 text-[10px] font-black ${
              stats.isSafe ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
            }`}
          >
            Target: {targetPercentage}%
          </span>
        </div>

        {/* Future Inputs */}
        <div className="mt-4 space-y-3">
          <div className="space-y-1">
            <div className="flex items-center justify-between text-xs font-bold text-slate-700">
              <label>If I ATTEND the next:</label>
              <span className="text-emerald-600 font-black">{attendFuture} classes</span>
            </div>
            <input
              type="range"
              min="0"
              max="30"
              value={attendFuture}
              onChange={(e) => setAttendFuture(Number(e.target.value))}
              className="w-full accent-emerald-600"
            />
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-between text-xs font-bold text-slate-700">
              <label>If I BUNK / MISS the next:</label>
              <span className="text-rose-600 font-black">{bunkFuture} classes</span>
            </div>
            <input
              type="range"
              min="0"
              max="20"
              value={bunkFuture}
              onChange={(e) => setBunkFuture(Number(e.target.value))}
              className="w-full accent-rose-600"
            />
          </div>
        </div>

        {/* Simulated Result Card */}
        <div
          className={`mt-5 rounded-2xl border p-4 text-center ${
            isSimSafe
              ? 'border-emerald-200 bg-emerald-50/80 text-emerald-950'
              : 'border-rose-200 bg-rose-50/80 text-rose-950'
          }`}
        >
          <span className="text-[10px] font-black uppercase tracking-wider block">
            Projected Attendance
          </span>
          <div className="text-3xl font-black mt-0.5">
            {simPercentage.toFixed(1)}%
          </div>
          <span className="text-xs font-semibold block mt-0.5">
            {simAttended} / {simHeld} classes
          </span>

          <div className="mt-2 text-xs font-bold flex items-center justify-center gap-1">
            {isSimSafe ? (
              <>
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span className="text-emerald-800">Eligible! You stay above {targetPercentage}%.</span>
              </>
            ) : (
              <>
                <AlertTriangle className="h-4 w-4 text-rose-600 shrink-0" />
                <span className="text-rose-800">Danger! Falls below {targetPercentage}% limit.</span>
              </>
            )}
          </div>
        </div>

        {/* Done */}
        <div className="mt-5">
          <button
            type="button"
            onClick={onClose}
            className="w-full rounded-2xl bg-slate-900 py-2.5 text-xs font-black text-white hover:bg-slate-800 transition"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
