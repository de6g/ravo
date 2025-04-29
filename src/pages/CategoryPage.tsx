
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductSection from '@/components/ProductSection';
import { featuredProducts } from '@/data/products';
import { useParams, useNavigate } from 'react-router-dom';
import { Category } from '@/components/CategoryGrid';

const CategoryPage: React.FC = () => {
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const [categoryDisplayName, setCategoryDisplayName] = useState<string>('');
  
  useEffect(() => {
    // Get categories from localStorage
    const savedCategories = localStorage.getItem('storeCategories');
    const categories: Category[] = savedCategories 
      ? JSON.parse(savedCategories) 
      : [];
    
    // Find the category that matches the URL parameter
    const category = categories.find(cat => {
      const urlPath = cat.link.split('/').pop(); // Get the last part of the URL
      return urlPath === categoryName;
    });
    
    if (category) {
      setCategoryDisplayName(category.name);
    } else if (categoryName) {
      // Fallback: If we can't find the category in localStorage, use some defaults
      switch(categoryName) {
        case 'perfumes': setCategoryDisplayName('العطور'); break;
        case 'electronics': setCategoryDisplayName('الإلكترونيات'); break;
        case 'fashion': setCategoryDisplayName('الأزياء'); break;
        case 'home': setCategoryDisplayName('المنزل'); break;
        case 'beauty': setCategoryDisplayName('العناية'); break;
        default: setCategoryDisplayName(categoryName || '');
      }
    } else {
      // If no category is found and no categoryName, redirect to home
      navigate('/');
    }
  }, [categoryName, navigate]);
  
  // Filter products by category (in a real app, this would fetch from an API)
  // For now, we'll just display featured products as a placeholder
  
  if (!categoryDisplayName) {
    return null; // Or a loading indicator
  }
  
  return (
    <div dir="rtl" className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">{categoryDisplayName}</h1>
        
        <ProductSection 
          title={`منتجات ${categoryDisplayName}`}
          products={featuredProducts}
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default CategoryPage;
