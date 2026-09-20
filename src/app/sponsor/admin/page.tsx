'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { SubpageHeader } from '@/components/SubpageHeader';
import { WhatsAppIcon } from '@/components/OfficialBrandIcons';
import {
  Lock,
  Unlock,
  Sparkles,
  CheckCircle2,
  XCircle,
  Clock,
  Eye,
  MousePointerClick,
  Layers,
  ArrowRight,
  RefreshCw,
  Plus,
  Trash2,
  Phone,
  Mail,
  ShieldCheck,
  Calendar,
  AlertCircle,
  ExternalLink,
} from 'lucide-react';
import {
  Sponsor,
  getActiveSponsor,
  getAllSponsorApplications,
  approveAndActivateSponsor,
  resetToInHouseSponsor,
  setCustomActiveSponsor,
  getSponsorStats,
  DEFAULT_INHOUSE_SPONSOR,
} from '@/services/sponsorService';

const ADMIN_PIN = '2026';

export default function SponsorAdminPage() {
  const [pin, setPin] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const [activeSponsor, setActiveSponsor] = useState<Sponsor>(DEFAULT_INHOUSE_SPONSOR);
  const [applications, setApplications] = useState<Sponsor[]>([]);
  const [stats, setStats] = useState({ impressions: 0, clicks: 0 });

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
    category: 'Coaching & Education',
  });

  const loadData = async () => {
    try {
      const active = await getActiveSponsor();
      setActiveSponsor(active);
      if (active.id) {
        setStats(getSponsorStats(active.id));
      }
      const apps = getAllSponsorApplications();
      setApplications(apps);
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      loadData();
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin.trim() === ADMIN_PIN) {
      setIsAuthenticated(true);
      setErrorMsg('');
    } else {
      setErrorMsg('Incorrect Admin PIN. Please try again.');
    }
  };

  const handleApprove = (id: string) => {
    if (window.confirm('Approve this sponsor and make it LIVE across the entire app?')) {
      const success = approveAndActivateSponsor(id);
      if (success) {
        alert('Sponsor is now LIVE across the app!');
        loadData();
      } else {
        alert('Failed to activate sponsor.');
      }
    }
  };

  const handleResetToInHouse = () => {
    if (window.confirm('Reset the active banner to the default In-House partner promotion?')) {
      resetToInHouseSponsor();
      loadData();
    }
  };

  const handleQuickCreateSubmit = (e: React.FormEvent) => {
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

    setCustomActiveSponsor(newSponsor);
    setIsQuickCreateOpen(false);
    alert('New sponsor is now LIVE across Lazy PU!');
    loadData();
  };

  // 1. PIN Login Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex items-center justify-center p-4 pb-20">
        <div className="w-full max-w-sm rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xl space-y-4">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 border border-blue-200">
            <Lock className="h-7 w-7" />
          </div>

          <div className="text-center space-y-1">
            <h2 className="text-lg font-black text-slate-900">Partner Admin Portal</h2>
            <p className="text-xs text-slate-500">
              Enter the master PIN to manage campus sponsors & banners
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-3">
            <div>
              <input
                type="password"
                required
                autoFocus
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                placeholder="Enter PIN (Default: 2026)"
                className="w-full text-center tracking-widest font-mono text-lg rounded-2xl border border-slate-200 bg-slate-50 p-3 text-slate-900 focus:bg-white focus:border-blue-500 focus:outline-hidden transition"
              />
              {errorMsg && (
                <p className="text-xs text-rose-600 font-bold text-center mt-1.5 flex items-center justify-center gap-1">
                  <AlertCircle className="h-3.5 w-3.5" />
                  <span>{errorMsg}</span>
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-black py-3 text-xs transition shadow-xs active:scale-98"
            >
              Unlock Control Panel
            </button>

            <div className="text-center pt-2">
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

  // 2. Authenticated Admin Dashboard
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 pb-20">
      <SubpageHeader
        title="Sponsor Control Panel"
        subtitle="Manage live banners, approve incoming applications, and track leads"
      />

      <main className="mx-auto max-w-5xl px-3 pt-4 space-y-5">
        {/* Top Control Strip */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-3.5 shadow-2xs">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-black text-slate-900">
              System Online • Connected
            </span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => setIsQuickCreateOpen(true)}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-3.5 py-1.5 text-xs font-bold shadow-2xs transition active:scale-95"
            >
              <Plus className="h-3.5 w-3.5" />
              <span>Add Custom Sponsor</span>
            </button>

            <button
              onClick={loadData}
              className="rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 p-2 text-slate-600 transition"
              title="Refresh"
            >
              <RefreshCw className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* 1. Live Active Sponsor Card */}
        <div className="rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50/70 via-white to-indigo-50/50 p-5 shadow-sm space-y-3">
          <div className="flex items-center justify-between pb-2.5 border-b border-blue-100">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 rounded-full bg-blue-600 px-2.5 py-0.5 text-[10px] font-black uppercase text-white shadow-2xs">
                <Sparkles className="h-3 w-3" />
                CURRENTLY LIVE IN APP
              </span>
              {activeSponsor.isInHouse && (
                <span className="text-[11px] font-bold text-blue-700">
                  (Default In-House Promo)
                </span>
              )}
            </div>

            {!activeSponsor.isInHouse && (
              <button
                onClick={handleResetToInHouse}
                className="text-xs font-bold text-rose-600 hover:text-rose-800 transition"
              >
                Reset to Default Banner
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            <div className="md:col-span-8 space-y-1.5">
              <h3 className="text-base font-black text-slate-900">
                {activeSponsor.businessName}
              </h3>
              <p className="text-xs font-bold text-amber-900">
                {activeSponsor.tagline}
              </p>
              {activeSponsor.description && (
                <p className="text-xs text-slate-600 leading-relaxed">
                  {activeSponsor.description}
                </p>
              )}

              <div className="pt-1 flex flex-wrap items-center gap-3 text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <WhatsAppIcon className="h-3.5 w-3.5" />
                  <span>+{activeSponsor.whatsappNumber}</span>
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>Expires: {new Date(activeSponsor.endDate).toLocaleDateString()}</span>
                </span>
              </div>
            </div>

            {/* Live Stats */}
            <div className="md:col-span-4 grid grid-cols-2 gap-2 text-center">
              <div className="rounded-2xl border border-slate-200/80 bg-white p-3 shadow-2xs">
                <div className="text-xs text-slate-500 font-bold flex items-center justify-center gap-1">
                  <Eye className="h-3.5 w-3.5 text-blue-600" />
                  <span>Views</span>
                </div>
                <div className="text-xl font-black text-slate-900 mt-1">
                  {stats.impressions || activeSponsor.impressions || 0}
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200/80 bg-white p-3 shadow-2xs">
                <div className="text-xs text-slate-500 font-bold flex items-center justify-center gap-1">
                  <MousePointerClick className="h-3.5 w-3.5 text-emerald-600" />
                  <span>Leads</span>
                </div>
                <div className="text-xl font-black text-emerald-600 mt-1">
                  {stats.clicks || activeSponsor.clicks || 0}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Incoming Sponsor Applications */}
        <div className="rounded-3xl border border-slate-200/90 bg-white p-5 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <h3 className="text-sm font-black text-slate-900">
                Incoming Applications ({applications.length})
              </h3>
              <p className="text-[11px] text-slate-500">
                Review payment UTRs and activate banners with 1-click
              </p>
            </div>
          </div>

          {applications.length === 0 ? (
            <div className="py-10 text-center space-y-2 text-slate-400">
              <Clock className="mx-auto h-8 w-8 text-slate-300" />
              <p className="text-xs">No pending sponsor applications yet.</p>
              <p className="text-[11px] text-slate-400">
                When a business books from `/sponsor`, it will appear here.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {applications.map((app) => (
                <div
                  key={app.id}
                  className={`rounded-2xl border p-4 space-y-3 transition ${
                    app.status === 'active'
                      ? 'border-emerald-200 bg-emerald-50/40'
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
                              : 'bg-amber-100 text-amber-800'
                          }`}
                        >
                          {app.status}
                        </span>
                      </div>
                      <span className="text-[11px] text-slate-500">
                        Plan: <strong>{app.planName || '30 Days'}</strong> (₹{app.paymentAmount}) • UTR:{' '}
                        <strong className="font-mono text-slate-900">{app.paymentUtr}</strong>
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {app.status !== 'active' && (
                        <button
                          onClick={() => handleApprove(app.id)}
                          className="rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white px-3.5 py-1.5 text-xs font-black shadow-2xs transition active:scale-95"
                        >
                          Approve & Go Live
                        </button>
                      )}
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
                        {app.applicantName} ({app.applicantPhone})
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
                  className="rounded-full p-1 text-slate-400 hover:bg-slate-100 transition"
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
                    className="rounded-xl border border-slate-200 px-4 py-2 font-bold text-slate-700 hover:bg-slate-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-2 shadow-xs"
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
