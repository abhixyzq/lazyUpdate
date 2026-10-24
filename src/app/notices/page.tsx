'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { SubpageHeader } from '@/components/SubpageHeader';
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
import { parseSamarthHtml, isOlderThan6Months } from '@/utils/noticeParser';
import { BottomNav } from '@/components/BottomNav';

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

      // In Capacitor native app, relative '/api/notices/' fails because there's no local Node server.
      // Must use absolute production domain www.lazyupdate.tech (avoiding 308 apex redirect)
      if (isCapacitor || isLocalhostNoPort) {
        return 'https://www.lazyupdate.tech/api/notices/';
      }
    }
    return '/api/notices/';
  };

  // Fetch notices with resilient 4-tier fallback:
  // Tier 1: Primary API route (/api/notices/ or https://www.lazyupdate.tech/api/notices/)
  // Tier 2: In Capacitor native app, direct native fetch to Samarth portal (bypasses browser CORS)
  // Tier 3: Static pre-scraped CDN file (/notices.json or https://www.lazyupdate.tech/notices.json)
  // Tier 4: Offline localStorage cache or pre-bundled October 2026 FALLBACK_NOTICES
  const fetchNotices = async (isManualRefresh = false) => {
    if (isManualRefresh) setRefreshing(true);
    let data: any = null;

    // Tier 1: Try resolved API route
    try {
      const primaryUrl = getNoticeApiUrl();
      const res = await fetch(primaryUrl);
      if (res.ok) {
        data = await res.json();
      }
    } catch (err) {
      console.warn('Tier 1 notice fetch failed:', err);
    }

    // Tier 2: In Capacitor Native App, execute direct native scrape (bypasses CORS completely)
    if (!data || !data.success || !Array.isArray(data.notices) || data.notices.length === 0) {
      try {
        const isCap = typeof window !== 'undefined' && Boolean((window as any).Capacitor?.isNativePlatform?.());
        if (isCap) {
          const { CapacitorHttp } = await import('@capacitor/core');
          const nativeRes = await CapacitorHttp.get({
            url: 'https://pupadm.samarth.edu.in/index.php/notifications/index?page=1',
            headers: {
              'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36',
              'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
            }
          });
          if (nativeRes.status === 200 && nativeRes.data) {
            const rawHtml = typeof nativeRes.data === 'string' ? nativeRes.data : JSON.stringify(nativeRes.data);
            const parsed = parseSamarthHtml(rawHtml);
            if (parsed.length > 0) {
              data = {
                success: true,
                source: 'live_samarth_native',
                notices: parsed
              };
            }
          }
        }
      } catch (nativeErr) {
        console.warn('Tier 2 native scrape failed:', nativeErr);
      }
    }

    // Tier 3: Static pre-scraped CDN notices.json (always 200 OK from static hosting)
    if (!data || !data.success || !Array.isArray(data.notices) || data.notices.length === 0) {
      try {
        const cdnUrl = typeof window !== 'undefined' && ((window as any).Capacitor?.isNativePlatform?.() || window.location.protocol === 'file:')
          ? 'https://www.lazyupdate.tech/notices.json'
          : '/notices.json';
        const staticRes = await fetch(cdnUrl);
        if (staticRes.ok) {
          data = await staticRes.json();
        }
      } catch (cdnErr) {
        console.warn('Tier 3 static notices.json fetch failed:', cdnErr);
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
          // ignore quota
        }

        if (isManualRefresh) {
          showToast('Notices refreshed from official portal');
        }
      }
    } else {
      // Tier 4: Offline fallback
      if (isManualRefresh) {
        showToast('Offline: Showing saved official notices');
      }
    }

    setLoading(false);
    setRefreshing(false);
  };

  // Auto-Sync: fast render from cache, immediate background sync, recurring 60s interval, focus & online triggers
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

    // 1. Initial immediate background sync
    fetchNotices(false);

    // 2. Periodic background auto-sync every 60 seconds
    const intervalId = setInterval(() => {
      fetchNotices(false);
    }, 60000);

    // 3. Auto-sync on window focus / tab visibility return
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        fetchNotices(false);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('focus', handleVisibilityChange);

    // 4. Auto-sync when reconnecting to network
    const handleOnline = () => {
      fetchNotices(false);
    };
    window.addEventListener('online', handleOnline);

    return () => {
      clearInterval(intervalId);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('focus', handleVisibilityChange);
      window.removeEventListener('online', handleOnline);
    };
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
        return 'bg-amber-50 text-amber-900 border-amber-200';
      case 'Counselling':
        return 'bg-blue-50 text-blue-900 border-blue-200';
      case 'Exams':
        return 'bg-rose-50 text-rose-700 border-rose-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  return (
    <div className="min-h-screen bg-transparent text-slate-900 pb-28 sm:pb-16">
      <SubpageHeader title="PU Official Notices" />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-16 left-1/2 -translate-x-1/2 z-50 rounded-full bg-[#0a2558] text-white px-4 py-2 text-xs font-semibold shadow-lg backdrop-blur-sm animate-fade-in flex items-center gap-2">
          <Check className="h-3.5 w-3.5 text-[#fde047]" />
          <span>{toastMessage}</span>
        </div>
      )}

      <main className="mx-auto max-w-xl px-3 pt-3 space-y-3.5">
        
        {/* Status Strip & Live Sync Banner with Navy/Yellow theme */}
        <div className="flex items-center justify-between gap-2 rounded-2xl border border-amber-200/80 bg-gradient-to-r from-amber-50/70 via-white/90 to-yellow-50/50 backdrop-blur-md px-3.5 py-2.5 shadow-2xs">
          <div className="flex items-center gap-2 min-w-0">
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
            </span>
            <div className="truncate text-xs font-medium text-slate-700 flex items-center gap-1.5 flex-wrap">
              <span className="font-bold text-[#0a2558]">PU Samarth eGov</span>
              <span className="inline-flex items-center gap-1 rounded-full bg-amber-100/90 text-amber-900 border border-amber-200/60 font-semibold px-2 py-0.5 text-[10px]">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
                Auto-Sync Live
              </span>
              {lastUpdated && (
                <span className="text-slate-500 text-[11px] hidden sm:inline">
                  • Synced at {lastUpdated}
                </span>
              )}
            </div>
          </div>

          <button
            onClick={() => fetchNotices(true)}
            disabled={refreshing}
            className="flex items-center gap-1 text-[11px] font-semibold text-[#0a2558] bg-white border border-amber-200 px-2.5 py-1.5 rounded-xl shadow-2xs hover:bg-amber-50 transition active:scale-95 disabled:opacity-50 cursor-pointer shrink-0"
            title="Refresh from official university portal"
          >
            <RotateCw className={`h-3 w-3 ${refreshing ? 'animate-spin text-amber-600' : ''}`} />
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
            className="w-full rounded-2xl border border-slate-200 bg-white py-2.5 pl-10 pr-9 text-xs font-normal text-slate-900 placeholder:text-slate-400 focus:border-[#0a2558] focus:outline-none focus:ring-1 focus:ring-yellow-300 shadow-2xs"
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
                className={`whitespace-nowrap px-3 py-1.5 rounded-full font-semibold text-xs transition active:scale-95 shrink-0 border ${
                  isSelected
                    ? 'bg-[#0a2558] text-[#fde047] border-[#0a2558] shadow-2xs'
                    : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                }`}
              >
                <span>{cat}</span>
                <span className={`ml-1.5 text-[10px] font-bold rounded-full px-1.5 py-0.2 ${
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
              <h3 className="text-sm font-semibold text-slate-800">No notices match your search</h3>
              <p className="text-xs text-slate-400 max-w-xs mx-auto">
                No matching circular found for "{searchQuery}". Try searching with another keyword or clear filters.
              </p>
            </div>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="inline-flex items-center gap-1 rounded-xl bg-[#0a2558] px-4 py-2 text-xs font-semibold text-white hover:bg-[#071b40] transition"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredNotices.map((item, idx) => (
              <article
                key={item.id || idx}
                className="group relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-4 shadow-2xs transition hover:border-amber-300 hover:shadow-xs"
              >
                {/* Top Row: Category + IsNew + Date */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold border uppercase tracking-wider ${getCategoryBadgeClass(
                        item.category
                      )}`}
                    >
                      {item.category}
                    </span>

                    {item.isNew && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-rose-50 border border-rose-200 px-2 py-0.5 text-[10px] font-semibold text-rose-700 animate-pulse">
                        <Sparkles className="h-2.5 w-2.5" />
                        NEW
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1 text-[11px] font-normal text-slate-400 shrink-0">
                    <Clock className="h-3 w-3" />
                    <span>{item.date}</span>
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-xs sm:text-sm font-semibold text-slate-900 leading-snug tracking-tight mb-3 group-hover:text-[#0a2558] transition">
                  {item.title}
                </h2>

                {/* Bottom Row: Document Type + Actions */}
                <div className="flex items-center justify-between pt-2 border-t border-slate-100 gap-2">
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-normal truncate">
                    {item.fileType === 'pdf' ? (
                      <span className="flex items-center gap-1 text-rose-600 font-semibold bg-rose-50 border border-rose-100 rounded-md px-1.5 py-0.5 text-[10px]">
                        <FileText className="h-3 w-3" />
                        PDF
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-amber-800 font-semibold bg-amber-50 border border-amber-200 rounded-md px-1.5 py-0.5 text-[10px]">
                        <ImageIcon className="h-3 w-3" />
                        IMAGE
                      </span>
                    )}
                    <span className="text-slate-400 text-[10px] truncate hidden sm:inline">
                      Official Document
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
                      <Share2 className="h-3.5 w-3.5 stroke-[1.8]" />
                    </button>

                    {/* View Document CTA */}
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 rounded-xl bg-[#0a2558] px-3.5 py-1.5 text-xs font-semibold text-white shadow-2xs hover:bg-[#071b40] active:scale-95 transition"
                    >
                      <span>Read Notice</span>
                      <ExternalLink className="h-3 w-3 stroke-[2]" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Official Source & Verification Footer Box */}
        <div className="rounded-2xl border border-slate-200 bg-white/80 p-3.5 text-slate-500 text-[11px] space-y-1.5 shadow-2xs">
          <div className="flex items-center gap-1.5 font-semibold text-[#0a2558] text-xs">
            <ShieldCheck className="h-4 w-4 text-blue-600" />
            <span>Official University Source Verified</span>
          </div>
          <p className="leading-relaxed text-slate-400">
            All notices displayed here are fetched directly from Patna University's official Samarth eGov Portal.
          </p>
          <div className="pt-1 flex items-center justify-between text-[10px] font-semibold">
            <a
              href="https://pupadm.samarth.edu.in/index.php/notifications/index"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0a2558] hover:underline flex items-center gap-1"
            >
              <span>Visit Official Portal</span>
              <ExternalLink className="h-2.5 w-2.5" />
            </a>

            <Link href="/" className="text-slate-400 hover:text-slate-700 flex items-center gap-1">
              <ArrowLeft className="h-2.5 w-2.5" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>

      </main>

      {/* Persistent Bottom Nav */}
      <BottomNav />
    </div>
  );
}
