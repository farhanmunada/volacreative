import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

interface LanyardProps {
  categoryTitle: string;
  themeColor?: string;
}

export const LanyardMockup: React.FC<LanyardProps> = ({
  categoryTitle,
  themeColor = '#EA580C',
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Entrance spring with swing
  const scale = spring({
    frame,
    fps,
    config: { damping: 12, mass: 0.9, stiffness: 100 },
  });

  const swingAngle = Math.sin(frame / 18) * 4;
  const badgeY = Math.cos(frame / 20) * 6;

  return (
    <div
      style={{
        transform: `scale(${scale}) rotate(${swingAngle}deg)`,
        transformOrigin: 'top center',
      }}
      className="relative flex flex-col items-center justify-center w-full h-full select-none"
    >
      {/* Background Soft Glow */}
      <div
        className="absolute w-64 h-64 rounded-full blur-3xl opacity-30 pointer-events-none"
        style={{ backgroundColor: themeColor }}
      />

      <svg
        viewBox="0 0 360 400"
        className="w-72 h-72 md:w-80 md:h-80 drop-shadow-2xl"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Lanyard Strap Gradient */}
          <linearGradient id="strapGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7C3AED" />
            <stop offset="50%" stopColor="#A78BFA" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
          {/* Metal Clip Gradient */}
          <linearGradient id="metalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E2E8F0" />
            <stop offset="50%" stopColor="#94A3B8" />
            <stop offset="100%" stopColor="#64748B" />
          </linearGradient>
        </defs>

        {/* Lanyard Straps */}
        <path
          d="M130 10 L165 170 L175 170 L140 10 Z"
          fill="url(#strapGrad)"
          stroke="#4C1D95"
          strokeWidth="1.5"
        />
        <path
          d="M230 10 L195 170 L185 170 L220 10 Z"
          fill="url(#strapGrad)"
          stroke="#4C1D95"
          strokeWidth="1.5"
        />

        {/* Strap Pattern Typography */}
        <text
          x="146"
          y="90"
          fill="#FFFFFF"
          fontSize="7"
          fontWeight="bold"
          letterSpacing="2"
          transform="rotate(78 146 90)"
        >
          VOLA FEST • VIP
        </text>

        {/* Metal Lobster Clasp */}
        <rect x="172" y="165" width="16" height="24" rx="4" fill="url(#metalGrad)" stroke="#334155" />
        <ellipse cx="180" cy="195" rx="9" ry="11" fill="none" stroke="url(#metalGrad)" strokeWidth="3" />

        {/* PVC ID Card Badge Holder */}
        <g transform={`translate(0, ${badgeY})`}>
          {/* Acrylic Badge Shell */}
          <rect
            x="105"
            y="200"
            width="150"
            height="185"
            rx="12"
            fill="#0F172A"
            stroke={themeColor}
            strokeWidth="2.5"
            filter="drop-shadow(0 10px 15px rgba(0,0,0,0.5))"
          />

          {/* Top Hole Punch */}
          <rect x="160" y="206" width="40" height="7" rx="3.5" fill="#334155" />

          {/* Badge Header Strip */}
          <rect x="105" y="218" width="150" height="36" fill={themeColor} />
          <text
            x="180"
            y="236"
            textAnchor="middle"
            fill="#FFFFFF"
            fontSize="12"
            fontWeight="bold"
            letterSpacing="2"
            fontFamily="sans-serif"
          >
            VIP ALL ACCESS
          </text>
          <text
            x="180"
            y="247"
            textAnchor="middle"
            fill="#FEF08A"
            fontSize="7"
            fontWeight="bold"
            letterSpacing="1"
            fontFamily="sans-serif"
          >
            {categoryTitle.toUpperCase()}
          </text>

          {/* Avatar / Hologram Box */}
          <rect x="140" y="265" width="80" height="70" rx="8" fill="#1E293B" stroke="#475569" strokeWidth="1" />
          <circle cx="180" cy="295" r="18" fill="#38BDF8" opacity="0.8" />
          <path d="M172 315 C172 305 188 305 188 315 Z" fill="#E2E8F0" />

          {/* Barcode Strip */}
          <g transform="translate(130, 345)">
            <rect x="0" y="0" width="3" height="24" fill="#E2E8F0" />
            <rect x="6" y="0" width="6" height="24" fill="#E2E8F0" />
            <rect x="16" y="0" width="2" height="24" fill="#E2E8F0" />
            <rect x="22" y="0" width="5" height="24" fill="#E2E8F0" />
            <rect x="30" y="0" width="7" height="24" fill="#E2E8F0" />
            <rect x="40" y="0" width="3" height="24" fill="#E2E8F0" />
            <rect x="46" y="0" width="8" height="24" fill="#E2E8F0" />
            <rect x="58" y="0" width="4" height="24" fill="#E2E8F0" />
            <rect x="66" y="0" width="6" height="24" fill="#E2E8F0" />
            <rect x="76" y="0" width="3" height="24" fill="#E2E8F0" />
            <rect x="83" y="0" width="7" height="24" fill="#E2E8F0" />
            <rect x="94" y="0" width="4" height="24" fill="#E2E8F0" />
          </g>
        </g>
      </svg>

      <div className="absolute bottom-2 bg-slate-900/90 border border-orange-500/40 px-3.5 py-1.5 rounded-full backdrop-blur-md shadow-lg flex items-center space-x-2">
        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: themeColor }} />
        <span className="text-xs font-semibold text-white tracking-wide">
          Double-Side Tissue Lanyard & RFID Pass
        </span>
      </div>
    </div>
  );
};
