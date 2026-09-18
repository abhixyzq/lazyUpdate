'use client';

import React, { useState } from 'react';
import {
  X,
  BookOpen,
  GraduationCap,
  Plus,
  Trash2,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  RefreshCw,
} from 'lucide-react';
import {
  COURSE_PRESETS,
  SUBJECT_COLORS,
  getDefaultSubjects,
} from '@/utils/attendanceStorage';
import { SubjectItem, AttendanceProfile } from '@/types/attendance';

interface AttendanceSetupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (profile: {
    courseName: string;
    semester: number;
    targetPercentage: number;
    subjects: SubjectItem[];
  }) => void;
  initialProfile?: AttendanceProfile | null;
}

export const AttendanceSetupModal: React.FC<AttendanceSetupModalProps> = ({
  isOpen,
  onClose,
  onSave,
  initialProfile,
}) => {
  const [selectedCourseId, setSelectedCourseId] = useState<string>(() => {
    if (!initialProfile) return 'bsc-physics';
    const found = COURSE_PRESETS.find((c) => c.name === initialProfile.courseName);
    return found ? found.id : 'custom';
  });

  const [customCourseName, setCustomCourseName] = useState<string>(() => {
    return initialProfile?.courseName || '';
  });

  const [semester, setSemester] = useState<number>(() => {
    return initialProfile?.semester || 1;
  });

  const [targetPercentage, setTargetPercentage] = useState<number>(() => {
    return initialProfile?.targetPercentage || 75;
  });

  const [subjects, setSubjects] = useState<SubjectItem[]>(() => {
    if (initialProfile && initialProfile.subjects.length > 0) {
      return initialProfile.subjects;
    }
    return getDefaultSubjects('B.Sc Physics', 1);
  });

  const [newSubjectName, setNewSubjectName] = useState('');
  const [newSubjectCode, setNewSubjectCode] = useState('');

  if (!isOpen) return null;

  const handleCourseChange = (courseId: string) => {
    setSelectedCourseId(courseId);
    if (courseId !== 'custom') {
      const preset = COURSE_PRESETS.find((c) => c.id === courseId);
      if (preset) {
        setCustomCourseName(preset.name);
        const defaults = getDefaultSubjects(preset.name, semester);
        setSubjects(defaults);
      }
    } else {
      setCustomCourseName('');
    }
  };

  const handleSemesterChange = (newSem: number) => {
    setSemester(newSem);
    const activeCourseName =
      selectedCourseId === 'custom'
        ? customCourseName || 'Custom Course'
        : COURSE_PRESETS.find((c) => c.id === selectedCourseId)?.name || 'General';
    const defaults = getDefaultSubjects(activeCourseName, newSem);
    setSubjects(defaults);
  };

  const handleAddSubject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSubjectName.trim()) return;

    const newSub: SubjectItem = {
      id: `sub-${Date.now()}`,
      name: newSubjectName.trim(),
      code: newSubjectCode.trim() || undefined,
      color: SUBJECT_COLORS[subjects.length % SUBJECT_COLORS.length],
      initialAttended: 0,
      initialHeld: 0,
    };

    setSubjects([...subjects, newSub]);
    setNewSubjectName('');
    setNewSubjectCode('');
  };

  const handleRemoveSubject = (id: string) => {
    setSubjects(subjects.filter((s) => s.id !== id));
  };

  const handleSubjectNameChange = (id: string, name: string) => {
    setSubjects(subjects.map((s) => (s.id === id ? { ...s, name } : s)));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalCourseName =
      selectedCourseId === 'custom'
        ? customCourseName.trim() || 'Custom Course'
        : COURSE_PRESETS.find((c) => c.id === selectedCourseId)?.name || 'Course';

    if (subjects.length === 0) {
      alert('Please add at least one subject to track attendance.');
      return;
    }

    onSave({
      courseName: finalCourseName,
      semester,
      targetPercentage,
      subjects,
    });
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-150 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 shadow-2xl text-slate-900 my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 border border-blue-200">
              <GraduationCap className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-base font-black text-slate-900">
                {initialProfile ? 'Edit Course & Subjects' : 'Attendance Setup'}
              </h3>
              <p className="text-[11px] text-slate-500 font-medium">
                Configure your course, semester & subjects
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto space-y-4 pt-4 pr-1">
          {/* Step 1: Select Course */}
          <div className="space-y-1.5">
            <label className="text-xs font-black uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
              <BookOpen className="h-3.5 w-3.5 text-blue-600" />
              1. Select Course / Program
            </label>
            <select
              value={selectedCourseId}
              onChange={(e) => handleCourseChange(e.target.value)}
              className="w-full rounded-2xl border border-slate-300 bg-slate-50/80 px-3.5 py-2.5 text-xs font-bold text-slate-900 focus:bg-white focus:border-blue-500 focus:outline-none transition shadow-xs"
            >
              <optgroup label="Popular Patna University Courses">
                {COURSE_PRESETS.filter((c) => c.id !== 'custom').map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name} ({c.stream})
                  </option>
                ))}
              </optgroup>
              <option value="custom">✍️ Other / Custom Course Name...</option>
            </select>

            {selectedCourseId === 'custom' && (
              <input
                type="text"
                placeholder="Enter your course name (e.g. B.Tech CSE, MCA, B.Com)"
                value={customCourseName}
                onChange={(e) => setCustomCourseName(e.target.value)}
                required
                className="mt-2 w-full rounded-2xl border border-blue-300 bg-blue-50/40 px-3.5 py-2 text-xs font-bold text-slate-900 focus:bg-white focus:border-blue-500 focus:outline-none transition"
              />
            )}
          </div>

          {/* Step 2: Semester Selection */}
          <div className="space-y-1.5">
            <label className="text-xs font-black uppercase tracking-wider text-slate-700">
              2. Select Semester
            </label>
            <div className="grid grid-cols-4 sm:grid-cols-8 gap-1.5">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                <button
                  type="button"
                  key={sem}
                  onClick={() => handleSemesterChange(sem)}
                  className={`rounded-xl py-2 text-xs font-black transition border ${
                    semester === sem
                      ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  Sem {sem}
                </button>
              ))}
            </div>
          </div>

          {/* Target Percentage */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-black uppercase tracking-wider text-slate-700">
                Target Attendance Rule
              </label>
              <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-black text-emerald-800">
                PU Mandatory: 75%
              </span>
            </div>
            <div className="flex items-center gap-2">
              {[60, 70, 75, 80, 85].map((pct) => (
                <button
                  type="button"
                  key={pct}
                  onClick={() => setTargetPercentage(pct)}
                  className={`flex-1 rounded-xl py-1.5 text-xs font-black border transition ${
                    targetPercentage === pct
                      ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {pct}%
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Manage Subjects */}
          <div className="space-y-2 pt-2 border-t border-slate-100">
            <div className="flex items-center justify-between">
              <label className="text-xs font-black uppercase tracking-wider text-slate-700">
                3. Your Subjects ({subjects.length})
              </label>
              <span className="text-[10px] font-semibold text-slate-400">
                Edit, remove or add below
              </span>
            </div>

            {/* Subject items list */}
            <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
              {subjects.map((sub, idx) => (
                <div
                  key={sub.id}
                  className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50/70 p-2 shadow-2xs"
                >
                  <span
                    className="h-3 w-3 shrink-0 rounded-full"
                    style={{ backgroundColor: sub.color || SUBJECT_COLORS[idx % SUBJECT_COLORS.length] }}
                  />
                  <input
                    type="text"
                    value={sub.name}
                    onChange={(e) => handleSubjectNameChange(sub.id, e.target.value)}
                    className="flex-1 bg-transparent text-xs font-bold text-slate-900 focus:outline-none"
                  />
                  {sub.code && (
                    <span className="rounded bg-slate-200/80 px-1.5 py-0.5 text-[9px] font-bold text-slate-600">
                      {sub.code}
                    </span>
                  )}
                  <button
                    type="button"
                    onClick={() => handleRemoveSubject(sub.id)}
                    className="p-1 text-slate-400 hover:text-rose-600 transition"
                    title="Remove subject"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </div>
              ))}
            </div>

            {/* Add Custom Subject Form */}
            <div className="flex items-center gap-2 pt-1">
              <input
                type="text"
                placeholder="Add new subject / lab name..."
                value={newSubjectName}
                onChange={(e) => setNewSubjectName(e.target.value)}
                className="flex-1 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-900 focus:border-blue-500 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Code (optional)"
                value={newSubjectCode}
                onChange={(e) => setNewSubjectCode(e.target.value)}
                className="w-24 rounded-xl border border-slate-200 bg-white px-2 py-2 text-xs font-medium text-slate-900 focus:border-blue-500 focus:outline-none"
              />
              <button
                type="button"
                onClick={handleAddSubject}
                className="flex items-center gap-1 rounded-xl bg-slate-900 px-3 py-2 text-xs font-bold text-white hover:bg-slate-800 transition"
              >
                <Plus className="h-3.5 w-3.5" /> Add
              </button>
            </div>
          </div>

          {/* Bottom Save Action */}
          <div className="pt-3 border-t border-slate-100 flex items-center gap-2.5">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 rounded-2xl border border-slate-200 py-2.5 text-xs font-bold text-slate-600 hover:bg-slate-50 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-2 flex items-center justify-center gap-1.5 rounded-2xl bg-blue-600 py-2.5 text-xs font-black text-white hover:bg-blue-700 shadow-md shadow-blue-500/20 active:scale-95 transition"
            >
              <span>{initialProfile ? 'Save Changes' : 'Start Tracking Attendance'}</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
