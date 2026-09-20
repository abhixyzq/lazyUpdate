'use client';

import React, { useState, useEffect } from 'react';

export const Preloader: React.FC = () => {
  const [mounted, setMounted] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Show preloader briefly on initial app mount, then smoothly fade out
    const timer = setTimeout(() => {
      setIsFading(true);
      const removeTimer = setTimeout(() => {
        setMounted(false);
      }, 400); // Wait for fade-out transition to complete
      return () => clearTimeout(removeTimer);
    }, 450);

    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <div
      aria-hidden={isFading}
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#f8fafc] transition-opacity duration-400 ease-out ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center gap-3.5 text-center select-none">
        {/* Mascot Logo with subtle pulse ring */}
        <div className="relative flex items-center justify-center">
          <div className="absolute h-16 w-16 rounded-2xl bg-blue-500/10 animate-ping opacity-75" />
          <div className="relative h-16 w-16 rounded-2xl bg-white p-2.5 shadow-sm border border-slate-200/80 flex items-center justify-center">
            <img
              src="/lazy-pu-logo.png"
              alt="Lazy PU Logo"
              className="h-11 w-auto object-contain animate-pulse"
            />
          </div>
        </div>

        {/* Brand Name */}
        <div>
          <h1 className="text-sm font-black tracking-tight text-slate-900">
            Lazy PU
          </h1>
          <p className="text-[11px] font-semibold text-slate-500">
            Patna University Portal
          </p>
        </div>

        {/* Clean Minimal Spinner */}
        <div className="pt-1">
          <div className="h-5 w-5 border-2 border-slate-200 border-t-blue-600 rounded-full animate-spin" />
        </div>
      </div>
    </div>
  );
};
