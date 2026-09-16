'use client';

import React from 'react';
import { X, Calendar, Clock, MapPin, FileDown, ExternalLink } from 'lucide-react';

interface TimeTableModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TimeTableModal: React.FC<TimeTableModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const schedules = [
    {
      course: 'UG 4-Year CBCS Semester-2 Examination Routine 2026',
      dates: '14 Oct 2026 - 28 Oct 2026',
      timing: '10:00 AM - 01:00 PM (Shift 1)',
      centers: 'Patna Science College & B.N. College Centers',
      pdfUrl: 'https://pup.ac.in/routines/UG_CBCS_Sem2_Routine.pdf',
    },
    {
      course: 'PG (MA/M.Sc/M.Com) 3rd Semester Examination 2026',
      dates: '28 Sept 2026 - 08 Oct 2026',
      timing: '01:30 PM - 04:30 PM (Shift 2)',
      centers: 'Patna College & Wheeler Senate House',
      pdfUrl: 'https://pup.ac.in/routines/PG_Sem3_Routine.pdf',
    },
    {
      course: 'BCA & BBA 4th Semester Annual Examination',
      dates: '05 Oct 2026 - 15 Oct 2026',
      timing: '10:00 AM - 01:00 PM',
      centers: 'Department of Computer Applications, B.N. College',
      pdfUrl: 'https://pup.ac.in/routines/BCA_Sem4_Routine.pdf',
    },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-3xl border border-blue-900 bg-[#0a1b38] p-5 sm:p-6 shadow-2xl text-white max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-1 text-slate-400 hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Title */}
        <div className="flex items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/40">
            <Calendar className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-base font-black text-white">University Time Table</h3>
            <p className="text-[11px] text-cyan-300">Active Examination Routines & Center Lists</p>
          </div>
        </div>

        {/* List of Routines */}
        <div className="mt-4 space-y-3">
          {schedules.map((s, i) => (
            <div
              key={i}
              className="rounded-2xl border border-blue-900/60 bg-[#11264c] p-3.5 text-xs space-y-1.5"
            >
              <h4 className="text-xs sm:text-sm font-black text-white leading-snug">
                {s.course}
              </h4>
              
              <div className="flex items-center gap-2 text-cyan-300 font-semibold">
                <Clock className="h-3.5 w-3.5 shrink-0" />
                <span>{s.dates} • {s.timing}</span>
              </div>

              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="h-3.5 w-3.5 shrink-0 text-slate-400" />
                <span>{s.centers}</span>
              </div>

              <div className="pt-2 flex justify-end">
                <a
                  href={s.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-xl bg-cyan-600 px-3 py-1.5 font-bold text-white shadow-2xs hover:bg-cyan-700"
                >
                  <FileDown className="h-3.5 w-3.5" />
                  <span>Download Routine PDF</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 text-center">
          <button
            onClick={onClose}
            className="w-full rounded-xl bg-[#00f0aa] py-2.5 text-xs font-black text-[#052b22] hover:bg-[#00d898]"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
