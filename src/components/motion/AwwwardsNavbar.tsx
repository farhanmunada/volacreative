'use client';

import React from 'react';
import { MagneticButton } from './MagneticButton';
import { Sparkles, MessageCircle, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/constants';

export const AwwwardsNavbar: React.FC = () => {
  return (
    <header className="fixed top-5 left-0 right-0 z-40 w-full px-4 sm:px-8 pointer-events-none flex justify-center">
      <div className="w-full max-w-5xl rounded-2xl bg-white border-[2.5px] border-black shadow-[4px_4px_0px_0px_#000] px-6 py-3.5 flex items-center justify-between pointer-events-auto">
        {/* Brand */}
        <a href="#" className="flex items-center space-x-3 group select-none">
          <div className="w-8 h-8 rounded-lg bg-[#a3e635] border-2 border-black flex items-center justify-center text-black font-black text-sm shadow-[2px_2px_0px_#000]">
            V
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-black text-base text-black tracking-tight">
              VOLA<span className="text-[#8b5cf6]">.CREATIVE</span>
            </span>
          </div>
        </a>

        {/* Navigation items */}
        <nav className="hidden md:flex items-center space-x-8 text-xs font-mono font-black uppercase tracking-wider text-black">
          <a href="#carousel-3d" className="hover:bg-[#facc15] px-2 py-1 rounded transition-colors">
            // 3D Orbit
          </a>
          <a href="#horizontal-rig" className="hover:bg-[#facc15] px-2 py-1 rounded transition-colors">
            // Showroom Rail
          </a>
          <a href="#contact" className="hover:bg-[#facc15] px-2 py-1 rounded transition-colors">
            // Form RFQ
          </a>
        </nav>

        {/* CTA */}
        <MagneticButton href={`https://wa.me/${COMPANY_INFO.phoneRaw}`} cursorText="CHAT">
          <div className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-black text-white font-mono text-xs font-black tracking-wider border-2 border-black hover:bg-[#a3e635] hover:text-black transition-colors shadow-[2px_2px_0px_0px_#000]">
            <MessageCircle className="w-3.5 h-3.5" />
            <span>KONSULTASI</span>
          </div>
        </MagneticButton>
      </div>
    </header>
  );
};
