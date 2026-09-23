'use client'
import { Button } from "@/components/ui/button";
import type { ProductCategory } from "@/lib/products";
export type SelectedCategory = "all" | ProductCategory

interface NavBtn {
    id: SelectedCategory,
    label: string,
}


interface CategoryNavigationProps {
    selectedCategory: SelectedCategory;
    onCategoryChange: (category: SelectedCategory) => void;
}

function CategoryNavigation({ selectedCategory, onCategoryChange }: CategoryNavigationProps) {
    const buttons: NavBtn[] = [
        { id: "all", label: "All" },
        { id: "audio", label: "Audio" },
        { id: "laptops", label: "Laptops" },
        { id: "wearables", label: "Wearables" },
    ]

    return(
        <nav className="mt-6 md:mt-16">
            <ul className="flex gap-2 text-white/40">
                {buttons.map((btn) => (
                    <li key={btn.id}>
                        <Button
                        variant={selectedCategory === btn.id ? "default" : "outline"}
                        className={`rounded-full px-4 ${btn.id === selectedCategory ? "bg-logo hover:bg-logo" : ""}`}
                        onClick={() => onCategoryChange(btn.id)}>
                        {btn.label}

                        </Button>
                    </li>
                ) )}
                
            </ul>
        </nav>
    )
}

export default CategoryNavigation