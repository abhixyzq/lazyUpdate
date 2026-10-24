'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, BookOpen, FileText, Megaphone, Menu } from 'lucide-react';

interface BottomNavProps {
  onOpenDrawer?: () => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ onOpenDrawer }) => {
  const pathname = usePathname();

  const isHome = pathname === '/';
  const isSyllabus = pathname.startsWith('/syllabus');
  const isPYQs = pathname.startsWith('/pyqs');
  const isNotices = pathname.startsWith('/notices');

  return (
    <nav className="fixed bottom-0 inset-x-0 z-40 w-full bg-[#0a2558] border-t border-[#0d2e6e] shadow-[0_-4px_20px_rgba(0,0,0,0.15)] pb-[max(0.5rem,env(safe-area-inset-bottom))]">
      <div className="mx-auto flex max-w-xl items-center justify-around px-2 py-1.5">
        {/* 1. Home */}
        <Link
          href="/"
          className={`flex flex-col items-center justify-center py-1 transition cursor-pointer ${
            isHome ? 'min-w-[72px]' : 'text-blue-100/70 hover:text-white'
          }`}
        >
          {isHome ? (
            <div className="flex flex-col items-center justify-center w-full py-1 px-3.5 rounded-2xl bg-[#fef08a] text-[#0a2558] shadow-xs">
              <Home className="h-5 w-5 fill-[#0a2558] stroke-[1.5]" />
              <span className="text-[10px] font-black tracking-tight mt-0.5">
                Home
              </span>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-1 px-2">
              <Home className="h-5 w-5 stroke-[2]" />
              <span className="text-[10px] font-medium tracking-tight mt-0.5">
                Home
              </span>
            </div>
          )}
        </Link>

        {/* 2. Syllabus */}
        <Link
          href="/syllabus"
          className={`flex flex-col items-center justify-center py-1 transition cursor-pointer ${
            isSyllabus ? 'min-w-[72px]' : 'text-blue-100/70 hover:text-white'
          }`}
        >
          {isSyllabus ? (
            <div className="flex flex-col items-center justify-center w-full py-1 px-3.5 rounded-2xl bg-[#fef08a] text-[#0a2558] shadow-xs">
              <BookOpen className="h-5 w-5 stroke-[2.4]" />
              <span className="text-[10px] font-black tracking-tight mt-0.5">
                Syllabus
              </span>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-1 px-2">
              <BookOpen className="h-5 w-5 stroke-[2]" />
              <span className="text-[10px] font-medium tracking-tight mt-0.5">
                Syllabus
              </span>
            </div>
          )}
        </Link>

        {/* 3. PYQs */}
        <Link
          href="/pyqs"
          className={`flex flex-col items-center justify-center py-1 transition cursor-pointer ${
            isPYQs ? 'min-w-[72px]' : 'text-blue-100/70 hover:text-white'
          }`}
        >
          {isPYQs ? (
            <div className="flex flex-col items-center justify-center w-full py-1 px-3.5 rounded-2xl bg-[#fef08a] text-[#0a2558] shadow-xs">
              <FileText className="h-5 w-5 stroke-[2.4]" />
              <span className="text-[10px] font-black tracking-tight mt-0.5">
                PYQs
              </span>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-1 px-2">
              <FileText className="h-5 w-5 stroke-[2]" />
              <span className="text-[10px] font-medium tracking-tight mt-0.5">
                PYQs
              </span>
            </div>
          )}
        </Link>

        {/* 4. Notices */}
        <Link
          href="/notices"
          className={`flex flex-col items-center justify-center py-1 transition cursor-pointer ${
            isNotices ? 'min-w-[72px]' : 'text-blue-100/70 hover:text-white'
          }`}
        >
          {isNotices ? (
            <div className="flex flex-col items-center justify-center w-full py-1 px-3.5 rounded-2xl bg-[#fef08a] text-[#0a2558] shadow-xs">
              <Megaphone className="h-5 w-5 stroke-[2.4]" />
              <span className="text-[10px] font-black tracking-tight mt-0.5">
                Notices
              </span>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-1 px-2">
              <Megaphone className="h-5 w-5 stroke-[2]" />
              <span className="text-[10px] font-medium tracking-tight mt-0.5">
                Notices
              </span>
            </div>
          )}
        </Link>

        {/* 5. Menu / Sidebar */}
        <button
          onClick={onOpenDrawer}
          type="button"
          aria-label="Open Sidebar Menu"
          className="flex flex-col items-center justify-center py-1 px-2 text-blue-100/70 hover:text-white transition cursor-pointer"
        >
          <Menu className="h-5 w-5 stroke-[2]" />
          <span className="text-[10px] font-medium tracking-tight mt-0.5">
            Menu
          </span>
        </button>
      </div>
    </nav>
  );
};
