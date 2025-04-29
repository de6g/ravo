
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

// Cart summary data
const cartSummary = {
  items: [
    {
      id: 1,
      name: "عطر مونت بلانك اكسبلورر",
      price: 349.99,
      quantity: 1,
    },
    {
      id: 5,
      name: "عطر توم فورد عود وود - 100 مل",
      price: 1599.99,
      quantity: 2,
    },
    {
      id: 7,
      name: "حقيبة يد نسائية من الجلد الطبيعي",
      price: 799.99,
      quantity: 1,
    }
  ],
  subtotal: 4349.97,
  shipping: 0,
  discount: 434.99,
  total: 3914.98
};

const Checkout: React.FC = () => {
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("credit-card");

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
          <div className="mb-8">
            <div className="flex justify-center items-center">
              <div className={`flex flex-col items-center ${step >= 1 ? 'text-gold' : 'text-gray-400'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${step >= 1 ? 'border-gold bg-gold/10' : 'border-gray-300'}`}>
                  1
                </div>
                <span className="mt-1 text-sm">العنوان</span>
              </div>
              
              <div className={`w-16 sm:w-32 h-1 ${step >= 2 ? 'bg-gold' : 'bg-gray-300'}`}></div>
              
              <div className={`flex flex-col items-center ${step >= 2 ? 'text-gold' : 'text-gray-400'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${step >= 2 ? 'border-gold bg-gold/10' : 'border-gray-300'}`}>
                  2
                </div>
                <span className="mt-1 text-sm">الدفع</span>
              </div>
              
              <div className={`w-16 sm:w-32 h-1 ${step >= 3 ? 'bg-gold' : 'bg-gray-300'}`}></div>
              
              <div className={`flex flex-col items-center ${step >= 3 ? 'text-gold' : 'text-gray-400'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${step >= 3 ? 'border-gold bg-gold/10' : 'border-gray-300'}`}>
                  3
                </div>
                <span className="mt-1 text-sm">التأكيد</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm">
              {/* Step 1: Shipping Information */}
              {step === 1 && (
                <>
                  <h2 className="text-xl font-bold mb-4">معلومات الشحن</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <Label htmlFor="firstName">الاسم الأول</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="mt-1"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="lastName">الاسم الأخير</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="mt-1"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email">البريد الإلكتروني</Label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-1"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone">رقم الهاتف</Label>
                      <Input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-1"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <Label htmlFor="address">العنوان</Label>
                    <Input
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="mt-1"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <Label htmlFor="city">المدينة</Label>
                      <Input
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="mt-1"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="postalCode">الرمز البريدي</Label>
                      <Input
                        id="postalCode"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <Label htmlFor="notes">ملاحظات إضافية (اختياري)</Label>
                    <Textarea
                      id="notes"
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      className="mt-1"
                      rows={4}
                    />
                  </div>
                  
                  <div className="flex justify-end">
                    <Button
                      className="bg-gold hover:bg-gold-dark text-black"
                      onClick={nextStep}
                    >
                      متابعة إلى الدفع
                    </Button>
                  </div>
                </>
              )}
              
              {/* Step 2: Payment Information */}
              {step === 2 && (
                <>
                  <h2 className="text-xl font-bold mb-4">معلومات الدفع</h2>
                  
                  <div className="mb-6">
                    <RadioGroup 
                      value={paymentMethod} 
                      onValueChange={setPaymentMethod}
                      className="space-y-4"
                    >
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <RadioGroupItem value="credit-card" id="credit-card" />
                        <Label htmlFor="credit-card" className="flex items-center">
                          <span className="ml-2">بطاقة ائتمان/مدى</span>
                          <div className="flex space-x-2 space-x-reverse mr-4">
                            <span className="bg-gray-100 p-1 rounded text-xs">Visa</span>
                            <span className="bg-gray-100 p-1 rounded text-xs">MasterCard</span>
                            <span className="bg-gray-100 p-1 rounded text-xs">MADA</span>
                          </div>
                        </Label>
                      </div>
                      
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <RadioGroupItem value="apple-pay" id="apple-pay" />
                        <Label htmlFor="apple-pay" className="flex items-center">
                          <span className="ml-2">Apple Pay</span>
                          <span className="bg-gray-100 p-1 rounded text-xs mr-4">Apple Pay</span>
                        </Label>
                      </div>
                      
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <RadioGroupItem value="stc-pay" id="stc-pay" />
                        <Label htmlFor="stc-pay" className="flex items-center">
                          <span className="ml-2">STC Pay</span>
                          <span className="bg-gray-100 p-1 rounded text-xs mr-4">STC Pay</span>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  {paymentMethod === "credit-card" && (
                    <div className="mt-6">
                      <div className="mb-4">
                        <Label htmlFor="cardNumber">رقم البطاقة</Label>
                        <Input
                          id="cardNumber"
                          name="cardNumber"
                          placeholder="0000 0000 0000 0000"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          className="mt-1"
                          required
                        />
                      </div>
                      
                      <div className="mb-4">
                        <Label htmlFor="cardName">الاسم على البطاقة</Label>
                        <Input
                          id="cardName"
                          name="cardName"
                          value={formData.cardName}
                          onChange={handleInputChange}
                          className="mt-1"
                          required
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <Label htmlFor="expiryDate">تاريخ الانتهاء</Label>
                          <Input
                            id="expiryDate"
                            name="expiryDate"
                            placeholder="MM/YY"
                            value={formData.expiryDate}
                            onChange={handleInputChange}
                            className="mt-1"
                            required
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="cvv">CVV</Label>
                          <Input
                            id="cvv"
                            name="cvv"
                            placeholder="123"
                            value={formData.cvv}
                            onChange={handleInputChange}
                            className="mt-1"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="flex items-center mb-6">
                        <Checkbox
                          id="saveCard"
                          checked={formData.saveCard}
                          onCheckedChange={(checked) => 
                            handleCheckboxChange("saveCard", checked as boolean)
                          }
                        />
                        <label
                          htmlFor="saveCard"
                          className="text-sm text-gray-700 mr-2"
                        >
                          حفظ معلومات البطاقة للمرة القادمة
                        </label>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex justify-between mt-6">
                    <Button
                      variant="outline"
                      onClick={prevStep}
                    >
                      العودة
                    </Button>
                    
                    <Button
                      className="bg-gold hover:bg-gold-dark text-black"
                      onClick={nextStep}
                    >
                      تأكيد الطلب
                    </Button>
                  </div>
                </>
              )}
              
              {/* Step 3: Order Confirmation */}
              {step === 3 && (
                <div className="text-center py-8">
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-2">تم تأكيد طلبك!</h2>
                  <p className="text-gray-600 mb-6">
                    شكرًا لك. تم تأكيد طلبك برقم <span className="font-bold">#ORD-5791</span>.
                    <br />
                    سيتم إرسال تأكيد الطلب إلى بريدك الإلكتروني قريبًا.
                  </p>
                  
                  <div className="flex justify-center space-x-4 space-x-reverse">
                    <Link 
                      to="/" 
                      className="inline-block bg-gold hover:bg-gold-dark text-black font-medium px-6 py-3 rounded-md transition-colors"
                    >
                      العودة للرئيسية
                    </Link>
                    
                    <Link 
                      to="#track-order"
                      className="inline-block border border-gold text-gold hover:bg-gold/10 font-medium px-6 py-3 rounded-md transition-colors"
                    >
                      تتبع الطلب
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-20">
                <h2 className="text-lg font-bold mb-4">ملخص الطلب</h2>
                
                {/* Items */}
                <div className="mb-6 space-y-3">
                  {cartSummary.items.map((item) => (
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
                    <span>{cartSummary.subtotal.toFixed(2)} ريال</span>
                  </div>
                  
                  <div className="flex justify-between py-1">
                    <span className="text-gray-700">الشحن:</span>
                    <span>
                      {cartSummary.shipping === 0 ? (
                        <span className="text-green-500">مجاني</span>
                      ) : (
                        `${cartSummary.shipping} ريال`
                      )}
                    </span>
                  </div>
                  
                  <div className="flex justify-between py-1">
                    <span className="text-gray-700">الخصم:</span>
                    <span className="text-green-500">- {cartSummary.discount.toFixed(2)} ريال</span>
                  </div>
                  
                  <div className="flex justify-between py-3 font-bold text-lg border-t border-gray-100 mt-2">
                    <span>الإجمالي:</span>
                    <span>{cartSummary.total.toFixed(2)} ريال</span>
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
