'use client';

export interface Sponsor {
  id: string;
  businessName: string;
  tagline: string;
  description?: string;
  badge: string;
  posterImage?: string;
  targetUrl?: string;
  whatsappNumber: string;
  whatsappMessage?: string;
  phone?: string;
  category?: string;
  startDate: string;
  endDate: string;
  status: 'active' | 'pending' | 'expired' | 'rejected';
  planId?: string;
  planName?: string;
  paymentUtr?: string;
  paymentAmount?: number;
  applicantName?: string;
  applicantEmail?: string;
  applicantPhone?: string;
  isInHouse?: boolean;
  impressions: number;
  clicks: number;
  createdAt: string;
}

export interface SponsorPackage {
  id: string;
  name: string;
  durationDays: number;
  price: number;
  originalPrice: number;
  features: string[];
  recommended?: boolean;
}

const STORAGE_KEY_ACTIVE = 'lazy_pu_active_sponsor_v1';
const STORAGE_KEY_APPLICATIONS = 'lazy_pu_sponsor_applications_v1';
const STORAGE_KEY_STATS = 'lazy_pu_sponsor_stats_v1';

export const DEFAULT_INHOUSE_SPONSOR: Sponsor = {
  id: 'lazy_pu_inhouse_1',
  businessName: 'Patna University Partner Hub',
  tagline: 'Are you a Coaching, PG, or Book Store in Patna?',
  description: 'Reach 5,000+ active Patna University students across all constituent colleges. High visibility & direct WhatsApp leads!',
  badge: 'CAMPUS PARTNER',
  posterImage: '',
  targetUrl: '/sponsor',
  whatsappNumber: '918709322301',
  whatsappMessage: 'Hello! I want to sponsor / advertise on Lazy PU App for Patna University students.',
  phone: '+918709322301',
  category: 'Coaching & Services',
  startDate: '2026-01-01',
  endDate: '2030-12-31',
  status: 'active',
  isInHouse: true,
  impressions: 0,
  clicks: 0,
  createdAt: '2026-01-01T00:00:00.000Z',
};

/**
 * Retrieves the currently active sponsor banner.
 * Validates expiration dates automatically.
 */
export async function getActiveSponsor(): Promise<Sponsor> {
  if (typeof window === 'undefined') {
    return DEFAULT_INHOUSE_SPONSOR;
  }

  try {
    // 1. Check local storage override first (set by admin)
    const stored = localStorage.getItem(STORAGE_KEY_ACTIVE);
    if (stored) {
      const parsed: Sponsor = JSON.parse(stored);
      if (parsed && parsed.status === 'active') {
        const now = new Date();
        const end = new Date(parsed.endDate);
        if (end >= now || parsed.isInHouse) {
          return parsed;
        } else {
          // Expired, mark as expired
          parsed.status = 'expired';
          localStorage.setItem(STORAGE_KEY_ACTIVE, JSON.stringify(parsed));
        }
      }
    }

    // 2. Fetch from public/sponsors.json
    try {
      const res = await fetch('/sponsors.json', { cache: 'no-store' });
      if (res.ok) {
        const data = await res.json();
        if (data && data.activeSponsor) {
          const now = new Date();
          const end = new Date(data.activeSponsor.endDate);
          if (end >= now || data.activeSponsor.isInHouse) {
            return data.activeSponsor;
          }
        }
      }
    } catch {
      // ignore fetch error
    }
  } catch (err) {
    console.warn('[sponsorService] Error fetching active sponsor:', err);
  }

  return DEFAULT_INHOUSE_SPONSOR;
}

/**
 * Record an impression for a given sponsor banner.
 */
export function recordImpression(sponsorId: string): void {
  if (typeof window === 'undefined' || !sponsorId) return;
  try {
    const raw = localStorage.getItem(STORAGE_KEY_STATS) || '{}';
    const stats = JSON.parse(raw);
    if (!stats[sponsorId]) {
      stats[sponsorId] = { impressions: 0, clicks: 0 };
    }
    stats[sponsorId].impressions = (stats[sponsorId].impressions || 0) + 1;
    localStorage.setItem(STORAGE_KEY_STATS, JSON.stringify(stats));
  } catch {
    // ignore
  }
}

/**
 * Record a click / lead generated for a sponsor banner.
 */
export function recordClick(sponsorId: string): void {
  if (typeof window === 'undefined' || !sponsorId) return;
  try {
    const raw = localStorage.getItem(STORAGE_KEY_STATS) || '{}';
    const stats = JSON.parse(raw);
    if (!stats[sponsorId]) {
      stats[sponsorId] = { impressions: 0, clicks: 0 };
    }
    stats[sponsorId].clicks = (stats[sponsorId].clicks || 0) + 1;
    localStorage.setItem(STORAGE_KEY_STATS, JSON.stringify(stats));
  } catch {
    // ignore
  }
}

