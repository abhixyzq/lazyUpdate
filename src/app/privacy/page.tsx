'use client';

import React, { useState } from 'react';
import Link from 'next/link';
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
  Smartphone,
  HardDrive,
  Globe,
  Trash2,
  CheckCircle2,
  Scale,
  Calendar,
  AlertTriangle,
  FileCheck2,
} from 'lucide-react';
import { BottomNav } from '@/components/BottomNav';

export default function PrivacyAndDisclaimerPage() {
  const [clearedNotice, setClearedNotice] = useState(false);

  const handleClearLocalStorage = () => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.clear();
        setClearedNotice(true);
        setTimeout(() => setClearedNotice(false), 4000);
      } catch (err) {
        console.error('Error clearing localStorage:', err);
      }
    }
  };

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'Disclaimer', href: '#disclaimer' },
    { label: 'Data Collection', href: '#data-collection' },
    { label: 'Permissions', href: '#permissions' },
    { label: 'Local Storage', href: '#local-storage' },
    { label: 'Zero-Ads', href: '#zero-ads' },
    { label: 'Legal Rights', href: '#legal-rights' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-[#fafbfc] text-slate-900 pb-28 sm:pb-20">
      {/* 1. Universal Top Navigation */}
      <SubpageHeader
        title="Privacy Policy & Legal"
        subtitle="Last Updated: October 2026 • Official Data Safety"
      />

      <main className="mx-auto max-w-2xl px-4 pt-4 sm:pt-6 space-y-6">
        
        {/* Document Header Card */}
        <section id="overview" className="rounded-3xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4">
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <div>
                <h1 className="text-base sm:text-lg font-bold tracking-tight text-slate-900">
                  Privacy Policy & Data Protection
                </h1>
                <p className="text-[11px] text-slate-500">
                  Version 2.4 • Effective Date: October 17, 2026
                </p>
              </div>
            </div>
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100/70 px-2.5 py-1 text-[11px] font-semibold text-emerald-800">
              <CheckCircle2 className="h-3 w-3" /> Zero Data Collected
            </span>
          </div>

          <div className="mt-4 space-y-3 text-xs sm:text-[13px] text-slate-600 leading-relaxed">
            <p>
              Welcome to <strong>Lazy PU</strong> (accessible on the web at{' '}
              <a href="https://lazyupdate.tech" target="_blank" rel="noreferrer" className="text-emerald-700 underline font-semibold">
                lazyupdate.tech
              </a>{' '}
              and as an Android application under package name{' '}
              <code className="rounded bg-slate-100 px-1 py-0.5 text-slate-800 font-mono text-[11px]">com.lazypu.app</code>).
            </p>
            <p>
              Lazy PU is an open-access, student-centric academic companion built to deliver lightning-fast access to Patna University syllabi, past examination papers, official public circulars, and offline student utility calculators.
            </p>
            <p className="font-medium text-slate-800">
              Your digital privacy is our paramount priority. We operate under a fundamental zero-knowledge principle: we do not collect, monetize, store on remote servers, or sell any personal data belonging to any student or user.
            </p>
          </div>

          {/* Quick Anchor Bar */}
          <div className="mt-5 border-t border-slate-100 pt-3">
            <span className="text-[11px] font-semibold text-slate-400 block mb-2 uppercase tracking-wider">
              Quick Sections:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-lg border border-slate-200/80 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-600 hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700 transition"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* 1. Official Non-Affiliation Disclaimer */}
        <section id="disclaimer" className="rounded-3xl border border-amber-200/80 bg-gradient-to-b from-amber-50/80 to-amber-50/30 p-5 sm:p-6 shadow-xs">
          <div className="flex items-center gap-2 text-amber-950 font-bold text-sm sm:text-base mb-3">
            <ShieldAlert className="h-5 w-5 text-amber-600 shrink-0" />
            <h2>Official Non-Affiliation & Source Disclaimer</h2>
          </div>

          <div className="space-y-3 text-xs sm:text-[13px] text-amber-950/90 leading-relaxed">
            <p>
              <strong>1. Non-Governmental Standing:</strong> Lazy PU is an independent academic utility developed and maintained by student developers for educational convenience. It is <strong>NOT</strong> an official application of Patna University (PU), Raj Bhavan Bihar, the University Grants Commission (UGC), or the Department of Higher Education (Govt. of Bihar).
            </p>
            <p>
              <strong>2. Authoritative Verification:</strong> While every measure is taken to preserve high fidelity and authenticity, contents hosted on this platform are for informational reference only. Students are advised to verify critical examination dates, admission procedures, and fee notifications through authoritative university channels.
            </p>
            
            <div className="mt-3 rounded-2xl bg-white/90 border border-amber-200/90 p-4 text-xs text-amber-900 space-y-2">
              <span className="font-bold block text-slate-900">Official Reference Portals:</span>
              <ul className="space-y-1.5 list-disc list-inside text-[11px] sm:text-xs">
                <li>
                  Patna University Official Web Portal:{' '}
                  <a href="https://pup.ac.in" target="_blank" rel="noreferrer" className="font-semibold text-emerald-800 underline inline-flex items-center gap-0.5">
                    pup.ac.in <ExternalLink className="h-3 w-3 inline" />
                  </a>
                </li>
                <li>
                  Samarth eGov Higher Education Portal:{' '}
                  <a href="https://pupadm.samarth.edu.in" target="_blank" rel="noreferrer" className="font-semibold text-emerald-800 underline inline-flex items-center gap-0.5">
                    pupadm.samarth.edu.in <ExternalLink className="h-3 w-3 inline" />
                  </a>
                </li>
                <li>
                  Raj Bhavan Bihar Official Portal:{' '}
                  <a href="https://governor.bih.nic.in" target="_blank" rel="noreferrer" className="font-semibold text-emerald-800 underline inline-flex items-center gap-0.5">
                    governor.bih.nic.in <ExternalLink className="h-3 w-3 inline" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 2. Zero Personal Data Collection */}
        <section id="data-collection" className="rounded-3xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xs space-y-4">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-sm sm:text-base border-b border-slate-100 pb-3">
            <EyeOff className="h-5 w-5 text-emerald-600 shrink-0" />
            <h2>Zero Personal Data Collection Policy</h2>
          </div>

          <div className="space-y-3 text-xs sm:text-[13px] text-slate-600 leading-relaxed">
            <p>
              We firmly reject the modern trend of harvesting unnecessary user data. Lazy PU was designed deliberately without accounts or tracking mechanisms:
            </p>

            <div className="grid gap-2.5 sm:grid-cols-2 pt-1">
              <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-3.5">
                <span className="font-bold text-slate-900 block text-xs">No Registration or Logins</span>
                <p className="mt-1 text-[11px] text-slate-500 leading-normal">
                  No usernames, passwords, phone OTPs, Google auth, or Aadhaar credentials are requested or handled.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-3.5">
                <span className="font-bold text-slate-900 block text-xs">No Academic Record Scraping</span>
                <p className="mt-1 text-[11px] text-slate-500 leading-normal">
                  We do not ask for or collect university registration numbers, roll numbers, or sensitive marksheet details.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-3.5">
                <span className="font-bold text-slate-900 block text-xs">No Financial or Payment Data</span>
                <p className="mt-1 text-[11px] text-slate-500 leading-normal">
                  Lazy PU is completely free. We do not prompt for UPI, credit/debit card numbers, or bank account credentials.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-3.5">
                <span className="font-bold text-slate-900 block text-xs">No Location or Geofencing</span>
                <p className="mt-1 text-[11px] text-slate-500 leading-normal">
                  We never request GPS, fine/coarse location permissions, or track your physical whereabouts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Client-Side Processing & Local Storage */}
        <section id="local-storage" className="rounded-3xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-sm sm:text-base">
              <HardDrive className="h-5 w-5 text-blue-600 shrink-0" />
              <h2>Client-Side Architecture & Local Storage</h2>
            </div>
            <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-semibold text-blue-700">
              100% On-Device
            </span>
          </div>

          <div className="space-y-3 text-xs sm:text-[13px] text-slate-600 leading-relaxed">
            <p>
              All interactive academic productivity tools on Lazy PU compute results in real-time within your device’s JavaScript engine or Android runtime. None of your inputs are transmitted to external servers:
            </p>

            <ul className="space-y-2 list-none pt-1">
              <li className="flex items-start gap-2.5 rounded-xl bg-slate-50/60 p-2.5 border border-slate-100">
                <span className="font-bold text-slate-900 text-xs shrink-0 w-36">SGPA / CGPA Predictor:</span>
                <span className="text-[11px] text-slate-600">Grade points and calculated SGPA are processed entirely in memory.</span>
              </li>
              <li className="flex items-start gap-2.5 rounded-xl bg-slate-50/60 p-2.5 border border-slate-100">
                <span className="font-bold text-slate-900 text-xs shrink-0 w-36">75% Attendance Tracker:</span>
                <span className="text-[11px] text-slate-600">Saved subject counts, attended lectures, and target percentages are stored strictly in your local device storage (`localStorage`).</span>
              </li>
              <li className="flex items-start gap-2.5 rounded-xl bg-slate-50/60 p-2.5 border border-slate-100">
                <span className="font-bold text-slate-900 text-xs shrink-0 w-36">Syllabus Checkmarks:</span>
                <span className="text-[11px] text-slate-600">Progress ticks on syllabus units stay on your phone or browser only.</span>
              </li>
              <li className="flex items-start gap-2.5 rounded-xl bg-slate-50/60 p-2.5 border border-slate-100">
                <span className="font-bold text-slate-900 text-xs shrink-0 w-36">Custom Timetable:</span>
                <span className="text-[11px] text-slate-600">Your custom class schedule and subject names are saved locally.</span>
              </li>
            </ul>

            {/* Clear Data Action */}
            <div className="mt-3 rounded-2xl bg-slate-50 border border-slate-200/80 p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="font-bold text-slate-900 text-xs block">Full Control Over Your Local Data</span>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  You can purge all locally saved attendance records, calculators, and cache anytime with one tap.
                </p>
              </div>
              <button
                onClick={handleClearLocalStorage}
                className="flex items-center justify-center gap-1.5 rounded-xl bg-rose-50 border border-rose-200 px-3 py-2 text-xs font-semibold text-rose-700 hover:bg-rose-100 transition shrink-0 cursor-pointer"
              >
                <Trash2 className="h-3.5 w-3.5" /> Purge Local Data
              </button>
            </div>

            {clearedNotice && (
              <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-2.5 text-center text-xs font-semibold text-emerald-800 animate-in fade-in">
                ✓ All local cache, attendance, and saved records have been successfully wiped from this device.
              </div>
            )}
          </div>
        </section>

        {/* 4. Android Device Permissions (Google Play Policy Compliance) */}
        <section id="permissions" className="rounded-3xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xs space-y-4">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-sm sm:text-base border-b border-slate-100 pb-3">
            <Smartphone className="h-5 w-5 text-indigo-600 shrink-0" />
            <h2>Device & Android Application Permissions</h2>
          </div>

          <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
            In compliance with the Google Play Developer Distribution Agreement and User Data policies, here is an explicit justification for all permissions declared in the Android Manifest:
          </p>

          <div className="space-y-2.5 pt-1">
            <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-3.5 space-y-1">
              <div className="flex items-center justify-between">
                <code className="text-xs font-mono font-bold text-slate-800">android.permission.INTERNET</code>
                <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">Required</span>
              </div>
              <p className="text-[11px] text-slate-500 leading-normal">
                Enables loading verified public notices, syllabus PDF documents, and academic updates over secure HTTPS.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-3.5 space-y-1">
              <div className="flex items-center justify-between">
                <code className="text-xs font-mono font-bold text-slate-800">android.permission.ACCESS_NETWORK_STATE</code>
                <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">Required</span>
              </div>
              <p className="text-[11px] text-slate-500 leading-normal">
                Detects whether the device is online or offline, allowing graceful offline caching without wasting cellular battery or data.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-3.5 space-y-1">
              <div className="flex items-center justify-between">
                <code className="text-xs font-mono font-bold text-slate-800">android.permission.POST_NOTIFICATIONS</code>
                <span className="text-[10px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full">Optional • Android 13+</span>
              </div>
              <p className="text-[11px] text-slate-500 leading-normal">
                Allows sending non-intrusive push alerts regarding emergency university closures, admit card releases, or exam routine changes. Users can disable this permission at any time in Android App Settings.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-3.5 space-y-1">
              <div className="flex items-center justify-between">
                <code className="text-xs font-mono font-bold text-slate-800">android.permission.SCHEDULE_EXACT_ALARM</code>
                <span className="text-[10px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full">Optional • Feature-Specific</span>
              </div>
              <p className="text-[11px] text-slate-500 leading-normal">
                Used exclusively if the student schedules a local alarm reminder for a specific lecture on their custom timetable. It functions entirely on-device via AlarmManager without remote server communication.
              </p>
            </div>
          </div>
        </section>

        {/* 5. Zero-Ads & Anti-Tracking Policy */}
        <section id="zero-ads" className="rounded-3xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xs space-y-4">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-sm sm:text-base border-b border-slate-100 pb-3">
            <Cpu className="h-5 w-5 text-emerald-600 shrink-0" />
            <h2>100% Ad-Free, Tracker-Free Student Environment</h2>
          </div>

          <div className="space-y-3 text-xs sm:text-[13px] text-slate-600 leading-relaxed">
            <p>
              Students studying for examinations should never be bombarded by intrusive popups, banners, video interstitials, or predatory ad trackers.
            </p>
            <div className="grid gap-2 sm:grid-cols-2 pt-1 text-slate-700">
              <div className="rounded-xl border border-slate-100 bg-emerald-50/40 p-3 flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs"><strong>No Google AdMob</strong> or third-party programmatic ad SDKs.</span>
              </div>
              <div className="rounded-xl border border-slate-100 bg-emerald-50/40 p-3 flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs"><strong>No behavioral profiling</strong> or data broker sales.</span>
              </div>
              <div className="rounded-xl border border-slate-100 bg-emerald-50/40 p-3 flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs"><strong>No advertising cookies</strong> or cross-site tracking pixels.</span>
              </div>
              <div className="rounded-xl border border-slate-100 bg-emerald-50/40 p-3 flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs"><strong>Clean, distraction-free</strong> academic interface.</span>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Network Security & Anonymized Server Logs */}
        <section className="rounded-3xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xs space-y-4">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-sm sm:text-base border-b border-slate-100 pb-3">
            <Lock className="h-5 w-5 text-slate-700 shrink-0" />
            <h2>Network Infrastructure & Data Transmission Security</h2>
          </div>

          <div className="space-y-3 text-xs sm:text-[13px] text-slate-600 leading-relaxed">
            <p>
              <strong>1. TLS / HTTPS Encryption:</strong> All communications between your client device and the server hosting Lazy PU are encrypted using industry-standard TLS 1.3 cryptographic protocols. Unencrypted plain HTTP requests are automatically upgraded.
            </p>
            <p>
              <strong>2. Transient Infrastructure Logs:</strong> Like all internet services, our cloud hosting providers (e.g., Vercel, Cloudflare edge networks) temporarily process standard technical server access logs (such as IP address, HTTP user-agent header, and request timestamp) solely for:
            </p>
            <ul className="list-disc list-inside text-[11px] sm:text-xs text-slate-500 space-y-1 pl-2">
              <li>Mitigating Distributed Denial of Service (DDoS) cyber attacks;</li>
              <li>Detecting abnormal server errors and maintaining CDN availability;</li>
              <li>Bandwidth optimization and network routing performance.</li>
            </ul>
            <p className="text-[11px] text-slate-500">
              These logs are transient, anonymized, and never linked to any individual person or used for marketing.
            </p>
          </div>
        </section>

        {/* 7. Children's Privacy (COPPA & Indian DPDP Act) */}
        <section className="rounded-3xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xs space-y-4">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-sm sm:text-base border-b border-slate-100 pb-3">
            <UserCheck className="h-5 w-5 text-rose-600 shrink-0" />
            <h2>Children’s Privacy & Global Legal Compliance</h2>
          </div>

          <div className="space-y-3 text-xs sm:text-[13px] text-slate-600 leading-relaxed">
            <p>
              <strong>1. Age Appropriateness:</strong> Lazy PU is engineered for undergraduate, postgraduate, vocational, and doctoral college students, generally aged 16 and above. We do not knowingly collect, solicit, or store personal information from children under the age of 13 in compliance with the Children’s Online Privacy Protection Act (COPPA).
            </p>
            <p>
              <strong>2. Digital Personal Data Protection (DPDP) Act, 2023 (India):</strong> Because Lazy PU operates on a Zero-Knowledge paradigm without collecting personal identifiable information, no personal data processing, profiling, or transfer takes place under the provisions of the Indian DPDP Act 2023.
            </p>
          </div>
        </section>

        {/* 8. Intellectual Property & Academic Fair Use */}
        <section className="rounded-3xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xs space-y-4">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-sm sm:text-base border-b border-slate-100 pb-3">
            <FileCheck2 className="h-5 w-5 text-blue-600 shrink-0" />
            <h2>Intellectual Property & Academic Fair Use</h2>
          </div>

          <div className="space-y-3 text-xs sm:text-[13px] text-slate-600 leading-relaxed">
            <p>
              <strong>1. Public Domain Documents:</strong> University circulars, official syllabus course structures under the Choice Based Credit System (CBCS / FYUGP), and examination schedules are public documents issued by academic bodies for student dissemination.
            </p>
            <p>
              <strong>2. Fair Dealing Doctrine:</strong> Use of these texts in Lazy PU is conducted strictly for educational, review, non-commercial private study, and informational purposes under the fair dealing provisions of <strong>Section 52(1) of the Indian Copyright Act, 1957</strong>.
            </p>
            <p>
              <strong>3. Trademarks:</strong> Any trademarks, crests, logos, and college names appearing in the platform remain the intellectual property of their respective owners (Patna University / Constituent Colleges). Their display is strictly nominative for identification.
            </p>
          </div>
        </section>

        {/* 9. User Rights & Data Erasure */}
        <section id="legal-rights" className="rounded-3xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xs space-y-4">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-sm sm:text-base border-b border-slate-100 pb-3">
            <Scale className="h-5 w-5 text-emerald-600 shrink-0" />
            <h2>Your Rights & Control Over Your Data</h2>
          </div>

          <div className="space-y-3 text-xs sm:text-[13px] text-slate-600 leading-relaxed">
            <p>
              Under international privacy frameworks and Indian digital regulations, you maintain full sovereignty:
            </p>
            <ul className="space-y-1.5 list-disc list-inside text-xs text-slate-600 pl-2">
              <li><strong>Right to Non-Discrimination:</strong> Complete, unrestricted access to all academic features without having to surrender personal information.</li>
              <li><strong>Right to Total Erasure:</strong> Wipe your local calculation history at any moment by clicking &quot;Purge Local Data&quot; or clearing app cache in Android.</li>
              <li><strong>Right to Opt-Out of Push Alerts:</strong> Revoke the `POST_NOTIFICATIONS` permission in your device system settings anytime.</li>
            </ul>
          </div>
        </section>

        {/* 10. Developer Contact & Grievance Redressal */}
        <section id="contact" className="rounded-3xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xs space-y-4">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-sm sm:text-base border-b border-slate-100 pb-3">
            <Info className="h-5 w-5 text-emerald-600 shrink-0" />
            <h2>Grievance Redressal & Contact Information</h2>
          </div>

          <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
            Pursuant to the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, and for any privacy inquiries, content correction requests, or DMCA communications, please contact the developer:
          </p>

          <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200 text-xs text-slate-700 space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-slate-200/60 pb-2">
              <span className="font-semibold text-slate-500">Maintainer & Developer:</span>
              <span className="font-bold text-slate-900">Abhishek Kumar (@nainix)</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-slate-200/60 pb-2">
              <span className="font-semibold text-slate-500">Project / Application:</span>
              <span className="font-bold text-slate-900">Lazy PU (com.lazypu.app)</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-slate-200/60 pb-2">
              <span className="font-semibold text-slate-500">Official Web Domain:</span>
              <a href="https://lazyupdate.tech" target="_blank" rel="noreferrer" className="text-emerald-700 underline font-medium">
                https://lazyupdate.tech
              </a>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-slate-200/60 pb-2">
              <span className="font-semibold text-slate-500">Official Support Email:</span>
              <span className="font-mono text-emerald-800 font-semibold">support@lazyupdate.tech</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <span className="font-semibold text-slate-500">Response Turnaround:</span>
              <span className="text-slate-700">Within 48 hours for verified requests</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 pt-1">
            <a
              href="mailto:support@lazyupdate.tech"
              className="flex-1 flex items-center justify-center gap-2 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold py-3 px-4 text-xs transition shadow-2xs"
            >
              <Mail className="h-4 w-4" /> Send Email (support@lazyupdate.tech)
            </a>
            <Link
              href="/"
              className="flex items-center justify-center rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-semibold py-3 px-5 text-xs transition"
            >
              Back to Home
            </Link>
          </div>
        </section>

      </main>

      {/* Persistent Bottom Nav */}
      <BottomNav />
    </div>
  );
}
