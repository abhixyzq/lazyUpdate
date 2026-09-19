'use client';

import React from 'react';
import { SubpageHeader } from '@/components/SubpageHeader';
import { Briefcase, ExternalLink, Sparkles, Building, CheckCircle2 } from 'lucide-react';

export default function InternshipsPage() {
  const opportunities = [
    {
      name: 'Prime Minister’s Internship Scheme (PMIS)',
      stipend: '₹5,000 / Month + ₹6,000 One-time Grant',
      org: 'Ministry of Corporate Affairs (MCA)',
      description:
        '12-month paid internships in India’s Top 500 companies (Tata, Reliance, L&T, HDFC, Mahindra, ITC, etc.) for youth aged 21-24. Eligible for B.Sc, B.A, B.Com, BCA and BBA students.',
      url: 'https://pminternship.mca.gov.in',
      actionLabel: 'Apply on PM Internship Portal',
      isHot: true,
      deadline: 'Ongoing Batch 2024-25',
    },
    {
      name: 'AICTE / UGC National Internship Portal',
      stipend: 'Stipend ₹8,000 - ₹25,000 / Month',
      org: 'AICTE & Ministry of Education',
      description:
        'Over 1 Lakh+ verified internship opportunities across Web Development, Data Analytics, Content Writing, Public Policy, and Management.',
      url: 'https://internship.aicte-india.org',
      actionLabel: 'Browse National Internship Portal',
      isHot: false,
      deadline: 'Rolling Applications',
    },
    {
      name: 'Patna University Central Placement Cell Drives',
      stipend: 'Paid Trainee / Internship Roles',
      org: 'Patna University Placement Cell',
      description:
        'Official campus recruitments, corporate aptitude workshops, and summer internships coordinated by Wheeler Senate House placement authorities.',
      url: 'https://pup.ac.in',
      actionLabel: 'Check PU Placement Circulars',
      isHot: false,
      deadline: 'Updated Weekly',
    },
  ];

  return (
    <div className="min-h-screen bg-transparent text-slate-900 pb-28 sm:pb-16">
      <SubpageHeader title="Internships" />

      <main className="mx-auto max-w-xl px-3 pt-4 space-y-4">
        
        {/* Banner */}
        <div className="rounded-3xl border border-blue-200 bg-blue-50/70 p-4 sm:p-5 shadow-sm space-y-2">
          <div className="flex items-center gap-2 text-blue-700">
            <Sparkles className="h-5 w-5" />
            <span className="text-xs font-black uppercase tracking-wider">Government Certified Opportunities</span>
          </div>
          <h2 className="text-base sm:text-lg font-black text-slate-900">
            Kickstart your Career with Paid Internships
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Gain industry exposure in top enterprises while completing your degree at Patna University.
          </p>
        </div>

        {/* Opportunities List */}
        <div className="space-y-3.5">
          {opportunities.map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-sm space-y-3"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="rounded-md bg-blue-50 px-2 py-0.5 text-[10px] font-black text-blue-700 border border-blue-200">
                      {item.org}
                    </span>
                    {item.isHot && (
                      <span className="rounded-md bg-amber-50 px-2 py-0.5 text-[10px] font-black text-amber-800 border border-amber-200">
                        HOT
                      </span>
                    )}
                  </div>
                  <h3 className="text-sm sm:text-base font-black text-slate-900 mt-1.5 leading-snug">
                    {item.name}
                  </h3>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3 text-xs space-y-1.5 text-slate-700">
                <div className="text-blue-700 font-bold">{item.stipend}</div>
                <p className="text-[11px] leading-relaxed text-slate-600">{item.description}</p>
                <div className="text-[10px] text-slate-500 font-semibold pt-1">
                  Status: {item.deadline}
                </div>
              </div>

              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-1.5 rounded-xl bg-slate-900 py-2.5 px-4 text-xs font-black text-white hover:bg-slate-800 transition shadow-xs"
              >
                <ExternalLink className="h-4 w-4" /> {item.actionLabel}
              </a>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
