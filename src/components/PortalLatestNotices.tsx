'use client';

import React from 'react';
import Link from 'next/link';
import {
  FileText,
  GraduationCap,
  Megaphone,
  ChevronRight,
} from 'lucide-react';

export const PortalLatestNotices: React.FC = () => {
  const notices = [
    {
      id: 'notice-1',
      title: 'Exam Form Submission Extended',
      isNew: true,
      time: '2 hours ago',
      icon: FileText,
      iconBg: 'bg-[#dcfce7]',
      iconColor: 'text-emerald-700',
      href: '/notices',
    },
    {
      id: 'notice-2',
      title: 'Semester 3 Routine Published',
      isNew: false,
      time: '1 day ago',
      icon: GraduationCap,
      iconBg: 'bg-[#e0f2fe]',
      iconColor: 'text-blue-700',
      href: '/notices',
    },
    {
      id: 'notice-3',
      title: 'University Notice Regarding Practical Exams',
      isNew: false,
      time: '2 days ago',
      icon: Megaphone,
      iconBg: 'bg-[#ffe4e6]',
      iconColor: 'text-rose-700',
      href: '/notices',
    },
  ];

  return (
    <div className="mx-auto max-w-xl px-4 pt-4 pb-4">
      {/* Header */}
      <div className="flex items-center justify-between pb-3">
        <h2 className="text-base sm:text-lg font-black text-[#0a2558] tracking-tight">
          Latest Notices
        </h2>
        <Link
          href="/notices"
          className="text-xs sm:text-[13px] font-bold text-[#0a2558] hover:text-blue-700 flex items-center gap-0.5 transition"
        >
          <span>View All</span>
          <ChevronRight className="h-4 w-4 stroke-[2.5]" />
        </Link>
      </div>

      {/* Clean White Card with Notices */}
      <div className="rounded-2xl bg-white border border-slate-100/90 shadow-[0_2px_10px_rgba(10,37,88,0.04)] divide-y divide-slate-100 overflow-hidden">
        {notices.map((notice) => {
          const Icon = notice.icon;

          return (
            <Link
              key={notice.id}
              href={notice.href}
              className="group flex items-center justify-between gap-3 p-3.5 hover:bg-slate-50/70 transition cursor-pointer"
            >
              <div className="flex items-center gap-3 min-w-0">
                {/* Circle Icon Badge */}
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${notice.iconBg} ${notice.iconColor}`}
                >
                  <Icon className="h-5 w-5 stroke-[2]" />
                </div>

                {/* Text Content */}
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-xs sm:text-sm font-bold text-[#0a2558] group-hover:text-blue-900 transition truncate">
                      {notice.title}
                    </h3>
                    {notice.isNew && (
                      <span className="rounded-full bg-rose-600 px-2 py-0.5 text-[9px] font-black uppercase text-white tracking-wide shrink-0">
                        New
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-slate-400 font-medium mt-0.5">
                    {notice.time}
                  </p>
                </div>
              </div>

              {/* Right Chevron */}
              <ChevronRight className="h-4 w-4 text-[#0a2558]/70 group-hover:text-[#0a2558] group-hover:translate-x-0.5 transition shrink-0" />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
