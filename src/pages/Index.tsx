import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeaturedCarousel from '@/components/FeaturedCarousel';
import CategoryGrid from '@/components/CategoryGrid';
import DailyDeals from '@/components/DailyDeals';
import ProductCard from '@/components/ProductCard';

// Sample featured products data
const featuredProducts = [
  {
    id: 5,
    name: "عطر توم فورد عود وود - 100 مل",
    price: 1599.99,
    originalPrice: null,
    discountPercentage: null,
    image: "https://images.unsplash.com/photo-1588776779670-8693f067097c?q=80&w=800&auto=format&fit=crop",
    isNew: true,
    rating: 4.8
  },
  {
    id: 6,
    name: "ساعة ابل الإصدار 9",
    price: 1899.99,
    originalPrice: null,
    discountPercentage: null,
    image: "https://images.unsplash.com/photo-1544117519-968d9ecf152e?q=80&w=800&auto=format&fit=crop",
    isNew: true,
    rating: 4.9
  },
  {
    id: 7,
    name: "حقيبة يد نسائية من الجلد الطبيعي",
    price: 799.99,
    originalPrice: null,
    discountPercentage: null,
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop",
    isNew: false,
    rating: 4.6
  },
  {
    id: 8,
    name: "سبيكر بلوتوث JBL مقاوم للماء",
    price: 499.99,
    originalPrice: 599.99,
    discountPercentage: 17,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=800&auto=format&fit=crop",
    isNew: false,
    rating: 4.7
  }
];

// Sample new arrivals data
const newArrivals = [
  {
    id: 9,
    name: "مجموعة عناية بالبشرة",
    price: 349.99,
    originalPrice: null,
    discountPercentage: null,
    image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=800&auto=format&fit=crop",
    isNew: true,
    rating: 4.5
  },
  {
    id: 10,
    name: "نظارة شمسية ريبان",
    price: 899.99,
    originalPrice: null,
    discountPercentage: null,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop",
    isNew: true,
    rating: 4.7
  },
  {
    id: 11,
    name: "سترة رجالية شتوية",
    price: 599.99,
    originalPrice: null,
    discountPercentage: null,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop",
    isNew: true,
    rating: 4.4
  },
  {
    id: 12,
    name: "مكنسة كهربائية ذكية",
    price: 1299.99,
    originalPrice: null,
    discountPercentage: null,
    image: "https://images.unsplash.com/photo-1558317378-76842e43017c?q=80&w=800&auto=format&fit=crop",
    isNew: true,
    rating: 4.6
  }
];

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
        <section className="py-10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="section-title inline-block">منتجات مميزة</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
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
              ))}
            </div>
          </div>
        </section>
        
        {/* Banner */}
        <section className="py-12 bg-black text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="w-full lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-right">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">عروض الشتاء <span className="text-gold">خصومات تصل إلى 50%</span></h2>
                <p className="text-lg mb-6">استمتع بأقوى العروض والخصومات لفصل الشتاء على جميع المنتجات</p>
                <a
                  href="#winter-sale"
                  className="inline-block bg-gold hover:bg-gold-dark text-black font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
                >
                  تسوق الآن
                </a>
              </div>
              
              <div className="w-full lg:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=1080&auto=format&fit=crop"
                  alt="Winter Sale"
                  className="w-full h-56 lg:h-72 object-cover object-center rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* New Arrivals */}
        <section className="py-10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="section-title inline-block">وصل حديثًا</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {newArrivals.map((product) => (
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
              ))}
            </div>
            
            <div className="text-center mt-8">
              <a
                href="#all-products"
                className="inline-block border-2 border-gold text-gold hover:bg-gold hover:text-black transition-colors duration-300 font-semibold py-2 px-6 rounded"
              >
                عرض جميع المنتجات
              </a>
            </div>
          </div>
        </section>
        
        {/* Features */}
        <section className="py-10 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <div className="bg-gold/10 w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">شحن مجاني</h3>
                <p className="text-gray-600">للطلبات التي تزيد عن 200 ريال</p>
              </div>
              
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <div className="bg-gold/10 w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">ضمان الجودة</h3>
                <p className="text-gray-600">منتجات أصلية 100%</p>
              </div>
              
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <div className="bg-gold/10 w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">استبدال سهل</h3>
                <p className="text-gray-600">سياسة استبدال خلال 14 يوم</p>
              </div>
              
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <div className="bg-gold/10 w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">دعم على مدار الساعة</h3>
                <p className="text-gray-600">خدمة عملاء متميزة</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
