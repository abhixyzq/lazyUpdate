'use client';

import React, { useState } from 'react';
import { X, Plus, Trash2, Calculator, Sparkles, RefreshCw } from 'lucide-react';

interface SubjectRow {
  id: string;
  name: string;
  credit: number;
  gradePoint: number | null;
}

interface SGPACalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SGPACalculatorModal: React.FC<SGPACalculatorModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [subjects, setSubjects] = useState<SubjectRow[]>([
    { id: '1', name: 'Major Subject (MJC)', credit: 4, gradePoint: null },
    { id: '2', name: 'Minor Subject (MIC)', credit: 4, gradePoint: null },
    { id: '3', name: 'Multidisciplinary Course (MDC)', credit: 3, gradePoint: null },
    { id: '4', name: 'AEC (Language/Env Science)', credit: 2, gradePoint: null },
    { id: '5', name: 'Skill Enhancement Course (SEC)', credit: 3, gradePoint: null },
    { id: '6', name: 'Value Added Course (VAC)', credit: 2, gradePoint: null },
  ]);

  if (!isOpen) return null;

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
      { id: '4', name: 'AEC (Language/Env Science)', credit: 2, gradePoint: null },
      { id: '5', name: 'Skill Enhancement Course (SEC)', credit: 3, gradePoint: null },
      { id: '6', name: 'Value Added Course (VAC)', credit: 2, gradePoint: null },
    ]);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 shadow-2xl text-slate-900 max-h-[90vh] overflow-y-auto"
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
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 border border-emerald-200">
            <Calculator className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-base font-black text-slate-900">SGPA & CGPA Calculator</h3>
            <p className="text-[11px] text-slate-500">4-Year CBCS Patna University / BEU Grading</p>
          </div>
        </div>

        {/* Big SGPA Result Banner */}
        <div className="mt-4 rounded-2xl border border-blue-200 bg-blue-50/70 p-4 text-center">
          <span className="text-xs font-bold text-blue-700 uppercase tracking-widest">Calculated SGPA</span>
          <div className="text-4xl font-black text-slate-900 my-1">{sgpa}</div>
          <p className="text-xs font-semibold text-slate-600">
            Equivalent Percentage: <span className="text-slate-900 font-bold">{hasGrades ? `${percentage}%` : '--'}</span> • Graded Credits: {totalCredits}
          </p>
          {!hasGrades && (
            <p className="text-[11px] text-slate-500 mt-1 font-medium">
              Select grades for your enrolled papers below
            </p>
          )}
        </div>

        {/* Subjects Table */}
        <div className="mt-4 space-y-2 max-h-56 overflow-y-auto pr-1">
          {subjects.map((sub) => (
            <div
              key={sub.id}
              className="flex items-center justify-between gap-2 rounded-xl bg-slate-50 p-2.5 border border-slate-200 text-xs"
            >
              <div className="flex-1 min-w-0">
                <input
                  type="text"
                  value={sub.name}
                  onChange={(e) => {
                    const val = e.target.value;
                    setSubjects(subjects.map((s) => (s.id === sub.id ? { ...s, name: val } : s)));
                  }}
                  className="w-full bg-transparent font-bold text-slate-800 focus:outline-none truncate"
                />
              </div>

              {/* Credit Selector */}
              <div className="flex items-center gap-1 shrink-0">
                <span className="text-[10px] text-slate-500 font-bold">Credit:</span>
                <select
                  value={sub.credit}
                  onChange={(e) => updateSubject(sub.id, 'credit', Number(e.target.value))}
                  className="rounded-lg bg-white px-2 py-1 text-xs font-bold text-slate-800 border border-slate-200"
                >
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </select>
              </div>

              {/* Grade Selector */}
              <div className="flex items-center gap-1 shrink-0">
                <span className="text-[10px] text-slate-500 font-bold">Grade:</span>
                <select
                  value={sub.gradePoint === null ? '' : sub.gradePoint}
                  onChange={(e) => updateSubject(sub.id, 'gradePoint', e.target.value === '' ? null : Number(e.target.value))}
                  className={`rounded-lg bg-white px-2 py-1 text-xs font-bold border transition ${
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

              <button
                onClick={() => removeSubject(sub.id)}
                className="text-slate-400 hover:text-red-500 p-1 transition"
                title="Remove"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-3 flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5">
            <button
              onClick={addSubject}
              className="flex items-center gap-1 rounded-xl border border-slate-200 bg-slate-100 px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-200 hover:text-slate-900 transition"
            >
              <Plus className="h-4 w-4" /> Add Paper
            </button>
            <button
              onClick={resetDefault}
              className="flex items-center gap-1 rounded-xl border border-slate-200 bg-slate-100 px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-200 hover:text-slate-900 transition"
              title="Reset all grades to None"
            >
              <RefreshCw className="h-3.5 w-3.5" /> Reset
            </button>
          </div>

          <button
            onClick={onClose}
            className="rounded-xl bg-slate-900 px-5 py-2 text-xs font-black text-white hover:bg-slate-800 transition shadow-xs"
          >
            Done
          </button>
        </div>

        {/* Single line footer message */}
        <p className="mt-3 text-center text-[11px] text-slate-400 font-medium">
          * Note: It may vary
        </p>

      </div>
    </div>
  );
};
