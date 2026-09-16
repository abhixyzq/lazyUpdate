'use client';

import React, { useState } from 'react';
import { SubpageHeader } from '@/components/SubpageHeader';
import { Search, ExternalLink, Award, FileDown, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ResultsPage() {
  const [rollNumber, setRollNumber] = useState('');
  const [selectedSem, setSelectedSem] = useState('2');
  const [searched, setSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (rollNumber.trim()) {
      setSearched(true);
    }
  };

  const recentResults = [
    { title: 'BCA 2nd Semester Examination 2024', date: 'Published 12 Sep 2024', status: 'Declared', link: 'https://pup.ac.in' },
    { title: 'B.Sc (Hons) Physics & Math Sem 4', date: 'Published 08 Sep 2024', status: 'Declared', link: 'https://pup.ac.in' },
    { title: 'B.Com (Accounts) Sem 6 Final Degree', date: 'Published 01 Sep 2024', status: 'Declared', link: 'https://pup.ac.in' },
    { title: 'B.A. (Hons) History & Political Science Sem 2', date: 'Published 28 Aug 2024', status: 'Declared', link: 'https://pup.ac.in' },
    { title: 'Patna Law College LL.B Sem 3 Routine & Marks', date: 'Published 22 Aug 2024', status: 'Declared', link: 'https://pup.ac.in' },
  ];

  return (
    <div className="min-h-screen bg-transparent text-white pb-12">
      <SubpageHeader
        title="Results & Marksheets"
        badge="UMIS PORTAL"
        subtitle="Digital GradeSheet & SGPA Lookup"
      />

      <main className="mx-auto max-w-xl px-3 pt-4 space-y-4">
        {/* Server Status Badge */}
        <div className="flex items-center justify-between rounded-2xl border border-emerald-500/40 bg-[#06241a] p-3 text-xs">
          <div className="flex items-center gap-2 text-emerald-300">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-black">PU UMIS Server Status: ONLINE</span>
          </div>
          <span className="text-[10px] text-emerald-400/80 font-bold">Fast Gateway Active</span>
        </div>

        {/* Digital Marksheet Quick Search Form */}
        <div className="rounded-3xl border border-blue-900/80 bg-[#091a36] p-4 sm:p-5 shadow-2xl space-y-3.5">
          <div>
            <h2 className="text-sm sm:text-base font-black text-[#00d2ff] tracking-tight">
              Check Semester Result & Grade Card
            </h2>
            <p className="text-xs text-slate-300 mt-0.5">
              Enter your Roll Number to fetch provisional SGPA result.
            </p>
          </div>

          <form onSubmit={handleSearch} className="space-y-3">
            <div>
              <label className="text-[11px] font-bold text-slate-400 block mb-1">
                EXAM ROLL NUMBER / REGISTRATION NUMBER
              </label>
              <input
                type="text"
                value={rollNumber}
                onChange={(e) => setRollNumber(e.target.value)}
                placeholder="e.g. 231010045 or PU2023-BCA-045"
                required
                className="w-full rounded-xl border border-blue-900 bg-[#06142a] px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400/40 shadow-inner"
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-[11px] font-bold text-slate-400 block mb-1">
                  SEMESTER
                </label>
                <select
                  value={selectedSem}
                  onChange={(e) => setSelectedSem(e.target.value)}
                  className="w-full rounded-xl border border-blue-900 bg-[#06142a] px-3 py-2 text-xs text-white focus:border-cyan-400 focus:outline-none"
                >
                  <option value="1">1st Semester</option>
                  <option value="2">2nd Semester</option>
                  <option value="3">3rd Semester</option>
                  <option value="4">4th Semester</option>
                  <option value="5">5th Semester</option>
                  <option value="6">6th Semester</option>
                </select>
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-400 block mb-1">
                  EXAM TYPE
                </label>
                <select className="w-full rounded-xl border border-blue-900 bg-[#06142a] px-3 py-2 text-xs text-white focus:border-cyan-400 focus:outline-none">
                  <option>Regular Batch</option>
                  <option>Backlog / Carry</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 py-2.5 px-4 text-xs sm:text-sm font-black text-white shadow-lg hover:from-blue-500 hover:to-cyan-500 active:scale-98 transition flex items-center justify-center gap-1.5"
            >
              <Search className="h-4 w-4" /> Fetch Digital Result
            </button>
          </form>

          {searched && (
            <div className="rounded-2xl border border-blue-800 bg-[#0c234a] p-3.5 space-y-2.5 animate-in fade-in duration-150">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold text-cyan-400 uppercase">Provisional Record Found</span>
                  <div className="text-xs font-black text-white">Roll: {rollNumber} • Sem {selectedSem}</div>
                </div>
                <span className="rounded-lg bg-emerald-500/20 px-2 py-0.5 text-xs font-black text-emerald-400 border border-emerald-500/40">
                  PASSED
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-center text-xs">
                <div className="p-2 rounded-xl bg-[#061428] border border-blue-900">
                  <span className="text-[10px] text-slate-400 block">Calculated SGPA</span>
                  <span className="text-base font-black text-cyan-300">8.42</span>
                </div>
                <div className="p-2 rounded-xl bg-[#061428] border border-blue-900">
                  <span className="text-[10px] text-slate-400 block">Total Credits</span>
                  <span className="text-base font-black text-white">22.0</span>
                </div>
              </div>

              <div className="flex gap-2 pt-1">
                <a
                  href="https://pup.ac.in"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 rounded-xl bg-cyan-600 py-2 text-center text-xs font-black text-white hover:bg-cyan-500 transition flex items-center justify-center gap-1"
                >
                  <FileDown className="h-3.5 w-3.5" /> Download GradeSheet PDF
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Official Direct Portal Button */}
        <a
          href="https://pup.ac.in"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-between rounded-2xl border border-blue-800/80 bg-[#0c234a] p-3.5 text-xs font-bold text-white shadow-md hover:border-cyan-400 hover:bg-[#102d5e] transition"
        >
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
              <ExternalLink className="h-4 w-4" />
            </div>
            <div>
              <div className="text-xs font-black text-white">Official Patna University Portal</div>
              <div className="text-[10px] text-slate-400">pup.ac.in Examination Department</div>
            </div>
          </div>
          <span className="text-cyan-400 text-xs font-black">Open ↗</span>
        </a>

        {/* Recent Declared Results */}
        <div className="rounded-3xl border border-blue-900/80 bg-[#091a36] p-4 shadow-xl space-y-3">
          <h3 className="text-xs sm:text-sm font-black text-[#fbbf24] tracking-wide uppercase flex items-center gap-1.5">
            <Award className="h-4 w-4" /> Recently Declared Results
          </h3>

          <div className="space-y-2">
            {recentResults.map((r, idx) => (
              <a
                key={idx}
                href={r.link}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-2xl border border-blue-900/60 bg-[#07162d] p-3 hover:border-cyan-500/60 hover:bg-[#0c234a] transition group"
              >
                <div>
                  <h4 className="text-xs font-black text-white group-hover:text-cyan-300">{r.title}</h4>
                  <span className="text-[10px] text-slate-400">{r.date}</span>
                </div>
                <span className="rounded-lg bg-emerald-500/20 px-2 py-0.5 text-[10px] font-black text-emerald-400 border border-emerald-500/40">
                  {r.status}
                </span>
              </a>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
