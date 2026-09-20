'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  ExternalLink,
  Phone,
  CheckCircle2,
  ChevronRight,
  BadgeCheck,
  Megaphone,
} from 'lucide-react';
import { WhatsAppIcon, InstagramIcon } from './OfficialBrandIcons';
import {
  Sponsor,
  getActiveSponsor,
  recordImpression,
  recordClick,
} from '@/services/sponsorService';

interface CampusPartnerBannerProps {
  className?: string;
  sourcePage?: string;
}

export const CampusPartnerBanner: React.FC<CampusPartnerBannerProps> = ({
  className = '',
  sourcePage = 'general',
}) => {
  const [sponsor, setSponsor] = useState<Sponsor | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    getActiveSponsor(sourcePage)
      .then((data) => {
        if (isMounted) {
          setSponsor(data);
          setIsLoading(false);
          if (data && data.id) {
            recordImpression(data.id);
          }
        }
      })
      .catch(() => {
        if (isMounted) setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [sourcePage]);

  if (isLoading || !sponsor) {
    return null;
  }

  const handleWhatsAppClick = () => {
    if (sponsor.id) {
      recordClick(sponsor.id);
    }
    if (sponsor.isInHouse || !sponsor.whatsappNumber) {
      window.open('https://ig.me/m/_lazypu', '_blank');
      return;
    }
    const cleanNumber = sponsor.whatsappNumber.replace(/[^0-9]/g, '');
    const defaultMsg = `Hi! I saw your ${sponsor.businessName} banner on Lazy PU App and would like to get more information.`;
    const msg = encodeURIComponent(sponsor.whatsappMessage || defaultMsg);
    window.open(`https://api.whatsapp.com/send?phone=${cleanNumber}&text=${msg}`, '_blank');
  };

  const handleCallClick = () => {
    if (sponsor.id) {
      recordClick(sponsor.id);
    }
    const cleanPhone = (sponsor.phone || sponsor.whatsappNumber || '').replace(/[^0-9+]/g, '');
    if (cleanPhone) {
      window.open(`tel:${cleanPhone}`, '_self');
    }
  };

  // 1. In-House Promotional Banner (Promotes /sponsor to businesses)
  if (sponsor.isInHouse) {
    return (
      <div className={`mx-auto max-w-xl px-3 my-4 ${className}`}>
        <div className="relative overflow-hidden rounded-3xl border border-blue-200/90 bg-gradient-to-br from-blue-50/90 via-indigo-50/50 to-amber-50/60 p-4 shadow-sm">
          {/* Subtle decorative glow */}
          <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-300/20 blur-2xl" />

          <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-blue-100/80">
            <div className="flex items-center gap-1.5">
              <span className="inline-flex items-center gap-1 rounded-md bg-blue-600 px-2 py-0.5 text-[10px] font-black tracking-wider text-white uppercase shadow-2xs">
                <Sparkles className="h-3 w-3" />
                CAMPUS PARTNER
              </span>
              <span className="text-[11px] font-bold text-blue-950">
                Patna University
              </span>
            </div>

            <Link
              href="/sponsor"
              className="text-[11px] font-extrabold text-blue-600 hover:text-blue-800 flex items-center gap-0.5 transition"
            >
              <span>Promote Here</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="pt-3">
            <h4 className="text-sm font-black text-slate-900 leading-snug">
              {sponsor.tagline || 'Are you a Coaching, PG, or Book Store in Patna?'}
            </h4>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              Reach 5,000+ active Patna University students across all colleges. Get genuine student leads directly on WhatsApp!
            </p>

            <div className="mt-3.5 flex flex-col sm:flex-row gap-2">
              <Link
                href="/sponsor"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-extrabold py-2.5 px-4 text-xs shadow-xs transition active:scale-98"
              >
                <Megaphone className="h-4 w-4" />
                <span>Book Sponsorship / Ad Space</span>
              </Link>

              <a
                href="https://ig.me/m/_lazypu"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  if (sponsor.id) recordClick(sponsor.id);
                }}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-pink-200 bg-gradient-to-r from-pink-50/90 via-rose-50/70 to-amber-50/70 hover:from-pink-100 hover:to-amber-100 text-slate-800 font-bold py-2.5 px-4 text-xs transition active:scale-98 shadow-2xs"
              >
                <InstagramIcon className="h-4 w-4 shrink-0" />
                <span className="bg-gradient-to-r from-pink-600 via-rose-600 to-amber-600 bg-clip-text text-transparent font-extrabold">
                  Chat on Instagram (@_lazypu)
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 2. Paid / Custom Partner Sponsor Banner
  return (
    <div className={`mx-auto max-w-xl px-3 my-4 ${className}`}>
      <div className="relative overflow-hidden rounded-3xl border border-amber-200/90 bg-gradient-to-br from-amber-50/80 via-white to-orange-50/50 p-4 shadow-sm">
        {/* Subtle decorative glow */}
        <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-amber-300/20 blur-xl" />

        {/* Top Header info */}
        <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-amber-200/60">
          <div className="flex items-center gap-1.5">
            <span className="inline-flex items-center gap-1 rounded-md bg-amber-500 px-2 py-0.5 text-[10px] font-black tracking-wider text-white uppercase shadow-2xs">
              <BadgeCheck className="h-3 w-3" />
              {sponsor.badge || 'CAMPUS PARTNER'}
            </span>
            <span className="text-[11px] font-bold text-slate-700 truncate max-w-[180px]">
              {sponsor.category || 'Featured Partner'}
            </span>
          </div>

          <Link
            href="/sponsor"
            className="text-[10px] font-bold text-slate-400 hover:text-slate-600 transition"
          >
            Ad Info
          </Link>
        </div>

        {/* Poster Image (if available) */}
        {sponsor.posterImage ? (
          <div className="mt-3 relative w-full overflow-hidden rounded-2xl border border-amber-100 bg-white">
            <img
              src={sponsor.posterImage}
              alt={sponsor.businessName}
              className="w-full h-auto max-h-48 object-cover"
              loading="lazy"
            />
          </div>
        ) : null}

        {/* Sponsor Content */}
        <div className="pt-2.5">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h4 className="text-sm font-black text-slate-900 flex items-center gap-1.5">
                <span>{sponsor.businessName}</span>
                <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 shrink-0" />
              </h4>
              <p className="text-xs font-bold text-amber-900 mt-0.5">
                {sponsor.tagline}
              </p>
            </div>
          </div>

          {sponsor.description ? (
            <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
              {sponsor.description}
            </p>
          ) : null}

          {/* Action Buttons */}
          <div className="mt-3.5 flex flex-col sm:flex-row gap-2">
            {/* Primary Action: Direct WhatsApp Lead */}
            <button
              type="button"
              onClick={handleWhatsAppClick}
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 hover:bg-emerald-700 active:scale-98 text-white font-extrabold py-2.5 px-4 text-xs shadow-xs transition"
            >
              <WhatsAppIcon className="h-4 w-4 shrink-0" />
              <span>Connect on WhatsApp</span>
            </button>

            {/* Secondary Action: Call or Website */}
            {sponsor.phone ? (
              <button
                type="button"
                onClick={handleCallClick}
                className="inline-flex items-center justify-center gap-1.5 rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 font-bold py-2.5 px-4 text-xs transition active:scale-98"
              >
                <Phone className="h-3.5 w-3.5 text-slate-600" />
                <span>Call Now</span>
              </button>
            ) : sponsor.targetUrl ? (
              <a
                href={sponsor.targetUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 font-bold py-2.5 px-4 text-xs transition active:scale-98"
              >
                <span>Visit Details</span>
                <ExternalLink className="h-3.5 w-3.5 text-slate-600" />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};
