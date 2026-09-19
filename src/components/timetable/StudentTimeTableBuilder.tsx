'use client';

import React, { useState, useEffect } from 'react';
import {
  Plus,
  Trash2,
  Edit2,
  RotateCcw,
  Clock,
  MapPin,
  User,
  CheckCircle2,
  X,
} from 'lucide-react';

export interface TimeTableSlot {
  id: string;
  day: 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat';
  subject: string;
  time: string;
  room?: string;
  teacher?: string;
  color?: string;
}

const DAYS: { key: TimeTableSlot['day']; label: string; full: string }[] = [
  { key: 'Mon', label: 'Mon', full: 'Monday' },
  { key: 'Tue', label: 'Tue', full: 'Tuesday' },
  { key: 'Wed', label: 'Wed', full: 'Wednesday' },
  { key: 'Thu', label: 'Thu', full: 'Thursday' },
  { key: 'Fri', label: 'Fri', full: 'Friday' },
  { key: 'Sat', label: 'Sat', full: 'Saturday' },
];

const SLOT_COLORS = [
  'bg-blue-50 border-blue-200 text-blue-900',
  'bg-emerald-50 border-emerald-200 text-emerald-900',
  'bg-amber-50 border-amber-200 text-amber-900',
  'bg-purple-50 border-purple-200 text-purple-900',
  'bg-rose-50 border-rose-200 text-rose-900',
  'bg-cyan-50 border-cyan-200 text-cyan-900',
];

const DEFAULT_TIMETABLE: TimeTableSlot[] = [];

const STORAGE_KEY = 'lazy_pu_student_custom_timetable_v1';

export function formatTime24to12(time24: string): string {
  if (!time24) return '';
  const [hStr, mStr] = time24.split(':');
  let h = parseInt(hStr, 10);
  const m = mStr || '00';
  const mer = h >= 12 ? 'PM' : 'AM';
  h = h % 12 || 12;
  return `${h.toString().padStart(2, '0')}:${m} ${mer}`;
}

export function parseTimeTo24(timeStr: string): { start: string; end: string } {
  if (!timeStr) return { start: '10:00', end: '11:00' };

  const parts = timeStr.split(/[-–—]|to/i).map((s) => s.trim());
  const parseOne = (str: string, fallbackH: number): string => {
    const m = str.match(/(\d{1,2})(?::(\d{2}))?\s*(am|pm)?/i);
    if (!m) return `${fallbackH.toString().padStart(2, '0')}:00`;
    let h = parseInt(m[1], 10);
    const min = m[2] || '00';
    const mer = (m[3] || '').toUpperCase();
    if (mer === 'PM' && h < 12) h += 12;
    if (mer === 'AM' && h === 12) h = 0;
    if (!mer) {
      const isPm = /pm/i.test(timeStr);
      if (isPm && h < 12 && (h < 8 || h === 12)) h += 12;
    }
    return `${h.toString().padStart(2, '0')}:${min}`;
  };

  const start = parts[0] ? parseOne(parts[0], 10) : '10:00';
  const end = parts[1] ? parseOne(parts[1], 11) : '11:00';
  return { start, end };
}

