'use client';

import React from 'react';
import { MagneticButton } from './MagneticButton';
import { Sparkles, MessageCircle, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/constants';

export const AwwwardsNavbar: React.FC = () => {
  return (
    <header className="fixed top-6 left-0 right-0 z-40 w-full px-4 sm:px-8 pointer-events-none flex justify-center">
      <div className="w-full max-w-5xl rounded-full bg-zinc-950/80 border border-white/10 backdrop-blur-2xl px-6 py-3.5 flex items-center justify-between shadow-[0_10px_40px_rgba(0,0,0,0.8)] pointer-events-auto">
        {/* Brand */}
        <a href="#" className="flex items-center space-x-3 group select-none">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-cyan-400 flex items-center justify-center text-black font-black text-xs shadow-[0_0_15px_rgba(168,85,247,0.5)]">
            V
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-black text-sm text-white tracking-tight">
              VOLA<span className="text-purple-400">.CREATIVE</span>
            </span>
          </div>
        </a>

        {/* Navigation items */}
        <nav className="hidden md:flex items-center space-x-8 text-[11px] font-mono uppercase tracking-widest text-zinc-400">
          <a href="#carousel-3d" className="hover:text-white transition-colors">
            // 3D Orbit
          </a>
          <a href="#horizontal-rig" className="hover:text-white transition-colors">
            // Showroom Rail
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            // Inquire
          </a>
        </nav>

        {/* CTA */}
        <MagneticButton href={`https://wa.me/${COMPANY_INFO.phoneRaw}`} cursorText="CHAT">
          <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white text-black font-mono text-[11px] font-bold tracking-wider hover:bg-zinc-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            <MessageCircle className="w-3.5 h-3.5" />
            <span>KONSULTASI</span>
          </div>
        </MagneticButton>
      </div>
    </header>
  );
};
