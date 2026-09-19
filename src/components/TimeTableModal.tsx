'use client';

import React from 'react';
import { X, Calendar } from 'lucide-react';
import { StudentTimeTableBuilder } from './timetable/StudentTimeTableBuilder';

interface TimeTableModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TimeTableModal: React.FC<TimeTableModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl rounded-3xl border border-slate-200 bg-white p-4 sm:p-6 shadow-2xl text-slate-900 max-h-[92vh] overflow-y-auto flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute right-4 top-4 rounded-full p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-800 transition z-10"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Title Header */}
        <div className="flex items-center gap-3 pr-8 pb-3 border-b border-slate-100 mb-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 border border-blue-200">
            <Calendar className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-base font-black text-slate-900">Class Time Table</h3>
            <p className="text-[11px] text-slate-500 font-medium">
              Weekly lecture routine & schedule
            </p>
          </div>
        </div>

        {/* Clean Student Time Table Builder */}
        <div className="flex-1 overflow-y-auto">
          <StudentTimeTableBuilder />
        </div>

        {/* Footer */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="rounded-xl border border-slate-200 bg-slate-100 px-5 py-2 text-xs font-bold text-slate-700 hover:bg-slate-200 transition"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
