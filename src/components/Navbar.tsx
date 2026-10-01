'use client';

import React, { useState } from 'react';
import { Menu, X, Sparkles, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/constants';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Showcase Motion', href: '#motion-showcase' },
    { label: 'Kategori Acara', href: '#kategori' },
    { label: 'Katalog Bundling', href: '#katalog' },
    { label: 'Alur Kerja', href: '#alur' },
    { label: 'Kalkulator Biaya', href: '#kalkulator' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-[#FAF5FF]/85 border-b border-[#DDD6FE]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center space-x-3 group">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#7C3AED] to-[#A78BFA] flex items-center justify-center text-white shadow-lg shadow-purple-600/30 group-hover:scale-105 transition-transform duration-200">
            <Sparkles className="w-6 h-6 animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-black text-2xl tracking-tight text-[#0F172A]">
              Vola<span className="text-[#7C3AED]">.Creative</span>
            </span>
            <span className="text-[10px] tracking-widest uppercase font-semibold text-[#475569] -mt-1">
              Merchandise & Event Kit
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#475569] hover:text-[#7C3AED] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center space-x-4">
          <a
            href={`https://wa.me/${COMPANY_INFO.phoneRaw}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-[#EA580C] hover:bg-[#C2410C] text-white px-5 py-2.5 rounded-full font-semibold text-sm shadow-md shadow-orange-600/20 hover:shadow-orange-600/30 transition-all duration-200 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat WhatsApp</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Tutup menu' : 'Buka menu'}
          className="md:hidden p-2 rounded-xl text-slate-700 hover:bg-purple-100 transition-colors"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF5FF] border-b border-[#DDD6FE] px-4 pt-3 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-semibold text-slate-800 hover:text-[#7C3AED]"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`https://wa.me/${COMPANY_INFO.phoneRaw}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full mt-4 flex items-center justify-center space-x-2 bg-[#EA580C] text-white py-3 rounded-xl font-bold shadow-md"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Chat Tim Penjualan</span>
          </a>
        </div>
      )}
    </header>
  );
};
