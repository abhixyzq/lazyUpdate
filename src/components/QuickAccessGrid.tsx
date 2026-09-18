'use client';

import React from 'react';
import {
  User,
  CalendarDays,
  Users,
  ClipboardCheck,
  MessageSquare,
  BarChart2,
  Building2,
  CreditCard,
  FileText,
  BookOpen,
  FileCheck2,
  BookMarked,
  ChevronRight
} from 'lucide-react';

export type QuickActionType =
  | 'profile'
  | 'events'
  | 'staffs'
  | 'attendance'
  | 'chatbox'
  | 'gradesheet'
  | 'colleges'
  | 'fees'
  | 'notices'
  | 'syllabus'
  | 'exams'
  | 'pyqs';

interface QuickAccessGridProps {
  onSelectAction: (action: QuickActionType) => void;
  onViewAll?: () => void;
}

interface GridItem {
  id: QuickActionType;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  iconBg: string;
  badge?: string;
  badgeColor?: string;
}

export const QuickAccessGrid: React.FC<QuickAccessGridProps> = ({
  onSelectAction,
  onViewAll,
}) => {
  const items: GridItem[] = [
    {
      id: 'profile',
      title: 'Profile',
      subtitle: 'View & edit profile',
      icon: <User className="h-5 w-5 text-[#6d28d9]" />,
      iconBg: 'bg-[#f0eaff]',
    },
    {
      id: 'events',
      title: 'Events',
      subtitle: 'Campus events',
      icon: <CalendarDays className="h-5 w-5 text-[#ea580c]" />,
      iconBg: 'bg-[#fff2e8]',
    },
    {
      id: 'staffs',
      title: 'Staffs',
      subtitle: 'Faculty directory',
      icon: <Users className="h-5 w-5 text-[#2563eb]" />,
      iconBg: 'bg-[#e8f2ff]',
    },
    {
      id: 'attendance',
      title: 'Attendance',
      subtitle: 'Check attendance',
      icon: <ClipboardCheck className="h-5 w-5 text-[#059669]" />,
      iconBg: 'bg-[#e6fbf2]',
    },
    {
      id: 'chatbox',
      title: 'Chatbox',
      subtitle: 'Message & support',
      icon: <MessageSquare className="h-5 w-5 text-[#e11d48]" />,
      iconBg: 'bg-[#ffe8f0]',
    },
    {
      id: 'gradesheet',
      title: 'GradeSheet',
      subtitle: 'View your grades',
      icon: <BarChart2 className="h-5 w-5 text-[#d97706]" />,
      iconBg: 'bg-[#fffbeb]',
    },
    {
      id: 'colleges',
      title: 'Colleges',
      subtitle: 'Affiliated colleges',
      icon: <Building2 className="h-5 w-5 text-[#0284c7]" />,
      iconBg: 'bg-[#e0f2fe]',
    },
    {
      id: 'fees',
      title: 'Fees Details',
      subtitle: 'Payments & history',
      icon: <CreditCard className="h-5 w-5 text-[#0d9488]" />,
      iconBg: 'bg-[#ecfdf5]',
    },
    {
      id: 'notices',
      title: 'Notices',
      subtitle: 'Latest updates',
      icon: <FileText className="h-5 w-5 text-[#7c3aed]" />,
      iconBg: 'bg-[#f3e8ff]',
      badge: 'NEW',
      badgeColor: 'bg-[#6d28d9] text-white',
    },
    {
      id: 'syllabus',
      title: 'Syllabus',
      subtitle: 'All Subjects',
      icon: <BookOpen className="h-5 w-5 text-[#ea580c]" />,
      iconBg: 'bg-[#fff7ed]',
    },
    {
      id: 'exams',
      title: 'Exams',
      subtitle: 'Schedule & results',
      icon: <FileCheck2 className="h-5 w-5 text-[#16a34a]" />,
      iconBg: 'bg-[#f0fdf4]',
    },
    {
      id: 'pyqs',
      title: 'PYQs',
      subtitle: 'Past year papers',
      icon: <BookMarked className="h-5 w-5 text-[#0284c7]" />,
      iconBg: 'bg-[#f0f9ff]',
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 pt-6">
      {/* Header */}
      <div className="flex items-center justify-between pb-3">
        <h2 className="text-base sm:text-lg font-black tracking-tight text-slate-900 dark:text-white">
          Quick Access
        </h2>
        <button
          onClick={onViewAll}
          className="text-xs sm:text-sm font-bold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 transition"
        >
          View All
        </button>
      </div>

      {/* 3-Column Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2.5 sm:gap-3.5">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => onSelectAction(item.id)}
            className="group relative flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-2.5 sm:p-3 text-left shadow-2xs hover:shadow-md hover:border-indigo-200 dark:border-slate-800 dark:bg-slate-900/90 dark:hover:border-indigo-900 transition active:scale-95 duration-150"
          >
            {/* Top row: Circular icon + optional Badge */}
            <div className="flex items-start justify-between w-full">
              <div
                className={`flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-2xl ${item.iconBg} shadow-2xs`}
              >
                {item.icon}
              </div>

              {item.badge && (
                <span
                  className={`rounded-full px-1.5 py-0.2 text-[9px] font-black uppercase tracking-wider ${item.badgeColor}`}
                >
                  {item.badge}
                </span>
              )}
            </div>

            {/* Middle text: Title & Subtitle */}
            <div className="mt-3">
              <h3 className="text-xs sm:text-sm font-black text-slate-900 dark:text-white leading-tight truncate group-hover:text-indigo-600 transition-colors">
                {item.title}
              </h3>
              <p className="mt-0.5 text-[10px] text-slate-400 font-medium truncate">
                {item.subtitle}
              </p>
            </div>

            {/* Bottom Row: Right Chevron */}
            <div className="mt-2 flex justify-end">
              <ChevronRight className="h-3.5 w-3.5 text-slate-300 group-hover:text-indigo-500 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};
