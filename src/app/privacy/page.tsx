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
  Bell,
  Cpu,
  UserCheck,
} from 'lucide-react';

export default function PrivacyAndDisclaimerPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 pb-28 sm:pb-16">
      {/* Header */}
      <SubpageHeader
        title="Privacy Policy & Terms"
        subtitle="Last Updated: September 2026 • Official Data Safety"
      />

      <main className="mx-auto max-w-xl px-3 pt-3 space-y-4">
        {/* Important Disclaimer Notice Card */}
        <div className="rounded-3xl border border-amber-200 bg-amber-50/70 p-4 sm:p-5 shadow-xs">
          <div className="flex items-center gap-2 text-amber-900 font-black text-sm mb-2">
            <ShieldAlert className="h-5 w-5 text-amber-600 shrink-0" />
            <span>Official University Non-Affiliation Disclaimer</span>
          </div>
          <p className="text-xs text-amber-950/90 leading-relaxed">
            <strong>Lazy PU</strong> is an independent, open-access academic utility and educational portal developed by student contributors to facilitate easy, fast access to university academic syllabi, examination notifications, and GPA calculators.
          </p>
          <div className="mt-3 rounded-2xl bg-white/90 border border-amber-200/80 p-3 text-[11px] text-amber-900 space-y-2">
            <p>
              • <strong>Non-Governmental & Non-Affiliation:</strong> Lazy PU is NOT an official app or website of Patna University (PU) and is not affiliated with, authorized, maintained, or endorsed by Patna University administration or any government agency.
            </p>
            <p>
              • <strong>Official Source of Information:</strong> All circulars, academic calendars, and course outlines are gathered from publicly accessible university notifications published on the official university portal at{' '}
              <a
                href="https://pup.ac.in"
                target="_blank"
                rel="noreferrer"
                className="font-bold underline text-blue-700 inline-flex items-center gap-0.5"
              >
                pup.ac.in <ExternalLink className="h-2.5 w-2.5 inline" />
              </a>{' '}
              and official Samarth eGov portal (pupadm.samarth.edu.in). Students must always consult official authorities for legal or official decisions.
            </p>
          </div>
        </div>

        {/* Privacy Policy Card */}
        <div className="rounded-3xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2 text-slate-900 font-black text-sm">
              <Lock className="h-5 w-5 text-blue-600 shrink-0" />
              <span>Privacy Policy</span>
            </div>
            <span className="text-[10px] font-bold text-slate-400">Effective: 2026</span>
          </div>

          <div className="space-y-3 text-xs text-slate-600 leading-relaxed">
            {/* 1. Personal Data */}
            <div className="flex items-start gap-3 rounded-2xl bg-slate-50/80 border border-slate-200/80 p-3.5">
              <EyeOff className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-black text-slate-900 text-xs">Zero Personal Data Collection</h4>
                <p className="mt-1 text-[11px] text-slate-500 leading-normal">
                  Lazy PU does not require user accounts, email registration, phone numbers, student roll numbers, or passwords. We do not collect, store, sell, or transmit any personally identifiable information (PII) to private or third-party servers.
                </p>
              </div>
            </div>

            {/* 2. Device Storage & Local Execution */}
            <div className="flex items-start gap-3 rounded-2xl bg-slate-50/80 border border-slate-200/80 p-3.5">
              <FileText className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-black text-slate-900 text-xs">Device-Only Local Storage</h4>
                <p className="mt-1 text-[11px] text-slate-500 leading-normal">
                  Student tools (including SGPA Calculator, 75% Attendance Planner, syllabus completed-topic checklists, and cached notice feeds) operate entirely client-side on your device. This data is stored solely in your device&apos;s local storage and is never uploaded anywhere.
                </p>
              </div>
            </div>

            {/* 3. Third-Party Services & Google AdMob */}
            <div className="flex items-start gap-3 rounded-2xl bg-slate-50/80 border border-slate-200/80 p-3.5">
              <Cpu className="h-4 w-4 text-indigo-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-black text-slate-900 text-xs">Third-Party Services & Google AdMob</h4>
                <p className="mt-1 text-[11px] text-slate-500 leading-normal">
                  To provide free open access to educational content, Lazy PU displays banner ads via <strong>Google AdMob</strong>. The AdMob SDK may collect anonymous device information, standard advertising identifiers (such as Google Advertising ID), and crash reports to deliver relevant ads and detect fraud, governed by{' '}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noreferrer"
                    className="font-bold underline text-blue-600 inline-flex items-center gap-0.5"
                  >
                    Google&apos;s Privacy Policy <ExternalLink className="h-2.5 w-2.5 inline" />
                  </a>.
                </p>
              </div>
            </div>

            {/* 4. App Permissions */}
            <div className="flex items-start gap-3 rounded-2xl bg-slate-50/80 border border-slate-200/80 p-3.5">
              <Bell className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-black text-slate-900 text-xs">App Permissions Explained</h4>
                <p className="mt-1 text-[11px] text-slate-500 leading-normal">
                  • <strong>Internet Access (INTERNET / ACCESS_NETWORK_STATE):</strong> Required to fetch authentic syllabus PDFs, real-time Samarth circulars, and display AdMob banners.<br />
                  • <strong>Notifications (POST_NOTIFICATIONS):</strong> Optional permission used solely to deliver alerts about urgent university circulars, admission deadlines, and exam schedules.<br />
                  • <strong>Exact Alarms (SCHEDULE_EXACT_ALARM):</strong> Used strictly for user-scheduled timetable reminders.
                </p>
              </div>
            </div>

            {/* 5. Children's Privacy */}
            <div className="flex items-start gap-3 rounded-2xl bg-slate-50/80 border border-slate-200/80 p-3.5">
              <UserCheck className="h-4 w-4 text-rose-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-black text-slate-900 text-xs">Children&apos;s Privacy (COPPA Compliance)</h4>
                <p className="mt-1 text-[11px] text-slate-500 leading-normal">
                  Our services are designed for college and university students (typically aged 16 and above). We do not knowingly collect information from children under 13.
                </p>
              </div>
            </div>

            {/* 6. External Links */}
            <div className="flex items-start gap-3 rounded-2xl bg-slate-50/80 border border-slate-200/80 p-3.5">
              <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-black text-slate-900 text-xs">External Links Security</h4>
                <p className="mt-1 text-[11px] text-slate-500 leading-normal">
                  Our app contains direct links to official government and academic portals (NSP, PMIS, UGC Anti-Ragging, pupadm.samarth.edu.in). When visiting external websites, their respective privacy policies apply.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact & Developer Information Card */}
        <div className="rounded-3xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-xs space-y-3">
          <div className="flex items-center gap-2 text-slate-900 font-black text-sm">
            <Info className="h-5 w-5 text-blue-600 shrink-0" />
            <span>Developer Contact & Privacy Inquiries</span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            For privacy inquiries, DMCA notices, or content corrections, feel free to contact the developer:
          </p>
          <div className="rounded-2xl bg-slate-50 p-3 border border-slate-200 text-xs text-slate-700 space-y-1">
            <p><strong>Developer:</strong> Abhishek Kumar (@nainix)</p>
            <p><strong>App:</strong> Lazy PU (com.lazypu.app)</p>
            <p><strong>Website:</strong> https://lazyupdate.tech</p>
            <p><strong>Email:</strong> support@lazyupdate.tech / abhixyzq@gmail.com</p>
          </div>
          <a
            href="mailto:support@lazyupdate.tech"
            className="flex items-center justify-center gap-2 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold py-2.5 px-4 text-xs transition shadow-xs"
          >
            <Mail className="h-4 w-4" /> Email Developer (support@lazyupdate.tech)
          </a>
        </div>
      </main>
    </div>
  );
}