/**
 * Retrieve stats (impressions & clicks) for a given sponsor.
 */
export function getSponsorStats(sponsorId: string): { impressions: number; clicks: number } {
  if (typeof window === 'undefined' || !sponsorId) {
    return { impressions: 0, clicks: 0 };
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY_STATS) || '{}';
    const stats = JSON.parse(raw);
    return stats[sponsorId] || { impressions: 0, clicks: 0 };
  } catch {
    return { impressions: 0, clicks: 0 };
  }
}

/**
 * Submit a new sponsor application from the landing page.
 */
export async function submitSponsorApplication(data: {
  businessName: string;
  tagline: string;
  description?: string;
  whatsappNumber: string;
  phone?: string;
  category: string;
  posterImage?: string;
  targetUrl?: string;
  planId: string;
  planName: string;
  durationDays: number;
  paymentAmount: number;
  paymentUtr: string;
  applicantName: string;
  applicantEmail: string;
  applicantPhone: string;
}): Promise<{ success: boolean; id: string }> {
  const newId = `sp_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`;
  const now = new Date();
  const endDate = new Date(now.getTime() + data.durationDays * 24 * 60 * 60 * 1000);

  const application: Sponsor = {
    id: newId,
    businessName: data.businessName.trim(),
    tagline: data.tagline.trim(),
    description: data.description?.trim() || '',
    badge: 'CAMPUS PARTNER',
    posterImage: data.posterImage?.trim() || '',
    targetUrl: data.targetUrl?.trim() || '',
    whatsappNumber: data.whatsappNumber.replace(/[^0-9]/g, ''),
    whatsappMessage: `Hi! I saw your ${data.businessName} banner on Lazy PU App and want details.`,
    phone: data.phone?.trim() || data.applicantPhone.trim(),
    category: data.category,
    startDate: now.toISOString(),
    endDate: endDate.toISOString(),
    status: 'pending',
    planId: data.planId,
    planName: data.planName,
    paymentUtr: data.paymentUtr.trim(),
    paymentAmount: data.paymentAmount,
    applicantName: data.applicantName.trim(),
    applicantEmail: data.applicantEmail.trim(),
    applicantPhone: data.applicantPhone.trim(),
    isInHouse: false,
    impressions: 0,
    clicks: 0,
    createdAt: now.toISOString(),
  };

  if (typeof window !== 'undefined') {
    try {
      const raw = localStorage.getItem(STORAGE_KEY_APPLICATIONS) || '[]';
      const list: Sponsor[] = JSON.parse(raw);
      list.unshift(application);
      localStorage.setItem(STORAGE_KEY_APPLICATIONS, JSON.stringify(list));
    } catch (e) {
      console.error('[sponsorService] Local storage save error:', e);
    }
  }

  return { success: true, id: newId };
}

/**
 * Retrieve all sponsor applications for the Admin Panel.
 */
export function getAllSponsorApplications(): Sponsor[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY_APPLICATIONS) || '[]';
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

/**
 * Admin action: Approve an application and make it the live active sponsor.
 */
export function approveAndActivateSponsor(sponsorId: string): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const raw = localStorage.getItem(STORAGE_KEY_APPLICATIONS) || '[]';
    const list: Sponsor[] = JSON.parse(raw);
    const target = list.find((s) => s.id === sponsorId);
    if (!target) return false;

    target.status = 'active';
    const now = new Date();
    // Default 30 days if not set
    const days = target.planId === 'starter_7d' ? 7 : target.planId === 'semester_90d' ? 90 : 30;
    target.startDate = now.toISOString();
    target.endDate = new Date(now.getTime() + days * 24 * 60 * 60 * 1000).toISOString();

    // Update applications list
    localStorage.setItem(STORAGE_KEY_APPLICATIONS, JSON.stringify(list));

    // Set as active sponsor
    localStorage.setItem(STORAGE_KEY_ACTIVE, JSON.stringify(target));
    return true;
  } catch (e) {
    console.error('[sponsorService] Approval failed:', e);
    return false;
  }
}

/**
 * Admin action: Deactivate custom sponsor and restore default in-house partner banner.
 */
export function resetToInHouseSponsor(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    localStorage.setItem(STORAGE_KEY_ACTIVE, JSON.stringify(DEFAULT_INHOUSE_SPONSOR));
    return true;
  } catch {
    return false;
  }
}

/**
 * Admin action: Manually create or update an active sponsor directly.
 */
export function setCustomActiveSponsor(sponsor: Sponsor): boolean {
  if (typeof window === 'undefined') return false;
  try {
    localStorage.setItem(STORAGE_KEY_ACTIVE, JSON.stringify(sponsor));
    return true;
  } catch {
    return false;
  }
}
