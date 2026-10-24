'use client';

import React from 'react';
import Link from 'next/link';
import { Bell, Menu } from 'lucide-react';

interface StudentPortalHeroProps {
  onOpenDrawer: () => void;
}

export const StudentPortalHero: React.FC<StudentPortalHeroProps> = ({
  onOpenDrawer,
}) => {
  return (
    <div className="relative bg-gradient-to-b from-[#09204e] via-[#0c2b66] to-[#0f3478] text-white pt-[max(1rem,env(safe-area-inset-top))] pb-5 sm:pb-6">
      {/* Top Header Bar */}
      <div className="mx-auto max-w-xl px-5 pt-2 flex items-center justify-between">
        {/* Left: LazyPU Brand */}
        <Link href="/" className="flex flex-col group">
          <div className="flex items-center gap-1">
            <span className="text-2xl sm:text-[28px] font-black tracking-tight text-[#fde047] drop-shadow-xs font-sans">
              LazyPU
            </span>
          </div>
          <span className="text-[10px] sm:text-[11px] font-extrabold tracking-[0.25em] text-blue-100/90 uppercase -mt-0.5">
            STUDENT PORTAL
          </span>
        </Link>

        {/* Right: Bell (Notice link) & Sidebar Menu Icon */}
        <div className="flex items-center gap-2.5">
          {/* Bell Icon Linking to Notices Page */}
          <Link
            href="/notices"
            aria-label="View University Notices"
            className="relative flex h-9 w-9 items-center justify-center rounded-xl hover:bg-white/10 text-white/90 hover:text-white transition active:scale-95 cursor-pointer"
          >
            <Bell className="h-5 w-5 stroke-[2.2]" />
            <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-rose-500 ring-2 ring-[#0c2b66]" />
          </Link>

          {/* Sidebar Menu Icon */}
          <button
            onClick={onOpenDrawer}
            aria-label="Open Sidebar Menu"
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 text-white transition active:scale-95 cursor-pointer"
          >
            <Menu className="h-5 w-5 stroke-[2.2]" />
          </button>
        </div>
      </div>

      {/* Hero Headline Row */}
      <div className="mx-auto max-w-xl px-5 pt-5 pb-3">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
          Your Campus. <span className="text-[#fde047]">Simplified.</span>
        </h1>

        <p className="mt-1.5 text-xs sm:text-[13px] text-blue-100/80 font-normal leading-relaxed max-w-md">
          Everything you need for your university life, in one place.
        </p>
      </div>

      {/* Smooth Curved Wave Divider into Cream Background */}
      <div className="absolute -bottom-1 inset-x-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-7 sm:h-9 text-[#faf5ea] fill-current"
        >
          <path d="M0,0 C300,70 900,70 1200,0 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </div>
  );
};
