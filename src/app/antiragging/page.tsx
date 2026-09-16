'use client';

import React from 'react';
import { SubpageHeader } from '@/components/SubpageHeader';
import { ShieldAlert, PhoneCall, ExternalLink, ShieldCheck, AlertCircle } from 'lucide-react';

export default function AntiRaggingPage() {
  return (
    <div className="min-h-screen bg-transparent text-white pb-12">
      <SubpageHeader
        title="Anti-Ragging & Helpline"
        badge="ZERO TOLERANCE"
        subtitle="24x7 UGC Toll-Free Helpline, Undertaking & PU Proctorial Board"
      />

      <main className="mx-auto max-w-xl px-3 pt-4 space-y-4">
        
        {/* Urgent Helpline Banner */}
        <div className="rounded-3xl border border-rose-500/50 bg-gradient-to-r from-[#2b0808] to-[#1a0505] p-5 shadow-2xl text-center space-y-3">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-500/20 text-rose-400 border border-rose-500/40">
            <ShieldAlert className="h-6 w-6" />
          </div>

          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-rose-400">
              NATIONAL ANTI-RAGGING 24x7 HELPLINE
            </span>
            <div className="text-2xl sm:text-3xl font-black text-white mt-1">
              1800-180-5522
            </div>
            <span className="text-xs text-slate-400">Toll-Free • Confidential • 24x7 All India</span>
          </div>

          <a
            href="tel:18001805522"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-rose-600 py-2.5 px-6 text-xs sm:text-sm font-black text-white hover:bg-rose-500 transition shadow-lg active:scale-95"
          >
            <PhoneCall className="h-4 w-4" /> Call National Helpline Now
          </a>
        </div>

        {/* Mandatory Affidavit Card */}
        <div className="rounded-3xl border border-blue-900/80 bg-[#091a36] p-4 sm:p-5 shadow-xl space-y-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-cyan-400" />
            <h3 className="text-sm sm:text-base font-black text-white">
              Mandatory Online Anti-Ragging Affidavit
            </h3>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            As per Supreme Court & UGC regulations, every student enrolled in Patna University (UG & PG) must submit an online anti-ragging undertaking each academic year.
          </p>

          <div className="rounded-2xl border border-blue-900/60 bg-[#051326] p-3 text-xs space-y-1 text-slate-400">
            <div>• Patna University AISHE Code: <b>U-0072</b></div>
            <div>• Submission takes less than 2 minutes</div>
            <div>• Instant Reference Number & undertaking PDF issued</div>
          </div>

          <a
            href="https://antiragging.in"
            target="_blank"
            rel="noreferrer"
            className="w-full flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 py-2.5 px-4 text-xs font-black text-white hover:from-blue-500 hover:to-cyan-500 transition shadow-md"
          >
            <ExternalLink className="h-4 w-4" /> Fill UGC Affidavit on antiragging.in
          </a>
        </div>

        {/* Patna University Proctorial Board Contacts */}
        <div className="rounded-3xl border border-blue-900/80 bg-[#091a36] p-4 sm:p-5 shadow-xl space-y-3">
          <h3 className="text-xs sm:text-sm font-black text-[#fbbf24] uppercase tracking-wider">
            Patna University Proctorial Board
          </h3>

          <div className="space-y-2 text-xs">
            <div className="rounded-2xl border border-blue-900/60 bg-[#07162d] p-3 space-y-1">
              <div className="text-xs font-black text-white">Office of the Chief Proctor</div>
              <div className="text-slate-400">Patna University Central Office, Ashok Rajpath, Patna - 800005</div>
              <div className="text-cyan-300 font-bold pt-1">Email: proctor@pup.ac.in</div>
            </div>

            <div className="rounded-2xl border border-blue-900/60 bg-[#07162d] p-3 space-y-1">
              <div className="text-xs font-black text-white">Patna University Police Station</div>
              <div className="text-slate-400">Ashok Rajpath, Near Science College Gate, Patna</div>
              <div className="text-amber-300 font-bold pt-1">Emergency Dial: 112 / 0612-2370000</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
