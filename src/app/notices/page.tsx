'use client';

import React, { useState, useMemo } from 'react';
import { SubpageHeader } from '@/components/SubpageHeader';
import { puNoticesData, puFlashUpdates } from '@/data/puNotices';
import { PUNotice, NoticeCategory } from '@/types';
import { Search, Bell, FileDown, ExternalLink, Calendar, Filter, AlertCircle, X } from 'lucide-react';

export default function NoticesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNotice, setSelectedNotice] = useState<PUNotice | null>(null);

  const filteredNotices = useMemo(() => {
    return puNoticesData.filter((notice) => {
      const matchCat = selectedCategory === 'all' || notice.category === selectedCategory;
      const matchSearch =
        notice.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        notice.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
        notice.collegeName.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-transparent text-white pb-12">
      <SubpageHeader title="PU Notice" />

      <main className="mx-auto max-w-xl px-3 pt-4 space-y-4">
        {/* Urgent Live Alert */}
        <div className="rounded-2xl border border-amber-500/40 bg-[#261906] p-3.5 text-xs text-amber-200 flex items-start gap-2.5 shadow-md">
          <Bell className="h-4 w-4 text-amber-400 shrink-0 mt-0.5 animate-bounce" />
          <div>
            <span className="font-black text-amber-300 uppercase tracking-wider block text-[10px]">
              LATEST HIGHLIGHT: {puFlashUpdates[0]?.badge}
            </span>
            <p className="mt-0.5 text-slate-200 leading-relaxed">
              {puFlashUpdates[0]?.text}
            </p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="pointer-events-none absolute left-3.5 top-2.5 h-4 w-4 text-cyan-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search circulars (e.g., Admit Card, Merit List, Science College)..."
            className="w-full rounded-2xl border border-blue-900 bg-[#06142a] pl-10 pr-4 py-2 text-xs sm:text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none shadow-inner"
          />
        </div>

        {/* Category Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
          {[
            { id: 'all', label: 'All Notices' },
            { id: 'exams', label: 'Exams & Form Filling' },
            { id: 'admissions', label: 'Admissions & Merit' },
            { id: 'results', label: 'Results & Marksheets' },
          ].map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex shrink-0 items-center rounded-xl px-3 py-1.5 text-xs font-bold transition-all ${
                  isActive
                    ? 'border border-cyan-400 bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md font-black'
                    : 'border border-blue-900/60 bg-[#07162d] text-slate-400 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Notices List */}
        <div className="space-y-3">
          {filteredNotices.map((notice) => (
            <div
              key={notice.id}
              onClick={() => setSelectedNotice(notice)}
              className="cursor-pointer rounded-2xl border border-blue-900/70 bg-[#091a36] p-4 shadow-md hover:border-cyan-400 hover:bg-[#0c234a] transition group"
            >
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <span className="rounded-md bg-blue-950 px-2 py-0.5 text-[10px] font-black text-cyan-300 border border-blue-800">
                  {notice.collegeName}
                </span>
                <span className="flex items-center gap-1 text-[10px] text-slate-400">
                  <Calendar className="h-3 w-3" /> {notice.updatedAt}
                </span>
              </div>

              <h3 className="text-xs sm:text-sm font-black text-white group-hover:text-cyan-200 leading-snug">
                {notice.title}
              </h3>

              {notice.description && (
                <p className="text-[11px] text-slate-300 mt-1 line-clamp-2 leading-relaxed">
                  {notice.description}
                </p>
              )}

              <div className="flex items-center justify-between pt-2.5 mt-2.5 border-t border-blue-900/60 text-xs">
                <span className="text-[10px] text-amber-400 font-bold">
                  Deadline: {notice.deadline}
                </span>
                <span className="text-cyan-400 text-xs font-black group-hover:underline flex items-center gap-1">
                  View Notice ↗
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Notice Detail Modal */}
        {selectedNotice && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/80 backdrop-blur-xs animate-in fade-in duration-150"
            onClick={() => setSelectedNotice(null)}
          >
            <div
              className="relative w-full max-w-lg rounded-3xl border border-blue-800 bg-[#081830] p-5 shadow-2xl text-white space-y-3.5 max-h-[85vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedNotice(null)}
                className="absolute right-4 top-4 rounded-full p-1 text-slate-400 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>

              <span className="rounded-md bg-cyan-950 px-2.5 py-1 text-[11px] font-black text-cyan-300 border border-cyan-800">
                {selectedNotice.collegeName}
              </span>

              <h3 className="text-base font-black text-white leading-snug">
                {selectedNotice.title}
              </h3>

              <div className="rounded-xl bg-[#040e1f] p-3 text-xs text-slate-300 space-y-2 border border-blue-900">
                <p className="leading-relaxed">{selectedNotice.description}</p>
                <div className="pt-2 border-t border-blue-900/60 flex items-center justify-between text-[11px]">
                  <span className="text-slate-400">Last Date / Deadline:</span>
                  <span className="font-black text-amber-400">{selectedNotice.deadline}</span>
                </div>
              </div>

              <div className="flex gap-2 pt-1">
                <a
                  href={selectedNotice.actionUrl || 'https://pup.ac.in'}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 rounded-xl bg-cyan-600 py-2.5 text-center text-xs font-black text-white hover:bg-cyan-500 transition flex items-center justify-center gap-1.5"
                >
                  <ExternalLink className="h-4 w-4" /> {selectedNotice.actionLabel || 'Open Official Link'}
                </a>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
