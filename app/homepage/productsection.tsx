import Link from "next/link";
import { Star, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardAction } from "@/components/ui/card";
import Image from "next/image";
import { products } from "@/lib/products";

interface ProductItems {
  id: number;
  name: string;
  price: number;
  url: string;
}



async function ProductSection() {

  const productList: ProductItems[] = products;


  return (
    <section className="flex flex-col mt-6 md:mt-10">
      <div className="flex items-center justify-between w-full">
        <h2 className="text-[20px] font-bold">Treding Now</h2>
        <Button className="text-[12px] font-semibold text-logo" variant="link">
          View All Product
        </Button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-3 mt-4 md:mt-10 md:mb-12">
        {productList.map((product) => (
          <figure key={product.id} className="w-full cursor-pointer">
            <Link href={`/productdescriptive/${product.id}`} className="block w-full">
            {/* Desktop card fills the grid column (421.33px) and is 347px tall. */}
            <Card className="relative bg-surface mx-auto pt-0 h-48.75 w-full md:h-86.75 md:w-full">
              {/* Desktop product image fills the card width and is 220px tall. */}
              <div className="relative h-30 w-full overflow-hidden md:h-55 md:w-full">
                <Image
                  src={product.url}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 hover:scale-105"
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
                  <Button className="bg-logo w-6 h-6 rounded-sm">
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
