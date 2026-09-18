'use client';

import React from 'react';
import {
  CheckCircle2,
  AlertTriangle,
  Plus,
  Edit2,
  Trash2,
  MoreVertical,
} from 'lucide-react';
import { SubjectStats } from '@/types/attendance';

interface SubjectAttendanceCardProps {
  stats: SubjectStats;
  targetPercentage?: number;
  onQuickAdd: (subjectId: string, type: 'present' | 'absent') => void;
  onEdit: (stats: SubjectStats) => void;
  onDelete: (subjectId: string) => void;
}

export const SubjectAttendanceCard: React.FC<SubjectAttendanceCardProps> = ({
  stats,
  targetPercentage = 75,
  onQuickAdd,
  onEdit,
  onDelete,
}) => {
  const { subject, attended, held, percentage, isSafe, canBunk, mustAttend } = stats;

  return (
    <div className="rounded-2xl border border-slate-200/90 bg-white p-3.5 sm:p-4 shadow-2xs space-y-2.5">
      {/* Subject Header */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-start gap-2.5 min-w-0">
          <span
            className="mt-1 h-3.5 w-3.5 shrink-0 rounded-full"
            style={{ backgroundColor: subject.color || '#3b82f6' }}
          />
          <div className="min-w-0">
            <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight truncate">
              {subject.name}
            </h4>
            {subject.code && (
              <span className="inline-block mt-0.5 rounded bg-slate-100 px-1.5 py-0.2 text-[9px] font-bold text-slate-500 border border-slate-200">
                {subject.code}
              </span>
            )}
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1 shrink-0">
          <button
            type="button"
            onClick={() => onEdit(stats)}
            className="p-1 text-slate-400 hover:text-blue-600 transition"
            title="Edit Subject"
          >
            <Edit2 className="h-3.5 w-3.5" />
          </button>
          <button
            type="button"
            onClick={() => onDelete(subject.id)}
            className="p-1 text-slate-400 hover:text-rose-600 transition"
            title="Delete Subject"
          >
            <Trash2 className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* Progress Bar & Percentage */}
      <div className="space-y-1">
        <div className="flex items-center justify-between text-xs">
          <span className="font-black text-slate-900 text-sm">
            {percentage.toFixed(1)}%
          </span>
          <span className="font-semibold text-slate-500 text-[11px]">
            {attended} / {held} attended
          </span>
        </div>

        <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
          <div
            className={`h-full rounded-full transition-all duration-500 ${
              isSafe ? 'bg-emerald-500' : 'bg-rose-500'
            }`}
            style={{ width: `${Math.min(100, percentage)}%` }}
          />
        </div>
      </div>

      {/* Footer Info & Quick Log Buttons */}
      <div className="flex items-center justify-between pt-1 border-t border-slate-100/80">
        <div className="text-[10px] font-bold">
          {held === 0 ? (
            <span className="text-slate-400">No classes recorded yet</span>
          ) : isSafe ? (
            <span className="text-emerald-700">
              🎉 Can bunk {canBunk} {canBunk === 1 ? 'class' : 'classes'}
            </span>
          ) : (
            <span className="text-rose-700">
              ⚠️ Must attend {mustAttend} {mustAttend === 1 ? 'class' : 'classes'}
            </span>
          )}
        </div>

        {/* Quick Increment Buttons */}
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => onQuickAdd(subject.id, 'present')}
            className="flex items-center gap-0.5 rounded-lg bg-emerald-50 border border-emerald-200 px-2 py-1 text-[10px] font-black text-emerald-700 hover:bg-emerald-100 active:scale-95 transition"
            title="Quick mark +1 Present"
          >
            <Plus className="h-2.5 w-2.5" />
            <span>1 P</span>
          </button>

          <button
            type="button"
            onClick={() => onQuickAdd(subject.id, 'absent')}
            className="flex items-center gap-0.5 rounded-lg bg-rose-50 border border-rose-200 px-2 py-1 text-[10px] font-black text-rose-700 hover:bg-rose-100 active:scale-95 transition"
            title="Quick mark +1 Absent"
          >
            <Plus className="h-2.5 w-2.5" />
            <span>1 A</span>
          </button>
        </div>
      </div>
    </div>
  );
};
