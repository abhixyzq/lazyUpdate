'use client';

import React, { useEffect, useRef } from 'react';

interface AdMobBannerProps {
  adSlot?: string;
  adClient?: string;
  className?: string;
  isFixed?: boolean;
}

export const AdMobBanner: React.FC<AdMobBannerProps> = ({
  adSlot = process.env.NEXT_PUBLIC_ADMOB_BANNER_ID || '6540085043',
  adClient = process.env.NEXT_PUBLIC_ADMOB_CLIENT_ID || 'ca-pub-8589300527808447',
  className = '',
  isFixed = false,
}) => {
  const adRef = useRef<HTMLModElement | null>(null);
  const isPushed = useRef(false);

  useEffect(() => {
    // Only attempt in browser environment
    if (typeof window === 'undefined') return;

    // Load Google AdSense / AdMob script if not already present
    const existingScript = document.querySelector(
      `script[src*="pagead2.googlesyndication.com"]`
    );

    if (!existingScript) {
      const script = document.createElement('script');
      script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adClient}`;
      script.async = true;
      script.crossOrigin = 'anonymous';
      document.head.appendChild(script);
    }

    // Push the ad once the component is mounted
    try {
      if (!isPushed.current && adRef.current) {
        // @ts-expect-error Google adsbygoogle window global
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        isPushed.current = true;
      }
    } catch (e) {
      console.warn('[AdMobBanner] Ad push skipped or blocked by client:', e);
    }
  }, [adClient, adSlot]);

  if (isFixed) {
    return (
      <aside
        aria-label="Advertisement Banner"
        className={`fixed bottom-0 inset-x-0 z-40 w-full bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-[0_-4px_20px_rgba(10,37,88,0.06)] pb-[max(0.35rem,env(safe-area-inset-bottom))] pt-1.5 px-3 flex flex-col items-center justify-center ${className}`}
      >
        <div className="w-full max-w-[360px] sm:max-w-[468px] flex flex-col items-center justify-center">
          <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">
            Advertisement
          </span>
          <div className="w-full flex items-center justify-center min-h-[50px] overflow-hidden">
            <ins
              ref={adRef}
              className="adsbygoogle"
              style={{ display: 'block', width: '100%', minHeight: '50px' }}
              data-ad-client={adClient}
              data-ad-slot={adSlot}
              data-ad-format="horizontal"
              data-full-width-responsive="true"
            />
          </div>
        </div>
      </aside>
    );
  }

  return (
    <div
      className={`w-full flex flex-col items-center justify-center my-2 transition-all ${className}`}
    >
      <div className="w-full max-w-[340px] sm:max-w-[468px] min-h-[52px] sm:min-h-[60px] rounded-2xl bg-white border border-slate-200/80 shadow-[0_2px_10px_rgba(10,37,88,0.04)] p-1 flex flex-col items-center justify-center overflow-hidden">
        <span className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest mb-0.5">
          Advertisement
        </span>
        <div className="w-full flex items-center justify-center overflow-hidden min-h-[50px]">
          <ins
            ref={adRef}
            className="adsbygoogle"
            style={{ display: 'block', width: '100%', minHeight: '50px' }}
            data-ad-client={adClient}
            data-ad-slot={adSlot}
            data-ad-format="horizontal"
            data-full-width-responsive="true"
          />
        </div>
      </div>
    </div>
  );
};
