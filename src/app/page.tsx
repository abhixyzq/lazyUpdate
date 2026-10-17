'use client';

import React, { useState } from 'react';
import { LightHeader } from '@/components/LightHeader';
import { SearchInputBar } from '@/components/SearchInputBar';
import { LightHeroBanner } from '@/components/LightHeroBanner';
import { LightNoticeCard } from '@/components/LightNoticeCard';
import { LightAcademicTools } from '@/components/LightAcademicTools';
import { LightCommunityCards } from '@/components/LightCommunityCards';
import { LightStudentPortals } from '@/components/LightStudentPortals';
import { BottomNav } from '@/components/BottomNav';
import { SideDrawer } from '@/components/SideDrawer';
import { SearchModal } from '@/components/SearchModal';
import { ProfileModal } from '@/components/ProfileModal';

export default function HomePage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#f6faf7] text-slate-900 pb-24 overflow-x-hidden">
      {/* Ambient Emerald Glass Glow Orbs */}
      <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-[550px] h-[360px] bg-gradient-to-b from-emerald-200/40 via-teal-100/25 to-transparent blur-3xl rounded-full" />
      <div className="pointer-events-none absolute top-[400px] -right-20 w-72 h-72 bg-emerald-200/25 blur-3xl rounded-full" />
      <div className="pointer-events-none absolute top-[750px] -left-20 w-72 h-72 bg-teal-200/20 blur-3xl rounded-full" />

      {/* 1. Minimal Header */}
      <LightHeader
        onOpenDrawer={() => setIsDrawerOpen(true)}
      />

      {/* 2. Instant Search Input Pill */}
      <SearchInputBar onOpenSearch={() => setIsSearchOpen(true)} />

      {/* 3. Lightweight Hero Banner with Live Now Pill */}
      <LightHeroBanner />

      {/* 4. Latest Notice Notification Strip */}
      <LightNoticeCard />

      {/* 5. Minimal Academic Tools (Clean Line Icons, 2x3 Grid + 3 Quick Pills) */}
      <LightAcademicTools />

      {/* 6. Lightweight Community Channels (WhatsApp & Instagram) */}
      <LightCommunityCards />

      {/* 7. Student Portals (Internships, Scholarships, Anti-Ragging) */}
      <LightStudentPortals />

      {/* 8. Clean Bottom Navigation Bar */}
      <BottomNav onOpenDrawer={() => setIsDrawerOpen(true)} />

      {/* 9. Interactive Modals */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      <ProfileModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
      />

      <SideDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </div>
  );
}
