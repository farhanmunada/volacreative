'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TShirtAsset, LanyardAsset, TumblerAsset, HardboxAsset } from './MerchAssets';
import { Sparkles, ArrowRight, ShieldCheck, Box } from 'lucide-react';

interface CarouselItemData {
  id: string;
  name: string;
  category: string;
  angle: number;
  specs: string[];
  leadTime: string;
  minQty: number;
  badge: string;
  badgeBg: string;
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
    badge: 'BESTSELLER',
    badgeBg: '#8b5cf6',
    renderAsset: () => <TShirtAsset accent="#8b5cf6" />,
  },
  {
    id: 'lanyard',
    name: 'Hologram RFID VIP Pass',
    category: 'Festival Access & Security',
    angle: 90,
    specs: ['Double-Side Tissue 2.5cm', 'Subsurface Hologram Foil', 'Embedded 13.56MHz RFID Chip', 'Heavy Metal Lobster Clasp'],
    leadTime: '3-5 Hari Kerja',
    minQty: 100,
    badge: 'RFID CHIP',
    badgeBg: '#06b6d4',
    renderAsset: () => <LanyardAsset accent="#06b6d4" />,
  },
  {
    id: 'tumbler',
    name: 'Laser Matte Vacuum Tumbler',
    category: 'Corporate Executive Drinkware',
    angle: 180,
    specs: ['SUS 304 Food Grade Stainless', 'Laser Etched Micro-Precision', 'Double-Wall Vacuum Insulation', 'Matte Powder Coating Finish'],
    leadTime: '4-6 Hari Kerja',
    minQty: 50,
    badge: 'FOOD GRADE',
    badgeBg: '#f97316',
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
    badge: 'LUXURY PACK',
    badgeBg: '#a3e635',
    renderAsset: () => <HardboxAsset accent="#a3e635" />,
  },
];

export const StickyCarousel3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll tracking across 180vh to eliminate dead space/blank sections
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Entrance tracking as section enters viewport
  const { scrollYProgress: enterProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start'],
  });

  // Smooth entrance scale & lift
  const entranceScale = useTransform(enterProgress, [0, 1], [0.88, 1]);
  const entranceOpacity = useTransform(enterProgress, [0, 0.6], [0.2, 1]);

  // Smooth 3D orbit rotation: 0 -> -360 degrees
  const orbitRotation = useTransform(scrollYProgress, [0, 1], [0, -360]);

  return (
    <section
      ref={containerRef}
      id="carousel-3d"
      className="relative w-full h-[180vh] bg-white text-black border-b-[3px] border-black"
    >
      {/* Sticky Viewport Stage */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between items-center overflow-hidden px-4 sm:px-8 py-8 select-none">
        
        {/* Animated Background Geometric Grid Patterns */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40 -z-10"
          style={{
            backgroundImage: `radial-gradient(#000 1.5px, transparent 1.5px)`,
            backgroundSize: '24px 24px',
          }}
        />

        {/* Section Top Header Sticker */}
        <motion.div
          style={{ opacity: entranceOpacity }}
          className="w-full max-w-7xl flex items-center justify-between z-20 pt-2"
        >
          <div className="inline-flex items-center space-x-2 border-2 border-black bg-[#a3e635] px-3.5 py-1.5 rounded-lg shadow-[3px_3px_0px_0px_#000] text-xs font-mono font-black">
            <span>[01 // STICKY VIEWPORT 3D CAROUSEL]</span>
          </div>

          <div className="font-mono text-xs font-bold text-black border-2 border-black bg-white px-3 py-1 shadow-[2px_2px_0px_0px_#000]">
            ROTASI ORBIT BERJALAN SESUAI SCROLL ↓
          </div>
        </motion.div>

        {/* 3D Orbit Cylinder Stage */}
        <motion.div
          style={{
            scale: entranceScale,
            opacity: entranceOpacity,
            perspective: 1200,
          }}
          className="relative w-full max-w-4xl h-[460px] flex items-center justify-center my-auto"
        >
          <motion.div
            style={{
              rotateY: orbitRotation,
              transformStyle: 'preserve-3d',
            }}
            className="relative w-full h-full flex items-center justify-center"
          >
            {CAROUSEL_ITEMS.map((item) => {
              return (
                <div
                  key={item.id}
                  style={{
                    position: 'absolute',
                    transform: `rotateY(${item.angle}deg) translateZ(340px)`,
                    transformStyle: 'preserve-3d',
                  }}
                  className="w-72 sm:w-80 aspect-[3/4] rounded-2xl p-6 bg-white border-[3px] border-black shadow-[8px_8px_0px_0px_#000] hover:shadow-[12px_12px_0px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between group cursor-pointer"
                  data-cursor="ORBIT"
                >
                  {/* Top Bar Sticker */}
                  <div className="flex items-center justify-between">
                    <span
                      className="font-mono text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md border-2 border-black text-black"
                      style={{ backgroundColor: item.badgeBg }}
                    >
                      {item.badge}
                    </span>
                    <span className="font-mono text-xs font-black text-black">
                      MIN {item.minQty} PCS
                    </span>
                  </div>

                  {/* 3D Asset Illustration */}
                  <div className="w-full flex-grow flex items-center justify-center p-2 group-hover:scale-110 transition-transform duration-300">
                    {item.renderAsset()}
                  </div>

                  {/* Bottom Meta */}
                  <div className="pt-3 border-t-2 border-black">
                    <span className="font-mono text-[9px] uppercase font-bold text-zinc-500 tracking-wider block">
                      {item.category}
                    </span>
                    <h3 className="font-heading font-black text-lg text-black mb-1.5 leading-tight">
                      {item.name}
                    </h3>
                    <div className="font-mono text-[10px] text-zinc-600 font-bold">
                      LEAD TIME: {item.leadTime}
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Orbit Progress Indicator (Neo-Brutalist Meter) */}
        <div className="w-full max-w-md z-20 flex flex-col items-center space-y-2 pb-2">
          <div className="flex items-center justify-between w-full font-mono text-[10px] font-bold text-black">
            <span>[ORBIT: 0°]</span>
            <span className="bg-[#facc15] px-2 py-0.5 border border-black shadow-[1px_1px_0px_#000]">
              CONTINUOUS 3D SCROLL RIG
            </span>
            <span>[ORBIT: 360°]</span>
          </div>
          <div className="w-full h-3 border-2 border-black bg-white rounded-full overflow-hidden p-0.5 shadow-[2px_2px_0px_#000]">
            <motion.div
              style={{ scaleX: scrollYProgress, transformOrigin: '0%' }}
              className="w-full h-full bg-black rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
