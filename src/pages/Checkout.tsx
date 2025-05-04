import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import useCartStore from '@/store/cartStore'; // ربط بيانات السلة

const Checkout: React.FC = () => {
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("credit-card");

  // Cart data from Zustand
  const cart = useCartStore(state => state.cart);

  // حساب الإجماليات
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const discount = subtotal * 0.1;
  const shipping = 0;
  const total = subtotal - discount;

  // Form states
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    // Credit card fields
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
    saveCard: false,
    // Additional info
    notes: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData({ ...formData, [name]: checked });
  };

  const nextStep = () => {
    setStep(step + 1);
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    setStep(step - 1);
    window.scrollTo(0, 0);
  };

  return (
    <div dir="rtl" className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-grow py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">إتمام عملية الشراء</h1>

          {/* Checkout Steps Navigation */}
          {/* نفس كود الـ Steps بدون تعديل */}

          {/* المحتوى الرئيسي */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm">
              {/* Steps 1 و 2 و 3 نفس الموجود بدون تغيير */}

              {/* Step 1 و Step 2 و Step 3 */}
              {/* انسخ من الكود السابق — مافيه تغيير هنا */}

              {/* ... */}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-20">
                <h2 className="text-lg font-bold mb-4">ملخص الطلب</h2>

                {/* Items */}
                <div className="mb-6 space-y-3">
                  {cart.map((item) => (
                    <div key={item.id} className="flex justify-between">
                      <div className="text-sm">
                        <span className="font-medium">{item.name}</span>
                        <span className="text-gray-500 block">العدد: {item.quantity}</span>
                      </div>
                      <div className="text-sm font-medium">
                        {(item.price * item.quantity).toFixed(2)} ريال
                      </div>
                    </div>
                  ))}
                </div>

                {/* Totals */}
                <div className="border-t border-gray-100 pt-4">
                  <div className="flex justify-between py-1">
                    <span className="text-gray-700">المجموع الفرعي:</span>
                    <span>{subtotal.toFixed(2)} ريال</span>
                  </div>

                  <div className="flex justify-between py-1">
                    <span className="text-gray-700">الشحن:</span>
                    <span>
                      {shipping === 0 ? (
                        <span className="text-green-500">مجاني</span>
                      ) : (
                        `${shipping} ريال`
                      )}
                    </span>
                  </div>

                  <div className="flex justify-between py-1">
                    <span className="text-gray-700">الخصم:</span>
                    <span className="text-green-500">- {discount.toFixed(2)} ريال</span>
                  </div>

                  <div className="flex justify-between py-3 font-bold text-lg border-t border-gray-100 mt-2">
                    <span>الإجمالي:</span>
                    <span>{total.toFixed(2)} ريال</span>
                  </div>

                  <div className="text-xs text-gray-500 mt-2">
                    * الأسعار شاملة ضريبة القيمة المضافة 15%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;
