import React from 'react';

export const TShirtAsset: React.FC<{ accent?: string }> = ({ accent = '#a855f7' }) => (
  <svg viewBox="0 0 320 320" className="w-full h-full drop-shadow-[0_20px_30px_rgba(0,0,0,0.9)]" fill="none">
    <defs>
      <linearGradient id="teeBody" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#18181b" />
        <stop offset="40%" stopColor="#09090b" />
        <stop offset="100%" stopColor="#020203" />
      </linearGradient>
      <linearGradient id="teeSheen" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="rgba(255,255,255,0.18)" />
        <stop offset="100%" stopColor="transparent" />
      </linearGradient>
    </defs>
    {/* Body Contour */}
    <path
      d="M100 65 Q130 95 160 95 Q190 95 220 65 L275 110 L245 155 L215 135 L215 285 L105 285 L105 135 L75 155 L45 110 Z"
      fill="url(#teeBody)"
      stroke="rgba(255,255,255,0.15)"
      strokeWidth="1.5"
    />
    {/* Ribbed Collar */}
    <path d="M100 65 Q130 95 160 95 Q190 95 220 65" stroke={accent} strokeWidth="3" fill="none" strokeLinecap="round" />
    {/* Left Shoulder Light Pass */}
    <path d="M100 65 L45 110 L75 155 L105 135 Z" fill="url(#teeSheen)" opacity="0.3" />
    {/* Center High-Density Artwork */}
    <g transform="translate(120, 140)">
      <rect x="0" y="0" width="80" height="85" rx="10" fill="#09090b" stroke={accent} strokeWidth="1.5" />
      <circle cx="40" cy="35" r="16" fill={accent} opacity="0.8" />
      <path d="M34 35 L40 26 L46 35 L40 44 Z" fill="#ffffff" />
      <text x="40" y="66" textAnchor="middle" fill="#ffffff" fontSize="7" fontWeight="bold" letterSpacing="1.5" fontFamily="sans-serif">
        VOLA TOUR
      </text>
      <text x="40" y="76" textAnchor="middle" fill={accent} fontSize="5" fontWeight="bold" letterSpacing="1" fontFamily="sans-serif">
        HEAVY 24S
      </text>
    </g>
  </svg>
);

export const LanyardAsset: React.FC<{ accent?: string }> = ({ accent = '#06b6d4' }) => (
  <svg viewBox="0 0 320 320" className="w-full h-full drop-shadow-[0_20px_30px_rgba(0,0,0,0.9)]" fill="none">
    <defs>
      <linearGradient id="strapGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#7c3aed" />
        <stop offset="50%" stopColor="#a855f7" />
        <stop offset="100%" stopColor="#06b6d4" />
      </linearGradient>
    </defs>
    {/* Straps */}
    <path d="M110 10 L150 140 L160 140 L120 10 Z" fill="url(#strapGrad)" />
    <path d="M210 10 L170 140 L160 140 L200 10 Z" fill="url(#strapGrad)" />
    {/* Clasp */}
    <rect x="150" y="135" width="20" height="24" rx="4" fill="#94a3b8" stroke="#334155" />
    <ellipse cx="160" cy="165" rx="8" ry="10" fill="none" stroke="#e2e8f0" strokeWidth="2.5" />
    {/* Pass */}
    <g transform="translate(95, 175)">
      <rect x="0" y="0" width="130" height="135" rx="12" fill="#09090b" stroke={accent} strokeWidth="2" />
      <rect x="0" y="12" width="130" height="30" fill={accent} />
      <text x="65" y="32" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold" letterSpacing="2" fontFamily="sans-serif">
        VIP ALL ACCESS
      </text>
      <rect x="35" y="55" width="60" height="45" rx="6" fill="#18181b" stroke="#3f3f46" />
      <circle cx="65" cy="74" r="12" fill={accent} opacity="0.8" />
      {/* Mini Barcode */}
      <g transform="translate(25, 110)">
        <rect x="0" y="0" width="3" height="15" fill="#f4f4f5" />
        <rect x="6" y="0" width="5" height="15" fill="#f4f4f5" />
        <rect x="15" y="0" width="2" height="15" fill="#f4f4f5" />
        <rect x="20" y="0" width="6" height="15" fill="#f4f4f5" />
        <rect x="30" y="0" width="4" height="15" fill="#f4f4f5" />
        <rect x="38" y="0" width="7" height="15" fill="#f4f4f5" />
        <rect x="49" y="0" width="3" height="15" fill="#f4f4f5" />
        <rect x="56" y="0" width="8" height="15" fill="#f4f4f5" />
        <rect x="68" y="0" width="4" height="15" fill="#f4f4f5" />
        <rect x="75" y="0" width="5" height="15" fill="#f4f4f5" />
      </g>
    </g>
  </svg>
);

