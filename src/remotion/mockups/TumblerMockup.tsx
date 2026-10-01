import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

interface TumblerProps {
  categoryTitle: string;
  themeColor?: string;
}

export const TumblerMockup: React.FC<TumblerProps> = ({
  categoryTitle,
  themeColor = '#10B981',
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({
    frame,
    fps,
    config: { damping: 13, mass: 0.8, stiffness: 110 },
  });

  // Laser reflection sweep across tumbler
  const laserSweep = interpolate(frame % 90, [0, 45, 90], [-60, 180, 240]);
  const floatY = Math.sin(frame / 16) * 7;

  return (
    <div
      style={{
        transform: `scale(${scale}) translateY(${floatY}px)`,
        transformOrigin: 'center center',
      }}
      className="relative flex flex-col items-center justify-center w-full h-full select-none"
    >
      {/* Background Soft Glow */}
      <div
        className="absolute w-64 h-64 rounded-full blur-3xl opacity-25 pointer-events-none"
        style={{ backgroundColor: themeColor }}
      />

      <svg
        viewBox="0 0 340 400"
        className="w-72 h-72 md:w-80 md:h-80 drop-shadow-2xl"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Tumbler Body Gradient */}
          <linearGradient id="tumblerBody" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1E293B" />
            <stop offset="35%" stopColor="#334155" />
            <stop offset="55%" stopColor="#475569" />
            <stop offset="75%" stopColor="#1E293B" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>

          {/* Stainless Steel Cap Gradient */}
          <linearGradient id="capGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#94A3B8" />
            <stop offset="50%" stopColor="#F8FAFC" />
            <stop offset="100%" stopColor="#64748B" />
          </linearGradient>

          {/* Laser Sheen Clip Path */}
          <clipPath id="tumblerClip">
            <path d="M120 110 L130 330 Q170 345 210 330 L220 110 Z" />
          </clipPath>
        </defs>

        {/* Tumbler Cap / Lid */}
        <rect x="135" y="65" width="70" height="20" rx="4" fill="url(#capGrad)" stroke="#334155" />
        <rect x="125" y="85" width="90" height="25" rx="6" fill="#0F172A" stroke="#334155" />

        {/* Rubber Grip Band on Lid */}
        <rect x="127" y="94" width="86" height="7" fill={themeColor} opacity="0.9" />

        {/* Tumbler Main Body */}
        <path
          d="M120 110 L130 330 Q170 345 210 330 L220 110 Z"
          fill="url(#tumblerBody)"
          stroke="#475569"
          strokeWidth="1.5"
        />

        {/* Moving Laser Highlight Reflection */}
        <g clipPath="url(#tumblerClip)">
          <rect
            x={100 + laserSweep}
            y="90"
            width="35"
            height="270"
            fill="#FFFFFF"
            opacity="0.12"
            transform="skewX(-15)"
          />
        </g>

        {/* Laser Engraved Logo & Text */}
        <g transform="translate(170, 210)">
          {/* Insignia */}
          <circle cx="0" cy="-25" r="14" fill="none" stroke="#E2E8F0" strokeWidth="2" opacity="0.85" />
          <path d="M-6 -25 L0 -33 L6 -25 L0 -17 Z" fill="#E2E8F0" opacity="0.9" />
          {/* Typography */}
          <text
            x="0"
            y="5"
            textAnchor="middle"
            fill="#E2E8F0"
            fontSize="10"
            fontWeight="bold"
            letterSpacing="2"
            fontFamily="sans-serif"
            opacity="0.95"
          >
            VOLA CORP
          </text>
          <text
            x="0"
            y="18"
            textAnchor="middle"
            fill="#94A3B8"
            fontSize="7"
            letterSpacing="1.5"
            fontFamily="sans-serif"
            opacity="0.8"
          >
            SUS 304 • VACUUM
          </text>
        </g>

        {/* Base Rim */}
        <ellipse cx="170" cy="330" rx="40" ry="6" fill="#020617" opacity="0.6" />
      </svg>

      <div className="absolute bottom-2 bg-slate-900/90 border border-emerald-500/40 px-3.5 py-1.5 rounded-full backdrop-blur-md shadow-lg flex items-center space-x-2">
        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: themeColor }} />
        <span className="text-xs font-semibold text-white tracking-wide">
          Laser Engraving • Matte Powder Coating
        </span>
      </div>
    </div>
  );
};
