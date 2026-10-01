'use client';

import React, { useState, useEffect } from 'react';
import { Calculator, MessageCircle, Send, CheckCircle, HelpCircle } from 'lucide-react';
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
    itemType: selectedItem ? selectedItem.name : 'Paket Rekomendasi Vola',
    notes: '',
  });

  const [formError, setFormError] = useState<string | null>(null);

  // Sync category or selected product if changed from outside
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

  // Determine estimated base unit price
  const activeProduct =
    CATALOG_PRODUCTS.find((p) => p.name === formData.itemType) ||
    CATALOG_PRODUCTS.find((p) => p.category === formData.eventType) ||
    CATALOG_PRODUCTS[0];

  // Volume discount calculation: 100+ pcs -> 5% off, 300+ pcs -> 10% off, 500+ pcs -> 15% off
  let discountRate = 0;
  if (formData.quantity >= 500) discountRate = 0.15;
  else if (formData.quantity >= 300) discountRate = 0.10;
  else if (formData.quantity >= 100) discountRate = 0.05;

  const unitPrice = Math.round(activeProduct.basePrice * (1 - discountRate));
  const estimatedTotal = unitPrice * formData.quantity;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim()) {
      setFormError('Silakan masukkan nama lengkap Anda.');
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
    <section className="py-20 bg-white" id="kalkulator">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-purple-950 via-slate-900 to-purple-950 rounded-3xl p-6 sm:p-10 lg:p-14 text-white shadow-2xl border border-purple-500/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            {/* Left: Heading & Interactive Price Calculation */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div>
                <div className="inline-flex items-center space-x-2 bg-purple-600/40 text-purple-200 text-xs font-bold px-3 py-1.5 rounded-full mb-3 border border-purple-400/30">
                  <Calculator className="w-4 h-4 text-purple-300" />
                  <span>Kalkulator Estimasi Biaya</span>
                </div>

                <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Rencanakan Anggaran Acara Secara Transparan
                </h2>

                <p className="text-purple-200/80 mt-3 text-sm leading-relaxed">
                  Dapatkan simulasi biaya instan dengan diskon kuantitas bertingkat. Kirim rincian ini langsung ke tim konsultan kami di WhatsApp untuk penawaran resmi dan pembuatan sampel mockup.
                </p>
              </div>

              {/* Dynamic Price Breakdown Card */}
              <div className="bg-slate-900/90 rounded-2xl p-6 border border-purple-400/20 backdrop-blur-md">
                <span className="text-xs font-semibold text-purple-300 uppercase tracking-wider block mb-2">
                  Simulasi Estimasi Biaya:
                </span>

                <div className="flex items-baseline justify-between py-2 border-b border-slate-800">
                  <span className="text-sm text-slate-300">Item Terpilih</span>
                  <span className="text-sm font-semibold text-white truncate max-w-[200px]">
                    {formData.itemType}
                  </span>
                </div>

                <div className="flex items-baseline justify-between py-2 border-b border-slate-800">
                  <span className="text-sm text-slate-300">Estimasi / Pcs</span>
                  <span className="text-sm font-semibold text-emerald-400">
                    {formatRupiah(unitPrice)}
                    {discountRate > 0 && (
                      <span className="ml-2 text-[10px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded">
                        Hemat {discountRate * 100}%
                      </span>
                    )}
                  </span>
                </div>

                <div className="flex items-baseline justify-between pt-4 mt-2">
                  <span className="text-base font-bold text-white">Total Estimasi:</span>
                  <div className="text-right">
                    <span className="text-2xl sm:text-3xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
                      {formatRupiah(estimatedTotal)}
                    </span>
                    <span className="text-[11px] text-slate-400 block">*Belum termasuk ongkos kirim</span>
                  </div>
                </div>
              </div>

              <div className="text-xs text-purple-300/70 flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Konsultasi & Mockup Digital Gratis 100% tanpa ikatan.</span>
              </div>
            </div>

            {/* Right: RFQ Form */}
            <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 text-slate-900 shadow-xl">
              <h3 className="font-heading text-2xl font-bold text-slate-900 mb-2">
                Formulir Permintaan Penawaran (RFQ)
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm mb-6">
                Isi data singkat berikut untuk langsung tersambung dengan tim konsultan Vola Creative.
              </p>

              {formError && (
                <div className="mb-5 p-3.5 bg-rose-50 border border-rose-200 text-rose-700 text-xs sm:text-sm rounded-xl font-medium">
                  {formError}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Rian Anggara"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-purple-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-200 outline-none text-sm transition-all"
                    />
                  </div>

                  {/* Organization */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Instansi / Nama Acara *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Soundfest 2026 / PT Nusantara"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-purple-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-200 outline-none text-sm transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* WhatsApp */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Nomor WhatsApp Aktif *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Contoh: 08123456789"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-purple-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-200 outline-none text-sm transition-all"
                    />
                  </div>

                  {/* Event Type */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Kategori Acara
                    </label>
                    <select
                      value={formData.eventType}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          eventType: e.target.value as EventCategory,
                        })
                      }
                      className="w-full px-4 py-2.5 rounded-xl border border-purple-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-200 outline-none text-sm transition-all bg-white"
                    >
                      <option value="corporate">🏢 Korporat & Kantor</option>
                      <option value="concert">🎸 Konser & Festival</option>
                      <option value="seminar">🎓 Seminar & Konferensi</option>
                      <option value="sports">🏆 Olahraga & Komunitas</option>
                    </select>
                  </div>
                </div>

                {/* Quantity Slider & Input */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Estimasi Kuantitas:
                    </label>
                    <span className="text-sm font-black text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-lg border border-purple-200">
                      {formData.quantity} Pcs
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
                    className="w-full accent-purple-700 cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-slate-600 mt-1">
                    <span>Min. 30 pcs</span>
                    <span>300 pcs (Diskon 10%)</span>
                    <span>500+ pcs (Diskon 15%)</span>
                    <span>1,000 pcs</span>
                  </div>
                </div>

                {/* Product Choice */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Item Merchandise yang Diinginkan
                  </label>
                  <select
                    value={formData.itemType}
                    onChange={(e) => setFormData({ ...formData, itemType: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-purple-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-200 outline-none text-sm transition-all bg-white"
                  >
                    {CATALOG_PRODUCTS.map((prod) => (
                      <option key={prod.id} value={prod.name}>
                        {prod.name} (Mulai {formatRupiah(prod.basePrice)})
                      </option>
                    ))}
                    <option value="Paket Custom Custom Campuran">
                      Lainnya / Paket Campuran Kustom
                    </option>
                  </select>
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Catatan Khusus (Deadline / Desain)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Contoh: Butuh dikirim sebelum tanggal 20 bulan depan, butuh mockup dengan logo kami."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-2 rounded-xl border border-purple-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-200 outline-none text-sm transition-all"
                  />
                </div>

                {/* Submit to WhatsApp */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center space-x-2.5 bg-[#EA580C] hover:bg-[#C2410C] text-white py-3.5 px-6 rounded-xl font-bold text-base shadow-lg shadow-orange-600/30 hover:shadow-orange-600/40 transition-all duration-200 active:scale-[0.99] cursor-pointer mt-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Dapatkan Estimasi & Chat WhatsApp</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
