import { Capacitor } from '@capacitor/core';
import {
  AdMob,
  BannerAdOptions,
  BannerAdSize,
  BannerAdPosition,
  BannerAdPluginEvents,
  AdMobError,
} from '@capacitor-community/admob';

// Official Production Banner Ad Unit ID provided by user
export const PRODUCTION_BANNER_AD_ID = 'ca-app-pub-8589300527808447/6540085043';

// Google's official test sample Banner ID for Android fallback
export const TEST_BANNER_AD_ID = 'ca-app-pub-3940256099942544/6300978111';

let isAdMobInitialized = false;
let isBannerShowing = false;
let isListenersAttached = false;
let hasFallenBackToTest = false;

function setupBannerListeners() {
  if (isListenersAttached || !Capacitor.isNativePlatform()) return;
  isListenersAttached = true;

  try {
    AdMob.addListener(BannerAdPluginEvents.Loaded, () => {
      console.log('[AdMob] Banner loaded and visible.');
      isBannerShowing = true;
    });

    AdMob.addListener(BannerAdPluginEvents.FailedToLoad, async (err: AdMobError) => {
      console.warn('[AdMob] Banner FailedToLoad:', JSON.stringify(err));
      isBannerShowing = false;

      // When live ad has No Fill (e.g. while new ad unit / account is in 24-48h review),
      // automatically fall back to Google Test Banner so developer can verify layout on device
      if (!hasFallenBackToTest) {
        hasFallenBackToTest = true;
        console.log('[AdMob] Falling back to official test banner for layout verification...');
        try {
          const testOptions: BannerAdOptions = {
            adId: TEST_BANNER_AD_ID,
            adSize: BannerAdSize.ADAPTIVE_BANNER,
            position: BannerAdPosition.BOTTOM_CENTER,
            margin: 0,
            isTesting: true,
          };
          await AdMob.showBanner(testOptions);
        } catch (fallbackErr) {
          console.warn('[AdMob] Fallback banner error:', fallbackErr);
        }
      }
    });
  } catch (listenerErr) {
    console.warn('[AdMob] Error attaching listeners:', listenerErr);
  }
}

/**
 * Initializes the Google AdMob SDK on native Android/iOS platform.
 */
export async function initAdMob(): Promise<boolean> {
  if (!Capacitor.isNativePlatform()) {
    return false;
  }

  if (isAdMobInitialized) {
    return true;
  }

  try {
    setupBannerListeners();
    await AdMob.initialize({
      testingDevices: ['EMULATOR'],
      initializeForTesting: false,
    });
    isAdMobInitialized = true;
    return true;
  } catch (err) {
    console.warn('AdMob initialization error or skipped:', err);
    return false;
  }
}

/**
 * Displays an adaptive footer banner ad at the bottom of all pages.
 */
export async function showFooterBanner(): Promise<void> {
  if (!Capacitor.isNativePlatform()) {
    return;
  }

  if (isBannerShowing) {
    return;
  }

  try {
    setupBannerListeners();
    const ready = await initAdMob();
    if (!ready) return;

    // Use environment variable or default to production banner ID
    const adId = process.env.NEXT_PUBLIC_ADMOB_BANNER_ID?.trim() || PRODUCTION_BANNER_AD_ID;

    const options: BannerAdOptions = {
      adId,
      adSize: BannerAdSize.ADAPTIVE_BANNER,
      position: BannerAdPosition.BOTTOM_CENTER,
      margin: 0,
      isTesting: false,
    };

    await AdMob.showBanner(options);
    isBannerShowing = true;
  } catch (err) {
    console.warn('AdMob showFooterBanner error or skipped:', err);
  }
}

/**
 * Hides the footer banner ad (e.g. during modal views or full-screen dialogs).
 */
export async function hideFooterBanner(): Promise<void> {
  if (!Capacitor.isNativePlatform() || !isBannerShowing) {
    return;
  }

  try {
    await AdMob.hideBanner();
    isBannerShowing = false;
  } catch (err) {
    console.warn('AdMob hideFooterBanner error:', err);
  }
}

/**
 * Resumes displaying the footer banner ad.
 */
export async function resumeFooterBanner(): Promise<void> {
  if (!Capacitor.isNativePlatform()) {
    return;
  }

  try {
    await AdMob.resumeBanner();
    isBannerShowing = true;
  } catch {
    await showFooterBanner();
  }
}
