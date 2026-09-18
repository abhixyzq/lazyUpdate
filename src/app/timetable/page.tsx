'use client';

import React, { useState } from 'react';
import { SubpageHeader } from '@/components/SubpageHeader';
import { Calendar, Clock, MapPin, FileDown, ExternalLink, Search } from 'lucide-react';

export default function TimeTablePage() {
  const [selectedType, setSelectedType] = useState<'all' | 'exam' | 'class'>('all');

  const schedules = [
    {
      type: 'exam',
      course: 'UG Semester-2 Examination Routine',
      batch: 'Session 2024-28 (Regular & Backlog)',
      dates: '14 Oct 2026 - 28 Oct 2026',
      timing: '10:00 AM - 01:00 PM (Shift 1)',
      centers: 'Patna Science College & B.N. College Examination Centers',
      pdfUrl: 'https://pup.ac.in/routines/UG_CBCS_Sem2_Routine.pdf',
    },
    {
      type: 'exam',
      course: 'PG (MA/M.Sc/M.Com) 3rd Semester Final Routine',
      batch: 'Session 2023-25',
      dates: '28 Sept 2026 - 08 Oct 2026',
      timing: '01:30 PM - 04:30 PM (Shift 2)',
      centers: 'Patna College & Wheeler Senate House',
      pdfUrl: 'https://pup.ac.in/routines/PG_Sem3_Routine.pdf',
    },
    {
      type: 'exam',
      course: 'BCA & BBA 4th Semester Annual Examination',
      batch: 'Vocational Degree Courses',
      dates: '05 Oct 2026 - 15 Oct 2026',
      timing: '10:00 AM - 01:00 PM',
      centers: 'Department of Computer Applications, B.N. College',
      pdfUrl: 'https://pup.ac.in/routines/BCA_Sem4_Routine.pdf',
    },
    {
      type: 'class',
      course: 'Patna Science College (B.Sc & BCA) Class Time Table',
      batch: 'Daily Lecture Routine (Monday to Saturday)',
      dates: 'Current Academic Session 2024-25',
      timing: '09:00 AM - 03:30 PM',
      centers: 'Science College Campus, Ashok Rajpath, Patna',
      pdfUrl: 'https://pup.ac.in/routines/Science_College_Routine.pdf',
    },
    {
      type: 'class',
      course: 'B.N. College (Arts, Science & Vocational) Routine',
      batch: 'All UG Departments',
      dates: 'Current Academic Session',
      timing: '10:00 AM - 04:00 PM',
      centers: 'B.N. College Campus, Ashok Rajpath',
      pdfUrl: 'https://pup.ac.in/routines/BN_College_Routine.pdf',
    },
  ];

  const filtered = schedules.filter((s) => selectedType === 'all' || s.type === selectedType);

  return (
    <div className="min-h-screen bg-transparent text-slate-900 pb-12">
      <SubpageHeader title="Time Table" />

      <main className="mx-auto max-w-xl px-3 pt-4 space-y-4">
        
        {/* Quick Filter Tabs */}
        <div className="flex gap-2">
          {[
            { id: 'all' as const, label: 'All Routines' },
            { id: 'exam' as const, label: 'Exam Routines' },
            { id: 'class' as const, label: 'Class Time Tables' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedType(tab.id)}
              className={`flex-1 rounded-xl py-2 px-3 text-xs font-bold transition ${
                selectedType === tab.id
                  ? 'border border-slate-900 bg-slate-900 text-white shadow-xs font-black'
                  : 'border border-slate-200 bg-white text-slate-600 hover:text-slate-900 hover:border-slate-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Routines List */}
        <div className="space-y-3">
          {filtered.map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-xs space-y-3"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className={`rounded-md px-2 py-0.5 text-[10px] font-black uppercase border ${
                    item.type === 'exam'
                      ? 'bg-rose-50 text-rose-700 border-rose-200'
                      : 'bg-blue-50 text-blue-700 border-blue-200'
                  }`}>
                    {item.type === 'exam' ? 'Examination Routine' : 'Class Routine'}
                  </span>
                  <h3 className="text-sm sm:text-base font-black text-slate-900 mt-1.5 leading-snug">
                    {item.course}
                  </h3>
                  <span className="text-xs text-amber-800 font-medium">{item.batch}</span>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-3 text-xs space-y-2 text-slate-700">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-slate-500 shrink-0" />
                  <span><b>Dates:</b> {item.dates}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-slate-500 shrink-0" />
                  <span><b>Shift & Timing:</b> {item.timing}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-slate-500 shrink-0" />
                  <span><b>Exam Centers:</b> {item.centers}</span>
                </div>
              </div>

              <div className="flex gap-2 pt-1">
                <a
                  href={item.pdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 rounded-xl bg-slate-900 hover:bg-slate-800 py-2.5 text-center text-xs font-black text-white transition flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <FileDown className="h-4 w-4" /> Download Official Schedule PDF
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
