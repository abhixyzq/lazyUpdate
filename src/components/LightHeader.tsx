'use client';

import React from 'react';
import Link from 'next/link';
import { Menu, Search } from 'lucide-react';

interface LightHeaderProps {
  onOpenDrawer: () => void;
  onOpenSearch?: () => void;
  onOpenProfile?: () => void;
}

export const LightHeader: React.FC<LightHeaderProps> = ({
  onOpenDrawer,
  onOpenSearch,
}) => {
  return (
    <>
      <header className="fixed top-0 inset-x-0 z-40 w-full bg-white/95 backdrop-blur-md px-4 py-3 sm:px-6 border-b border-slate-200/90 shadow-2xs pt-[max(0.75rem,env(safe-area-inset-top))]">
        <div className="mx-auto flex max-w-xl items-center justify-between">
          {/* Left: Clean Minimal Typography & University Status */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <h1 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 leading-none">
                  Lazy <span className="text-emerald-600 font-extrabold">PU</span>
                </h1>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[9px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200/70">
                  PU Hub
                </span>
              </div>
              <span className="text-[11px] font-medium text-slate-500 tracking-tight mt-0.5">
                Patna University Companion
              </span>
            </div>
          </Link>

          {/* Right: Quick Search + Sidebar Menu */}
          <div className="flex items-center gap-1.5">
            {onOpenSearch && (
              <button
                onClick={onOpenSearch}
                aria-label="Open Search"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 hover:border-emerald-500 hover:text-emerald-700 hover:bg-emerald-50 active:scale-95 transition cursor-pointer"
              >
                <Search className="h-4.5 w-4.5 stroke-[2]" />
              </button>
            )}
            <button
              onClick={onOpenDrawer}
              aria-label="Open Sidebar Menu"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 hover:border-emerald-500 hover:text-emerald-700 hover:bg-emerald-50 active:scale-95 transition cursor-pointer"
            >
              <Menu className="h-5 w-5 stroke-[2]" />
            </button>
          </div>
        </div>
      </header>

      {/* Spacer so home page content never scrolls behind the fixed header */}
      <div className="h-16 w-full shrink-0" aria-hidden="true" />
    </>
  );
};
