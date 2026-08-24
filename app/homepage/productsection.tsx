"use client";
import { Star, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardAction } from "@/components/ui/card";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ProductItems {
  id: number;
  name: string;
  price: number;
  url: string;
}

function ProductSection() {
  const [products, setProducts] = useState<ProductItems[]>([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.error("error:", err);
      });
  }, []);

  return (
    <section className="flex flex-col mt-6 md:mt-10">
      <div className="flex items-center justify-between w-full">
        <h2 className="text-[20px] font-bold">Treding Now</h2>
        <Button className="text-[12px] font-semibold text-logo" variant="link">
          View All Product
        </Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-3 mt-4 md:mt-10 md:mb-12">
        {products.map((product) => (
          <figure key={product.id} className="w-full">
            <Card className="relative bg-surface mx-auto pt-0 max-h-[195px] md:min-h-[347px] w-full">
              <div className="relative w-full min-h-[120px] md:min-h-[220px] overflow-hidden">
                <Image
                  src={`/images/products${product.url}`}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <CardAction className="absolute top-2 left-2">
                <Badge className=" bg-logo text-white z-20 rounded-sm font-bold">
                  New
                </Badge>
              </CardAction>
              <div className="">
                <h2 className="ml-2.5 text-[12px] font-bold">{product.name}</h2>
                <div className="flex ml-2.5">
                  <Star className="w-2.5 h-2.5 text-logo" />
                  <Star className="w-2.5 h-2.5 text-logo" />
                  <Star className="w-2.5 h-2.5 text-logo" />
                  <Star className="w-2.5 h-2.5 text-logo" />
                  <Star className="w-2.5 h-2.5" />
                </div>
                <div className="flex px-2.5 justify-between items-center">
                  <p className="">${product.price}</p>
                  <Button className="bg-logo w-5.5 h-5.5 rounded-sm">
                    <Plus />
                  </Button>
                </div>
              </div>
            </Card>
          </figure>
        ))}
      </div>
    </section>
  );
}

export default ProductSection;
