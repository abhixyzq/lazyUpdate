'use client';

import React, { useState, useEffect } from 'react';
import { X, BookOpen, Check, Trash2 } from 'lucide-react';
import { SubjectItem } from '@/types/attendance';
import { SUBJECT_COLORS } from '@/utils/attendanceStorage';

interface SubjectFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (subject: SubjectItem) => void;
  initialSubject?: SubjectItem | null;
}

export const SubjectFormModal: React.FC<SubjectFormModalProps> = ({
  isOpen,
  onClose,
  onSave,
  initialSubject,
}) => {
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [color, setColor] = useState(SUBJECT_COLORS[0]);
  const [initialAttended, setInitialAttended] = useState(0);
  const [initialHeld, setInitialHeld] = useState(0);

  useEffect(() => {
    if (initialSubject) {
      setName(initialSubject.name);
      setCode(initialSubject.code || '');
      setColor(initialSubject.color || SUBJECT_COLORS[0]);
      setInitialAttended(initialSubject.initialAttended || 0);
      setInitialHeld(initialSubject.initialHeld || 0);
    } else {
      setName('');
      setCode('');
      setColor(SUBJECT_COLORS[Math.floor(Math.random() * SUBJECT_COLORS.length)]);
      setInitialAttended(0);
      setInitialHeld(0);
    }
  }, [initialSubject, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    onSave({
      id: initialSubject ? initialSubject.id : `sub-${Date.now()}`,
      name: name.trim(),
      code: code.trim() || undefined,
      color,
      initialAttended: Math.max(0, initialAttended),
      initialHeld: Math.max(initialAttended, initialHeld),
    });
    onClose();
  };

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

        <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
          <div
            className="flex h-10 w-10 items-center justify-center rounded-2xl text-white shadow-xs"
            style={{ backgroundColor: color }}
          >
            <BookOpen className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-base font-black text-slate-900">
              {initialSubject ? 'Edit Subject' : 'Add New Subject'}
            </h3>
            <p className="text-[11px] text-slate-500 font-medium">
              Customize subject details and baseline counts
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-4 space-y-3.5">
          <div>
            <label className="text-[11px] font-black uppercase text-slate-700 block mb-1">
              Subject Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Major: Classical Mechanics / Physics Lab"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 text-xs font-bold text-slate-900 focus:bg-white focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="text-[11px] font-black uppercase text-slate-700 block mb-1">
              Paper Code (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g. MJC-1, MIC-1, AEC-1"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 text-xs font-bold text-slate-900 focus:bg-white focus:border-blue-500 focus:outline-none"
            />
          </div>

          {/* Color Picker */}
          <div>
            <label className="text-[11px] font-black uppercase text-slate-700 block mb-1">
              Color Tag
            </label>
            <div className="flex items-center gap-2">
              {SUBJECT_COLORS.map((c) => (
                <button
                  type="button"
                  key={c}
                  onClick={() => setColor(c)}
                  className={`h-7 w-7 rounded-full transition flex items-center justify-center ${
                    color === c ? 'ring-2 ring-offset-2 ring-slate-900' : 'hover:scale-105'
                  }`}
                  style={{ backgroundColor: c }}
                >
                  {color === c && <Check className="h-3.5 w-3.5 text-white" />}
                </button>
              ))}
            </div>
          </div>

          {/* Baseline Mid-Semester Counts */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-3 space-y-2">
            <div>
              <span className="text-[11px] font-black text-slate-900 block">
                Starting Baseline (Optional)
              </span>
              <span className="text-[10px] text-slate-500 font-medium">
                Fill this only if you started tracking mid-semester
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <div>
                <label className="text-[10px] font-bold text-slate-600 block mb-1">
                  Classes Attended
                </label>
                <input
                  type="number"
                  min="0"
                  value={initialAttended}
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    setInitialAttended(val);
                    if (val > initialHeld) setInitialHeld(val);
                  }}
                  className="w-full rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-xs font-bold text-slate-900 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-[10px] font-bold text-slate-600 block mb-1">
                  Total Held So Far
                </label>
                <input
                  type="number"
                  min={initialAttended}
                  value={initialHeld}
                  onChange={(e) => setInitialHeld(Number(e.target.value))}
                  className="w-full rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-xs font-bold text-slate-900 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="pt-2 flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 rounded-xl border border-slate-200 py-2 text-xs font-bold text-slate-600 hover:bg-slate-50 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 rounded-xl bg-blue-600 py-2 text-xs font-black text-white hover:bg-blue-700 shadow-xs active:scale-95 transition"
            >
              {initialSubject ? 'Update Subject' : 'Add Subject'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
