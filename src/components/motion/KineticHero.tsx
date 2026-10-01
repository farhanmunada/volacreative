'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { TShirtAsset, LanyardAsset, TumblerAsset, HardboxAsset } from './MerchAssets';
import { MagneticButton } from './MagneticButton';
import { Sparkles, ArrowDown, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface FloatingCardProps {
  mouseX: any;
  mouseY: any;
  factorX: number;
  factorY: number;
  delayIndex: number;
  initialPos: { x: number; y: number; rotate: number };
  scrollYProgress: any;
  title: string;
  category: string;
  badge: string;
  badgeBg: string;
  children: React.ReactNode;
}

const FloatingHeroCard: React.FC<FloatingCardProps> = ({
  mouseX,
  mouseY,
  factorX,
  factorY,
  delayIndex,
  initialPos,
  scrollYProgress,
  title,
  category,
  badge,
  badgeBg,
  children,
}) => {
  // Parallax spring response to mouse position
  const springX = useSpring(useTransform(mouseX, (val: number) => val * factorX), {
    damping: 20,
    stiffness: 100,
  });
  const springY = useSpring(useTransform(mouseY, (val: number) => val * factorY), {
    damping: 20,
    stiffness: 100,
  });

  // Parallax vertical drift as user scrolls down through hero
  const scrollParallaxY = useTransform(scrollYProgress, [0, 1], [0, factorY * 2.5]);
  const scrollRotate = useTransform(scrollYProgress, [0, 1], [initialPos.rotate, initialPos.rotate * 1.5]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 60 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.15 * delayIndex, ease: [0.16, 1, 0.3, 1] }}
      style={{
        x: initialPos.x,
        y: initialPos.y,
      }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
    >
      <motion.div
        style={{
          x: springX,
          y: useTransform(springY, (val) => val + scrollParallaxY.get()),
          rotate: scrollRotate,
        }}
        data-cursor="INSPECT"
        className="w-56 sm:w-64 aspect-[4/5] rounded-2xl p-5 bg-white border-[3px] border-black shadow-[6px_6px_0px_0px_#000] hover:shadow-[10px_10px_0px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between group cursor-pointer"
      >
        {/* Card Header Sticker */}
        <div className="flex items-center justify-between">
          <span
            className="font-mono text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md border-2 border-black"
            style={{ backgroundColor: badgeBg }}
          >
            {badge}
          </span>
          <span className="font-mono text-xs font-bold text-black">
            // 0{delayIndex}
          </span>
        </div>

        {/* 3D Asset Illustration */}
        <div className="w-full flex-grow flex items-center justify-center p-2 group-hover:scale-110 transition-transform duration-300">
          {children}
        </div>

        {/* Card Footer */}
        <div className="pt-2 border-t-2 border-black">
          <span className="font-mono text-[9px] uppercase font-bold text-zinc-500 tracking-wider block">
            {category}
          </span>
          <h4 className="font-heading font-black text-sm text-black truncate">
            {title}
          </h4>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const KineticHero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX - innerWidth / 2) / (innerWidth / 2);
    const y = (e.clientY - innerHeight / 2) / (innerHeight / 2);
    mouseX.set(x);
    mouseY.set(y);
  };

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-screen pt-28 pb-20 flex flex-col justify-between items-center overflow-hidden border-b-[3px] border-black bg-white select-none"
    >
      {/* 1. Kinetic Background Animated Marquee (Neo-Brutalist High-Contrast) */}
      <div className="absolute inset-0 flex flex-col justify-center pointer-events-none opacity-[0.08] overflow-hidden -z-10">
        <div className="animate-marquee whitespace-nowrap flex text-[16vw] font-black font-heading tracking-tighter leading-none text-black">
          <span>VOLA CREATIVE • EVENT MERCHANDISE ARCHITECTURE •&nbsp;</span>
          <span>VOLA CREATIVE • EVENT MERCHANDISE ARCHITECTURE •&nbsp;</span>
        </div>
        <div className="animate-marquee-reverse whitespace-nowrap flex text-[16vw] font-black font-heading tracking-tighter leading-none text-black -mt-6">
          <span>HIGH-VOLUME B2B • FESTIVAL APPAREL • VIP PASSES •&nbsp;</span>
          <span>HIGH-VOLUME B2B • FESTIVAL APPAREL • VIP PASSES •&nbsp;</span>
        </div>
      </div>

      {/* Crosshair accents on corners */}
      <div className="absolute top-6 left-6 font-mono text-xs font-bold text-black select-none">
        + [GRID // LAT: -6.2088 | LONG: 106.8456]
      </div>
      <div className="absolute top-6 right-6 font-mono text-xs font-bold text-black select-none">
        [VOLA-CORE-V2] +
      </div>

      {/* Central Kinetic Headline with Smooth Entrance Animation */}
      <div className="relative z-10 text-center max-w-4xl px-4 mt-8 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border-2 border-black bg-[#facc15] shadow-[3px_3px_0px_0px_#000] text-black text-xs font-mono font-black mb-5"
        >
          <Sparkles className="w-4 h-4 text-black animate-spin" />
          <span>NEO-BRUTALIST EVENT MERCHANDISE</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-[0.96] text-black"
        >
          Pengadaan Merchandise Acara{' '}
          <span className="bg-[#a3e635] px-3 py-1 border-[3px] border-black shadow-[5px_5px_0px_0px_#000] inline-block -rotate-1">
            Presisi Tinggi.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-base sm:text-xl text-zinc-700 max-w-2xl mx-auto leading-relaxed font-sans font-medium"
        >
          Visualisasikan katalog merchandise dalam <strong className="text-black font-bold">kinetika 3D orbit</strong>, verifikasi sampel fisik berstandar ekspor, dan eksekusi acara tanpa deviasi hari-H.
        </motion.p>

        {/* CTA Magnetic Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton href="#carousel-3d" cursorText="ORBIT">
            <div className="px-8 py-4 rounded-xl bg-black text-white font-mono font-black text-sm tracking-wider uppercase border-2 border-black shadow-[4px_4px_0px_0px_#a3e635] hover:shadow-[6px_6px_0px_0px_#a3e635] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all flex items-center space-x-2">
              <span>Jelajahi 3D Carousel</span>
              <ArrowUpRight className="w-4 h-4 text-[#a3e635]" />
            </div>
          </MagneticButton>

          <MagneticButton href="#contact" cursorText="RFQ">
            <div className="px-8 py-4 rounded-xl bg-white text-black font-mono font-black text-sm tracking-wider uppercase border-2 border-black shadow-[4px_4px_0px_0px_#000] hover:bg-[#facc15] transition-all">
              <span>Minta Penawaran Cepat</span>
            </div>
          </MagneticButton>
        </motion.div>
      </div>

      {/* 2. Floating 3D-Like Merchandise Cards with Mouse Parallax (Positioned visually around hero) */}
      <div className="relative w-full max-w-6xl h-64 sm:h-72 mt-8 pointer-events-none flex items-center justify-center">
        {/* Card 1: Heavyweight T-Shirt */}
        <FloatingHeroCard
          mouseX={mouseX}
          mouseY={mouseY}
          factorX={-35}
          factorY={-25}
          delayIndex={1}
          initialPos={{ x: -380, y: 0, rotate: -7 }}
          scrollYProgress={scrollYProgress}
          title="Heavy Tour T-Shirt"
          category="Apparel Acara"
          badge="24S COMBED"
          badgeBg="#8b5cf6"
        >
          <TShirtAsset accent="#8b5cf6" />
        </FloatingHeroCard>

        {/* Card 2: Holographic RFID VIP Pass */}
        <FloatingHeroCard
          mouseX={mouseX}
          mouseY={mouseY}
          factorX={-15}
          factorY={30}
          delayIndex={2}
          initialPos={{ x: -130, y: 30, rotate: 5 }}
          scrollYProgress={scrollYProgress}
          title="VIP Hologram Lanyard"
          category="Akses Festival"
          badge="RFID CHIP"
          badgeBg="#06b6d4"
        >
          <LanyardAsset accent="#06b6d4" />
        </FloatingHeroCard>

        {/* Card 3: Laser Thermal Tumbler */}
        <FloatingHeroCard
          mouseX={mouseX}
          mouseY={mouseY}
          factorX={20}
          factorY={-30}
          delayIndex={3}
          initialPos={{ x: 130, y: -20, rotate: -4 }}
          scrollYProgress={scrollYProgress}
          title="Laser Powder Tumbler"
          category="Drinkware Korporat"
          badge="SUS 304"
          badgeBg="#f97316"
        >
          <TumblerAsset accent="#f97316" />
        </FloatingHeroCard>

        {/* Card 4: Executive Onboarding Box */}
        <FloatingHeroCard
          mouseX={mouseX}
          mouseY={mouseY}
          factorX={40}
          factorY={25}
          delayIndex={4}
          initialPos={{ x: 380, y: 15, rotate: 8 }}
          scrollYProgress={scrollYProgress}
          title="Executive Box Kit"
          category="Giftset Kantor"
          badge="HARD BOX"
          badgeBg="#a3e635"
        >
          <HardboxAsset accent="#a3e635" />
        </FloatingHeroCard>
      </div>

      {/* Bottom Status Ticker Bar */}
      <div className="w-full max-w-6xl px-6 pt-6 flex flex-wrap items-center justify-between text-xs font-mono font-bold text-black border-t-2 border-black gap-4">
        <div className="flex items-center space-x-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
          <span>STATUS: WORKSHOP AKTIF PRODUKSI MASSAL</span>
        </div>
        <div className="flex items-center space-x-6">
          <span>SLA PENGIRIMAN: 99.4% ON-TIME</span>
          <span>SAMPEL: 100% DIGITAL 3D PROOF</span>
        </div>
      </div>
    </section>
  );
};
