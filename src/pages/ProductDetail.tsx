
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCartStore } from '@/hooks/cartStore';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import ProductCard from '@/components/ProductCard';
import { Heart, Share2, Minus, Plus, ShoppingCart } from 'lucide-react';

// Sample product
const product = {
  id: 1,
  name: "عطر مونت بلانك اكسبلورر",
  price: 349.99,
  originalPrice: 499.99,
  discount: 30,
  description: "عطر رجالي فاخر من مونت بلانك، رائحة خشبية فواحة تستمر طويلًا. مزيج من الحمضيات، الورد، خشب الصندل والفلفل الأسود. مثالي للاستخدام اليومي والمناسبات.",
  brand: "مونت بلانك",
  sku: "MB-EXP-100ML",
  category: "العطور",
  tags: ["عطور رجالية", "مونت بلانك", "عطور فاخرة"],
  stock: 15,
  features: [
    "100 مل",
    "رائحة خشبية",
    "تدوم لأكثر من 8 ساعات",
    "مناسب للاستخدام اليومي والمناسبات"
  ],
  images: [
    "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1580618864180-f6d7d39b8ff6?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1582616698198-f978da534162?q=80&w=800&auto=format&fit=crop"
  ],
  rating: 4.7,
  reviewsCount: 128,
  relatedProducts: [
    {
      id: 2,
      name: "عطر توم فورد عود وود - 100 مل",
      price: 1599.99,
      image: "https://images.unsplash.com/photo-1588776779670-8693f067097c?q=80&w=800&auto=format&fit=crop",
      isNew: false,
      rating: 4.8
    },
    {
      id: 3,
      name: "عطر ديور سوفاج - 100 مل",
      price: 899.99,
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=800&auto=format&fit=crop",
      isNew: true,
      rating: 4.9
    },
    {
      id: 4,
      name: "عطر شانيل بلو - 100 مل",
      price: 799.99,
      image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=800&auto=format&fit=crop",
      isNew: false,
      rating: 4.6
    }
  ],
  specifications: {
    "النوع": "عطر رجالي",
    "سنة الإصدار": "2018",
    "الحجم": "100 مل",
    "التركيز": "Eau de Parfum",
    "نوع الرائحة": "خشبية منعشة",
    "بلد المنشأ": "فرنسا",
    "الماركة": "مونت بلانك"
  },
  reviews: [
    {
      id: 1,
      user: "محمد أحمد",
      date: "2023-12-10",
      rating: 5,
      comment: "عطر رائع جدًا ويدوم لفترة طويلة، أنصح به بشدة."
    },
    {
      id: 2,
      user: "خالد العتيبي",
      date: "2023-11-25",
      rating: 4,
      comment: "رائحة مميزة ولكن لا يدوم طويلاً كما هو متوقع."
    },
    {
      id: 3,
      user: "عبدالله محمد",
      date: "2023-11-15",
      rating: 5,
      comment: "من أجمل العطور التي جربتها، سعره مناسب مقارنة بجودته العالية."
    }
  ]
};

