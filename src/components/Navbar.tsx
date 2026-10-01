'use client';

import React, { useState } from 'react';
import { Menu, X, Sparkles, MessageCircle, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/constants';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: '3D Showcase', href: '#motion-showcase' },
    { label: 'Kategori Acara', href: '#kategori' },
    { label: 'Bento Katalog', href: '#katalog' },
    { label: 'Alur Produksi', href: '#alur' },
    { label: 'Terminal Biaya', href: '#kalkulator' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full px-4 sm:px-6 lg:px-8 pt-4">
      <div className="max-w-7xl mx-auto h-16 rounded-2xl glass-panel px-6 flex items-center justify-between shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
        {/* Brand Logo */}
        <a href="#" className="flex items-center space-x-3 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-500 to-cyan-400 flex items-center justify-center text-white shadow-lg shadow-purple-600/40 group-hover:scale-105 transition-transform duration-200">
            <Sparkles className="w-5 h-5 animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-black text-xl tracking-tight text-white">
              Vola<span className="text-purple-400">.Creative</span>
            </span>
            <span className="text-[9px] tracking-widest uppercase font-mono text-cyan-400 -mt-0.5">
              Next-Gen Merch Lab
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium tracking-wide text-slate-300 hover:text-white transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Top Right Actions */}
        <div className="hidden lg:flex items-center space-x-3">
          <a
            href={`https://wa.me/${COMPANY_INFO.phoneRaw}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 text-white px-5 py-2 rounded-xl text-xs font-bold tracking-wide shadow-lg shadow-purple-600/30 hover:shadow-cyan-500/40 transition-all duration-300 cursor-pointer overflow-hidden"
          >
            <span className="relative z-10 flex items-center space-x-1.5">
              <span>Konsultasi Proyek</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Tutup menu' : 'Buka menu'}
          className="md:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/[0.08] transition-colors"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 mx-auto max-w-7xl rounded-2xl glass-panel p-5 space-y-3 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-slate-200 hover:text-purple-400"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`https://wa.me/${COMPANY_INFO.phoneRaw}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full mt-3 flex items-center justify-center space-x-2 bg-purple-600 text-white py-2.5 rounded-xl font-bold text-xs shadow-lg"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat WhatsApp Bisnis</span>
          </a>
        </div>
      )}
    </header>
  );
};
