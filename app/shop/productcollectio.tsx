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
  FieldContent,
  FieldDescription,
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
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
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

function ProductCollection() {
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
                6 items
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
        <ProductSection />
        <div className="flex justify-center w-full py-4 px-6">
          <Button className="bg-logo text-white px-6 py-3 gap-2 rounded-3xl">
            <Settings className="w-[14px] h-[14px]" />
            <p className="text-[14px] font-bold">Filter & Sort</p>
          </Button>
        </div>
      </div>

      <div className="md:flex hidden flex-1 lg:gap-10 gap-4 mt-6">
        <CardPriceRange />
        <div className="flex-1">
          <ProductSection />
          <div className="mt-6">
            <PrroductPagination />
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProductCollection;


// =================================
// FILTER CARD
// =================================
function CardPriceRange() {
  return (
    <Card className="w-fit h-fit px-4 py-6 bg-surface">
      <div className="flex flex-col gap-4 pb-8">
        <h3 className="text-[14px] font-bold">PRICE RANGE</h3>
        <Slider
          defaultValue={[25, 50]}
          max={100}
          step={5}
          className="mx-auto w-full max-w-xs "
        />
        <div className="flex justify-between text-[12px] text-[#8F8FA4]">
          <p>$0</p>
          <p>$500</p>
        </div>
      </div>

      <div className="flex flex-col gap-3 mb-8">
        <h3 className="text-[14px] font-bold">CATEGORY</h3>
        <div className="flex flex-col gap-3 text-[13px] text-[#8F8FA4]">
          <Field orientation="horizontal">
            <Checkbox className="data-[state=checked]:border-logo"/>
            <FieldLabel htmlFor="five-star">Over-Ear Headphones</FieldLabel>
          </Field>

          <Field orientation="horizontal">
            <Checkbox className="data-[state=checked]:border-logo" />
            <FieldLabel htmlFor="five-star">Wireless Earbuds</FieldLabel>
          </Field>

          <Field orientation="horizontal">
            <Checkbox className="data-[state=checked]:border-logo" />
            <FieldLabel htmlFor="five-star">Dekstop Audio</FieldLabel>
          </Field>

          <Field orientation="horizontal">
            <Checkbox className="data-[state=checked]:border-logo" />
            <FieldLabel htmlFor="five-star">Portable Speaker</FieldLabel>
          </Field>
        </div>
      </div>

        <Separator />

      <div className="flex flex-col gap-3 my-8">
        <h3 className="text-[14px] font-bold">MIN RATING</h3>
        <RadioGroup className="flex flex-col gap-3 text-white">
          <Field orientation="horizontal">
            <RadioGroupItem value="5star" id="five-star" className="w-4 h-4" />
            <FieldLabel htmlFor="five-star">
              <Star className="w-3 h-3 text-logo" />
              <Star className="w-3 h-3 text-logo" />
              <Star className="w-3 h-3 text-logo" />
              <Star className="w-3 h-3 text-logo" />
              <Star className="w-3 h-3 text-logo" />
            </FieldLabel>
          </Field>

          <Field orientation="horizontal">
            <RadioGroupItem value="4star" id="four-star" className="w-4 h-4" />
            <FieldLabel htmlFor="four-star">
              <Star className="w-3 h-3 text-logo" />
              <Star className="w-3 h-3 text-logo" />
              <Star className="w-3 h-3 text-logo" />
              <Star className="w-3 h-3 text-logo" />
            </FieldLabel>
          </Field>

          <Field orientation="horizontal">
            <RadioGroupItem value="3star" id="tree-star" className="w-4 h-4" />
            <FieldLabel htmlFor="tree-star">
              <Star className="w-3 h-3 text-logo" />
              <Star className="w-3 h-3 text-logo" />
              <Star className="w-3 h-3 text-logo" />
            </FieldLabel>
          </Field>
        </RadioGroup>
      </div>

        <Separator />

      <div className="mt-8">
        <Field orientation="horizontal" className="flex items-center h-[20px]">
          <FieldLabel htmlFor="stock" className="text-[14px] font-bold">IN STOKY ONLY</FieldLabel>
          <Switch id="stock" className="!w-[36px] !h-[20px] focus:bg-logo" />
        </Field>
      </div>
    </Card>
  );
}
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
function ProductSection() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:mb-12 w-full">
      <figure className="w-full">
        <Card className="relative bg-surface mx-auto pt-0 max-h-[195px] md:min-h-[347px] w-full">
          <div className="relative w-full min-h-[120px] md:min-h-[220px]">
            <Image
              src="/images/img-azer.png"
              alt="Event cover"
              fill
              className="relative aspect-video  w-full object-cover brightness-60 grayscale dark:brightness-40"
            />
          </div>
          <CardAction className="absolute top-2 left-2">
            <Badge className=" bg-logo text-white z-20 rounded-sm font-bold">
              New
            </Badge>
          </CardAction>
          <div className="">
            <h2 className="ml-2.5 text-[12px] font-bold">SoundWave Alpha</h2>
            <div className="flex ml-2.5">
              <Star className="w-2.5 h-2.5 text-logo" />
              <Star className="w-2.5 h-2.5 text-logo" />
              <Star className="w-2.5 h-2.5 text-logo" />
              <Star className="w-2.5 h-2.5 text-logo" />
              <Star className="w-2.5 h-2.5" />
            </div>
            <div className="flex px-2.5 justify-between items-center">
              <p className="">$259.99</p>
              <Button className="bg-logo w-5.5 h-5.5 rounded-sm">
                <Plus />
              </Button>
            </div>
          </div>
        </Card>
      </figure>

      <figure className="w-full">
        <Card className="relative bg-surface mx-auto pt-0 max-h-[195px] md:min-h-[347px] w-full">
          <div className="relative w-full min-h-[120px] md:min-h-[220px]">
            <Image
              src="/images/img-azer.png"
              alt="Event cover"
              fill
              className="relative aspect-video  w-full object-cover brightness-60 grayscale dark:brightness-40"
            />
          </div>
          <div className="">
            <CardAction className="absolute top-2 left-2">
              <Badge
                variant="secondary"
                className="bg-logo text-white z-22 rounded-sm font-bold"
              >
                New
              </Badge>
            </CardAction>
            <h2 className="ml-2.5 text-[12px] font-bold">SoundWave Alpha</h2>
            <div className="flex ml-2.5">
              <Star className="w-2.5 h-2.5 text-logo" />
              <Star className="w-2.5 h-2.5 text-logo" />
              <Star className="w-2.5 h-2.5 text-logo" />
              <Star className="w-2.5 h-2.5 text-logo" />
              <Star className="w-2.5 h-2.5" />
            </div>
            <div className="flex px-2.5 justify-between items-center">
              <p className="">$259.99</p>
              <Button className="bg-logo w-5.5 h-5.5 rounded-sm">
                <Plus />
              </Button>
            </div>
          </div>
        </Card>
      </figure>

      <figure className="w-full">
        <Card className="relative bg-surface mx-auto pt-0 max-h-[195px] md:min-h-[347px] w-full">
          <div className="relative w-full min-h-[120px] md:min-h-[220px]">
            <Image
              src="/images/img-azer.png"
              alt="Event cover"
              fill
              className="relative aspect-video  w-full object-cover brightness-60 grayscale dark:brightness-40"
            />
          </div>
          <div className="">
            <CardAction className="absolute top-2 left-2">
              <Badge
                variant="secondary"
                className="bg-logo text-white z-22 rounded-sm font-bold"
              >
                New
              </Badge>
            </CardAction>
            <h2 className="ml-2.5 text-[12px] font-bold">SoundWave Alpha</h2>
            <div className="flex ml-2.5">
              <Star className="w-2.5 h-2.5 text-logo" />
              <Star className="w-2.5 h-2.5 text-logo" />
              <Star className="w-2.5 h-2.5 text-logo" />
              <Star className="w-2.5 h-2.5 text-logo" />
              <Star className="w-2.5 h-2.5" />
            </div>
            <div className="flex px-2.5 justify-between items-center">
              <p className="">$259.99</p>
              <Button className="bg-logo w-5.5 h-5.5 rounded-sm">
                <Plus />
              </Button>
            </div>
          </div>
        </Card>
      </figure>

      <figure className="w-full">
        <Card className="relative bg-surface mx-auto pt-0 max-h-[195px] md:min-h-[347px] w-full">
          <div className="relative w-full min-h-[120px] md:min-h-[220px]">
            <Image
              src="/images/img-azer.png"
              alt="Event cover"
              fill
              className="relative aspect-video  w-full object-cover brightness-60 grayscale dark:brightness-40"
            />
          </div>
          <div className="">
            <CardAction className="absolute top-2 left-2">
              <Badge
                variant="secondary"
                className="bg-logo text-white z-22 rounded-sm font-bold"
              >
                New
              </Badge>
            </CardAction>
            <h2 className="ml-2.5 text-[12px] font-bold">SoundWave Alpha</h2>
            <div className="flex ml-2.5">
              <Star className="w-2.5 h-2.5 text-logo" />
              <Star className="w-2.5 h-2.5 text-logo" />
              <Star className="w-2.5 h-2.5 text-logo" />
              <Star className="w-2.5 h-2.5 text-logo" />
              <Star className="w-2.5 h-2.5" />
            </div>
            <div className="flex px-2.5 justify-between items-center">
              <p className="">$259.99</p>
              <Button className="bg-logo w-5.5 h-5.5 rounded-sm">
                <Plus />
              </Button>
            </div>
          </div>
        </Card>
      </figure>
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
