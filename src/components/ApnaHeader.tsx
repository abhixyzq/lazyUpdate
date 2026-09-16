'use client';

import React from 'react';
import { Menu, GraduationCap } from 'lucide-react';

interface ApnaHeaderProps {
  onOpenMenu: () => void;
  title?: string;
}

export const ApnaHeader: React.FC<ApnaHeaderProps> = ({
  onOpenMenu,
  title = 'Lazy PU',
}) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#071328] px-4 py-3 sm:px-6 shadow-md border-b border-blue-950/60">
      <div className="mx-auto flex max-w-xl items-center justify-between">
        
        {/* Left: Official Lazy PU Logo Sticker */}
        <div className="flex items-center gap-2">
          <img
            src="/lazy-pu-logo.png"
            alt={title}
            className="h-10 sm:h-11 w-auto object-contain transition-transform hover:scale-105 active:scale-95 cursor-pointer"
          />
          {title !== 'Lazy PU' && (
            <span className="text-base font-black tracking-tight text-white">
              {title}
            </span>
          )}
        </div>

        {/* Right: Hamburger Menu in rounded dark-blue card */}
        <button
          onClick={onOpenMenu}
          aria-label="Open Menu"
          className="flex h-9 w-9 items-center justify-center rounded-xl border border-blue-600/50 bg-[#0d2248] text-white hover:bg-[#122e62] active:scale-95 transition"
        >
          <Menu className="h-5 w-5 stroke-[2.5]" />
        </button>

      </div>
    </header>
  );
};
