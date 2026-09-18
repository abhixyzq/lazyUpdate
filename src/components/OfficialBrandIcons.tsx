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

// 3. Official Authentic WhatsApp Icon (Official green speech bubble with crisp white handset)
export const WhatsAppIcon: React.FC<{ className?: string }> = ({
  className = 'h-5 w-5 shrink-0',
}) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* WhatsApp Vibrant Green Speech Bubble */}
    <path
      fill="#25D366"
      d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z"
    />
    {/* Crisp Pure White Telephone Handset */}
    <path
      fill="#FFFFFF"
      d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35z"
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

// 5. Official Android Brand Icon (Green Robot Mascot Glyph)
export const AndroidIcon: React.FC<{ className?: string }> = ({ className = 'h-5 w-5 shrink-0' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fill="#3DDC84"
      d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.551 0 .9996.4482.9996.9993 0 .5511-.4486.9997-.9996.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9997.4482.9997.9993 0 .5511-.4486.9997-.9997.9997m11.4045-6.02l1.996-3.4572a.416.416 0 0 0-.1521-.5676.416.416 0 0 0-.5676.1521l-2.0223 3.503C15.5902 8.4116 13.8533 8.082 12 8.082s-3.5902.3296-5.1355.87l-2.0223-3.503a.416.416 0 0 0-.5676-.1521.416.416 0 0 0-.1521.5676l1.996 3.4572C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6889-7.5743-6.1185-9.4396"
    />
  </svg>
);

// 6. Official YouTube Brand Icon
export const YouTubeIcon: React.FC<{ className?: string }> = ({ className = 'h-5 w-5 shrink-0' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fill="#FF0000"
      d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"
    />
    <path fill="#FFFFFF" d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);
