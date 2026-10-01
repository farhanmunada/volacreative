import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

interface ToteBagProps {
  categoryTitle: string;
  themeColor?: string;
}

export const ToteBagMockup: React.FC<ToteBagProps> = ({
  categoryTitle,
  themeColor = '#F59E0B',
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({
    frame,
    fps,
    config: { damping: 14, mass: 0.9, stiffness: 110 },
  });

  const floatY = Math.sin(frame / 17) * 7;
  const swing = Math.sin(frame / 22) * 2;

  return (
    <div
      style={{
        transform: `scale(${scale}) translateY(${floatY}px) rotate(${swing}deg)`,
        transformOrigin: 'top center',
      }}
      className="relative flex flex-col items-center justify-center w-full h-full select-none"
    >
      <div
        className="absolute w-64 h-64 rounded-full blur-3xl opacity-25 pointer-events-none"
        style={{ backgroundColor: themeColor }}
      />

      <svg
        viewBox="0 0 360 400"
        className="w-72 h-72 md:w-80 md:h-80 drop-shadow-2xl"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="canvasGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F8FAFC" />
            <stop offset="60%" stopColor="#E2E8F0" />
            <stop offset="100%" stopColor="#CBD5E1" />
          </linearGradient>
          <filter id="canvasFilter" x="-10%" y="-10%" width="130%" height="130%">
            <feDropShadow dx="0" dy="12" stdDeviation="12" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* Tote Handles */}
        <path
          d="M130 140 C130 50 170 45 170 45 C170 45 210 50 210 140"
          stroke="#475569"
          strokeWidth="14"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M130 140 C130 50 170 45 170 45 C170 45 210 50 210 140"
          stroke="#334155"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
        />

        {/* Bag Body */}
        <path
          d="M100 135 L240 135 L250 340 Q170 355 90 340 Z"
          fill="url(#canvasGrad)"
          stroke="#94A3B8"
          strokeWidth="2"
          filter="url(#canvasFilter)"
        />

        {/* Stitching Line across top */}
        <path
          d="M103 145 L237 145"
          stroke="#64748B"
          strokeWidth="2"
          strokeDasharray="4 3"
        />

        {/* Center Screen-printed Graphic */}
        <g transform="translate(170, 240)">
          <rect
            x="-55"
            y="-55"
            width="110"
            height="110"
            rx="12"
            fill="#0F172A"
            stroke={themeColor}
            strokeWidth="2"
          />
          <circle cx="0" cy="-10" r="20" fill={themeColor} opacity="0.85" />
          <path d="M-8 -10 L0 -20 L8 -10 L0 0 Z" fill="#FFFFFF" />
          <text
            x="0"
            y="26"
            textAnchor="middle"
            fill="#FFFFFF"
            fontSize="10"
            fontWeight="bold"
            letterSpacing="1.5"
            fontFamily="sans-serif"
          >
            SEMINAR KIT
          </text>
          <text
            x="0"
            y="38"
            textAnchor="middle"
            fill="#94A3B8"
            fontSize="7"
            letterSpacing="1"
            fontFamily="sans-serif"
          >
            ORGANIC COTTON
          </text>
        </g>
      </svg>

      <div className="absolute bottom-2 bg-slate-900/90 border border-amber-500/40 px-3.5 py-1.5 rounded-full backdrop-blur-md shadow-lg flex items-center space-x-2">
        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: themeColor }} />
        <span className="text-xs font-semibold text-white tracking-wide">
          10oz Heavy Blacu Canvas • Screen Print
        </span>
      </div>
    </div>
  );
};
