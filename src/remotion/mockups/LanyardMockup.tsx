import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

interface LanyardProps {
  categoryTitle: string;
  themeColor?: string;
}

export const LanyardMockup: React.FC<LanyardProps> = ({
  categoryTitle,
  themeColor = '#F97316',
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({
    frame,
    fps,
    config: { damping: 11, mass: 0.9, stiffness: 100 },
  });

  const swingAngle = Math.sin(frame / 20) * 5;
  const rotateY = Math.cos(frame / 22) * 14;
  const badgeFloat = Math.sin(frame / 18) * 8;

  // Holographic rainbow angle shift
  const holoOffset = interpolate(frame % 60, [0, 60], [0, 360]);

  return (
    <div
      style={{
        transform: `perspective(900px) rotateY(${rotateY}deg) rotateZ(${swingAngle}deg) scale(${scale})`,
        transformOrigin: 'top center',
        transformStyle: 'preserve-3d',
      }}
      className="relative flex flex-col items-center justify-center w-full h-full select-none"
    >
      <div
        className="absolute w-80 h-80 rounded-full blur-[90px] opacity-35 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${themeColor} 0%, rgba(139,92,246,0.3) 60%, transparent 80%)`,
        }}
      />

      <svg
        viewBox="0 0 380 420"
        className="w-80 h-80 md:w-96 md:h-96 filter drop-shadow-[0_25px_35px_rgba(0,0,0,0.85)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="lanyardTissue" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7C3AED" />
            <stop offset="30%" stopColor="#C084FC" />
            <stop offset="70%" stopColor="#9333EA" />
            <stop offset="100%" stopColor="#581C87" />
          </linearGradient>

          <linearGradient id="chromeClasp" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F1F5F9" />
            <stop offset="50%" stopColor="#64748B" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>

          <linearGradient id="holoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06B6D4" />
            <stop offset="33%" stopColor="#8B5CF6" />
            <stop offset="66%" stopColor="#F97316" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>
        </defs>

        {/* Lanyard Straps with 3D Depth */}
        <path
          d="M135 10 L180 175 L190 175 L145 10 Z"
          fill="url(#lanyardTissue)"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="1.5"
        />
        <path
          d="M245 10 L200 175 L190 175 L235 10 Z"
          fill="url(#lanyardTissue)"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="1.5"
        />

        {/* Heavy Chrome Clasp */}
        <rect x="180" y="170" width="20" height="26" rx="5" fill="url(#chromeClasp)" stroke="#334155" />
        <ellipse cx="190" cy="204" rx="10" ry="12" fill="none" stroke="url(#chromeClasp)" strokeWidth="3.5" />

        {/* Floating Holographic VIP Pass */}
        <g transform={`translate(0, ${badgeFloat})`}>
          {/* Card Backplate Glass */}
          <rect
            x="110"
            y="212"
            width="160"
            height="195"
            rx="14"
            fill="rgba(10, 15, 30, 0.92)"
            stroke="url(#holoGradient)"
            strokeWidth="2.5"
          />

          {/* Top Hanging Slot */}
          <rect x="170" y="218" width="40" height="8" rx="4" fill="#1e293b" />

          {/* Header Strip with Glowing Badge */}
          <rect x="110" y="232" width="160" height="38" fill={themeColor} opacity="0.95" />
          <text
            x="190"
            y="252"
            textAnchor="middle"
            fill="#FFFFFF"
            fontSize="12"
            fontWeight="900"
            letterSpacing="2.5"
            fontFamily="sans-serif"
          >
            VIP ALL ACCESS
          </text>
          <text
            x="190"
            y="263"
            textAnchor="middle"
            fill="#FEF08A"
            fontSize="7.5"
            fontWeight="bold"
            letterSpacing="1.5"
            fontFamily="sans-serif"
          >
            {categoryTitle.toUpperCase()}
          </text>

          {/* Security Chip Hologram */}
          <rect x="145" y="280" width="90" height="65" rx="8" fill="#0f172a" stroke="#334155" />
          <circle cx="190" cy="312" r="18" fill="url(#holoGradient)" opacity="0.8" />
          <path d="M182 312 L190 300 L198 312 L190 324 Z" fill="#FFFFFF" />

          {/* Barcode & Security Digits */}
          <g transform="translate(135, 360)">
            <rect x="0" y="0" width="3" height="26" fill="#F8FAFC" />
            <rect x="7" y="0" width="6" height="26" fill="#F8FAFC" />
            <rect x="17" y="0" width="3" height="26" fill="#F8FAFC" />
            <rect x="24" y="0" width="7" height="26" fill="#F8FAFC" />
            <rect x="35" y="0" width="4" height="26" fill="#F8FAFC" />
            <rect x="43" y="0" width="8" height="26" fill="#F8FAFC" />
            <rect x="55" y="0" width="3" height="26" fill="#F8FAFC" />
            <rect x="62" y="0" width="7" height="26" fill="#F8FAFC" />
            <rect x="73" y="0" width="5" height="26" fill="#F8FAFC" />
            <rect x="82" y="0" width="9" height="26" fill="#F8FAFC" />
            <rect x="95" y="0" width="4" height="26" fill="#F8FAFC" />
            <rect x="103" y="0" width="7" height="26" fill="#F8FAFC" />
          </g>
        </g>
      </svg>

      <div
        style={{
          transform: 'translateZ(40px)',
        }}
        className="absolute bottom-2 bg-slate-950/80 border border-orange-500/50 backdrop-blur-xl px-4 py-1.5 rounded-full shadow-[0_0_20px_rgba(249,115,22,0.4)] flex items-center space-x-2.5"
      >
        <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: themeColor }} />
        <span className="text-xs font-bold text-white tracking-wider">
          RFID PASS • DOUBLE-SIDE TISSUE
        </span>
      </div>
    </div>
  );
};
