
import React from 'react';

const Features: React.FC = () => {
  return (
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
  );
};

export default Features;
