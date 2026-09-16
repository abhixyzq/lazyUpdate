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
    <div className="min-h-screen bg-transparent text-white pb-12">
      <SubpageHeader title="Internships" />

      <main className="mx-auto max-w-xl px-3 pt-4 space-y-4">
        
        {/* Banner */}
        <div className="rounded-3xl border border-cyan-500/40 bg-gradient-to-r from-[#07243d] to-[#05172b] p-4 sm:p-5 shadow-xl space-y-2">
          <div className="flex items-center gap-2 text-cyan-400">
            <Sparkles className="h-5 w-5" />
            <span className="text-xs font-black uppercase tracking-wider">Government Certified Opportunities</span>
          </div>
          <h2 className="text-base sm:text-lg font-black text-white">
            Kickstart your Career with Paid Internships
          </h2>
          <p className="text-xs text-slate-300 leading-relaxed">
            Gain industry exposure in top enterprises while completing your degree at Patna University.
          </p>
        </div>

        {/* Opportunities List */}
        <div className="space-y-3.5">
          {opportunities.map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-blue-900/80 bg-[#091a36] p-4 sm:p-5 shadow-xl space-y-3"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="rounded-md bg-blue-950 px-2 py-0.5 text-[10px] font-black text-cyan-300 border border-blue-800">
                      {item.org}
                    </span>
                    {item.isHot && (
                      <span className="rounded-md bg-amber-500/20 px-2 py-0.5 text-[10px] font-black text-amber-300 border border-amber-500/40 animate-pulse">
                        HOT
                      </span>
                    )}
                  </div>
                  <h3 className="text-sm sm:text-base font-black text-white mt-1.5 leading-snug">
                    {item.name}
                  </h3>
                </div>
              </div>

              <div className="rounded-2xl border border-blue-900/60 bg-[#051326] p-3 text-xs space-y-1.5 text-slate-300">
                <div className="text-cyan-300 font-bold">{item.stipend}</div>
                <p className="text-[11px] leading-relaxed text-slate-400">{item.description}</p>
                <div className="text-[10px] text-amber-400 font-semibold pt-1">
                  Status: {item.deadline}
                </div>
              </div>

              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 py-2.5 px-4 text-xs font-black text-white hover:from-blue-500 hover:to-cyan-500 transition shadow-md"
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
