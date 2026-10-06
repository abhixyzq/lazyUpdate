'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { SubpageHeader } from '@/components/SubpageHeader';
import {
  Sparkles,
  RefreshCw,
  Plus,
  Trash2,
  Mail,
  AlertCircle,
  ExternalLink,
  Shield,
  Key,
  LogOut,
  Users,
  Smartphone,
  Globe,
  Radio,
  TrendingUp,
  Bell,
  Check,
  Building2,
  Edit2,
  Search,
} from 'lucide-react';
import { supabase } from '@/lib/supabase';
import type { User } from '@supabase/supabase-js';
import { ContributorItem } from '@/data/contributors';
import {
  getContributors,
  addContributor,
  updateContributor,
  deleteContributor,
  deleteAllContributors,
} from '@/services/contributorService';
import {
  subscribeToLivePresence,
  getDeviceAnalyticsAsync,
  getRemoteAppSetting,
  setRemoteAppSetting,
  PresenceStats,
  DeviceAnalytics,
} from '@/services/telemetryService';
import { puCollegesData } from '@/data/puColleges';

export default function AdminPage() {
  // Auth state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoadingAuth, setIsLoadingAuth] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Active Admin Tab
  const [activeTab, setActiveTab] = useState<'analytics' | 'contributors' | 'broadcast'>('contributors');

  // Contributors Management State
  const [adminContributors, setAdminContributors] = useState<ContributorItem[]>([]);
  const [isContributorsLoading, setIsContributorsLoading] = useState(false);
  const [contributorSearch, setContributorSearch] = useState('');
  const [isContributorModalOpen, setIsContributorModalOpen] = useState(false);
  const [editingContributor, setEditingContributor] = useState<ContributorItem | null>(null);
  const [contributorForm, setContributorForm] = useState({
    name: '',
    college: 'Patna Science College',
    customCollege: '',
    course: '',
    role: 'Supporter',
    badge: 'Supporter 💖',
    amount: '',
    message: '',
  });

  // Live Telemetry & Device Analytics
  const [presence, setPresence] = useState<PresenceStats>({
    totalLive: 1,
    liveApp: 0,
    liveWeb: 1,
  });
  const [deviceStats, setDeviceStats] = useState<DeviceAnalytics>({
    totalAppInstalls: 0,
    totalWebVisitors: 0,
    activeToday: 0,
    recentDevices: [],
  });

  // Remote Broadcast / Announcement Ticker
  const [tickerText, setTickerText] = useState('PU UG Exam Forms & Semester Results Portal Live • Download Syllabi & PYQs');
  const [tickerEnabled, setTickerEnabled] = useState(true);
  const [isSavingTicker, setIsSavingTicker] = useState(false);
  const [tickerSavedSuccess, setTickerSavedSuccess] = useState(false);

  // Toast Notification
  const [inlineToast, setInlineToast] = useState<{ type: 'success' | 'error'; msg: string } | null>(null);
  const showToast = (type: 'success' | 'error', msg: string) => {
    setInlineToast({ type, msg });
    setTimeout(() => setInlineToast(null), 4000);
  };

  const loadContributorsData = async () => {
    setIsContributorsLoading(true);
    try {
      const res = await getContributors();
      setAdminContributors(res.contributors);
    } catch (e) {
      console.error('Failed to load contributors:', e);
    } finally {
      setIsContributorsLoading(false);
    }
  };

  const loadData = async () => {
    try {
      // 1. Device Analytics
      const devAnalytics = await getDeviceAnalyticsAsync();
      setDeviceStats(devAnalytics);

      // 2. Remote Ticker Setting
      const tickerSetting = await getRemoteAppSetting('ticker', {
        enabled: true,
        text: 'PU UG Exam Forms & Semester Results Portal Live • Download Syllabi & PYQs',
      });
      if (tickerSetting) {
        setTickerText(tickerSetting.text || '');
        setTickerEnabled(tickerSetting.enabled ?? true);
      }

      // 3. Contributors Data
      await loadContributorsData();
    } catch {
      // ignore
    }
  };

  // Check Supabase session on mount
  useEffect(() => {
    if (supabase) {
      supabase.auth.getSession().then(({ data: { session } }) => {
        if (session?.user) {
          setCurrentUser(session.user);
          setIsAuthenticated(true);
        }
      });

      const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
        if (session?.user) {
          setCurrentUser(session.user);
          setIsAuthenticated(true);
        } else {
          setCurrentUser(null);
          setIsAuthenticated(false);
        }
      });

      return () => {
        subscription.unsubscribe();
      };
    }
  }, []);

  // Subscribe to Realtime Presence when authenticated
  useEffect(() => {
    if (!isAuthenticated) return;

    loadData();

    const unsubscribePresence = subscribeToLivePresence((newStats) => {
      setPresence(newStats);
    });

    return () => {
      unsubscribePresence();
    };
  }, [isAuthenticated]);

  const handleSupabaseAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password) {
      setErrorMsg('Please enter both email and password.');
      return;
    }

    if (!supabase) {
      setErrorMsg('Supabase is not configured.');
      return;
    }

    setIsLoadingAuth(true);
    setErrorMsg('');

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password: password,
      });

      if (error) {
        setErrorMsg(error.message);
      } else if (data?.user) {
        setCurrentUser(data.user);
        setIsAuthenticated(true);
        setEmail('');
        setPassword('');
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Authentication failed';
      setErrorMsg(msg);
    } finally {
      setIsLoadingAuth(false);
    }
  };

  const handleLogout = async () => {
    if (supabase) {
      await supabase.auth.signOut();
    }
    setCurrentUser(null);
    setIsAuthenticated(false);
  };

  const handleSaveTicker = async () => {
    setIsSavingTicker(true);
    setTickerSavedSuccess(false);
    const success = await setRemoteAppSetting('ticker', {
      enabled: tickerEnabled,
      text: tickerText.trim(),
      updatedAt: new Date().toISOString(),
    });
    setIsSavingTicker(false);
    if (success) {
      setTickerSavedSuccess(true);
      setTimeout(() => setTickerSavedSuccess(false), 3000);
      showToast('success', 'Announcement ticker broadcasted live!');
    } else {
      showToast('error', 'Failed to update ticker. Check Supabase connection.');
    }
  };

  const handleOpenAddContributor = () => {
    setEditingContributor(null);
    setContributorForm({
      name: '',
      college: 'Patna Science College',
      customCollege: '',
      course: '',
      role: 'Supporter',
      badge: 'Supporter 💖',
      amount: '',
      message: '',
    });
    setIsContributorModalOpen(true);
  };

  const handleOpenEditContributor = (c: ContributorItem) => {
    setEditingContributor(c);
    const isStandard = puCollegesData.some((p) => p.name === c.college);
    setContributorForm({
      name: c.name,
      college: isStandard ? c.college : 'Other',
      customCollege: isStandard ? '' : c.college,
      course: c.course || '',
      role: c.role || 'Supporter',
      badge: c.badge || '',
      amount: '',
      message: c.message || '',
    });
    setIsContributorModalOpen(true);
  };

  const handleSaveContributor = async (e: React.FormEvent) => {
    e.preventDefault();
    const finalCollege =
      contributorForm.college === 'Other'
        ? contributorForm.customCollege.trim() || 'Patna University'
        : contributorForm.college;

    if (!contributorForm.name.trim()) {
      showToast('error', 'Contributor name is required.');
      return;
    }

    if (editingContributor) {
      const updatedFields = {
        name: contributorForm.name.trim(),
        college: finalCollege,
        course: contributorForm.course.trim() || undefined,
        role: contributorForm.role.trim() || 'Supporter',
        badge: contributorForm.badge.trim() || undefined,
        message: contributorForm.message.trim() || undefined,
      };

      // Optimistically update UI immediately
      setAdminContributors((prev) =>
        prev.map((c) => (c.id === editingContributor.id ? { ...c, ...updatedFields } : c))
      );
      setIsContributorModalOpen(false);

      const res = await updateContributor(editingContributor.id, updatedFields);
      if (res.success) {
        showToast('success', `Contributor "${contributorForm.name}" updated!`);
      } else {
        showToast('error', res.error || 'Failed to update contributor in database.');
        await loadContributorsData();
      }
    } else {
      setIsContributorModalOpen(false);
      const res = await addContributor({
        name: contributorForm.name.trim(),
        college: finalCollege,
        course: contributorForm.course.trim() || undefined,
        role: contributorForm.role.trim() || 'Supporter',
        badge: contributorForm.badge.trim() || undefined,
        amount: Number(contributorForm.amount) || undefined,
        message: contributorForm.message.trim() || undefined,
      });
      if (res.success) {
        setAdminContributors((prev) => [res.contributor, ...prev]);
        showToast('success', `Contributor "${contributorForm.name}" added to database!`);
      } else {
        showToast('error', res.error || 'Failed to add contributor.');
        await loadContributorsData();
      }
    }
  };

  const handleDeleteContributor = async (id: string, name: string) => {
    if (!confirm(`Are you sure you want to remove "${name}" from contributors?`)) {
      return;
    }
    // Optimistically update UI immediately
    setAdminContributors((prev) => prev.filter((c) => c.id !== id));

    const res = await deleteContributor(id);
    if (res.success) {
      showToast('success', `Removed "${name}" from contributors.`);
    } else {
      showToast('error', res.error || 'Failed to delete contributor. Please check Supabase policies.');
      await loadContributorsData();
    }
  };

  const handleDeleteAllContributors = async () => {
    if (
      !confirm(
        '⚠️ WARNING: Are you sure you want to permanently delete ALL contributors and purge all dummy data? This cannot be undone.'
      )
    ) {
      return;
    }
    // Optimistically clear immediately
    setAdminContributors([]);

    const res = await deleteAllContributors();
    if (res.success) {
      showToast('success', 'All contributor & dummy data cleared permanently!');
    } else {
      showToast('error', res.error || 'Failed to clear data from database. Run updated SQL schema in Supabase.');
      await loadContributorsData();
    }
  };

  // Filtered contributors for admin
  const filteredAdminContributors = adminContributors.filter((c) => {
    const q = contributorSearch.trim().toLowerCase();
    if (!q) return true;
    return (
      c.name.toLowerCase().includes(q) ||
      c.college.toLowerCase().includes(q) ||
      (c.course && c.course.toLowerCase().includes(q)) ||
      (c.role && c.role.toLowerCase().includes(q)) ||
      (c.badge && c.badge.toLowerCase().includes(q))
    );
  });

  // 1. Authentication Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex items-center justify-center p-4 pb-20">
        <div className="w-full max-w-sm rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xl space-y-4">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 border border-blue-200 shadow-2xs">
            <Shield className="h-7 w-7" />
          </div>

          <div className="text-center space-y-1">
            <h2 className="text-lg font-black text-slate-900">Lazy PU Admin Portal</h2>
            <p className="text-xs text-slate-500">
              Sign in with your Admin Credentials
            </p>
          </div>

          <form onSubmit={handleSupabaseAuth} className="space-y-3 pt-1">
            <div className="relative">
              <Mail className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
              <input
                type="email"
                required
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Admin Email"
                className="w-full pl-10 pr-3.5 py-2.5 text-xs rounded-xl border border-slate-200 bg-slate-50/80 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-blue-600 focus:outline-hidden transition shadow-2xs"
              />
            </div>

            <div className="relative">
              <Key className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full pl-10 pr-3.5 py-2.5 text-xs rounded-xl border border-slate-200 bg-slate-50/80 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-blue-600 focus:outline-hidden transition shadow-2xs"
              />
            </div>

            {errorMsg && (
              <p className="text-xs text-rose-600 font-bold text-center mt-1 flex items-center justify-center gap-1">
                <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                <span>{errorMsg}</span>
              </p>
            )}

            <button
              type="submit"
              disabled={isLoadingAuth}
              className="w-full rounded-2xl bg-slate-900 hover:bg-slate-800 disabled:opacity-60 text-white font-black py-3 text-xs transition shadow-xs active:scale-98 cursor-pointer"
            >
              {isLoadingAuth ? 'Authenticating...' : 'Sign In to Admin Panel'}
            </button>

            <div className="text-center pt-1">
              <Link
                href="/"
                className="text-xs font-bold text-slate-400 hover:text-slate-600 transition"
              >
                ← Back to Home
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }

  // 2. Authenticated Admin Dashboard
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 pb-24">
      <SubpageHeader
        title="Admin Control Center"
        subtitle="Manage contributors, announcements & live campus telemetry"
      />

      <main className="mx-auto max-w-5xl px-3 pt-4 space-y-4">
        {/* Inline Toast Notification */}
        {inlineToast && (
          <div
            className={`fixed top-4 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-2.5 rounded-2xl border px-4 py-3 text-xs font-bold shadow-xl animate-in slide-in-from-top-2 duration-200 ${
              inlineToast.type === 'success'
                ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
                : 'bg-rose-50 border-rose-300 text-rose-900'
            }`}
          >
            <span>{inlineToast.type === 'success' ? '✅' : '❌'}</span>
            <span>{inlineToast.msg}</span>
          </div>
        )}

        {/* Top Status Strip */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 rounded-2xl border border-slate-200/90 bg-white p-3.5 shadow-2xs">
          <div className="flex flex-wrap items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>

            <span className="text-xs font-black text-slate-900">
              {currentUser?.email || 'Admin Online'}
            </span>

            <span className="inline-flex items-center gap-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-bold px-2 py-0.5">
              <Radio className="h-3 w-3 animate-pulse" />
              <span>{presence.totalLive} Live Online</span>
            </span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={loadData}
              className="inline-flex items-center justify-center gap-1 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 px-3 py-1.5 text-slate-700 text-xs font-bold transition cursor-pointer"
              title="Refresh Data"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Refresh</span>
            </button>

            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1 rounded-xl border border-rose-200 bg-rose-50 hover:bg-rose-100 text-rose-700 px-3 py-1.5 text-xs font-bold transition cursor-pointer"
              title="Sign Out"
            >
              <LogOut className="h-3.5 w-3.5" />
              <span>Logout</span>
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-1.5 border-b border-slate-200 pb-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab('contributors')}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-black transition cursor-pointer ${
              activeTab === 'contributors'
                ? 'bg-slate-900 text-white shadow-2xs'
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            <Users className="h-3.5 w-3.5" />
            <span>Contributors ({adminContributors.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('broadcast')}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-black transition cursor-pointer ${
              activeTab === 'broadcast'
                ? 'bg-slate-900 text-white shadow-2xs'
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            <Bell className="h-3.5 w-3.5" />
            <span>Broadcast Ticker</span>
          </button>

          <button
            onClick={() => setActiveTab('analytics')}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-black transition cursor-pointer ${
              activeTab === 'analytics'
                ? 'bg-slate-900 text-white shadow-2xs'
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            <TrendingUp className="h-3.5 w-3.5" />
            <span>Live Analytics & Devices</span>
          </button>
        </div>

        {/* ============================================================ */}
        {/* TAB 1: CONTRIBUTORS & SUPPORTERS (FULL CONTROL)              */}
        {/* ============================================================ */}
        {activeTab === 'contributors' && (
          <div className="space-y-4">
            {/* Header Control Card */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 rounded-2xl border border-slate-200/90 bg-white p-4 shadow-2xs">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <h2 className="text-base font-black text-slate-900">
                    Contributors & Supporters Management
                  </h2>
                  <span className="rounded-full bg-slate-100 text-slate-700 px-2.5 py-0.5 text-xs font-bold border border-slate-200">
                    {adminContributors.length} Total
                  </span>
                </div>
                <p className="text-xs text-slate-500">
                  Full control over student contributors. Add, edit, or delete entries synced live with Supabase database.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={handleOpenAddContributor}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white px-3.5 py-2 text-xs font-bold shadow-xs transition cursor-pointer"
                >
                  <Plus className="h-3.5 w-3.5" />
                  <span>Add Contributor</span>
                </button>

                <button
                  type="button"
                  onClick={handleDeleteAllContributors}
                  disabled={adminContributors.length === 0}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-rose-200 bg-rose-50 hover:bg-rose-100 disabled:opacity-40 disabled:cursor-not-allowed text-rose-700 px-3.5 py-2 text-xs font-bold transition cursor-pointer"
                  title="Permanently clear all contributor and dummy records"
                >
                  <Trash2 className="h-3.5 w-3.5 text-rose-600" />
                  <span>Delete All Data</span>
                </button>

                <Link
                  href="/contributors"
                  target="_blank"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 px-3 py-2 text-xs font-bold transition cursor-pointer"
                  title="View live public page"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  <span>View Public Page</span>
                </Link>
              </div>
            </div>

            {/* Search Filter */}
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                value={contributorSearch}
                onChange={(e) => setContributorSearch(e.target.value)}
                placeholder="Search contributors by name, college, or course..."
                className="w-full rounded-2xl border border-slate-200 bg-white pl-10 pr-4 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:border-slate-500 focus:outline-hidden shadow-2xs transition"
              />
            </div>

            {/* Contributors Directory Table */}
            <div className="rounded-2xl border border-slate-200/90 bg-white shadow-2xs overflow-hidden">
              {isContributorsLoading ? (
                <div className="p-8 text-center space-y-2">
                  <RefreshCw className="h-5 w-5 animate-spin text-slate-400 mx-auto" />
                  <p className="text-xs text-slate-500">Loading contributors from Supabase database...</p>
                </div>
              ) : filteredAdminContributors.length === 0 ? (
                <div className="p-8 text-center space-y-2">
                  <p className="text-sm font-bold text-slate-700">No contributors found</p>
                  <p className="text-xs text-slate-400">
                    No contributors in the database. Add real student supporters using the button below.
                  </p>
                  <button
                    type="button"
                    onClick={handleOpenAddContributor}
                    className="inline-flex items-center gap-1 mt-2 text-xs text-blue-600 font-bold hover:underline cursor-pointer"
                  >
                    <Plus className="h-3.5 w-3.5" />
                    <span>Add First Contributor</span>
                  </button>
                </div>
              ) : (
                <div className="divide-y divide-slate-100">
                  {filteredAdminContributors.map((c) => (
                    <div
                      key={c.id}
                      className="p-3.5 sm:px-5 hover:bg-slate-50/80 transition flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                    >
                      <div className="space-y-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-xs sm:text-sm font-black text-slate-900">
                            {c.name}
                          </span>
                          {c.role && (
                            <span className="rounded-md bg-slate-100 text-slate-700 text-[10px] font-bold px-2 py-0.5 border border-slate-200">
                              {c.role}
                            </span>
                          )}
                          {c.badge && (
                            <span className="rounded-md bg-rose-50 text-rose-700 text-[10px] font-bold px-2 py-0.5 border border-rose-200">
                              {c.badge}
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-2 text-xs text-slate-500 flex-wrap">
                          <span className="inline-flex items-center gap-1 font-semibold text-slate-700">
                            <Building2 className="h-3.5 w-3.5 text-slate-400" />
                            {c.college}
                          </span>
                          {c.course && (
                            <>
                              <span>•</span>
                              <span>{c.course}</span>
                            </>
                          )}
                          {c.date && (
                            <>
                              <span>•</span>
                              <span className="text-slate-400">{c.date}</span>
                            </>
                          )}
                        </div>

                        {c.message && (
                          <p className="text-[11px] text-slate-600 italic">
                            &ldquo;{c.message}&rdquo;
                          </p>
                        )}
                      </div>

                      {/* Action buttons */}
                      <div className="flex items-center gap-1.5 shrink-0 self-end sm:self-center">
                        <button
                          type="button"
                          onClick={() => handleOpenEditContributor(c)}
                          className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 px-3 py-1.5 text-xs font-bold transition cursor-pointer"
                        >
                          <Edit2 className="h-3 w-3" />
                          <span>Edit</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDeleteContributor(c.id, c.name)}
                          className="inline-flex items-center gap-1 rounded-xl border border-rose-200 bg-rose-50 hover:bg-rose-100 text-rose-700 px-3 py-1.5 text-xs font-bold transition cursor-pointer"
                        >
                          <Trash2 className="h-3 w-3" />
                          <span>Delete</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* TAB 2: BROADCAST TICKER & REMOTE SETTINGS                   */}
        {/* ============================================================ */}
        {activeTab === 'broadcast' && (
          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-2xs space-y-4">
              <div>
                <h3 className="text-sm font-black text-slate-900 flex items-center gap-1.5">
                  <Bell className="h-4 w-4 text-amber-500" />
                  <span>Remote Announcement Ticker</span>
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  The message entered here broadcasts instantly to all active students on the Home page top notification strip.
                </p>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Broadcast Message Text
                  </label>
                  <textarea
                    rows={3}
                    value={tickerText}
                    onChange={(e) => setTickerText(e.target.value)}
                    placeholder="Enter urgent circular, exam routine or notice alert..."
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs font-medium text-slate-900 focus:bg-white focus:outline-hidden leading-relaxed shadow-2xs"
                  />
                </div>

                <div className="flex items-center justify-between pt-1">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={tickerEnabled}
                      onChange={(e) => setTickerEnabled(e.target.checked)}
                      className="h-4 w-4 rounded-md border-slate-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-xs font-bold text-slate-700">
                      Show on Home Page
                    </span>
                  </label>

                  <button
                    onClick={handleSaveTicker}
                    disabled={isSavingTicker}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 disabled:opacity-50 text-white font-black px-4 py-2 text-xs transition active:scale-95 shadow-xs cursor-pointer"
                  >
                    {isSavingTicker ? (
                      'Broadcasting...'
                    ) : tickerSavedSuccess ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-400" />
                        <span>Saved Live!</span>
                      </>
                    ) : (
                      'Save & Broadcast'
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* TAB 3: LIVE ANALYTICS & DEVICES                             */}
        {/* ============================================================ */}
        {activeTab === 'analytics' && (
          <div className="space-y-4">
            {/* 4 Hero KPI Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
              {/* Card 1: Live Online Right Now */}
              <div className="rounded-2xl border border-emerald-200/90 bg-emerald-50/40 p-4 shadow-2xs flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-black uppercase text-emerald-800 tracking-wider">
                    Live Online Now
                  </span>
                  <Radio className="h-4 w-4 text-emerald-600 animate-pulse" />
                </div>
                <div className="py-2">
                  <div className="text-2xl sm:text-3xl font-black text-emerald-950">
                    {presence.totalLive}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-bold text-emerald-800">
                  <span>📱 {presence.liveApp} App</span>
                  <span>•</span>
                  <span>🌐 {presence.liveWeb} Web</span>
                </div>
              </div>

              {/* Card 2: Total Phone Installs */}
              <div className="rounded-2xl border border-blue-200/90 bg-white p-4 shadow-2xs flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-black uppercase text-blue-700 tracking-wider">
                    Total App Installs
                  </span>
                  <Smartphone className="h-4 w-4 text-blue-600" />
                </div>
                <div className="py-2">
                  <div className="text-2xl sm:text-3xl font-black text-slate-900">
                    {deviceStats.totalAppInstalls}
                  </div>
                </div>
                <div className="text-[10px] font-semibold text-slate-500">
                  Unique Android Devices
                </div>
              </div>

              {/* Card 3: Total Web Visitors */}
              <div className="rounded-2xl border border-purple-200/90 bg-white p-4 shadow-2xs flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-black uppercase text-purple-700 tracking-wider">
                    Web Visitors
                  </span>
                  <Globe className="h-4 w-4 text-purple-600" />
                </div>
                <div className="py-2">
                  <div className="text-2xl sm:text-3xl font-black text-slate-900">
                    {deviceStats.totalWebVisitors}
                  </div>
                </div>
                <div className="text-[10px] font-semibold text-slate-500">
                  Browser & Desktop Clients
                </div>
              </div>

              {/* Card 4: Daily Active Users (DAU) */}
              <div className="rounded-2xl border border-amber-200/90 bg-white p-4 shadow-2xs flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-black uppercase text-amber-700 tracking-wider">
                    24h Active Users
                  </span>
                  <Users className="h-4 w-4 text-amber-600" />
                </div>
                <div className="py-2">
                  <div className="text-2xl sm:text-3xl font-black text-slate-900">
                    {deviceStats.activeToday}
                  </div>
                </div>
                <div className="text-[10px] font-semibold text-slate-500">
                  Students active in last 24h
                </div>
              </div>
            </div>

            {/* Platform Ratio Bar */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-4 shadow-2xs space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                <span className="flex items-center gap-1.5">
                  <Smartphone className="h-4 w-4 text-blue-600" />
                  <span>Android App vs Web Platform Split</span>
                </span>
                <span className="text-slate-500">
                  {deviceStats.totalAppInstalls + deviceStats.totalWebVisitors} Total Endpoints
                </span>
              </div>
              <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden flex">
                <div
                  className="bg-blue-600 h-full transition-all duration-500"
                  style={{
                    width: `${
                      (deviceStats.totalAppInstalls /
                        Math.max(1, deviceStats.totalAppInstalls + deviceStats.totalWebVisitors)) *
                      100
                    }%`,
                  }}
                  title={`Android App: ${deviceStats.totalAppInstalls}`}
                />
                <div
                  className="bg-purple-600 h-full transition-all duration-500"
                  style={{
                    width: `${
                      (deviceStats.totalWebVisitors /
                        Math.max(1, deviceStats.totalAppInstalls + deviceStats.totalWebVisitors)) *
                      100
                    }%`,
                  }}
                  title={`Web Visitors: ${deviceStats.totalWebVisitors}`}
                />
              </div>
              <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                <span className="flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-blue-600" />
                  <span>App: {deviceStats.totalAppInstalls}</span>
                </span>
                <span className="flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-purple-600" />
                  <span>Web: {deviceStats.totalWebVisitors}</span>
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Modal: Add / Edit Contributor */}
        {isContributorModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h3 className="text-base font-black text-slate-900">
                  {editingContributor ? 'Edit Contributor' : 'Add New Contributor'}
                </h3>
                <button
                  type="button"
                  onClick={() => setIsContributorModalOpen(false)}
                  className="rounded-full p-1 text-slate-400 hover:bg-slate-100 transition cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleSaveContributor} className="space-y-3 text-xs">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Student / Contributor Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={contributorForm.name}
                    onChange={(e) => setContributorForm({ ...contributorForm, name: e.target.value })}
                    placeholder="e.g. Aman Verma"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 p-2.5 focus:bg-white focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    College / Department *
                  </label>
                  <select
                    value={contributorForm.college}
                    onChange={(e) => setContributorForm({ ...contributorForm, college: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 p-2.5 font-bold text-slate-800 focus:bg-white focus:outline-hidden"
                  >
                    {puCollegesData
                      .filter((col) => col.id !== 'all')
                      .map((col) => (
                        <option key={col.id} value={col.name}>
                          {col.name}
                        </option>
                      ))}
                    <option value="Other">Other / Custom Department</option>
                  </select>
                </div>

                {contributorForm.college === 'Other' && (
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Custom College / Department Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={contributorForm.customCollege}
                      onChange={(e) => setContributorForm({ ...contributorForm, customCollege: e.target.value })}
                      placeholder="e.g. Patna Law College / Central Campus"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 p-2.5 focus:bg-white focus:outline-hidden"
                    />
                  </div>
                )}

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Course / Department
                    </label>
                    <input
                      type="text"
                      value={contributorForm.course}
                      onChange={(e) => setContributorForm({ ...contributorForm, course: e.target.value })}
                      placeholder="e.g. B.Sc Physics / BCA"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 p-2.5 focus:bg-white focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Role / Tier
                    </label>
                    <select
                      value={contributorForm.role}
                      onChange={(e) => setContributorForm({ ...contributorForm, role: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 p-2.5 font-bold text-slate-800 focus:bg-white focus:outline-hidden"
                    >
                      <option value="Supporter">Supporter</option>
                      <option value="Super Patron">Super Patron</option>
                      <option value="Ad-Free Hero">Ad-Free Hero</option>
                      <option value="Patron">Patron</option>
                      <option value="Notes Contributor">Notes Contributor</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Badge Text (Optional)
                  </label>
                  <input
                    type="text"
                    value={contributorForm.badge}
                    onChange={(e) => setContributorForm({ ...contributorForm, badge: e.target.value })}
                    placeholder="e.g. Super Patron ⭐ or Ad-Free Hero 🛡️"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 p-2.5 focus:bg-white focus:outline-hidden"
                  />
                </div>

                {!editingContributor && (
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Contribution Amount (₹) (Optional)
                    </label>
                    <input
                      type="number"
                      min={0}
                      value={contributorForm.amount}
                      onChange={(e) => setContributorForm({ ...contributorForm, amount: e.target.value })}
                      placeholder="e.g. 100"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 p-2.5 focus:bg-white focus:outline-hidden"
                    />
                  </div>
                )}

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Message / Shoutout (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={contributorForm.message}
                    onChange={(e) => setContributorForm({ ...contributorForm, message: e.target.value })}
                    placeholder="e.g. Proud to support ad-free Lazy PU!"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 p-2.5 focus:bg-white focus:outline-hidden leading-relaxed"
                  />
                </div>

                <div className="pt-2 flex gap-2 justify-end">
                  <button
                    type="button"
                    onClick={() => setIsContributorModalOpen(false)}
                    className="rounded-xl border border-slate-200 px-4 py-2 font-bold text-slate-700 hover:bg-slate-50 cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold px-4 py-2 shadow-xs cursor-pointer"
                  >
                    {editingContributor ? 'Update Contributor' : 'Save to Database'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
