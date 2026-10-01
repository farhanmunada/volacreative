'use client';

import React, { useState } from 'react';
import { EventCategory, ProductItem } from '@/types';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { CatalogSection } from '@/components/CatalogSection';
import { WorkflowSection } from '@/components/WorkflowSection';
import { QuoteCalculator } from '@/components/QuoteCalculator';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState<EventCategory>('concert');
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  const handleSelectItem = (item: ProductItem) => {
    setSelectedProduct(item);
    setActiveCategory(item.category);
    const el = document.getElementById('kalkulator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#030712] text-slate-100 selection:bg-purple-600 selection:text-white">
      <Navbar />

      <main className="flex-grow">
        <HeroSection
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />

        <CatalogSection onSelectItem={handleSelectItem} />

        <WorkflowSection />

        <QuoteCalculator
          selectedItem={selectedProduct}
          currentCategory={activeCategory}
        />
      </main>

      <Footer />
    </div>
  );
}
