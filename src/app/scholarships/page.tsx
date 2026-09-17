'use client';

import React from 'react';
import { SubpageHeader } from '@/components/SubpageHeader';
import { Award, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';

export default function ScholarshipsPage() {
  const schemes = [
    {
      name: 'Bihar Post-Matric Scholarship (PMS Online)',
      org: 'Govt. of Bihar (Education Dept.)',
      tag: 'SC / ST / BC / EBC Category',
      benefit: '100% Tuition Fee Reimbursement + Monthly Maintenance',
      description:
        'Official Bihar Government scheme providing full academic fee waiver and post-matric financial incentives for students enrolled in Patna University.',
      url: 'https://pmsonline.bih.nic.in',
      actionLabel: 'Apply on PMS Online Bihar',
      isHot: true,
    },
    {
      name: 'National Scholarship Portal (NSP)',
      org: 'Ministry of Education (Govt. of India)',
      tag: 'Central Sector Scheme & Merit-cum-Means',
      benefit: '₹12,000 / Year (UG) to ₹20,000 / Year (PG)',
      description:
        'Awarded to top 20th percentile students in 12th board examinations or university rank holders under Central Sector scholarship guidelines.',
      url: 'https://scholarships.gov.in',
      actionLabel: 'Register on National Scholarship Portal',
      isHot: false,
    },
    {
      name: 'Bihar Student Credit Card Scheme (MNSSBY)',
      org: 'Bihar Vikas Mission',
      tag: 'Up to ₹4 Lakhs Education Loan',
      benefit: 'Subsidized 1% - 4% Simple Interest Loan',
      description:
        'Interest-subsidized credit card for higher education fees, living expenses, and laptops. Zero collateral required for bonafide students.',
      url: 'https://www.7nishchay-yuvaupmission.bihar.gov.in',
      actionLabel: 'Apply for Student Credit Card',
      isHot: false,
    },
    {
      name: 'Mukhyamantri Kanya Utthan Yojana',
      org: 'Govt. of Bihar (Women Welfare)',
      tag: 'Girl Students Exclusively',
      benefit: '₹50,000 Direct Bank Transfer upon Graduation',
      description:
        'One-time financial incentive of ₹50,000 for unmarried female students passing their Bachelor’s degree from Patna University.',
      url: 'https://medhasoft.bih.nic.in',
      actionLabel: 'Check Kanya Utthan Medhasoft Portal',
      isHot: true,
    },
  ];

  return (
    <div className="min-h-screen bg-transparent text-slate-900 pb-12">
      <SubpageHeader title="Scholarships" />

      <main className="mx-auto max-w-xl px-3 pt-4 space-y-4">
        
        {/* Banner */}
        <div className="rounded-3xl border border-emerald-200 bg-emerald-50/80 p-4 sm:p-5 shadow-xs space-y-2">
          <div className="flex items-center gap-2 text-emerald-700">
            <Award className="h-5 w-5" />
            <span className="text-xs font-black uppercase tracking-wider">Education Grants & Subsidies</span>
          </div>
          <h2 className="text-base sm:text-lg font-black text-slate-900">
            100% Verified Government Scholarships
          </h2>
          <p className="text-xs text-emerald-900/80 leading-relaxed">
            Avail fee waivers, maintenance stipends, and credit cards directly sanctioned by the State and Central Governments.
          </p>
        </div>

        {/* Scholarships List */}
        <div className="space-y-3.5">
          {schemes.map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-xs space-y-3"
            >
              <div>
                <div className="flex items-center gap-2">
                  <span className="rounded-md bg-emerald-50 px-2 py-0.5 text-[10px] font-black text-emerald-800 border border-emerald-200">
                    {item.tag}
                  </span>
                  {item.isHot && (
                    <span className="rounded-md bg-amber-50 px-2 py-0.5 text-[10px] font-black text-amber-800 border border-amber-200">
                      HIGH DEMAND
                    </span>
                  )}
                </div>
                <h3 className="text-sm sm:text-base font-black text-slate-900 mt-1.5 leading-snug">
                  {item.name}
                </h3>
                <span className="text-[11px] text-slate-500 font-medium">{item.org}</span>
              </div>

              <div className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-3 text-xs space-y-1.5 text-slate-700">
                <div className="text-emerald-700 font-bold">{item.benefit}</div>
                <p className="text-[11px] leading-relaxed text-slate-600">{item.description}</p>
              </div>

              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 py-2.5 px-4 text-xs font-black text-white transition shadow-sm"
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
