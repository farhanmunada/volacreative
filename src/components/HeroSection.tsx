'use client';

import React from 'react';
import { ArrowRight, Layers, Sparkles, ShieldCheck, Zap, Box } from 'lucide-react';
import { EventCategory } from '@/types';
import { RemotionPlayerCard } from './RemotionPlayerCard';
import { CategoryFilter } from './CategoryFilter';

interface HeroSectionProps {
  activeCategory: EventCategory;
  onSelectCategory: (category: EventCategory) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  activeCategory,
  onSelectCategory,
}) => {
  const brandTicker = [
    'SOUNDFEST 2026',
    'INDONESIA TECH SUMMIT',
    'JAVA JAZZ EXPERIENCE',
    'GARUDA CYBER LEAGUE',
    'NUSANTARA INNOVATION FEST',
    'JAKARTA CREATIVE WEEK',
    'SUMMIT AI EXPO',
  ];

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden" id="motion-showcase">
      {/* Background Cyber Ambient Lights */}
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-40 right-1/4 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid: Headline & 3D Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Column */}
          <div className="lg:col-span-6 flex flex-col space-y-6 text-center lg:text-left">
            {/* Tag Badge */}
            <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-950/40 backdrop-blur-xl w-fit mx-auto lg:mx-0 shadow-[0_0_20px_rgba(139,92,246,0.2)]">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin" />
              <span className="font-mono text-xs uppercase tracking-widest text-purple-200">
                Next-Gen Event Merchandise Studio
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-4xl sm:text-6xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Arsitektur Merchandise Acara{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400">
                Presisi Tinggi & Berkarakter.
              </span>
            </h1>

            {/* Subcopy */}
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              Tinggalkan pengadaan konvensional yang kaku. Eksplorasi mockup merchandise dalam{' '}
              <strong className="text-white font-semibold">simulasi kinetik 3D 60fps</strong>, nikmati pengerjaan berstandar industri eksekutif, dan eksekusi acara tanpa kekhawatiran.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#kalkulator"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 text-white px-7 py-4 rounded-2xl font-bold text-sm shadow-[0_0_30px_rgba(139,92,246,0.35)] hover:shadow-[0_0_45px_rgba(6,182,212,0.45)] transition-all duration-300 cursor-pointer group"
              >
                <span>Konfigurasi Estimasi Biaya</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#katalog"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-slate-900/60 hover:bg-slate-800/80 text-slate-200 border border-white/10 hover:border-white/20 px-6 py-4 rounded-2xl font-bold text-sm backdrop-blur-xl transition-all duration-200 cursor-pointer"
              >
                <Layers className="w-4 h-4 text-purple-400" />
                <span>Eksplorasi Bento Katalog</span>
              </a>
            </div>

            {/* Cyber Stats Bar */}
            <div className="pt-6 grid grid-cols-3 gap-3 border-t border-white/[0.08]">
              <div className="bg-slate-950/40 border border-white/[0.06] p-3 rounded-2xl backdrop-blur-md">
                <div className="font-heading font-black text-xl text-white">50k+</div>
                <div className="text-[11px] font-mono text-slate-400">Pcs Terdistribusi</div>
              </div>
              <div className="bg-slate-950/40 border border-white/[0.06] p-3 rounded-2xl backdrop-blur-md">
                <div className="font-heading font-black text-xl text-cyan-400">99.4%</div>
                <div className="text-[11px] font-mono text-slate-400">On-Time SLA</div>
              </div>
              <div className="bg-slate-950/40 border border-white/[0.06] p-3 rounded-2xl backdrop-blur-md">
                <div className="font-heading font-black text-xl text-purple-400">100%</div>
                <div className="text-[11px] font-mono text-slate-400">Mockup Presisi</div>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Stage Visual */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center">
            <RemotionPlayerCard activeCategory={activeCategory} />
          </div>
        </div>

        {/* Category Switcher HUD */}
        <div className="mt-16" id="kategori">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
              <h2 className="text-xs font-mono uppercase tracking-widest text-slate-300">
                Pilih Parameter Acara:
              </h2>
            </div>
            <span className="text-xs font-mono text-slate-500">Render 3D menyesuaikan live</span>
          </div>

          <CategoryFilter
            activeCategory={activeCategory}
            onSelectCategory={onSelectCategory}
          />
        </div>
      </div>

      {/* Infinite Brand Ticker Strip */}
      <div className="mt-20 border-y border-white/[0.06] bg-slate-950/50 backdrop-blur-md py-4 overflow-hidden">
        <div className="animate-marquee flex items-center space-x-12">
          {brandTicker.concat(brandTicker).map((brand, idx) => (
            <div key={idx} className="flex items-center space-x-4 flex-shrink-0">
              <span className="text-xs font-mono font-bold tracking-widest text-slate-500 hover:text-purple-400 transition-colors">
                {brand}
              </span>
              <span className="text-slate-700 text-xs">•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
