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
      <header className="sticky top-0 z-40 w-full bg-[#071328] px-4 py-3 sm:px-6 shadow-md border-b border-blue-950/60">
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
            <h1 className="text-base sm:text-lg font-black tracking-tight text-white truncate">
              {pageTitle}
            </h1>
          </div>

          {/* Right: Hamburger Menu in rounded dark-blue card */}
          <button
            onClick={handleMenuClick}
            aria-label="Open Menu"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-blue-600/50 bg-[#0d2248] text-white hover:bg-[#122e62] active:scale-95 transition"
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
