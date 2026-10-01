'use client';

import React, { useState } from 'react';
import { Package, Clock, Shield, Sparkles, Check, ArrowUpRight } from 'lucide-react';
import { CATALOG_PRODUCTS } from '@/lib/constants';
import { formatRupiah } from '@/lib/whatsapp';
import { EventCategory, ProductItem } from '@/types';

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
    { id: 'all', label: 'Semua Kategori' },
    { id: 'corporate', label: 'Korporat' },
    { id: 'concert', label: 'Konser & Festival' },
    { id: 'seminar', label: 'Seminar Kit' },
    { id: 'sports', label: 'Olahraga' },
  ];

  return (
    <section className="py-20 bg-white border-y border-purple-100" id="katalog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-purple-50 text-purple-700 text-xs font-bold px-3.5 py-1.5 rounded-full mb-3 border border-purple-200">
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span>Katalog Pilihan Acara</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Paket Bundling & Merchandise Terbaik
          </h2>
          <p className="text-slate-600 mt-3 text-base sm:text-lg">
            Semua produk diproduksi dengan material teruji, teknik sablon/grafir mutakhir, dan kontrol kualitas ketat sebelum pengiriman.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setFilter(tab.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-150 cursor-pointer ${
                filter === tab.id
                  ? 'bg-purple-900 text-white shadow-md shadow-purple-900/20'
                  : 'bg-purple-50 text-slate-700 hover:bg-purple-100/80 border border-purple-200/60'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-[#FAF5FF]/70 rounded-3xl border border-purple-200 p-6 sm:p-7 flex flex-col justify-between hover:shadow-xl hover:border-purple-400 transition-all duration-200 group"
            >
              <div>
                {/* Badge & Lead Time */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  {product.badge ? (
                    <span className="bg-gradient-to-r from-purple-700 to-indigo-700 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-sm">
                      {product.badge}
                    </span>
                  ) : (
                    <span className="bg-purple-100 text-purple-800 text-[11px] font-bold px-3 py-1 rounded-full">
                      Custom Logo
                    </span>
                  )}
                  <div className="flex items-center space-x-1 text-slate-500 text-xs">
                    <Clock className="w-3.5 h-3.5 text-purple-600" />
                    <span>{product.leadTime}</span>
                  </div>
                </div>

                {/* Title & Tagline */}
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-purple-700 transition-colors">
                  {product.name}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm mt-1 mb-5">
                  {product.tagline}
                </p>

                {/* Specs List */}
                <div className="space-y-2.5 mb-6 bg-white/80 p-4 rounded-2xl border border-purple-100">
                  <span className="text-[11px] font-bold text-purple-900 uppercase tracking-wider block mb-1">
                    Spesifikasi Unggulan:
                  </span>
                  {product.highlightSpecs.map((spec, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs text-slate-700">
                      <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price & Action */}
              <div className="pt-4 border-t border-purple-200 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-slate-500 block">Mulai dari</span>
                  <div className="text-lg sm:text-xl font-black text-purple-950">
                    {formatRupiah(product.basePrice)}
                    <span className="text-xs font-normal text-slate-500"> /pcs</span>
                  </div>
                  <span className="text-[10px] text-slate-500">Min. {product.minOrder} pcs</span>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectItem(product)}
                  className="inline-flex items-center space-x-1.5 bg-[#EA580C] hover:bg-[#C2410C] text-white px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-md shadow-orange-600/20 transition-transform active:scale-95 cursor-pointer"
                >
                  <span>Pilih Item</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
