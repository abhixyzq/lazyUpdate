'use client';

import React from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';

interface LightHeaderProps {
  onOpenDrawer: () => void;
  onOpenSearch?: () => void;
  onOpenProfile?: () => void;
}

export const LightHeader: React.FC<LightHeaderProps> = ({
  onOpenDrawer,
}) => {
  return (
    <>
      <header className="fixed top-0 inset-x-0 z-40 w-full bg-white/95 backdrop-blur-md px-4 py-3 sm:px-6 border-b border-emerald-100/80 shadow-[0_2px_12px_-2px_rgba(16,185,129,0.06)] transform-gpu pt-[max(0.75rem,env(safe-area-inset-top))]">
        <div className="mx-auto flex max-w-xl items-center justify-between">
          {/* Left: Clean Minimal Typography */}
          <Link href="/" className="flex flex-col group">
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 leading-none">
              Lazy <span className="text-emerald-600 font-extrabold">PU</span>
            </h1>
            <span className="text-[11px] font-normal text-slate-400 mt-1 tracking-tight">
              Patna University Companion
            </span>
          </Link>

          {/* Right: Three Line Sidebar Button */}
          <div className="flex items-center">
            <button
              onClick={onOpenDrawer}
              aria-label="Open Sidebar Menu"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-emerald-200/80 bg-white/95 text-slate-700 hover:border-emerald-400 hover:text-emerald-700 hover:bg-emerald-50/50 active:scale-95 transition shadow-2xs cursor-pointer"
            >
              <Menu className="h-4.5 w-4.5 stroke-[1.8]" />
            </button>
          </div>
        </div>
      </header>

      {/* Spacer so home page content never scrolls behind the fixed header */}
      <div className="h-16 w-full shrink-0" aria-hidden="true" />
    </>
  );
};
