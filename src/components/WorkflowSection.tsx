'use client';

import React from 'react';
import { WORKFLOW_STEPS } from '@/lib/constants';
import { MessageSquareText, Box, Cog, Truck, ArrowRight } from 'lucide-react';

const stepIcons = [MessageSquareText, Box, Cog, Truck];

export const WorkflowSection: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-950/40 border-y border-white/[0.06]" id="alur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 px-3.5 py-1.5 rounded-full">
            PIPELINE PRODUKSI EKSEKUTIF
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-white mt-4 tracking-tight">
            Alur Pengerjaan 4 Fase Tanpa Deviasi
          </h2>
          <p className="text-slate-400 mt-3 text-sm sm:text-base leading-relaxed">
            Sistem pengawasan berantai memastikan akurasi visual, presisi warna sablon (Pantone matching), dan ketepatan waktu pengiriman.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WORKFLOW_STEPS.map((step, idx) => {
            const Icon = stepIcons[idx] || MessageSquareText;
            return (
              <div
                key={step.step}
                className="relative rounded-3xl p-7 border border-white/[0.08] bg-slate-950/70 backdrop-blur-xl flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300 group"
              >
                {/* Step Top Bar */}
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.06] border border-white/[0.08] text-purple-400 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-all duration-200">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-heading font-black text-4xl text-slate-800 group-hover:text-purple-400 transition-colors">
                    {step.step}
                  </span>
                </div>

                <div>
                  <h3 className="font-heading text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Sub Metadata Tag */}
                <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-slate-500">
                  <span>FASE {step.step} DARI 04</span>
                  <span className="w-2 h-2 rounded-full bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
