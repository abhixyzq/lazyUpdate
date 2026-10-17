'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, BookOpen, Megaphone, LayoutGrid, MoreHorizontal } from 'lucide-react';

interface BottomNavProps {
  onOpenDrawer?: () => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ onOpenDrawer }) => {
  const pathname = usePathname();

  const isHome = pathname === '/';
  const isSyllabus = pathname.startsWith('/syllabus');
  const isNotices = pathname.startsWith('/notices');
  const isTools = pathname.startsWith('/tools');

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-around border-t border-emerald-100/80 bg-white/90 px-2 py-1.5 backdrop-blur-md shadow-[0_-4px_20px_-2px_rgba(16,185,129,0.07)] pb-[env(safe-area-inset-bottom,8px)]">
      {/* 1. Home */}
      <Link
        href="/"
        className={`flex flex-col items-center justify-center py-1 px-3 transition rounded-2xl ${
          isHome ? 'text-emerald-900 font-bold' : 'text-slate-400 hover:text-slate-700'
        }`}
      >
        <div
          className={`flex items-center justify-center px-3.5 py-1 rounded-full transition-all ${
            isHome ? 'bg-emerald-100/70 text-emerald-900' : ''
          }`}
        >
          <Home className={`h-5 w-5 ${isHome ? 'fill-emerald-800 text-emerald-800' : 'stroke-[1.8]'}`} />
        </div>
        <span className="text-[10px] tracking-tight mt-0.5 font-medium">Home</span>
      </Link>

      {/* 2. Syllabus */}
      <Link
        href="/syllabus"
        className={`flex flex-col items-center justify-center py-1 px-3 transition rounded-2xl ${
          isSyllabus ? 'text-emerald-900 font-bold' : 'text-slate-400 hover:text-slate-700'
        }`}
      >
        <div
          className={`flex items-center justify-center px-3.5 py-1 rounded-full transition-all ${
            isSyllabus ? 'bg-emerald-100/70 text-emerald-900' : ''
          }`}
        >
          <BookOpen className={`h-5 w-5 ${isSyllabus ? 'stroke-[2.2]' : 'stroke-[1.8]'}`} />
        </div>
        <span className="text-[10px] tracking-tight mt-0.5 font-medium">Syllabus</span>
      </Link>

      {/* 3. Notices */}
      <Link
        href="/notices"
        className={`flex flex-col items-center justify-center py-1 px-3 transition rounded-2xl ${
          isNotices ? 'text-emerald-900 font-bold' : 'text-slate-400 hover:text-slate-700'
        }`}
      >
        <div
          className={`flex items-center justify-center px-3.5 py-1 rounded-full transition-all ${
            isNotices ? 'bg-emerald-100/70 text-emerald-900' : ''
          }`}
        >
          <Megaphone className={`h-5 w-5 ${isNotices ? 'stroke-[2.2]' : 'stroke-[1.8]'}`} />
        </div>
        <span className="text-[10px] tracking-tight mt-0.5 font-medium">Notices</span>
      </Link>

      {/* 4. Tools */}
      <Link
        href="/tools"
        className={`flex flex-col items-center justify-center py-1 px-3 transition rounded-2xl ${
          isTools ? 'text-emerald-900 font-bold' : 'text-slate-400 hover:text-slate-700'
        }`}
      >
        <div
          className={`flex items-center justify-center px-3.5 py-1 rounded-full transition-all ${
            isTools ? 'bg-emerald-100/70 text-emerald-900' : ''
          }`}
        >
          <LayoutGrid className={`h-5 w-5 ${isTools ? 'stroke-[2.2]' : 'stroke-[1.8]'}`} />
        </div>
        <span className="text-[10px] tracking-tight mt-0.5 font-medium">Tools</span>
      </Link>

      {/* 5. More */}
      <button
        onClick={onOpenDrawer}
        type="button"
        className="flex flex-col items-center justify-center py-1 px-3 text-slate-400 hover:text-slate-700 transition"
      >
        <div className="flex items-center justify-center px-3.5 py-1 rounded-full">
          <MoreHorizontal className="h-5 w-5 stroke-[1.8]" />
        </div>
        <span className="text-[10px] tracking-tight mt-0.5 font-medium">More</span>
      </button>
    </nav>
  );
};
