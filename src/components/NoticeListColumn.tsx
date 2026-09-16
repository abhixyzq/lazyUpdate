'use client';

import React from 'react';
import { PUNotice } from '@/types';
import {
  Calendar,
  Building2,
  Clock,
  ArrowUpRight,
  Sparkles,
  AlertCircle,
  FileCheck2,
  GraduationCap
} from 'lucide-react';

interface NoticeListColumnProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  accentColor: 'blue' | 'purple' | 'emerald';
  notices: PUNotice[];
  onSelectNotice: (notice: PUNotice) => void;
}

export const NoticeListColumn: React.FC<NoticeListColumnProps> = ({
  title,
  subtitle,
  icon,
  accentColor,
  notices,
  onSelectNotice,
}) => {
  const getHeaderAccent = () => {
    switch (accentColor) {
      case 'blue':
        return 'border-t-4 border-t-blue-600 bg-gradient-to-r from-blue-50/70 via-white to-transparent dark:from-blue-950/20 dark:via-slate-900 dark:to-slate-900';
      case 'purple':
        return 'border-t-4 border-t-purple-600 bg-gradient-to-r from-purple-50/70 via-white to-transparent dark:from-purple-950/20 dark:via-slate-900 dark:to-slate-900';
      case 'emerald':
        return 'border-t-4 border-t-emerald-600 bg-gradient-to-r from-emerald-50/70 via-white to-transparent dark:from-emerald-950/20 dark:via-slate-900 dark:to-slate-900';
    }
  };

  const getActionBadgeClass = (actionType: 'apply' | 'download' | 'result') => {
    switch (actionType) {
      case 'apply':
        return 'bg-blue-600 hover:bg-blue-700 text-white';
      case 'result':
        return 'bg-emerald-600 hover:bg-emerald-700 text-white';
      case 'download':
        return 'bg-green-600 hover:bg-green-700 text-white';
    }
  };

  return (
    <div className={`flex flex-col rounded-2xl border border-slate-200 bg-white shadow-xs dark:border-slate-800 dark:bg-slate-900 overflow-hidden ${getHeaderAccent()}`}>
      
      {/* Column Header */}
      <div className="flex items-center justify-between border-b border-slate-200/80 px-4 py-3 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 shadow-2xs">
            {icon}
          </div>
          <div>
            <h2 className="text-sm font-black tracking-tight text-slate-900 dark:text-white uppercase">
              {title}
            </h2>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 -mt-0.5">
              {subtitle}
            </p>
          </div>
        </div>

        <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-bold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
          {notices.length} Active
        </span>
      </div>

      {/* Alternating Rows List */}
      <div className="flex flex-col divide-y divide-slate-100 dark:divide-slate-800/60">
        {notices.length > 0 ? (
          notices.map((notice, index) => {
            const isEven = index % 2 === 0;
            const rowBg = isEven
              ? 'bg-white dark:bg-slate-900/90'
              : 'bg-slate-50/60 dark:bg-slate-800/40';

            return (
              <div
                key={notice.id}
                onClick={() => onSelectNotice(notice)}
                className={`group relative flex flex-col justify-between p-3.5 transition cursor-pointer hover:bg-blue-50/50 dark:hover:bg-blue-950/20 ${rowBg}`}
              >
                {/* Top Row: College & Timestamp */}
                <div className="flex items-center justify-between gap-2 text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-1 text-slate-700 dark:text-slate-300">
                    <Building2 className="h-3 w-3 text-blue-500" />
                    <span className="truncate max-w-[200px]">{notice.collegeName}</span>
                  </div>
                  <span className="text-[10px] text-slate-400 shrink-0">{notice.updatedAt}</span>
                </div>

                {/* Urgency Highlight in RED */}
                {notice.isUrgent && notice.urgentText && (
                  <div className="mt-1 flex items-center gap-1 text-[10px] font-bold text-red-600 dark:text-red-400 animate-pulse">
                    <AlertCircle className="h-3 w-3 shrink-0" />
                    <span>{notice.urgentText}</span>
                  </div>
                )}

                {/* Notice Title */}
                <h3 className="mt-1 text-xs sm:text-sm font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                  {notice.title}
                </h3>

                {/* Course Pill */}
                {notice.course && (
                  <div className="mt-1 flex items-center gap-1 text-[11px] text-slate-600 dark:text-slate-300">
                    <GraduationCap className="h-3 w-3 text-slate-400" />
                    <span className="truncate font-medium">{notice.course}</span>
                  </div>
                )}

                {/* Bottom Bar: Deadline in Red + Action Badge */}
                <div className="mt-2.5 flex items-center justify-between gap-2 border-t border-dashed border-slate-200/80 pt-2 dark:border-slate-800/60">
                  <div className="flex items-center gap-1 text-[11px]">
                    <Calendar className={`h-3 w-3 ${notice.isUrgent ? 'text-red-500' : 'text-slate-400'}`} />
                    <span className="text-slate-500 dark:text-slate-400">Date:</span>
                    <span
                      className={`font-bold ${
                        notice.isUrgent
                          ? 'text-red-600 dark:text-red-400 underline decoration-red-400/50'
                          : 'text-slate-800 dark:text-slate-200'
                      }`}
                    >
                      {notice.deadline}
                    </span>
                  </div>

                  <a
                    href={notice.actionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className={`inline-flex items-center gap-1 rounded-lg px-2.5 py-1 text-xs font-bold shadow-2xs transition active:scale-95 ${getActionBadgeClass(
                      notice.actionType
                    )}`}
                  >
                    <span>{notice.actionLabel}</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                </div>
              </div>
            );
          })
        ) : (
          <div className="p-8 text-center text-xs text-slate-500">
            No notices found for the selected filter.
          </div>
        )}
      </div>

      {/* Column Footer */}
      <div className="border-t border-slate-100 bg-slate-50/50 p-2 text-center text-[10px] font-semibold text-slate-500 dark:border-slate-800/60 dark:bg-slate-900/50 dark:text-slate-400">
        Direct official PU UMIS Server links
      </div>

    </div>
  );
};
