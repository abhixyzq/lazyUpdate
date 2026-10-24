'use client';

import React from 'react';
import Link from 'next/link';
import { Heart, MessageSquare, ExternalLink } from 'lucide-react';
import { WhatsAppIcon, InstagramIcon } from './OfficialBrandIcons';

export const HumanCommunityFooter: React.FC = () => {
  return (
    <footer className="mx-auto max-w-xl px-4 pt-4 pb-8 space-y-4">
      {/* 1. Authentic Student Community Card */}
      <div className="rounded-2xl border border-emerald-200/90 bg-emerald-900 text-white p-4 sm:p-5 shadow-xs">
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-1 min-w-0">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-800 text-emerald-200 text-[10px] font-bold tracking-wider uppercase">
              STUDENT COMMUNITY
            </span>
            <h3 className="text-sm sm:text-base font-bold text-white leading-snug">
              Get instant PU exam circulars on WhatsApp
            </h3>
            <p className="text-xs text-emerald-200/90 leading-relaxed">
              Official circulars, exam routine PDFs, and semester updates delivered straight to your phone.
            </p>
          </div>

          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-800 text-emerald-300">
            <WhatsAppIcon className="h-5 w-5" />
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-emerald-800/80 flex flex-wrap items-center justify-between gap-2.5">
          <a
            href="https://whatsapp.com/channel/0029VbDWOxc3LdQXxMfsBl2G"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 active:scale-95 text-slate-950 px-3.5 py-2 text-xs font-bold transition shadow-xs"
          >
            <WhatsAppIcon className="h-4 w-4" />
            <span>Join WhatsApp Channel</span>
            <ExternalLink className="h-3 w-3" />
          </a>

          <a
            href="https://instagram.com/_lazypu"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-800/80 hover:bg-emerald-800 text-emerald-100 px-3 py-2 text-xs font-semibold transition"
          >
            <InstagramIcon className="h-3.5 w-3.5" />
            <span>@_lazypu</span>
          </a>
        </div>
      </div>

      {/* 2. Warm Human Note & Quick Links */}
      <div className="pt-2 text-center space-y-2">
        <div className="flex items-center justify-center gap-1.5 text-xs text-slate-500 font-medium">
          <span>Crafted with</span>
          <Heart className="h-3.5 w-3.5 fill-rose-500 text-rose-500" />
          <span>for Patna University students</span>
        </div>

        <div className="flex items-center justify-center gap-4 text-[11px] font-semibold text-slate-500">
          <Link href="/feedback" className="hover:text-emerald-700 transition flex items-center gap-1">
            <MessageSquare className="h-3 w-3" />
            <span>Send Feedback</span>
          </Link>
          <span>•</span>
          <Link href="/contributors" className="hover:text-emerald-700 transition">
            Contributors
          </Link>
          <span>•</span>
          <Link href="/privacy" className="hover:text-emerald-700 transition">
            Privacy
          </Link>
        </div>

        <p className="text-[10px] text-slate-400">
          100% Free & Open-source academic companion. Not officially affiliated with PU Administration.
        </p>
      </div>
    </footer>
  );
};
