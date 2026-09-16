'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Home } from 'lucide-react';

interface SubpageHeaderProps {
  title: string;
  badge?: string;
  subtitle?: string;
}

export const SubpageHeader: React.FC<SubpageHeaderProps> = ({
  title,
  badge = 'PATNA UNIVERSITY',
  subtitle,
}) => {
  return (
    <header className="sticky top-0 z-40 border-b border-blue-900/60 bg-[#040b17]/95 backdrop-blur-md px-3 py-2.5 sm:px-4">
      <div className="mx-auto flex max-w-xl items-center justify-between gap-2">
        {/* Left: Home Back Button */}
        <Link
          href="/"
          className="flex items-center gap-1.5 rounded-xl border border-cyan-500/40 bg-[#091b36] px-3 py-1.5 text-xs font-black text-cyan-300 hover:border-cyan-400 hover:bg-[#0f284e] active:scale-95 transition shadow-xs shrink-0"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Home</span>
        </Link>

        {/* Center: Title & Badge */}
        <div className="text-center overflow-hidden">
          <div className="flex items-center justify-center gap-1.5">
            <span className="text-[10px] font-black uppercase tracking-wider text-cyan-400">
              {badge}
            </span>
          </div>
          <h1 className="text-sm sm:text-base font-black text-white truncate">
            {title}
          </h1>
          {subtitle && (
            <p className="text-[10px] text-slate-400 truncate">{subtitle}</p>
          )}
        </div>

        {/* Right: Lazy PU Logo */}
        <Link href="/" className="flex items-center gap-1.5 shrink-0 hover:opacity-90 transition">
          <div className="relative h-8 w-8 overflow-hidden rounded-xl bg-blue-950/60 border border-blue-800/80 p-0.5 shadow-sm">
            <Image
              src="/lazy-pu-logo.png"
              alt="Lazy PU Logo"
              width={32}
              height={32}
              className="h-full w-full object-contain"
              priority
            />
          </div>
        </Link>
      </div>
    </header>
  );
};
