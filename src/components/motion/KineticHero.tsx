'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { TShirtAsset, LanyardAsset, TumblerAsset, HardboxAsset } from './MerchAssets';
import { MagneticButton } from './MagneticButton';
import { Sparkles, ArrowDown, ArrowUpRight } from 'lucide-react';

interface FloatingCardProps {
  mouseX: any;
  mouseY: any;
  factorX: number;
  factorY: number;
  initialPos: { x: number; y: number; rotate: number; scale: number };
  convergeX: number;
  convergeY: number;
  scrollProgress: any;
  title: string;
  category: string;
  badge: string;
  accent: string;
  children: React.ReactNode;
}

const FloatingHeroCard: React.FC<FloatingCardProps> = ({
  mouseX,
  mouseY,
  factorX,
  factorY,
  initialPos,
  convergeX,
  convergeY,
  scrollProgress,
  title,
  category,
  badge,
  accent,
  children,
}) => {
  // Parallax spring response to mouse position
  const springX = useSpring(useTransform(mouseX, (val: number) => val * factorX), {
    damping: 24,
    stiffness: 120,
  });
  const springY = useSpring(useTransform(mouseY, (val: number) => val * factorY), {
    damping: 24,
    stiffness: 120,
  });

  // Scroll convergence: starts at initialPos, converges towards center (0,0), then zooms in and fades
  const scrollX = useTransform(scrollProgress, [0, 0.7, 1], [initialPos.x, convergeX, 0]);
  const scrollY = useTransform(scrollProgress, [0, 0.7, 1], [initialPos.y, convergeY, 0]);
  const scrollRotate = useTransform(scrollProgress, [0, 0.7, 1], [initialPos.rotate, 0, initialPos.rotate * 2]);
  const scrollScale = useTransform(scrollProgress, [0, 0.7, 1], [initialPos.scale, 1.25, 2.8]);
  const scrollOpacity = useTransform(scrollProgress, [0, 0.85, 1], [1, 1, 0]);

  return (
    <motion.div
      style={{
        x: scrollX,
        y: scrollY,
        rotate: scrollRotate,
        scale: scrollScale,
        opacity: scrollOpacity,
      }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
    >
      <motion.div
        style={{
          x: springX,
          y: springY,
        }}
        data-cursor="INSPECT"
        className="w-56 sm:w-64 aspect-[4/5] rounded-3xl p-5 bg-zinc-950/80 border border-white/10 backdrop-blur-2xl shadow-[0_30px_70px_rgba(0,0,0,0.85)] flex flex-col justify-between group hover:border-white/30 transition-colors"
      >
        {/* Card Header */}
        <div className="flex items-center justify-between">
          <span className="font-mono text-[9px] uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/[0.08] text-zinc-300 border border-white/[0.08]">
            {badge}
          </span>
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: accent }} />
        </div>

        {/* 3D Asset Illustration */}
        <div className="w-full flex-grow flex items-center justify-center p-2 group-hover:scale-105 transition-transform duration-300">
          {children}
        </div>

        {/* Card Footer */}
        <div>
          <span className="font-mono text-[9px] uppercase text-zinc-500 tracking-wider block">
            {category}
          </span>
          <h4 className="font-heading font-bold text-sm text-white truncate">
            {title}
          </h4>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const KineticHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse coordinates tracking from center of viewport (-1 to 1)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX - innerWidth / 2) / (innerWidth / 2);
    const y = (e.clientY - innerHeight / 2) / (innerHeight / 2);
    mouseX.set(x);
    mouseY.set(y);
  };

  // Scroll tracking across 160vh of hero container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const heroTextOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);
  const heroTextScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.85]);

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full h-[180vh] bg-black text-white overflow-clip select-none"
    >
      {/* Sticky Inner Viewport */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between items-center overflow-hidden">
        
        {/* 1. Giant Infinite Kinetic Marquee Typography (Background) */}
        <div className="absolute inset-0 flex flex-col justify-center pointer-events-none opacity-20 overflow-hidden -z-10">
          <div className="animate-marquee whitespace-nowrap flex text-[15vw] font-black font-heading tracking-tighter leading-none text-zinc-700">
            <span>VOLA CREATIVE • EVENT MERCH ARCHITECTURE • CYBER ARTIFACTS •&nbsp;</span>
            <span>VOLA CREATIVE • EVENT MERCH ARCHITECTURE • CYBER ARTIFACTS •&nbsp;</span>
          </div>
          <div
            className="animate-marquee whitespace-nowrap flex text-[15vw] font-black font-heading tracking-tighter leading-none text-zinc-800 -mt-8"
            style={{ animationDirection: 'reverse', animationDuration: '34s' }}
          >
            <span>KINETIC MERCHANDISE • VIP PASSES • HEAVY APPAREL • PREMIUM DRINKWARE •&nbsp;</span>
            <span>KINETIC MERCHANDISE • VIP PASSES • HEAVY APPAREL • PREMIUM DRINKWARE •&nbsp;</span>
          </div>
        </div>

        {/* Ambient Center Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />

        {/* Top Header Placeholder spacing */}
        <div className="w-full pt-28 px-6 max-w-7xl flex items-center justify-between text-xs font-mono text-zinc-400">
          <span className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>STUDIO PENGADAAN MERCHANDISE KELAS AWWWARDS</span>
          </span>
          <span className="hidden sm:inline">[SCROLL UNTUK EKSPLORASI 3D]</span>
        </div>

        {/* Central Kinetic Headline */}
        <motion.div
          style={{ opacity: heroTextOpacity, scale: heroTextScale }}
          className="relative z-10 text-center max-w-4xl px-4 flex flex-col items-center"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-purple-500/30 bg-purple-950/40 text-purple-300 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>KINETIC CATALOG EXPERIENCE</span>
          </div>

          <h1 className="font-heading font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-[0.95] text-white">
            Merchandise Acara Berkelas{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
              Maha Karya.
            </span>
          </h1>

          <p className="mt-6 text-sm sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed font-sans">
            Menghadirkan memorabilia fisik bervolume tinggi dengan kurasi desain kinetik, material teruji ekspor, dan ketepatan distribusi tanpa kompromi.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <MagneticButton href="#carousel-3d" cursorText="DISCOVER">
              <div className="px-8 py-3.5 rounded-full bg-white text-black font-bold text-xs sm:text-sm tracking-wider uppercase hover:bg-zinc-200 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.4)] flex items-center space-x-2">
                <span>Explore Catalog</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </MagneticButton>
          </div>
        </motion.div>

        {/* 2. Floating 3D-Like Merchandise Cards with Mouse Parallax & Scroll Convergence */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          {/* Card 1: Heavyweight T-Shirt (Top Left) */}
          <FloatingHeroCard
            mouseX={mouseX}
            mouseY={mouseY}
            factorX={-45}
            factorY={-30}
            initialPos={{ x: -360, y: -160, rotate: -8, scale: 0.95 }}
            convergeX={-60}
            convergeY={-30}
            scrollProgress={scrollYProgress}
            title="Heavy Tour T-Shirt"
            category="Concert Apparel"
            badge="24S REACTIVE"
            accent="#a855f7"
          >
            <TShirtAsset accent="#a855f7" />
          </FloatingHeroCard>

          {/* Card 2: Holographic RFID VIP Pass (Top Right) */}
          <FloatingHeroCard
            mouseX={mouseX}
            mouseY={mouseY}
            factorX={50}
            factorY={-35}
            initialPos={{ x: 370, y: -170, rotate: 10, scale: 0.92 }}
            convergeX={60}
            convergeY={-40}
            scrollProgress={scrollYProgress}
            title="VIP Hologram Lanyard"
            category="Festival Pass"
            badge="RFID NFC"
            accent="#06b6d4"
          >
            <LanyardAsset accent="#06b6d4" />
          </FloatingHeroCard>

          {/* Card 3: Laser Thermal Tumbler (Bottom Left) */}
          <FloatingHeroCard
            mouseX={mouseX}
            mouseY={mouseY}
            factorX={-35}
            factorY={40}
            initialPos={{ x: -400, y: 180, rotate: 6, scale: 0.9 }}
            convergeX={-40}
            convergeY={30}
            scrollProgress={scrollYProgress}
            title="Laser Matte Tumbler"
            category="Corporate Drinkware"
            badge="SUS 304"
            accent="#f97316"
          >
            <TumblerAsset accent="#f97316" />
          </FloatingHeroCard>

          {/* Card 4: Executive Onboarding Box (Bottom Right) */}
          <FloatingHeroCard
            mouseX={mouseX}
            mouseY={mouseY}
            factorX={45}
            factorY={45}
            initialPos={{ x: 380, y: 190, rotate: -7, scale: 0.94 }}
            convergeX={50}
            convergeY={35}
            scrollProgress={scrollYProgress}
            title="Executive Hardbox Kit"
            category="Corporate Gift"
            badge="FOIL EMBOSS"
            accent="#10b981"
          >
            <HardboxAsset accent="#10b981" />
          </FloatingHeroCard>
        </div>

        {/* Bottom Scroll Cue */}
        <div className="pb-8 flex flex-col items-center space-y-2 text-zinc-500 font-mono text-[10px]">
          <span className="uppercase tracking-widest">Scroll Menuju Orbit 3D</span>
          <ArrowDown className="w-4 h-4 animate-bounce text-purple-400" />
        </div>
      </div>
    </section>
  );
};
