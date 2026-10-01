import React from 'react';
import { Sparkles, Phone, Mail, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-12 border-t border-white/[0.08] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/[0.06]">
          {/* Brand */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-purple-600/30">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="font-heading font-black text-2xl text-white tracking-tight">
                Vola<span className="text-purple-400">.Creative</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Laboratorium pengadaan merchandise acara dan korporat generasi baru. Menggabungkan visualisasi kinetik 3D 60fps dengan standar mutu manufaktur eksekutif.
            </p>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider">
              NAVIGASI
            </h4>
            <ul className="space-y-2 text-xs font-mono text-slate-400">
              <li>
                <a href="#motion-showcase" className="hover:text-purple-400 transition-colors">
                  // 3D SHOWCASE
                </a>
              </li>
              <li>
                <a href="#kategori" className="hover:text-purple-400 transition-colors">
                  // KATEGORI
                </a>
              </li>
              <li>
                <a href="#katalog" className="hover:text-purple-400 transition-colors">
                  // BENTO KATALOG
                </a>
              </li>
              <li>
                <a href="#alur" className="hover:text-purple-400 transition-colors">
                  // PIPELINE
                </a>
              </li>
              <li>
                <a href="#kalkulator" className="hover:text-purple-400 transition-colors">
                  // TERMINAL RFQ
                </a>
              </li>
            </ul>
          </div>

          {/* Collections */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider">
              DIVISI PRODUKSI
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>Executive Onboarding Kit</li>
              <li>RFID Pass & Festival Woven Band</li>
              <li>Heavyweight 24s/16s Event Apparel</li>
              <li>Organic Blacu Canvas Seminar Set</li>
              <li>SUS 304 Powder Vacuum Tumbler</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider">
              HUBUNGI KONSULTAN
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <a
                  href={`https://wa.me/${COMPANY_INFO.phoneRaw}`}
                  className="hover:text-white transition-colors"
                >
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Clock className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>{COMPANY_INFO.operatingHours}</span>
              </div>
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.city}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono gap-4">
          <p>© {new Date().getFullYear()} VOLA CREATIVE INDONESIA. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-6">
            <span>HORIZONX / AWWWARDS TIER ARCHITECTURE</span>
            <span>REMOTION 60FPS ENGINE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
