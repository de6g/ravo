
import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

// Sample data for daily deals
const dailyDeals = [
  {
    id: 1,
    name: "عطر مونت بلانك اكسبلورر",
    price: 349.99,
    originalPrice: 499.99,
    discountPercentage: 30,
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=800&auto=format&fit=crop",
    isNew: false,
    rating: 4.7
  },
  {
    id: 2,
    name: "سماعات سوني لاسلكية مع إلغاء الضوضاء",
    price: 899.99,
    originalPrice: 1299.99,
    discountPercentage: 30,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop",
    isNew: false,
    rating: 4.9
  },
  {
    id: 3,
    name: "قميص رجالي كلاسيكي",
    price: 149.99,
    originalPrice: 249.99,
    discountPercentage: 40,
    image: "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?q=80&w=800&auto=format&fit=crop",
    isNew: false,
    rating: 4.5
  },
  {
    id: 4,
    name: "آيفون 14 برو ماكس - 256 جيجابايت",
    price: 5199.99,
    originalPrice: 5899.99,
    discountPercentage: 12,
    image: "https://images.unsplash.com/photo-1624277897465-a89748fe4021?q=80&w=800&auto=format&fit=crop",
    isNew: true,
    rating: 4.8
  }
];

const DailyDeals: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

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

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <h2 className="section-title">عروض اليوم</h2>
          
          {/* Countdown Timer */}
          <div className="mt-4 md:mt-0 bg-white shadow-sm rounded-lg p-3 flex items-center rtl">
            <span className="text-sm font-medium ml-2">ينتهي في:</span>
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
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dailyDeals.map((product) => (
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
            href="#all-deals"
            className="inline-block border-2 border-gold text-gold hover:bg-gold hover:text-black transition-colors duration-300 font-semibold py-2 px-6 rounded"
          >
            عرض جميع العروض
          </a>
        </div>
      </div>
    </section>
  );
};

export default DailyDeals;
