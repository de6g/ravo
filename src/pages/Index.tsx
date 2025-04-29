
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeaturedCarousel from '@/components/FeaturedCarousel';
import CategoryGrid from '@/components/CategoryGrid';
import DailyDeals from '@/components/DailyDeals';
import Banner from '@/components/Banner';
import Features from '@/components/Features';
import ProductSection from '@/components/ProductSection';
import { featuredProducts, newArrivals } from '@/data/products';

const Index: React.FC = () => {
  return (
    <div dir="rtl" className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Carousel */}
        <section className="mb-8">
          <FeaturedCarousel />
        </section>
        
        {/* Categories */}
        <CategoryGrid />
        
        {/* Daily Deals */}
        <DailyDeals />
        
        {/* Featured Products */}
        <ProductSection 
          title="منتجات مميزة"
          products={featuredProducts}
        />
        
        {/* Banner */}
        <Banner />
        
        {/* New Arrivals */}
        <ProductSection 
          title="وصل حديثًا"
          products={newArrivals}
          actionLink="#all-products"
          actionText="عرض جميع المنتجات"
        />
        
        {/* Features */}
        <Features />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
