'use client';

import React from 'react';
import { UniversalNavbar } from './UniversalNavbar';

interface SubpageHeaderProps {
  title: string;
  badge?: string;
  subtitle?: string;
}

export const SubpageHeader: React.FC<SubpageHeaderProps> = ({ title }) => {
  return <UniversalNavbar pageTitle={title} />;
};
