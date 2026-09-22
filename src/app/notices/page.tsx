'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { SubpageHeader } from '@/components/SubpageHeader';
import { CampusPartnerBanner } from '@/components/CampusPartnerBanner';
import { 
  Search, 
  RotateCw, 
  FileText, 
  Image as ImageIcon, 
  ExternalLink, 
  Share2, 
  Clock, 
  Check, 
  ArrowLeft,
  Sparkles,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { LiveNoticeItem, FALLBACK_NOTICES } from '@/data/liveNoticesFallback';

const CACHE_KEY = 'lazy_pu_notices_cache';
const CACHE_TIME_KEY = 'lazy_pu_notices_cache_time';
const SIX_MONTHS_MS = 180 * 24 * 60 * 60 * 1000;

export default function NoticesPage() {
  // Pre-populate with verified fallback notices so it NEVER shows an empty screen
  const [notices, setNotices] = useState<LiveNoticeItem[]>(FALLBACK_NOTICES);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lastUpdated, setLastUpdated] = useState<string>('Recent');
  const [sourceType, setSourceType] = useState<string>('live_samarth');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const isNoticeExpired = (item: LiveNoticeItem) => {
    try {
      const dateStr = item.rawDate || item.date;
      const cleaned = dateStr.replace(/\s+(AM|PM)$/i, '');
      const parsed = new Date(cleaned);
      if (!isNaN(parsed.getTime())) {
        return (Date.now() - parsed.getTime()) > SIX_MONTHS_MS;
      }
    } catch {
      // Keep if unknown
    }
    return false;
  };

  // Determine correct API URL for Web vs Native Android/iOS App
  const getNoticeApiUrl = () => {
    if (typeof window !== 'undefined') {
      const isCapacitor = !!(window as any).Capacitor?.isNativePlatform?.() ||
                          window.location.protocol === 'capacitor:' ||
                          window.location.protocol === 'file:';
      const isLocalhostNoPort = window.location.hostname === 'localhost' && !window.location.port;

      // In Capacitor native app, relative '/api/notices' fails because there's no local Node server.
      // Must use absolute production domain: https://lazyupdate.tech/api/notices
      if (isCapacitor || isLocalhostNoPort) {
        return 'https://lazyupdate.tech/api/notices';
      }
    }
    return '/api/notices';
  };

  // Fetch notices from API with resilient multi-tier fallback
  const fetchNotices = async (isManualRefresh = false) => {
    if (isManualRefresh) setRefreshing(true);
    let data: any = null;

    try {
      // Tier 1: Try resolved endpoint (either relative for web, or lazyupdate.tech for app)
      const primaryUrl = getNoticeApiUrl();
      const res = await fetch(primaryUrl);
      if (res.ok) {
        data = await res.json();
      }
    } catch (err) {
      console.warn('Primary notice fetch failed, trying direct remote endpoint:', err);
    }

    // Tier 2: If primary failed or returned error, try direct production URL
    if (!data || !data.success) {
      try {
        const fallbackRes = await fetch('https://lazyupdate.tech/api/notices');
        if (fallbackRes.ok) {
          data = await fallbackRes.json();
        }
      } catch (err2) {
        console.warn('Direct remote notice fetch failed:', err2);
      }
    }

    // Process result
    if (data && data.success && Array.isArray(data.notices) && data.notices.length > 0) {
      const activeOnly = data.notices.filter((item: LiveNoticeItem) => !isNoticeExpired(item));
      if (activeOnly.length > 0) {
        setNotices(activeOnly);
        setSourceType(data.source || 'live_samarth');
        const updateTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        setLastUpdated(updateTime);

        // Save to offline storage
        try {
          localStorage.setItem(CACHE_KEY, JSON.stringify(activeOnly));
          localStorage.setItem(CACHE_TIME_KEY, updateTime);
        } catch {
          // ignore localstorage quota issue
        }

        if (isManualRefresh) {
          showToast('Notices refreshed from official portal');
        }
      }
    } else {
      // Tier 3: Network unavailable — use localStorage or keep pre-bundled fallback
      if (isManualRefresh) {
        showToast('Offline: Showing saved official notices');
      }
    }

    setLoading(false);
    setRefreshing(false);
  };

  // Initial load: fast render from cache (pruning expired ones), then background sync
  useEffect(() => {
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      const cachedTime = localStorage.getItem(CACHE_TIME_KEY);
      if (cached) {
        const parsed = JSON.parse(cached);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const activeOnly = parsed.filter((item: LiveNoticeItem) => !isNoticeExpired(item));
          if (activeOnly.length > 0) {
            setNotices(activeOnly);
            if (cachedTime) setLastUpdated(cachedTime);
          }
        }
      }
    } catch {
      // ignore
    }

    fetchNotices();
  }, []);

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: notices.length };
    notices.forEach((n) => {
      counts[n.category] = (counts[n.category] || 0) + 1;
    });
    return counts;
  }, [notices]);

  const categories = ['All', 'Admissions', 'Merit List', 'Spot Round', 'Counselling', 'Exams', 'Circulars'];

  // Filtered notices
  const filteredNotices = useMemo(() => {
    return notices.filter((item) => {
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.date.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [notices, selectedCategory, searchQuery]);

  // Handle Share
  const handleShare = async (item: LiveNoticeItem) => {
    const shareText = `📢 *Patna University Official Notice*\n\n*${item.title}*\n📅 Date: ${item.date}\n🔗 Download Document: ${item.url}\n\nVia Lazy PU App`;
    
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: item.title,
          text: shareText,
          url: item.url,
        });
        return;
      } catch {
        // User cancelled or share unsupported, fallback to clipboard
      }
    }

    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(shareText);
        showToast('Notice link copied to clipboard!');
      } catch {
        showToast('Unable to copy link');
      }
    }
  };

  // Badge styling per category
  const getCategoryBadgeClass = (category: string) => {
    switch (category) {
      case 'Admissions':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Merit List':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'Spot Round':
        return 'bg-emerald-50 text-emerald-800 border-emerald-200';
      case 'Counselling':
        return 'bg-amber-50 text-amber-800 border-amber-200';
      case 'Exams':
        return 'bg-rose-50 text-rose-700 border-rose-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-900 pb-28 sm:pb-16">
      <SubpageHeader title="PU Official Notices" />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-16 left-1/2 -translate-x-1/2 z-50 rounded-full bg-slate-900/95 text-white px-4 py-2 text-xs font-semibold shadow-lg backdrop-blur-sm animate-fade-in flex items-center gap-2">
          <Check className="h-3.5 w-3.5 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      <main className="mx-auto max-w-xl px-3 pt-3 space-y-3.5">
        
        {/* Status Strip & Live Sync Banner */}
        <div className="flex items-center justify-between gap-2 rounded-2xl border border-slate-200 bg-white px-3.5 py-2.5 shadow-xs">
          <div className="flex items-center gap-2 min-w-0">
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <div className="truncate text-xs font-medium text-slate-600">
              <span className="font-bold text-slate-800">PU Samarth eGov</span>
              {lastUpdated && (
                <span className="text-slate-400 text-[11px] ml-1.5 hidden sm:inline">
                  • Synced at {lastUpdated}
                </span>
              )}
            </div>
          </div>

          <button
            onClick={() => fetchNotices(true)}
            disabled={refreshing}
            className="flex items-center gap-1 text-[11px] font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 px-2.5 py-1 rounded-lg transition active:scale-95 disabled:opacity-50"
            title="Refresh from official university portal"
          >
            <RotateCw className={`h-3 w-3 ${refreshing ? 'animate-spin text-blue-600' : ''}`} />
            <span>{refreshing ? 'Syncing...' : 'Sync'}</span>
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by keyword, admission, merit, exam..."
            className="w-full rounded-2xl border border-slate-200 bg-white py-2.5 pl-10 pr-9 text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 shadow-xs"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs font-bold"
            >
              ✕
            </button>
          )}
        </div>

        {/* Category Filter Pills (Horizontal Scroll) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs">
          {categories.map((cat) => {
            const count = categoryCounts[cat] || 0;
            const isSelected = selectedCategory === cat;
            if (cat !== 'All' && count === 0) return null; // hide empty categories

            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`whitespace-nowrap px-3 py-1.5 rounded-full font-bold text-xs transition active:scale-95 shrink-0 border ${
                  isSelected
                    ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                    : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <span>{cat}</span>
                <span className={`ml-1.5 text-[10px] font-black rounded-full px-1.5 py-0.2 ${
                  isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Notice List Cards */}
        {loading && notices.length === 0 ? (
          <div className="space-y-3 pt-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="rounded-2xl border border-slate-200 bg-white p-4 space-y-3 animate-pulse">
                <div className="flex justify-between items-center">
                  <div className="h-5 w-20 bg-slate-200 rounded-full" />
                  <div className="h-4 w-24 bg-slate-200 rounded" />
                </div>
                <div className="h-4 w-3/4 bg-slate-200 rounded" />
                <div className="h-4 w-1/2 bg-slate-100 rounded" />
                <div className="flex gap-2 pt-1">
                  <div className="h-8 w-28 bg-slate-200 rounded-xl" />
                  <div className="h-8 w-16 bg-slate-100 rounded-xl" />
                </div>
              </div>
            ))}
          </div>
        ) : filteredNotices.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-8 text-center space-y-3">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-2xl">
              🔍
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-slate-800">No notices match your search</h3>
              <p className="text-xs text-slate-500 max-w-xs mx-auto">
                No matching circular found for "{searchQuery}". Try searching with another keyword or clear filters.
              </p>
            </div>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="inline-flex items-center gap-1 rounded-xl bg-slate-900 px-4 py-2 text-xs font-bold text-white hover:bg-slate-800 transition"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredNotices.map((item, idx) => (
              <article
                key={item.id || idx}
                className="group relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-4 shadow-xs transition hover:border-slate-300 hover:shadow-sm"
              >
                {/* Top Row: Category + IsNew + Date */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-black border uppercase tracking-wider ${getCategoryBadgeClass(
                        item.category
                      )}`}
                    >
                      {item.category}
                    </span>

                    {item.isNew && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-rose-50 border border-rose-200 px-2 py-0.5 text-[10px] font-black text-rose-700 animate-pulse">
                        <Sparkles className="h-2.5 w-2.5" />
                        NEW
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-400 shrink-0">
                    <Clock className="h-3 w-3" />
                    <span>{item.date}</span>
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug tracking-tight mb-3 group-hover:text-blue-900 transition">
                  {item.title}
                </h2>

                {/* Bottom Row: Document Type + Actions */}
                <div className="flex items-center justify-between pt-2 border-t border-slate-100 gap-2">
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-medium truncate">
                    {item.fileType === 'pdf' ? (
                      <span className="flex items-center gap-1 text-rose-600 font-bold bg-rose-50 border border-rose-100 rounded-md px-1.5 py-0.5 text-[10px]">
                        <FileText className="h-3 w-3" />
                        PDF
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-blue-600 font-bold bg-blue-50 border border-blue-100 rounded-md px-1.5 py-0.5 text-[10px]">
                        <ImageIcon className="h-3 w-3" />
                        IMAGE
                      </span>
                    )}
                    <span className="text-slate-400 text-[10px] truncate hidden sm:inline">
                      Official AWS S3 Document
                    </span>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {/* Share Button */}
                    <button
                      onClick={() => handleShare(item)}
                      aria-label="Share notice"
                      className="flex h-8 w-8 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition active:scale-95"
                      title="Share Notice"
                    >
                      <Share2 className="h-3.5 w-3.5" />
                    </button>

                    {/* View Document CTA */}
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 rounded-xl bg-slate-900 px-3.5 py-1.5 text-xs font-bold text-white shadow-xs hover:bg-blue-600 active:scale-95 transition"
                    >
                      <span>Read Notice</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Official Source & Verification Footer Box */}
        <div className="rounded-2xl border border-slate-200 bg-white/80 p-3.5 text-slate-500 text-[11px] space-y-1.5 shadow-xs">
          <div className="flex items-center gap-1.5 font-bold text-slate-700 text-xs">
            <ShieldCheck className="h-4 w-4 text-emerald-600" />
            <span>Official University Source Verified</span>
          </div>
          <p className="leading-relaxed">
            All notices displayed here are fetched directly from Patna University's Samarth eGov Portal (Ministry of Education, Gov of India) and signed documents are delivered from Amazon AWS S3. Circulars older than 6 months are automatically purged to keep the feed fresh and fast.
          </p>
          <div className="pt-1 flex items-center justify-between text-[10px] font-bold">
            <a
              href="https://pupadm.samarth.edu.in/index.php/notifications/index"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline flex items-center gap-1"
            >
              <span>Visit Official Portal</span>
              <ExternalLink className="h-2.5 w-2.5" />
            </a>

            <Link href="/" className="text-slate-500 hover:text-slate-800 flex items-center gap-1">
              <ArrowLeft className="h-2.5 w-2.5" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>

        {/* Campus Partner Sponsor Banner */}
        <div className="pt-1">
          <CampusPartnerBanner sourcePage="notices" />
        </div>

      </main>
    </div>
  );
}
