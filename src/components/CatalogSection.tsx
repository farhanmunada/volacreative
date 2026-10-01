'use client';

import React, { useState } from 'react';
import { Clock, Check, ArrowUpRight, Sparkles, Box, ShieldAlert, Cpu } from 'lucide-react';
import { CATALOG_PRODUCTS } from '@/lib/constants';
import { formatRupiah } from '@/lib/whatsapp';
import { ProductItem } from '@/types';

interface CatalogSectionProps {
  onSelectItem: (item: ProductItem) => void;
}

export const CatalogSection: React.FC<CatalogSectionProps> = ({ onSelectItem }) => {
  const [filter, setFilter] = useState<string>('all');

  const filteredProducts =
    filter === 'all'
      ? CATALOG_PRODUCTS
      : CATALOG_PRODUCTS.filter((item) => item.category === filter);

  const filterTabs = [
    { id: 'all', label: 'Semua Koleksi' },
    { id: 'corporate', label: 'Korporat & VIP' },
    { id: 'concert', label: 'Konser & Festival' },
    { id: 'seminar', label: 'Seminar Kit' },
    { id: 'sports', label: 'Olahraga & Jersey' },
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="katalog">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-purple-900/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 bg-purple-950/60 border border-purple-500/30 px-3.5 py-1.5 rounded-full text-xs font-mono text-purple-300 mb-4">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>KATALOG BENTO MERCHANDISE</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-white tracking-tight">
            Katalog Paket & Solusi Produksi
          </h2>
          <p className="text-slate-400 mt-3 text-sm sm:text-base leading-relaxed">
            Diproduksi dengan bahan grade eksekutif, sablon plastisol high-density, dan grafir laser serat optik berakurasi milimeter.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2.5 mb-14">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setFilter(tab.id)}
              className={`px-5 py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                filter === tab.id
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-[0_0_20px_rgba(139,92,246,0.4)] border border-purple-400/50'
                  : 'bg-slate-950/50 text-slate-400 hover:text-white border border-white/[0.08] hover:border-white/20'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product, idx) => (
            <div
              key={product.id}
              className={`relative rounded-3xl p-7 border border-white/[0.08] bg-slate-950/60 backdrop-blur-xl flex flex-col justify-between hover:border-purple-500/50 hover:shadow-[0_0_35px_rgba(139,92,246,0.25)] transition-all duration-300 group ${
                idx === 0 ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              {/* Inner ambient shine on hover */}
              <div className="absolute top-0 right-0 w-44 h-44 bg-purple-600/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div>
                {/* Meta Badge Bar */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  {product.badge ? (
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-sm">
                      {product.badge}
                    </span>
                  ) : (
                    <span className="font-mono text-[10px] uppercase tracking-wider px-3 py-1 rounded-full bg-white/[0.06] text-slate-300 border border-white/[0.08]">
                      CUSTOM SPECS
                    </span>
                  )}

                  <div className="flex items-center space-x-1.5 text-slate-400 font-mono text-xs">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{product.leadTime}</span>
                  </div>
                </div>

                {/* Title & Tagline */}
                <h3 className="font-heading text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                  {product.name}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm mt-1.5 mb-6 leading-relaxed">
                  {product.tagline}
                </p>

                {/* Specs Box */}
                <div className="space-y-2 mb-6 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.05]">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block mb-1">
                    Komposisi & Material:
                  </span>
                  {product.highlightSpecs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-start space-x-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price & CTA Action */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">
                    Mulai Dari
                  </span>
                  <div className="text-xl font-heading font-black text-white">
                    {formatRupiah(product.basePrice)}
                    <span className="text-xs font-normal font-sans text-slate-400"> /pcs</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">Min. {product.minOrder} pcs</span>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectItem(product)}
                  className="inline-flex items-center space-x-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white px-4 py-2.5 rounded-xl font-bold text-xs tracking-wide shadow-lg shadow-purple-600/30 transition-all duration-200 active:scale-95 cursor-pointer"
                >
                  <span>Pilih Item</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
