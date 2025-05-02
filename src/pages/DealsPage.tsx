
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { dailyDeals } from '@/data/products';
import { useNavigate } from 'react-router-dom';

// Define product category types
interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number | null;
  discountPercentage: number | null;
  image: string;
  isNew: boolean;
  rating: number;
  category?: string; // Add category property
}

const DealsPage: React.FC = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });
  
  // Add categories and active category state
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  
  // Enhanced deals with categories
  const dealsWithCategories: Product[] = [
    ...dailyDeals.map(product => ({
      ...product,
      category: getCategoryForProduct(product.id)
    })),
    // Additional products from duplicates but with categories
    ...dailyDeals.map(product => ({
      ...product,
      id: product.id + 100, // Ensure unique IDs for duplicates
      category: getCategoryForProduct(product.id)
    }))
  ];

  // Helper function to assign categories to products
  function getCategoryForProduct(id: number): string {
    // Distribute products across categories based on ID
    const productId = id > 100 ? id - 100 : id; // Handle duplicate IDs
    switch (productId % 5) {
      case 0: return "perfumes";
      case 1: return "electronics"; 
      case 2: return "fashion";
      case 3: return "beauty";
      case 4: return "home";
      default: return "other";
    }
  }
  
  // Filter products when active category changes
  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredProducts(dealsWithCategories);
    } else {
      const filtered = dealsWithCategories.filter(
        product => product.category === activeCategory
      );
      setFilteredProducts(filtered);
    }
  }, [activeCategory]);
  
  // Countdown timer
  useEffect(() => {
    const timer = setTimeout(() => {
      if (timeLeft.seconds > 0) {
        setTimeLeft({ ...timeLeft, seconds: timeLeft.seconds - 1 });
      } else if (timeLeft.minutes > 0) {
        setTimeLeft({
          ...timeLeft,
          minutes: timeLeft.minutes - 1,
          seconds: 59
        });
      } else if (timeLeft.hours > 0) {
        setTimeLeft({
          hours: timeLeft.hours - 1,
          minutes: 59,
          seconds: 59
        });
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  // Navigate to category page function
  const handleCategoryClick = (category: string) => {
    if (category === "all") {
      setActiveCategory("all");
    } else {
      setActiveCategory(category);
    }
  };

  return (
    <div dir="rtl" className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-grow">
        {/* Banner */}
        <section className="bg-gradient-to-r from-amber-50 to-yellow-100 py-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">عروض رافو المميزة</h1>
                <p className="text-lg text-gray-700">اكتشف أفضل العروض والخصومات اليومية</p>
              </div>
              
              {/* Countdown Timer */}
              <div className="bg-white shadow-md rounded-lg p-4">
                <h3 className="text-sm font-medium mb-2">ينتهي العرض في:</h3>
                <div className="flex space-x-2 rtl:space-x-reverse">
                  <div className="bg-black text-white rounded px-2 py-1 text-center min-w-[40px]">
                    <span className="text-lg font-bold">{timeLeft.hours.toString().padStart(2, '0')}</span>
                    <p className="text-xs">ساعة</p>
                  </div>
                  <div className="bg-black text-white rounded px-2 py-1 text-center min-w-[40px]">
                    <span className="text-lg font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</span>
                    <p className="text-xs">دقيقة</p>
                  </div>
                  <div className="bg-black text-white rounded px-2 py-1 text-center min-w-[40px]">
                    <span className="text-lg font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</span>
                    <p className="text-xs">ثانية</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* All Deals */}
        <section className="py-10">
          <div className="container mx-auto px-4">
            <h2 className="section-title text-center mb-8">جميع العروض</h2>
            
            {/* Filter Categories - now with functionality */}
            <div className="mb-8 flex flex-wrap gap-2 justify-center">
              <button 
                className={`px-4 py-2 rounded-full transition-colors ${activeCategory === "all" ? "bg-gold text-black font-medium" : "bg-gray-100 hover:bg-gray-200"}`} 
                onClick={() => handleCategoryClick("all")}
              >
                الكل
              </button>
              <button 
                className={`px-4 py-2 rounded-full transition-colors ${activeCategory === "electronics" ? "bg-gold text-black font-medium" : "bg-gray-100 hover:bg-gray-200"}`} 
                onClick={() => handleCategoryClick("electronics")}
              >
                الإلكترونيات
              </button>
              <button 
                className={`px-4 py-2 rounded-full transition-colors ${activeCategory === "fashion" ? "bg-gold text-black font-medium" : "bg-gray-100 hover:bg-gray-200"}`} 
                onClick={() => handleCategoryClick("fashion")}
              >
                الأزياء
              </button>
              <button 
                className={`px-4 py-2 rounded-full transition-colors ${activeCategory === "perfumes" ? "bg-gold text-black font-medium" : "bg-gray-100 hover:bg-gray-200"}`} 
                onClick={() => handleCategoryClick("perfumes")}
              >
                العطور
              </button>
              <button 
                className={`px-4 py-2 rounded-full transition-colors ${activeCategory === "home" ? "bg-gold text-black font-medium" : "bg-gray-100 hover:bg-gray-200"}`} 
                onClick={() => handleCategoryClick("home")}
              >
                المنزل
              </button>
              <button 
                className={`px-4 py-2 rounded-full transition-colors ${activeCategory === "beauty" ? "bg-gold text-black font-medium" : "bg-gray-100 hover:bg-gray-200"}`} 
                onClick={() => handleCategoryClick("beauty")}
              >
                العناية
              </button>
            </div>
            
            {/* Products Grid - now using filtered products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    originalPrice={product.originalPrice}
                    discountPercentage={product.discountPercentage}
                    image={product.image}
                    isNew={product.isNew}
                    rating={product.rating}
                  />
                ))
              ) : (
                <div className="col-span-full text-center py-10">
                  <p className="text-gray-500">لا توجد منتجات متاحة في هذه الفئة.</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default DealsPage;
