'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { Play, Pause, RotateCcw, Sparkles } from 'lucide-react';
import { EventCategory } from '@/types';
import { MerchComposition } from '@/remotion/MerchComposition';

// Import Remotion Player dynamically with no SSR
const Player = dynamic(
  () => import('@remotion/player').then((mod) => mod.Player),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex flex-col items-center justify-center bg-slate-950 text-purple-300 animate-pulse">
        <Sparkles className="w-10 h-10 mb-2 animate-spin text-purple-400" />
        <span className="text-sm font-medium">Memuat Mesin Motion Remotion...</span>
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

  useEffect(() => {
    // Check user accessibility preference for reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    if (mediaQuery.matches) {
      setIsPlaying(false);
    }

    const handler = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
      if (e.matches) setIsPlaying(false);
    };

    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return (
    <div className="relative w-full aspect-square max-w-[480px] mx-auto rounded-3xl overflow-hidden border-2 border-purple-500/30 shadow-2xl shadow-purple-900/30 bg-slate-950 group">
      {/* Remotion 60FPS Reactive Player */}
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

      {/* Floating Badge Header */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
        <div className="flex items-center space-x-2 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-purple-400/30">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-bold text-white tracking-wide">
            REMOTION MOTION 60FPS
          </span>
        </div>
        <div className="bg-purple-600/80 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-semibold text-white">
          Real-Time Render
        </div>
      </div>

      {/* Interactive Controls Overlay */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-auto">
        <div className="text-[11px] text-slate-300 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-lg border border-slate-700">
          Mode: <span className="text-purple-400 font-semibold uppercase">{activeCategory}</span>
        </div>

        <div className="flex items-center space-x-2 bg-slate-900/85 backdrop-blur-md p-1 rounded-full border border-purple-500/30">
          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={isPlaying ? 'Jeda animasi' : 'Putar animasi'}
            className="w-8 h-8 rounded-full flex items-center justify-center text-white hover:bg-purple-600 transition-colors cursor-pointer"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
          </button>
        </div>
      </div>
    </div>
  );
};
