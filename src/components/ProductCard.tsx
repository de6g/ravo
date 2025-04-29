
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  discountPercentage?: number;
  image: string;
  isNew?: boolean;
  rating: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  originalPrice,
  discountPercentage,
  image,
  isNew = false,
  rating
}) => {
  return (
    <div className="product-card overflow-hidden group">
      <Link to={`/product/${id}`} className="block relative">
        {/* Product Image */}
        <div className="relative h-52 overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" 
          />
          
          {/* Badges */}
          {discountPercentage && (
            <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs rounded">
              خصم {discountPercentage}%
            </span>
          )}
          
          {isNew && (
            <span className="absolute top-2 right-2 bg-gold text-black px-2 py-1 text-xs rounded">
              جديد
            </span>
          )}
        </div>

        {/* Product Details */}
        <div className="p-4 text-right">
          <h3 className="text-lg font-medium mb-1 transition-colors group-hover:text-gold truncate">
            {name}
          </h3>
          
          {/* Rating */}
          <div className="flex items-center justify-end mb-2">
            <span className="text-sm text-gray-600 ml-1">{rating}</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg 
                  key={i}
                  className={`w-4 h-4 ${i < Math.round(rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
          
          {/* Price */}
          <div className="flex items-center justify-between mt-2">
            <Button 
              variant="ghost" 
              size="icon" 
              className="bg-gold/10 hover:bg-gold/20 text-gold"
            >
              <ShoppingCart className="h-5 w-5" />
            </Button>
            
            <div className="flex flex-col items-end">
              <span className="text-lg font-bold">{price} ريال</span>
              {originalPrice && (
                <span className="text-sm text-gray-500 line-through">{originalPrice} ريال</span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
