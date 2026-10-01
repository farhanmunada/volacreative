import React from 'react';
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { EventCategory } from '@/types';
import { TShirtMockup } from './mockups/TShirtMockup';
import { LanyardMockup } from './mockups/LanyardMockup';
import { TumblerMockup } from './mockups/TumblerMockup';
import { ToteBagMockup } from './mockups/ToteBagMockup';

export interface MerchCompositionProps {
  category: EventCategory;
  eventName?: string;
  autoCycle?: boolean;
}

export const MerchComposition: React.FC<MerchCompositionProps> = ({
  category = 'concert',
  eventName = 'Vola Creative',
  autoCycle = false,
}) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  // If autoCycle is enabled, switch category every 90 frames (3 seconds @ 30fps)
  const categories: EventCategory[] = ['concert', 'corporate', 'seminar', 'sports'];
  let currentCategory = category;

  if (autoCycle) {
    const cycleIndex = Math.floor(frame / 90) % categories.length;
    currentCategory = categories[cycleIndex];
  }

  // Smooth fade/zoom cross-dissolve trigger based on frame modulus
  const localFrame = autoCycle ? frame % 90 : frame;
  const fadeIn = spring({
    frame: localFrame,
    fps,
    config: { damping: 14, mass: 0.7, stiffness: 140 },
  });

  const opacity = interpolate(localFrame, [0, 8, 82, 90], [0, 1, 1, autoCycle ? 0 : 1]);

  return (
    <AbsoluteFill className="bg-gradient-to-br from-slate-950 via-purple-950/40 to-slate-950 flex items-center justify-center overflow-hidden">
      {/* Dynamic Grid Background Lines */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #a78bfa 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />

      {/* Decorative Rotating Ring */}
      <div
        className="absolute w-96 h-96 rounded-full border border-purple-500/20 border-dashed animate-spin"
        style={{
          animationDuration: '40s',
          animationTimingFunction: 'linear',
        }}
      />

      <div
        style={{
          opacity,
          transform: `scale(${0.9 + fadeIn * 0.1})`,
        }}
        className="w-full h-full flex items-center justify-center"
      >
        {currentCategory === 'corporate' && (
          <TumblerMockup categoryTitle="Corporate Gathering" themeColor="#10B981" />
        )}
        {currentCategory === 'concert' && (
          <LanyardMockup categoryTitle="Music Festival & Tour" themeColor="#EA580C" />
        )}
        {currentCategory === 'seminar' && (
          <ToteBagMockup categoryTitle="Seminar & Workshop" themeColor="#F59E0B" />
        )}
        {currentCategory === 'sports' && (
          <TShirtMockup categoryTitle="Activewear & Run" badgeText="DRY-FIT QUICK DRY" themeColor="#7C3AED" />
        )}
      </div>
    </AbsoluteFill>
  );
};
