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
  themeColor = '#7C3AED',
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Entrance spring
  const scale = spring({
    frame,
    fps,
    config: { damping: 14, mass: 0.8, stiffness: 120 },
  });

  // Gentle float motion
  const floatY = Math.sin(frame / 15) * 8;
  const rotateDeg = Math.sin(frame / 20) * 2.5;

  return (
    <div
      style={{
        transform: `scale(${scale}) translateY(${floatY}px) rotate(${rotateDeg}deg)`,
        transformOrigin: 'center center',
      }}
      className="relative flex flex-col items-center justify-center w-full h-full select-none"
    >
      {/* Dynamic Glow Background */}
      <div
        className="absolute w-72 h-72 rounded-full blur-3xl opacity-30 pointer-events-none"
        style={{ backgroundColor: themeColor }}
      />

      {/* SVG T-Shirt Vektor Realistis */}
      <svg
        viewBox="0 0 400 400"
        className="w-72 h-72 md:w-80 md:h-80 drop-shadow-2xl"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="shirtGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E1B4B" />
            <stop offset="50%" stopColor="#0F172A" />
            <stop offset="100%" stopColor="#020617" />
          </linearGradient>
          <linearGradient id="foldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.3" />
          </linearGradient>
          <filter id="shadowFilter" x="-10%" y="-10%" width="130%" height="130%">
            <feDropShadow dx="0" dy="12" stdDeviation="10" floodOpacity="0.35" />
          </filter>
        </defs>

        {/* T-Shirt Silhouette */}
        <path
          d="M130 90 Q160 120 200 120 Q240 120 270 90 L330 140 L290 190 L260 165 L260 350 L140 350 L140 165 L110 190 L70 140 Z"
          fill="url(#shirtGrad)"
          stroke="#4338CA"
          strokeWidth="2.5"
          filter="url(#shadowFilter)"
        />

        {/* Collar Stitch */}
        <path
          d="M130 90 Q160 120 200 120 Q240 120 270 90"
          stroke="#818CF8"
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
        />

        {/* Fabric Fold Shading */}
        <path
          d="M140 165 L200 240 L260 165"
          fill="url(#foldGrad)"
          opacity="0.25"
        />

        {/* Center Graphic Graphic - Event Emblem */}
        <g transform="translate(145, 175)">
          <rect
            x="0"
            y="0"
            width="110"
            height="110"
            rx="16"
            fill="#0F172A"
            stroke={themeColor}
            strokeWidth="2"
            opacity="0.9"
          />
          {/* Neon Logo Core */}
          <circle cx="55" cy="42" r="22" fill={themeColor} opacity="0.8" />
          <path
            d="M45 42 L55 30 L65 42 L55 54 Z"
            fill="#FFFFFF"
          />
          <text
            x="55"
            y="80"
            textAnchor="middle"
            fill="#FFFFFF"
            fontSize="10"
            fontWeight="bold"
            letterSpacing="1.5"
            fontFamily="sans-serif"
          >
            VOLA MERCH
          </text>
          <text
            x="55"
            y="94"
            textAnchor="middle"
            fill={themeColor}
            fontSize="7"
            fontWeight="bold"
            letterSpacing="1"
            fontFamily="sans-serif"
          >
            2026 EDITION
          </text>
        </g>
      </svg>

      {/* Floating Badges */}
      <div className="absolute bottom-2 bg-slate-900/90 border border-purple-500/40 px-3.5 py-1.5 rounded-full backdrop-blur-md shadow-lg flex items-center space-x-2">
        <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: themeColor }} />
        <span className="text-xs font-semibold text-white tracking-wide">
          {badgeText} • {categoryTitle}
        </span>
      </div>
    </div>
  );
};
