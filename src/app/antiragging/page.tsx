'use client';

import React from 'react';
import { SubpageHeader } from '@/components/SubpageHeader';
import { ShieldAlert, PhoneCall, ExternalLink, ShieldCheck, AlertCircle } from 'lucide-react';

export default function AntiRaggingPage() {
  return (
    <div className="min-h-screen bg-transparent text-slate-900 pb-12">
      <SubpageHeader title="Anti-Ragging" />

      <main className="mx-auto max-w-xl px-3 pt-4 space-y-4">
        
        {/* Urgent Helpline Banner */}
        <div className="rounded-3xl border border-rose-200 bg-rose-50/80 p-5 shadow-xs text-center space-y-3">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-100 text-rose-600 border border-rose-200">
            <ShieldAlert className="h-6 w-6" />
          </div>

          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-rose-700">
              NATIONAL ANTI-RAGGING 24x7 HELPLINE
            </span>
            <div className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
              1800-180-5522
            </div>
            <span className="text-xs text-slate-500">Toll-Free • Confidential • 24x7 All India</span>
          </div>

          <a
            href="tel:18001805522"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-rose-600 py-2.5 px-6 text-xs sm:text-sm font-black text-white hover:bg-rose-700 transition shadow-sm active:scale-95"
          >
            <PhoneCall className="h-4 w-4" /> Call National Helpline Now
          </a>
        </div>

        {/* Mandatory Affidavit Card */}
        <div className="rounded-3xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-xs space-y-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-blue-600" />
            <h3 className="text-sm sm:text-base font-black text-slate-900">
              Mandatory Online Anti-Ragging Affidavit
            </h3>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed">
            As per Supreme Court & UGC regulations, every student enrolled in Patna University (UG & PG) must submit an online anti-ragging undertaking each academic year.
          </p>

          <div className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-3 text-xs space-y-1 text-slate-700">
            <div>• Patna University AISHE Code: <b>U-0072</b></div>
            <div>• Submission takes less than 2 minutes</div>
            <div>• Instant Reference Number & undertaking PDF issued</div>
          </div>

          <a
            href="https://antiragging.in"
            target="_blank"
            rel="noreferrer"
            className="w-full flex items-center justify-center gap-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 py-2.5 px-4 text-xs font-black text-white transition shadow-sm"
          >
            <ExternalLink className="h-4 w-4" /> Fill UGC Affidavit on antiragging.in
          </a>
        </div>

        {/* Patna University Proctorial Board Contacts */}
        <div className="rounded-3xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-xs space-y-3">
          <h3 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wider">
            Patna University Proctorial Board
          </h3>

          <div className="space-y-2 text-xs">
            <div className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-3 space-y-1">
              <div className="text-xs font-black text-slate-900">Office of the Chief Proctor</div>
              <div className="text-slate-500">Patna University Central Office, Ashok Rajpath, Patna - 800005</div>
              <div className="text-blue-600 font-bold pt-1">Email: proctor@pup.ac.in</div>
            </div>

            <div className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-3 space-y-1">
              <div className="text-xs font-black text-slate-900">Patna University Police Station</div>
              <div className="text-slate-500">Ashok Rajpath, Near Science College Gate, Patna</div>
              <div className="text-rose-600 font-bold pt-1">Emergency Dial: 112 / 0612-2370000</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
