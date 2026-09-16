'use client';

import React, { useState } from 'react';
import { SubpageHeader } from '@/components/SubpageHeader';
import { Calendar, Clock, MapPin, FileDown, ExternalLink, Search } from 'lucide-react';

export default function TimeTablePage() {
  const [selectedType, setSelectedType] = useState<'all' | 'exam' | 'class'>('all');

  const schedules = [
    {
      type: 'exam',
      course: 'UG 4-Year CBCS Semester-2 Examination Routine',
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
    <div className="min-h-screen bg-transparent text-white pb-12">
      <SubpageHeader
        title="Time Table & Routines"
        badge="ACADEMIC SCHEDULES"
        subtitle="Exam Centers, Shift Timings & Official PDF Schedules"
      />

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
              className={`flex-1 rounded-xl py-2 px-3 text-xs font-black transition ${
                selectedType === tab.id
                  ? 'border border-cyan-400 bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md'
                  : 'border border-blue-900/60 bg-[#07162d] text-slate-400 hover:text-white'
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
              className="rounded-3xl border border-blue-900/80 bg-[#091a36] p-4 sm:p-5 shadow-xl space-y-3"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className="rounded-md bg-blue-950 px-2 py-0.5 text-[10px] font-black text-cyan-300 border border-blue-800 uppercase">
                    {item.type === 'exam' ? 'Examination Routine' : 'Class Routine'}
                  </span>
                  <h3 className="text-sm sm:text-base font-black text-white mt-1.5 leading-snug">
                    {item.course}
                  </h3>
                  <span className="text-xs text-amber-300 font-bold">{item.batch}</span>
                </div>
              </div>

              <div className="rounded-2xl border border-blue-900/70 bg-[#051326] p-3 text-xs space-y-2 text-slate-300">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-cyan-400 shrink-0" />
                  <span><b>Dates:</b> {item.dates}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-cyan-400 shrink-0" />
                  <span><b>Shift & Timing:</b> {item.timing}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-cyan-400 shrink-0" />
                  <span><b>Exam Centers:</b> {item.centers}</span>
                </div>
              </div>

              <div className="flex gap-2 pt-1">
                <a
                  href={item.pdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 rounded-xl bg-cyan-600 py-2.5 text-center text-xs font-black text-white hover:bg-cyan-500 transition flex items-center justify-center gap-1.5 shadow-md"
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