export const TumblerAsset: React.FC<{ accent?: string }> = ({ accent = '#f97316' }) => (
  <svg viewBox="0 0 320 320" className="w-full h-full drop-shadow-[0_20px_30px_rgba(0,0,0,0.9)]" fill="none">
    <defs>
      <linearGradient id="tumblerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#09090b" />
        <stop offset="35%" stopColor="#27272a" />
        <stop offset="65%" stopColor="#18181b" />
        <stop offset="100%" stopColor="#09090b" />
      </linearGradient>
    </defs>
    {/* Cap */}
    <rect x="125" y="45" width="70" height="20" rx="4" fill="#52525b" stroke="#71717a" />
    <rect x="115" y="65" width="90" height="22" rx="5" fill="#18181b" stroke="#3f3f46" />
    <rect x="118" y="73" width="84" height="6" fill={accent} />
    {/* Body */}
    <path d="M115 87 L125 285 Q160 295 195 285 L205 87 Z" fill="url(#tumblerGrad)" stroke="#3f3f46" strokeWidth="1.5" />
    {/* Laser Engraving */}
    <g transform="translate(160, 180)">
      <circle cx="0" cy="-20" r="14" fill="none" stroke="#e4e4e7" strokeWidth="1.8" />
      <path d="M-6 -20 L0 -28 L6 -20 L0 -12 Z" fill="#e4e4e7" />
      <text x="0" y="8" textAnchor="middle" fill="#e4e4e7" fontSize="9" fontWeight="bold" letterSpacing="2" fontFamily="sans-serif">
        VOLA THERMAL
      </text>
      <text x="0" y="20" textAnchor="middle" fill={accent} fontSize="6" fontWeight="bold" letterSpacing="1.2" fontFamily="sans-serif">
        SUS 304 POWDER
      </text>
    </g>
  </svg>
);

export const HardboxAsset: React.FC<{ accent?: string }> = ({ accent = '#10b981' }) => (
  <svg viewBox="0 0 320 320" className="w-full h-full drop-shadow-[0_20px_30px_rgba(0,0,0,0.9)]" fill="none">
    <defs>
      <linearGradient id="boxTop" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1e293b" />
        <stop offset="100%" stopColor="#0f172a" />
      </linearGradient>
      <linearGradient id="boxFront" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0f172a" />
        <stop offset="100%" stopColor="#020617" />
      </linearGradient>
      <linearGradient id="boxSide" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#334155" />
        <stop offset="100%" stopColor="#1e293b" />
      </linearGradient>
    </defs>
    {/* Isometric 3D Gift Box */}
    <polygon points="160,50 260,95 160,140 60,95" fill="url(#boxTop)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
    <polygon points="60,95 160,140 160,250 60,205" fill="url(#boxFront)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
    <polygon points="160,140 260,95 260,205 160,250" fill="url(#boxSide)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
    {/* Foil Stamp Emblem on Top */}
    <g transform="translate(160, 95)">
      <polygon points="0,-18 20,-9 0,0 -20,-9" fill="none" stroke={accent} strokeWidth="1.5" />
      <polygon points="0,-12 12,-6 0,0 -12,-6" fill={accent} opacity="0.6" />
      <text x="0" y="16" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="bold" letterSpacing="2" fontFamily="sans-serif">
        EXECUTIVE KIT
      </text>
    </g>
  </svg>
);
