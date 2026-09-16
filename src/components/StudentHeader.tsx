'use client';

import React from 'react';
import { Menu, Bell, Search, X } from 'lucide-react';

interface StudentHeaderProps {
  onOpenDrawer: () => void;
  onOpenNotifications: () => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  unreadCount?: number;
  studentName?: string;
}

export const StudentHeader: React.FC<StudentHeaderProps> = ({
  onOpenDrawer,
  onOpenNotifications,
  searchQuery,
  onSearchChange,
  unreadCount = 3,
  studentName = 'Alex',
}) => {
  return (
    <div className="relative w-full">
      {/* Curved Gradient Top Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#3b31db] via-[#4840e5] to-[#2563eb] px-4 pt-5 pb-10 sm:px-6 sm:pb-12 rounded-b-[36px] shadow-md text-white">
        
        {/* Subtle decorative circles for depth */}
        <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
        <div className="pointer-events-none absolute -left-12 bottom-0 h-40 w-40 rounded-full bg-indigo-400/15 blur-xl" />

        <div className="relative mx-auto max-w-7xl">
          
          {/* Top Row: Hamburger, Portal Title, Notification Bell, Avatar */}
          <div className="flex items-center justify-between">
            
            {/* Left: Hamburger & Title */}
            <div className="flex items-center gap-3">
              <button
                onClick={onOpenDrawer}
                aria-label="Open Navigation Menu"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-white backdrop-blur-xs hover:bg-white/25 active:scale-95 transition"
              >
                <Menu className="h-5 w-5 stroke-[2.5]" />
              </button>
              <div>
                <h1 className="text-lg sm:text-xl font-black tracking-tight text-white flex items-center gap-1.5">
                  <span>Student Portal</span>
                </h1>
                <span className="text-[10px] font-bold text-blue-200 uppercase tracking-wider block -mt-0.5">
                  Patna University • PU
                </span>
              </div>
            </div>

            {/* Right: Notifications & Profile Avatar */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Notification Bell with Badge */}
              <button
                onClick={onOpenNotifications}
                className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-white backdrop-blur-xs hover:bg-white/25 active:scale-95 transition"
                title="Notifications"
              >
                <Bell className="h-5 w-5" />
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-rose-500 px-1 text-[10px] font-black text-white shadow-xs animate-pulse">
                    {unreadCount}
                  </span>
                )}
              </button>

              {/* Student Avatar */}
              <div
                onClick={onOpenDrawer}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-amber-400 to-yellow-300 p-0.5 shadow-md cursor-pointer hover:scale-105 transition"
                title="Student Profile"
              >
                <div className="flex h-full w-full items-center justify-center rounded-full bg-slate-900 text-xs font-black text-amber-300">
                  👨‍🎓
                </div>
              </div>
            </div>

          </div>

          {/* Greeting Section */}
          <div className="mt-5 mb-2">
            <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white flex items-center gap-2">
              <span>Hello, {studentName}</span>
              <span className="inline-block animate-wave origin-bottom-right">👋</span>
            </h2>
            <p className="mt-0.5 text-xs sm:text-sm text-blue-100 font-medium">
              Have a great day ahead!
            </p>
          </div>

        </div>
      </div>

      {/* Floating Search Bar (overlapping bottom of gradient) */}
      <div className="relative mx-auto -mt-6 max-w-7xl px-4 sm:px-6">
        <div className="relative flex items-center rounded-2xl bg-white p-1.5 shadow-lg shadow-indigo-500/10 border border-slate-100 dark:bg-slate-900 dark:border-slate-800">
          <Search className="ml-3 h-5 w-5 text-indigo-500 shrink-0" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search anything... (notices, exams, syllabus, colleges)"
            className="w-full bg-transparent px-3 py-2 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none dark:text-white dark:placeholder-slate-500 font-medium"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="mr-2 rounded-full p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

    </div>
  );
};
