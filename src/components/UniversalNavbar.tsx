'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { SideDrawer } from './SideDrawer';
import { CommunityModal } from './CommunityModal';

interface UniversalNavbarProps {
  pageTitle?: string;
  onOpenMenu?: () => void;
}

export const UniversalNavbar: React.FC<UniversalNavbarProps> = ({
  pageTitle = 'Lazy PU',
  onOpenMenu,
}) => {
  const [internalDrawerOpen, setInternalDrawerOpen] = useState(false);
  const [isCommunityOpen, setIsCommunityOpen] = useState(false);

  const handleMenuClick = () => {
    if (onOpenMenu) {
      onOpenMenu();
    } else {
      setInternalDrawerOpen(true);
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md px-4 py-3 sm:px-6 shadow-xs border-b border-slate-200/90">
        <div className="mx-auto flex max-w-xl items-center justify-between">
          
          {/* Left: Official Lazy PU Mascot Logo Sticker */}
          <Link href="/" className="flex items-center shrink-0 hover:opacity-90 transition">
            <img
              src="/lazy-pu-logo.png"
              alt="Lazy PU Logo"
              className="h-10 sm:h-11 w-auto object-contain transition-transform hover:scale-105 active:scale-95 cursor-pointer"
            />
          </Link>

          {/* Middle: Page Name in crisp, centered, high-contrast bold typography */}
          <div className="text-center px-2 flex-1 overflow-hidden">
            <h1 className="text-base sm:text-lg font-black tracking-tight text-slate-900 truncate">
              {pageTitle}
            </h1>
          </div>

          {/* Right: Hamburger Menu in rounded clean light card */}
          <button
            onClick={handleMenuClick}
            aria-label="Open Menu"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-100/80 text-slate-700 hover:bg-slate-200 hover:text-slate-900 active:scale-95 transition"
          >
            <Menu className="h-5 w-5 stroke-[2.5]" />
          </button>

        </div>
      </header>

      {/* Built-in Drawer & Community Modal for subpages */}
      {!onOpenMenu && (
        <>
          <SideDrawer
            isOpen={internalDrawerOpen}
            onClose={() => setInternalDrawerOpen(false)}
            onOpenCommunity={() => setIsCommunityOpen(true)}
          />
          <CommunityModal
            isOpen={isCommunityOpen}
            onClose={() => setIsCommunityOpen(false)}
          />
        </>
      )}
    </>
  );
};
