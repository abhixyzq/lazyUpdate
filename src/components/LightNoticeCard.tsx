'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FileText, ChevronRight } from 'lucide-react';
import { getRemoteAppSetting } from '@/services/telemetryService';

export const LightNoticeCard: React.FC = () => {
  const [noticeSubtext, setNoticeSubtext] = useState('New circulars and important updates available.');

  useEffect(() => {
    getRemoteAppSetting('ticker', {
      enabled: true,
      text: 'New circulars and important updates available.',
    }).then((setting) => {
      if (setting && setting.text) {
        setNoticeSubtext(setting.text);
      }
    }).catch(() => {});
  }, []);

  return (
    <div className="mx-auto max-w-xl px-3 pt-3">
      <Link
        href="/notices"
        className="flex items-center justify-between gap-3 rounded-2xl border border-emerald-200/75 bg-gradient-to-r from-emerald-50/60 via-white/85 to-emerald-50/40 backdrop-blur-md p-3 sm:p-3.5 shadow-[0_3px_12px_-1px_rgba(16,185,129,0.07)] hover:border-emerald-400 hover:shadow-[0_6px_20px_-3px_rgba(16,185,129,0.15)] transition group"
      >
        <div className="flex items-center gap-3 min-w-0">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-700 border border-emerald-200/80 shadow-2xs group-hover:scale-105 group-hover:bg-emerald-600 group-hover:text-white transition">
            <FileText className="h-5 w-5 stroke-[1.9]" />
          </div>
          <div className="min-w-0">
            <h3 className="text-xs sm:text-sm font-semibold text-slate-900 group-hover:text-emerald-800 transition">
              Latest Notice
            </h3>
            <p className="text-[11px] text-slate-500 font-medium truncate mt-0.5">
              {noticeSubtext}
            </p>
          </div>
        </div>

        <ChevronRight className="h-4 w-4 text-emerald-400 group-hover:text-emerald-700 group-hover:translate-x-0.5 shrink-0 transition" />
      </Link>
    </div>
  );
};
