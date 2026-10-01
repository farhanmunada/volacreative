'use client';

import React from 'react';
import { CustomCursor } from '@/components/motion/CustomCursor';
import { AwwwardsNavbar } from '@/components/motion/AwwwardsNavbar';
import { KineticHero } from '@/components/motion/KineticHero';
import { StickyCarousel3D } from '@/components/motion/StickyCarousel3D';
import { HorizontalScrollRig } from '@/components/motion/HorizontalScrollRig';
import { InquirySection } from '@/components/motion/InquirySection';
import { MinimalFooter } from '@/components/motion/MinimalFooter';

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-[#f8fafc] text-black overflow-x-hidden selection:bg-[#a3e635] selection:text-black">
      {/* Neo-Brutalist Custom Magnetic Cursor */}
      <CustomCursor />

      {/* Floating Capsule Header */}
      <AwwwardsNavbar />

      <main className="relative z-10 w-full">
        {/* 1. Kinetic Typography & Floating Merchandise Hero */}
        <KineticHero />

        {/* 2. Sticky Viewport 3D Carousel (Scrollytelling) */}
        <StickyCarousel3D />

        {/* 3. Horizontal Scroll Rig */}
        <HorizontalScrollRig />

        {/* 4. Minimal RFQ Terminal */}
        <InquirySection />
      </main>

      <MinimalFooter />
    </div>
  );
}
