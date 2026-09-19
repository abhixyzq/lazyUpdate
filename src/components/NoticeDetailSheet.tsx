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
        className="relative w-full max-w-2xl max-h-[85vh] sm:max-h-[90vh] overflow-y-auto rounded-t-3xl sm:rounded-2xl border border-slate-200 bg-white p-5 pb-28 sm:p-6 sm:pb-6 shadow-2xl text-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile Grab Bar */}
        <div className="mx-auto -mt-2 mb-3 h-1.5 w-12 rounded-full bg-slate-300 sm:hidden" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Category & College Pill */}
        <div className="flex items-center gap-2">
          <span className="rounded-md bg-blue-50 px-2 py-0.5 text-xs font-bold uppercase tracking-wide text-blue-700 border border-blue-200">
            {notice.category.toUpperCase()}
          </span>
          <span className="text-xs font-bold text-slate-600 flex items-center gap-1">
            <Building2 className="h-3.5 w-3.5 text-blue-600" />
            {notice.collegeName}
          </span>
        </div>

        {/* Urgency Alert if applicable */}
        {notice.isUrgent && notice.urgentText && (
          <div className="mt-3 flex items-center gap-2 rounded-xl bg-rose-50 p-2.5 text-xs font-bold text-rose-700 border border-rose-200">
            <AlertTriangle className="h-4 w-4 shrink-0 text-rose-600" />
            <span>{notice.urgentText}</span>
          </div>
        )}

        {/* Notice Title */}
        <h2 className="mt-2 text-base sm:text-lg font-black text-slate-900 leading-snug">
          {notice.title}
        </h2>

        {/* Meta Box */}
        <div className="mt-3.5 grid grid-cols-1 sm:grid-cols-2 gap-2 rounded-xl border border-slate-200/80 bg-slate-50/80 p-3 text-xs">
          {notice.course && (
            <div className="flex items-start gap-2">
              <GraduationCap className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <span className="text-slate-500 block font-medium">Applicable Course</span>
                <span className="font-bold text-slate-900">{notice.course}</span>
              </div>
            </div>
          )}

          {notice.session && (
            <div className="flex items-start gap-2">
              <Clock className="h-4 w-4 text-purple-600 shrink-0 mt-0.5" />
              <div>
                <span className="text-slate-500 block font-medium">Academic Session</span>
                <span className="font-bold text-slate-900">{notice.session}</span>
              </div>
            </div>
          )}

          <div className="flex items-start gap-2 sm:col-span-2">
            <Calendar className="h-4 w-4 text-rose-600 shrink-0 mt-0.5" />
            <div>
              <span className="text-slate-500 block font-medium">Important Deadline / Schedule</span>
              <span className="font-bold text-rose-600">{notice.deadline}</span>
            </div>
          </div>
        </div>

        {/* Description */}
        {notice.description && (
          <div className="mt-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Notice Summary
            </h4>
            <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50 p-2.5 rounded-xl border border-slate-200">
              {notice.description}
            </p>
          </div>
        )}

        {/* Important Dates Table */}
        {notice.importantDates && notice.importantDates.length > 0 && (
          <div className="mt-3.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
              Dates & Schedule Matrix
            </h4>
            <div className="overflow-hidden rounded-xl border border-slate-200">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-100 font-bold text-slate-700">
                  <tr>
                    <th className="px-3 py-2">Event / Milestone</th>
                    <th className="px-3 py-2 text-right">Date / Window</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {notice.importantDates.map((d, i) => (
                    <tr
                      key={i}
                      className={d.isHighlight ? 'bg-amber-50/80' : 'bg-white'}
                    >
                      <td className="px-3 py-2 font-medium text-slate-800">
                        {d.label}
                      </td>
                      <td className={`px-3 py-2 text-right font-bold ${d.isHighlight ? 'text-rose-600' : 'text-slate-700'}`}>
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
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 underline"
            >
              <FileDown className="h-3.5 w-3.5" />
              Download Official PU Circular PDF
            </a>
          </div>
        )}

        {/* Bottom Actions */}
        <div className="mt-5 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 border-t border-slate-200 pt-3.5">
          
          <button
            onClick={handleShareWhatsApp}
            className="flex items-center justify-center gap-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white shadow-xs active:scale-95 transition"
          >
            <Share2 className="h-4 w-4" />
            <span>Share to Batch WhatsApp Group</span>
          </button>

          <a
            href={notice.actionUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl bg-slate-900 hover:bg-slate-800 px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-xs active:scale-95 transition"
          >
            <span>{notice.actionLabel}</span>
            <ExternalLink className="h-4 w-4" />
          </a>

        </div>

      </div>
    </div>
  );
};
