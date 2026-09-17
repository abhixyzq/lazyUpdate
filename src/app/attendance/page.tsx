'use client';

import React, { useState, useEffect } from 'react';
import { SubpageHeader } from '@/components/SubpageHeader';
import { CheckCircle2, AlertTriangle, Plus, Trash2, RotateCcw, Sparkles } from 'lucide-react';

interface SubjectAttendance {
  id: string;
  name: string;
  attended: number;
  total: number;
}

export default function AttendancePage() {
  const [totalHeld, setTotalHeld] = useState<number>(48);
  const [totalAttended, setTotalAttended] = useState<number>(38);

  const percentage = totalHeld > 0 ? ((totalAttended / totalHeld) * 100).toFixed(1) : '0.0';
  const numPercentage = Number(percentage);
  const isSafe = numPercentage >= 75;

  // Bunk Planner Calculation
  // If safe: can bunk: floor((attended - 0.75 * held) / 0.75)
  // If not safe: must attend: ceil((0.75 * held - attended) / 0.25)
  const canBunk = isSafe ? Math.floor((totalAttended - 0.75 * totalHeld) / 0.75) : 0;
  const mustAttend = !isSafe ? Math.ceil((0.75 * totalHeld - totalAttended) / 0.25) : 0;

  // Quick increments
  const handlePresent = () => {
    setTotalAttended((prev) => prev + 1);
    setTotalHeld((prev) => prev + 1);
  };

  const handleAbsent = () => {
    setTotalHeld((prev) => prev + 1);
  };

  const handleReset = () => {
    setTotalHeld(40);
    setTotalAttended(32);
  };

  return (
    <div className="min-h-screen bg-transparent text-slate-900 pb-12">
      <SubpageHeader title="Attendance" />

      <main className="mx-auto max-w-xl px-3 pt-4 space-y-4">
        
        {/* Main Attendance Status Card */}
        <div className="rounded-3xl border border-slate-200/90 bg-white p-5 shadow-xs space-y-4 text-center">
          
          {/* Circular Progress / Percentage Badge */}
          <div className="mx-auto flex flex-col items-center justify-center">
            <div
              className={`flex h-28 w-28 items-center justify-center rounded-full border-4 shadow-sm transition-all ${
                isSafe
                  ? 'border-emerald-500 bg-emerald-50 text-emerald-800'
                  : 'border-rose-500 bg-rose-50 text-rose-800'
              }`}
            >
              <div className="text-center">
                <span className="text-2xl sm:text-3xl font-black text-slate-900">{percentage}%</span>
                <span className="block text-[9px] uppercase font-bold text-slate-500">ATTENDANCE</span>
              </div>
            </div>

            <div className="mt-2.5">
              <span
                className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-black border ${
                  isSafe
                    ? 'border-emerald-200 bg-emerald-50 text-emerald-800'
                    : 'border-rose-200 bg-rose-50 text-rose-800'
                }`}
              >
                {isSafe ? <CheckCircle2 className="h-3.5 w-3.5" /> : <AlertTriangle className="h-3.5 w-3.5" />}
                {isSafe ? 'Eligible for Exam Form' : 'Short Attendance Alert'}
              </span>
            </div>
          </div>

          {/* Smart Bunk / Attend Planner Banner */}
          <div
            className={`rounded-2xl border p-3.5 text-xs text-left leading-relaxed ${
              isSafe
                ? 'border-emerald-200 bg-emerald-50/80 text-emerald-950'
                : 'border-amber-200 bg-amber-50/80 text-amber-950'
            }`}
          >
            <div className="flex items-center gap-1.5 font-black text-sm mb-1">
              <Sparkles className="h-4 w-4 text-amber-600" />
              <span>Smart Bunk & Attend Advice</span>
            </div>
            {isSafe ? (
              <p>
                🎉 <b>Awesome!</b> You have maintained above 75%. You can safely bunk{' '}
                <span className="font-black text-emerald-900 underline">{canBunk} more {canBunk === 1 ? 'class' : 'classes'}</span> and your attendance will still stay above the 75% limit!
              </p>
            ) : (
              <p>
                ⚠️ <b>Warning!</b> You are currently below 75%. You must attend the next{' '}
                <span className="font-black text-amber-950 underline">{mustAttend} consecutive {mustAttend === 1 ? 'class' : 'classes'}</span> without bunking to reach the 75% eligibility mark!
              </p>
            )}
          </div>

          {/* Sliders & Input Grid */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-3 text-left">
              <label className="text-[11px] font-bold text-slate-600 block mb-1">
                Classes Attended
              </label>
              <div className="flex items-center justify-between">
                <input
                  type="number"
                  min="0"
                  max={totalHeld}
                  value={totalAttended}
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    setTotalAttended(val);
                    if (val > totalHeld) setTotalHeld(val);
                  }}
                  className="w-20 rounded-lg bg-white px-2 py-1 text-base font-black text-slate-900 border border-slate-300 focus:outline-none focus:border-slate-500"
                />
                <button
                  onClick={handlePresent}
                  className="rounded-xl bg-emerald-600 px-2.5 py-1 text-xs font-black text-white hover:bg-emerald-500 active:scale-95 transition shadow-xs"
                >
                  +1
                </button>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-3 text-left">
              <label className="text-[11px] font-bold text-slate-600 block mb-1">
                Total Classes Held
              </label>
              <div className="flex items-center justify-between">
                <input
                  type="number"
                  min="1"
                  value={totalHeld}
                  onChange={(e) => setTotalHeld(Math.max(1, Number(e.target.value)))}
                  className="w-20 rounded-lg bg-white px-2 py-1 text-base font-black text-slate-900 border border-slate-300 focus:outline-none focus:border-slate-500"
                />
                <button
                  onClick={handleAbsent}
                  className="rounded-xl bg-rose-600 px-2.5 py-1 text-xs font-black text-white hover:bg-rose-500 active:scale-95 transition shadow-xs"
                >
                  +1
                </button>
              </div>
            </div>
          </div>

          {/* Reset button */}
          <div className="flex justify-end pt-1">
            <button
              onClick={handleReset}
              className="flex items-center gap-1 text-xs text-slate-500 hover:text-slate-800 transition"
            >
              <RotateCcw className="h-3 w-3" /> Reset Defaults
            </button>
          </div>
        </div>

        {/* Patna University Attendance Policy Note */}
        <div className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4 text-xs text-slate-600 space-y-1.5 leading-relaxed">
          <span className="font-bold text-slate-900 block text-xs">ℹ️ Patna University Regulations:</span>
          <p>
            • Minimum <b>75% attendance</b> in lectures and practicals is compulsory to fill semester examination forms under Patna University & UGC FYUGP CBCS norms.
          </p>
          <p>
            • Relaxation up to 15% (minimum 60%) can be granted only by the Vice-Chancellor on producing verified medical certificates or university representation in sports/NCC.
          </p>
        </div>
      </main>
    </div>
  );
}
