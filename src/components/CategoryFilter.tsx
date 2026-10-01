'use client';

import React from 'react';
import { Building2, Music, GraduationCap, Trophy } from 'lucide-react';
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
              className={`p-4 sm:p-5 rounded-2xl text-left border-2 transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                isActive
                  ? 'bg-purple-900 text-white border-purple-500 shadow-xl shadow-purple-900/25 scale-[1.02]'
                  : 'bg-white text-slate-800 border-purple-200/80 hover:border-purple-400 hover:bg-purple-50/50'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    isActive ? 'bg-purple-600 text-white' : 'bg-purple-100 text-purple-700'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                {isActive && (
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-purple-700 text-purple-100">
                    Aktif
                  </span>
                )}
              </div>

              <div>
                <h3 className={`font-bold text-base sm:text-lg leading-snug ${isActive ? 'text-white' : 'text-slate-900'}`}>
                  {cat.title}
                </h3>
                <p className={`text-xs mt-1 line-clamp-2 ${isActive ? 'text-purple-200' : 'text-slate-500'}`}>
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
