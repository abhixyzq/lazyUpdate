'use client';

import React from 'react';
import { PUNotice } from '@/types';
import {
  X,
  Building2,
  Calendar,
  Clock,
  ExternalLink,
  Share2,
  AlertTriangle,
  GraduationCap,
  FileCheck,
  CheckCircle2,
  FileDown
} from 'lucide-react';

interface NoticeDetailSheetProps {
  notice: PUNotice | null;
  onClose: () => void;
}

export const NoticeDetailSheet: React.FC<NoticeDetailSheetProps> = ({
  notice,
  onClose,
}) => {
  if (!notice) return null;

  const handleShareWhatsApp = () => {
    const text = `📢 *${notice.title}*\n🏛️ College: ${notice.collegeName}\n🎓 Course: ${notice.course || 'All Courses'}\n⏰ Important Date: ${notice.deadline}\n🔗 Direct Link: ${notice.actionUrl}\n\n👉 Patna University Updates on LazyUpdate.tech/pu`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/65 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[85vh] sm:max-h-[90vh] overflow-y-auto rounded-t-3xl sm:rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-2xl dark:border-slate-800 dark:bg-slate-900 dark:text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile Grab Bar */}
        <div className="mx-auto -mt-2 mb-3 h-1.5 w-12 rounded-full bg-slate-300 dark:bg-slate-700 sm:hidden" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-200 transition"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Category & College Pill */}
        <div className="flex items-center gap-2">
          <span className="rounded bg-blue-100 px-2 py-0.5 text-xs font-extrabold uppercase tracking-wide text-blue-700 dark:bg-blue-950/80 dark:text-blue-300">
            {notice.category.toUpperCase()}
          </span>
          <span className="text-xs font-bold text-slate-600 dark:text-slate-300 flex items-center gap-1">
            <Building2 className="h-3.5 w-3.5 text-blue-500" />
            {notice.collegeName}
          </span>
        </div>

        {/* Urgency Alert if applicable */}
        {notice.isUrgent && notice.urgentText && (
          <div className="mt-3 flex items-center gap-2 rounded-xl bg-red-50 p-2.5 text-xs font-bold text-red-700 dark:bg-red-950/40 dark:text-red-300 border border-red-200 dark:border-red-900/40">
            <AlertTriangle className="h-4 w-4 shrink-0 text-red-600" />
            <span>{notice.urgentText}</span>
          </div>
        )}

        {/* Notice Title */}
        <h2 className="mt-2 text-base sm:text-lg font-black text-slate-900 dark:text-white leading-snug">
          {notice.title}
        </h2>

        {/* Meta Box */}
        <div className="mt-3.5 grid grid-cols-1 sm:grid-cols-2 gap-2 rounded-xl border border-slate-100 bg-slate-50/80 p-3 dark:border-slate-800/80 dark:bg-slate-800/40 text-xs">
          {notice.course && (
            <div className="flex items-start gap-2">
              <GraduationCap className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <span className="text-slate-400 block font-medium">Applicable Course</span>
                <span className="font-bold text-slate-900 dark:text-white">{notice.course}</span>
              </div>
            </div>
          )}

          {notice.session && (
            <div className="flex items-start gap-2">
              <Clock className="h-4 w-4 text-purple-600 shrink-0 mt-0.5" />
              <div>
                <span className="text-slate-400 block font-medium">Academic Session</span>
                <span className="font-bold text-slate-900 dark:text-white">{notice.session}</span>
              </div>
            </div>
          )}

          <div className="flex items-start gap-2 sm:col-span-2">
            <Calendar className="h-4 w-4 text-red-600 shrink-0 mt-0.5" />
            <div>
              <span className="text-slate-400 block font-medium">Important Deadline / Schedule</span>
              <span className="font-bold text-red-600 dark:text-red-400">{notice.deadline}</span>
            </div>
          </div>
        </div>

        {/* Description */}
        {notice.description && (
          <div className="mt-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Notice Summary
            </h4>
            <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed bg-white dark:bg-slate-900 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800">
              {notice.description}
            </p>
          </div>
        )}

        {/* Important Dates Table */}
        {notice.importantDates && notice.importantDates.length > 0 && (
          <div className="mt-3.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
              Dates & Schedule Matrix
            </h4>
            <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-100 dark:bg-slate-800 font-bold text-slate-700 dark:text-slate-300">
                  <tr>
                    <th className="px-3 py-2">Event / Milestone</th>
                    <th className="px-3 py-2 text-right">Date / Window</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80">
                  {notice.importantDates.map((d, i) => (
                    <tr
                      key={i}
                      className={d.isHighlight ? 'bg-amber-50/80 dark:bg-amber-950/30' : 'bg-white dark:bg-slate-900'}
                    >
                      <td className="px-3 py-2 font-medium text-slate-800 dark:text-slate-200">
                        {d.label}
                      </td>
                      <td className={`px-3 py-2 text-right font-bold ${d.isHighlight ? 'text-red-600 dark:text-red-400' : 'text-slate-700 dark:text-slate-300'}`}>
                        {d.date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Official Notification PDF Link */}
        {notice.officialPdfUrl && (
          <div className="mt-3">
            <a
              href={notice.officialPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 dark:text-blue-400 underline"
            >
              <FileDown className="h-3.5 w-3.5" />
              Download Official PU Circular PDF
            </a>
          </div>
        )}

        {/* Bottom Actions */}
        <div className="mt-5 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 border-t border-slate-100 dark:border-slate-800 pt-3.5">
          
          <button
            onClick={handleShareWhatsApp}
            className="flex items-center justify-center gap-1.5 rounded-xl bg-[#25D366] px-4 py-2.5 text-xs font-bold text-white shadow-xs hover:bg-[#20ba59] active:scale-95 transition"
          >
            <Share2 className="h-4 w-4" />
            <span>Share to Batch WhatsApp Group</span>
          </button>

          <a
            href={notice.actionUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-xs sm:text-sm font-extrabold text-white shadow-md hover:bg-blue-700 active:scale-95 transition"
          >
            <span>{notice.actionLabel}</span>
            <ExternalLink className="h-4 w-4" />
          </a>

        </div>

      </div>
    </div>
  );
};
