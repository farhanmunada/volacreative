'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, Check, Layers, Cpu } from 'lucide-react';
import { TShirtAsset, LanyardAsset, TumblerAsset, HardboxAsset } from './MerchAssets';

interface RigItem {
  id: string;
  tag: string;
  title: string;
  category: string;
  material: string;
  leadTime: string;
  priceEstimate: string;
  accent: string;
  renderVisual: () => React.ReactNode;
}

const RIG_ITEMS: RigItem[] = [
  {
    id: 'hoodie',
    tag: 'LIMITED DROP',
    title: 'Festival Heavyweight Hoodie',
    category: 'Premium Outerwear',
    material: 'Cotton Fleece 380gsm High-Density DTF',
    leadTime: '7-10 Hari',
    priceEstimate: 'Rp 165.000 /pcs',
    accent: '#a855f7',
    renderVisual: () => <TShirtAsset accent="#a855f7" />,
  },
  {
    id: 'wristband-set',
    tag: 'FESTIVAL READY',
    title: 'RFID Pass & Lanyard Combo',
    category: 'Event Access & Security',
    material: 'Woven Wristband + Double-Side Tissue Strap',
    leadTime: '3-5 Hari',
    priceEstimate: 'Rp 28.000 /pcs',
    accent: '#06b6d4',
    renderVisual: () => <LanyardAsset accent="#06b6d4" />,
  },
  {
    id: 'executive-tumbler',
    tag: 'B2B ESSENTIAL',
    title: 'Powder Matte Thermal Tumbler',
    category: 'Corporate Drinkware',
    material: 'SUS 304 Vacuum Laser Engraved 600ml',
    leadTime: '4-7 Hari',
    priceEstimate: 'Rp 65.000 /pcs',
    accent: '#f97316',
    renderVisual: () => <TumblerAsset accent="#f97316" />,
  },
  {
    id: 'hardbox-gift',
    tag: 'EXECUTIVE VIP',
    title: 'VIP Onboarding Rigid Box',
    category: 'Corporate Gift Set',
    material: 'Magnetic Box + Foil Gold + EVA Foam Cutout',
    leadTime: '7-10 Hari',
    priceEstimate: 'Rp 175.000 /pcs',
    accent: '#10b981',
    renderVisual: () => <HardboxAsset accent="#10b981" />,
  },
  {
    id: 'eco-tote',
    tag: 'SUSTAINABLE',
    title: 'Eco Blacu Canvas Seminar Kit',
    category: 'Conference Package',
    material: 'Organic Cotton Canvas 12oz + Kraft Notebook',
    leadTime: '4-6 Hari',
    priceEstimate: 'Rp 45.000 /pcs',
    accent: '#eab308',
    renderVisual: () => <TShirtAsset accent="#eab308" />,
  },
  {
    id: 'jersey-run',
    tag: 'ATHLETIC',
    title: 'Activewear Sport & Marathon Set',
    category: 'Sporting Event Apparel',
    material: 'Drifit Milano Quick-Dry Full Sublimation',
    leadTime: '7-10 Hari',
    priceEstimate: 'Rp 95.000 /pcs',
    accent: '#ec4899',
    renderVisual: () => <LanyardAsset accent="#ec4899" />,
  },
];

export const HorizontalScrollRig: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  // Translates vertical scroll (0 to 1) into smooth horizontal transform (-70%)
  const x = useTransform(scrollYProgress, [0, 1], ['2%', '-68%']);

  return (
    <section
      ref={targetRef}
      id="horizontal-rig"
      className="relative h-[380vh] bg-black text-white"
    >
      {/* Sticky Viewport Track */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden py-10">
        
        {/* Section Header */}
        <div className="max-w-7xl w-full mx-auto px-6 flex items-center justify-between z-10 select-none">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400 mb-1">
              <Cpu className="w-3.5 h-3.5" />
              <span>02 / HORIZONTAL SCROLL RIG</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl text-white">
              Bento Horizontal Showroom
            </h2>
          </div>

          <div className="hidden sm:flex items-center space-x-2 text-xs font-mono text-zinc-500">
            <span>[VERTICAL SCROLL → HORIZONTAL RAIL]</span>
            <ArrowRight className="w-4 h-4 text-cyan-400" />
          </div>
        </div>

        {/* Horizontal Motion Track */}
        <div className="w-full flex items-center overflow-visible">
          <motion.div
            style={{ x }}
            className="flex items-center space-x-8 px-8 select-none"
          >
            {RIG_ITEMS.map((item, idx) => (
              <div
                key={item.id}
                data-cursor="EXPAND"
                className="relative flex-shrink-0 w-[340px] sm:w-[420px] aspect-[4/5] rounded-3xl p-8 bg-zinc-950/90 border border-white/10 backdrop-blur-2xl shadow-[0_30px_70px_rgba(0,0,0,0.9)] flex flex-col justify-between hover:border-white/30 hover:scale-[1.03] transition-all duration-300 group cursor-pointer"
              >
                {/* Accent Corner Glow */}
                <div
                  className="absolute top-0 right-0 w-36 h-36 blur-3xl opacity-20 pointer-events-none rounded-full"
                  style={{ backgroundColor: item.accent }}
                />

                {/* Top Meta Bar */}
                <div className="flex items-center justify-between">
                  <span
                    className="font-mono text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border"
                    style={{
                      borderColor: item.accent,
                      color: item.accent,
                      backgroundColor: `${item.accent}15`,
                    }}
                  >
                    {item.tag}
                  </span>
                  <span className="font-mono text-xs text-zinc-500">
                    // 0{idx + 1}
                  </span>
                </div>

                {/* Center 3D Visual Asset with Hover Tilt */}
                <div className="w-full flex-grow flex items-center justify-center p-4 group-hover:scale-110 transition-transform duration-300">
                  {item.renderVisual()}
                </div>

                {/* Bottom Spec Details */}
                <div className="space-y-2">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 block">
                    {item.category}
                  </span>
                  <h3 className="font-heading font-black text-2xl text-white group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-400 line-clamp-1">
                    {item.material}
                  </p>

                  <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between font-mono">
                    <div>
                      <span className="text-[10px] text-zinc-500 block">Estimasi Satuan</span>
                      <span className="text-sm font-bold text-white">{item.priceEstimate}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-zinc-500 block">Lead Time</span>
                      <span className="text-xs text-cyan-400">{item.leadTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Progress Bar Line */}
        <div className="max-w-7xl w-full mx-auto px-6 z-10 select-none">
          <div className="w-full h-[2px] bg-zinc-900 rounded-full overflow-hidden">
            <motion.div
              style={{ scaleX: scrollYProgress, transformOrigin: '0%' }}
              className="w-full h-full bg-cyan-400"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
