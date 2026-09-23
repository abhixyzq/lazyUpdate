'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ApnaHeader } from '@/components/ApnaHeader';
import { AlertStrip } from '@/components/AlertStrip';
import { UniversityGridSection, ApnaActionType } from '@/components/UniversityGridSection';
import { SGPACalculatorModal } from '@/components/SGPACalculatorModal';
import { TimeTableModal } from '@/components/TimeTableModal';
import { HolidaysCalendarModal } from '@/components/HolidaysCalendarModal';
import { useRouter } from 'next/navigation';
import { NoticeDetailSheet } from '@/components/NoticeDetailSheet';
import { SideDrawer } from '@/components/SideDrawer';
import { ImportantLinksModal, ImportantLinkCategory } from '@/components/ImportantLinksModal';
import { CampusPartnerBanner } from '@/components/CampusPartnerBanner';

import { puNoticesData } from '@/data/puNotices';
import { PUNotice } from '@/types';
import { Link2, Briefcase, Award, ShieldAlert } from 'lucide-react';

export default function ApnaUniversityHomePage() {
  // Active university title (default Patna University, switchable)
  const [universityTitle, setUniversityTitle] = useState('PATNA UNIVERSITY');
  const [appTitle, setAppTitle] = useState('Lazy PU');

  const router = useRouter();

  // Modals state
  const [isSGPAOpen, setIsSGPAOpen] = useState(false);
  const [isTimeTableOpen, setIsTimeTableOpen] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedNotice, setSelectedNotice] = useState<PUNotice | null>(null);
  const [activeImportantLink, setActiveImportantLink] = useState<ImportantLinkCategory | null>(null);

  // Handle clicks on any of the 9 cards
  const handleAction = (action: ApnaActionType) => {
    switch (action) {
      case 'pyqs':
        router.push('/pyqs');
        break;
      case 'syllabus':
        router.push('/syllabus');
        break;
      case 'results':
        router.push('/results');
        break;
      case 'notice':
        router.push('/notices');
        break;
      case 'sgpa':
        setIsSGPAOpen(true);
        break;
      case 'timetable':
        setIsTimeTableOpen(true);
        break;
      case 'calendar':
        router.push('/calendar');
        break;
    }
  };

  const handleUniversitySwitch = (slug: string) => {
    if (slug === 'beu') {
      setUniversityTitle('BIHAR ENGINEERING UNIVERSITY');
      setAppTitle('Apna BEU');
    } else {
      setUniversityTitle('PATNA UNIVERSITY');
      setAppTitle('Lazy PU');
    }
  };

  return (
    <div className="min-h-screen bg-transparent text-slate-900 pb-28 sm:pb-16">
      
      {/* 1. Top Navbar Header */}
      <ApnaHeader
        title={appTitle}
        onOpenMenu={() => setIsDrawerOpen(true)}
      />

      {/* 2. Golden Alert / Notification Strip */}
      <AlertStrip
        text={`Join ${appTitle} whatsapp channel for latest circulars & dates... more`}
        href="https://whatsapp.com/channel/0029VbDWOxc3LdQXxMfsBl2G"
      />

      {/* 3. Main University Section Container with 3x3 Grid & Social Buttons */}
      <UniversityGridSection
        universityTitle={universityTitle}
        onSelectAction={handleAction}
      />

      {/* 4. Bottom Section: Important Links (Internships, Scholarships, Anti-Ragging) */}
      <div className="mx-auto max-w-xl px-3 pt-3">
        <div className="rounded-3xl border border-slate-200/90 bg-white p-3.5 sm:p-4 shadow-sm">
          <div className="flex items-center justify-between pb-2.5 px-1 border-b border-slate-100 mb-2.5">
            <h3 className="text-xs sm:text-sm font-black tracking-widest text-slate-900 uppercase flex items-center gap-1.5">
              <Link2 className="h-3.5 w-3.5 text-blue-600" />
              IMPORTANT LINKS
            </h3>
            <span className="text-[10px] font-bold text-slate-500">
              Govt & University Portals
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2 text-xs">
            {/* 1. Internships */}
            <Link
              href="/internships"
              className="flex flex-col items-center justify-center rounded-2xl border border-slate-200/80 bg-slate-50/70 p-2.5 font-bold hover:border-blue-400 hover:bg-white hover:shadow-xs active:scale-95 transition group text-center"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-200 mb-1.5 group-hover:scale-105 transition">
                <Briefcase className="h-4 w-4" />
              </div>
              <span className="text-[11px] font-black text-slate-800">Internships</span>
              <span className="text-[9px] text-blue-600 font-semibold mt-0.5">PM & AICTE</span>
            </Link>

            {/* 2. Scholarships */}
            <Link
              href="/scholarships"
              className="flex flex-col items-center justify-center rounded-2xl border border-slate-200/80 bg-slate-50/70 p-2.5 font-bold hover:border-emerald-400 hover:bg-white hover:shadow-xs active:scale-95 transition group text-center"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200 mb-1.5 group-hover:scale-105 transition">
                <Award className="h-4 w-4" />
              </div>
              <span className="text-[11px] font-black text-slate-800">Scholarships</span>
              <span className="text-[9px] text-emerald-600 font-semibold mt-0.5">PMS & NSP</span>
            </Link>

            {/* 3. Anti-Ragging */}
            <Link
              href="/antiragging"
              className="flex flex-col items-center justify-center rounded-2xl border border-slate-200/80 bg-slate-50/70 p-2.5 font-bold hover:border-rose-400 hover:bg-white hover:shadow-xs active:scale-95 transition group text-center"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-rose-50 text-rose-600 border border-rose-200 mb-1.5 group-hover:scale-105 transition">
                <ShieldAlert className="h-4 w-4" />
              </div>
              <span className="text-[11px] font-black text-slate-800">Anti-Ragging</span>
              <span className="text-[9px] text-rose-600 font-semibold mt-0.5">UGC Helpline</span>
            </Link>
          </div>
        </div>

        {/* Campus Partner / Sponsored Banner */}
        <CampusPartnerBanner sourcePage="home" />
      </div>

      {/* Modals & Popups */}

      {/* SGPA Calculator Modal */}
      <SGPACalculatorModal
        isOpen={isSGPAOpen}
        onClose={() => setIsSGPAOpen(false)}
      />

      {/* Time Table Routine Modal */}
      <TimeTableModal
        isOpen={isTimeTableOpen}
        onClose={() => setIsTimeTableOpen(false)}
      />

      {/* Holidays Calendar Modal */}
      <HolidaysCalendarModal
        isOpen={isCalendarOpen}
        onClose={() => setIsCalendarOpen(false)}
      />


      {/* Notice Detail Sheet */}
      <NoticeDetailSheet
        notice={selectedNotice}
        onClose={() => setSelectedNotice(null)}
      />

      {/* Important Links (Internships, Scholarships, Anti-Ragging) Modal */}
      <ImportantLinksModal
        category={activeImportantLink}
        onClose={() => setActiveImportantLink(null)}
      />

      {/* Hamburger Side Drawer (Clean, No Duplicate Grid Items, No Login Portal) */}
      <SideDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        onSelectCollege={(collegeId) => {
          setSelectedNotice(puNoticesData[0]);
          setIsDrawerOpen(false);
        }}
        onOpenCommunity={() => {
          window.open('https://whatsapp.com/channel/0029VbDWOxc3LdQXxMfsBl2G', '_blank');
          setIsDrawerOpen(false);
        }}
      />

    </div>
  );
}
