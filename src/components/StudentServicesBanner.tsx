'use client';

import React from 'react';
import Link from 'next/link';
import { Briefcase, GraduationCap, Shield, ChevronRight, ExternalLink } from 'lucide-react';
import { WhatsAppIcon, InstagramIcon } from './OfficialBrandIcons';

export const StudentServicesBanner: React.FC = () => {
  return (
    <section className="mx-auto max-w-xl px-4 pt-4 space-y-3">
      {/* 1. Official WhatsApp Alerts Banner (High-Visibility Single Card) */}
      <div className="relative overflow-hidden rounded-2xl border border-emerald-200/90 bg-gradient-to-r from-emerald-500 to-teal-600 p-3.5 text-white shadow-xs">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/20 backdrop-blur-xs text-white">
              <WhatsAppIcon className="h-6 w-6" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-extrabold uppercase tracking-wider bg-white/25 px-1.5 py-0.5 rounded">
                  OFFICIAL CHANNEL
                </span>
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-white mt-0.5 truncate">
                Join Lazy PU on WhatsApp
              </h4>
              <p className="text-[11px] text-emerald-100 font-medium truncate">
                Instant exam routine, syllabus & circular updates
              </p>
            </div>
          </div>

          <a
            href="https://whatsapp.com/channel/0029VbDWOxc3LdQXxMfsBl2G"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 rounded-xl bg-white px-3 py-1.5 text-xs font-bold text-emerald-800 shadow-2xs hover:bg-emerald-50 active:scale-95 transition shrink-0"
          >
            <span>Join</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      {/* 2. Student Portals Row (Internships, Scholarships, Anti-Ragging) */}
      <div>
        <div className="flex items-center justify-between pb-2">
          <h3 className="text-sm font-bold text-slate-900 tracking-tight">
            Portals & Schemes
          </h3>
          <a
            href="https://instagram.com/_lazypu"
            target="_blank"
            rel="noreferrer"
            className="text-[11px] font-semibold text-rose-600 hover:text-rose-700 flex items-center gap-1 transition"
          >
            <InstagramIcon className="h-3 w-3" />
            <span>@_lazypu</span>
          </a>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <Link
            href="/internships"
            className="group flex flex-col justify-between rounded-xl border border-slate-200/90 bg-white p-2.5 shadow-2xs hover:border-blue-300 hover:shadow-xs transition active:scale-97 cursor-pointer"
          >
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-blue-600 border border-blue-200/80">
                <Briefcase className="h-3.5 w-3.5 stroke-[2]" />
              </div>
              <ChevronRight className="h-3 w-3 text-slate-300 group-hover:text-blue-600" />
            </div>
            <div>
              <span className="block text-[11px] font-bold text-slate-900 group-hover:text-blue-700 truncate">
                Internships
              </span>
              <span className="block text-[9px] font-medium text-slate-400 truncate">
                AICTE & PM
              </span>
            </div>
          </Link>

          <Link
            href="/scholarships"
            className="group flex flex-col justify-between rounded-xl border border-slate-200/90 bg-white p-2.5 shadow-2xs hover:border-emerald-300 hover:shadow-xs transition active:scale-97 cursor-pointer"
          >
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-200/80">
                <GraduationCap className="h-3.5 w-3.5 stroke-[2]" />
              </div>
              <ChevronRight className="h-3 w-3 text-slate-300 group-hover:text-emerald-600" />
            </div>
            <div>
              <span className="block text-[11px] font-bold text-slate-900 group-hover:text-emerald-700 truncate">
                Scholarships
              </span>
              <span className="block text-[9px] font-medium text-slate-400 truncate">
                PMS & NSP
              </span>
            </div>
          </Link>

          <Link
            href="/antiragging"
            className="group flex flex-col justify-between rounded-xl border border-slate-200/90 bg-white p-2.5 shadow-2xs hover:border-rose-300 hover:shadow-xs transition active:scale-97 cursor-pointer"
          >
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-rose-50 text-rose-600 border border-rose-200/80">
                <Shield className="h-3.5 w-3.5 stroke-[2]" />
              </div>
              <ChevronRight className="h-3 w-3 text-slate-300 group-hover:text-rose-600" />
            </div>
            <div>
              <span className="block text-[11px] font-bold text-slate-900 group-hover:text-rose-700 truncate">
                Anti-Ragging
              </span>
              <span className="block text-[9px] font-medium text-slate-400 truncate">
                Helpline
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
