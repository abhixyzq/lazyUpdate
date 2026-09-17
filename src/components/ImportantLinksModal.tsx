'use client';

import React from 'react';
import { X, ExternalLink, PhoneCall, ShieldAlert, Award, Briefcase, CheckCircle2, Sparkles } from 'lucide-react';

export type ImportantLinkCategory = 'internships' | 'scholarships' | 'antiragging';

interface ImportantLinksModalProps {
  category: ImportantLinkCategory | null;
  onClose: () => void;
}

export const ImportantLinksModal: React.FC<ImportantLinksModalProps> = ({
  category,
  onClose,
}) => {
  if (!category) return null;

  const getCategoryDetails = () => {
    switch (category) {
      case 'internships':
        return {
          title: 'Student Internships & Placement Hub',
          badge: 'Government & Top Corporates',
          badgeColor: 'border-blue-200 bg-blue-50 text-blue-700',
          icon: <Briefcase className="h-4 w-4 text-blue-600" />,
          description: 'Official verified internship schemes and career opportunities for Patna University undergraduate & postgraduate students.',
          links: [
            {
              name: 'PM Internship Scheme 2024-25',
              tag: '₹5,000/Month Stipend',
              description: 'Central Government scheme offering 12-month internships in India’s Top 500 companies (Tata, Reliance, L&T, etc.) for youth aged 21-24.',
              url: 'https://pminternship.mca.gov.in',
              actionLabel: 'Apply on PM Internship Portal',
              isHot: true,
            },
            {
              name: 'AICTE / UGC National Internship Portal',
              tag: '1 Lakh+ Active Roles',
              description: 'Verified technical, managerial, and social development internships with certificates and stipends.',
              url: 'https://internship.aicte-india.org',
              actionLabel: 'Browse AICTE Portal',
            },
            {
              name: 'PU Central Placement Cell Circulars',
              tag: 'Patna University',
              description: 'Campus placement drives, soft skills training programs, and pool campus interviews organized by PU.',
              url: 'https://pup.ac.in',
              actionLabel: 'View PU Placement Notices',
            }
          ]
        };

      case 'scholarships':
        return {
          title: 'Scholarship Schemes & Financial Aid',
          badge: 'Bihar & Central Govt Aid',
          badgeColor: 'border-emerald-200 bg-emerald-50 text-emerald-800',
          icon: <Award className="h-4 w-4 text-emerald-700" />,
          description: 'Apply for government fee reimbursements, post-matric stipends, and student welfare incentives.',
          links: [
            {
              name: 'Bihar Post-Matric Scholarship (PMS Online)',
              tag: 'SC / ST / BC / EBC',
              description: 'Bihar Government scheme for college tuition and maintenance fee reimbursement for backward and minority classes.',
              url: 'https://pmsonline.bih.nic.in',
              actionLabel: 'Apply on PMS Online',
              isHot: true,
            },
            {
              name: 'National Scholarship Portal (NSP)',
              tag: 'Central Sector Scheme',
              description: 'Ministry of Education scholarships based on 12th board percentile (top 20th percentile) & Merit-cum-Means.',
              url: 'https://scholarships.gov.in',
              actionLabel: 'Register on NSP Portal',
            },
            {
              name: 'Bihar Student Credit Card (MNSSBY)',
              tag: 'Up to ₹4 Lakhs Loan',
              description: 'Bihar 7-Nischay scheme providing educational finance at 1% interest (for girls/divyang) and 4% for boys.',
              url: 'https://www.7nishchay-yuvaupmission.bihar.gov.in',
              actionLabel: 'Apply for Student Credit Card',
            },
            {
              name: 'Mukhyamantri Kanya Utthan Yojana',
              tag: '₹50,000 for Girls',
              description: 'Direct cash incentive awarded by Bihar Govt to all female students upon graduating from Patna University.',
              url: 'https://medhasoft.bih.nic.in',
              actionLabel: 'Check Kanya Utthan Status',
            }
          ]
        };

      case 'antiragging':
        return {
          title: 'Anti-Ragging Cell & Helpline',
          badge: 'Zero Tolerance Policy',
          badgeColor: 'border-rose-200 bg-rose-50 text-rose-700',
          icon: <ShieldAlert className="h-4 w-4 text-rose-600" />,
          description: 'Ragging is a criminal offense punishable under UGC regulations & IPC. Patna University maintains a strict zero-tolerance campus.',
          helpline: '1800-180-5522',
          helplineText: 'National 24x7 Toll-Free Anti-Ragging Helpline (Call anytime in case of harassment or ragging)',
          links: [
            {
              name: 'Fill Online Anti-Ragging Undertaking / Affidavit',
              tag: 'Mandatory for All Students',
              description: 'Every PU student must submit an online anti-ragging affidavit each academic year and deposit the reference number to their college.',
              url: 'https://www.antiragging.in/affidavit_registration_frame.php',
              actionLabel: 'Fill Affidavit Form Online',
              isHot: true,
            },
            {
              name: 'National Anti-Ragging Portal (antiragging.in)',
              tag: 'UGC Official Portal',
              description: 'Lodge anonymous complaints, track status, and read Supreme Court guidelines regarding campus safety.',
              url: 'https://www.antiragging.in',
              actionLabel: 'Visit UGC Anti-Ragging Portal',
            },
            {
              name: 'Patna University Proctorial Board',
              tag: 'Campus Proctor Office',
              description: 'Contact PU Proctor office and college anti-ragging squads stationed at Patna College, Science College & Hostels.',
              url: 'https://pup.ac.in',
              actionLabel: 'PU Proctorial Contacts',
            }
          ]
        };
    }
  };

  const details = getCategoryDetails();

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 shadow-2xl text-slate-900 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 rounded-full p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="space-y-1.5 pr-6">
          <div className="flex items-center gap-2">
            <span className={`inline-flex items-center gap-1 rounded-lg px-2.5 py-0.5 text-[11px] font-bold border ${details.badgeColor}`}>
              {details.icon}
              <span>{details.badge}</span>
            </span>
          </div>
          <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
            {details.title}
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            {details.description}
          </p>
        </div>

        {/* Special Helpline Banner for Anti-Ragging */}
        {'helpline' in details && details.helpline && (
          <div className="mt-4 rounded-2xl border border-rose-200 bg-rose-50/80 p-3.5 flex items-center justify-between gap-3 shadow-xs">
            <div className="space-y-0.5">
              <span className="text-[10px] font-bold tracking-wider uppercase text-rose-700">
                24x7 TOLL-FREE HELPLINE
              </span>
              <div className="text-lg font-black text-slate-900 tracking-wider">
                {details.helpline}
              </div>
              <p className="text-[10px] text-slate-500">
                {details.helplineText}
              </p>
            </div>
            <a
              href={`tel:${details.helpline}`}
              className="flex items-center gap-1.5 rounded-xl bg-rose-600 px-3.5 py-2 text-xs font-black text-white hover:bg-rose-700 active:scale-95 transition shrink-0 shadow-xs"
            >
              <PhoneCall className="h-3.5 w-3.5" /> Call Now
            </a>
          </div>
        )}

        {/* Links List */}
        <div className="mt-4 space-y-2.5">
          {details.links.map((link, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-3.5 space-y-2 hover:border-slate-300 transition shadow-2xs"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-xs sm:text-sm font-black text-slate-900">
                      {link.name}
                    </h4>
                    {link.isHot && (
                      <span className="rounded-md bg-amber-50 px-1.5 py-0.5 text-[9px] font-bold text-amber-800 border border-amber-200">
                        Active
                      </span>
                    )}
                  </div>
                  <span className="text-[10px] font-semibold text-blue-700">
                    {link.tag}
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-normal">
                {link.description}
              </p>

              <div className="pt-1 flex justify-end">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 rounded-xl bg-slate-900 hover:bg-slate-800 px-3 py-1.5 text-xs font-black text-white shadow-xs active:scale-95 transition"
                >
                  <span>{link.actionLabel}</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer Footer */}
        <div className="mt-4 pt-3 border-t border-slate-200 text-center text-[11px] text-slate-500">
          Official Bihar & Government of India student portals • Powered by Lazy PU
        </div>
      </div>
    </div>
  );
};
