'use client';

import React from 'react';
import { ExternalLink, Send, ShieldCheck } from 'lucide-react';
import { WhatsAppIcon } from './OfficialBrandIcons';

interface FooterProps {
  onOpenCommunity?: () => void;
  onOpenUniversityModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenCommunity,
  onOpenUniversityModal,
}) => {
  return (
    <footer className="mt-12 border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-[#070b13] text-xs text-slate-600 dark:text-slate-400 transition-colors pb-28 lg:pb-12">
      <div className="mx-auto max-w-7xl px-3 sm:px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          
          {/* Brand Col */}
          <div className="md:col-span-1 space-y-2">
            <div className="flex items-center gap-1.5">
              <div className="relative h-7 w-auto flex items-center">
                <img
                  src="/logo.png"
                  alt="Lazy Update"
                  className="h-6 w-auto object-contain dark:hidden"
                />
                <img
                  src="/logo-dark.png"
                  alt="Lazy Update"
                  className="h-6 w-auto object-contain hidden dark:block"
                />
              </div>
              <span className="rounded bg-blue-100 px-1.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-blue-700 dark:bg-blue-950/90 dark:text-blue-300 border border-blue-300/40 dark:border-blue-700/40 shadow-xs">
                .tech
              </span>
            </div>
            <p className="text-[11px] leading-relaxed text-slate-500 dark:text-slate-400">
              Dedicated, lightning-fast notice and study resource portal for Patna University students. Direct official circulars, zero spam.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <a
                href="https://whatsapp.com/channel/0029VbDWOxc3LdQXxMfsBl2G"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-lg bg-[#25D366] px-2.5 py-1 text-[11px] font-bold text-white shadow-2xs hover:bg-[#20ba59] active:scale-95 transition"
              >
                <WhatsAppIcon className="h-3.5 w-3.5" /> PU WhatsApp
              </a>
              <button
                onClick={onOpenUniversityModal}
                className="flex items-center gap-1 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 px-2.5 py-1 text-[11px] font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100"
              >
                Switch Univ
              </button>
            </div>
          </div>

          {/* Official Portals */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2.5">
              Official PU Portals
            </h4>
            <ul className="space-y-1.5 text-[11px]">
              <li>
                <a href="https://pup.ac.in" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1">
                  <span>Official University Website (pup.ac.in)</span>
                  <ExternalLink className="h-2.5 w-2.5 opacity-60" />
                </a>
              </li>
              <li>
                <a href="https://pup.ac.in/umis" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1">
                  <span>PU UMIS Student Portal Login</span>
                  <ExternalLink className="h-2.5 w-2.5 opacity-60" />
                </a>
              </li>
              <li>
                <a href="https://patnasciencecollege.ac.in" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1">
                  <span>Patna Science College Portal</span>
                  <ExternalLink className="h-2.5 w-2.5 opacity-60" />
                </a>
              </li>
              <li>
                <a href="https://patnacollege.ac.in" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1">
                  <span>Patna College Official Portal</span>
                  <ExternalLink className="h-2.5 w-2.5 opacity-60" />
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Academic Hubs */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2.5">
              Constituent Colleges
            </h4>
            <ul className="space-y-1.5 text-[11px]">
              <li>
                <a href="https://bncollegepatna.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1">
                  <span>B.N. College, Patna</span>
                  <ExternalLink className="h-2.5 w-2.5 opacity-60" />
                </a>
              </li>
              <li>
                <a href="https://magadhmahilacollege.org" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1">
                  <span>Magadh Mahila College</span>
                  <ExternalLink className="h-2.5 w-2.5 opacity-60" />
                </a>
              </li>
              <li>
                <a href="https://vanijyamahavidyalaya.ac.in" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1">
                  <span>Vanijya Mahavidyalaya</span>
                  <ExternalLink className="h-2.5 w-2.5 opacity-60" />
                </a>
              </li>
              <li>
                <a href="https://patnalawcollege.ac.in" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1">
                  <span>Patna Law College</span>
                  <ExternalLink className="h-2.5 w-2.5 opacity-60" />
                </a>
              </li>
            </ul>
          </div>

          {/* Disclaimer */}
          <div className="space-y-1.5 text-[11px] leading-relaxed">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2.5 flex items-center gap-1">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
              <span>Student Notice Disclaimer</span>
            </h4>
            <p className="text-slate-500 dark:text-slate-400">
              LazyUpdate.tech is an independent student information initiative designed to provide direct official links without clutter. Candidates must verify sensitive dates with official university gazettes.
            </p>
          </div>

        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-100 dark:border-slate-800/80 pt-4 text-[11px] text-slate-500 dark:text-slate-400">
          <p>© 2026 LazyUpdate.tech — Patna University Student Portal</p>
          <div className="flex items-center gap-3">
            <span>Fast • Mobile-First • Direct Links</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
