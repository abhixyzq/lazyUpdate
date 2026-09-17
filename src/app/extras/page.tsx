'use client';

import React from 'react';
import { SubpageHeader } from '@/components/SubpageHeader';
import { puCollegesData } from '@/data/puColleges';
import { InstagramIcon, WhatsAppIcon } from '@/components/OfficialBrandIcons';
import { ExternalLink, Building2, Globe, Heart, Mail, Share2, ShieldCheck } from 'lucide-react';

export default function ExtrasPage() {
  const handleShareApp = () => {
    const text = `🌟 Lazy PU - The complete open-access student portal for Patna University!\nAccess CBCS Syllabi, Past Papers (PYQs), 75% Attendance Calculator, SGPA Tools & Circulars.\nCheck it out here: ${window.location.origin}`;
    if (navigator.share) {
      navigator.share({ title: 'Lazy PU Portal', text, url: window.location.origin });
    } else {
      navigator.clipboard.writeText(text);
      alert('Link copied to clipboard! Share with your classmates.');
    }
  };

  return (
    <div className="min-h-screen bg-transparent text-slate-900 pb-12">
      <SubpageHeader title="Extras" />

      <main className="mx-auto max-w-xl px-3 pt-4 space-y-4">
        
        {/* Official PU Web Portals Card */}
        <div className="rounded-3xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-xs space-y-3">
          <h3 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
            <Globe className="h-4 w-4 text-blue-600" />
            Official University Portals
          </h3>

          <div className="space-y-2">
            <a
              href="https://pup.ac.in"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-2xl border border-slate-200/80 bg-slate-50/70 p-3.5 hover:border-slate-300 transition group"
            >
              <div>
                <h4 className="text-xs sm:text-sm font-black text-slate-900 group-hover:text-blue-600">
                  pup.ac.in (Main Website)
                </h4>
                <span className="text-[11px] text-slate-500">
                  Official Patna University notifications, administration & tenders
                </span>
              </div>
              <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-blue-600 shrink-0" />
            </a>

            <a
              href="https://pup.ac.in"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-2xl border border-slate-200/80 bg-slate-50/70 p-3.5 hover:border-slate-300 transition group"
            >
              <div>
                <h4 className="text-xs sm:text-sm font-black text-slate-900 group-hover:text-blue-600">
                  UMIS Examination & Admit Card Portal
                </h4>
                <span className="text-[11px] text-slate-500">
                  Exam form submission, digital admit card download & roll lookup
                </span>
              </div>
              <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-blue-600 shrink-0" />
            </a>
          </div>
        </div>

        {/* Constituent Colleges List */}
        <div className="rounded-3xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-xs space-y-3">
          <h3 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
            <Building2 className="h-4 w-4 text-amber-600" />
            Constituent Colleges of PU
          </h3>

          <div className="grid grid-cols-1 gap-2">
            {puCollegesData.map((col) => (
              <div
                key={col.id}
                className="flex items-center justify-between rounded-2xl border border-slate-200/80 bg-slate-50/70 p-3 hover:border-slate-300 transition"
              >
                <div>
                  <h4 className="text-xs font-bold text-slate-900">{col.name}</h4>
                  <span className="text-[10px] text-blue-700 font-semibold">{col.tag}</span>
                </div>
                <span className="rounded-lg bg-white px-2 py-0.5 text-[10px] font-bold text-slate-700 border border-slate-200">
                  {col.shortName}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Student Community & WhatsApp / Instagram */}
        <div className="rounded-3xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-xs space-y-3">
          <h3 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wider">
            Student Community Channels
          </h3>

          <div className="grid grid-cols-2 gap-2.5">
            <a
              href="https://whatsapp.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2.5 rounded-2xl border border-emerald-200 bg-emerald-50/80 p-3 text-xs font-bold hover:bg-emerald-100/70 transition shadow-2xs"
            >
              <WhatsAppIcon className="h-5 w-5 shrink-0" />
              <div>
                <div className="text-xs font-black text-emerald-950">WhatsApp</div>
                <div className="text-[10px] text-emerald-800 font-semibold">Join Channel</div>
              </div>
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2.5 rounded-2xl border border-pink-200 bg-pink-50/80 p-3 text-xs font-bold hover:bg-pink-100/70 transition shadow-2xs"
            >
              <InstagramIcon className="h-5 w-5 shrink-0" />
              <div>
                <div className="text-xs font-black text-slate-900">Instagram</div>
                <div className="text-[10px] text-pink-700 font-semibold">Follow Page</div>
              </div>
            </a>
          </div>

          <button
            onClick={handleShareApp}
            className="w-full flex items-center justify-center gap-1.5 rounded-2xl bg-slate-900 hover:bg-slate-800 py-2.5 px-4 text-xs font-black text-white transition shadow-xs"
          >
            <Share2 className="h-4 w-4" /> Share Lazy PU with Classmates
          </button>
        </div>

        {/* About Lazy PU Footer Box */}
        <div className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4 text-xs text-slate-600 space-y-2 text-center">
          <div className="flex items-center justify-center gap-1.5 text-slate-900 font-bold">
            <ShieldCheck className="h-4 w-4 text-emerald-600" />
            <span>100% Open Access • No Login Required</span>
          </div>
          <p className="text-[11px] text-slate-600 leading-relaxed">
            Lazy PU is a student-built companion platform for Patna University scholars to freely explore syllabi, compute SGPA, and track circulars without clunky servers.
          </p>
          <div className="pt-1 text-[10px] text-slate-400">
            Lazy PU v2.0 • Made with ❤️ for Patna University Students
          </div>
        </div>
      </main>
    </div>
  );
}
