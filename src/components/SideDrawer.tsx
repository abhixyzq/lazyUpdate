'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  X,
  Calendar,
  Calculator,
  CalendarCheck2,
  Clock,
  Heart,
  MessageSquareHeart,
  ChevronRight,
} from 'lucide-react';
import { WhatsAppIcon } from './OfficialBrandIcons';
import { FeedbackModal } from './FeedbackModal';

interface SideDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCollege?: (collegeId: string) => void;
  onOpenCommunity?: () => void;
}

export const SideDrawer: React.FC<SideDrawerProps> = ({
  isOpen,
  onClose,
}) => {
  const [feedbackOpen, setFeedbackOpen] = useState(false);

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 flex">
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={onClose}
        />

        {/* Drawer Sheet */}
        <div className="relative z-10 flex h-full w-[80%] max-w-[290px] flex-col bg-white border-r border-slate-200 text-slate-900 shadow-2xl animate-in slide-in-from-left duration-200">
          
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3.5">
            <div className="flex items-center gap-2.5">
              <img
                src="/lazy-pu-logo.png"
                alt="Lazy PU Logo"
                className="h-8 w-auto object-contain rounded-lg"
              />
              <div>
                <h2 className="text-sm font-bold text-slate-900 leading-tight">
                  Lazy PU
                </h2>
                <p className="text-[10px] text-slate-400">
                  Student Portal
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              aria-label="Close menu"
              className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 overflow-y-auto px-3 py-4 space-y-4 text-xs">
            
            {/* Academic Tools */}
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-2 block">
                Academic
              </span>
              <div className="space-y-0.5">
                <Link
                  href="/calendar"
                  onClick={onClose}
                  className="flex items-center justify-between px-2.5 py-2 rounded-xl text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition"
                >
                  <div className="flex items-center gap-2.5">
                    <Calendar className="h-4 w-4 text-blue-600" />
                    <span className="font-semibold">Academic Calendar</span>
                  </div>
                  <ChevronRight className="h-3.5 w-3.5 text-slate-300" />
                </Link>

                <Link
                  href="/sgpa"
                  onClick={onClose}
                  className="flex items-center justify-between px-2.5 py-2 rounded-xl text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition"
                >
                  <div className="flex items-center gap-2.5">
                    <Calculator className="h-4 w-4 text-purple-600" />
                    <span className="font-semibold">SGPA Calculator</span>
                  </div>
                  <ChevronRight className="h-3.5 w-3.5 text-slate-300" />
                </Link>

                <Link
                  href="/attendance"
                  onClick={onClose}
                  className="flex items-center justify-between px-2.5 py-2 rounded-xl text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition"
                >
                  <div className="flex items-center gap-2.5">
                    <CalendarCheck2 className="h-4 w-4 text-emerald-600" />
                    <span className="font-semibold">Attendance (75%)</span>
                  </div>
                  <ChevronRight className="h-3.5 w-3.5 text-slate-300" />
                </Link>

                <Link
                  href="/timetable"
                  onClick={onClose}
                  className="flex items-center justify-between px-2.5 py-2 rounded-xl text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition"
                >
                  <div className="flex items-center gap-2.5">
                    <Clock className="h-4 w-4 text-amber-600" />
                    <span className="font-semibold">Custom Timetable</span>
                  </div>
                  <ChevronRight className="h-3.5 w-3.5 text-slate-300" />
                </Link>
              </div>
            </div>

            {/* Community & Support */}
            <div className="space-y-1 pt-1 border-t border-slate-100">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-2 block">
                Community & Help
              </span>
              <div className="space-y-0.5">
                <Link
                  href="/contributors"
                  onClick={onClose}
                  className="flex items-center justify-between px-2.5 py-2 rounded-xl text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition"
                >
                  <div className="flex items-center gap-2.5">
                    <Heart className="h-4 w-4 text-rose-500 fill-rose-500" />
                    <span className="font-semibold">Contributors & Supporters</span>
                  </div>
                  <ChevronRight className="h-3.5 w-3.5 text-slate-300" />
                </Link>

                <a
                  href="https://whatsapp.com/channel/0029VbDWOxc3LdQXxMfsBl2G"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-2.5 py-2 rounded-xl text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition"
                >
                  <div className="flex items-center gap-2.5">
                    <WhatsAppIcon className="h-4 w-4" />
                    <span className="font-semibold">WhatsApp Channel</span>
                  </div>
                  <ChevronRight className="h-3.5 w-3.5 text-slate-300" />
                </a>

                <button
                  type="button"
                  onClick={() => setFeedbackOpen(true)}
                  className="w-full flex items-center justify-between px-2.5 py-2 rounded-xl text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition text-left cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <MessageSquareHeart className="h-4 w-4 text-blue-500" />
                    <span className="font-semibold">Feedback</span>
                  </div>
                  <ChevronRight className="h-3.5 w-3.5 text-slate-300" />
                </button>
              </div>
            </div>

          </div>

          {/* Minimal Footer */}
          <div className="border-t border-slate-100 px-4 py-3 flex items-center justify-between text-[11px] text-slate-400">
            <Link
              href="/privacy"
              onClick={onClose}
              className="hover:text-slate-600 transition"
            >
              Privacy Policy
            </Link>
            <span>v1.0.1</span>
          </div>

        </div>
      </div>

      {/* In-App Feedback Modal */}
      <FeedbackModal
        isOpen={feedbackOpen}
        onClose={() => setFeedbackOpen(false)}
      />
    </>
  );
};
