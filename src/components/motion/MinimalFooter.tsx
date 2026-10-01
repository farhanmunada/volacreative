import React from 'react';
import { COMPANY_INFO } from '@/lib/constants';

export const MinimalFooter: React.FC = () => {
  return (
    <footer className="bg-white text-black py-12 px-6 font-mono text-xs select-none">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-2">
          <span className="bg-black text-white px-2 py-0.5 font-black text-xs">VOLA</span>
          <span className="font-bold">CREATIVE INDONESIA • NEO-BRUTALIST EVENT MERCHANDISE</span>
        </div>
        <div className="flex items-center space-x-6 text-[11px] font-bold">
          <span>JAKARTA, ID</span>
          <a
            href={`https://wa.me/${COMPANY_INFO.phoneRaw}`}
            className="bg-[#facc15] px-2 py-0.5 border border-black shadow-[1px_1px_0px_#000] hover:bg-[#a3e635] transition-colors"
          >
            {COMPANY_INFO.phoneDisplay}
          </a>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
};
