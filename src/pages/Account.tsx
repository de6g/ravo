
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const Account: React.FC = () => {
  return (
    <div dir="rtl" className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">حسابي</h1>
          
          <Tabs defaultValue="orders" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="orders">طلباتي</TabsTrigger>
              <TabsTrigger value="profile">الملف الشخصي</TabsTrigger>
              <TabsTrigger value="addresses">العناوين</TabsTrigger>
              <TabsTrigger value="wishlist">المفضلة</TabsTrigger>
            </TabsList>
            
            <TabsContent value="orders">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">طلباتي</h2>
                  
                  <div className="space-y-4">
                    {[1, 2, 3].map((order) => (
                      <div key={order} className="p-4 border rounded-lg">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-semibold">طلب #{1000 + order}</p>
                            <p className="text-sm text-gray-500">23 أبريل 2025</p>
                            <p className="mt-2">المبلغ: {order * 199} ر.س</p>
                          </div>
                          <div>
                            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                              {order === 1 ? 'تم التسليم' : 'قيد التنفيذ'}
                            </span>
                          </div>
                        </div>
                        <div className="mt-4 flex justify-end">
                          <Button variant="outline" size="sm">عرض التفاصيل</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="profile">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">الملف الشخصي</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">الاسم</label>
                      <input
                        type="text"
                        className="w-full p-2 border rounded-md"
                        defaultValue="محمد أحمد"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">البريد الإلكتروني</label>
                      <input
                        type="email"
                        className="w-full p-2 border rounded-md"
                        defaultValue="example@example.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">رقم الهاتف</label>
                      <input
                        type="tel"
                        className="w-full p-2 border rounded-md"
                        defaultValue="+966 55 123 4567"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">تاريخ الميلاد</label>
                      <input
                        type="date"
                        className="w-full p-2 border rounded-md"
                      />
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <Button className="bg-gold text-black hover:bg-gold/90">حفظ التغييرات</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="addresses">
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">العناوين</h2>
                    <Button className="bg-gold text-black hover:bg-gold/90">إضافة عنوان جديد</Button>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg">
                      <div className="flex justify-between">
                        <div>
                          <p className="font-semibold">المنزل</p>
                          <p className="text-gray-600 mt-1">حي الملقا، طريق الأمير محمد بن سلمان، الرياض</p>
                          <p className="text-gray-600">المملكة العربية السعودية</p>
                          <p className="text-gray-600">+966 55 123 4567</p>
                        </div>
                        <div className="flex flex-col space-y-2">
                          <Button variant="outline" size="sm">تعديل</Button>
                          <Button variant="outline" size="sm">حذف</Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 border rounded-lg">
                      <div className="flex justify-between">
                        <div>
                          <p className="font-semibold">العمل</p>
                          <p className="text-gray-600 mt-1">طريق الملك فهد، العليا، الرياض</p>
                          <p className="text-gray-600">المملكة العربية السعودية</p>
                          <p className="text-gray-600">+966 55 765 4321</p>
                        </div>
                        <div className="flex flex-col space-y-2">
                          <Button variant="outline" size="sm">تعديل</Button>
                          <Button variant="outline" size="sm">حذف</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="wishlist">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">المفضلة</h2>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3, 4].map((item) => (
                      <div key={item} className="border rounded-lg p-4">
                        <div className="relative h-40 mb-4">
                          <img
                            src={`https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=320&auto=format&fit=crop`}
                            alt={`منتج ${item}`}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <h3 className="font-semibold">عطر فاخر #{item}</h3>
                        <p className="text-gold font-bold mt-1">299 ر.س</p>
                        <div className="mt-4 space-x-2 rtl:space-x-reverse">
                          <Button size="sm" className="bg-gold text-black hover:bg-gold/90">
                            أضف للسلة
                          </Button>
                          <Button variant="outline" size="sm">
                            إزالة
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Account;
