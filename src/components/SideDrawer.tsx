'use client';

import React, { useState } from 'react';
import {
  X,
  Building2,
  ExternalLink,
  MessageCircle,
  Send,
  Share2,
  CheckCircle2,
  Mail,
  Info,
  ShieldCheck,
  ChevronRight,
  GraduationCap
} from 'lucide-react';
import { WhatsAppIcon, TelegramIcon } from './OfficialBrandIcons';
import { puCollegesData } from '@/data/puColleges';

interface SideDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCollege?: (collegeId: string) => void;
  onOpenCommunity?: () => void;
}

export const SideDrawer: React.FC<SideDrawerProps> = ({
  isOpen,
  onClose,
  onSelectCollege,
  onOpenCommunity,
}) => {
  const [copiedShare, setCopiedShare] = useState(false);
  const [feedbackSent, setFeedbackSent] = useState(false);

  if (!isOpen) return null;

  const handleShareApp = () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      navigator
        .share({
          title: 'Lazy PU - Patna University Student Portal',
          text: 'Check Patna University Syllabus, PYQs, Notices, Attendance & SGPA Calculator on Lazy PU!',
          url: window.location.origin,
        })
        .catch(() => {});
    } else if (typeof navigator !== 'undefined') {
      navigator.clipboard.writeText(window.location.origin);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-xs animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Drawer Panel - Clean Light Mode */}
      <div className="relative z-10 flex h-full w-[85%] max-w-sm flex-col bg-white border-r border-slate-200 text-slate-900 shadow-2xl animate-in slide-in-from-left duration-200">
        
        {/* Drawer Header with Logo & Identity */}
        <div className="relative border-b border-slate-100 bg-slate-50/80 p-5">
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="absolute top-4 right-4 rounded-xl border border-slate-200 bg-white p-1.5 text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-3 pt-1">
            <img
              src="/lazy-pu-logo.png"
              alt="Lazy PU Logo"
              className="h-14 w-auto object-contain"
            />
            <div>
              <span className="inline-block rounded-md bg-blue-50 border border-blue-200 px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-blue-700">
                Official Student Portal
              </span>
              <p className="mt-1 text-xs text-slate-800 font-bold">
                Patna University
              </p>
              <p className="text-[10px] text-slate-500">
                No Login Required • Open Access
              </p>
            </div>
          </div>
        </div>

        {/* Drawer Content */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-5 text-xs">
          
          {/* Section 1: Constituent Colleges */}
          <div>
            <div className="flex items-center justify-between mb-2 px-1">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 flex items-center gap-1.5">
                <Building2 className="h-3.5 w-3.5 text-blue-600" />
                CONSTITUENT COLLEGES
              </span>
              <span className="text-[10px] font-bold text-slate-400">
                PU Campuses
              </span>
            </div>

            <div className="space-y-1">
              {puCollegesData.filter(c => c.id !== 'all').map((college) => (
                <button
                  key={college.id}
                  onClick={() => {
                    if (onSelectCollege) onSelectCollege(college.id);
                    onClose();
                  }}
                  className="flex w-full items-center justify-between rounded-xl border border-slate-200/80 bg-slate-50/70 px-3 py-2 text-left font-bold text-slate-800 hover:border-blue-400 hover:bg-white hover:shadow-xs transition group"
                >
                  <div className="truncate pr-2">
                    <div className="text-xs text-slate-900 truncate">{college.name}</div>
                    <div className="text-[10px] text-blue-600 font-semibold">{college.tag}</div>
                  </div>
                  <ChevronRight className="h-3.5 w-3.5 text-slate-400 group-hover:text-blue-600 shrink-0 transition" />
                </button>
              ))}
            </div>
          </div>

          {/* Section 2: Official University Portals */}
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 px-1 mb-2 block">
              OFFICIAL PU PORTALS
            </span>

            <div className="space-y-1">
              <a
                href="https://pup.ac.in"
                target="_blank"
                rel="noreferrer"
                className="flex w-full items-center justify-between rounded-xl border border-slate-200/80 bg-slate-50/70 px-3 py-2.5 font-bold text-slate-800 hover:border-blue-400 hover:bg-white hover:text-slate-900 transition"
              >
                <div className="flex items-center gap-2.5">
                  <ExternalLink className="h-3.5 w-3.5 text-blue-600" />
                  <span>Patna University (pup.ac.in)</span>
                </div>
                <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
              </a>

              <a
                href="https://pup.ac.in/umis"
                target="_blank"
                rel="noreferrer"
                className="flex w-full items-center justify-between rounded-xl border border-slate-200/80 bg-slate-50/70 px-3 py-2.5 font-bold text-slate-800 hover:border-blue-400 hover:bg-white hover:text-slate-900 transition"
              >
                <div className="flex items-center gap-2.5">
                  <GraduationCap className="h-3.5 w-3.5 text-blue-600" />
                  <span>UMIS Admit Card & Exam Portal</span>
                </div>
                <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Section 3: Community & Socials */}
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 px-1 mb-2 block">
              STUDENT COMMUNITY
            </span>

            <div className="space-y-1.5">
              <button
                onClick={() => {
                  if (onOpenCommunity) onOpenCommunity();
                  onClose();
                }}
                className="flex w-full items-center justify-between rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2.5 font-bold text-emerald-800 hover:bg-emerald-100 transition"
              >
                <div className="flex items-center gap-2.5">
                  <WhatsAppIcon className="h-4 w-4 shrink-0" />
                  <span>Join WhatsApp Channel</span>
                </div>
                <span className="text-[10px] bg-emerald-100 px-2 py-0.5 rounded text-emerald-800 font-black">
                  Join
                </span>
              </button>

              <button
                onClick={() => {
                  if (onOpenCommunity) onOpenCommunity();
                  onClose();
                }}
                className="flex w-full items-center justify-between rounded-xl border border-sky-200 bg-sky-50 px-3 py-2.5 font-bold text-sky-800 hover:bg-sky-100 transition"
              >
                <div className="flex items-center gap-2.5">
                  <TelegramIcon className="h-4 w-4 shrink-0" />
                  <span>Join Telegram Study Group</span>
                </div>
                <span className="text-[10px] bg-sky-100 px-2 py-0.5 rounded text-sky-800 font-black">
                  Join
                </span>
              </button>

              <button
                onClick={handleShareApp}
                className="flex w-full items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 font-bold text-slate-800 hover:bg-white transition"
              >
                <div className="flex items-center gap-2.5">
                  {copiedShare ? (
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  ) : (
                    <Share2 className="h-4 w-4 text-blue-600" />
                  )}
                  <span>{copiedShare ? 'App Link Copied!' : 'Share App with Friends'}</span>
                </div>
                <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
              </button>
            </div>
          </div>

          {/* Section 4: Support & About */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3 space-y-2">
            <div className="flex items-center gap-1.5 text-slate-800 font-bold text-[11px]">
              <Info className="h-3.5 w-3.5 text-blue-600" />
              <span>About Lazy PU</span>
            </div>
            <p className="text-[10px] text-slate-500 leading-relaxed">
              Lazy PU is an open-access student companion platform built to help Patna University students access circulars, CBCS syllabi, and academic tools without login barriers.
            </p>
            <div className="pt-1 flex items-center justify-between text-[10px] text-slate-500 border-t border-slate-200/80">
              <span>Need help or PYQs?</span>
              <a
                href="mailto:support@lazyupdate.tech"
                className="text-blue-600 hover:underline font-bold flex items-center gap-1"
              >
                <Mail className="h-3 w-3" /> Contact Us
              </a>
            </div>
          </div>

        </div>

        {/* Drawer Footer */}
        <div className="border-t border-slate-100 p-3 bg-slate-50 text-center">
          <p className="text-[10px] font-bold text-slate-500">
            Lazy PU v2.0 • Made with ❤️ for PU Students
          </p>
        </div>

      </div>
    </div>
  );
};
