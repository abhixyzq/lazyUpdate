'use client';

import React from 'react';
import Link from 'next/link';
import {
  Calendar,
  Clock,
  Briefcase,
  GraduationCap,
  ShieldAlert,
  Wrench,
  Heart,
  MessageSquare,
  ShieldCheck,
  ExternalLink,
} from 'lucide-react';
import { WhatsAppIcon, InstagramIcon } from './OfficialBrandIcons';

export const PortalMoreLinks: React.FC = () => {
  const moreServices = [
    {
      id: 'calendar',
      title: 'Calendar',
      tag: 'PU Holidays',
      href: '/calendar',
      icon: Calendar,
      color: 'bg-[#e0f2fe] text-blue-700',
    },
    {
      id: 'timetable',
      title: 'Timetable',
      tag: 'Class Periods',
      href: '/timetable',
      icon: Clock,
      color: 'bg-[#ede9fe] text-purple-700',
    },
    {
      id: 'internships',
      title: 'Internships',
      tag: 'PM & AICTE',
      href: '/internships',
      icon: Briefcase,
      color: 'bg-[#fef3c7] text-amber-800',
    },
    {
      id: 'scholarships',
      title: 'Scholarships',
      tag: 'PMS & NSP',
      href: '/scholarships',
      icon: GraduationCap,
      color: 'bg-[#fef9c3] text-amber-800',
    },
    {
      id: 'antiragging',
      title: 'Anti-Ragging',
      tag: 'UGC Helpline',
      href: '/antiragging',
      icon: ShieldAlert,
      color: 'bg-[#ffe4e6] text-rose-700',
    },
    {
      id: 'tools',
      title: 'All Tools',
      tag: 'Academic Kit',
      href: '/tools',
      icon: Wrench,
      color: 'bg-slate-100 text-slate-700',
    },
  ];

  return (
    <div className="mx-auto max-w-xl px-4 pt-2 pb-8 space-y-4">
      {/* 1. More Services & Portals (3-Column App-Launcher Grid) */}
      <div>
        <div className="flex items-center justify-between pb-3">
          <h2 className="text-base sm:text-lg font-black text-[#0a2558] tracking-tight">
            More Services & Portals
          </h2>
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
            Quick Hub
          </span>
        </div>

        {/* 3-Column Compact Grid */}
        <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
          {moreServices.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.id}
                href={item.href}
                className="group flex flex-col items-center text-center rounded-2xl bg-white p-3 shadow-[0_2px_10px_rgba(10,37,88,0.04)] border border-slate-100/90 hover:border-slate-200 hover:shadow-xs active:scale-95 transition cursor-pointer"
              >
                {/* Rounded Squircle Icon */}
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-2xl ${item.color} mb-2 group-hover:scale-105 transition`}
                >
                  <Icon className="h-5 w-5 stroke-[2.2]" />
                </div>

                {/* Title */}
                <h3 className="text-xs font-bold text-[#0a2558] group-hover:text-blue-900 leading-tight truncate w-full">
                  {item.title}
                </h3>

                {/* Subtitle / Tag */}
                <span className="text-[10px] font-medium text-slate-400 truncate w-full mt-0.5">
                  {item.tag}
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* 2. Clean Minimal Community Links */}
      <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
        <a
          href="https://whatsapp.com/channel/0029VbDWOxc3LdQXxMfsBl2G"
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-3 rounded-2xl bg-white p-3 border border-slate-100 shadow-[0_2px_10px_rgba(10,37,88,0.04)] hover:border-emerald-300 hover:shadow-xs transition active:scale-95 cursor-pointer"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 group-hover:scale-105 transition">
            <WhatsAppIcon className="h-5 w-5" />
          </div>
          <div className="min-w-0">
            <h4 className="text-xs font-bold text-[#0a2558] group-hover:text-emerald-700 truncate">
              WhatsApp
            </h4>
            <p className="text-[10px] text-slate-400 font-medium truncate">
              Official Channel
            </p>
          </div>
        </a>

        <a
          href="https://instagram.com/_lazypu"
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-3 rounded-2xl bg-white p-3 border border-slate-100 shadow-[0_2px_10px_rgba(10,37,88,0.04)] hover:border-pink-300 hover:shadow-xs transition active:scale-95 cursor-pointer"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-pink-50 text-pink-600 group-hover:scale-105 transition">
            <InstagramIcon className="h-5 w-5" />
          </div>
          <div className="min-w-0">
            <h4 className="text-xs font-bold text-[#0a2558] group-hover:text-pink-700 truncate">
              Instagram
            </h4>
            <p className="text-[10px] text-slate-400 font-medium truncate">
              @_lazypu
            </p>
          </div>
        </a>
      </div>

      {/* 3. Footer Links */}
      <div className="pt-2 text-center space-y-2">
        <div className="flex items-center justify-center gap-4 text-xs font-semibold text-slate-600">
          <Link
            href="/feedback"
            className="hover:text-[#0a2558] transition flex items-center gap-1"
          >
            <MessageSquare className="h-3.5 w-3.5" />
            <span>Feedback</span>
          </Link>
          <span>•</span>
          <Link
            href="/contributors"
            className="hover:text-[#0a2558] transition flex items-center gap-1"
          >
            <Heart className="h-3.5 w-3.5 text-rose-500" />
            <span>Contributors</span>
          </Link>
          <span>•</span>
          <Link
            href="/privacy"
            className="hover:text-[#0a2558] transition flex items-center gap-1"
          >
            <ShieldCheck className="h-3.5 w-3.5 text-blue-600" />
            <span>Privacy Policy</span>
          </Link>
        </div>

        <p className="text-[10px] text-slate-400">
          Lazy PU • Built with ❤️ for Patna University students. 100% Free & Open Source.
        </p>
      </div>
    </div>
  );
};
