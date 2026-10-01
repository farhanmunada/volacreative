import React from 'react';
import { WORKFLOW_STEPS } from '@/lib/constants';
import { MessageSquareText, Box, Cog, Truck } from 'lucide-react';

const stepIcons = [MessageSquareText, Box, Cog, Truck];

export const WorkflowSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#FAF5FF]" id="alur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-purple-700 uppercase tracking-widest bg-purple-100 px-3.5 py-1.5 rounded-full border border-purple-200">
            Proses Tanpa Hambatan
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 mt-3 tracking-tight">
            Bagaimana Vola Creative Bekerja Untuk Anda
          </h2>
          <p className="text-slate-600 mt-3 text-base sm:text-lg">
            Dari sketsa konsep hingga merchandise diterima di venue acara, kami menjaga setiap detail agar Anda fokus pada kesuksesan event.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WORKFLOW_STEPS.map((step, idx) => {
            const Icon = stepIcons[idx] || MessageSquareText;
            return (
              <div
                key={step.step}
                className="relative bg-white rounded-3xl p-7 border border-purple-200/90 shadow-sm hover:shadow-lg transition-all duration-200 flex flex-col justify-between group"
              >
                {/* Step Number Top Pill */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-colors duration-200">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-heading font-black text-3xl text-purple-300 group-hover:text-purple-600 transition-colors">
                    {step.step}
                  </span>
                </div>

                <div>
                  <h3 className="font-heading text-xl font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Sub Indicator */}
                <div className="mt-6 pt-4 border-t border-purple-100 flex items-center space-x-2 text-[11px] font-semibold text-purple-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                  <span>Langkah {idx + 1} dari 4</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
