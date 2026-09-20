/**
 * AdMob service - Decommissioned in favor of direct in-page Campus Partner Sponsorships.
 * Functions remain as safe stubs for zero breakage.
 */

export const PRODUCTION_BANNER_AD_ID = '';
export const TEST_BANNER_AD_ID = '';

export async function initAdMob(): Promise<boolean> {
  return false;
}

export async function showFooterBanner(): Promise<void> {
  // Safe no-op: AdMob disabled in favor of Campus Partner Sponsorships
}

export async function hideFooterBanner(): Promise<void> {
  // Safe no-op
}

export async function resumeFooterBanner(): Promise<void> {
  // Safe no-op
}
