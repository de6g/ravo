import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ShoppingCart, User, Search, Menu, X } from 'lucide-react';
import { Category } from '@/components/CategoryGrid';

// Default categories if none exist in localStorage
const defaultCategories = [
  { id: 1, name: "العطور", image: "", link: "/category/perfumes" },
  { id: 2, name: "الإلكترونيات", image: "", link: "/category/electronics" },
  { id: 3, name: "الأزياء", image: "", link: "/category/fashion" },
  { id: 4, name: "المنزل", image: "", link: "/category/home" },
  { id: 5, name: "العناية", image: "", link: "/category/beauty" }
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);

  // Load categories from localStorage
  useEffect(() => {
    const loadCategories = () => {
      const savedCategories = localStorage.getItem('storeCategories');
      setCategories(savedCategories ? JSON.parse(savedCategories) : defaultCategories);
    };

    // Initial load
    loadCategories();

    // Listen for storage changes (to sync across tabs/components)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'storeCategories') {
        loadCategories();
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        {/* Top Navigation - Logo, Search, User Actions */}
        <div className="flex items-center justify-between">
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>

          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-black">
              <span className="text-gold">را</span>فو
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex space-x-8 rtl:space-x-reverse">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={category.link}
                className="text-gray-700 hover:text-gold transition-colors px-2 py-1"
              >
                {category.name}
              </Link>
            ))}
          </nav>

          {/* Search, User Account, Cart */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            {/* Search Toggle */}
            <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(!isSearchOpen)}>
              <Search className="h-5 w-5" />
            </Button>

            {/* User Account */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Link to="/login" className="w-full">تسجيل الدخول</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/register" className="w-full">إنشاء حساب</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/account" className="w-full">حسابي</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Shopping Cart */}
            <Button variant="ghost" size="icon" asChild>
              <Link to="/cart" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-gold text-black rounded-full w-4 h-4 flex items-center justify-center text-xs">
                  3
                </span>
              </Link>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  to={category.link}
                  className="text-gray-700 hover:text-gold transition-colors py-1 text-right"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category.name}
                </Link>
              ))}
            </nav>
          </div>
        )}

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="pt-4 animate-fade-in">
            <div className="relative">
              <Input 
                type="text" 
                placeholder="ابحث عن المنتجات..." 
                className="w-full py-2 pr-10" 
                dir="rtl" 
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
