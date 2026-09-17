'use client';

import React from 'react';
import { Home, Calendar, MessageSquare, LayoutGrid } from 'lucide-react';

export type MainTabType = 'updates' | 'syllabus' | 'results' | 'community';

interface BottomNavProps {
  activeTab: MainTabType;
  setActiveTab: (tab: MainTabType) => void;
  onOpenCommunity?: () => void;
  onOpenDrawer: () => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  activeTab,
  setActiveTab,
  onOpenCommunity,
  onOpenDrawer,
}) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-around border-t border-slate-200/80 bg-white/95 px-2 py-2 backdrop-blur-md dark:border-slate-800 dark:bg-[#090d16]/95 transition-colors shadow-lg pb-[env(safe-area-inset-bottom,10px)]">
      
      {/* 1. Home */}
      <button
        onClick={() => setActiveTab('updates')}
        className={`flex flex-col items-center justify-center flex-1 py-1 transition ${
          activeTab === 'updates'
            ? 'text-indigo-600 dark:text-indigo-400 font-extrabold'
            : 'text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300'
        }`}
      >
        <Home className={`h-5 w-5 ${activeTab === 'updates' ? 'stroke-[2.5px]' : 'stroke-2'}`} />
        <span className="text-[10px] tracking-tight mt-1 font-semibold">Home</span>
      </button>

      {/* 2. Calendar / Events / Syllabus */}
      <button
        onClick={() => setActiveTab('syllabus')}
        className={`flex flex-col items-center justify-center flex-1 py-1 transition ${
          activeTab === 'syllabus'
            ? 'text-indigo-600 dark:text-indigo-400 font-extrabold'
            : 'text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300'
        }`}
      >
        <Calendar className={`h-5 w-5 ${activeTab === 'syllabus' ? 'stroke-[2.5px]' : 'stroke-2'}`} />
        <span className="text-[10px] tracking-tight mt-1 font-semibold">Calendar</span>
      </button>

      {/* 3. Messages / WhatsApp */}
      <button
        onClick={onOpenCommunity || (() => window.open('https://whatsapp.com/channel/0029VbDWOxc3LdQXxMfsBl2G', '_blank'))}
        className="flex flex-col items-center justify-center flex-1 py-1 text-slate-400 hover:text-indigo-600 dark:text-slate-500 dark:hover:text-indigo-400 transition"
      >
        <MessageSquare className="h-5 w-5 stroke-2" />
        <span className="text-[10px] tracking-tight mt-1 font-semibold">Messages</span>
      </button>

      {/* 4. More (Grid icon) */}
      <button
        onClick={onOpenDrawer}
        className="flex flex-col items-center justify-center flex-1 py-1 text-slate-400 hover:text-indigo-600 dark:text-slate-500 dark:hover:text-indigo-400 transition"
      >
        <LayoutGrid className="h-5 w-5 stroke-2" />
        <span className="text-[10px] tracking-tight mt-1 font-semibold">More</span>
      </button>

    </nav>
  );
};
