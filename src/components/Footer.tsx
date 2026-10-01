import React from 'react';
import { Sparkles, Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-purple-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-purple-600 flex items-center justify-center text-white shadow-md shadow-purple-600/30">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="font-heading font-black text-2xl text-white tracking-tight">
                Vola<span className="text-purple-400">.Creative</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Spesialis pengadaan barang merchandise custom untuk korporat, konser musik, seminar, dan event skala nasional. Dipercaya dengan visualisasi kinetik 60fps dan jaminan tepat waktu.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#motion-showcase" className="hover:text-purple-400 transition-colors">
                  Showcase Motion
                </a>
              </li>
              <li>
                <a href="#kategori" className="hover:text-purple-400 transition-colors">
                  Kategori Acara
                </a>
              </li>
              <li>
                <a href="#katalog" className="hover:text-purple-400 transition-colors">
                  Katalog Bundling
                </a>
              </li>
              <li>
                <a href="#alur" className="hover:text-purple-400 transition-colors">
                  Alur Produksi
                </a>
              </li>
              <li>
                <a href="#kalkulator" className="hover:text-purple-400 transition-colors">
                  Kalkulator Biaya
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Solusi Acara
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Corporate Gift & Onboarding Set</li>
              <li>Festival Lanyard & RFID Pass</li>
              <li>Heavyweight Event Apparel & Kaos</li>
              <li>Eco Seminar Kit & Canvas Bag</li>
              <li>Laser Engraved Vacuum Tumbler</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Hubungi Kami
            </h4>
            <div className="space-y-2.5 text-sm text-slate-400">
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-purple-400 flex-shrink-0" />
                <a
                  href={`https://wa.me/${COMPANY_INFO.phoneRaw}`}
                  className="hover:text-white transition-colors"
                >
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-purple-400 flex-shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Clock className="w-4 h-4 text-purple-400 flex-shrink-0" />
                <span>{COMPANY_INFO.operatingHours}</span>
              </div>
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.city}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Vola Creative. Seluruh hak cipta dilindungi.</p>
          <div className="flex space-x-6">
            <span className="hover:text-slate-400">Next-Gen UI Motion via Remotion</span>
            <span className="hover:text-slate-400">Standar Mutu ISO 9001</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
