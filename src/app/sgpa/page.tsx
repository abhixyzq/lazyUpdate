'use client';

import React, { useState } from 'react';
import { SubpageHeader } from '@/components/SubpageHeader';
import { Plus, Trash2, RotateCcw, Award, Sparkles, CheckCircle2 } from 'lucide-react';

interface SubjectRow {
  id: string;
  name: string;
  credit: number;
  gradePoint: number | null;
}

export default function SGPAPage() {
  const [subjects, setSubjects] = useState<SubjectRow[]>([
    { id: '1', name: 'Major Subject (MJC)', credit: 4, gradePoint: null },
    { id: '2', name: 'Minor Subject (MIC)', credit: 4, gradePoint: null },
    { id: '3', name: 'Multidisciplinary Course (MDC)', credit: 3, gradePoint: null },
    { id: '4', name: 'Skill Enhancement Course (SEC)', credit: 3, gradePoint: null },
    { id: '5', name: 'Value Added Course (VAC)', credit: 2, gradePoint: null },
    { id: '6', name: 'AEC (Language/English)', credit: 2, gradePoint: null },
  ]);

  const gradedSubjects = subjects.filter((s) => s.gradePoint !== null);
  const totalCredits = gradedSubjects.reduce((sum, s) => sum + s.credit, 0);
  const totalWeightedPoints = gradedSubjects.reduce((sum, s) => sum + s.credit * (s.gradePoint ?? 0), 0);
  const hasGrades = gradedSubjects.length > 0 && totalCredits > 0;
  const sgpa = hasGrades ? (totalWeightedPoints / totalCredits).toFixed(2) : '--';
  const percentage = hasGrades ? (Number(sgpa) * 9.5).toFixed(1) : '--';

  const addSubject = () => {
    const nextId = String(Date.now());
    setSubjects([...subjects, { id: nextId, name: `Subject ${subjects.length + 1}`, credit: 3, gradePoint: null }]);
  };

  const removeSubject = (id: string) => {
    if (subjects.length <= 1) return;
    setSubjects(subjects.filter((s) => s.id !== id));
  };

  const updateSubject = (id: string, field: 'credit' | 'gradePoint', value: number | null) => {
    setSubjects(subjects.map((s) => (s.id === id ? { ...s, [field]: value } : s)));
  };

  const resetDefault = () => {
    setSubjects([
      { id: '1', name: 'Major Subject (MJC)', credit: 4, gradePoint: null },
      { id: '2', name: 'Minor Subject (MIC)', credit: 4, gradePoint: null },
      { id: '3', name: 'Multidisciplinary Course (MDC)', credit: 3, gradePoint: null },
      { id: '4', name: 'Skill Enhancement Course (SEC)', credit: 3, gradePoint: null },
      { id: '5', name: 'Value Added Course (VAC)', credit: 2, gradePoint: null },
      { id: '6', name: 'AEC (Language/English)', credit: 2, gradePoint: null },
    ]);
  };

  const getDivision = (s: number | string) => {
    if (s === '--' || typeof s !== 'number' && isNaN(Number(s))) return 'Grading Pending';
    const num = Number(s);
    if (num >= 8.5) return 'First Class with Distinction';
    if (num >= 6.5) return 'First Class';
    if (num >= 5.5) return 'Second Class';
    return 'Pass';
  };

  return (
    <div className="min-h-screen bg-transparent text-slate-900 pb-28 sm:pb-16">
      <SubpageHeader title="SGPA CalC" />

      <main className="mx-auto max-w-xl px-3 pt-4 space-y-4">
        
        {/* Result Summary Card */}
        <div className="rounded-3xl border border-slate-200/90 bg-white p-5 shadow-xs space-y-3 text-center">
          <div className="flex items-center justify-between px-2">
            <span className="text-xs font-bold text-slate-600">Graded Credits: <b className="text-slate-900">{totalCredits}</b></span>
            <span className="text-xs font-bold text-blue-700">{getDivision(sgpa)}</span>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-1">
            <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-3">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                Calculated SGPA
              </span>
              <span className="text-3xl sm:text-4xl font-black text-slate-900">
                {sgpa}
              </span>
              <span className="text-[10px] text-slate-500 block mt-0.5">Scale of 10.0</span>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-3">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                Equivalent Percentage
              </span>
              <span className="text-3xl sm:text-4xl font-black text-emerald-700">
                {hasGrades ? `${percentage}%` : '--'}
              </span>
              <span className="text-[10px] text-slate-500 block mt-0.5">Formula: SGPA × 9.5</span>
            </div>
          </div>
          {!hasGrades && (
            <p className="text-[11px] text-slate-500 font-medium">
              Select grades for your enrolled papers below
            </p>
          )}
        </div>

        {/* Subject Rows Card */}
        <div className="rounded-3xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-xs space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wider">
              Enrolled Semester Papers
            </h3>
            <button
              onClick={addSubject}
              className="flex items-center gap-1 rounded-xl bg-slate-900 hover:bg-slate-800 px-3 py-1.5 text-xs font-black text-white transition shadow-xs"
            >
              <Plus className="h-3.5 w-3.5" /> Add Paper
            </button>
          </div>

          <div className="space-y-2.5">
            {subjects.map((sub) => (
              <div
                key={sub.id}
                className="flex items-center gap-2 rounded-2xl border border-slate-200/80 bg-slate-50/70 p-2.5 hover:border-slate-300 transition"
              >
                <div className="flex-1 overflow-hidden">
                  <input
                    type="text"
                    value={sub.name}
                    onChange={(e) => {
                      const val = e.target.value;
                      setSubjects(subjects.map((s) => (s.id === sub.id ? { ...s, name: val } : s)));
                    }}
                    className="w-full bg-transparent text-xs font-bold text-slate-900 focus:outline-none truncate"
                  />
                </div>

                {/* Credits Select */}
                <div className="flex items-center gap-1 shrink-0">
                  <span className="text-[10px] text-slate-500 font-bold">Cr:</span>
                  <select
                    value={sub.credit}
                    onChange={(e) => updateSubject(sub.id, 'credit', Number(e.target.value))}
                    className="rounded-lg bg-white px-2 py-1 text-xs font-bold text-slate-800 border border-slate-300 focus:outline-none"
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
                  <span className="text-[10px] text-slate-500 font-bold">Grade:</span>
                  <select
                    value={sub.gradePoint === null ? '' : sub.gradePoint}
                    onChange={(e) => updateSubject(sub.id, 'gradePoint', e.target.value === '' ? null : Number(e.target.value))}
                    className={`rounded-lg bg-white px-2 py-1 text-xs font-bold border focus:outline-none transition ${
                      sub.gradePoint === null ? 'border-slate-300 text-slate-400' : 'border-slate-300 text-slate-800'
                    }`}
                  >
                    <option value="">None</option>
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
                    className="p-1 text-slate-400 hover:text-rose-600 transition shrink-0"
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
              className="flex items-center gap-1 text-xs text-slate-500 hover:text-slate-800 transition"
            >
              <RotateCcw className="h-3 w-3" /> Reset Papers
            </button>
          </div>
        </div>

        {/* PU Grading Key Table */}
        <div className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4 text-xs text-slate-700 space-y-2">
          <span className="font-bold text-slate-900 block text-xs">📊 PU 10-Point Grade Scale:</span>
          <div className="grid grid-cols-4 gap-1.5 text-[11px] text-center">
            <div className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-800"><b>O</b> = 10 pts</div>
            <div className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-800"><b>A+</b> = 9 pts</div>
            <div className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-800"><b>A</b> = 8 pts</div>
            <div className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-800"><b>B+</b> = 7 pts</div>
            <div className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-800"><b>B</b> = 6 pts</div>
            <div className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-800"><b>C</b> = 5 pts</div>
            <div className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-800"><b>P</b> = 4 pts</div>
            <div className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-800"><b>F</b> = 0 pts</div>
          </div>
        </div>

        {/* Single line footer message */}
        <p className="text-center text-[11px] text-slate-400 font-medium pt-2">
          * Note: It may vary
        </p>
      </main>
    </div>
  );
}
