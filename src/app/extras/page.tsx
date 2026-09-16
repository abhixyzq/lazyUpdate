'use client';

import React from 'react';
import { SubpageHeader } from '@/components/SubpageHeader';
import { puCollegesData } from '@/data/puColleges';
import { TelegramIcon, WhatsAppIcon } from '@/components/OfficialBrandIcons';
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
    <div className="min-h-screen bg-transparent text-white pb-12">
      <SubpageHeader title="Extras" />

      <main className="mx-auto max-w-xl px-3 pt-4 space-y-4">
        
        {/* Official PU Web Portals Card */}
        <div className="rounded-3xl border border-blue-900/80 bg-[#091a36] p-4 sm:p-5 shadow-xl space-y-3">
          <h3 className="text-xs sm:text-sm font-black text-[#00d2ff] uppercase tracking-wider flex items-center gap-1.5">
            <Globe className="h-4 w-4 text-cyan-400" />
            Official University Portals
          </h3>

          <div className="space-y-2">
            <a
              href="https://pup.ac.in"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-2xl border border-blue-900/70 bg-[#061428] p-3.5 hover:border-cyan-400 hover:bg-[#0c234a] transition group"
            >
              <div>
                <h4 className="text-xs sm:text-sm font-black text-white group-hover:text-cyan-300">
                  pup.ac.in (Main Website)
                </h4>
                <span className="text-[11px] text-slate-400">
                  Official Patna University notifications, administration & tenders
                </span>
              </div>
              <ExternalLink className="h-4 w-4 text-cyan-400 shrink-0" />
            </a>

            <a
              href="https://pup.ac.in"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-2xl border border-blue-900/70 bg-[#061428] p-3.5 hover:border-cyan-400 hover:bg-[#0c234a] transition group"
            >
              <div>
                <h4 className="text-xs sm:text-sm font-black text-white group-hover:text-cyan-300">
                  UMIS Examination & Admit Card Portal
                </h4>
                <span className="text-[11px] text-slate-400">
                  Exam form submission, digital admit card download & roll lookup
                </span>
              </div>
              <ExternalLink className="h-4 w-4 text-cyan-400 shrink-0" />
            </a>
          </div>
        </div>

        {/* Constituent Colleges List */}
        <div className="rounded-3xl border border-blue-900/80 bg-[#091a36] p-4 sm:p-5 shadow-xl space-y-3">
          <h3 className="text-xs sm:text-sm font-black text-[#fbbf24] uppercase tracking-wider flex items-center gap-1.5">
            <Building2 className="h-4 w-4 text-amber-400" />
            Constituent Colleges of PU
          </h3>

          <div className="grid grid-cols-1 gap-2">
            {puCollegesData.map((col) => (
              <div
                key={col.id}
                className="flex items-center justify-between rounded-2xl border border-blue-900/60 bg-[#07162d] p-3 hover:border-blue-700 transition"
              >
                <div>
                  <h4 className="text-xs font-black text-white">{col.name}</h4>
                  <span className="text-[10px] text-cyan-300 font-bold">{col.tag}</span>
                </div>
                <span className="rounded-lg bg-blue-950 px-2 py-0.5 text-[10px] font-bold text-slate-400 border border-blue-900">
                  {col.shortName}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Student Community & WhatsApp / Telegram */}
        <div className="rounded-3xl border border-blue-900/80 bg-[#091a36] p-4 sm:p-5 shadow-xl space-y-3">
          <h3 className="text-xs sm:text-sm font-black text-emerald-400 uppercase tracking-wider">
            Student Community Channels
          </h3>

          <div className="grid grid-cols-2 gap-2.5">
            <a
              href="https://whatsapp.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-2xl border border-emerald-500/40 bg-[#0a3324] p-3 text-xs font-bold text-[#25d366] hover:bg-[#0e4430] transition shadow-xs"
            >
              <WhatsAppIcon className="h-5 w-5 shrink-0" />
              <div>
                <div className="text-xs font-black text-white">WhatsApp</div>
                <div className="text-[10px] text-emerald-400">Join Channel</div>
              </div>
            </a>

            <a
              href="https://telegram.org"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-2xl border border-blue-500/40 bg-[#0c234a] p-3 text-xs font-bold text-cyan-300 hover:bg-[#102e60] transition shadow-xs"
            >
              <TelegramIcon className="h-5 w-5 shrink-0" />
              <div>
                <div className="text-xs font-black text-white">Telegram</div>
                <div className="text-[10px] text-cyan-400">Join Group</div>
              </div>
            </a>
          </div>

          <button
            onClick={handleShareApp}
            className="w-full flex items-center justify-center gap-1.5 rounded-2xl border border-cyan-500/40 bg-[#0c2548] py-2.5 px-4 text-xs font-black text-cyan-300 hover:bg-[#12386a] transition shadow-sm"
          >
            <Share2 className="h-4 w-4" /> Share Lazy PU with Classmates
          </button>
        </div>

        {/* About Lazy PU Footer Box */}
        <div className="rounded-2xl border border-blue-900/60 bg-[#07162d] p-4 text-xs text-slate-300 space-y-2 text-center">
          <div className="flex items-center justify-center gap-1.5 text-cyan-400 font-black">
            <ShieldCheck className="h-4 w-4" />
            <span>100% Open Access • No Login Required</span>
          </div>
          <p className="text-[11px] text-slate-400 leading-relaxed">
            Lazy PU is a student-built companion platform for Patna University scholars to freely explore syllabi, compute SGPA, and track circulars without clunky servers.
          </p>
          <div className="pt-1 text-[10px] text-slate-500">
            Lazy PU v2.0 • Made with ❤️ for Patna University Students
          </div>
        </div>
      </main>
    </div>
  );
}
