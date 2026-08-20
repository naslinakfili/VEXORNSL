'use client'
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface NavBtn{
    id: number,
    label: string,
}

function CategoryNavigation() {
    const [btnActive, setBtnActive] = useState(1);

    const buttons : NavBtn[] = [
        { id: 1, label: "All" },
        { id: 2, label: "Audio" },
        { id: 3, label: "Laptops" },
        { id: 4, label: "Warables" },
    ]

    return(
        <nav className="mt-6 md:mt-16">
            <ul className="flex gap-2 text-white/40">
                {buttons.map((btn) => (
                    <li key={btn.id}>
                        <Button
                         variant={btnActive === btn.id ? "default" : "outline"}
                         className={`rounded-full px-4 ${btn.id === btnActive? "bg-logo hover:bg-logo" : ""}`}
                         onClick={() =>  setBtnActive(btn.id)}>
                        {btn.label}

                        </Button>
                    </li>
                ) )}
                
            </ul>
        </nav>
    )
}

export default CategoryNavigation