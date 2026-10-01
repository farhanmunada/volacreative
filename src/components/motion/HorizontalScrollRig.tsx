'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, Check, Layers, Cpu } from 'lucide-react';
import { TShirtAsset, LanyardAsset, TumblerAsset, HardboxAsset } from './MerchAssets';

interface RigItem {
  id: string;
  tag: string;
  tagBg: string;
  title: string;
  category: string;
  material: string;
  leadTime: string;
  priceEstimate: string;
  renderVisual: () => React.ReactNode;
}

const RIG_ITEMS: RigItem[] = [
  {
    id: 'hoodie',
    tag: 'OUTERWEAR',
    tagBg: '#8b5cf6',
    title: 'Festival Heavyweight Hoodie',
    category: 'Premium Outerwear',
    material: 'Cotton Fleece 380gsm High-Density DTF',
    leadTime: '7-10 Hari',
    priceEstimate: 'Rp 165.000 /pcs',
    renderVisual: () => <TShirtAsset accent="#8b5cf6" />,
  },
  {
    id: 'wristband-set',
    tag: 'SECURITY',
    tagBg: '#06b6d4',
    title: 'RFID Pass & Lanyard Combo',
    category: 'Event Access & Security',
    material: 'Woven Wristband + Double-Side Tissue Strap',
    leadTime: '3-5 Hari',
    priceEstimate: 'Rp 28.000 /pcs',
    renderVisual: () => <LanyardAsset accent="#06b6d4" />,
  },
  {
    id: 'executive-tumbler',
    tag: 'B2B ESSENTIAL',
    tagBg: '#f97316',
    title: 'Powder Matte Thermal Tumbler',
    category: 'Corporate Drinkware',
    material: 'SUS 304 Vacuum Laser Engraved 600ml',
    leadTime: '4-7 Hari',
    priceEstimate: 'Rp 65.000 /pcs',
    renderVisual: () => <TumblerAsset accent="#f97316" />,
  },
  {
    id: 'hardbox-gift',
    tag: 'EXECUTIVE VIP',
    tagBg: '#a3e635',
    title: 'VIP Onboarding Rigid Box',
    category: 'Corporate Gift Set',
    material: 'Magnetic Box + Foil Gold + EVA Foam Cutout',
    leadTime: '7-10 Hari',
    priceEstimate: 'Rp 175.000 /pcs',
    renderVisual: () => <HardboxAsset accent="#a3e635" />,
  },
  {
    id: 'eco-tote',
    tag: 'SUSTAINABLE',
    tagBg: '#facc15',
    title: 'Eco Blacu Canvas Seminar Kit',
    category: 'Conference Package',
    material: 'Organic Cotton Canvas 12oz + Kraft Notebook',
    leadTime: '4-6 Hari',
    priceEstimate: 'Rp 45.000 /pcs',
    renderVisual: () => <TShirtAsset accent="#facc15" />,
  },
  {
    id: 'jersey-run',
    tag: 'ATHLETIC',
    tagBg: '#fb7185',
    title: 'Activewear Marathon Jersey',
    category: 'Sporting Event Apparel',
    material: 'Drifit Milano Quick-Dry Full Sublimation',
    leadTime: '7-10 Hari',
    priceEstimate: 'Rp 95.000 /pcs',
    renderVisual: () => <LanyardAsset accent="#fb7185" />,
  },
];

export const HorizontalScrollRig: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);

  // Scaled height: 200vh to avoid excessive empty scroll
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  const { scrollYProgress: enterProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'start start'],
  });

  // Entrance scale & opacity
  const enterScale = useTransform(enterProgress, [0, 1], [0.92, 1]);
  const enterOpacity = useTransform(enterProgress, [0, 0.7], [0.3, 1]);

  // Horizontal translation across the items
  const x = useTransform(scrollYProgress, [0, 1], ['2%', '-58%']);

  return (
    <section
      ref={targetRef}
      id="horizontal-rig"
      className="relative h-[200vh] bg-white text-black border-b-[3px] border-black"
    >
      {/* Sticky Viewport Track */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden py-8">
        
        {/* Section Header */}
        <motion.div
          style={{ opacity: enterOpacity, scale: enterScale }}
          className="max-w-7xl w-full mx-auto px-6 flex items-center justify-between z-10 select-none"
        >
          <div>
            <div className="inline-flex items-center space-x-2 border-2 border-black bg-[#facc15] px-3 py-1 rounded-md text-xs font-mono font-black mb-2 shadow-[2px_2px_0px_#000]">
              <Cpu className="w-3.5 h-3.5 text-black" />
              <span>[02 // HORIZONTAL SCROLL RIG]</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl text-black">
              Showroom Horizontal Rail
            </h2>
          </div>

          <div className="hidden sm:flex items-center space-x-2 text-xs font-mono font-bold text-black border-2 border-black bg-white px-3 py-1.5 shadow-[3px_3px_0px_#000]">
            <span>GESER HORIZONTAL SAAT SCROLL VERTICAL</span>
            <ArrowRight className="w-4 h-4 text-black" />
          </div>
        </motion.div>

        {/* Horizontal Motion Track with Entrance animation */}
        <motion.div
          style={{ opacity: enterOpacity, scale: enterScale }}
          className="w-full flex items-center overflow-visible my-auto"
        >
          <motion.div
            style={{ x }}
            className="flex items-center space-x-6 px-6 select-none"
          >
            {RIG_ITEMS.map((item, idx) => (
              <div
                key={item.id}
                data-cursor="EXPAND"
                className="relative flex-shrink-0 w-[320px] sm:w-[380px] aspect-[4/5] rounded-2xl p-6 bg-white border-[3px] border-black shadow-[6px_6px_0px_0px_#000] hover:shadow-[10px_10px_0px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between group cursor-pointer"
              >
                {/* Top Meta Bar */}
                <div className="flex items-center justify-between">
                  <span
                    className="font-mono text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-md border-2 border-black text-black"
                    style={{ backgroundColor: item.tagBg }}
                  >
                    {item.tag}
                  </span>
                  <span className="font-mono text-xs font-black text-black">
                    // 0{idx + 1}
                  </span>
                </div>

                {/* 3D Visual Asset Illustration */}
                <div className="w-full flex-grow flex items-center justify-center p-3 group-hover:scale-105 transition-transform duration-300">
                  {item.renderVisual()}
                </div>

                {/* Bottom Spec Details */}
                <div className="pt-3 border-t-2 border-black">
                  <span className="font-mono text-[9px] uppercase font-bold text-zinc-500 tracking-wider block">
                    {item.category}
                  </span>
                  <h3 className="font-heading font-black text-xl text-black group-hover:text-[#8b5cf6] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-600 line-clamp-1 mt-0.5">
                    {item.material}
                  </p>

                  <div className="mt-3 pt-2.5 border-t border-black/20 flex items-center justify-between font-mono">
                    <div>
                      <span className="text-[9px] text-zinc-500 font-bold block">Estimasi</span>
                      <span className="text-sm font-black text-black">{item.priceEstimate}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[9px] text-zinc-500 font-bold block">Lead Time</span>
                      <span className="text-xs font-black bg-[#a3e635] px-1.5 py-0.5 border border-black">
                        {item.leadTime}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Progress Bar Line */}
        <div className="max-w-7xl w-full mx-auto px-6 z-10 select-none pb-2">
          <div className="w-full h-3 border-2 border-black bg-white rounded-full overflow-hidden p-0.5 shadow-[2px_2px_0px_#000]">
            <motion.div
              style={{ scaleX: scrollYProgress, transformOrigin: '0%' }}
              className="w-full h-full bg-[#facc15] rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
