'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Bell, ChevronRight } from 'lucide-react';
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
        className="flex items-center justify-between gap-3 rounded-2xl border border-slate-200/90 bg-white p-3 sm:p-3.5 shadow-2xs hover:border-rose-400 hover:shadow-xs transition group cursor-pointer"
      >
        <div className="flex items-center gap-3 min-w-0">
          {/* High-visibility Rose Notification Icon */}
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-rose-600 border border-rose-200/80 shadow-2xs group-hover:scale-105 group-hover:bg-rose-600 group-hover:text-white transition">
            <Bell className="h-5 w-5 stroke-[2]" />
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-rose-500 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-wider text-rose-600">
                LATEST CIRCULAR
              </span>
            </div>
            <p className="text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-rose-700 transition truncate mt-0.5">
              {noticeSubtext}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1 text-slate-400 group-hover:text-rose-600 group-hover:translate-x-0.5 transition shrink-0">
          <span className="hidden sm:inline text-xs font-semibold">View</span>
          <ChevronRight className="h-4 w-4 stroke-[2.2]" />
        </div>
      </Link>
    </div>
  );
};
