'use client';

import React from 'react';

// 1. Official Authentic Google Play Store Icon (4 Google brand color triangles)
export const GooglePlayIcon: React.FC<{ className?: string }> = ({ className = 'h-5 w-5 shrink-0' }) => (
  <svg viewBox="0 0 512 512" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Blue Left Base */}
    <path
      fill="#4285F4"
      d="M48.7 15.5C40.6 24 36 37.1 36 53.6v404.8c0 16.5 4.6 29.6 12.7 38.1l2.1 2.1 226.7-226.7v-5.4L50.8 13.4l-2.1 2.1z"
    />
    {/* Yellow Right Arrow Tip */}
    <path
      fill="#FBBC04"
      d="M353.4 328.7l-75.9-75.9v-5.4l75.9-75.9 1.7 1 89.9 51.1c25.7 14.6 25.7 38.5 0 53.1l-89.9 51.1-1.7 1z"
    />
    {/* Red Bottom Corner */}
    <path
      fill="#EA4335"
      d="M277.5 247.4L50.8 474.1c8.4 8.9 22.3 9.9 38.1.9l264.5-150.3-75.9-77.3z"
    />
    {/* Green Top Corner */}
    <path
      fill="#34A853"
      d="M277.5 252.8l75.9-77.3L88.9 25.2c-15.8-9-29.7-8-38.1.9l226.7 226.7z"
    />
  </svg>
);

// 3. Official Authentic WhatsApp Icon (Vibrant green circle with official telephone speech bubble)
export const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'h-5 w-5 shrink-0' }) => (
  <svg viewBox="0 0 48 48" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="24" fill="#25D366" />
    <path
      fill="#FFFFFF"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 24c0 2.4.7 4.7 1.9 6.7L12 36l5.5-1.8c1.9 1.1 4.1 1.8 6.5 1.8 6.6 0 12-5.4 12-12s-5.4-12-12-12-12 5.4-12 12zm7.6-3.8c-.3-.7-.6-.7-.9-.7h-.8c-.3 0-.7.1-1 .5-.4.4-1.4 1.4-1.4 3.4s1.5 4 1.7 4.2c.2.3 2.8 4.4 7 6.1 3.5 1.4 4.2 1 5 .9.7-.1 2.3-.9 2.6-1.8.3-.9.3-1.7.2-1.8-.1-.2-.3-.3-.7-.5s-2.3-1.1-2.7-1.3c-.4-.1-.6-.2-.9.2-.3.4-1.1 1.3-1.3 1.6-.3.2-.5.3-.9.1s-1.8-.7-3.4-2.1c-1.3-1.1-2.1-2.5-2.4-3-.3-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.3-.4.4-.6.1-.2.1-.4 0-.6s-.6-1.8-.9-2.5z"
    />
  </svg>
);

// 4. Official Authentic Instagram Icon (Radial/Linear brand gradient with camera glyph)
export const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'h-5 w-5 shrink-0' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="igGradient" x1="2" y1="22" x2="22" y2="2" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#f09433" />
        <stop offset="25%" stopColor="#e6683c" />
        <stop offset="50%" stopColor="#dc2743" />
        <stop offset="75%" stopColor="#cc2366" />
        <stop offset="100%" stopColor="#bc1888" />
      </linearGradient>
    </defs>
    <rect x="2" y="2" width="20" height="20" rx="5.5" fill="url(#igGradient)" />
    <rect x="6.5" y="6.5" width="11" height="11" rx="3" stroke="#FFFFFF" strokeWidth="1.8" />
    <circle cx="12" cy="12" r="2.8" stroke="#FFFFFF" strokeWidth="1.8" />
    <circle cx="15.5" cy="8.5" r="0.8" fill="#FFFFFF" />
  </svg>
);
