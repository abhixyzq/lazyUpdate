'use client';

import React from 'react';
import { X, CheckCircle, BellRing, Users, ShieldCheck } from 'lucide-react';
import { WhatsAppIcon, InstagramIcon } from './OfficialBrandIcons';

interface CommunityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommunityModal: React.FC<CommunityModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/65 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-2xl dark:border-slate-800 dark:bg-slate-900 dark:text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-200 transition"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 border border-emerald-200 text-white shadow-xs">
            <WhatsAppIcon className="h-9 w-9 shrink-0" />
          </div>
          <h3 className="mt-3 text-lg font-black tracking-tight text-slate-900 dark:text-white">
            Join Patna University WhatsApp Community
          </h3>
          <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">
            Get direct PDF notices, admit card server links, semester results, and exam routines within 1 minute of release.
          </p>
        </div>

        {/* Perks */}
        <div className="mt-4 space-y-1.5 rounded-xl bg-slate-50 p-3 text-xs dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200 font-medium">
            <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" />
            <span>Direct UMIS link without crashing issues</span>
          </div>
          <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200 font-medium">
            <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" />
            <span>Separate batch groups (Science College, Patna College, etc.)</span>
          </div>
          <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200 font-medium">
            <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" />
            <span>Syllabus & Previous Year Questions PDF shares</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-5 space-y-2.5">
          {/* WhatsApp Primary */}
          <a
            href="https://chat.whatsapp.com/invite/lazyupdate-pu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-xl bg-[#25D366] px-4 py-3 font-bold text-white shadow-md hover:bg-[#20ba5a] active:scale-98 transition group"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-white/20 p-1">
                <WhatsAppIcon className="h-6 w-6 shrink-0" />
              </div>
              <div className="text-left">
                <div className="text-sm font-extrabold leading-tight">Join PU WhatsApp Channel</div>
                <div className="text-[11px] text-emerald-100 font-normal">Instant Alerts • 8,400+ PU Students</div>
              </div>
            </div>
            <span className="rounded bg-white/25 px-2 py-0.5 text-xs font-black uppercase">
              Join
            </span>
          </a>

          {/* Instagram Secondary */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-xl bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] px-4 py-3 font-bold text-white shadow-md hover:opacity-95 active:scale-98 transition group"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-white/20 p-1">
                <InstagramIcon className="h-6 w-6 shrink-0" />
              </div>
              <div className="text-left">
                <div className="text-sm font-extrabold leading-tight">Follow on Instagram</div>
                <div className="text-[11px] text-pink-100 font-normal">Campus Updates, Reels & Exam Dates</div>
              </div>
            </div>
            <span className="rounded bg-white/25 px-2 py-0.5 text-xs font-black uppercase">
              Follow
            </span>
          </a>
        </div>

        <div className="mt-4 flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
          <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
          <span>Strict No-Spam Policy. Admin-only circulars.</span>
        </div>

      </div>
    </div>
  );
};
