import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

interface TShirtProps {
  categoryTitle: string;
  badgeText: string;
  themeColor?: string;
}

export const TShirtMockup: React.FC<TShirtProps> = ({
  categoryTitle,
  badgeText,
  themeColor = '#8B5CF6',
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({
    frame,
    fps,
    config: { damping: 12, mass: 0.8, stiffness: 120 },
  });

  const rotateY = Math.sin(frame / 24) * 12;
  const rotateX = Math.cos(frame / 28) * 8;
  const floatY = Math.sin(frame / 16) * 12;

  // Specular sheen moving across t-shirt
  const sheenX = interpolate(frame % 75, [0, 75], [-120, 480]);

  return (
    <div
      style={{
        transform: `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(${floatY}px) scale(${scale})`,
        transformStyle: 'preserve-3d',
      }}
      className="relative flex flex-col items-center justify-center w-full h-full select-none"
    >
      {/* Volumetric Radial Ambient Behind Product */}
      <div
        className="absolute w-80 h-80 rounded-full blur-[90px] opacity-40 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${themeColor} 0%, rgba(6,182,212,0.4) 60%, transparent 80%)`,
        }}
      />

      <svg
        viewBox="0 0 420 420"
        className="w-80 h-80 md:w-96 md:h-96 filter drop-shadow-[0_25px_35px_rgba(0,0,0,0.85)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="bodyGrad3D" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e1b4b" />
            <stop offset="35%" stopColor="#0f172a" />
            <stop offset="70%" stopColor="#090d16" />
            <stop offset="100%" stopColor="#020617" />
          </linearGradient>

          <linearGradient id="sheenGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.22)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>

          <clipPath id="shirtClipPath">
            <path d="M140 90 Q175 125 210 125 Q245 125 280 90 L350 145 L310 200 L275 175 L275 365 L145 365 L145 175 L110 200 L70 145 Z" />
          </clipPath>
        </defs>

        {/* 3D T-Shirt Outer Body */}
        <path
          d="M140 90 Q175 125 210 125 Q245 125 280 90 L350 145 L310 200 L275 175 L275 365 L145 365 L145 175 L110 200 L70 145 Z"
          fill="url(#bodyGrad3D)"
          stroke="rgba(167, 139, 250, 0.4)"
          strokeWidth="2"
        />

        {/* Dynamic Specular Sheen Pass */}
        <g clipPath="url(#shirtClipPath)">
          <rect
            x={sheenX}
            y="50"
            width="90"
            height="350"
            fill="url(#sheenGrad)"
            transform="skewX(-20)"
          />
        </g>

        {/* Realistic Ribbed Collar */}
        <path
          d="M140 90 Q175 125 210 125 Q245 125 280 90"
          stroke="#a78bfa"
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
        />

        {/* Shoulder Seam Stitching */}
        <path d="M140 90 L70 145" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeDasharray="3 3" />
        <path d="M280 90 L350 145" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeDasharray="3 3" />

        {/* High-Density Chest Artwork - Cyber Emblem */}
        <g transform="translate(155, 180)">
          {/* Cyber Card Container */}
          <rect
            x="0"
            y="0"
            width="110"
            height="115"
            rx="14"
            fill="rgba(15, 23, 42, 0.9)"
            stroke={themeColor}
            strokeWidth="1.8"
          />
          {/* Hologram Lens Center */}
          <circle cx="55" cy="45" r="24" fill="none" stroke="#06B6D4" strokeWidth="2" opacity="0.9" />
          <circle cx="55" cy="45" r="14" fill={themeColor} opacity="0.75" />
          <path d="M48 45 L55 35 L62 45 L55 55 Z" fill="#FFFFFF" />

          {/* Typography */}
          <text
            x="55"
            y="85"
            textAnchor="middle"
            fill="#FFFFFF"
            fontSize="10"
            fontWeight="bold"
            letterSpacing="2"
            fontFamily="sans-serif"
          >
            VOLA MERCH
          </text>
          <text
            x="55"
            y="98"
            textAnchor="middle"
            fill="#38BDF8"
            fontSize="7"
            fontWeight="bold"
            letterSpacing="1.2"
            fontFamily="sans-serif"
          >
            24S HEAVY COTTON
          </text>
        </g>
      </svg>

      {/* Floating 3D Pill Badge */}
      <div
        style={{
          transform: 'translateZ(40px)',
        }}
        className="absolute bottom-2 bg-slate-950/80 border border-purple-500/50 backdrop-blur-xl px-4 py-1.5 rounded-full shadow-[0_0_20px_rgba(139,92,246,0.4)] flex items-center space-x-2.5"
      >
        <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: themeColor }} />
        <span className="text-xs font-bold text-white tracking-wider">
          {badgeText} • {categoryTitle.toUpperCase()}
        </span>
      </div>
    </div>
  );
};
