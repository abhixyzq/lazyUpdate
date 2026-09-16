'use client';

import React from 'react';
import { X, Users, Mail, Phone, Building2, GraduationCap } from 'lucide-react';

interface StaffsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StaffsModal: React.FC<StaffsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const facultyList = [
    {
      name: 'Prof. (Dr.) Ajay Kumar Singh',
      role: 'Vice Chancellor & Controller of Examinations',
      dept: 'Patna University Administrative Office',
      email: 'vc@pup.ac.in',
      phone: '+91 612 2670531',
    },
    {
      name: 'Dr. Ramesh Chandra',
      role: 'Head of Department & Dean',
      dept: 'Faculty of Science, Patna Science College',
      email: 'science.dean@patnauniversity.ac.in',
      phone: '+91 612 2671234',
    },
    {
      name: 'Dr. Sunita Sharma',
      role: 'Principal & Professor of Humanities',
      dept: 'Patna College, Ashok Rajpath',
      email: 'principal@patnacollege.ac.in',
      phone: '+91 612 2672345',
    },
    {
      name: 'Dr. Manoj Kumar Verma',
      role: 'Dean of Student Welfare (DSW)',
      dept: 'Student Welfare & Grievance Cell',
      email: 'dsw@pup.ac.in',
      phone: '+91 612 2673456',
    },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/65 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 shadow-2xl dark:border-slate-800 dark:bg-slate-900 dark:text-white max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-200 transition"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 dark:bg-blue-950/80 dark:text-blue-300">
            <Users className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-base font-black text-slate-900 dark:text-white">
              Faculty & Staffs Directory
            </h3>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              Patna University Administrative & College Officials
            </p>
          </div>
        </div>

        <div className="mt-4 space-y-2.5">
          {facultyList.map((f, i) => (
            <div
              key={i}
              className="rounded-2xl border border-slate-100 bg-slate-50/70 p-3.5 dark:border-slate-800 dark:bg-slate-800/40 text-xs"
            >
              <h4 className="text-xs sm:text-sm font-black text-slate-900 dark:text-white">
                {f.name}
              </h4>
              <p className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 mt-0.5">
                {f.role}
              </p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                {f.dept}
              </p>
              <div className="mt-2.5 flex flex-wrap items-center gap-3 text-[10px] text-slate-400 pt-2 border-t border-slate-200/60 dark:border-slate-800">
                <span className="flex items-center gap-1 text-slate-600 dark:text-slate-300">
                  <Mail className="h-3 w-3 text-indigo-500" />
                  <span>{f.email}</span>
                </span>
                <span className="flex items-center gap-1 text-slate-600 dark:text-slate-300">
                  <Phone className="h-3 w-3 text-emerald-500" />
                  <span>{f.phone}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
