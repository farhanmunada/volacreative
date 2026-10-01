'use client';

import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Clock, Layers } from 'lucide-react';
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
  return (
    <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden" id="motion-showcase">
      {/* Background Decorative Blobs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-purple-200/40 via-transparent to-transparent blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Copy & Actions */}
          <div className="lg:col-span-6 flex flex-col space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-purple-100/90 border border-purple-300 text-purple-900 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full w-fit mx-auto lg:mx-0 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-purple-600 animate-ping" />
              <span>Next-Gen Merch Production Hub</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.12]">
              Pengadaan Merchandise Acara{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-purple-600 to-[#EA580C]">
                Berkelas & Tepat Waktu.
              </span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              Ubah ide acara Anda menjadi merchandise premium yang berkesan. Visualisasikan dalam{' '}
              <strong className="text-slate-900 font-semibold">animasi gerak 60fps</strong> sebelum produksi,
              dapatkan sampel gratis, dan terima paket tepat di hari H tanpa drama.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#kalkulator"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-7 py-4 rounded-2xl font-bold text-base shadow-xl shadow-purple-600/30 hover:shadow-purple-600/40 transition-all duration-200 cursor-pointer"
              >
                <span>Hitung Estimasi Biaya</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#katalog"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-white hover:bg-purple-50 text-slate-800 border-2 border-purple-200 px-6 py-4 rounded-2xl font-bold text-base transition-all duration-200 cursor-pointer"
              >
                <Layers className="w-5 h-5 text-purple-600" />
                <span>Lihat Katalog Paket</span>
              </a>
            </div>

            {/* Micro Trust Indicators */}
            <div className="pt-4 grid grid-cols-3 gap-3 border-t border-purple-200/70">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="text-xs text-slate-700 font-medium">Garansi Sampel</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-purple-600 flex-shrink-0" />
                <span className="text-xs text-slate-700 font-medium">99.4% On-Time</span>
              </div>
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-orange-600 flex-shrink-0" />
                <span className="text-xs text-slate-700 font-medium">Kualitas Ekspor</span>
              </div>
            </div>
          </div>

          {/* Right Column: Remotion Motion Graphics Showcase */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center">
            <div className="w-full flex flex-col items-center">
              <RemotionPlayerCard activeCategory={activeCategory} />
              <p className="text-xs text-slate-500 mt-3 text-center">
                ✨ Animasi dirender langsung oleh Remotion Engine. Klik tab di bawah untuk melihat variasi produk!
              </p>
            </div>
          </div>
        </div>

        {/* Category Switcher Interactive Strip */}
        <div className="mt-14" id="kategori">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-sm uppercase font-bold tracking-widest text-purple-800">
              Pilih Jenis Acara Anda:
            </h2>
            <span className="text-xs text-slate-500">Preview otomatis berganti di atas</span>
          </div>
          <CategoryFilter
            activeCategory={activeCategory}
            onSelectCategory={onSelectCategory}
          />
        </div>
      </div>
    </section>
  );
};
