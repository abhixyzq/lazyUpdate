'use client';

import React from 'react';

export const LightHeroBanner: React.FC = () => {
  return (
    <div className="mx-auto max-w-xl px-3 pt-3">
      <div className="relative overflow-hidden rounded-[26px] border border-emerald-200/80 bg-gradient-to-br from-emerald-100/50 via-white/85 to-emerald-50/60 backdrop-blur-md p-5 shadow-[0_4px_20px_-2px_rgba(5,150,105,0.08)]">
        
        {/* Top Eyebrow (No Live Now pill as requested) */}
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-bold tracking-widest text-emerald-800 uppercase">
            PATNA UNIVERSITY
          </span>
          <span className="w-6 h-[1.5px] bg-emerald-300 rounded-full inline-block" />
        </div>

        {/* Content Layout: Left Text, Right Iconic PU Heritage Building (Pure SVG Code) */}
        <div className="relative flex items-center justify-between gap-2 mt-2">
          
          {/* Left: Text Content */}
          <div className="relative z-10 max-w-[60%] sm:max-w-[64%]">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-tight">
              Study Smarter, <br />
              <span className="text-emerald-800 font-extrabold">Stay Updated.</span>
            </h2>

            <p className="mt-2 text-xs sm:text-[13px] text-slate-500 font-normal leading-relaxed">
              Syllabus, PYQs, Notices, Results and more — all in one place.
            </p>
          </div>

          {/* Right: Handcrafted Vector Illustration of Iconic Patna University Building */}
          <div className="relative shrink-0 w-36 sm:w-44 h-28 sm:h-32 flex items-end justify-end pointer-events-none -mr-2 -mb-2">
            <svg
              viewBox="0 0 240 200"
              className="w-full h-full text-emerald-700 drop-shadow-[0_2px_10px_rgba(16,185,129,0.15)]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Emerald Glass Fills */}
                <linearGradient id="puSkyGlow" x1="120" y1="0" x2="120" y2="190" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0.02" />
                </linearGradient>

                <linearGradient id="puFacadeFill" x1="20" y1="100" x2="220" y2="190" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#ecfdf5" stopOpacity="0.75" />
                </linearGradient>

                <linearGradient id="puTowerFill" x1="105" y1="15" x2="135" y2="100" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#d1fae5" stopOpacity="0.8" />
                </linearGradient>
              </defs>

              {/* Soft Ambient Sky Backdrop behind tower */}
              <circle cx="120" cy="70" r="55" fill="url(#puSkyGlow)" />

              {/* 1. Ground Baseline & Steps */}
              <line x1="8" y1="190" x2="232" y2="190" stroke="#059669" strokeWidth="1.8" strokeLinecap="round" />
              <line x1="88" y1="187" x2="152" y2="187" stroke="#059669" strokeWidth="1.2" strokeLinecap="round" />
              <line x1="94" y1="184" x2="146" y2="184" stroke="#059669" strokeWidth="1.2" strokeLinecap="round" />
              <line x1="100" y1="181" x2="140" y2="181" stroke="#059669" strokeWidth="1.2" strokeLinecap="round" />

              {/* 2. Main Wings (Left and Right Building Facade) */}
              <rect x="20" y="105" width="200" height="76" rx="2" fill="url(#puFacadeFill)" stroke="#059669" strokeWidth="1.4" />

              {/* Floor Separation Cornice Line */}
              <line x1="18" y1="144" x2="222" y2="144" stroke="#059669" strokeWidth="1.2" />
              <line x1="20" y1="142" x2="220" y2="142" stroke="#047857" strokeWidth="0.8" strokeOpacity="0.6" />

              {/* Lower Floor Arched Entrances & Windows */}
              {/* Left Wing Ground Arches */}
              <path d="M34,178 V158 A6,6 0 0,1 46,158 V178" fill="#10b981" fillOpacity="0.1" stroke="#059669" strokeWidth="1.2" />
              <path d="M54,178 V158 A6,6 0 0,1 66,158 V178" fill="#10b981" fillOpacity="0.1" stroke="#059669" strokeWidth="1.2" />
              <path d="M74,178 V158 A6,6 0 0,1 86,158 V178" fill="#10b981" fillOpacity="0.1" stroke="#059669" strokeWidth="1.2" />

              {/* Central Grand Entrance Arch */}
              <path d="M112,181 V154 A8,8 0 0,1 128,154 V181 Z" fill="#047857" fillOpacity="0.25" stroke="#047857" strokeWidth="1.4" />
              <path d="M115,181 V158 A5,5 0 0,1 125,158 V181 Z" fill="#047857" fillOpacity="0.35" />

              {/* Right Wing Ground Arches */}
              <path d="M154,178 V158 A6,6 0 0,1 166,158 V178" fill="#10b981" fillOpacity="0.1" stroke="#059669" strokeWidth="1.2" />
              <path d="M174,178 V158 A6,6 0 0,1 186,158 V178" fill="#10b981" fillOpacity="0.1" stroke="#059669" strokeWidth="1.2" />
              <path d="M194,178 V158 A6,6 0 0,1 206,158 V178" fill="#10b981" fillOpacity="0.1" stroke="#059669" strokeWidth="1.2" />

              {/* Upper Floor Arched Windows */}
              {/* Left Wing Upper Windows */}
              <path d="M35,138 V122 A5,5 0 0,1 45,122 V138 Z" fill="#ffffff" stroke="#059669" strokeWidth="1.1" />
              <circle cx="40" cy="122" r="1.5" fill="#059669" />
              <path d="M55,138 V122 A5,5 0 0,1 65,122 V138 Z" fill="#ffffff" stroke="#059669" strokeWidth="1.1" />
              <circle cx="60" cy="122" r="1.5" fill="#059669" />
              <path d="M75,138 V122 A5,5 0 0,1 85,122 V138 Z" fill="#ffffff" stroke="#059669" strokeWidth="1.1" />
              <circle cx="80" cy="122" r="1.5" fill="#059669" />

              {/* Right Wing Upper Windows */}
              <path d="M155,138 V122 A5,5 0 0,1 165,122 V138 Z" fill="#ffffff" stroke="#059669" strokeWidth="1.1" />
              <circle cx="160" cy="122" r="1.5" fill="#059669" />
              <path d="M175,138 V122 A5,5 0 0,1 185,122 V138 Z" fill="#ffffff" stroke="#059669" strokeWidth="1.1" />
              <circle cx="180" cy="122" r="1.5" fill="#059669" />
              <path d="M195,138 V122 A5,5 0 0,1 205,122 V138 Z" fill="#ffffff" stroke="#059669" strokeWidth="1.1" />
              <circle cx="200" cy="122" r="1.5" fill="#059669" />

              {/* 3. Central Grand Portico Pillars */}
              <line x1="94" y1="120" x2="94" y2="181" stroke="#047857" strokeWidth="2.2" strokeLinecap="round" />
              <line x1="108" y1="120" x2="108" y2="181" stroke="#047857" strokeWidth="2.2" strokeLinecap="round" />
              <line x1="132" y1="120" x2="132" y2="181" stroke="#047857" strokeWidth="2.2" strokeLinecap="round" />
              <line x1="146" y1="120" x2="146" y2="181" stroke="#047857" strokeWidth="2.2" strokeLinecap="round" />

              {/* Central Portico Arch on 1st Floor */}
              <path d="M113,138 V124 A7,7 0 0,1 127,124 V138 Z" fill="#ecfdf5" stroke="#047857" strokeWidth="1.2" />

              {/* Classical Triangular Pediment over Portico */}
              <polygon points="90,120 150,120 120,98" fill="#ffffff" stroke="#047857" strokeWidth="1.5" strokeLinejoin="round" />
              <polygon points="98,118 142,118 120,102" fill="#d1fae5" fillOpacity="0.4" stroke="#059669" strokeWidth="0.8" />
              <circle cx="120" cy="111" r="3.2" fill="#059669" fillOpacity="0.3" stroke="#047857" strokeWidth="0.8" />

              {/* Roof Balustrade / Crenellations */}
              <line x1="18" y1="102" x2="90" y2="102" stroke="#059669" strokeWidth="1.2" />
              <line x1="150" y1="102" x2="222" y2="102" stroke="#059669" strokeWidth="1.2" />
              {/* Balusters */}
              <path d="M22,105 V99 M36,105 V99 M50,105 V99 M64,105 V99 M78,105 V99 M162,105 V99 M176,105 V99 M190,105 V99 M204,105 V99 M218,105 V99" stroke="#059669" strokeWidth="1" />

              {/* 4. The Iconic Patna University Clock Tower */}
              {/* Tower Tier 1 (Base) */}
              <rect x="105" y="70" width="30" height="28" fill="url(#puTowerFill)" stroke="#047857" strokeWidth="1.4" />
              <line x1="103" y1="70" x2="137" y2="70" stroke="#047857" strokeWidth="1.4" />
              <path d="M115,92 V80 A5,5 0 0,1 125,80 V92 Z" fill="#10b981" fillOpacity="0.15" stroke="#059669" strokeWidth="1" />

              {/* Tower Tier 2 (Clock Chamber) */}
              <rect x="107" y="44" width="26" height="26" fill="url(#puTowerFill)" stroke="#047857" strokeWidth="1.4" />
              <line x1="105" y1="44" x2="135" y2="44" stroke="#047857" strokeWidth="1.4" />

              {/* The Iconic Clock Face */}
              <circle cx="120" cy="57" r="9" fill="#ffffff" stroke="#047857" strokeWidth="1.5" />
              <circle cx="120" cy="57" r="7.5" fill="#ecfdf5" fillOpacity="0.5" stroke="#059669" strokeWidth="0.6" strokeDasharray="1.5 1.5" />
              <circle cx="120" cy="57" r="1.3" fill="#047857" />
              {/* Clock hands at 10:10 */}
              <line x1="120" y1="57" x2="116" y2="52" stroke="#047857" strokeWidth="1.2" strokeLinecap="round" />
              <line x1="120" y1="57" x2="124.5" y2="53" stroke="#047857" strokeWidth="1" strokeLinecap="round" />

              {/* Tower Tier 3 (Columned Belfry / Cupola) */}
              <rect x="110" y="25" width="20" height="19" fill="#ffffff" stroke="#047857" strokeWidth="1.2" />
              {/* Belfry mini pillars */}
              <line x1="113" y1="26" x2="113" y2="43" stroke="#059669" strokeWidth="1.2" />
              <line x1="117.5" y1="26" x2="117.5" y2="43" stroke="#059669" strokeWidth="1" />
              <line x1="122.5" y1="26" x2="122.5" y2="43" stroke="#059669" strokeWidth="1" />
              <line x1="127" y1="26" x2="127" y2="43" stroke="#059669" strokeWidth="1.2" />

              {/* Tower Tier 4: The Historic Grand Dome & Cupola Cap */}
              <line x1="108" y1="25" x2="132" y2="25" stroke="#047857" strokeWidth="1.4" strokeLinecap="round" />
              {/* The Heritage Dome Path */}
              <path
                d="M110,25 C110,13 115,11 120,11 C125,11 130,13 130,25 Z"
                fill="url(#puTowerFill)"
                stroke="#047857"
                strokeWidth="1.4"
              />
              <path
                d="M114,25 C114,15 117,13 120,13 C123,13 126,15 126,25"
                fill="none"
                stroke="#10b981"
                strokeWidth="0.8"
                strokeOpacity="0.6"
              />

              {/* Dome Finial & National Flag Post */}
              <circle cx="120" cy="9.5" r="1.5" fill="#047857" />
              <line x1="120" y1="8" x2="120" y2="2" stroke="#047857" strokeWidth="1.2" />
              {/* Fluttering Indian Flag Tricolor Outline */}
              <path d="M120,2 L128,4 L120,6.5 Z" fill="#059669" fillOpacity="0.8" stroke="#047857" strokeWidth="0.6" />

              {/* 5. Natural Foliage / Greenery Trees at Building Base */}
              <path
                d="M8,190 C8,180 16,172 25,172 C31,172 36,175 39,180 C42,176 48,176 52,181 C55,185 55,190 55,190 Z"
                fill="#10b981"
                fillOpacity="0.2"
                stroke="#059669"
                strokeWidth="1.2"
              />
              <path
                d="M185,190 C185,184 189,178 196,178 C200,172 208,170 215,170 C224,170 232,178 232,190 Z"
                fill="#10b981"
                fillOpacity="0.2"
                stroke="#059669"
                strokeWidth="1.2"
              />
            </svg>
          </div>

        </div>

      </div>
    </div>
  );
};
