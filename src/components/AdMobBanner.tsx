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
        className={`fixed bottom-0 inset-x-0 z-30 w-full h-[62px] max-h-[62px] min-h-[62px] bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-[0_-4px_20px_rgba(10,37,88,0.06)] px-2 flex flex-col items-center justify-center overflow-hidden pointer-events-auto ${className}`}
      >
        <div className="w-full max-w-[468px] h-[54px] max-h-[54px] flex flex-col items-center justify-center overflow-hidden">
          <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-0.5 select-none">
            Advertisement
          </span>
          <div className="w-full h-[50px] max-h-[50px] min-h-[50px] flex items-center justify-center overflow-hidden">
            <ins
              ref={adRef}
              className="adsbygoogle"
              style={{
                display: 'inline-block',
                width: '320px',
                maxWidth: '100%',
                height: '50px',
                maxHeight: '50px',
              }}
              data-ad-client={adClient}
              data-ad-slot={adSlot}
              data-ad-format="horizontal"
              data-full-width-responsive="false"
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
      <div className="w-full max-w-[340px] sm:max-w-[468px] h-[64px] max-h-[64px] rounded-2xl bg-white border border-slate-200/80 shadow-[0_2px_10px_rgba(10,37,88,0.04)] p-1 flex flex-col items-center justify-center overflow-hidden">
        <span className="text-[8px] font-semibold text-slate-400 uppercase tracking-widest mb-0.5 select-none">
          Advertisement
        </span>
        <div className="w-full h-[50px] max-h-[50px] min-h-[50px] flex items-center justify-center overflow-hidden">
          <ins
            ref={adRef}
            className="adsbygoogle"
            style={{
              display: 'inline-block',
              width: '320px',
              maxWidth: '100%',
              height: '50px',
              maxHeight: '50px',
            }}
            data-ad-client={adClient}
            data-ad-slot={adSlot}
            data-ad-format="horizontal"
            data-full-width-responsive="false"
          />
        </div>
      </div>
    </div>
  );
};
