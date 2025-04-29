
import React from 'react';
import ProductCard from '@/components/ProductCard';

interface ProductSectionProps {
  title: string;
  products: {
    id: number;
    name: string;
    price: number;
    originalPrice: number | null;
    discountPercentage: number | null;
    image: string;
    isNew: boolean;
    rating: number;
  }[];
  actionLink?: string;
  actionText?: string;
}

const ProductSection: React.FC<ProductSectionProps> = ({ 
  title, 
  products, 
  actionLink, 
  actionText 
}) => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="section-title inline-block">{title}</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
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
        
        {actionLink && actionText && (
          <div className="text-center mt-8">
            <a
              href={actionLink}
              className="inline-block border-2 border-gold text-gold hover:bg-gold hover:text-black transition-colors duration-300 font-semibold py-2 px-6 rounded"
            >
              {actionText}
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductSection;
