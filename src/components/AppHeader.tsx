'use client';

import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import { Sun, Moon, ChevronDown, GraduationCap, MessageCircle, Share2 } from 'lucide-react';

interface AppHeaderProps {
  currentUniversity: string;
  onOpenUniversityModal: () => void;
  onOpenCommunityModal: () => void;
}

export const AppHeader: React.FC<AppHeaderProps> = ({
  currentUniversity,
  onOpenUniversityModal,
  onOpenCommunityModal,
}) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md dark:border-slate-800 dark:bg-[#090d16]/95 transition-colors">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-3 py-2 sm:px-6">
        
        {/* Left: Brand Logo & University Badge */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a href="/" className="group flex items-center gap-1.5 focus:outline-none">
            <div className="relative h-7 sm:h-8 w-auto flex items-center group-hover:scale-105 transition-transform">
              <img
                src="/logo.png"
                alt="Lazy Update"
                className="h-6 sm:h-7 w-auto object-contain dark:hidden"
              />
              <img
                src="/logo-dark.png"
                alt="Lazy Update"
                className="h-6 sm:h-7 w-auto object-contain hidden dark:block"
              />
            </div>
            <span className="rounded bg-blue-100 px-1 py-0.2 text-[9px] font-extrabold uppercase tracking-wider text-blue-700 dark:bg-blue-950/90 dark:text-blue-300 border border-blue-300/40 dark:border-blue-700/40 shadow-xs">
              .tech
            </span>
          </a>

          {/* University Switcher Pill */}
          <button
            onClick={onOpenUniversityModal}
            className="flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50/90 px-2.5 py-1 text-xs font-bold text-blue-800 hover:bg-blue-100 dark:border-blue-900/60 dark:bg-blue-950/60 dark:text-blue-200 dark:hover:bg-blue-900/80 transition active:scale-95 shadow-2xs"
            title="Switch University"
          >
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <GraduationCap className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
            <span className="truncate max-w-[120px] sm:max-w-[180px]">{currentUniversity}</span>
            <ChevronDown className="h-3 w-3 opacity-70" />
          </button>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          {/* Join WhatsApp Button */}
          <button
            onClick={onOpenCommunityModal}
            className="flex items-center gap-1.5 rounded-lg bg-[#25D366] px-2.5 py-1.5 text-xs font-bold text-white shadow-xs hover:bg-[#20ba59] active:scale-95 transition"
            title="Join Patna University WhatsApp Group"
          >
            <MessageCircle className="h-3.5 w-3.5 fill-current" />
            <span className="hidden sm:inline">PU WhatsApp</span>
          </button>

          {/* Dark / Light Mode Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Dark or Light Mode"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 transition active:scale-95"
          >
            {theme === 'dark' ? (
              <Sun className="h-4 w-4 text-amber-400" />
            ) : (
              <Moon className="h-4 w-4 text-slate-700" />
            )}
          </button>
        </div>

      </div>
    </header>
  );
};