const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [mainImage, setMainImage] = useState(product.images[0]);
  const [quantity, setQuantity] = useState(1);
  const [isWishlist, setIsWishlist] = useState(false);
  const addToCart = useCartStore((state) => state.addToCart);

  const handleQuantityChange = (amount: number) => {
    const newQuantity = quantity + amount;
    if (newQuantity >= 1 && newQuantity <= product.stock) {
      setQuantity(newQuantity);
    }
  };

  const toggleWishlist = () => {
    setIsWishlist(!isWishlist);
  };
  const handleAddToCart = () => {
  addToCart({
    id: product.id,
    name: product.name,
    price: product.price,
    image: product.images[0],
    quantity: quantity
  });
};

  return (
    <div dir="rtl" className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="mb-6">
            <ol className="flex text-sm text-gray-600">
              <li>
                <a href="/" className="hover:text-gold">الرئيسية</a>
              </li>
              <li>
                <span className="mx-2">/</span>
                <a href="#perfumes" className="hover:text-gold">{product.category}</a>
              </li>
              <li>
                <span className="mx-2">/</span>
                <span className="text-gray-900 font-medium">{product.name}</span>
              </li>
            </ol>
          </nav>
          
          {/* Product Detail */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Product Images */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="bg-white rounded-lg overflow-hidden border border-gray-200">
                <img 
                  src={mainImage} 
                  alt={product.name}
                  className="w-full h-96 object-contain"
                />
              </div>
              
              {/* Thumbnails */}
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    className={`border rounded-md overflow-hidden ${
                      image === mainImage ? 'border-gold ring-2 ring-gold/30' : 'border-gray-200'
                    }`}
                    onClick={() => setMainImage(image)}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} - صورة ${index + 1}`}
                      className="w-full h-20 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
            
            {/* Product Info */}
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold mb-2">{product.name}</h1>
              
              {/* Brand */}
              <div className="mb-4">
                <span className="text-gray-600">الماركة: </span>
                <a href="#brand" className="text-gold hover:underline">{product.brand}</a>
              </div>
              
              {/* Rating */}
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i}
                      className={`w-5 h-5 ${i < Math.round(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-gray-700 ml-2">{product.rating} ({product.reviewsCount} تقييم)</span>
              </div>
              
              {/* Price */}
              <div className="mb-6">
                <div className="flex items-center">
                  <span className="text-2xl font-bold text-black">{product.price} ريال</span>
                  {product.originalPrice && (
                    <>
                      <span className="text-gray-500 line-through mr-2">{product.originalPrice} ريال</span>
                      <span className="bg-red-100 text-red-700 px-2 py-1 text-xs rounded mr-2">خصم {product.discount}%</span>
                    </>
                  )}
                </div>
                <p className="text-green-600 text-sm mt-1">متوفر في المخزون ({product.stock} قطعة)</p>
              </div>
              
              {/* Short Description */}
              <div className="mb-6">
                <p className="text-gray-700">{product.description}</p>
              </div>
              
              {/* Features List */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">المميزات:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              {/* Add to Cart */}
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <span className="ml-4">الكمية:</span>
                  <div className="flex items-center">
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-r-none"
                      onClick={() => handleQuantityChange(-1)}
                      disabled={quantity <= 1}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <div className="px-6 py-2 border-t border-b">
                      {quantity}
                    </div>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-l-none"
                      onClick={() => handleQuantityChange(1)}
                      disabled={quantity >= product.stock}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  <Button 
  className="bg-gold hover:bg-gold-dark text-black flex-1"
  onClick={handleAddToCart}
>
  <ShoppingCart className="ml-2 h-5 w-5" />
  أضف إلى السلة
</Button>

                  
                  <Button variant="outline" onClick={toggleWishlist}>
                    <Heart className={`h-5 w-5 ${isWishlist ? 'fill-red-500 text-red-500' : ''}`} />
                  </Button>
                  
                  <Button variant="outline">
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              
              {/* SKU, Categories, Tags */}
              <div className="space-y-2 text-sm text-gray-700 border-t border-gray-200 pt-4">
                <p>رمز المنتج: {product.sku}</p>
                <p>
                  التصنيف: 
                  <a href="#perfumes" className="text-gold hover:underline mr-1">{product.category}</a>
                </p>
                <div className="flex flex-wrap items-center">
                  <span>الوسوم: </span>
                  <div className="flex flex-wrap gap-1 mr-1">
                    {product.tags.map((tag, index) => (
                      <a
                        key={index}
                        href={`#${tag}`}
                        className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded transition-colors"
                      >
                        {tag}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Product Tabs */}
          <Tabs defaultValue="specifications" className="mb-16">
            <TabsList className="w-full justify-start overflow-x-auto">
              <TabsTrigger value="specifications">المواصفات</TabsTrigger>
              <TabsTrigger value="reviews">التقييمات ({product.reviews.length})</TabsTrigger>
            </TabsList>
            
            <TabsContent value="specifications" className="pt-6 pb-4">
              <div className="bg-white rounded-lg">
                <table className="w-full text-right">
                  <tbody>
                    {Object.entries(product.specifications).map(([key, value], index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="py-3 px-4 font-medium">{key}</td>
                        <td className="py-3 px-4 text-gray-700">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>
            
            <TabsContent value="reviews" className="pt-6">
              <div className="space-y-6">
                {product.reviews.map((review) => (
                  <div key={review.id} className="border-b border-gray-200 pb-6">
                    <div className="flex justify-between items-center mb-2">
                      <div className="font-medium">{review.user}</div>
                      <div className="text-sm text-gray-500">{review.date}</div>
                    </div>
                    
                    <div className="flex mb-2">
                      {[...Array(5)].map((_, i) => (
                        <svg 
                          key={i}
                          className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <Button className="bg-gold hover:bg-gold-dark text-black">
                  إضافة تقييم
                </Button>
              </div>
            </TabsContent>
          </Tabs>
          
          {/* Related Products */}
          <section>
            <h2 className="section-title inline-block mb-6">منتجات ذات صلة</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {product.relatedProducts.map((relatedProduct) => (
                <ProductCard
                  key={relatedProduct.id}
                  id={relatedProduct.id}
                  name={relatedProduct.name}
                  price={relatedProduct.price}
                  image={relatedProduct.image}
                  isNew={relatedProduct.isNew}
                  rating={relatedProduct.rating}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
