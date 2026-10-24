'use client';

import React, { useState, useEffect } from 'react';
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
  const [isRendered, setIsRendered] = useState(isOpen);
  const [isVisible, setIsVisible] = useState(false);

  // Smooth two-phase enter/exit animation
  useEffect(() => {
    if (isOpen) {
      setIsRendered(true);
      // Wait for next animation frames to ensure CSS transition triggers smoothly
      const frame1 = requestAnimationFrame(() => {
        const frame2 = requestAnimationFrame(() => {
          setIsVisible(true);
        });
        return () => cancelAnimationFrame(frame2);
      });
      return () => cancelAnimationFrame(frame1);
    } else {
      setIsVisible(false);
      const timer = setTimeout(() => {
        setIsRendered(false);
      }, 320); // Wait for transition duration
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isRendered) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 flex pointer-events-auto">
        {/* Smooth Backdrop with subtle blur */}
        <div
          className={`fixed inset-0 bg-slate-950/50 backdrop-blur-xs transition-opacity duration-300 ease-out ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={onClose}
        />

        {/* Smooth Slidebar Sheet */}
        <div
          className={`relative z-10 flex h-full w-[82%] max-w-[300px] flex-col bg-white border-r border-slate-200/90 text-slate-900 shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isVisible ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3.5 bg-slate-50/50">
            <Link href="/" onClick={onClose} className="flex flex-col">
              <span className="text-base font-extrabold text-[#0a2558] leading-tight">
                LazyPU <span className="text-amber-500 font-bold">Portal</span>
              </span>
              <span className="text-[10px] text-slate-400 font-medium">
                Patna University Companion
              </span>
            </Link>

            <button
              onClick={onClose}
              aria-label="Close menu"
              className="rounded-full p-1.5 text-slate-400 hover:bg-slate-200/70 hover:text-slate-800 transition active:scale-95 cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 overflow-y-auto px-3 py-4 space-y-4 text-xs">
            {/* Academic Tools */}
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-2 block">
                Academic Utilities
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
                    <CalendarCheck2 className="h-4 w-4 text-[#0a2558]" />
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
            <div className="space-y-1 pt-2 border-t border-slate-100">
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
          <div className="border-t border-slate-100 px-4 py-3 flex items-center justify-between text-[11px] text-slate-400 bg-slate-50/50">
            <Link
              href="/privacy"
              onClick={onClose}
              className="hover:text-slate-600 transition"
            >
              Privacy Policy
            </Link>
            <span>v1.0.4</span>
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
