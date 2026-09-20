'use client';

import { supabase } from '@/lib/supabase';

export type AdTargetPage = 'all' | 'home' | 'syllabus' | 'notices' | 'extras';

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
  targetPage?: AdTargetPage;
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

export interface PlanPriceTier {
  starter_7d: number;
  growth_30d: number;
  semester_90d: number;
}

export type SponsorPlacementPricing = Record<AdTargetPage, PlanPriceTier>;

export const DEFAULT_PLACEMENT_PRICING: SponsorPlacementPricing = {
  home: { starter_7d: 699, growth_30d: 1999, semester_90d: 4999 },
  syllabus: { starter_7d: 499, growth_30d: 1499, semester_90d: 3499 },
  notices: { starter_7d: 399, growth_30d: 1199, semester_90d: 2999 },
  extras: { starter_7d: 299, growth_30d: 899, semester_90d: 2199 },
  all: { starter_7d: 999, growth_30d: 2999, semester_90d: 7499 },
};

const STORAGE_KEY_ACTIVE = 'lazy_pu_active_sponsor_v1';
const STORAGE_KEY_APPLICATIONS = 'lazy_pu_sponsor_applications_v1';
const STORAGE_KEY_STATS = 'lazy_pu_sponsor_stats_v1';
const STORAGE_KEY_PRICING = 'lazy_pu_sponsor_pricing_v1';

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
  targetPage: 'all',
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
    targetPage: (row.target_page as AdTargetPage) || 'all',
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
 * Retrieves dynamic sponsor pricing from Supabase app_settings.
 * Falls back to localStorage and DEFAULT_PLACEMENT_PRICING.
 */
export async function getSponsorPricingSettings(): Promise<SponsorPlacementPricing> {
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from('app_settings')
        .select('value')
        .eq('key', 'sponsor_pricing')
        .maybeSingle();

      if (data?.value && !error) {
        return {
          ...DEFAULT_PLACEMENT_PRICING,
          ...data.value,
        };
      }
    } catch (err) {
      console.warn('[sponsorService] Failed to load sponsor pricing from Supabase:', err);
    }
  }

  if (typeof window !== 'undefined') {
    try {
      const cached = localStorage.getItem(STORAGE_KEY_PRICING);
      if (cached) return JSON.parse(cached);
    } catch {}
  }

  return DEFAULT_PLACEMENT_PRICING;
}

/**
 * Admin action: Save updated sponsor pricing matrix to Supabase app_settings.
 */
export async function updateSponsorPricingSettings(pricing: SponsorPlacementPricing): Promise<boolean> {
  if (supabase) {
    try {
      const { error } = await supabase.from('app_settings').upsert({
        key: 'sponsor_pricing',
        value: pricing,
        updated_at: new Date().toISOString(),
      });
      if (error) {
        console.error('[sponsorService] Error updating sponsor pricing in Supabase:', error);
        return false;
      }
    } catch (err) {
      console.error('[sponsorService] Exception updating sponsor pricing:', err);
      return false;
    }
  }

  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(STORAGE_KEY_PRICING, JSON.stringify(pricing));
    } catch {}
  }

  return true;
}

/**
 * Retrieves the currently active sponsor banner for a specific page/placement.
 * First checks for an active ad targeted specifically to `placement`.
 * If not found, falls back to a universal active ad (`target_page = 'all'`).
 * If none found, returns the default In-House partner promotion.
 */
