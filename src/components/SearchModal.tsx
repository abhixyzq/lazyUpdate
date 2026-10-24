'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Search,
  X,
  BookOpen,
  FileText,
  Megaphone,
  BarChart3,
  Calculator,
  Calendar,
  Clock,
  Users,
  Briefcase,
  Award,
  ChevronRight,
} from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SEARCH_ITEMS = [
  {
    title: 'Syllabus (CBCS FYUGP)',
    desc: 'B.A., B.Sc., B.Com. semester wise NEP syllabus',
    href: '/syllabus',
    icon: BookOpen,
    badge: 'Academics',
  },
  {
    title: 'PYQs (Previous Year Papers)',
    desc: 'Semester examination past papers & question banks',
    href: '/pyqs',
    icon: FileText,
    badge: 'Papers',
  },
  {
    title: 'PU Notices & Circulars',
    desc: 'Exam forms, schedules, registration dates',
    href: '/notices',
    icon: Megaphone,
    badge: 'Updates',
  },
  {
    title: 'Semester Results (UMIS)',
    desc: 'Direct PU result check and marksheet portal',
    href: '/results',
    icon: BarChart3,
    badge: 'Portal',
  },
  {
    title: 'SGPA & CGPA Calculator',
    desc: 'Calculate semester grades & score predictor',
    href: '/sgpa',
    icon: Calculator,
    badge: 'Tool',
  },
  {
    title: 'Academic Calendar',
    desc: 'PU examination routines and official holidays',
    href: '/calendar',
    icon: Calendar,
    badge: 'Dates',
  },
  {
    title: 'Class Timetable',
    desc: 'Personalized schedule and period alerts',
    href: '/timetable',
    icon: Clock,
    badge: 'Daily',
  },
  {
    title: 'Attendance Tracker',
    desc: 'Daily subject attendance & 75% criteria calculator',
    href: '/attendance',
    icon: Users,
    badge: 'Daily',
  },
  {
    title: 'Internships (PM & AICTE)',
    desc: 'Student internships and verified openings',
    href: '/internships',
    icon: Briefcase,
    badge: 'Career',
  },
  {
    title: 'Scholarships (PMS & NSP)',
    desc: 'Post-matric and National Scholarship schemes',
    href: '/scholarships',
    icon: Award,
    badge: 'Govt',
  },
];

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');

  const filteredItems = useMemo(() => {
    if (!query.trim()) return SEARCH_ITEMS;
    const q = query.toLowerCase();
    return SEARCH_ITEMS.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.desc.toLowerCase().includes(q) ||
        item.badge.toLowerCase().includes(q)
    );
  }, [query]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center p-3 pt-14 sm:p-6 sm:pt-20 bg-black/40 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-4 sm:p-5 shadow-2xl text-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Bar Input */}
        <div className="relative flex items-center">
          <Search className="absolute left-3.5 h-4 w-4 text-slate-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search syllabus, PYQs, notices, SGPA..."
            autoFocus
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-9 text-xs sm:text-sm font-medium text-slate-900 placeholder-slate-400 focus:border-[#0a2558] focus:bg-white focus:outline-hidden transition"
          />
          {query ? (
            <button
              onClick={() => setQuery('')}
              className="absolute right-3 rounded-full p-1 text-slate-400 hover:text-slate-600 transition"
            >
              <X className="h-4 w-4" />
            </button>
          ) : (
            <button
              onClick={onClose}
              className="absolute right-3 rounded-full p-1 text-slate-400 hover:text-slate-600 transition"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Results List */}
        <div className="mt-3 max-h-[60vh] overflow-y-auto space-y-1 pr-1 divide-y divide-slate-100">
          {filteredItems.length === 0 ? (
            <div className="py-8 text-center text-xs text-slate-400">
              No results found for &ldquo;{query}&rdquo;
            </div>
          ) : (
            filteredItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center justify-between gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition group pt-2.5"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-slate-700 border border-slate-200/80 group-hover:bg-yellow-50 group-hover:text-[#0a2558] group-hover:border-yellow-300 transition">
                      <Icon className="h-4 w-4 stroke-[1.8]" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs sm:text-[13px] font-semibold text-slate-900 group-hover:text-[#0a2558] transition truncate">
                          {item.title}
                        </span>
                        <span className="rounded-md bg-slate-100 px-1.5 py-0.5 text-[9px] font-medium text-slate-500 uppercase">
                          {item.badge}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 truncate mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="h-4 w-4 text-slate-300 group-hover:text-[#0a2558] shrink-0 transition" />
                </Link>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};
