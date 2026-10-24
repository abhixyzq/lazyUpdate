'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Bell, ChevronRight } from 'lucide-react';
import { getRemoteAppSetting } from '@/services/telemetryService';

export const LiveNoticePill: React.FC = () => {
  const [noticeText, setNoticeText] = useState('New examination routines & circulars available.');

  useEffect(() => {
    getRemoteAppSetting('ticker', {
      enabled: true,
      text: 'New examination routines & circulars available.',
    })
      .then((setting) => {
        if (setting && setting.text) {
          setNoticeText(setting.text);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <div className="mx-auto max-w-xl px-4 pt-2.5">
      <Link
        href="/notices"
        className="flex items-center justify-between gap-2.5 rounded-xl border border-rose-200/80 bg-rose-50/50 px-3 py-2 shadow-2xs hover:border-rose-300 hover:bg-rose-50 transition group cursor-pointer"
      >
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="relative flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-rose-100 text-rose-600">
            <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500" />
            </span>
            <Bell className="h-3.5 w-3.5 stroke-[2.2]" />
          </div>

          <div className="flex items-center gap-2 min-w-0">
            <span className="rounded bg-rose-600 px-1.5 py-0.5 text-[9px] font-black uppercase tracking-wider text-white shrink-0">
              Notice
            </span>
            <p className="text-xs font-semibold text-slate-800 group-hover:text-rose-700 transition truncate">
              {noticeText}
            </p>
          </div>
        </div>

        <ChevronRight className="h-4 w-4 text-slate-400 group-hover:text-rose-600 group-hover:translate-x-0.5 transition shrink-0" />
      </Link>
    </div>
  );
};
