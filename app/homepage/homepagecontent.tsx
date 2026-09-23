'use client'

import { useState } from "react";
import CategoryNavigation, { type SelectedCategory } from "./categorynavigation";
import ProductSection from "./productsection";

function HomepageContent() {
  const [selectedCategory, setSelectedCategory] = useState<SelectedCategory>("all");

  return (
    <>
      <CategoryNavigation
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <ProductSection selectedCategory={selectedCategory} />
    </>
  );
}

export default HomepageContent;