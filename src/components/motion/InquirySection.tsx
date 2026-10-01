'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MagneticButton } from './MagneticButton';
import { MessageCircle, ArrowUpRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/constants';

export const InquirySection: React.FC = () => {
  const [name, setName] = useState('');
  const [event, setEvent] = useState('');
  const [qty, setQty] = useState('100');

  const handleSendWA = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Halo Vola Creative! Saya ingin konsultasi merchandise acara:\n- Nama: ${name || 'Klien'}\n- Acara: ${event || 'Event'}\n- Estimasi Kuantitas: ${qty} pcs\nMohon info katalog resmi dan penawaran biaya. Terima kasih!`
    );
    window.open(`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 relative bg-[#f8fafc] text-black overflow-hidden border-b-[3px] border-black">
      <div className="max-w-5xl mx-auto px-6 text-center select-none">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-lg border-2 border-black bg-[#facc15] text-black text-xs font-mono font-black mb-6 shadow-[3px_3px_0px_#000]">
            <Sparkles className="w-4 h-4 text-black animate-spin" />
            <span>[03 // MULAI PRODUKSI MASSAL]</span>
          </div>

          <h2 className="font-heading font-black text-4xl sm:text-6xl tracking-tight text-black mb-4">
            Wujudkan Merchandise Acara Anda
          </h2>

          <p className="text-zinc-600 text-base sm:text-lg max-w-2xl mx-auto mb-10 font-sans font-medium">
            Konsultasikan tema acara, dapatkan digital 3D proof gratis dalam 24 jam, dan terima pesanan tepat di venue acara.
          </p>
        </motion.div>

        {/* Neo-Brutalist RFQ Terminal */}
        <motion.form
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.15 }}
          onSubmit={handleSendWA}
          className="max-w-2xl mx-auto rounded-2xl p-6 sm:p-8 bg-white border-[3px] border-black shadow-[8px_8px_0px_0px_#000] text-left space-y-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-mono text-[11px] font-black text-black uppercase tracking-wider mb-1.5">
                Nama Lengkap PIC *
              </label>
              <input
                type="text"
                required
                placeholder="Rian Anggara"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-zinc-50 border-2 border-black text-black text-sm font-mono focus:bg-[#facc15]/20 focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block font-mono text-[11px] font-black text-black uppercase tracking-wider mb-1.5">
                Instansi / Nama Acara *
              </label>
              <input
                type="text"
                required
                placeholder="Soundfest 2026 / PT Nusantara"
                value={event}
                onChange={(e) => setEvent(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-zinc-50 border-2 border-black text-black text-sm font-mono focus:bg-[#facc15]/20 focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block font-mono text-[11px] font-black text-black uppercase tracking-wider mb-1.5">
              Estimasi Kuantitas (Pcs)
            </label>
            <input
              type="number"
              min="30"
              max="10000"
              value={qty}
              onChange={(e) => setQty(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-zinc-50 border-2 border-black text-black text-sm font-mono focus:bg-[#facc15]/20 focus:outline-none transition-colors"
            />
          </div>

          <div className="pt-2">
            <MagneticButton className="w-full" cursorText="KIRIM">
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#a3e635] text-black font-mono font-black text-xs uppercase tracking-wider border-2 border-black shadow-[4px_4px_0px_#000] hover:shadow-[6px_6px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1 transition-all flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-4 h-4 text-black" />
                <span>Kirim Permintaan ke WhatsApp Vola</span>
                <ArrowUpRight className="w-4 h-4 text-black" />
              </button>
            </MagneticButton>
          </div>
        </motion.form>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs font-mono font-bold text-black">
          <span className="flex items-center space-x-1.5 bg-white px-3 py-1 border border-black shadow-[2px_2px_0px_#000]">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>GARANSI KELAYAKAN TEPAT WAKTU</span>
          </span>
          <span className="flex items-center space-x-1.5 bg-white px-3 py-1 border border-black shadow-[2px_2px_0px_#000]">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>GRATIS 3D DIGITAL PROOFING</span>
          </span>
        </div>
      </div>
    </section>
  );
};
