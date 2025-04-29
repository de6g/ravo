
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductSection from '@/components/ProductSection';
import { featuredProducts } from '@/data/products';
import { useParams } from 'react-router-dom';

const CategoryPage: React.FC = () => {
  const { categoryName } = useParams();
  
  // Translate category slug to display name
  const getCategoryDisplayName = () => {
    switch(categoryName) {
      case 'perfumes': return 'العطور';
      case 'electronics': return 'الإلكترونيات';
      case 'fashion': return 'الأزياء';
      case 'home': return 'المنزل';
      case 'beauty': return 'العناية';
      default: return categoryName;
    }
  };
  
  // Filter products by category (in a real app, this would fetch from an API)
  // For now, we'll just display featured products as a placeholder
  
  return (
    <div dir="rtl" className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">{getCategoryDisplayName()}</h1>
        
        <ProductSection 
          title={`منتجات ${getCategoryDisplayName()}`}
          products={featuredProducts}
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default CategoryPage;
