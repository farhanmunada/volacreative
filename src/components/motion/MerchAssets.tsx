import React from 'react';

export const TShirtAsset: React.FC<{ accent?: string }> = ({ accent = '#8b5cf6' }) => (
  <svg viewBox="0 0 320 320" className="w-full h-full drop-shadow-[4px_4px_0px_#000]" fill="none">
    {/* Body Contour with Neo-Brutalist heavy stroke */}
    <path
      d="M100 65 Q130 95 160 95 Q190 95 220 65 L275 110 L245 155 L215 135 L215 285 L105 285 L105 135 L75 155 L45 110 Z"
      fill="#ffffff"
      stroke="#000000"
      strokeWidth="3.5"
    />
    {/* Ribbed Collar */}
    <path
      d="M100 65 Q130 95 160 95 Q190 95 220 65"
      stroke="#000000"
      strokeWidth="4"
      fill="none"
      strokeLinecap="round"
    />
    {/* Sleeves Stitches */}
    <path d="M45 110 L75 155" stroke="#000000" strokeWidth="2.5" strokeDasharray="4 3" />
    <path d="M275 110 L245 155" stroke="#000000" strokeWidth="2.5" strokeDasharray="4 3" />
    {/* High Contrast Center Graphic Badge */}
    <g transform="translate(118, 135)">
      <rect x="0" y="0" width="84" height="90" rx="8" fill={accent} stroke="#000000" strokeWidth="2.5" />
      <circle cx="42" cy="38" r="18" fill="#facc15" stroke="#000000" strokeWidth="2" />
      <path d="M35 38 L42 28 L49 38 L42 48 Z" fill="#000000" />
      <text x="42" y="70" textAnchor="middle" fill="#000000" fontSize="8" fontWeight="900" letterSpacing="1.5" fontFamily="sans-serif">
        VOLA FEST
      </text>
      <text x="42" y="80" textAnchor="middle" fill="#000000" fontSize="5.5" fontWeight="bold" letterSpacing="1" fontFamily="sans-serif">
        24S COMBED
      </text>
    </g>
  </svg>
);

export const LanyardAsset: React.FC<{ accent?: string }> = ({ accent = '#06b6d4' }) => (
  <svg viewBox="0 0 320 320" className="w-full h-full drop-shadow-[4px_4px_0px_#000]" fill="none">
    {/* Straps with Bold Outlines */}
    <path d="M110 10 L150 140 L160 140 L120 10 Z" fill={accent} stroke="#000000" strokeWidth="2.5" />
    <path d="M210 10 L170 140 L160 140 L200 10 Z" fill={accent} stroke="#000000" strokeWidth="2.5" />
    {/* Clasp */}
    <rect x="150" y="135" width="20" height="24" rx="3" fill="#facc15" stroke="#000000" strokeWidth="2.5" />
    <ellipse cx="160" cy="165" rx="8" ry="10" fill="none" stroke="#000000" strokeWidth="3" />
    {/* PVC Pass */}
    <g transform="translate(95, 175)">
      <rect x="0" y="0" width="130" height="135" rx="8" fill="#ffffff" stroke="#000000" strokeWidth="3" />
      <rect x="0" y="12" width="130" height="32" fill="#000000" />
      <text x="65" y="33" textAnchor="middle" fill="#a3e635" fontSize="11" fontWeight="900" letterSpacing="2" fontFamily="sans-serif">
        VIP ACCESS
      </text>
      <rect x="35" y="55" width="60" height="45" rx="4" fill="#f1f5f9" stroke="#000000" strokeWidth="2" />
      <circle cx="65" cy="74" r="14" fill={accent} stroke="#000000" strokeWidth="1.5" />
      {/* Barcode */}
      <g transform="translate(25, 110)">
        <rect x="0" y="0" width="4" height="15" fill="#000000" />
        <rect x="7" y="0" width="6" height="15" fill="#000000" />
        <rect x="16" y="0" width="3" height="15" fill="#000000" />
        <rect x="22" y="0" width="7" height="15" fill="#000000" />
        <rect x="33" y="0" width="4" height="15" fill="#000000" />
        <rect x="42" y="0" width="8" height="15" fill="#000000" />
        <rect x="54" y="0" width="3" height="15" fill="#000000" />
        <rect x="62" y="0" width="8" height="15" fill="#000000" />
        <rect x="74" y="0" width="5" height="15" fill="#000000" />
      </g>
    </g>
  </svg>
);

export const TumblerAsset: React.FC<{ accent?: string }> = ({ accent = '#f97316' }) => (
  <svg viewBox="0 0 320 320" className="w-full h-full drop-shadow-[4px_4px_0px_#000]" fill="none">
    {/* Cap */}
    <rect x="125" y="45" width="70" height="20" rx="3" fill="#ffffff" stroke="#000000" strokeWidth="2.5" />
    <rect x="115" y="65" width="90" height="22" rx="4" fill="#000000" stroke="#000000" strokeWidth="2.5" />
    <rect x="118" y="73" width="84" height="6" fill="#a3e635" />
    {/* Body */}
    <path d="M115 87 L125 285 Q160 295 195 285 L205 87 Z" fill={accent} stroke="#000000" strokeWidth="3" />
    {/* Laser Engraving Brutalist Badge */}
    <g transform="translate(160, 180)">
      <rect x="-38" y="-35" width="76" height="70" rx="6" fill="#ffffff" stroke="#000000" strokeWidth="2.5" />
      <circle cx="0" cy="-12" r="12" fill="#000000" />
      <path d="M-5 -12 L0 -19 L5 -12 L0 -5 Z" fill="#ffffff" />
      <text x="0" y="14" textAnchor="middle" fill="#000000" fontSize="9" fontWeight="900" letterSpacing="1.5" fontFamily="sans-serif">
        VOLA THERM
      </text>
      <text x="0" y="25" textAnchor="middle" fill="#000000" fontSize="6" fontWeight="bold" letterSpacing="1" fontFamily="sans-serif">
        SUS 304 600ML
      </text>
    </g>
  </svg>
);

export const HardboxAsset: React.FC<{ accent?: string }> = ({ accent = '#a3e635' }) => (
  <svg viewBox="0 0 320 320" className="w-full h-full drop-shadow-[4px_4px_0px_#000]" fill="none">
    {/* Isometric 3D Neo-Brutalist Gift Box */}
    <polygon points="160,50 260,95 160,140 60,95" fill={accent} stroke="#000000" strokeWidth="3" />
    <polygon points="60,95 160,140 160,250 60,205" fill="#ffffff" stroke="#000000" strokeWidth="3" />
    <polygon points="160,140 260,95 260,205 160,250" fill="#facc15" stroke="#000000" strokeWidth="3" />
    {/* Emblem Sticker on Top */}
    <g transform="translate(160, 95)">
      <polygon points="0,-18 20,-9 0,0 -20,-9" fill="#000000" />
      <text x="0" y="18" textAnchor="middle" fill="#000000" fontSize="9" fontWeight="900" letterSpacing="2" fontFamily="sans-serif">
        EXECUTIVE BOX
      </text>
    </g>
  </svg>
);