export async function getActiveSponsor(placement: string = 'all'): Promise<Sponsor> {
  const normPlacement = (placement || 'all').toLowerCase();

  // 1. If Supabase is connected, query active sponsors from DB
  if (supabase) {
    try {
      const now = new Date().toISOString();
      const { data, error } = await supabase
        .from('sponsors')
        .select('*')
        .eq('status', 'active')
        .gte('end_date', now)
        .in('target_page', [normPlacement, 'all'])
        .order('created_at', { ascending: false });

      if (data && data.length > 0 && !error) {
        // First look for exact placement match
        const exactMatch = data.find((d: any) => (d.target_page || 'all') === normPlacement);
        if (exactMatch) {
          return mapRowToSponsor(exactMatch);
        }
        // Next look for universal 'all' ad
        const universalMatch = data.find((d: any) => !d.target_page || d.target_page === 'all');
        if (universalMatch) {
          return mapRowToSponsor(universalMatch);
        }
        return mapRowToSponsor(data[0]);
      }
    } catch (err) {
      console.warn('[sponsorService] Supabase getActiveSponsor error:', err);
    }
  }

  // 2. Check local storage override (placement-specific or global)
  if (typeof window !== 'undefined') {
    try {
      const stored =
        localStorage.getItem(`${STORAGE_KEY_ACTIVE}_${normPlacement}`) ||
        localStorage.getItem(STORAGE_KEY_ACTIVE);
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

  return { ...DEFAULT_INHOUSE_SPONSOR, targetPage: normPlacement as AdTargetPage };
}

/**
 * Retrieve current active live ads grouped by each placement for Admin.
 */
export async function getAllActiveSponsorsByPlacementAsync(): Promise<Record<AdTargetPage, Sponsor | null>> {
  const result: Record<AdTargetPage, Sponsor | null> = {
    home: null,
    syllabus: null,
    notices: null,
    extras: null,
    all: null,
  };

  if (supabase) {
    try {
      const now = new Date().toISOString();
      const { data, error } = await supabase
        .from('sponsors')
        .select('*')
        .eq('status', 'active')
        .gte('end_date', now)
        .order('created_at', { ascending: false });

      if (data && !error) {
        for (const row of data) {
          const s = mapRowToSponsor(row);
          const page = (s.targetPage || 'all') as AdTargetPage;
          if (result[page] === null) {
            result[page] = s;
          }
        }
      }
    } catch (e) {
      console.warn('[sponsorService] getAllActiveSponsorsByPlacementAsync error:', e);
    }
  }

  return result;
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
  targetPage?: AdTargetPage;
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
    targetPage: data.targetPage || 'all',
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
        target_page: application.targetPage || 'all',
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
 * Admin action: Approve an application and make it the live active sponsor for its targeted placement.
 */
export async function approveAndActivateSponsor(sponsorId: string, targetPageOverride?: AdTargetPage): Promise<boolean> {
  const now = new Date();
  let durationDays = 30;

  // 1. Update Supabase if available
  if (supabase) {
    try {
      // First get application
      const { data } = await supabase.from('sponsors').select('*').eq('id', sponsorId).single();
      if (data) {
        durationDays = data.duration_days || (data.plan_id === 'starter_7d' ? 7 : data.plan_id === 'semester_90d' ? 90 : 30);
        const targetPage = targetPageOverride || (data.target_page as AdTargetPage) || 'all';
        const endDate = new Date(now.getTime() + durationDays * 24 * 60 * 60 * 1000).toISOString();

        // Deactivate old active sponsors on THIS specific placement only
        await supabase
          .from('sponsors')
          .update({ status: 'expired' })
          .eq('status', 'active')
          .eq('target_page', targetPage);

        // Activate target sponsor
        await supabase.from('sponsors').update({
          status: 'active',
          target_page: targetPage,
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
        if (targetPageOverride) {
          target.targetPage = targetPageOverride;
        }
        const targetPage = target.targetPage || 'all';
        const days = target.planId === 'starter_7d' ? 7 : target.planId === 'semester_90d' ? 90 : 30;
        target.startDate = now.toISOString();
        target.endDate = new Date(now.getTime() + days * 24 * 60 * 60 * 1000).toISOString();

        localStorage.setItem(STORAGE_KEY_APPLICATIONS, JSON.stringify(list));
        localStorage.setItem(`${STORAGE_KEY_ACTIVE}_${targetPage}`, JSON.stringify(target));
        if (targetPage === 'all') {
          localStorage.setItem(STORAGE_KEY_ACTIVE, JSON.stringify(target));
        }
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
 * If placement is provided, deactivates only that placement's active ad.
 */
export async function resetToInHouseSponsor(placement?: string): Promise<boolean> {
  const normPlacement = placement ? placement.toLowerCase() : null;

  if (supabase) {
    try {
      let query = supabase.from('sponsors').update({ status: 'expired' }).eq('status', 'active');
      if (normPlacement) {
        query = query.eq('target_page', normPlacement);
      }
      await query;
    } catch (e) {
      console.warn('[sponsorService] Supabase reset error:', e);
    }
  }

  if (typeof window !== 'undefined') {
    try {
      if (normPlacement) {
        localStorage.removeItem(`${STORAGE_KEY_ACTIVE}_${normPlacement}`);
      }
      if (!normPlacement || normPlacement === 'all') {
        localStorage.setItem(STORAGE_KEY_ACTIVE, JSON.stringify(DEFAULT_INHOUSE_SPONSOR));
      }
      return true;
    } catch {
      return false;
    }
  }
  return true;
}

/**
 * Admin action: Manually create or update an active sponsor directly for a specific placement.
 */
export async function setCustomActiveSponsor(sponsor: Sponsor): Promise<boolean> {
  const targetPage = sponsor.targetPage || 'all';

  if (supabase) {
    try {
      // Deactivate only ads on this specific placement
      await supabase
        .from('sponsors')
        .update({ status: 'expired' })
        .eq('status', 'active')
        .eq('target_page', targetPage);

      const { error } = await supabase.from('sponsors').upsert({
        id: sponsor.id,
        business_name: sponsor.businessName,
        tagline: sponsor.tagline,
        description: sponsor.description || '',
        badge: sponsor.badge || 'CAMPUS PARTNER',
        poster_image: sponsor.posterImage || '',
        target_url: sponsor.targetUrl || '',
        whatsapp_number: sponsor.whatsappNumber,
        whatsapp_message: sponsor.whatsappMessage || '',
        phone: sponsor.phone || sponsor.whatsappNumber,
        category: sponsor.category || 'Coaching & Services',
        start_date: sponsor.startDate,
        end_date: sponsor.endDate,
        status: 'active',
        target_page: targetPage,
        is_in_house: false,
        payment_utr: sponsor.paymentUtr || 'ADMIN_DIRECT',
        payment_amount: sponsor.paymentAmount || 0,
        payment_method: sponsor.paymentMethod || 'offline',
        plan_id: sponsor.planId || 'custom',
        plan_name: sponsor.planName || 'Admin Direct Placement',
        impressions: sponsor.impressions || 0,
        clicks: sponsor.clicks || 0,
      });

      if (error) {
        console.error('[sponsorService] Supabase setCustomActiveSponsor error:', error);
        alert('Supabase Error: ' + error.message);
        return false;
      }
    } catch (e: any) {
      console.error('[sponsorService] Supabase setCustomActiveSponsor exception:', e);
      alert('Supabase Network Error: ' + (e?.message || 'Unknown error'));
      return false;
    }
  }

  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(`${STORAGE_KEY_ACTIVE}_${targetPage}`, JSON.stringify(sponsor));
      if (targetPage === 'all') {
        localStorage.setItem(STORAGE_KEY_ACTIVE, JSON.stringify(sponsor));
      }
      return true;
    } catch {
      return false;
    }
  }
  return true;
}

/**
 * Admin action: Delete a sponsor application
 */
export async function deleteSponsorApplication(id: string): Promise<boolean> {
  if (supabase) {
    try {
      await supabase.from('sponsors').delete().eq('id', id);
    } catch {
      // ignore
    }
  }

  if (typeof window !== 'undefined') {
    try {
      const raw = localStorage.getItem(STORAGE_KEY_APPLICATIONS) || '[]';
      const list: Sponsor[] = JSON.parse(raw);
      const filtered = list.filter((s) => s.id !== id);
      localStorage.setItem(STORAGE_KEY_APPLICATIONS, JSON.stringify(filtered));

      // If this was the active sponsor, reset to default
      const activeRaw = localStorage.getItem(STORAGE_KEY_ACTIVE);
      if (activeRaw) {
        const active: Sponsor = JSON.parse(activeRaw);
        if (active.id === id) {
          localStorage.removeItem(STORAGE_KEY_ACTIVE);
        }
      }
      return true;
    } catch {
      return false;
    }
  }
  return true;
}

