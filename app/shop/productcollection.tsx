import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator"
import {
  Field,
  FieldLabel,
} from "@/components/ui/field";
import {
  Star,
  Plus,
  Settings,
  Menu,
  LayoutGrid,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
} from "@/components/ui/card";
import Image from "next/image";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import CategoryNavigationPhone from "./navproductphone"
import { products } from "@/lib/products";
import Link from "next/link";
import CardPriceRange from "./filterproduct"


type ProductCollectionProps = {
  search?: string;
};

function ProductColection({ search = ""}: ProductCollectionProps) {
  const normalizedSearch = search.trim().toLowerCase();


  return (
    <main>
      <nav className="md:flex hidden text-[13px] gap-2 pt-6">
            <p className="flex gap-2 items-baseline text-surface">
            Home <ChevronRight size="10px" />
            </p>
            <p className="flex gap-2 items-baseline text-surface">
            Shop <ChevronRight size="10px" />
            </p>
            <p className="flex items-baseline">Audio Collection</p>
      </nav>

      <header className="md:flex hidden justify-between">
            <div className="flex items-baseline md:gap-4">
            <h1 className="md:text-[36px] md:font-extrabold">Audio Collection</h1>
            <span className="md:text-[14px] text-surface font-semibold">
              {getProducts(normalizedSearch).length} items
                
            </span>
            </div>
            <nav className="flex gap-4 items-center">
            <SelectList />
            <ToggleGroupOutline />
            </nav>
      </header>

      {/* select product handphone */}
      <div className="flex flex-col gap-4 md:hidden px-4 ">
        <CategoryNavigationPhone />
        <ProductSection search={normalizedSearch} />
        <div className="flex justify-center w-full py-4 px-6">
          <Button className="bg-logo text-white px-6 py-3 gap-2 rounded-3xl">
            <Settings className="w-3.4 h-3.5" />
            <p className="text-[14px] font-bold">Filter & Sort</p>
          </Button>
        </div>
      </div>

      <div className="md:flex hidden flex-1 lg:gap-10 gap-4 mt-6">
        {/* <CardPriceRange /> */}
        <div className="flex-1">
          <ProductSection search={normalizedSearch} />
          <div className="mt-6">
            <PrroductPagination />
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProductColection;



// =================================
// SELECT PRODUCT
// =================================
function SelectList() {
  return (
    <Select>
      <SelectTrigger className="w-full max-w-48 ">
        <SelectValue placeholder="sort by:" />
        <p className="text-white">Featured</p>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruit</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
// ==================================
// TOGGLE PRODUCT
// ==================================
function ToggleGroupOutline() {
  return (
    <ToggleGroup spacing={0} variant="outline" type="single" defaultValue="all">
      <ToggleGroupItem value="all" aria-label="Toggle all">
        <LayoutGrid />
      </ToggleGroupItem>
      <ToggleGroupItem value="missed" aria-label="Toggle missed">
        <Menu />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
//==========================================
// PRODUCT LIST
//==========================================
function getProducts(search: string) {
  return search
    ? products.filter((product) => product.name.toLowerCase().includes(search))
    : products;
}

function ProductSection({ search }: { search: string }) {
  const filteredProducts = getProducts(search);

  if(filteredProducts.length === 0) {
    return (
      <p className="col-span-full py-16 text-center text-surface">
        No products found for &quot;{search}&quot;.
      </p>
    );
  }



  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:mb-12 w-full">
      {filteredProducts.map((product) => (
        <figure className="w-full" key={product.id}>
          <Link href={`/productdescriptive/${product.id}`}>
          <Card className="flex flex-col justify-between dark:bg-surface mx-auto p-0 h-full  w-full">
            <div className="relative w-full aspect-square overflow-hidden">
              <Image
                src={product.url}
                alt={product.name}
                fill
                className="relative aspect-video w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div>
              <h2 className="ml-2.5 text-[16px]  font-semibold">{product.name}</h2>
              <div className="flex ml-2.5" aria-label="4 out of 5 stars">
                {[1, 2, 3, 4].map((star) => <Star key={star} className="w-2.5 h-2.5 md:w-4 md:h-4 text-logo fill-current" />)}
                <Star className="w-2.5 h-2.5 md:w-4 md:h-4" />
              </div>
              <div className="flex p-3 justify-between items-center">
                <p className="text-[16px] font-semibold">${product.price.toFixed(2)}</p>
                <Button aria-label={`Add ${product.name} to cart`} className="bg-logo hover:bg-logo/90 w-8 h-8 rounded-sm">
                  <Plus />
                </Button>
              </div>
            </div>
          </Card>
          </Link>
        </figure>
      ))}
    </div>
  );
}

function PrroductPagination() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
