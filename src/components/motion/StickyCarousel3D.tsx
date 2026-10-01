'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TShirtAsset, LanyardAsset, TumblerAsset, HardboxAsset } from './MerchAssets';
import { Sparkles, Layers, ShieldCheck, Zap } from 'lucide-react';

interface CarouselItemData {
  id: string;
  name: string;
  category: string;
  angle: number;
  specs: string[];
  leadTime: string;
  minQty: number;
  accent: string;
  glow: string;
  renderAsset: () => React.ReactNode;
}

const CAROUSEL_ITEMS: CarouselItemData[] = [
  {
    id: 'tee',
    name: 'Heavyweight Tour T-Shirt',
    category: 'Concert & Tour Merchandise',
    angle: 0,
    specs: ['Cotton Combed 24s/16s Reactive', 'High-Density Plastisol Print', 'Double Needle Sleeve Hem', 'Custom Necklabel Screenprint'],
    leadTime: '5-7 Hari Kerja',
    minQty: 50,
    accent: '#a855f7',
    glow: 'rgba(168, 85, 247, 0.35)',
    renderAsset: () => <TShirtAsset accent="#a855f7" />,
  },
  {
    id: 'lanyard',
    name: 'Hologram RFID VIP Pass',
    category: 'Festival Access & Security',
    angle: 90,
    specs: ['Double-Side Tissue 2.5cm', 'Subsurface Hologram Foil', 'Embedded 13.56MHz RFID Chip', 'Heavy Metal Lobster Clasp'],
    leadTime: '3-5 Hari Kerja',
    minQty: 100,
    accent: '#06b6d4',
    glow: 'rgba(6, 182, 212, 0.35)',
    renderAsset: () => <LanyardAsset accent="#06b6d4" />,
  },
  {
    id: 'tumbler',
    name: 'Laser Matte Vacuum Tumbler',
    category: 'Corporate Executive Drinkware',
    accent: '#f97316',
    angle: 180,
    specs: ['SUS 304 Food Grade Stainless', 'Laser Etched Micro-Precision', 'Double-Wall Vacuum Insulation', 'Matte Powder Coating Finish'],
    leadTime: '4-6 Hari Kerja',
    minQty: 50,
    glow: 'rgba(249, 115, 22, 0.35)',
    renderAsset: () => <TumblerAsset accent="#f97316" />,
  },
  {
    id: 'hardbox',
    name: 'Executive Onboarding Box',
    category: 'VIP Corporate Giftset',
    angle: 270,
    specs: ['Magnetic Rigid Hardbox', 'Foil Stamping Gold/Silver', 'Custom Die-Cut EVA Foam Tray', 'Soft-Touch Matte Velvet Laminate'],
    leadTime: '7-10 Hari Kerja',
    minQty: 30,
    accent: '#10b981',
    glow: 'rgba(16, 185, 129, 0.35)',
    renderAsset: () => <HardboxAsset accent="#10b981" />,
  },
];

export const StickyCarousel3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // a. 3D orbit rotation controlled directly by scroll: 0 -> -360 degrees
  const orbitRotation = useTransform(scrollYProgress, [0, 1], [0, -360]);

  // b. Dynamic background ambient color shifting:
  const bgGlowColor = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [
      'rgba(168, 85, 247, 0.35)', // Purple
      'rgba(6, 182, 212, 0.35)',  // Cyan
      'rgba(249, 115, 22, 0.35)',  // Orange
      'rgba(16, 185, 129, 0.35)',  // Emerald
      'rgba(168, 85, 247, 0.35)', // Purple loop
    ]
  );

  return (
    <section
      ref={containerRef}
      id="carousel-3d"
      className="relative w-full h-[300vh] bg-black text-white"
    >
      {/* Sticky Viewport Stage */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between items-center overflow-hidden px-4 sm:px-8 py-10 select-none">
        
        {/* Dynamic Volumetric Background Ambient */}
        <motion.div
          style={{ backgroundColor: bgGlowColor }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[160px] pointer-events-none -z-10 transition-colors duration-500"
        />

        {/* Section Top Header */}
        <div className="w-full max-w-7xl flex items-center justify-between z-20">
          <div className="flex items-center space-x-2 text-xs font-mono text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            <span>01 / STICKY VIEWPORT 3D CAROUSEL</span>
          </div>

          <div className="font-mono text-xs text-zinc-500">
            [SCROLL UNTUK MEROTASI ORBIT 3D]
          </div>
        </div>

        {/* 3D Orbit Cylinder Stage */}
        <div
          className="relative w-full max-w-4xl h-[480px] flex items-center justify-center"
          style={{ perspective: 1200 }}
        >
          <motion.div
            style={{
              rotateY: orbitRotation,
              transformStyle: 'preserve-3d',
            }}
            className="relative w-full h-full flex items-center justify-center"
          >
            {CAROUSEL_ITEMS.map((item) => {
              // Position cards on cylindrical carousel ring (radius = 380px)
              return (
                <div
                  key={item.id}
                  style={{
                    position: 'absolute',
                    transform: `rotateY(${item.angle}deg) translateZ(360px)`,
                    transformStyle: 'preserve-3d',
                  }}
                  className="w-72 sm:w-80 aspect-[3/4] rounded-3xl p-6 bg-zinc-950/90 border border-white/10 backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.9)] flex flex-col justify-between group hover:border-white/40 transition-colors"
                  data-cursor="ORBIT"
                >
                  {/* Card Header */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/[0.06] text-zinc-300 border border-white/[0.08]">
                      MIN. {item.minQty} PCS
                    </span>
                    <span className="font-mono text-[9px] text-zinc-400">
                      {item.leadTime}
                    </span>
                  </div>

                  {/* 3D Asset Center Illustration */}
                  <div className="w-full flex-grow flex items-center justify-center p-3 group-hover:scale-105 transition-transform duration-300">
                    {item.renderAsset()}
                  </div>

                  {/* Card Bottom Meta */}
                  <div>
                    <span
                      className="font-mono text-[9px] uppercase tracking-widest block mb-1"
                      style={{ color: item.accent }}
                    >
                      {item.category}
                    </span>
                    <h3 className="font-heading font-black text-lg text-white mb-2 leading-tight">
                      {item.name}
                    </h3>
                    <div className="space-y-1">
                      {item.specs.slice(0, 2).map((sp, sIdx) => (
                        <div key={sIdx} className="text-[11px] text-zinc-400 flex items-center space-x-1.5">
                          <span className="w-1 h-1 rounded-full bg-zinc-600" />
                          <span>{sp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom Orbit Progress Tracker */}
        <div className="w-full max-w-xl z-20 flex flex-col items-center space-y-2">
          <div className="flex items-center justify-between w-full font-mono text-[10px] text-zinc-500">
            <span>ORBIT 0°</span>
            <span className="text-zinc-300">ROTASI 360° SCROLLYTELLING</span>
            <span>ORBIT 360°</span>
          </div>
          <div className="w-full h-1 bg-zinc-900 rounded-full overflow-hidden">
            <motion.div
              style={{ scaleX: scrollYProgress, transformOrigin: '0%' }}
              className="w-full h-full bg-gradient-to-r from-purple-500 via-cyan-400 to-orange-400"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
