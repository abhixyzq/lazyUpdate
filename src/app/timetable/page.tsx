'use client';

import React from 'react';
import { SubpageHeader } from '@/components/SubpageHeader';
import { StudentTimeTableBuilder } from '@/components/timetable/StudentTimeTableBuilder';

export default function TimeTablePage() {
  return (
    <div className="min-h-screen bg-transparent text-slate-900 pb-16">
      <SubpageHeader
        title="Time Table"
        subtitle="Weekly Lecture Routine & 1.5s Silent Vibration Reminders"
      />

      <main className="mx-auto max-w-3xl px-3 pt-3">
        <div className="rounded-3xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-xs">
          <StudentTimeTableBuilder />
        </div>
      </main>
    </div>
  );
}