export const StudentTimeTableBuilder: React.FC = () => {
  const [slots, setSlots] = useState<TimeTableSlot[]>([]);
  const [selectedDay, setSelectedDay] = useState<TimeTableSlot['day']>('Mon');
  const [viewMode, setViewMode] = useState<'day' | 'table'>('table');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Modal for adding / editing a slot
  const [isSlotModalOpen, setIsSlotModalOpen] = useState(false);
  const [editingSlotId, setEditingSlotId] = useState<string | null>(null);

  // Form fields
  const [formDay, setFormDay] = useState<TimeTableSlot['day']>('Mon');
  const [formSubject, setFormSubject] = useState('');
  const [formStartTime, setFormStartTime] = useState('10:00');
  const [formEndTime, setFormEndTime] = useState('11:00');
  const [formTime, setFormTime] = useState('10:00 AM - 11:00 AM');
  const [formRoom, setFormRoom] = useState('');
  const [formTeacher, setFormTeacher] = useState('');

  // Load from localStorage or empty
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setSlots(parsed);
          return;
        }
      }
    } catch {
      // LocalStorage fallback
    }
    setSlots([]);
  }, []);

  // Today's day index
  useEffect(() => {
    const dayIndex = new Date().getDay(); // 0 is Sun, 1 is Mon...
    const map: Record<number, TimeTableSlot['day']> = {
      1: 'Mon',
      2: 'Tue',
      3: 'Wed',
      4: 'Thu',
      5: 'Fri',
      6: 'Sat',
    };
    if (map[dayIndex]) {
      setSelectedDay(map[dayIndex]);
    }
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const saveToStorage = (updated: TimeTableSlot[]) => {
    setSlots(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      showToast('Routine saved to device!');
    } catch {
      // Fallback
    }
  };

  const handleTimeChange = (start: string, end: string) => {
    setFormStartTime(start);
    setFormEndTime(end);
    if (start && end) {
      setFormTime(`${formatTime24to12(start)} - ${formatTime24to12(end)}`);
    } else if (start) {
      setFormTime(formatTime24to12(start));
    }
  };

  const handleOpenAddModal = (day: TimeTableSlot['day'] = selectedDay) => {
    setEditingSlotId(null);
    setFormDay(day);
    setFormSubject('');
    setFormStartTime('10:00');
    setFormEndTime('11:00');
    setFormTime('10:00 AM - 11:00 AM');
    setFormRoom('');
    setFormTeacher('');
    setIsSlotModalOpen(true);
  };

  const handleOpenEditModal = (slot: TimeTableSlot) => {
    setEditingSlotId(slot.id);
    setFormDay(slot.day);
    setFormSubject(slot.subject);
    const { start, end } = parseTimeTo24(slot.time);
    setFormStartTime(start);
    setFormEndTime(end);
    setFormTime(slot.time);
    setFormRoom(slot.room || '');
    setFormTeacher(slot.teacher || '');
    setIsSlotModalOpen(true);
  };

  const handleSaveSlot = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formSubject.trim() || !formTime.trim()) return;

    if (editingSlotId) {
      // Edit existing
      const updated = slots.map((s) => {
        if (s.id === editingSlotId) {
          return {
            ...s,
            day: formDay,
            subject: formSubject.trim(),
            time: formTime.trim(),
            room: formRoom.trim() || undefined,
            teacher: formTeacher.trim() || undefined,
          };
        }
        return s;
      });
      saveToStorage(updated);
    } else {
      // Create new
      const newSlot: TimeTableSlot = {
        id: `slot_${Date.now()}`,
        day: formDay,
        subject: formSubject.trim(),
        time: formTime.trim(),
        room: formRoom.trim() || undefined,
        teacher: formTeacher.trim() || undefined,
        color: SLOT_COLORS[slots.length % SLOT_COLORS.length],
      };
      saveToStorage([...slots, newSlot]);
    }

    setIsSlotModalOpen(false);
  };

  const handleDeleteSlot = (id: string) => {
    const updated = slots.filter((s) => s.id !== id);
    saveToStorage(updated);
  };

  const handleResetToDefault = () => {
    if (window.confirm('Clear all timetable classes?')) {
      saveToStorage([]);
    }
  };

  const daySlots = slots.filter((s) => s.day === selectedDay);

  return (
    <div className="space-y-3">
      {/* Header Toolbar */}
      <div className="flex items-center justify-between gap-2 flex-wrap bg-slate-50 border border-slate-200/90 rounded-2xl p-2.5">
        <div className="flex items-center gap-1.5 bg-white border border-slate-200 rounded-xl p-0.5">
          <button
            type="button"
            onClick={() => setViewMode('table')}
            className={`px-3 py-1.5 rounded-lg text-xs font-black transition ${
              viewMode === 'table'
                ? 'bg-blue-600 text-white shadow-2xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Full Table
          </button>
          <button
            type="button"
            onClick={() => setViewMode('day')}
            className={`px-3 py-1.5 rounded-lg text-xs font-black transition ${
              viewMode === 'day'
                ? 'bg-blue-600 text-white shadow-2xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Day Wise
          </button>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => handleOpenAddModal(selectedDay)}
            className="inline-flex items-center gap-1 rounded-xl bg-slate-900 px-3 py-1.5 text-xs font-black text-white hover:bg-slate-800 active:scale-95 transition shadow-2xs"
          >
            <Plus className="h-3.5 w-3.5" />
            <span>Add Class</span>
          </button>

          <button
            type="button"
            onClick={handleResetToDefault}
            title="Clear all classes"
            className="p-1.5 rounded-xl border border-slate-200 bg-white text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition"
          >
            <RotateCcw className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Toast */}
      {toastMessage && (
        <div className="rounded-xl bg-slate-900 text-white px-3.5 py-2 text-xs font-bold flex items-center justify-center gap-2 shadow-md animate-in fade-in slide-in-from-top-1 duration-150">
          <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* 4. Mode: FULL TABLE FORMAT (Linear Grid) */}
      {viewMode === 'table' && (
        <div className="space-y-3">
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-xs">
            <table className="w-full text-left border-collapse min-w-[520px]">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-[11px] font-black text-slate-700 uppercase tracking-wider">
                  <th className="py-2.5 px-3 w-16">Day</th>
                  <th className="py-2.5 px-3">Class Schedule / Periods</th>
                  <th className="py-2.5 px-3 w-12 text-right">Add</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs">
                {DAYS.map((d) => {
                  const currentDaySlots = slots.filter((s) => s.day === d.key);

                  return (
                    <tr key={d.key} className="hover:bg-slate-50/50 transition">
                      {/* Day Label Column */}
                      <td className="py-3 px-3 align-top font-black text-slate-900">
                        <span className="inline-block rounded-lg bg-slate-100 px-2 py-1 text-xs font-black border border-slate-200">
                          {d.label}
                        </span>
                      </td>

                      {/* Periods Flow */}
                      <td className="py-3 px-3">
                        {currentDaySlots.length > 0 ? (
                          <div className="flex flex-wrap gap-2">
                            {currentDaySlots.map((slot) => {
                              return (
                                <div
                                  key={slot.id}
                                  className={`group relative rounded-xl border p-2 text-xs transition shadow-2xs ${
                                    slot.color || 'bg-slate-50 border-slate-200 text-slate-900'
                                  } min-w-[160px] max-w-[230px]`}
                                >
                                  <div className="flex items-start justify-between gap-1">
                                    <span className="font-black leading-tight text-xs">
                                      {slot.subject}
                                    </span>
                                    <div className="flex items-center gap-0.5 opacity-80 group-hover:opacity-100 transition">
                                      <button
                                        type="button"
                                        onClick={() => handleOpenEditModal(slot)}
                                        className="p-0.5 hover:text-blue-700 transition"
                                        title="Edit Class"
                                      >
                                        <Edit2 className="h-3 w-3" />
                                      </button>
                                      <button
                                        type="button"
                                        onClick={() => handleDeleteSlot(slot.id)}
                                        className="p-0.5 hover:text-rose-700 transition"
                                        title="Delete Class"
                                      >
                                        <Trash2 className="h-3 w-3" />
                                      </button>
                                    </div>
                                  </div>

                                  <div className="mt-1 flex items-center gap-1 text-[10px] font-semibold opacity-90">
                                    <Clock className="h-3 w-3 shrink-0" />
                                    <span>{slot.time}</span>
                                  </div>

                                  {(slot.room || slot.teacher) && (
                                    <div className="mt-1 flex items-center gap-2 text-[10px] opacity-80">
                                      {slot.room && (
                                        <span className="flex items-center gap-0.5">
                                          <MapPin className="h-2.5 w-2.5" />
                                          <span>{slot.room}</span>
                                        </span>
                                      )}
                                      {slot.teacher && (
                                        <span className="flex items-center gap-0.5 truncate">
                                          <User className="h-2.5 w-2.5" />
                                          <span className="truncate">{slot.teacher}</span>
                                        </span>
                                      )}
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        ) : (
                          <span className="text-xs text-slate-400 italic">
                            No classes scheduled
                          </span>
                        )}
                      </td>

                      {/* Quick Add on Row */}
                      <td className="py-3 px-3 align-top text-right">
                        <button
                          type="button"
                          onClick={() => handleOpenAddModal(d.key)}
                          className="p-1 rounded-lg border border-slate-200 text-slate-400 hover:text-blue-600 hover:border-blue-300 transition"
                          title={`Add class for ${d.full}`}
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 5. Mode: DAY-WISE MOBILE VIEW */}
      {viewMode === 'day' && (
        <div className="space-y-3">
          {/* Day Pills Switcher */}
          <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {DAYS.map((d) => {
              const isSelected = selectedDay === d.key;
              const count = slots.filter((s) => s.day === d.key).length;

              return (
                <button
                  key={d.key}
                  type="button"
                  onClick={() => setSelectedDay(d.key)}
                  className={`flex items-center gap-1.5 whitespace-nowrap rounded-xl py-2 px-3 text-xs font-black transition shrink-0 ${
                    isSelected
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{d.label}</span>
                  <span
                    className={`rounded-full px-1.5 py-0.2 text-[9px] font-bold ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Selected Day Classes Cards */}
          <div className="space-y-2">
            {daySlots.length > 0 ? (
              daySlots.map((slot, idx) => {
                return (
                  <div
                    key={slot.id}
                    className={`flex items-start justify-between gap-3 rounded-2xl border p-3 shadow-2xs transition ${
                      slot.color || 'bg-white border-slate-200 text-slate-900'
                    }`}
                  >
                    <div className="min-w-0 flex-1 space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="rounded-md bg-white/70 border border-slate-200/60 px-1.5 py-0.5 text-[10px] font-black">
                          Period {idx + 1}
                        </span>
                        <h4 className="text-sm font-black truncate">{slot.subject}</h4>
                      </div>

                      <div className="flex items-center gap-3 text-xs font-semibold opacity-90 pt-0.5">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" />
                          <span>{slot.time}</span>
                        </span>
                        {slot.room && (
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3.5 w-3.5" />
                            <span>{slot.room}</span>
                          </span>
                        )}
                      </div>

                      {slot.teacher && (
                        <p className="text-[11px] font-medium opacity-80 flex items-center gap-1 pt-0.5">
                          <User className="h-3 w-3" />
                          <span>{slot.teacher}</span>
                        </p>
                      )}
                    </div>

                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={() => handleOpenEditModal(slot)}
                        className="rounded-lg border border-slate-200/80 bg-white/80 p-1.5 text-slate-600 hover:text-blue-600 hover:bg-white transition"
                        title="Edit slot"
                      >
                        <Edit2 className="h-3.5 w-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDeleteSlot(slot.id)}
                        className="rounded-lg border border-slate-200/80 bg-white/80 p-1.5 text-slate-600 hover:text-rose-600 hover:bg-white transition"
                        title="Delete slot"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50/50 p-6 text-center text-xs text-slate-500 space-y-2">
                <p>No classes added for {DAYS.find((d) => d.key === selectedDay)?.full}.</p>
                <button
                  type="button"
                  onClick={() => handleOpenAddModal(selectedDay)}
                  className="rounded-xl bg-slate-900 px-3.5 py-1.5 text-xs font-black text-white hover:bg-slate-800 transition"
                >
                  + Add First Class
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 6. Modal: Add / Edit Slot */}
      {isSlotModalOpen && (
        <div
          className="fixed inset-0 z-70 flex items-center justify-center p-3 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150"
          onClick={() => setIsSlotModalOpen(false)}
        >
          <div
            className="relative w-full max-w-sm rounded-3xl border border-slate-200 bg-white p-5 shadow-2xl text-slate-900"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsSlotModalOpen(false)}
              className="absolute right-3.5 top-3.5 rounded-full p-1 text-slate-400 hover:text-slate-700"
            >
              <X className="h-5 w-5" />
            </button>

            <h3 className="text-sm font-black text-slate-900 mb-3">
              {editingSlotId ? 'Edit Class Period' : 'Add Class Period'}
            </h3>

            <form onSubmit={handleSaveSlot} className="space-y-3 text-xs">
              {/* Day Selection */}
              <div>
                <label className="block font-bold text-slate-700 mb-1">Day</label>
                <div className="grid grid-cols-6 gap-1">
                  {DAYS.map((d) => (
                    <button
                      key={d.key}
                      type="button"
                      onClick={() => setFormDay(d.key)}
                      className={`py-1.5 rounded-lg text-center font-black text-xs transition border ${
                        formDay === d.key
                          ? 'bg-blue-600 text-white border-blue-600'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {d.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Subject / Paper Name *
                </label>
                <input
                  type="text"
                  required
                  value={formSubject}
                  onChange={(e) => setFormSubject(e.target.value)}
                  placeholder="e.g. Major MJC Physics / History"
                  className="w-full rounded-xl border border-slate-200 py-2 px-3 text-xs font-semibold focus:border-blue-500 outline-hidden"
                />
              </div>

              {/* Time */}
              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Time Slot *
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-600 mb-0.5">
                      Start Time
                    </label>
                    <input
                      type="time"
                      required
                      value={formStartTime}
                      onChange={(e) => handleTimeChange(e.target.value, formEndTime)}
                      className="w-full rounded-xl border border-slate-200 py-2 px-3 text-xs font-semibold focus:border-blue-500 outline-hidden bg-white text-slate-800"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-600 mb-0.5">
                      End Time
                    </label>
                    <input
                      type="time"
                      required
                      value={formEndTime}
                      onChange={(e) => handleTimeChange(formStartTime, e.target.value)}
                      className="w-full rounded-xl border border-slate-200 py-2 px-3 text-xs font-semibold focus:border-blue-500 outline-hidden bg-white text-slate-800"
                    />
                  </div>
                </div>
                {formTime && (
                  <p className="mt-1 text-[11px] font-bold text-slate-600">
                    Selected: {formTime}
                  </p>
                )}
              </div>

              {/* Room & Teacher */}
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Room No. (Opt)
                  </label>
                  <input
                    type="text"
                    value={formRoom}
                    onChange={(e) => setFormRoom(e.target.value)}
                    placeholder="e.g. Room 104"
                    className="w-full rounded-xl border border-slate-200 py-2 px-3 text-xs font-semibold focus:border-blue-500 outline-hidden"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Teacher (Opt)
                  </label>
                  <input
                    type="text"
                    value={formTeacher}
                    onChange={(e) => setFormTeacher(e.target.value)}
                    placeholder="e.g. Prof. Verma"
                    className="w-full rounded-xl border border-slate-200 py-2 px-3 text-xs font-semibold focus:border-blue-500 outline-hidden"
                  />
                </div>
              </div>

              {/* Buttons */}
              <div className="pt-2 flex gap-2">
                <button
                  type="button"
                  onClick={() => setIsSlotModalOpen(false)}
                  className="flex-1 rounded-xl border border-slate-200 py-2.5 font-bold text-slate-600 hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 rounded-xl bg-blue-600 hover:bg-blue-700 py-2.5 font-black text-white shadow-xs"
                >
                  {editingSlotId ? 'Update Slot' : 'Save Slot'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
