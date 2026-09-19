'use client';

import React from 'react';
import { SubpageHeader } from '@/components/SubpageHeader';
import {
  ShieldAlert,
  ShieldCheck,
  Lock,
  EyeOff,
  FileText,
  Mail,
  ExternalLink,
  Info,
} from 'lucide-react';

export default function PrivacyAndDisclaimerPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 pb-28 sm:pb-16">
      {/* Header */}
      <SubpageHeader
        title="Privacy & Disclaimer"
        subtitle="Policies, Data Usage & Legal Disclaimer"
      />

      <main className="mx-auto max-w-xl px-3 pt-3 space-y-4">
        {/* Important Disclaimer Notice Card */}
        <div className="rounded-3xl border border-amber-200 bg-amber-50/70 p-4 sm:p-5 shadow-xs">
          <div className="flex items-center gap-2 text-amber-900 font-black text-sm mb-2">
            <ShieldAlert className="h-5 w-5 text-amber-600 shrink-0" />
            <span>Official University Disclaimer</span>
          </div>
          <p className="text-xs text-amber-950/90 leading-relaxed">
            <strong>Lazy PU</strong> is an independent, open-access educational companion platform developed by students to facilitate quick access to academic curricula and schedules.
          </p>
          <div className="mt-3 rounded-2xl bg-white/90 border border-amber-200/80 p-3 text-[11px] text-amber-900 space-y-1.5">
            <p>
              • <strong>Non-Affiliation:</strong> Lazy PU is NOT an official website of Patna University (PU) and is not affiliated with, endorsed by, or in any way associated with Patna University administration.
            </p>
            <p>
              • <strong>Information Authenticity:</strong> All syllabi, holiday lists, and circulars are aggregated from publicly available university notices and Raj Bhavan Bihar notifications. Students are advised to always cross-verify crucial examination dates with official notifications on{' '}
              <a
                href="https://pup.ac.in"
                target="_blank"
                rel="noreferrer"
                className="font-bold underline text-blue-700 inline-flex items-center gap-0.5"
              >
                pup.ac.in <ExternalLink className="h-2.5 w-2.5 inline" />
              </a>.
            </p>
          </div>
        </div>

        {/* Privacy Policy Card */}
        <div className="rounded-3xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-xs space-y-4">
          <div className="flex items-center gap-2 text-slate-900 font-black text-sm border-b border-slate-100 pb-3">
            <Lock className="h-5 w-5 text-blue-600 shrink-0" />
            <span>Privacy Policy</span>
          </div>

          <div className="space-y-3 text-xs text-slate-600 leading-relaxed">
            <div className="flex items-start gap-3 rounded-2xl bg-slate-50/80 border border-slate-200/80 p-3">
              <EyeOff className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-black text-slate-900 text-xs">No Personal Data Collection</h4>
                <p className="mt-0.5 text-[11px] text-slate-500">
                  Lazy PU does not require student registration, login, phone numbers, or passwords. We do not store or sell any personal student data.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-2xl bg-slate-50/80 border border-slate-200/80 p-3">
              <FileText className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-black text-slate-900 text-xs">Client-Side Calculators & Storage</h4>
                <p className="mt-0.5 text-[11px] text-slate-500">
                  Calculators (such as the 75% Attendance Planner and SGPA Grade Estimator) run entirely in your browser. Any calculations or saved marks remain strictly on your local device storage.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-2xl bg-slate-50/80 border border-slate-200/80 p-3">
              <ShieldCheck className="h-4 w-4 text-purple-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-black text-slate-900 text-xs">External Links & Third Parties</h4>
                <p className="mt-0.5 text-[11px] text-slate-500">
                  Our app contains direct links to official portals (such as pup.ac.in, UMIS, PMIS, NSP, UGC Anti-Ragging). We have no control over the privacy practices of external third-party domains.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-2xl bg-slate-50/80 border border-slate-200/80 p-3">
              <ShieldCheck className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-black text-slate-900 text-xs">Advertisements & Google AdMob</h4>
                <p className="mt-0.5 text-[11px] text-slate-500">
                  To keep this educational platform free for students, we use Google AdMob to display banner ads. Google AdMob may use device identifiers and cookies to serve ads in compliance with Google&apos;s advertising policies.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact & Queries Card */}
        <div className="rounded-3xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-xs space-y-3">
          <div className="flex items-center gap-2 text-slate-900 font-black text-sm">
            <Info className="h-5 w-5 text-blue-600 shrink-0" />
            <span>Questions or Content Corrections?</span>
          </div>
          <p className="text-xs text-slate-600">
            If you notice any outdated circular, syllabus error, or have questions regarding these terms, please contact our community support team:
          </p>
          <a
            href="mailto:support@lazyupdate.tech"
            className="flex items-center justify-center gap-2 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold py-2.5 px-4 text-xs transition shadow-xs"
          >
            <Mail className="h-4 w-4" /> support@lazyupdate.tech
          </a>
        </div>
      </main>
    </div>
  );
}
