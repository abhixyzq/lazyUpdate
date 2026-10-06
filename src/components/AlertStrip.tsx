'use client';

import React, { useEffect, useState } from 'react';
import { Bell, ArrowRight } from 'lucide-react';
import { getRemoteAppSetting } from '@/services/telemetryService';

interface AlertStripProps {
  onJoin?: () => void;
  href?: string;
  defaultText?: string;
}

export const AlertStrip: React.FC<AlertStripProps> = ({
  href = 'https://whatsapp.com/channel/0029VbDWOxc3LdQXxMfsBl2G',
  defaultText = 'PU UG Exam Forms & Semester Results Portal Live • Download Syllabi & PYQs',
}) => {
  const [tickerText, setTickerText] = useState(defaultText);
  const [isEnabled, setIsEnabled] = useState(true);

  useEffect(() => {
    getRemoteAppSetting('ticker', {
      enabled: true,
      text: defaultText,
    }).then((setting) => {
      if (setting) {
        if (setting.text) setTickerText(setting.text);
        if (setting.enabled !== undefined) setIsEnabled(setting.enabled);
      }
    });
  }, [defaultText]);

  if (!isEnabled || !tickerText.trim()) return null;

  return (
    <div className="mx-auto max-w-xl px-3 pt-3">
      <div className="flex items-center justify-between gap-2.5 rounded-2xl border border-slate-200/90 bg-white px-3.5 py-2.5 shadow-2xs text-xs">
        
        {/* Left: Live indicator + announcement */}
        <div className="flex items-center gap-2.5 min-w-0 flex-1">
          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-amber-600 border border-amber-200 shadow-2xs">
            <Bell className="h-3.5 w-3.5" />
          </div>
          <p className="truncate text-xs text-slate-800 font-semibold">
            {tickerText}
          </p>
        </div>

        {/* Right: Action link */}
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 inline-flex items-center gap-1 rounded-xl bg-slate-900 hover:bg-slate-800 px-3 py-1.5 font-bold text-[11px] text-white transition active:scale-95 shadow-2xs"
        >
          <span>Update</span>
          <ArrowRight className="h-3 w-3" />
        </a>

      </div>
    </div>
  );
};
