import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

interface TumblerProps {
  categoryTitle: string;
  themeColor?: string;
}

export const TumblerMockup: React.FC<TumblerProps> = ({
  categoryTitle,
  themeColor = '#06B6D4',
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({
    frame,
    fps,
    config: { damping: 13, mass: 0.8, stiffness: 110 },
  });

  const rotateY = Math.sin(frame / 22) * 15;
  const rotateX = Math.cos(frame / 26) * 6;
  const floatY = Math.sin(frame / 16) * 10;
  const laserSweep = interpolate(frame % 70, [0, 35, 70], [-100, 220, 340]);

  return (
    <div
      style={{
        transform: `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(${floatY}px) scale(${scale})`,
        transformStyle: 'preserve-3d',
      }}
      className="relative flex flex-col items-center justify-center w-full h-full select-none"
    >
      <div
        className="absolute w-80 h-80 rounded-full blur-[90px] opacity-35 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${themeColor} 0%, rgba(16,185,129,0.3) 60%, transparent 80%)`,
        }}
      />

      <svg
        viewBox="0 0 360 420"
        className="w-80 h-80 md:w-96 md:h-96 filter drop-shadow-[0_25px_35px_rgba(0,0,0,0.85)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="cylinderGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0B132B" />
            <stop offset="25%" stopColor="#1C2541" />
            <stop offset="50%" stopColor="#3A506B" />
            <stop offset="70%" stopColor="#1C2541" />
            <stop offset="100%" stopColor="#0B132B" />
          </linearGradient>

          <linearGradient id="steelLid" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#64748B" />
            <stop offset="50%" stopColor="#F8FAFC" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>

          <clipPath id="tumblerMask">
            <path d="M125 110 L135 345 Q180 360 225 345 L235 110 Z" />
          </clipPath>
        </defs>

        {/* Stainless Steel Cap & Silicone Seal */}
        <rect x="145" y="65" width="70" height="22" rx="5" fill="url(#steelLid)" stroke="#334155" />
        <rect x="132" y="87" width="96" height="25" rx="6" fill="#0B132B" stroke="#334155" />
        <rect x="135" y="96" width="90" height="6" fill={themeColor} opacity="0.9" />

        {/* Tumbler Body */}
        <path
          d="M125 110 L135 345 Q180 360 225 345 L235 110 Z"
          fill="url(#cylinderGrad)"
          stroke="#475569"
          strokeWidth="1.5"
        />

        {/* Laser Sweep Sheen */}
        <g clipPath="url(#tumblerMask)">
          <rect
            x={100 + laserSweep}
            y="90"
            width="40"
            height="300"
            fill="#FFFFFF"
            opacity="0.18"
            transform="skewX(-16)"
          />
        </g>

        {/* Laser Etched Crest & Logo */}
        <g transform="translate(180, 220)">
          <circle cx="0" cy="-28" r="16" fill="none" stroke="#E2E8F0" strokeWidth="2.2" opacity="0.9" />
          <path d="M-8 -28 L0 -38 L8 -28 L0 -18 Z" fill="#E2E8F0" opacity="0.95" />
          <text
            x="0"
            y="8"
            textAnchor="middle"
            fill="#F8FAFC"
            fontSize="11"
            fontWeight="bold"
            letterSpacing="2.5"
            fontFamily="sans-serif"
          >
            VOLA CORP
          </text>
          <text
            x="0"
            y="22"
            textAnchor="middle"
            fill="#38BDF8"
            fontSize="8"
            letterSpacing="1.5"
            fontFamily="sans-serif"
          >
            THERMAL SUS 304
          </text>
        </g>

        {/* Base Rim */}
        <ellipse cx="180" cy="345" rx="45" ry="7" fill="#020617" opacity="0.75" />
      </svg>

      <div
        style={{
          transform: 'translateZ(40px)',
        }}
        className="absolute bottom-2 bg-slate-950/80 border border-cyan-500/50 backdrop-blur-xl px-4 py-1.5 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.4)] flex items-center space-x-2.5"
      >
        <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: themeColor }} />
        <span className="text-xs font-bold text-white tracking-wider">
          LASER ETCHING • MATTE FINISH
        </span>
      </div>
    </div>
  );
};
