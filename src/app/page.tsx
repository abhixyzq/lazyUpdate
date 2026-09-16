'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ApnaHeader } from '@/components/ApnaHeader';
import { AlertStrip } from '@/components/AlertStrip';
import { UniversityGridSection, ApnaActionType } from '@/components/UniversityGridSection';
import { PromoAppCard } from '@/components/PromoAppCard';
import { SGPACalculatorModal } from '@/components/SGPACalculatorModal';
import { AttendanceCalcModal } from '@/components/AttendanceCalcModal';
import { TimeTableModal } from '@/components/TimeTableModal';
import { HolidaysCalendarModal } from '@/components/HolidaysCalendarModal';
import { useRouter } from 'next/navigation';
import { NoticeDetailSheet } from '@/components/NoticeDetailSheet';
import { CommunityModal } from '@/components/CommunityModal';
import { SideDrawer } from '@/components/SideDrawer';
import { ImportantLinksModal, ImportantLinkCategory } from '@/components/ImportantLinksModal';

import { puNoticesData } from '@/data/puNotices';
import { PUNotice } from '@/types';
import { X, Award, ExternalLink, ArrowLeft, Briefcase, ShieldAlert, Link2 } from 'lucide-react';

export default function ApnaUniversityHomePage() {
  // Active university title (default Patna University, switchable)
  const [universityTitle, setUniversityTitle] = useState('PATNA UNIVERSITY');
  const [appTitle, setAppTitle] = useState('Lazy PU');

  const router = useRouter();

  // Modals state
  const [isSGPAOpen, setIsSGPAOpen] = useState(false);
  const [isAttendanceOpen, setIsAttendanceOpen] = useState(false);
  const [isTimeTableOpen, setIsTimeTableOpen] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isCommunityOpen, setIsCommunityOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedNotice, setSelectedNotice] = useState<PUNotice | null>(null);
  const [isResultsModalOpen, setIsResultsModalOpen] = useState(false);
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
        setIsResultsModalOpen(true);
        break;
      case 'notice':
        setSelectedNotice(puNoticesData[0]);
        break;
      case 'attendance':
        setIsAttendanceOpen(true);
        break;
      case 'sgpa':
        setIsSGPAOpen(true);
        break;
      case 'timetable':
        setIsTimeTableOpen(true);
        break;
      case 'calendar':
        setIsCalendarOpen(true);
        break;
      case 'extras':
        setIsDrawerOpen(true);
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
    <div className="min-h-screen bg-transparent text-white pb-12">
      
      {/* 1. Top Navbar Header */}
      <ApnaHeader
        title={appTitle}
        onOpenMenu={() => setIsDrawerOpen(true)}
      />

      {/* 2. Golden Alert / Notification Strip */}
      <AlertStrip
        text={`Join ${appTitle} whatsapp channel for latest circulars & dates... more`}
        onJoin={() => setIsCommunityOpen(true)}
      />

      {/* 3. Main University Section Container with 3x3 Grid & Social Buttons */}
      <UniversityGridSection
        universityTitle={universityTitle}
        onSelectAction={handleAction}
        onTelegram={() => setIsCommunityOpen(true)}
        onWhatsApp={() => setIsCommunityOpen(true)}
      />

      {/* 4. Secondary Promo Card: Apna GATE / AI Practice */}
      <PromoAppCard
        onDownloadApp={() => setIsCommunityOpen(true)}
        onSelectTag={(tag) => {
          if (tag.includes('CalC')) {
            setIsSGPAOpen(true);
          } else {
            router.push('/syllabus');
          }
        }}
      />

      {/* 5. Bottom Section: Important Links (Internships, Scholarships, Anti-Ragging) */}
      <div className="mx-auto max-w-xl px-3 pt-3">
        <div className="rounded-3xl border border-blue-900/80 bg-[#091a36] p-3.5 sm:p-4 shadow-xl">
          <div className="flex items-center justify-between pb-2.5 px-1 border-b border-blue-900/50 mb-2.5">
            <h3 className="text-xs sm:text-sm font-black tracking-widest text-[#00d2ff] uppercase flex items-center gap-1.5">
              <Link2 className="h-3.5 w-3.5 text-cyan-400" />
              IMPORTANT LINKS
            </h3>
            <span className="text-[10px] font-bold text-slate-400">
              Govt & University Portals
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2 text-xs">
            {/* 1. Internships */}
            <Link
              href="/internships"
              className="flex flex-col items-center justify-center rounded-2xl border border-blue-800/60 bg-[#12264c] p-2.5 font-bold hover:border-cyan-400 hover:bg-[#16305e] active:scale-95 transition group text-center"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/20 text-cyan-300 border border-cyan-500/30 mb-1.5 group-hover:scale-105 transition">
                <Briefcase className="h-4 w-4" />
              </div>
              <span className="text-[11px] font-black text-white">Internships</span>
              <span className="text-[9px] text-cyan-400/80 font-semibold mt-0.5">PM & AICTE</span>
            </Link>

            {/* 2. Scholarships */}
            <Link
              href="/scholarships"
              className="flex flex-col items-center justify-center rounded-2xl border border-blue-800/60 bg-[#12264c] p-2.5 font-bold hover:border-emerald-400 hover:bg-[#16305e] active:scale-95 transition group text-center"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mb-1.5 group-hover:scale-105 transition">
                <Award className="h-4 w-4" />
              </div>
              <span className="text-[11px] font-black text-white">Scholarships</span>
              <span className="text-[9px] text-emerald-400/80 font-semibold mt-0.5">PMS & NSP</span>
            </Link>

            {/* 3. Anti-Ragging */}
            <Link
              href="/antiragging"
              className="flex flex-col items-center justify-center rounded-2xl border border-blue-800/60 bg-[#12264c] p-2.5 font-bold hover:border-rose-400 hover:bg-[#16305e] active:scale-95 transition group text-center"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-rose-500/20 text-rose-400 border border-rose-500/30 mb-1.5 group-hover:scale-105 transition">
                <ShieldAlert className="h-4 w-4" />
              </div>
              <span className="text-[11px] font-black text-white">Anti-Ragging</span>
              <span className="text-[9px] text-rose-400/80 font-semibold mt-0.5">UGC Helpline</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Modals & Popups */}

      {/* SGPA Calculator Modal */}
      <SGPACalculatorModal
        isOpen={isSGPAOpen}
        onClose={() => setIsSGPAOpen(false)}
      />

      {/* Attendance Calculator Modal */}
      <AttendanceCalcModal
        isOpen={isAttendanceOpen}
        onClose={() => setIsAttendanceOpen(false)}
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



      {/* Results Modal */}
      {isResultsModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-150"
          onClick={() => setIsResultsModalOpen(false)}
        >
          <div
            className="relative w-full max-w-md rounded-3xl border border-blue-900 bg-[#0a1b38] p-5 sm:p-6 shadow-2xl text-white text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsResultsModalOpen(false)}
              className="absolute right-4 top-4 rounded-full p-1 text-slate-400 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/20 text-3xl border border-emerald-500/40 mb-3">
              📊
            </div>

            <h3 className="text-base font-black text-white">Direct Results & GradeSheets</h3>
            <p className="text-xs text-slate-300 mt-1">
              Check SGPA digital marksheet with direct roll number lookup without server crashing.
            </p>

            <div className="mt-5 space-y-2.5">
              <a
                href="https://pup.ac.in/umis/results"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-[#00f0aa] py-2.5 text-xs font-black text-[#052b22] hover:bg-[#00d898]"
              >
                <span>Server 1: UMIS Result Portal</span>
                <ExternalLink className="h-4 w-4" />
              </a>

              <a
                href="https://pup.ac.in/umis/results"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl border border-cyan-500/50 bg-[#0c2752] py-2.5 text-xs font-black text-cyan-200 hover:bg-[#123368]"
              >
                <span>Server 2: Fast Roll Number Lookup</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Notice Detail Sheet */}
      <NoticeDetailSheet
        notice={selectedNotice}
        onClose={() => setSelectedNotice(null)}
      />

      {/* Community WhatsApp / Telegram Modal */}
      <CommunityModal
        isOpen={isCommunityOpen}
        onClose={() => setIsCommunityOpen(false)}
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
          setIsCommunityOpen(true);
          setIsDrawerOpen(false);
        }}
      />

    </div>
  );
}
