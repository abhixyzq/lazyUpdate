'use client';

import React from 'react';
import { Clock, MapPin, ChevronRight, Calendar } from 'lucide-react';

export interface EventItem {
  id: string;
  month: string;
  day: string;
  weekday: string;
  dateBadgeBg: string;
  dateTextColor: string;
  title: string;
  time: string;
  venue: string;
  status: 'Upcoming' | 'Closing Soon' | 'Live';
  statusBadgeBg: string;
  statusTextColor: string;
  actionUrl?: string;
  targetNoticeId?: string;
}

interface UpcomingEventsProps {
  onSelectEvent?: (targetNoticeId?: string) => void;
  onViewCalendar?: () => void;
}

export const UpcomingEvents: React.FC<UpcomingEventsProps> = ({
  onSelectEvent,
  onViewCalendar,
}) => {
  const events: EventItem[] = [
    {
      id: 'event-1',
      month: 'SEP',
      day: '24',
      weekday: 'Wed',
      dateBadgeBg: 'bg-[#f3e8ff] dark:bg-purple-950/60',
      dateTextColor: 'text-[#7c3aed] dark:text-purple-300',
      title: 'UG 4-Year CBCS 2nd Sem Exam Form Filling',
      time: '10:00 AM - 05:00 PM (Last Day Without Late Fee)',
      venue: 'Online UMIS Student Portal',
      status: 'Closing Soon',
      statusBadgeBg: 'bg-[#fff2e8] dark:bg-orange-950/60',
      statusTextColor: 'text-[#ea580c] dark:text-orange-300',
      targetNoticeId: 'notice-exam-ug-sem2',
    },
    {
      id: 'event-2',
      month: 'SEP',
      day: '26',
      weekday: 'Fri',
      dateBadgeBg: 'bg-[#fff7ed] dark:bg-amber-950/60',
      dateTextColor: 'text-[#d97706] dark:text-amber-300',
      title: 'PUCET UG 2nd Round Document Verification',
      time: '10:30 AM - 03:30 PM',
      venue: 'Patna Science College & B.N. College',
      status: 'Upcoming',
      statusBadgeBg: 'bg-[#f3e8ff] dark:bg-purple-950/60',
      statusTextColor: 'text-[#7c3aed] dark:text-purple-300',
      targetNoticeId: 'notice-adm-merit-2',
    },
    {
      id: 'event-3',
      month: 'SEP',
      day: '28',
      weekday: 'Sun',
      dateBadgeBg: 'bg-[#e0f2fe] dark:bg-sky-950/60',
      dateTextColor: 'text-[#0284c7] dark:text-sky-300',
      title: 'PG (MA/M.Sc/M.Com) 3rd Semester Exam Begins',
      time: '01:00 PM - 04:00 PM',
      venue: 'Patna College & Wheeler Senate House',
      status: 'Upcoming',
      statusBadgeBg: 'bg-[#f3e8ff] dark:bg-purple-950/60',
      statusTextColor: 'text-[#7c3aed] dark:text-purple-300',
      targetNoticeId: 'notice-exam-pg-admit',
    },
    {
      id: 'event-4',
      month: 'OCT',
      day: '03',
      weekday: 'Sat',
      dateBadgeBg: 'bg-[#ecfdf5] dark:bg-emerald-950/60',
      dateTextColor: 'text-[#059669] dark:text-emerald-300',
      title: 'BCA & Vocational Degree Practical Viva Exams',
      time: '11:00 AM - 02:00 PM',
      venue: 'Computer Science Lab, B.N. College',
      status: 'Upcoming',
      statusBadgeBg: 'bg-[#f3e8ff] dark:bg-purple-950/60',
      statusTextColor: 'text-[#7c3aed] dark:text-purple-300',
      targetNoticeId: 'notice-exam-bca-schedule',
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 pt-6 pb-4">
      {/* Header */}
      <div className="flex items-center justify-between pb-3">
        <h2 className="text-base sm:text-lg font-black tracking-tight text-slate-900 dark:text-white">
          Upcoming Events & Deadlines
        </h2>
        <button
          onClick={onViewCalendar}
          className="text-xs sm:text-sm font-bold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 transition"
        >
          View Calendar
        </button>
      </div>

      {/* Events List */}
      <div className="space-y-3">
        {events.map((event) => (
          <div
            key={event.id}
            onClick={() => onSelectEvent && onSelectEvent(event.targetNoticeId)}
            className="group flex items-center justify-between gap-3 rounded-2xl border border-slate-100 bg-white p-3 sm:p-3.5 shadow-2xs hover:shadow-md hover:border-indigo-200 dark:border-slate-800 dark:bg-slate-900/90 dark:hover:border-indigo-900 transition cursor-pointer"
          >
            {/* Left Column: Date Container */}
            <div
              className={`flex h-16 w-14 sm:h-18 sm:w-16 flex-col items-center justify-center rounded-2xl ${event.dateBadgeBg} shrink-0`}
            >
              <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">
                {event.month}
              </span>
              <span className={`text-lg sm:text-xl font-black leading-none ${event.dateTextColor}`}>
                {event.day}
              </span>
              <span className="text-[10px] font-semibold text-slate-400">
                {event.weekday}
              </span>
            </div>

            {/* Middle Column: Details */}
            <div className="flex-1 min-w-0 pr-2">
              <h3 className="text-xs sm:text-sm font-black text-slate-900 dark:text-white group-hover:text-indigo-600 transition truncate">
                {event.title}
              </h3>
              
              <div className="mt-1 flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400">
                <Clock className="h-3 w-3 shrink-0 text-slate-400" />
                <span className="truncate">{event.time}</span>
              </div>

              <div className="mt-0.5 flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400">
                <MapPin className="h-3 w-3 shrink-0 text-indigo-500" />
                <span className="truncate">{event.venue}</span>
              </div>
            </div>

            {/* Right Column: Status Badge */}
            <div className="shrink-0 flex items-center gap-1">
              <span
                className={`rounded-xl px-2.5 py-1 text-[10px] font-black uppercase tracking-wide ${event.statusBadgeBg} ${event.statusTextColor}`}
              >
                {event.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Button */}
      <div className="mt-4 text-center">
        <button
          onClick={onViewCalendar}
          className="w-full sm:w-auto rounded-xl border border-slate-200 bg-slate-50/80 px-6 py-2.5 text-xs font-bold text-indigo-600 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-900 dark:text-indigo-400 transition"
        >
          View All Academic Events & Schedule
        </button>
      </div>
    </section>
  );
};
