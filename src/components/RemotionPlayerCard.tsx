'use client';

import React, { useEffect, useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import { Play, Pause, Sparkles, Eye, ShieldAlert, Cpu } from 'lucide-react';
import { EventCategory } from '@/types';
import { MerchComposition } from '@/remotion/MerchComposition';

// Import Remotion Player dynamically with no SSR
const Player = dynamic(
  () => import('@remotion/player').then((mod) => mod.Player),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex flex-col items-center justify-center bg-slate-950/80 text-purple-300">
        <Sparkles className="w-10 h-10 mb-3 animate-spin text-purple-400" />
        <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
          Inisialisasi 3D Motion Matrix...
        </span>
      </div>
    ),
  }
);

interface RemotionPlayerCardProps {
  activeCategory: EventCategory;
  autoCycle?: boolean;
}

export const RemotionPlayerCard: React.FC<RemotionPlayerCardProps> = ({
  activeCategory,
  autoCycle = false,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    if (mediaQuery.matches) setIsPlaying(false);

    const handler = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
      if (e.matches) setIsPlaying(false);
    };

    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // 3D Parallax Mouse Tracking
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || reducedMotion) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -12;
    const rotY = ((x - centerX) / centerX) * 12;

    setRotate({ x: rotX, y: rotY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[540px] aspect-square mx-auto transition-transform duration-200 ease-out perspective-1000"
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
      }}
    >
      {/* Outer Volumetric Halo Aura */}
      <div className="absolute -inset-1 bg-gradient-to-tr from-purple-600 via-cyan-500 to-orange-500 rounded-3xl opacity-30 blur-2xl group-hover:opacity-60 transition duration-700 pointer-events-none" />

      {/* Main Glass Stage Container */}
      <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 bg-slate-950/70 backdrop-blur-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9)] flex flex-col justify-between">
        
        {/* HUD Top Bar */}
        <div className="relative z-20 flex items-center justify-between p-5 border-b border-white/[0.06] bg-slate-950/40 backdrop-blur-md">
          <div className="flex items-center space-x-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="font-mono text-[11px] font-semibold tracking-wider text-slate-300 uppercase">
              3D PERSPECTIVE ENGINE • 60FPS
            </span>
          </div>

          <div className="flex items-center space-x-2 text-[10px] font-mono text-purple-300 bg-purple-950/60 border border-purple-500/30 px-2.5 py-1 rounded-full">
            <Cpu className="w-3 h-3 text-purple-400" />
            <span>REAL-TIME GL</span>
          </div>
        </div>

        {/* Remotion Canvas Center */}
        <div className="relative w-full flex-grow flex items-center justify-center overflow-hidden">
          <Player
            component={MerchComposition}
            durationInFrames={360}
            compositionWidth={1080}
            compositionHeight={1080}
            fps={30}
            loop
            autoPlay={!reducedMotion && isPlaying}
            inputProps={{
              category: activeCategory,
              eventName: 'Vola Creative',
              autoCycle,
            }}
            style={{
              width: '100%',
              height: '100%',
            }}
          />
          {/* Subtle Grid Reticle Overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        {/* Bottom Cyber Status & Controls */}
        <div className="relative z-20 flex items-center justify-between p-4 border-t border-white/[0.06] bg-slate-950/50 backdrop-blur-md">
          <div className="flex items-center space-x-2 text-xs font-mono text-slate-400">
            <span className="text-slate-500">[Kategori]</span>
            <span className="text-white font-bold tracking-wide uppercase px-2 py-0.5 rounded bg-white/[0.07] border border-white/[0.08]">
              {activeCategory}
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? 'Jeda animasi' : 'Putar animasi'}
              className="px-3.5 py-1.5 rounded-xl bg-white/[0.08] hover:bg-purple-600 border border-white/10 hover:border-purple-400 text-white text-xs font-medium flex items-center space-x-1.5 transition-all cursor-pointer"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{isPlaying ? 'Pause 3D' : 'Play 3D'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
