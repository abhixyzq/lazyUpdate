'use client';

import { supabase } from '@/lib/supabase';

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
  paymentMethod?: 'razorpay' | 'upi_qr' | 'offline';
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
  description: 'Reach 5,000+ active Patna University students across all constituent colleges. High visibility & direct student leads!',
  badge: 'CAMPUS PARTNER',
  posterImage: '',
  targetUrl: '/sponsor',
  whatsappNumber: '',
  whatsappMessage: '',
  phone: '',
  category: 'Coaching & Services',
  startDate: '2026-01-01',
  endDate: '2030-12-31',
  status: 'active',
  isInHouse: true,
  impressions: 0,
  clicks: 0,
  createdAt: '2026-01-01T00:00:00.000Z',
};

// Helper: map Supabase row to Sponsor interface
function mapRowToSponsor(row: any): Sponsor {
  return {
    id: row.id,
    businessName: row.business_name || '',
    tagline: row.tagline || '',
    description: row.description || '',
    badge: row.badge || 'CAMPUS PARTNER',
    posterImage: row.poster_image || '',
    targetUrl: row.target_url || '',
    whatsappNumber: row.whatsapp_number || '',
    whatsappMessage: row.whatsapp_message || '',
    phone: row.phone || '',
    category: row.category || '',
    startDate: row.start_date || new Date().toISOString(),
    endDate: row.end_date || new Date().toISOString(),
    status: row.status || 'pending',
    planId: row.plan_id || '',
    planName: row.plan_name || '',
    paymentUtr: row.payment_utr || '',
    paymentAmount: row.payment_amount ? Number(row.payment_amount) : 0,
    paymentMethod: row.payment_method || 'razorpay',
    applicantName: row.applicant_name || '',
    applicantEmail: row.applicant_email || '',
    applicantPhone: row.applicant_phone || '',
    isInHouse: Boolean(row.is_in_house),
    impressions: row.impressions ? Number(row.impressions) : 0,
    clicks: row.clicks ? Number(row.clicks) : 0,
    createdAt: row.created_at || new Date().toISOString(),
  };
}

/**
 * Retrieves the currently active sponsor banner.
 * First checks Supabase, then local storage, then static fallback.
 */
export async function getActiveSponsor(): Promise<Sponsor> {
  // 1. If Supabase is connected, query active sponsor from DB
  if (supabase) {
    try {
      const now = new Date().toISOString();
      const { data, error } = await supabase
        .from('sponsors')
        .select('*')
        .eq('status', 'active')
        .gte('end_date', now)
        .order('created_at', { ascending: false })
        .limit(1)
        .maybeSingle();

      if (data && !error) {
        return mapRowToSponsor(data);
      }
    } catch (err) {
      console.warn('[sponsorService] Supabase getActiveSponsor error:', err);
    }
  }

  // 2. Check local storage override
  if (typeof window !== 'undefined') {
    try {
      const stored = localStorage.getItem(STORAGE_KEY_ACTIVE);
      if (stored) {
        const parsed: Sponsor = JSON.parse(stored);
        if (parsed && parsed.status === 'active') {
          const now = new Date();
          const end = new Date(parsed.endDate);
          if (end >= now || parsed.isInHouse) {
            return parsed;
          } else {
            parsed.status = 'expired';
            localStorage.setItem(STORAGE_KEY_ACTIVE, JSON.stringify(parsed));
          }
        }
      }
    } catch {
      // ignore
    }

    // 3. Fallback to public/sponsors.json
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
      // ignore
    }
  }

  return DEFAULT_INHOUSE_SPONSOR;
}

/**
 * Record an impression for a given sponsor banner.
 */
