'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Megaphone, ArrowRight } from 'lucide-react';
import { getRemoteAppSetting } from '@/services/telemetryService';

export const StudentNoticeBanner: React.FC = () => {
  const [noticeText, setNoticeText] = useState(
    'UG CBCS Examination forms and university notifications are active on the Samarth portal.'
  );

  useEffect(() => {
    getRemoteAppSetting('ticker', {
      enabled: true,
      text: 'UG CBCS Examination forms and university notifications are active on the Samarth portal.',
    })
      .then((setting) => {
        if (setting && setting.text) {
          setNoticeText(setting.text);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <div className="mx-auto max-w-xl px-4 pt-4">
      <div className="rounded-2xl border border-slate-200/90 bg-white p-3.5 sm:p-4 shadow-2xs">
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-rose-500" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700">
              Latest University Circular
            </span>
          </div>

          <Link
            href="/notices"
            className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 transition flex items-center gap-1"
          >
            <span>Notice Board</span>
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>

        <Link
          href="/notices"
          className="group block transition"
        >
          <p className="text-xs sm:text-[13px] font-semibold text-slate-800 group-hover:text-emerald-800 transition leading-snug line-clamp-2">
            {noticeText}
          </p>
          <div className="mt-2 flex items-center gap-1.5 text-[11px] text-slate-500 group-hover:text-slate-800 font-medium">
            <Megaphone className="h-3.5 w-3.5 text-rose-600 stroke-[2]" />
            <span>Click to read full circular & download attachment</span>
          </div>
        </Link>
      </div>
    </div>
  );
};
