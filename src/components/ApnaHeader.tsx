'use client';

import React from 'react';
import { UniversalNavbar } from './UniversalNavbar';

interface ApnaHeaderProps {
  onOpenMenu: () => void;
  title?: string;
}

export const ApnaHeader: React.FC<ApnaHeaderProps> = ({
  onOpenMenu,
  title = 'Lazy PU',
}) => {
  return <UniversalNavbar pageTitle={title} onOpenMenu={onOpenMenu} />;
};
