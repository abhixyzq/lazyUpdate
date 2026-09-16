'use client';

import React, { useState } from 'react';
import { SubpageHeader } from '@/components/SubpageHeader';
import { Plus, Trash2, RotateCcw, Award, Sparkles, CheckCircle2 } from 'lucide-react';

interface SubjectRow {
  id: string;
  name: string;
  credit: number;
  gradePoint: number;
}

export default function SGPAPage() {
  const [subjects, setSubjects] = useState<SubjectRow[]>([
    { id: '1', name: 'Major Subject (MJC)', credit: 4, gradePoint: 9 }, // A+
    { id: '2', name: 'Minor Subject (MIC)', credit: 4, gradePoint: 8 }, // A
    { id: '3', name: 'Multidisciplinary Course (MDC)', credit: 3, gradePoint: 8 }, // A
    { id: '4', name: 'Skill Enhancement Course (SEC)', credit: 3, gradePoint: 9 }, // A+
    { id: '5', name: 'Value Added Course (VAC)', credit: 2, gradePoint: 9 }, // A+
    { id: '6', name: 'AEC (Language/English)', credit: 2, gradePoint: 8 }, // A
  ]);

  const totalCredits = subjects.reduce((sum, s) => sum + s.credit, 0);
  const totalWeightedPoints = subjects.reduce((sum, s) => sum + s.credit * s.gradePoint, 0);
  const sgpa = totalCredits > 0 ? (totalWeightedPoints / totalCredits).toFixed(2) : '0.00';
  const percentage = (Number(sgpa) * 9.5).toFixed(1);

  const addSubject = () => {
    const nextId = String(Date.now());
    setSubjects([...subjects, { id: nextId, name: `Subject ${subjects.length + 1}`, credit: 3, gradePoint: 8 }]);
  };

  const removeSubject = (id: string) => {
    if (subjects.length <= 1) return;
    setSubjects(subjects.filter((s) => s.id !== id));
  };

  const updateSubject = (id: string, field: 'credit' | 'gradePoint', value: number) => {
    setSubjects(subjects.map((s) => (s.id === id ? { ...s, [field]: value } : s)));
  };

  const resetDefault = () => {
    setSubjects([
      { id: '1', name: 'Major Subject (MJC)', credit: 4, gradePoint: 9 },
      { id: '2', name: 'Minor Subject (MIC)', credit: 4, gradePoint: 8 },
      { id: '3', name: 'Multidisciplinary Course (MDC)', credit: 3, gradePoint: 8 },
      { id: '4', name: 'Skill Enhancement Course (SEC)', credit: 3, gradePoint: 9 },
      { id: '5', name: 'Value Added Course (VAC)', credit: 2, gradePoint: 9 },
      { id: '6', name: 'AEC (Language/English)', credit: 2, gradePoint: 8 },
    ]);
  };

  const getDivision = (s: number) => {
    if (s >= 8.5) return 'First Class with Distinction';
    if (s >= 6.5) return 'First Class';
    if (s >= 5.5) return 'Second Class';
    return 'Pass';
  };

  return (
    <div className="min-h-screen bg-transparent text-white pb-12">
      <SubpageHeader title="SGPA CalC" />

      <main className="mx-auto max-w-xl px-3 pt-4 space-y-4">
        
        {/* Result Summary Card */}
        <div className="rounded-3xl border border-blue-900/80 bg-gradient-to-br from-[#091f3e] to-[#06142a] p-5 shadow-2xl space-y-3 text-center">
          <div className="flex items-center justify-between px-2">
            <span className="text-xs font-bold text-slate-300">Total Credits: <b className="text-white">{totalCredits}</b></span>
            <span className="text-xs font-bold text-cyan-400">{getDivision(Number(sgpa))}</span>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-1">
            <div className="rounded-2xl border border-blue-800/80 bg-[#071933] p-3">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Calculated SGPA
              </span>
              <span className="text-3xl sm:text-4xl font-black text-[#00d2ff]">
                {sgpa}
              </span>
              <span className="text-[10px] text-slate-400 block mt-0.5">Scale of 10.0</span>
            </div>

            <div className="rounded-2xl border border-blue-800/80 bg-[#071933] p-3">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Equivalent Percentage
              </span>
              <span className="text-3xl sm:text-4xl font-black text-[#a3e635]">
                {percentage}%
              </span>
              <span className="text-[10px] text-slate-400 block mt-0.5">Formula: SGPA × 9.5</span>
            </div>
          </div>
        </div>

        {/* Subject Rows Card */}
        <div className="rounded-3xl border border-blue-900/80 bg-[#091a36] p-4 sm:p-5 shadow-2xl space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xs sm:text-sm font-black text-[#fbbf24] uppercase tracking-wider">
              Enrolled Semester Papers
            </h3>
            <button
              onClick={addSubject}
              className="flex items-center gap-1 rounded-xl bg-cyan-600 px-3 py-1.5 text-xs font-black text-white hover:bg-cyan-500 transition shadow-xs"
            >
              <Plus className="h-3.5 w-3.5" /> Add Paper
            </button>
          </div>

          <div className="space-y-2.5">
            {subjects.map((sub, idx) => (
              <div
                key={sub.id}
                className="flex items-center gap-2 rounded-2xl border border-blue-900/70 bg-[#061428] p-2.5 hover:border-blue-700 transition"
              >
                <div className="flex-1 overflow-hidden">
                  <input
                    type="text"
                    value={sub.name}
                    onChange={(e) => {
                      const val = e.target.value;
                      setSubjects(subjects.map((s) => (s.id === sub.id ? { ...s, name: val } : s)));
                    }}
                    className="w-full bg-transparent text-xs font-black text-white focus:outline-none truncate"
                  />
                </div>

                {/* Credits Select */}
                <div className="flex items-center gap-1 shrink-0">
                  <span className="text-[10px] text-slate-400 font-bold">Cr:</span>
                  <select
                    value={sub.credit}
                    onChange={(e) => updateSubject(sub.id, 'credit', Number(e.target.value))}
                    className="rounded-lg bg-blue-950 px-2 py-1 text-xs font-black text-cyan-300 border border-blue-800"
                  >
                    {[1, 2, 3, 4, 5, 6].map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Grade Select */}
                <div className="flex items-center gap-1 shrink-0">
                  <span className="text-[10px] text-slate-400 font-bold">Grade:</span>
                  <select
                    value={sub.gradePoint}
                    onChange={(e) => updateSubject(sub.id, 'gradePoint', Number(e.target.value))}
                    className="rounded-lg bg-blue-950 px-2 py-1 text-xs font-black text-amber-300 border border-blue-800"
                  >
                    <option value={10}>O (10)</option>
                    <option value={9}>A+ (9)</option>
                    <option value={8}>A (8)</option>
                    <option value={7}>B+ (7)</option>
                    <option value={6}>B (6)</option>
                    <option value={5}>C (5)</option>
                    <option value={4}>P (4)</option>
                    <option value={0}>F (0)</option>
                  </select>
                </div>

                {/* Delete button */}
                {subjects.length > 1 && (
                  <button
                    onClick={() => removeSubject(sub.id)}
                    className="p-1 text-slate-500 hover:text-rose-400 transition shrink-0"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-end pt-1">
            <button
              onClick={resetDefault}
              className="flex items-center gap-1 text-xs text-slate-400 hover:text-white transition"
            >
              <RotateCcw className="h-3 w-3" /> Reset Papers
            </button>
          </div>
        </div>

        {/* CBCS Grading Key Table */}
        <div className="rounded-2xl border border-blue-900/60 bg-[#07162d] p-4 text-xs text-slate-300 space-y-2">
          <span className="font-bold text-cyan-400 block text-xs">📊 PU CBCS 10-Point Grade Scale:</span>
          <div className="grid grid-cols-4 gap-1.5 text-[11px] text-center">
            <div className="p-1.5 rounded-lg bg-blue-950 border border-blue-900"><b>O</b> = 10 pts</div>
            <div className="p-1.5 rounded-lg bg-blue-950 border border-blue-900"><b>A+</b> = 9 pts</div>
            <div className="p-1.5 rounded-lg bg-blue-950 border border-blue-900"><b>A</b> = 8 pts</div>
            <div className="p-1.5 rounded-lg bg-blue-950 border border-blue-900"><b>B+</b> = 7 pts</div>
            <div className="p-1.5 rounded-lg bg-blue-950 border border-blue-900"><b>B</b> = 6 pts</div>
            <div className="p-1.5 rounded-lg bg-blue-950 border border-blue-900"><b>C</b> = 5 pts</div>
            <div className="p-1.5 rounded-lg bg-blue-950 border border-blue-900"><b>P</b> = 4 pts</div>
            <div className="p-1.5 rounded-lg bg-blue-950 border border-blue-900"><b>F</b> = 0 pts</div>
          </div>
        </div>
      </main>
    </div>
  );
}
