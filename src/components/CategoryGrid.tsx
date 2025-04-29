
import React from 'react';
import { Link } from 'react-router-dom';

// Define categories with names, images, and links
const categories = [
  {
    id: 1,
    name: "العطور",
    image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=800&auto=format&fit=crop",
    link: "#perfumes",
  },
  {
    id: 2,
    name: "الإلكترونيات",
    image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=800&auto=format&fit=crop",
    link: "#electronics",
  },
  {
    id: 3,
    name: "الأزياء",
    image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=800&auto=format&fit=crop",
    link: "#fashion",
  },
  {
    id: 4,
    name: "العناية",
    image: "https://images.unsplash.com/photo-1598452963314-b09f397a5c48?q=80&w=800&auto=format&fit=crop",
    link: "#beauty",
  },
  {
    id: 5,
    name: "المنزل",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop",
    link: "#home",
  }
];

const CategoryGrid: React.FC = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="section-title inline-block">تصفح حسب الفئة</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={category.link}
              className="group relative h-48 md:h-60 rounded-lg overflow-hidden shadow hover:shadow-lg transition-all duration-300"
            >
              {/* Category Image */}
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300"></div>
              
              {/* Category Name */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/80 group-hover:bg-white/90 px-4 py-2 rounded text-center transition-all duration-300">
                  <h3 className="text-lg font-semibold text-black">{category.name}</h3>
                </div>
              </div>
              
              {/* Hover Indicator */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gold scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300"></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
