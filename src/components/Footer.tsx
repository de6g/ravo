
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gold">سوقكم</h3>
            <p className="text-sm text-gray-300">
              منصة تسوق إلكتروني رائدة في المملكة العربية السعودية، نقدم أفضل المنتجات بأفضل الأسعار مع خدمة توصيل سريعة وموثوقة.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gold">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-gold transition-colors">الرئيسية</Link>
              </li>
              <li>
                <Link to="#about" className="text-gray-300 hover:text-gold transition-colors">من نحن</Link>
              </li>
              <li>
                <Link to="#terms" className="text-gray-300 hover:text-gold transition-colors">الشروط والأحكام</Link>
              </li>
              <li>
                <Link to="#privacy" className="text-gray-300 hover:text-gold transition-colors">سياسة الخصوصية</Link>
              </li>
              <li>
                <Link to="#contact" className="text-gray-300 hover:text-gold transition-colors">اتصل بنا</Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gold">التصنيفات</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#perfumes" className="text-gray-300 hover:text-gold transition-colors">العطور</Link>
              </li>
              <li>
                <Link to="#electronics" className="text-gray-300 hover:text-gold transition-colors">الإلكترونيات</Link>
              </li>
              <li>
                <Link to="#fashion" className="text-gray-300 hover:text-gold transition-colors">الأزياء</Link>
              </li>
              <li>
                <Link to="#home" className="text-gray-300 hover:text-gold transition-colors">المنزل</Link>
              </li>
              <li>
                <Link to="#beauty" className="text-gray-300 hover:text-gold transition-colors">العناية</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gold">تواصل معنا</h3>
            <address className="not-italic text-gray-300">
              <p className="mb-2">الرياض، المملكة العربية السعودية</p>
              <p className="mb-2">هاتف: 920001234</p>
              <p className="mb-2">البريد الإلكتروني: info@souqcom.sa</p>
            </address>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-8 pt-6 border-t border-gray-800">
          <div className="flex flex-wrap justify-center gap-4">
            <span className="text-white bg-gray-800 px-4 py-2 rounded">Visa</span>
            <span className="text-white bg-gray-800 px-4 py-2 rounded">Mastercard</span>
            <span className="text-white bg-gray-800 px-4 py-2 rounded">Apple Pay</span>
            <span className="text-white bg-gray-800 px-4 py-2 rounded">MADA</span>
            <span className="text-white bg-gray-800 px-4 py-2 rounded">STCPay</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} سوقكم. جميع الحقوق محفوظة</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
