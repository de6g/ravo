import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2, Minus, Plus, ArrowLeft } from 'lucide-react';
import { useCartStore } from '@/hooks/cartStore';

const Cart: React.FC = () => {
  const cartItems = useCartStore((state) => state.items);
  const removeItemFromStore = useCartStore((state) => state.removeFromCart);
  const addToCart = useCartStore((state) => state.addToCart);

  const [couponCode, setCouponCode] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = subtotal > 500 ? 0 : 50;
  const discount = couponApplied ? subtotal * 0.1 : 0;
  const total = subtotal + shipping - discount;

  const updateQuantity = (itemId: number, newQuantity: number) => {
    const item = cartItems.find(item => item.id === itemId);
    if (!item) return;
    const updatedItem = { ...item, quantity: Math.max(1, Math.min(newQuantity, item.maxQuantity)) };
    removeItemFromStore(itemId);
    addToCart(updatedItem);
  };

  // ✅ تصحيح هنا
  const removeItem = (itemId: number) => {
    removeItemFromStore(itemId);
  };

  const applyCoupon = () => {
    if (couponCode.toUpperCase() === "SAVE10") {
      setCouponApplied(true);
    } else {
      alert("الكود غير صالح");
    }
  };

  return (
    <div dir="rtl" className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">سلة التسوق</h1>

          {cartItems.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
                  <div className="hidden md:grid grid-cols-7 gap-4 p-4 bg-gray-50 border-b border-gray-100 font-medium">
                    <div className="col-span-3">المنتج</div>
                    <div className="text-center">السعر</div>
                    <div className="text-center">الكمية</div>
                    <div className="text-center">الإجمالي</div>
                    <div className="text-center"></div>
                  </div>

                  {cartItems.map((item) => (
                    <div key={item.id} className="grid grid-cols-1 md:grid-cols-7 gap-4 p-4 border-b border-gray-100 items-center">
                      <div className="col-span-1 md:col-span-3 flex items-center">
                        <Link to={`/product/${item.id}`} className="flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-20 h-20 object-cover rounded"
                          />
                        </Link>
                        <div className="mr-4">
                          <Link to={`/product/${item.id}`} className="font-medium text-black hover:text-gold transition-colors">
                            {item.name}
                          </Link>
                        </div>
                      </div>

                      <div className="md:text-center">
                        <span>{item.price} ريال</span>
                      </div>

                      <div className="flex justify-start md:justify-center items-center">
                        <div className="flex items-center border rounded-md">
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 rounded-r-none"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-10 text-center">{item.quantity}</span>
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 rounded-l-none"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            disabled={item.quantity >= item.maxQuantity}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>

                      <div className="md:text-center font-bold">
                        {(item.price * item.quantity).toFixed(2)} ريال
                      </div>

                      <div className="flex justify-end md:justify-center">
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-700 hover:bg-red-50"
                        >
                          <Trash2 className="h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                  ))}

                  <div className="p-4 text-right">
                    <Link
                      to="/"
                      className="inline-flex items-center text-gold hover:underline"
                    >
                      <ArrowLeft className="ml-2 h-4 w-4" />
                      متابعة التسوق
                    </Link>
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
                  <h2 className="text-xl font-bold mb-4">ملخص الطلب</h2>

                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span>المجموع الفرعي:</span>
                    <span>{subtotal.toFixed(2)} ريال</span>
                  </div>

                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span>الشحن:</span>
                    <span>{shipping === 0 ? 'مجاني' : `${shipping} ريال`}</span>
                  </div>

                  {couponApplied && (
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span>الخصم:</span>
                      <span className="text-green-500">- {discount.toFixed(2)} ريال</span>
                    </div>
                  )}

                  <div className="flex justify-between py-3 font-bold text-lg">
                    <span>الإجمالي:</span>
                    <span>{total.toFixed(2)} ريال</span>
                  </div>

                  <div className="mt-4">
                    <label htmlFor="coupon" className="block text-sm font-medium text-gray-700 mb-1">
                      كود الخصم
                    </label>
                    <div className="flex">
                      <Input
                        type="text"
                        id="coupon"
                        placeholder="أدخل كود الخصم"
                        className="rounded-l-none"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        disabled={couponApplied}
                      />
                      <Button
                        type="button"
                        className="rounded-r-none bg-gold hover:bg-gold-dark text-black"
                        onClick={applyCoupon}
                        disabled={couponApplied || !couponCode}
                      >
                        تطبيق
                      </Button>
                    </div>
                    {couponApplied && (
                      <p className="text-green-500 text-sm mt-1">تم تطبيق كود الخصم بنجاح!</p>
                    )}
                  </div>

                  <div className="mt-6">
                    <Button
                      className="w-full bg-gold hover:bg-gold-dark text-black text-lg py-6"
                      asChild
                    >
                      <Link to="/checkout">إتمام عملية الشراء</Link>
                    </Button>
                  </div>

                  <div className="mt-4 flex justify-center gap-2">
                    <span className="bg-gray-100 p-2 rounded text-xs">Visa</span>
                    <span className="bg-gray-100 p-2 rounded text-xs">Mastercard</span>
                    <span className="bg-gray-100 p-2 rounded text-xs">Apple Pay</span>
                    <span className="bg-gray-100 p-2 rounded text-xs">MADA</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <svg className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-2">سلة التسوق فارغة</h2>
              <p className="text-gray-600 mb-6">لم تقم بإضافة أي منتجات بعد.</p>
              <Link
                to="/"
                className="inline-block bg-gold hover:bg-gold-dark text-black font-medium px-6 py-3 rounded-md transition-colors"
              >
                تصفح المنتجات
              </Link>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;
