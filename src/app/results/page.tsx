'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SubpageHeader } from '@/components/SubpageHeader';
import {
  Search,
  Loader2,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Printer,
  Share2,
  ExternalLink,
  RotateCcw,
  Sparkles,
  ArrowLeft,
  GraduationCap,
  BookOpen,
} from 'lucide-react';
import { fetchUgRegularResult } from '@/utils/puResultService';
import { UgResultData } from '@/types/result';

export default function ResultsPage() {
  const [rollInput, setRollInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<UgResultData | null>(null);
  const [copied, setCopied] = useState(false);

  const handleFetch = async (rollToFetch?: string) => {
    const targetRoll = (rollToFetch || rollInput).trim();
    if (!targetRoll) {
      setError('Kripya apna Roll Number enter karein');
      return;
    }

    setLoading(true);
    setError(null);

    const res = await fetchUgRegularResult(targetRoll);

    setLoading(false);
    if (res.success && res.data) {
      setResult(res.data);
    } else {
      setError(res.error || 'Result fetch nahi ho paya. Kripya roll number check karein.');
    }
  };

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  const handleShare = async () => {
    if (!result) return;
    const shareText = `Patna University UG Result\nName: ${result.name}\nRoll: ${result.rollNo}\nCollege: ${result.institute}\nStatus: ${result.semesterResult}${result.sgpa ? ` (SGPA: ${result.sgpa})` : ''}\nChecked via Lazy PU App`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: `PU Result - ${result.name}`,
          text: shareText,
        });
      } catch {
        // user cancelled or failed
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch {
        // ignore
      }
    }
  };

  const isPass = result?.semesterResult?.toLowerCase().includes('pass');

  return (
    <div className="min-h-screen bg-slate-50/70 text-slate-900 pb-28 sm:pb-16 print:bg-white print:p-0 print:m-0">
      {/* Top Header - hidden during print */}
      <div className="print:hidden">
        <SubpageHeader title="Results" />
      </div>

      <main className="mx-auto max-w-2xl px-3 pt-4 space-y-4">
        {/* Search & Lookup Section - hidden during print */}
        <div className="rounded-3xl border border-slate-200/90 bg-white p-5 shadow-xs print:hidden space-y-4">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 border border-indigo-100">
              <GraduationCap className="h-5 w-5" />
            </span>
            <h1 className="text-base sm:text-lg font-black text-slate-900 leading-tight">
              PU UG Regular Result
            </h1>
          </div>

          {/* Roll Input Form */}
          <div className="space-y-2">
            <label htmlFor="rollNumberInput" className="block text-xs font-bold text-slate-700">
              Exam Roll Number (UG Regular 25-29)
            </label>
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="relative flex-1">
                <input
                  id="rollNumberInput"
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={16}
                  value={rollInput}
                  onChange={(e) => {
                    setRollInput(e.target.value.replace(/\D/g, ''));
                    if (error) setError(null);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleFetch();
                  }}
                  placeholder="Enter 11-digit roll (e.g. 12602404033)"
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:outline-hidden focus:ring-2 focus:ring-indigo-100 transition shadow-xs"
                />
                {rollInput && (
                  <button
                    type="button"
                    onClick={() => {
                      setRollInput('');
                      setError(null);
                    }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                    aria-label="Clear roll input"
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                  </button>
                )}
              </div>

              <button
                type="button"
                disabled={loading || !rollInput.trim()}
                onClick={() => handleFetch()}
                className="flex items-center justify-center gap-2 rounded-2xl bg-indigo-600 hover:bg-indigo-700 active:scale-98 disabled:opacity-50 disabled:pointer-events-none px-6 py-3 text-sm font-black text-white shadow-xs transition"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Fetching...</span>
                  </>
                ) : (
                  <>
                    <Search className="h-4 w-4" />
                    <span>Show Result</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Error Alert - hidden during print */}
        {error && (
          <div className="rounded-2xl border border-red-200 bg-red-50/90 p-4 text-red-800 shadow-xs print:hidden space-y-2">
            <div className="flex items-start gap-2.5">
              <AlertCircle className="h-5 w-5 shrink-0 text-red-600 mt-0.5" />
              <div className="space-y-1">
                <p className="text-xs sm:text-sm font-bold leading-snug">{error}</p>
                <p className="text-[11px] text-red-600">
                  Kripya check karein ki roll number UG Regular 2025-29 semester exam ka hi hai.
                </p>
              </div>
            </div>
            <div className="pt-1 flex items-center gap-2">
              <a
                href="https://pu.bihar-ums.com/result/ugregularresult"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-red-700 hover:underline"
              >
                <span>Open Official Portal directly</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        )}

        {/* Loading Spinner Skeleton - hidden during print */}
        {loading && (
          <div className="rounded-3xl border border-slate-200/90 bg-white p-8 text-center shadow-xs print:hidden space-y-3">
            <Loader2 className="h-8 w-8 animate-spin text-indigo-600 mx-auto" />
            <p className="text-sm font-black text-slate-800">
              Fetching Official Marksheet...
            </p>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Connecting directly to pu.bihar-ums.com official examination database.
            </p>
          </div>
        )}

        {/* Marksheet Display Card */}
        {result && !loading && (
          <div className="space-y-3">
            {/* Marksheet Actions Bar (Print / Share / Reset) - hidden during print */}
            <div className="flex items-center justify-between gap-2 print:hidden">
              <span className="text-xs font-bold text-slate-500 flex items-center gap-1">
                <Sparkles className="h-3.5 w-3.5 text-indigo-500" />
                Verified Electronic Marksheet
              </span>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={handleShare}
                  className="flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-50 shadow-2xs transition"
                >
                  <Share2 className="h-3.5 w-3.5" />
                  <span>{copied ? 'Copied!' : 'Share'}</span>
                </button>

                <button
                  type="button"
                  onClick={handlePrint}
                  className="flex items-center gap-1 rounded-xl bg-slate-900 px-3.5 py-1.5 text-xs font-black text-white hover:bg-slate-800 shadow-2xs transition"
                >
                  <Printer className="h-3.5 w-3.5" />
                  <span>Print / PDF</span>
                </button>
              </div>
            </div>

            {/* Marksheet Document */}
            <div className="rounded-3xl border border-slate-200 bg-white p-4 sm:p-6 shadow-sm print:border-black print:rounded-none print:shadow-none print:p-2 space-y-4">
              {/* Marksheet Header */}
              <div className="border-b border-slate-200 pb-4 text-center space-y-1">
                <div className="flex items-center justify-between text-[11px] text-slate-400 font-semibold px-1">
                  <span>{result.marksheetNo ? `No: ${result.marksheetNo}` : 'Online Result'}</span>
                  <span>Session: 2025-29</span>
                </div>

                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-2xl border border-indigo-100 shadow-2xs">
                  🏛️
                </div>

                <h2 className="text-base sm:text-xl font-black text-slate-900 tracking-tight uppercase">
                  Patna University, Patna
                </h2>
                <p className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold">
                  Ashok Rajpath, Patna - 800 005
                </p>
                <div className="pt-1">
                  <span className="inline-block rounded-full bg-slate-100 px-3 py-0.5 text-xs font-black tracking-wide text-slate-800 border border-slate-200 uppercase">
                    Statement of Marks
                  </span>
                </div>
              </div>

              {/* Student Metadata Grid */}
              <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-3.5 text-xs space-y-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">
                      Student Name
                    </span>
                    <span className="text-sm font-black text-slate-900 block">
                      {result.name}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">
                      Father&apos;s Name
                    </span>
                    <span className="font-bold text-slate-800 block">
                      {result.fatherName || '-'}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 border-t border-slate-200/60">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">
                      Exam Roll No
                    </span>
                    <span className="font-black text-indigo-700 text-xs">
                      {result.rollNo}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">
                      Registration No
                    </span>
                    <span className="font-bold text-slate-800 text-xs">
                      {result.registrationNo || '-'}
                    </span>
                  </div>

                  <div className="col-span-2 sm:col-span-2">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">
                      Institute / College
                    </span>
                    <span className="font-bold text-slate-800 text-xs line-clamp-1">
                      {result.institute || '-'}
                    </span>
                  </div>
                </div>

                <div className="pt-1 border-t border-slate-200/60">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">
                    Programme
                  </span>
                  <span className="font-bold text-slate-700 text-xs">
                    {result.programme || '-'}
                  </span>
                </div>
              </div>

              {/* Result Status & SGPA Banner */}
              <div
                className={`rounded-2xl border p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left ${
                  isPass
                    ? 'border-emerald-200 bg-emerald-50/80 text-emerald-950'
                    : 'border-amber-200 bg-amber-50/80 text-amber-950'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${
                      isPass
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'bg-amber-600 text-white shadow-xs'
                    }`}
                  >
                    {isPass ? (
                      <CheckCircle2 className="h-6 w-6" />
                    ) : (
                      <XCircle className="h-6 w-6" />
                    )}
                  </span>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider opacity-75 block">
                      Semester Result Status
                    </span>
                    <span className="text-lg font-black tracking-tight">
                      {result.semesterResult}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  {result.sgpa && (
                    <div className="rounded-xl bg-white/90 px-3.5 py-1.5 border border-emerald-200 shadow-2xs">
                      <span className="text-[10px] font-bold text-slate-500 uppercase block">
                        SGPA Score
                      </span>
                      <span className="text-base font-black text-emerald-700">
                        {result.sgpa}
                      </span>
                    </div>
                  )}

                  {result.totalCredit && (
                    <div className="rounded-xl bg-white/90 px-3.5 py-1.5 border border-slate-200 shadow-2xs">
                      <span className="text-[10px] font-bold text-slate-500 uppercase block">
                        Total Credits
                      </span>
                      <span className="text-base font-black text-slate-800">
                        {result.totalCredit}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Subject Marks Table */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between px-1">
                  <h3 className="text-xs font-black uppercase text-slate-700 tracking-wider flex items-center gap-1.5">
                    <BookOpen className="h-3.5 w-3.5 text-slate-500" />
                    Subject Evaluation & Grade Report
                  </h3>
                  <span className="text-[11px] text-slate-500 font-semibold">
                    {result.subjects.length} Papers
                  </span>
                </div>

                <div className="overflow-x-auto rounded-2xl border border-slate-200">
                  <table className="w-full border-collapse text-left text-xs">
                    <thead>
                      <tr className="border-b border-slate-200 bg-slate-100/80 font-black text-slate-700">
                        <th className="py-2.5 px-3">Subject / Paper</th>
                        <th className="py-2.5 px-2 text-center">ESE</th>
                        <th className="py-2.5 px-2 text-center">CIA</th>
                        <th className="py-2.5 px-2 text-center">Total</th>
                        <th className="py-2.5 px-2 text-center">Grade</th>
                        <th className="py-2.5 px-2 text-center">Credit</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-medium">
                      {result.subjects.map((sub, idx) => {
                        const isFailGrade = sub.grade.toUpperCase() === 'F';
                        return (
                          <tr
                            key={idx}
                            className={`hover:bg-slate-50/80 transition ${
                              isFailGrade ? 'bg-red-50/40' : ''
                            }`}
                          >
                            <td className="py-2.5 px-3 font-bold text-slate-900">
                              {sub.subject}
                            </td>
                            <td className="py-2.5 px-2 text-center text-slate-600 font-semibold">
                              {sub.ese}
                            </td>
                            <td className="py-2.5 px-2 text-center text-slate-600 font-semibold">
                              {sub.cia}
                            </td>
                            <td className="py-2.5 px-2 text-center font-black text-slate-900">
                              {sub.total}
                            </td>
                            <td className="py-2.5 px-2 text-center">
                              <span
                                className={`inline-flex items-center justify-center rounded-lg px-2 py-0.5 text-[11px] font-black ${
                                  isFailGrade
                                    ? 'bg-red-100 text-red-700 border border-red-200'
                                    : sub.grade.includes('A')
                                    ? 'bg-emerald-100 text-emerald-800'
                                    : 'bg-indigo-50 text-indigo-700'
                                }`}
                              >
                                {sub.grade}
                              </span>
                            </td>
                            <td className="py-2.5 px-2 text-center font-bold text-slate-700">
                              {sub.credit}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Legend & Verification Footer */}
              <div className="pt-2 border-t border-slate-200 text-[11px] text-slate-400 space-y-1">
                <div className="flex flex-wrap items-center justify-between gap-1">
                  <span>ESE: End Semester Exam | CIA: Continuous Internal Assessment</span>
                  <a
                    href={`https://pu.bihar-ums.com/result/ugregular/${result.rollNo}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-bold text-indigo-600 hover:underline print:hidden"
                  >
                    <span>View on official portal</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
                <p className="text-[10px] text-slate-400 italic">
                  Note: This is a computer-generated electronic marksheet directly fetched from Patna University official result portal (pu.bihar-ums.com).
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Back Link - hidden during print */}
        <div className="pt-2 text-center print:hidden">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-800 transition"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>
      </main>
    </div>
  );
}
