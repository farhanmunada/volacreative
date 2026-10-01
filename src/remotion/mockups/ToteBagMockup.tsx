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

  const floatY = Math.sin(frame / 18) * 8;
  const rotateY = Math.sin(frame / 24) * 12;
  const swing = Math.sin(frame / 22) * 3;

  return (
    <div
      style={{
        transform: `perspective(900px) rotateY(${rotateY}deg) rotateZ(${swing}deg) translateY(${floatY}px) scale(${scale})`,
        transformOrigin: 'top center',
        transformStyle: 'preserve-3d',
      }}
      className="relative flex flex-col items-center justify-center w-full h-full select-none"
    >
      <div
        className="absolute w-80 h-80 rounded-full blur-[90px] opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${themeColor} 0%, rgba(249,115,22,0.3) 60%, transparent 80%)`,
        }}
      />

      <svg
        viewBox="0 0 380 420"
        className="w-80 h-80 md:w-96 md:h-96 filter drop-shadow-[0_25px_35px_rgba(0,0,0,0.85)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="canvasGradDark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E293B" />
            <stop offset="60%" stopColor="#0F172A" />
            <stop offset="100%" stopColor="#020617" />
          </linearGradient>

          <linearGradient id="goldFoil" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FCD34D" />
            <stop offset="50%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#B45309" />
          </linearGradient>
        </defs>

        {/* Heavy Woven Handles */}
        <path
          d="M135 145 C135 45 185 40 185 40 C185 40 235 45 235 145"
          stroke="#475569"
          strokeWidth="14"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M135 145 C135 45 185 40 185 40 C185 40 235 45 235 145"
          stroke="#334155"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
        />

        {/* Canvas Bag Body */}
        <path
          d="M105 140 L265 140 L275 355 Q185 372 95 355 Z"
          fill="url(#canvasGradDark)"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="2"
        />

        {/* Top Stitching */}
        <path
          d="M108 150 L262 150"
          stroke="#64748B"
          strokeWidth="2.5"
          strokeDasharray="4 3"
        />

        {/* Gold Screenprint Artwork */}
        <g transform="translate(185, 250)">
          <rect
            x="-60"
            y="-60"
            width="120"
            height="120"
            rx="14"
            fill="rgba(15, 23, 42, 0.9)"
            stroke="url(#goldFoil)"
            strokeWidth="2.2"
          />
          <circle cx="0" cy="-12" r="22" fill="url(#goldFoil)" opacity="0.9" />
          <path d="M-9 -12 L0 -24 L9 -12 L0 0 Z" fill="#0F172A" />
          <text
            x="0"
            y="26"
            textAnchor="middle"
            fill="#F8FAFC"
            fontSize="10"
            fontWeight="bold"
            letterSpacing="2"
            fontFamily="sans-serif"
          >
            SEMINAR KIT
          </text>
          <text
            x="0"
            y="39"
            textAnchor="middle"
            fill="#FBBF24"
            fontSize="7.5"
            letterSpacing="1.2"
            fontFamily="sans-serif"
          >
            12OZ ORGANIC CANVAS
          </text>
        </g>
      </svg>

      <div
        style={{
          transform: 'translateZ(40px)',
        }}
        className="absolute bottom-2 bg-slate-950/80 border border-amber-500/50 backdrop-blur-xl px-4 py-1.5 rounded-full shadow-[0_0_20px_rgba(245,158,11,0.4)] flex items-center space-x-2.5"
      >
        <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: themeColor }} />
        <span className="text-xs font-bold text-white tracking-wider">
          GOLD FOIL • 12OZ ORGANIC BLACU
        </span>
      </div>
    </div>
  );
};
