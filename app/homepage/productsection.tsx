import Link from "next/link";
import { Star, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardAction } from "@/components/ui/card";
import Image from "next/image";
import { products, type ProductCategory } from "@/lib/products";

interface ProductSectionProps {
  selectedCategory: "all" | ProductCategory;
}

function ProductSection({ selectedCategory }: ProductSectionProps) {

  const productList = selectedCategory === "all"
    ? products
    : products.filter((product) => product.tipe === selectedCategory);


  return (
    <section className="flex flex-col mt-6 md:mt-10">
      <div className="flex items-center justify-between w-full">
        <h2 className="text-[20px] font-bold">Treding Now</h2>
        <Button className="text-[12px] font-semibold text-logo" variant="link">
          View All Product
        </Button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-3 mt-4 md:mt-10 md:mb-12">
        {productList.length === 0 ? (
          <p className="col-span-full py-8 text-center text-sm text-muted-foreground">
            No products found in this category.
          </p>
        ) : productList.map((product) => (
          <figure key={product.id} className="w-full cursor-pointer">
            <Link href={`/productdescriptive/${product.id}`} className="block w-full">
            {/* Desktop card fills the grid column (421.33px) and is 347px tall. */}
            <Card className="flex flex-col justify-between dark:bg-surface mx-auto p-0 h-full w-full">
              {/* Desktop product image fills the card width and is 220px tall. */}
              <div className="relative aspect-square w-full overflow-hidden">
                <Image
                  src={product.url}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
                <CardAction className="absolute top-2 left-2">
                <Badge className=" bg-logo text-white z-20 rounded-sm font-bold">
                  New
                </Badge>
              </CardAction>
              </div>
              
              <div className="">
                <h2 className="ml-2.5 text-[16px] md:text-[20px] font-bold">{product.name}</h2>
                <div className="flex ml-2.5">
                  <Star className="w-4 h-4 text-logo fill-current" />
                  <Star className="w-4 h-4 text-logo fill-current" />
                  <Star className="w-4 h-4 text-logo fill-current" />
                  <Star className="w-4 h-4 text-logo fill-current" />
                  <Star className="w-4 h-4" />
                </div>
                <div className="flex p-3 justify-between items-center">
                  <p className="text-[16px] md:text-[20px] font-bold">${product.price}</p>
                  <Button className="bg-logo hover:bg-logo/90 w-10 h-10 rounded-sm">
                    <Plus />
                  </Button>
                </div>
              </div>
            </Card>
            </Link>
          </figure>
        ))}
      </div>
    </section>
  );
}

export default ProductSection;
