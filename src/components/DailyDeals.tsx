
import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { dailyDeals } from '@/data/products';

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
