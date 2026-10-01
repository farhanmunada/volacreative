'use client';

import React, { useState, useEffect } from 'react';
import { Calculator, MessageCircle, Send, CheckCircle2, Cpu, Zap, ArrowRight } from 'lucide-react';
import { EventCategory, ProductItem, QuotationFormState } from '@/types';
import { CATALOG_PRODUCTS } from '@/lib/constants';
import { createWhatsAppUrl, formatRupiah } from '@/lib/whatsapp';

interface QuoteCalculatorProps {
  selectedItem?: ProductItem | null;
  currentCategory: EventCategory;
}

export const QuoteCalculator: React.FC<QuoteCalculatorProps> = ({
  selectedItem,
  currentCategory,
}) => {
  const [formData, setFormData] = useState<QuotationFormState>({
    fullName: '',
    organization: '',
    phone: '',
    eventType: currentCategory,
    quantity: 100,
    itemType: selectedItem ? selectedItem.name : 'Executive Onboarding Box',
    notes: '',
  });

  const [formError, setFormError] = useState<string | null>(null);

  useEffect(() => {
    if (selectedItem) {
      setFormData((prev) => ({
        ...prev,
        eventType: selectedItem.category,
        itemType: selectedItem.name,
        quantity: Math.max(prev.quantity, selectedItem.minOrder),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        eventType: currentCategory,
      }));
    }
  }, [selectedItem, currentCategory]);

  const activeProduct =
    CATALOG_PRODUCTS.find((p) => p.name === formData.itemType) ||
    CATALOG_PRODUCTS.find((p) => p.category === formData.eventType) ||
    CATALOG_PRODUCTS[0];

  let discountRate = 0;
  if (formData.quantity >= 500) discountRate = 0.15;
  else if (formData.quantity >= 300) discountRate = 0.10;
  else if (formData.quantity >= 100) discountRate = 0.05;

  const unitPrice = Math.round(activeProduct.basePrice * (1 - discountRate));
  const estimatedTotal = unitPrice * formData.quantity;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim()) {
      setFormError('Silakan masukkan nama lengkap penanggung jawab.');
      return;
    }
    if (!formData.organization.trim()) {
      setFormError('Silakan masukkan nama instansi atau acara.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 9) {
      setFormError('Silakan masukkan nomor WhatsApp yang valid.');
      return;
    }

    setFormError(null);
    const waUrl = createWhatsAppUrl(formData);
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-24 relative overflow-hidden" id="kalkulator">
      {/* Background Volumetric Glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-indigo-900/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/[0.08] bg-slate-950/80 backdrop-blur-2xl p-6 sm:p-10 lg:p-14 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            {/* Left: Terminal HUD & Financial Estimate */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div>
                <div className="inline-flex items-center space-x-2 bg-purple-950/60 border border-purple-500/30 px-3 py-1.5 rounded-full text-xs font-mono text-purple-300 mb-4">
                  <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                  <span>TERMINAL KALKULASI ESTIMASI</span>
                </div>

                <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Simulasi Anggaran & Permintaan Penawaran
                </h2>

                <p className="text-slate-400 mt-3 text-sm leading-relaxed">
                  Hitung proyeksi biaya secara transparan dengan tier diskon otomatis. Ajukan langsung ke WhatsApp representatif Vola untuk penyusunan proposal resmi dan pembuatan mockup 3D kustom.
                </p>
              </div>

              {/* Dynamic Readout Box */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] space-y-3 font-mono text-xs">
                <span className="text-[10px] uppercase tracking-widest text-slate-500 block">
                  PROYEKSI BIAYA PRODUKSI:
                </span>

                <div className="flex items-center justify-between py-2 border-b border-white/[0.06]">
                  <span className="text-slate-400">Item Terpilih</span>
                  <span className="text-white font-bold truncate max-w-[200px]">
                    {formData.itemType}
                  </span>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-white/[0.06]">
                  <span className="text-slate-400">Harga Satuan</span>
                  <span className="text-cyan-400 font-bold">
                    {formatRupiah(unitPrice)}
                    {discountRate > 0 && (
                      <span className="ml-2 text-[10px] bg-cyan-950 text-cyan-300 border border-cyan-500/30 px-1.5 py-0.5 rounded">
                        Hemat {discountRate * 100}%
                      </span>
                    )}
                  </span>
                </div>

                <div className="pt-2">
                  <span className="text-slate-400 block mb-1">Total Estimasi Proyek:</span>
                  <div className="text-3xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-200 to-cyan-300">
                    {formatRupiah(estimatedTotal)}
                  </div>
                  <span className="text-[10px] text-slate-500 block mt-1">
                    *Estimasi awal sebelum pajak & opsi pengiriman ekspres
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-2 text-xs text-slate-400 font-mono">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Konsultasi, sampel mockup, & approval 100% transparan.</span>
              </div>
            </div>

            {/* Right: Modern Cyber Form */}
            <div className="lg:col-span-7 bg-slate-900/50 rounded-2xl p-6 sm:p-8 border border-white/[0.08] backdrop-blur-xl">
              <h3 className="font-heading text-2xl font-bold text-white mb-2">
                Konfigurasi Permintaan (RFQ)
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm mb-6">
                Lengkapi rincian berikut untuk menerima penawaran resmi via WhatsApp dalam &lt; 15 menit.
              </p>

              {formError && (
                <div className="mb-5 p-3.5 bg-rose-950/60 border border-rose-500/40 text-rose-300 text-xs rounded-xl font-mono">
                  [ERROR]: {formError}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Nama PIC Acara"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/60 border border-white/[0.1] text-white text-xs sm:text-sm focus:border-purple-500 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Organization */}
                  <div>
                    <label className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                      Instansi / Event *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Nama Instansi / Perusahaan"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/60 border border-white/[0.1] text-white text-xs sm:text-sm focus:border-purple-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div>
                    <label className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                      Nomor WhatsApp Aktif *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="08xxxxxxxxxx"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/60 border border-white/[0.1] text-white text-xs sm:text-sm focus:border-purple-500 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Category */}
                  <div>
                    <label className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                      Klasifikasi Acara
                    </label>
                    <select
                      value={formData.eventType}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          eventType: e.target.value as EventCategory,
                        })
                      }
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/60 border border-white/[0.1] text-white text-xs sm:text-sm focus:border-purple-500 focus:outline-none transition-colors"
                    >
                      <option value="corporate">Korporat & Kantor</option>
                      <option value="concert">Konser & Festival</option>
                      <option value="seminar">Seminar & Konferensi</option>
                      <option value="sports">Olahraga & Komunitas</option>
                    </select>
                  </div>
                </div>

                {/* Slider */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                      Volume Pesanan:
                    </label>
                    <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-2.5 py-0.5 rounded-lg">
                      {formData.quantity} PCS
                    </span>
                  </div>
                  <input
                    type="range"
                    min="30"
                    max="1000"
                    step="10"
                    value={formData.quantity}
                    onChange={(e) =>
                      setFormData({ ...formData, quantity: parseInt(e.target.value, 10) })
                    }
                    className="w-full accent-cyan-400 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1">
                    <span>30 pcs (Min)</span>
                    <span>300 pcs (10% Off)</span>
                    <span>500+ pcs (15% Off)</span>
                    <span>1,000 pcs</span>
                  </div>
                </div>

                {/* Merchandise Choice */}
                <div>
                  <label className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                    Produk / Bundling
                  </label>
                  <select
                    value={formData.itemType}
                    onChange={(e) => setFormData({ ...formData, itemType: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/60 border border-white/[0.1] text-white text-xs sm:text-sm focus:border-purple-500 focus:outline-none transition-colors"
                  >
                    {CATALOG_PRODUCTS.map((prod) => (
                      <option key={prod.id} value={prod.name}>
                        {prod.name} ({formatRupiah(prod.basePrice)}/pcs)
                      </option>
                    ))}
                    <option value="Paket Kustom Khusus">Paket Kustom Khusus</option>
                  </select>
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                    Spesifikasi Tambahan / Tanggal Acara
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Contoh: Butuh estimasi sampel 3D tgl 12, jumlah 250 pcs dengan sablon gold."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-2 rounded-xl bg-slate-950/60 border border-white/[0.1] text-white text-xs sm:text-sm focus:border-purple-500 focus:outline-none transition-colors"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white py-3.5 px-6 rounded-xl font-bold text-sm shadow-[0_0_30px_rgba(139,92,246,0.35)] transition-all duration-300 active:scale-[0.99] cursor-pointer mt-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Kirim Data ke WhatsApp Resmi Vola Creative</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
