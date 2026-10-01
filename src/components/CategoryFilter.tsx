'use client';

import React from 'react';
import { Building2, Music, GraduationCap, Trophy, CheckCircle2 } from 'lucide-react';
import { EventCategory } from '@/types';
import { EVENT_CATEGORIES } from '@/lib/constants';

interface CategoryFilterProps {
  activeCategory: EventCategory;
  onSelectCategory: (category: EventCategory) => void;
}

const iconMap = {
  Building2,
  Music,
  GraduationCap,
  Trophy,
};

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  activeCategory,
  onSelectCategory,
}) => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {EVENT_CATEGORIES.map((cat) => {
          const Icon = iconMap[cat.icon as keyof typeof iconMap] || Building2;
          const isActive = activeCategory === cat.id;

          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => onSelectCategory(cat.id)}
              className={`relative p-5 rounded-2xl text-left transition-all duration-300 cursor-pointer overflow-hidden group ${
                isActive
                  ? 'bg-slate-900/90 border border-purple-500 shadow-[0_0_30px_rgba(139,92,246,0.35)] scale-[1.02]'
                  : 'bg-slate-950/40 border border-white/[0.08] hover:border-white/20 hover:bg-slate-900/60'
              }`}
            >
              {/* Active Ambient Glow behind Card */}
              {isActive && (
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/20 blur-2xl rounded-full pointer-events-none" />
              )}

              <div className="flex items-center justify-between mb-4">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                    isActive
                      ? 'bg-gradient-to-tr from-purple-600 to-indigo-500 text-white shadow-lg shadow-purple-600/50'
                      : 'bg-white/[0.06] text-slate-400 group-hover:text-white group-hover:bg-white/[0.1]'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>

                {isActive && (
                  <span className="flex items-center space-x-1 text-[10px] font-mono tracking-wider font-bold px-2 py-0.5 rounded-full bg-purple-500/20 border border-purple-400/40 text-purple-300">
                    <CheckCircle2 className="w-3 h-3 text-purple-400" />
                    <span>ACTIVE</span>
                  </span>
                )}
              </div>

              <div>
                <h3
                  className={`font-heading font-bold text-base sm:text-lg transition-colors ${
                    isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'
                  }`}
                >
                  {cat.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                  {cat.subtitle}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