export function recordImpression(sponsorId: string): void {
  if (typeof window === 'undefined' || !sponsorId) return;

  // 1. Update Supabase if available
  const client = supabase;
  if (client) {
    try {
      client.rpc('increment_sponsor_impression', { target_id: sponsorId }).then(({ error }) => {
        if (error && client) {
          // fallback direct update if function not created
          client.from('sponsors').select('impressions').eq('id', sponsorId).single().then(({ data }) => {
            if (data && client) {
              client.from('sponsors').update({ impressions: (data.impressions || 0) + 1 }).eq('id', sponsorId);
            }
          });
        }
      });
    } catch {
      // ignore
    }
  }

  // 2. Cache in localStorage
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

  // 1. Update Supabase if available
  const client = supabase;
  if (client) {
    try {
      client.rpc('increment_sponsor_click', { target_id: sponsorId }).then(({ error }) => {
        if (error && client) {
          client.from('sponsors').select('clicks').eq('id', sponsorId).single().then(({ data }) => {
            if (data && client) {
              client.from('sponsors').update({ clicks: (data.clicks || 0) + 1 }).eq('id', sponsorId);
            }
          });
        }
      });
    } catch {
      // ignore
    }
  }

  // 2. Cache in localStorage
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
 * Submit a new Sponsor Application.
 * Stores in Supabase database & caches locally.
 */
export async function submitSponsorApplication(data: {
  businessName: string;
  tagline: string;
  description?: string;
  whatsappNumber: string;
  phone?: string;
  category?: string;
  posterImage?: string;
  targetUrl?: string;
  planId: string;
  planName: string;
  durationDays: number;
  paymentAmount: number;
  paymentUtr: string;
  paymentMethod?: 'razorpay' | 'upi_qr' | 'offline';
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
    paymentMethod: data.paymentMethod || (data.paymentUtr.startsWith('pay_') ? 'razorpay' : 'upi_qr'),
    applicantName: data.applicantName.trim(),
    applicantEmail: data.applicantEmail.trim(),
    applicantPhone: data.applicantPhone.trim(),
    isInHouse: false,
    impressions: 0,
    clicks: 0,
    createdAt: now.toISOString(),
  };

  // 1. Save to Supabase
  if (supabase) {
    try {
      const { error } = await supabase.from('sponsors').insert({
        id: application.id,
        business_name: application.businessName,
        tagline: application.tagline,
        description: application.description,
        badge: application.badge,
        poster_image: application.posterImage,
        target_url: application.targetUrl,
        whatsapp_number: application.whatsappNumber,
        whatsapp_message: application.whatsappMessage,
        phone: application.phone,
        category: application.category,
        start_date: application.startDate,
        end_date: application.endDate,
        status: 'pending',
        plan_id: application.planId,
        plan_name: application.planName,
        payment_utr: application.paymentUtr,
        payment_amount: application.paymentAmount,
        payment_method: application.paymentMethod,
        applicant_name: application.applicantName,
        applicant_email: application.applicantEmail,
        applicant_phone: application.applicantPhone,
        is_in_house: false,
        impressions: 0,
        clicks: 0,
        created_at: application.createdAt,
      });

      if (error) {
        console.warn('[sponsorService] Supabase insert warning:', error);
      }
    } catch (e) {
      console.error('[sponsorService] Supabase insert error:', e);
    }
  }

  // 2. Cache in localStorage
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
export async function getAllSponsorApplicationsAsync(): Promise<Sponsor[]> {
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from('sponsors')
        .select('*')
        .order('created_at', { ascending: false });

      if (data && !error) {
        return data.map(mapRowToSponsor);
      }
    } catch (e) {
      console.warn('[sponsorService] Supabase getAllSponsorApplications error:', e);
    }
  }

  return getAllSponsorApplications();
}

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
export async function approveAndActivateSponsor(sponsorId: string): Promise<boolean> {
  const now = new Date();
  let durationDays = 30;

  // 1. Update Supabase if available
  if (supabase) {
    try {
      // First get application
      const { data } = await supabase.from('sponsors').select('*').eq('id', sponsorId).single();
      if (data) {
        durationDays = data.duration_days || (data.plan_id === 'starter_7d' ? 7 : data.plan_id === 'semester_90d' ? 90 : 30);
        const endDate = new Date(now.getTime() + durationDays * 24 * 60 * 60 * 1000).toISOString();

        // Deactivate old active sponsors first
        await supabase.from('sponsors').update({ status: 'expired' }).eq('status', 'active');

        // Activate target sponsor
        await supabase.from('sponsors').update({
          status: 'active',
          start_date: now.toISOString(),
          end_date: endDate,
        }).eq('id', sponsorId);
      }
    } catch (e) {
      console.warn('[sponsorService] Supabase approval error:', e);
    }
  }

  // 2. Update localStorage
  if (typeof window !== 'undefined') {
    try {
      const raw = localStorage.getItem(STORAGE_KEY_APPLICATIONS) || '[]';
      const list: Sponsor[] = JSON.parse(raw);
      const target = list.find((s) => s.id === sponsorId);
      if (target) {
        target.status = 'active';
        const days = target.planId === 'starter_7d' ? 7 : target.planId === 'semester_90d' ? 90 : 30;
        target.startDate = now.toISOString();
        target.endDate = new Date(now.getTime() + days * 24 * 60 * 60 * 1000).toISOString();

        localStorage.setItem(STORAGE_KEY_APPLICATIONS, JSON.stringify(list));
        localStorage.setItem(STORAGE_KEY_ACTIVE, JSON.stringify(target));
      }
      return true;
    } catch (e) {
      console.error('[sponsorService] Local approval error:', e);
      return false;
    }
  }

  return true;
}

/**
 * Admin action: Deactivate custom sponsor and restore default in-house partner banner.
 */
export async function resetToInHouseSponsor(): Promise<boolean> {
  if (supabase) {
    try {
      await supabase.from('sponsors').update({ status: 'expired' }).eq('status', 'active');
    } catch (e) {
      console.warn('[sponsorService] Supabase reset error:', e);
    }
  }

  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(STORAGE_KEY_ACTIVE, JSON.stringify(DEFAULT_INHOUSE_SPONSOR));
      return true;
    } catch {
      return false;
    }
  }
  return true;
}

/**
 * Admin action: Manually create or update an active sponsor directly.
 */
export async function setCustomActiveSponsor(sponsor: Sponsor): Promise<boolean> {
  if (supabase) {
    try {
      await supabase.from('sponsors').update({ status: 'expired' }).eq('status', 'active');
      await supabase.from('sponsors').upsert({
        id: sponsor.id,
        business_name: sponsor.businessName,
        tagline: sponsor.tagline,
        description: sponsor.description,
        badge: sponsor.badge,
        poster_image: sponsor.posterImage,
        target_url: sponsor.targetUrl,
        whatsapp_number: sponsor.whatsappNumber,
        whatsapp_message: sponsor.whatsappMessage,
        phone: sponsor.phone,
        category: sponsor.category,
        start_date: sponsor.startDate,
        end_date: sponsor.endDate,
        status: 'active',
        is_in_house: false,
        impressions: sponsor.impressions,
        clicks: sponsor.clicks,
      });
    } catch (e) {
      console.warn('[sponsorService] Supabase setCustomActiveSponsor error:', e);
    }
  }

  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(STORAGE_KEY_ACTIVE, JSON.stringify(sponsor));
      return true;
    } catch {
      return false;
    }
  }
  return true;
}
