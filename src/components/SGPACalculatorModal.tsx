'use client';

import React, { useState } from 'react';
import { X, Plus, Trash2, Calculator, Sparkles, RefreshCw } from 'lucide-react';

interface SubjectRow {
  id: string;
  name: string;
  credit: number;
  gradePoint: number;
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
    { id: '1', name: 'Major Subject (Paper 1)', credit: 4, gradePoint: 9 }, // A+
    { id: '2', name: 'Minor Subject (Paper 2)', credit: 4, gradePoint: 8 }, // A
    { id: '3', name: 'Multidisciplinary Course', credit: 3, gradePoint: 8 }, // A
    { id: '4', name: 'AEC (Language/Env Science)', credit: 2, gradePoint: 9 }, // A+
    { id: '5', name: 'Skill Enhancement Course (SEC)', credit: 3, gradePoint: 10 }, // O
    { id: '6', name: 'Value Added Course (VAC)', credit: 2, gradePoint: 9 }, // A+
  ]);

  if (!isOpen) return null;

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

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-3xl border border-blue-900 bg-[#0a1b38] p-5 sm:p-6 shadow-2xl text-white max-h-[90vh] overflow-y-auto"
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
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
            <Calculator className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-base font-black text-white">SGPA & CGPA Calculator</h3>
            <p className="text-[11px] text-cyan-300">4-Year CBCS Patna University / BEU Grading</p>
          </div>
        </div>

        {/* Big SGPA Result Banner */}
        <div className="mt-4 rounded-2xl border border-cyan-500/40 bg-gradient-to-br from-[#0c2b5c] to-[#081e42] p-4 text-center">
          <span className="text-xs font-bold text-cyan-300 uppercase tracking-widest">Calculated SGPA</span>
          <div className="text-4xl font-black text-[#00f2a9] my-1">{sgpa}</div>
          <p className="text-xs font-semibold text-slate-300">
            Equivalent Percentage: <span className="text-white font-bold">{percentage}%</span> • Credits: {totalCredits}
          </p>
        </div>

        {/* Subjects Table */}
        <div className="mt-4 space-y-2 max-h-56 overflow-y-auto pr-1">
          {subjects.map((sub, index) => (
            <div
              key={sub.id}
              className="flex items-center justify-between gap-2 rounded-xl bg-[#11264c] p-2.5 border border-blue-900/60 text-xs"
            >
              <div className="flex-1 min-w-0">
                <input
                  type="text"
                  value={sub.name}
                  onChange={(e) => {
                    const val = e.target.value;
                    setSubjects(subjects.map((s) => (s.id === sub.id ? { ...s, name: val } : s)));
                  }}
                  className="w-full bg-transparent font-bold text-white focus:outline-none truncate"
                />
              </div>

              {/* Credit Selector */}
              <div className="flex items-center gap-1 shrink-0">
                <span className="text-[10px] text-slate-400 font-bold">Credit:</span>
                <select
                  value={sub.credit}
                  onChange={(e) => updateSubject(sub.id, 'credit', Number(e.target.value))}
                  className="rounded-lg bg-[#0a1832] px-2 py-1 text-xs font-bold text-cyan-300 border border-blue-800"
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
                <span className="text-[10px] text-slate-400 font-bold">Grade:</span>
                <select
                  value={sub.gradePoint}
                  onChange={(e) => updateSubject(sub.id, 'gradePoint', Number(e.target.value))}
                  className="rounded-lg bg-[#0a1832] px-2 py-1 text-xs font-bold text-emerald-300 border border-blue-800"
                >
                  <option value={10}>O (10)</option>
                  <option value={9}>A+ (9)</option>
                  <option value={8}>A (8)</option>
                  <option value={7}>B+ (7)</option>
                  <option value={6}>B (6)</option>
                  <option value={5}>C (5)</option>
                  <option value={0}>F (0)</option>
                </select>
              </div>

              <button
                onClick={() => removeSubject(sub.id)}
                className="text-slate-500 hover:text-red-400 p-1"
                title="Remove"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Add Subject Button */}
        <div className="mt-3 flex items-center justify-between gap-2">
          <button
            onClick={addSubject}
            className="flex items-center gap-1 rounded-xl border border-blue-700 bg-[#0e2752] px-3.5 py-2 text-xs font-bold text-cyan-300 hover:bg-[#13356e]"
          >
            <Plus className="h-4 w-4" /> Add Subject
          </button>

          <button
            onClick={onClose}
            className="rounded-xl bg-[#00f0aa] px-5 py-2 text-xs font-black text-[#052b22] hover:bg-[#00d898]"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
};
