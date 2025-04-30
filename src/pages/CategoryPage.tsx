
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
  const [categoryImage, setCategoryImage] = useState<string>('');
  const [categoryProducts, setCategoryProducts] = useState(featuredProducts);
  
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
      // Use imageUrl if available, otherwise use image property (backward compatibility)
      setCategoryImage(category.imageUrl || category.image || getCategoryDefaultImage(categoryName || ''));
    } else if (categoryName) {
      // Fallback: If we can't find the category in localStorage, use some defaults
      setCategoryImage(getCategoryDefaultImage(categoryName));
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
    
    // Filter products by category (in a real app, this would fetch from an API)
    // For now, we'll just display featured products as a placeholder but we could filter by category
    setCategoryProducts(featuredProducts);
    
  }, [categoryName, navigate]);
  
  // Helper function to get default category images
  const getCategoryDefaultImage = (category: string): string => {
    switch(category) {
      case 'perfumes': 
        return 'https://images.unsplash.com/photo-1588776779670-8693f067097c?q=80&w=800&auto=format&fit=crop';
      case 'electronics': 
        return 'https://images.unsplash.com/photo-1603539444875-76e7684265f6?q=80&w=800&auto=format&fit=crop';
      case 'fashion': 
        return 'https://images.unsplash.com/photo-1610652492500-ded49ceeb378?q=80&w=800&auto=format&fit=crop';
      case 'home': 
        return 'https://images.unsplash.com/photo-1558317378-76842e43017c?q=80&w=800&auto=format&fit=crop';
      case 'beauty': 
        return 'https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=800&auto=format&fit=crop';
      default: 
        return 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop';
    }
  };
  
  if (!categoryDisplayName) {
    return null; // Or a loading indicator
  }
  
  return (
    <div dir="rtl" className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Category banner with improved styling */}
        <div className="mb-8 relative h-48 md:h-64 overflow-hidden rounded-lg shadow-lg">
          <img 
            src={categoryImage} 
            alt={categoryDisplayName}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white">{categoryDisplayName}</h1>
          </div>
        </div>
        
        <ProductSection 
          title={`منتجات ${categoryDisplayName}`}
          products={categoryProducts}
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default CategoryPage;
