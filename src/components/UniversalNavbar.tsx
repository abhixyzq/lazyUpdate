'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ChevronLeft, Menu } from 'lucide-react';
import { SideDrawer } from './SideDrawer';

interface UniversalNavbarProps {
  pageTitle?: string;
  onOpenMenu?: () => void;
  showBack?: boolean;
}

export const UniversalNavbar: React.FC<UniversalNavbarProps> = ({
  pageTitle = 'Lazy PU',
  onOpenMenu,
  showBack = true,
}) => {
  const router = useRouter();
  const [internalDrawerOpen, setInternalDrawerOpen] = useState(false);

  const handleMenuClick = () => {
    if (onOpenMenu) {
      onOpenMenu();
    } else {
      setInternalDrawerOpen(true);
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md px-3 py-2.5 sm:px-6 shadow-2xs border-b border-slate-100">
        <div className="mx-auto flex max-w-xl items-center justify-between gap-2">
          
          {/* Left: Back Arrow or Lazy PU Branding */}
          <div className="flex items-center gap-2">
            {showBack && (
              <button
                onClick={() => router.back()}
                aria-label="Go Back"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200/80 bg-white text-slate-600 hover:border-emerald-300 hover:text-emerald-700 active:scale-95 transition"
              >
                <ChevronLeft className="h-4 w-4 stroke-[2]" />
              </button>
            )}
            <Link href="/" className="flex items-baseline gap-0.5 group">
              <span className="text-base font-bold tracking-tight text-slate-900">
                Lazy <span className="text-emerald-600 font-extrabold">PU</span>
              </span>
            </Link>
          </div>

          {/* Middle: Page Title */}
          <div className="text-center px-2 flex-1 overflow-hidden">
            <h1 className="text-xs sm:text-sm font-semibold tracking-tight text-slate-800 truncate">
              {pageTitle}
            </h1>
          </div>

          {/* Right: Minimal Menu Button */}
          <button
            onClick={handleMenuClick}
            aria-label="Open Menu"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200/80 bg-white text-slate-600 hover:border-emerald-300 hover:text-emerald-700 active:scale-95 transition"
          >
            <Menu className="h-4 w-4 stroke-[1.8]" />
          </button>

        </div>
      </header>

      {/* Built-in Drawer for subpages */}
      {!onOpenMenu && (
        <SideDrawer
          isOpen={internalDrawerOpen}
          onClose={() => setInternalDrawerOpen(false)}
          onOpenCommunity={() => window.open('https://whatsapp.com/channel/0029VbDWOxc3LdQXxMfsBl2G', '_blank')}
        />
      )}
    </>
  );
};
