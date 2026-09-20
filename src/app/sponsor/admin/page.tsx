'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { SubpageHeader } from '@/components/SubpageHeader';
import { WhatsAppIcon } from '@/components/OfficialBrandIcons';
import {
  Sparkles,
  CheckCircle2,
  XCircle,
  Clock,
  Eye,
  MousePointerClick,
  RefreshCw,
  Plus,
  Trash2,
  Mail,
  ShieldCheck,
  Calendar,
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
  Megaphone,
  Bell,
  Check,
  ArrowRight,
  Layers,
} from 'lucide-react';
import { supabase } from '@/lib/supabase';
import type { User } from '@supabase/supabase-js';
import {
  Sponsor,
  getActiveSponsor,
  getAllSponsorApplicationsAsync,
  approveAndActivateSponsor,
  resetToInHouseSponsor,
  setCustomActiveSponsor,
  deleteSponsorApplication,
  getSponsorStats,
  DEFAULT_INHOUSE_SPONSOR,
} from '@/services/sponsorService';
import {
  subscribeToLivePresence,
  getDeviceAnalyticsAsync,
  getRemoteAppSetting,
  setRemoteAppSetting,
  PresenceStats,
  DeviceAnalytics,
} from '@/services/telemetryService';

export default function SponsorAdminPage() {
  // Auth states (Pure Email + Password)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoadingAuth, setIsLoadingAuth] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Active Admin Tab
  const [activeTab, setActiveTab] = useState<'analytics' | 'sponsors' | 'broadcast'>('analytics');

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

  // Sponsor & Ads Data
  const [activeSponsor, setActiveSponsor] = useState<Sponsor>(DEFAULT_INHOUSE_SPONSOR);
  const [applications, setApplications] = useState<Sponsor[]>([]);
  const [activeFilter, setActiveFilter] = useState<'all' | 'active' | 'pending' | 'expired'>('all');
  const [stats, setStats] = useState({ impressions: 0, clicks: 0 });

  // Remote Broadcast / Announcement Ticker
  const [tickerText, setTickerText] = useState('PU UG Exam Forms & Semester Results Portal Live • Download Syllabi & PYQs');
  const [tickerEnabled, setTickerEnabled] = useState(true);
  const [isSavingTicker, setIsSavingTicker] = useState(false);
  const [tickerSavedSuccess, setTickerSavedSuccess] = useState(false);

  // Quick Direct Sponsor Modal
  const [isQuickCreateOpen, setIsQuickCreateOpen] = useState(false);
  const [quickForm, setQuickForm] = useState({
    businessName: '',
    tagline: '',
    description: '',
    whatsappNumber: '',
    phone: '',
    posterImage: '',
    durationDays: 30,
    category: 'Coaching & Services',
  });

  const loadData = async () => {
    try {
      // 1. Sponsor banner & applications
      const active = await getActiveSponsor();
      setActiveSponsor(active);
      if (active.id) {
        setStats(getSponsorStats(active.id));
      }
      const apps = await getAllSponsorApplicationsAsync();
      setApplications(apps);

      // 2. Device & Download analytics
      const devAnalytics = await getDeviceAnalyticsAsync();
      setDeviceStats(devAnalytics);

      // 3. Remote Ticker Setting
      const tickerSetting = await getRemoteAppSetting('ticker', {
        enabled: true,
        text: 'PU UG Exam Forms & Semester Results Portal Live • Download Syllabi & PYQs',
      });
      if (tickerSetting) {
        setTickerText(tickerSetting.text || '');
        setTickerEnabled(tickerSetting.enabled ?? true);
      }
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
      setErrorMsg('Supabase client is not initialized.');
      return;
    }

    setIsLoadingAuth(true);
    setErrorMsg('');

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });

      if (error) {
        setErrorMsg(error.message || 'Invalid email or password.');
      } else if (data?.user) {
        setCurrentUser(data.user);
        setIsAuthenticated(true);
        setErrorMsg('');
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Authentication error.');
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
    setEmail('');
    setPassword('');
  };

  const handleApprove = async (id: string) => {
    if (window.confirm('Approve this sponsor and make it LIVE across the entire app?')) {
      const success = await approveAndActivateSponsor(id);
      if (success) {
        alert('Sponsor is now LIVE across the app!');
        await loadData();
      } else {
        alert('Failed to activate sponsor.');
      }
    }
  };

  const handleDelete = async (id: string, name: string) => {
    if (window.confirm(`Delete sponsor application from "${name}"?`)) {
      const success = await deleteSponsorApplication(id);
      if (success) {
        await loadData();
      } else {
        alert('Failed to delete application.');
      }
    }
  };

  const handleResetToInHouse = async () => {
    if (window.confirm('Reset active banner to the default In-House partner promotion?')) {
      await resetToInHouseSponsor();
      await loadData();
    }
  };

  const handleQuickCreateSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickForm.businessName || !quickForm.tagline || !quickForm.whatsappNumber) {
      alert('Please fill required fields');
      return;
    }

    const now = new Date();
    const end = new Date(now.getTime() + quickForm.durationDays * 24 * 60 * 60 * 1000);

    const newSponsor: Sponsor = {
      id: `sp_manual_${Date.now()}`,
      businessName: quickForm.businessName.trim(),
      tagline: quickForm.tagline.trim(),
      description: quickForm.description.trim(),
      badge: 'CAMPUS PARTNER',
      posterImage: quickForm.posterImage.trim(),
      whatsappNumber: quickForm.whatsappNumber.replace(/[^0-9]/g, ''),
      whatsappMessage: `Hi! I saw your ${quickForm.businessName} banner on Lazy PU App and want details.`,
      phone: quickForm.phone.trim() || quickForm.whatsappNumber.trim(),
      category: quickForm.category,
      startDate: now.toISOString(),
      endDate: end.toISOString(),
      status: 'active',
      isInHouse: false,
      impressions: 0,
      clicks: 0,
      createdAt: now.toISOString(),
    };

    await setCustomActiveSponsor(newSponsor);
    setIsQuickCreateOpen(false);
    await loadData();
    alert('New sponsor is now LIVE across Lazy PU!');
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
    } else {
      alert('Failed to update ticker settings in Supabase.');
    }
  };

  // Filtered applications
  const filteredApps = applications.filter((app) => {
    if (activeFilter === 'all') return true;
    return app.status === activeFilter;
  });

  // Calculate total earnings
  const totalEarnings = applications
    .filter((a) => a.status === 'active' || a.paymentMethod === 'razorpay')
    .reduce((sum, a) => sum + (Number(a.paymentAmount) || 0), 0);

  // 1. Authentication Screen (Clean Supabase Email & Password Only)
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex items-center justify-center p-4 pb-20">
        <div className="w-full max-w-sm rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xl space-y-4">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 border border-blue-200 shadow-2xs">
            <Shield className="h-7 w-7" />
          </div>

          <div className="text-center space-y-1">
            <h2 className="text-lg font-black text-slate-900">Partner Admin Portal</h2>
            <p className="text-xs text-slate-500">
              Sign in with your Email & Password
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
                placeholder="Email"
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
              {isLoadingAuth ? 'Authenticating...' : 'Sign In to Control Panel'}
            </button>

            <div className="text-center pt-1">
              <Link
                href="/sponsor"
                className="text-xs font-bold text-slate-400 hover:text-slate-600 transition"
              >
                ← Back to Sponsor Page
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }

  // 2. Authenticated Admin Command Center
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 pb-24">
      <SubpageHeader
        title="Command Center"
        subtitle="Live telemetry, real-time presence, ads control & campus broadcasts"
      />

      <main className="mx-auto max-w-5xl px-3 pt-4 space-y-4">
        
        {/* Top Control Strip with Live Indicator */}
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

          <button
            onClick={() => setActiveTab('sponsors')}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-black transition cursor-pointer ${
              activeTab === 'sponsors'
                ? 'bg-slate-900 text-white shadow-2xs'
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            <Megaphone className="h-3.5 w-3.5" />
            <span>Ads & Sponsors ({applications.length})</span>
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
            <span>Broadcast & Ticker</span>
          </button>
        </div>

        {/* ============================================================ */}
        {/* TAB 1: LIVE ANALYTICS & DEVICES                             */}
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
                <span className="text-[11px] text-slate-500">
                  Total Registered Devices: {deviceStats.totalAppInstalls + deviceStats.totalWebVisitors}
                </span>
              </div>

              {/* Progress bar */}
              <div className="h-3 w-full rounded-full bg-slate-100 overflow-hidden flex">
                <div
                  style={{
                    width: `${
                      ((deviceStats.totalAppInstalls || 0) /
                        Math.max(deviceStats.totalAppInstalls + deviceStats.totalWebVisitors, 1)) *
                      100
                    }%`,
                  }}
                  className="bg-blue-600 transition-all duration-500"
                  title="Android App"
                />
                <div
                  style={{
                    width: `${
                      ((deviceStats.totalWebVisitors || 0) /
                        Math.max(deviceStats.totalAppInstalls + deviceStats.totalWebVisitors, 1)) *
                      100
                    }%`,
                  }}
                  className="bg-purple-500 transition-all duration-500"
                  title="Web"
                />
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                <span className="flex items-center gap-1 font-bold text-blue-700">
                  <span className="h-2 w-2 rounded-full bg-blue-600" /> Android App ({deviceStats.totalAppInstalls})
                </span>
                <span className="flex items-center gap-1 font-bold text-purple-700">
                  <span className="h-2 w-2 rounded-full bg-purple-500" /> Web & Browser ({deviceStats.totalWebVisitors})
                </span>
              </div>
            </div>

            {/* Recent Registered Devices Log */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-4 shadow-2xs space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <Layers className="h-4 w-4 text-slate-500" />
                  <h3 className="text-xs font-black text-slate-900">
                    Recent Devices & Students Activity
                  </h3>
                </div>
                <span className="text-[10px] text-slate-400 font-semibold">
                  Latest 10 Heartbeats
                </span>
              </div>

              {deviceStats.recentDevices.length === 0 ? (
                <p className="text-xs text-slate-400 text-center py-4">
                  Devices telemetry will appear here as students open the app.
                </p>
              ) : (
                <div className="divide-y divide-slate-100 overflow-x-auto">
                  {deviceStats.recentDevices.map((dev) => (
                    <div
                      key={dev.id}
                      className="flex items-center justify-between py-2.5 text-xs hover:bg-slate-50 px-2 rounded-xl transition"
                    >
                      <div className="flex items-center gap-2.5">
                        <span
                          className={`rounded-md px-2 py-0.5 text-[10px] font-black uppercase ${
                            dev.platform === 'android'
                              ? 'bg-blue-50 text-blue-700 border border-blue-200'
                              : 'bg-purple-50 text-purple-700 border border-purple-200'
                          }`}
                        >
                          {dev.platform}
                        </span>
                        <div>
                          <div className="font-mono text-slate-800 text-[11px] font-bold truncate max-w-[180px] sm:max-w-xs">
                            {dev.deviceId}
                          </div>
                          <div className="text-[10px] text-slate-400">
                            Version: {dev.appVersion}
                          </div>
                        </div>
                      </div>

                      <div className="text-right text-[11px] text-slate-500 font-medium">
                        {new Date(dev.lastSeenAt).toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>
        )}

        {/* ============================================================ */}
        {/* TAB 2: ADS & SPONSORS MANAGEMENT                            */}
        {/* ============================================================ */}
        {activeTab === 'sponsors' && (
          <div className="space-y-4">
            
            {/* Live Banner Spotlight */}
            <div className="rounded-3xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-2xs space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">
                    Currently Displayed Banner
                  </span>
                  <div className="flex items-center gap-2 pt-0.5">
                    <h3 className="text-base font-black text-slate-900">
                      {activeSponsor.businessName}
                    </h3>
                    <span
                      className={`rounded-md px-2 py-0.5 text-[10px] font-black uppercase ${
                        activeSponsor.isInHouse
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-emerald-100 text-emerald-800'
                      }`}
                    >
                      {activeSponsor.isInHouse ? 'In-House Partner' : 'Paid Sponsor Active'}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {!activeSponsor.isInHouse && (
                    <button
                      onClick={handleResetToInHouse}
                      className="rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-700 px-3 py-1.5 text-xs font-bold transition cursor-pointer"
                    >
                      Revert to In-House
                    </button>
                  )}
                  <button
                    onClick={() => setIsQuickCreateOpen(true)}
                    className="inline-flex items-center gap-1 rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-3.5 py-1.5 text-xs font-bold transition shadow-xs cursor-pointer"
                  >
                    <Plus className="h-3.5 w-3.5" />
                    <span>Set Custom Sponsor</span>
                  </button>
                </div>
              </div>

              {/* Performance Stats of Active Banner */}
              <div className="grid grid-cols-3 gap-2 text-center pt-1">
                <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-2.5">
                  <span className="text-[10px] font-bold text-slate-400 block uppercase">Views</span>
                  <span className="text-base font-black text-slate-900">{stats.impressions}</span>
                </div>

                <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-2.5">
                  <span className="text-[10px] font-bold text-slate-400 block uppercase">Leads (Clicks)</span>
                  <span className="text-base font-black text-emerald-600">{stats.clicks}</span>
                </div>

                <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-2.5">
                  <span className="text-[10px] font-bold text-slate-400 block uppercase">CTR Ratio</span>
                  <span className="text-base font-black text-blue-600">
                    {((stats.clicks / Math.max(stats.impressions, 1)) * 100).toFixed(1)}%
                  </span>
                </div>
              </div>
            </div>

            {/* Applications List Header with Filter Tabs */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-4 shadow-2xs space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <h3 className="text-xs font-black text-slate-900 uppercase tracking-wider">
                    Sponsorship Applications ({applications.length})
                  </h3>
                  <span className="rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold px-1.5 py-0.2">
                    ₹{totalEarnings} Total Revenue
                  </span>
                </div>

                {/* Filter Pills */}
                <div className="flex items-center gap-1 text-[11px] font-bold">
                  {(['all', 'active', 'pending', 'expired'] as const).map((filter) => (
                    <button
                      key={filter}
                      onClick={() => setActiveFilter(filter)}
                      className={`px-2.5 py-1 rounded-lg capitalize transition cursor-pointer ${
                        activeFilter === filter
                          ? 'bg-slate-900 text-white'
                          : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>

              {filteredApps.length === 0 ? (
                <div className="p-8 text-center text-slate-400 text-xs">
                  No {activeFilter !== 'all' ? activeFilter : ''} sponsor applications found.
                </div>
              ) : (
                <div className="space-y-2.5">
                  {filteredApps.map((app) => (
                    <div
                      key={app.id}
                      className={`rounded-2xl border p-3.5 space-y-2.5 transition ${
                        app.status === 'active'
                          ? 'border-emerald-300 bg-emerald-50/20'
                          : 'border-slate-200 bg-white hover:border-slate-300'
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-100">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-black text-slate-900">
                              {app.businessName}
                            </span>
                            <span
                              className={`rounded-md px-2 py-0.5 text-[10px] font-black uppercase ${
                                app.status === 'active'
                                  ? 'bg-emerald-600 text-white'
                                  : app.status === 'pending'
                                  ? 'bg-amber-100 text-amber-800'
                                  : 'bg-slate-100 text-slate-600'
                              }`}
                            >
                              {app.status}
                            </span>
                            {app.paymentMethod === 'razorpay' && (
                              <span className="rounded-md bg-blue-50 border border-blue-200 text-blue-700 text-[10px] font-bold px-1.5 py-0.2">
                                Razorpay Verified
                              </span>
                            )}
                          </div>
                          <span className="text-[11px] text-slate-500">
                            Plan: <strong>{app.planName || '30 Days'}</strong> (₹{app.paymentAmount}) • UTR:{' '}
                            <strong className="font-mono text-slate-900">{app.paymentUtr}</strong>
                          </span>
                        </div>

                        <div className="flex items-center gap-1.5">
                          {app.status !== 'active' && (
                            <button
                              onClick={() => handleApprove(app.id)}
                              className="rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1.5 text-xs font-black shadow-2xs transition active:scale-95 cursor-pointer"
                            >
                              Approve & Go Live
                            </button>
                          )}
                          <button
                            onClick={() => handleDelete(app.id, app.businessName)}
                            className="rounded-xl border border-rose-200 text-rose-600 hover:bg-rose-50 p-1.5 transition cursor-pointer"
                            title="Delete Application"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                        <div>
                          <span className="text-slate-400 text-[11px] block">Offer Tagline:</span>
                          <p className="font-bold text-slate-800">{app.tagline}</p>
                        </div>

                        <div>
                          <span className="text-slate-400 text-[11px] block">Contact Person:</span>
                          <p className="text-slate-800">
                            {app.applicantName} ({app.applicantPhone || app.whatsappNumber})
                          </p>
                        </div>
                      </div>

                      {app.posterImage && (
                        <div className="pt-1">
                          <a
                            href={app.posterImage}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-600 hover:underline"
                          >
                            <span>View Uploaded Poster</span>
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>
        )}

        {/* ============================================================ */}
        {/* TAB 3: BROADCAST & NOTICE TICKER CONTROL                    */}
        {/* ============================================================ */}
        {activeTab === 'broadcast' && (
          <div className="space-y-4">
            
            {/* Live Ticker Preview */}
            <div className="rounded-3xl border border-slate-200/90 bg-white p-5 shadow-2xs space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <Bell className="h-4 w-4 text-amber-500" />
                  <h3 className="text-sm font-black text-slate-900">
                    Live Announcement Strip Control
                  </h3>
                </div>
                <span
                  className={`rounded-full px-2.5 py-0.5 text-[10px] font-black uppercase ${
                    tickerEnabled
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  {tickerEnabled ? 'Broadcast Active' : 'Broadcast Paused'}
                </span>
              </div>

              {/* Preview */}
              <div>
                <span className="text-[11px] font-bold text-slate-400 block mb-1">
                  Student Live View Preview:
                </span>
                <div className="rounded-2xl border border-amber-200/90 bg-amber-50/80 px-3.5 py-2.5 shadow-xs text-xs flex items-center justify-between gap-2.5">
                  <div className="flex items-center gap-2 min-w-0 flex-1">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-600">
                      <Bell className="h-3 w-3" />
                    </div>
                    <p className="truncate text-xs text-amber-950 font-semibold">
                      {tickerText || 'No announcement message set.'}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-xl bg-slate-900 px-3 py-1 font-black text-[10px] text-white">
                    Join Now
                  </span>
                </div>
              </div>

              {/* Message Editor Form */}
              <div className="space-y-3 pt-2">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Announcement Text
                  </label>
                  <textarea
                    rows={3}
                    value={tickerText}
                    onChange={(e) => setTickerText(e.target.value)}
                    placeholder="Enter message for the golden notification strip on homepage..."
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 p-2.5 text-xs text-slate-900 focus:bg-white focus:outline-hidden transition"
                  />
                </div>

                <div className="flex items-center justify-between pt-1">
                  <label className="flex items-center gap-2 cursor-pointer select-none">
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

        {/* 3. Quick Custom Sponsor Modal */}
        {isQuickCreateOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <div className="w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h3 className="text-base font-black text-slate-900">
                  Add Custom Sponsor Directly
                </h3>
                <button
                  onClick={() => setIsQuickCreateOpen(false)}
                  className="rounded-full p-1 text-slate-400 hover:bg-slate-100 transition cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleQuickCreateSubmit} className="space-y-3 text-xs">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={quickForm.businessName}
                    onChange={(e) => setQuickForm({ ...quickForm, businessName: e.target.value })}
                    placeholder="e.g. Drishti IAS / Patna Boys PG"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 p-2.5 focus:bg-white focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Offer Tagline *
                  </label>
                  <input
                    type="text"
                    required
                    value={quickForm.tagline}
                    onChange={(e) => setQuickForm({ ...quickForm, tagline: e.target.value })}
                    placeholder="e.g. Special Discount for PU Students"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 p-2.5 focus:bg-white focus:outline-hidden"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      WhatsApp Number for Leads *
                    </label>
                    <input
                      type="tel"
                      required
                      value={quickForm.whatsappNumber}
                      onChange={(e) => setQuickForm({ ...quickForm, whatsappNumber: e.target.value })}
                      placeholder="9876543210"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 p-2.5 focus:bg-white focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Duration (Days)
                    </label>
                    <input
                      type="number"
                      value={quickForm.durationDays}
                      onChange={(e) => setQuickForm({ ...quickForm, durationDays: Number(e.target.value) })}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 p-2.5 focus:bg-white focus:outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Poster Image URL (Optional)
                  </label>
                  <input
                    type="url"
                    value={quickForm.posterImage}
                    onChange={(e) => setQuickForm({ ...quickForm, posterImage: e.target.value })}
                    placeholder="https://..."
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 p-2.5 focus:bg-white focus:outline-hidden"
                  />
                </div>

                <div className="pt-3 flex gap-2 justify-end">
                  <button
                    type="button"
                    onClick={() => setIsQuickCreateOpen(false)}
                    className="rounded-xl border border-slate-200 px-4 py-2 font-bold text-slate-700 hover:bg-slate-50 cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-2 shadow-xs cursor-pointer"
                  >
                    Set Live Now
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
