
import React from 'react';

const Banner: React.FC = () => {
  return (
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
  );
};

export default Banner;
