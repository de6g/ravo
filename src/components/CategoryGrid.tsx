
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { X, Edit } from 'lucide-react';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Define the category type
export interface Category {
  id: number;
  name: string;
  image: string;
  imageUrl?: string; // Added this property to match what's used in CategoryPage.tsx
  link: string;
}

// Initial categories 
const initialCategories = [
  {
    id: 1,
    name: "العطور",
    image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=800&auto=format&fit=crop",
    link: "/category/perfumes",
  },
  {
    id: 2,
    name: "الإلكترونيات",
    image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=800&auto=format&fit=crop",
    link: "/category/electronics",
  },
  {
    id: 3,
    name: "الأزياء",
    image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=800&auto=format&fit=crop",
    link: "/category/fashion",
  },
  {
    id: 4,
    name: "العناية",
    image: "https://images.unsplash.com/photo-1598452963314-b09f397a5c48?q=80&w=800&auto=format&fit=crop",
    link: "/category/beauty",
  },
  {
    id: 5,
    name: "المنزل",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop",
    link: "/category/home",
  }
];

const CategoryGrid: React.FC = () => {
  // State for categories
  const [categories, setCategories] = useState<Category[]>(() => {
    // Try to get categories from localStorage
    const savedCategories = localStorage.getItem('storeCategories');
    return savedCategories ? JSON.parse(savedCategories) : initialCategories;
  });
  
  // State for edit mode
  const [editMode, setEditMode] = useState(false);
  
  // State for dialog
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [tempCategory, setTempCategory] = useState<Category | null>(null);
  
  // Function to remove a category
  const removeCategory = (idToRemove: number) => {
    const newCategories = categories.filter(category => category.id !== idToRemove);
    setCategories(newCategories);
    localStorage.setItem('storeCategories', JSON.stringify(newCategories));
  };
  
  // Function to open edit dialog
  const openEditDialog = (category: Category) => {
    setSelectedCategory(category);
    setTempCategory({...category});
    setIsDialogOpen(true);
  };
  
  // Function to save edited category
  const saveCategory = () => {
    if (!tempCategory) return;
    
    const newCategories = categories.map(cat => 
      cat.id === tempCategory.id ? tempCategory : cat
    );
    
    setCategories(newCategories);
    localStorage.setItem('storeCategories', JSON.stringify(newCategories));
    setIsDialogOpen(false);
  };

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 flex justify-between items-center">
          <h2 className="section-title inline-block">تصفح حسب الفئة</h2>
          <Button 
            variant="outline" 
            className="text-sm"
            onClick={() => setEditMode(!editMode)}
          >
            {editMode ? 'إنهاء التعديل' : 'تعديل الفئات'}
          </Button>
        </div>
        
        {categories.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((category) => (
              <div key={category.id} className="relative">
                {editMode && (
                  <div className="absolute top-2 right-2 z-10 flex gap-2">
                    <Button 
                      variant="destructive" 
                      size="icon" 
                      className="h-8 w-8 rounded-full bg-white text-red-500 hover:bg-red-100"
                      onClick={() => removeCategory(category.id)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="secondary" 
                      size="icon" 
                      className="h-8 w-8 rounded-full bg-white text-black hover:bg-gray-100"
                      onClick={() => openEditDialog(category)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                  </div>
                )}
                
                <Link
                  to={category.link}
                  className={`group relative h-48 md:h-60 rounded-lg overflow-hidden shadow hover:shadow-lg transition-all duration-300 ${editMode ? 'pointer-events-none' : ''}`}
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
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <p className="text-gray-500">لا توجد فئات متاحة.</p>
          </div>
        )}
      </div>

      {/* Edit Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent dir="rtl" className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>تعديل الفئة</DialogTitle>
          </DialogHeader>
          
          {tempCategory && (
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="name">اسم الفئة</Label>
                <Input
                  id="name"
                  value={tempCategory.name}
                  onChange={(e) => setTempCategory({...tempCategory, name: e.target.value})}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="image">رابط الصورة</Label>
                <Input
                  id="image"
                  value={tempCategory.image}
                  onChange={(e) => setTempCategory({...tempCategory, image: e.target.value})}
                />
              </div>
              
              {tempCategory.image && (
                <div className="mt-2 border rounded overflow-hidden h-40">
                  <img 
                    src={tempCategory.image} 
                    alt="معاينة الصورة" 
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          )}
          
          <DialogFooter>
            <div className="flex justify-between w-full">
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                إلغاء
              </Button>
              <Button onClick={saveCategory}>
                حفظ التغييرات
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CategoryGrid;
