
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft } from "lucide-react";

// Sample data for carousel slides
const slides = [
  {
    id: 1,
    title: "عروض العطور الفاخرة",
    subtitle: "خصومات تصل إلى 30%",
    description: "اكتشف مجموعة العطور الفاخرة من أرقى الماركات العالمية",
    image: "https://images.unsplash.com/photo-1615512065994-cdaff713de31?q=80&w=1920&auto=format&fit=crop",
    buttonText: "تسوق الآن",
    buttonLink: "#perfumes",
    bgColor: "bg-gradient-to-r from-amber-50 to-yellow-100"
  },
  {
    id: 2,
    title: "أحدث الإلكترونيات",
    subtitle: "تقنيات مبتكرة",
    description: "استمتع بأحدث التقنيات وأفضل الأجهزة الإلكترونية بأسعار تنافسية",
    image: "https://images.unsplash.com/photo-1603539444875-76e7684265f6?q=80&w=1920&auto=format&fit=crop",
    buttonText: "اكتشف المزيد",
    buttonLink: "#electronics",
    bgColor: "bg-gradient-to-r from-gray-100 to-gray-200"
  },
  {
    id: 3,
    title: "أزياء الموسم الجديد",
    subtitle: "تشكيلة خريف 2024",
    description: "تصاميم عصرية وأنيقة لكل المناسبات من أرقى الماركات العالمية",
    image: "https://images.unsplash.com/photo-1610652492500-ded49ceeb378?q=80&w=1920&auto=format&fit=crop",
    buttonText: "تسوق الآن",
    buttonLink: "#fashion",
    bgColor: "bg-gradient-to-r from-neutral-100 to-neutral-200"
  }
];

const FeaturedCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden rounded-lg">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
            index === currentSlide ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
          } ${slide.bgColor}`}
        >
          <div className="container mx-auto h-full flex flex-col md:flex-row items-center justify-between px-4 lg:px-8">
            {/* Content */}
            <div className="w-full md:w-1/2 text-right py-8 md:py-0 order-2 md:order-1">
              <span className="inline-block text-sm sm:text-base bg-black/10 px-3 py-1 rounded-full mb-2">
                {slide.subtitle}
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-3 text-black">
                {slide.title}
              </h2>
              <p className="text-sm sm:text-base lg:text-lg mb-6 text-gray-700 max-w-md ml-auto">
                {slide.description}
              </p>
              <Button
                className="bg-gold hover:bg-gold-dark text-black border-0"
                size="lg"
                asChild
              >
                <a href={slide.buttonLink}>{slide.buttonText}</a>
              </Button>
            </div>
            
            {/* Image */}
            <div className="w-full md:w-1/2 h-48 sm:h-64 md:h-full order-1 md:order-2 relative">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover object-center rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/5 rounded-lg"></div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <div className="absolute inset-y-0 left-0 flex items-center">
        <Button
          onClick={prevSlide}
          size="icon"
          variant="ghost"
          className="h-10 w-10 rounded-full bg-white/60 hover:bg-white text-black ml-2"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
      </div>

      <div className="absolute inset-y-0 right-0 flex items-center">
        <Button
          onClick={nextSlide}
          size="icon"
          variant="ghost"
          className="h-10 w-10 rounded-full bg-white/60 hover:bg-white text-black mr-2"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-gold w-6" : "bg-white/50"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCarousel;
