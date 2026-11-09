'use client';

import React, { useEffect, useRef, useState } from 'react';

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
  const [isAdLoaded, setIsAdLoaded] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Helper to evaluate if the Google Ad has successfully loaded and filled
    const checkAdFilled = (): boolean => {
      const el = adRef.current;
      if (!el) return false;

      const adStatus = el.getAttribute('data-ad-status');
      if (adStatus === 'filled') {
        return true;
      }
      if (adStatus === 'unfilled') {
        return false;
      }

      // Check if an iframe with visible content exists
      const iframe = el.querySelector('iframe');
      if (
        iframe &&
        iframe.clientHeight > 10 &&
        iframe.style.display !== 'none' &&
        iframe.style.visibility !== 'hidden'
      ) {
        return true;
      }

      return false;
    };

    // Load Google AdSense / AdMob script if not present
    const existingScript = document.querySelector(
      `script[src*="pagead2.googlesyndication.com"]`
    );

    if (!existingScript) {
      const script = document.createElement('script');
      script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adClient}`;
      script.async = true;
      script.crossOrigin = 'anonymous';
      script.onerror = () => {
        setIsAdLoaded(false);
      };
      document.head.appendChild(script);
    }

    // Push the ad once mounted
    try {
      if (!isPushed.current && adRef.current) {
        // @ts-expect-error Google adsbygoogle window global
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        isPushed.current = true;
      }
    } catch (e) {
      console.warn('[AdMobBanner] Ad push skipped or blocked by client:', e);
      setIsAdLoaded(false);
    }

    // Observe changes on the <ins> tag for data-ad-status
    let observer: MutationObserver | null = null;
    if (adRef.current) {
      observer = new MutationObserver(() => {
        const isFilled = checkAdFilled();
        setIsAdLoaded(isFilled);
      });

      observer.observe(adRef.current, {
        attributes: true,
        attributeFilter: ['data-ad-status', 'data-adsbygoogle-status'],
        childList: true,
        subtree: true,
      });
    }

    // Periodic checks to catch ads loaded asynchronously without mutation trigger
    const interval = setInterval(() => {
      const isFilled = checkAdFilled();
      if (isFilled) {
        setIsAdLoaded(true);
        clearInterval(interval);
      } else if (adRef.current?.getAttribute('data-ad-status') === 'unfilled') {
        setIsAdLoaded(false);
        clearInterval(interval);
      }
    }, 400);

    // Stop checking after 6 seconds to save CPU cycles
    const timeout = setTimeout(() => {
      clearInterval(interval);
      if (!checkAdFilled()) {
        setIsAdLoaded(false);
      }
    }, 6000);

    return () => {
      if (observer) observer.disconnect();
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [adClient, adSlot]);

  if (isFixed) {
    return (
      <aside
        aria-label="Advertisement Banner"
        className={`transition-all duration-300 ${
          isAdLoaded
            ? `fixed bottom-0 inset-x-0 z-30 w-full h-[62px] max-h-[62px] min-h-[62px] bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-[0_-4px_20px_rgba(10,37,88,0.06)] px-2 flex flex-col items-center justify-center overflow-hidden pointer-events-auto ${className}`
            : 'fixed -bottom-[9999px] left-0 z-[-1] opacity-0 pointer-events-none h-0 max-h-0 overflow-hidden'
        }`}
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
      className={`transition-all duration-300 ${
        isAdLoaded
          ? `w-full flex flex-col items-center justify-center my-2 ${className}`
          : 'hidden h-0 opacity-0 pointer-events-none overflow-hidden'
      }`}
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
