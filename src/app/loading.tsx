import React from 'react';

export default function Loading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-3.5 p-4 select-none">
      <div className="relative flex items-center justify-center">
        <div className="h-14 w-14 rounded-2xl bg-white p-2 shadow-xs border border-slate-200/80 flex items-center justify-center">
          <img
            src="/lazy-pu-logo.png"
            alt="Lazy PU Logo"
            className="h-10 w-auto object-contain animate-pulse"
          />
        </div>
      </div>
      <div className="flex items-center gap-2 text-slate-500 text-xs font-semibold">
        <div className="h-4 w-4 border-2 border-slate-200 border-t-blue-600 rounded-full animate-spin" />
        <span>Loading...</span>
      </div>
    </div>
  );
}
