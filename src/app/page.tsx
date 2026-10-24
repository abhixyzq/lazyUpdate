'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { StudentPortalHero } from '@/components/StudentPortalHero';
import { PortalFeatureGrid } from '@/components/PortalFeatureGrid';
import { PortalMoreLinks } from '@/components/PortalMoreLinks';
import { BottomNav } from '@/components/BottomNav';

// Dynamically loaded overlays for optimal performance
const SideDrawer = dynamic(
  () => import('@/components/SideDrawer').then((mod) => mod.SideDrawer),
  { ssr: false }
);

export default function HomePage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#faf5ea] text-slate-900 pb-24 overflow-x-hidden antialiased selection:bg-[#fde047] selection:text-[#0a2558]">
      {/* 1. Deep Navy Hero Section */}
      <StudentPortalHero onOpenDrawer={() => setIsDrawerOpen(true)} />

      {/* 2. 6 Main Feature Cards (2x3 Grid on Warm Cream Background) */}
      <PortalFeatureGrid />

      {/* 3. More Services & Remaining Pages Links */}
      <PortalMoreLinks />

      {/* 5. Deep Navy Bottom Navigation Bar (5-Tab with Yellow Active Indicator) */}
      <BottomNav onOpenDrawer={() => setIsDrawerOpen(true)} />

      {/* 6. On-Demand Lazy Side Drawer */}
      {isDrawerOpen && (
        <SideDrawer
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
        />
      )}
    </div>
  );
}
