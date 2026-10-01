import React from 'react';
import { COMPANY_INFO } from '@/lib/constants';

export const MinimalFooter: React.FC = () => {
  return (
    <footer className="bg-black text-zinc-500 py-12 px-6 border-t border-zinc-900 font-mono text-xs select-none">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-zinc-300 font-bold">VOLA CREATIVE</span> • ARCHITECTURE OF KINETIC EVENT MERCHANDISE
        </div>
        <div className="flex items-center space-x-6 text-[11px]">
          <span>JAKARTA, INDONESIA</span>
          <a
            href={`https://wa.me/${COMPANY_INFO.phoneRaw}`}
            className="text-purple-400 hover:text-white transition-colors"
          >
            {COMPANY_INFO.phoneDisplay}
          </a>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
};
