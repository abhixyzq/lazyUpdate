'use client';

import React from 'react';
import { AdMobBanner } from './AdMobBanner';

interface BottomNavProps {
  onOpenDrawer?: () => void;
  className?: string;
}

/**
 * Bottom navigation replaced by a docked bottom AdMob Banner
 */
export const BottomNav: React.FC<BottomNavProps> = ({ className = '' }) => {
  return <AdMobBanner isFixed className={className} />;
};

export const BottomAdBanner = BottomNav;
export default BottomNav;
