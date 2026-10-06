'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { SubpageHeader } from '@/components/SubpageHeader';
import { getContributors } from '@/services/contributorService';
import { ContributorItem } from '@/data/contributors';
import {
  Search,
  Building2,
  RefreshCw,
  ArrowLeft,
  X,
  Shield,
} from 'lucide-react';

export default function ContributorsPage() {
  const [contributors, setContributors] = useState<ContributorItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [isLiveDB, setIsLiveDB] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCollege, setSelectedCollege] = useState('All');

  // Load contributors directly from Supabase database
  const loadData = async () => {
    setLoading(true);
    try {
      const res = await getContributors();
      setContributors(res.contributors);
      setIsLiveDB(res.isLive);
    } catch (err) {
      console.error('Failed to load contributors:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // Unique colleges for filter dropdown
  const collegesList = useMemo(() => {
    const set = new Set<string>();
    contributors.forEach((c) => {
      if (c.college) set.add(c.college);
    });
    return ['All', ...Array.from(set)];
  }, [contributors]);

  // Filtered contributors based on search and college
  const filtered = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return contributors.filter((c) => {
      const matchesCollege =
        selectedCollege === 'All' ||
        c.college.toLowerCase() === selectedCollege.toLowerCase();

      const matchesSearch =
        !q ||
        c.name.toLowerCase().includes(q) ||
        c.college.toLowerCase().includes(q) ||
        (c.course && c.course.toLowerCase().includes(q)) ||
        (c.role && c.role.toLowerCase().includes(q));

      return matchesCollege && matchesSearch;
    });
  }, [contributors, searchQuery, selectedCollege]);

  // College count
  const totalColleges = useMemo(() => {
    return new Set(contributors.map((c) => c.college).filter(Boolean)).size;
  }, [contributors]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      <SubpageHeader title="Contributors" />

      <main className="mx-auto max-w-2xl px-4 pt-6 space-y-5">
        
        {/* Professional Header */}
        <div className="border-b border-slate-200 pb-4 space-y-1">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold tracking-tight text-slate-900">
              PU Contributors & Supporters
            </h1>
            <div className="flex items-center gap-1.5">
              <span
                className={`h-2 w-2 rounded-full ${
                  isLiveDB ? 'bg-emerald-500' : 'bg-slate-400'
                }`}
              />
              <span className="text-[11px] font-medium text-slate-500">
                {isLiveDB ? 'Live Database' : 'Database Sync'}
              </span>
              <button
                type="button"
                onClick={loadData}
                disabled={loading}
                title="Refresh from Database"
                className="ml-1 p-1 text-slate-400 hover:text-slate-700 transition"
              >
                <RefreshCw className={`h-3 w-3 ${loading ? 'animate-spin' : ''}`} />
              </button>
            </div>
          </div>
          <p className="text-xs text-slate-500">
            Patna University students and supporters contributing to keep the portal ad-free and open for everyone.
          </p>

          {/* Quick Metrics Bar */}
          <div className="flex items-center gap-4 pt-2 text-xs font-semibold text-slate-600">
            <div>
              <span className="font-bold text-slate-900">{contributors.length}</span> Supporters
            </div>
            <span className="text-slate-300">•</span>
            <div>
              <span className="font-bold text-slate-900">{totalColleges}</span> Colleges
            </div>
            <span className="text-slate-300">•</span>
            <div className="text-emerald-700 font-bold">
              100% Ad-Free
            </div>
          </div>
        </div>

        {/* Clean Filter Controls */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {/* Search Input */}
          <div className="relative sm:col-span-2">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by student name or college..."
              className="w-full rounded-lg border border-slate-300 bg-white pl-8 pr-7 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:border-slate-500 focus:outline-hidden transition"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="h-3 w-3" />
              </button>
            )}
          </div>

          {/* College Dropdown */}
          <div>
            <select
              value={selectedCollege}
              onChange={(e) => setSelectedCollege(e.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-white px-2.5 py-2 text-xs font-medium text-slate-700 focus:border-slate-500 focus:outline-hidden"
            >
              {collegesList.map((col) => (
                <option key={col} value={col}>
                  {col === 'All' ? 'All Colleges' : col}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Professional Directory List */}
        <div className="rounded-xl border border-slate-200 bg-white shadow-xs overflow-hidden">
          {loading ? (
            <div className="p-8 text-center space-y-2">
              <RefreshCw className="h-4 w-4 animate-spin text-slate-400 mx-auto" />
              <p className="text-xs text-slate-500">Loading supporters from database...</p>
            </div>
          ) : filtered.length === 0 ? (
            <div className="p-8 text-center space-y-1.5">
              <p className="text-xs font-semibold text-slate-700">No contributors found</p>
              <p className="text-[11px] text-slate-400">Try adjusting your search or college filter.</p>
              {(searchQuery || selectedCollege !== 'All') && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCollege('All');
                  }}
                  className="mt-2 text-xs text-blue-600 hover:underline font-medium"
                >
                  Clear all filters
                </button>
              )}
            </div>
          ) : (
            <div className="divide-y divide-slate-100">
              {filtered.map((item, index) => (
                <div
                  key={item.id || index}
                  className="p-3.5 sm:px-4 hover:bg-slate-50/80 transition flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                >
                  {/* Left: Name and Course */}
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-900">
                        {item.name}
                      </span>
                      {item.role && item.role !== 'Supporter' && (
                        <span className="text-[10px] font-semibold text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded">
                          {item.role}
                        </span>
                      )}
                    </div>
                    {item.course && (
                      <p className="text-[11px] text-slate-500">
                        {item.course}
                      </p>
                    )}
                    {item.message && (
                      <p className="text-[11px] text-slate-600 italic pt-0.5">
                        &ldquo;{item.message}&rdquo;
                      </p>
                    )}
                  </div>

                  {/* Right: College Name & Date */}
                  <div className="flex items-center sm:flex-col sm:items-end justify-between sm:justify-center gap-1 shrink-0 pt-1 sm:pt-0">
                    <span className="inline-flex items-center gap-1 rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-[11px] font-medium text-slate-700">
                      <Building2 className="h-3 w-3 text-slate-400" />
                      {item.college}
                    </span>
                    {item.date && (
                      <span className="text-[10px] text-slate-400 font-medium">
                        {item.date}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Simple Bottom Actions */}
        <div className="flex items-center justify-between pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 transition"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Home</span>
          </Link>

          <Link
            href="/admin"
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 px-3.5 py-2 text-xs font-semibold text-slate-700 shadow-2xs transition"
            title="Admin Portal"
          >
            <Shield className="h-3.5 w-3.5 text-slate-400" />
            <span>Admin Portal</span>
          </Link>
        </div>

      </main>
    </div>
  );
}
