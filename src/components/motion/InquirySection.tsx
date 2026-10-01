'use client';

import React, { useState } from 'react';
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
    <section id="contact" className="py-28 relative bg-black text-white overflow-hidden border-t border-white/[0.08]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-purple-600/15 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-6 text-center select-none">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-zinc-400 text-xs font-mono mb-6">
          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          <span>MULAI PRODUKSI KUSTOM ANDA</span>
        </div>

        <h2 className="font-heading font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white mb-6">
          Siap Mewujudkan Merchandise Acara Impian?
        </h2>

        <p className="text-zinc-400 text-sm sm:text-lg max-w-2xl mx-auto mb-12 font-sans">
          Konsultasikan konsep acara Anda, dapatkan sampel 3D gratis, dan biarkan tim produksi kami menangani detail hingga hari H.
        </p>

        {/* Minimal Terminal RFQ Form */}
        <form onSubmit={handleSendWA} className="max-w-2xl mx-auto rounded-3xl p-6 sm:p-8 bg-zinc-950/80 border border-white/10 backdrop-blur-2xl shadow-2xl text-left space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-mono text-[10px] text-zinc-400 uppercase tracking-widest mb-1.5">
                Nama Lengkap
              </label>
              <input
                type="text"
                placeholder="Rian Anggara"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs font-mono focus:border-purple-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block font-mono text-[10px] text-zinc-400 uppercase tracking-widest mb-1.5">
                Nama Acara / Brand
              </label>
              <input
                type="text"
                placeholder="Soundfest 2026 / PT Nusantara"
                value={event}
                onChange={(e) => setEvent(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs font-mono focus:border-purple-400 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block font-mono text-[10px] text-zinc-400 uppercase tracking-widest mb-1.5">
              Estimasi Kuantitas (Pcs)
            </label>
            <input
              type="number"
              min="30"
              max="5000"
              value={qty}
              onChange={(e) => setQty(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs font-mono focus:border-purple-400 focus:outline-none"
            />
          </div>

          <div className="pt-2">
            <MagneticButton className="w-full" cursorText="SUBMIT">
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 text-black font-mono font-bold text-xs uppercase tracking-widest hover:opacity-95 transition-opacity flex items-center justify-center space-x-2 shadow-[0_0_30px_rgba(168,85,247,0.4)]"
              >
                <MessageCircle className="w-4 h-4 text-black" />
                <span>Kirim Permintaan ke WhatsApp Bisnis</span>
                <ArrowUpRight className="w-4 h-4 text-black" />
              </button>
            </MagneticButton>
          </div>
        </form>

        <div className="mt-8 flex items-center justify-center space-x-6 text-xs font-mono text-zinc-500">
          <span className="flex items-center space-x-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Garansi Tepat Waktu</span>
          </span>
          <span className="flex items-center space-x-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Gratis Digital Proof 3D</span>
          </span>
        </div>
      </div>
    </section>
  );
};
