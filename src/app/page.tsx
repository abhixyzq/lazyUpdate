'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ApnaHeader } from '@/components/ApnaHeader';
import { AlertStrip } from '@/components/AlertStrip';
import { UniversityGridSection } from '@/components/UniversityGridSection';
import { DownloadAppSection } from '@/components/DownloadAppSection';
import { SideDrawer } from '@/components/SideDrawer';
import { Link2, Briefcase, Award, ShieldAlert, ChevronRight } from 'lucide-react';

export default function HomePage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50/60 text-slate-900 pb-20">
      
      {/* 1. Universal Top Navbar */}
      <ApnaHeader
        title="Lazy PU"
        onOpenMenu={() => setIsDrawerOpen(true)}
      />

      {/* 2. Live Broadcast Announcement Strip (Synced with Admin Panel) */}
      <AlertStrip />

      {/* 3. Primary Academic Cards, Student Tools & Social Channels */}
      <UniversityGridSection />

      {/* 4. Google Play Store Card (Shown to Website Visitors only) */}
      <DownloadAppSection appTitle="Lazy PU" />

      {/* 5. Essential Portals: Internships, Scholarships & Helplines */}
      <section className="mx-auto max-w-xl px-3 pt-3">
        <div className="rounded-3xl border border-slate-200/90 bg-white p-3.5 sm:p-4 shadow-xs space-y-2.5">
          <div className="flex items-center justify-between pb-1.5 px-1 border-b border-slate-100">
            <h3 className="text-xs font-black tracking-widest text-slate-900 uppercase flex items-center gap-1.5">
              <Link2 className="h-3.5 w-3.5 text-blue-600" />
              <span>STUDENT PORTALS</span>
            </h3>
            <span className="text-[10px] font-bold text-slate-400">
              Govt & National
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2 text-xs">
            {/* 1. Internships */}
            <Link
              href="/internships"
              className="flex flex-col items-center justify-center rounded-2xl border border-slate-200/80 bg-slate-50/70 p-2.5 hover:border-slate-300 hover:bg-white transition active:scale-97 group text-center"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-200/70 mb-1.5 transition group-hover:scale-105">
                <Briefcase className="h-4 w-4" />
              </div>
              <span className="text-[11px] font-black text-slate-800">Internships</span>
              <span className="text-[9px] text-slate-400 font-semibold mt-0.5">PM & AICTE</span>
            </Link>

            {/* 2. Scholarships */}
            <Link
              href="/scholarships"
              className="flex flex-col items-center justify-center rounded-2xl border border-slate-200/80 bg-slate-50/70 p-2.5 hover:border-slate-300 hover:bg-white transition active:scale-97 group text-center"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200/70 mb-1.5 transition group-hover:scale-105">
                <Award className="h-4 w-4" />
              </div>
              <span className="text-[11px] font-black text-slate-800">Scholarships</span>
              <span className="text-[9px] text-slate-400 font-semibold mt-0.5">PMS & NSP</span>
            </Link>

            {/* 3. Anti-Ragging */}
            <Link
              href="/antiragging"
              className="flex flex-col items-center justify-center rounded-2xl border border-slate-200/80 bg-slate-50/70 p-2.5 hover:border-slate-300 hover:bg-white transition active:scale-97 group text-center"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-rose-50 text-rose-600 border border-rose-200/70 mb-1.5 transition group-hover:scale-105">
                <ShieldAlert className="h-4 w-4" />
              </div>
              <span className="text-[11px] font-black text-slate-800">Anti-Ragging</span>
              <span className="text-[9px] text-slate-400 font-semibold mt-0.5">UGC Helpline</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Clean Navigation SideDrawer */}
      <SideDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />

    </div>
  );
}
