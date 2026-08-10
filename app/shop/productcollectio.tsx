import {Select,SelectContent,SelectGroup,SelectItem,SelectLabel,SelectTrigger,SelectValue,} from "@/components/ui/select"
import {ToggleGroup,ToggleGroupItem,} from "@/components/ui/toggle-group"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field"
import { Star, Plus } from "lucide-react";
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from 'next/image';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

function ProductCollection() {
    return(
        <main>
            <nav>
                Home-Shop-Audio Collection
            </nav>

            <header className="flex justify-between">
                <div className="flex">
                    <h1>Audio Collectio</h1>
                    <span>6 items</span>
                </div>
                <nav className="flex">
                    <SelectList />
                    <ToggleGroupOutline />
                </nav>
                
            </header>

            <div className="flex flex-col">
                <CardPriceRange />
                <ProductSection />
                <div>
                    <PrroductPagination />
                </div>

            </div>



        </main>
    )
}

export default ProductCollection

// =================================
// FILTER CARD
// =================================
function CardPriceRange() {
    return(
        <Card>
            <div>
                <h3>PRICE RANGE</h3>
                <Slider
                defaultValue={[25, 50]}
                max={100}
                step={5}
                className="mx-auto w-full max-w-xs "
                />
            </div>

            <div>
                <h3>CATEGORY</h3>
                <div>
                    <Field  orientation="horizontal">
                        <Checkbox />
                        <FieldLabel htmlFor="five-star" >Over-Ear Headphones</FieldLabel>
                    </Field>

                    <Field  orientation="horizontal">
                        <Checkbox />
                        <FieldLabel htmlFor="five-star" >Wireless Earbuds</FieldLabel>
                    </Field>

                    <Field  orientation="horizontal">
                        <Checkbox />
                        <FieldLabel htmlFor="five-star" >Dekstop Audio</FieldLabel>
                    </Field>

                    <Field  orientation="horizontal">
                        <Checkbox />
                        <FieldLabel htmlFor="five-star" >Portable Speaker</FieldLabel>
                    </Field>

                </div>
            </div>

            <div>
                <h3>MIN RATING</h3>
                <RadioGroup className="text-white">
                    <Field  orientation="horizontal">
                        <RadioGroupItem value="5star" id="five-star"></RadioGroupItem>
                        <FieldLabel htmlFor="five-star" ><Star /><Star /><Star /><Star /><Star /></FieldLabel>
                    </Field>
                    
                    <Field orientation="horizontal">
                        <RadioGroupItem value="4star" id="four-star"/>
                        <FieldLabel htmlFor="four-star"><Star /><Star /><Star /><Star /></FieldLabel>
                    </Field>

                    <Field orientation="horizontal">
                        <RadioGroupItem value="3star" id="tree-star"/>
                        <FieldLabel htmlFor="tree-star"><Star /><Star /><Star /></FieldLabel>
                    </Field>
                    
                
                </RadioGroup>

            </div>

            <div>
                <Field orientation="horizontal">
                    <FieldLabel htmlFor="stock">In Stock Only</FieldLabel>
                    <Switch id="stock"/>
                </Field>
            </div>
            
        </Card>
    )
}
// =================================
// SELECT PRODUCT
// =================================
function SelectList() {
    return(
        <Select>
            <SelectTrigger className="w-full max-w-48">
                <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
// ==================================
// TOGGLE PRODUCT
// ==================================
function ToggleGroupOutline() {
  return (
    <ToggleGroup spacing={0} variant="outline" type="single" defaultValue="all">
      <ToggleGroupItem value="all" aria-label="Toggle all">
        All
      </ToggleGroupItem>
      <ToggleGroupItem value="missed" aria-label="Toggle missed">
        Missed
      </ToggleGroupItem>
    </ToggleGroup>
  )
}

function ProductSection() {
    return(
        <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-3 mt-4 md:mt-10 md:mb-12">
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
                                        <Badge className=" bg-logo text-white z-20 rounded-sm font-bold">New</Badge>
                                    </CardAction>
                                <div className="">
                                    
                                    <h2 className="ml-2.5 text-[12px] font-bold">SoundWave Alpha</h2>
                                    <div className="flex ml-2.5"><Star className="w-2.5 h-2.5 text-logo" /><Star className="w-2.5 h-2.5 text-logo" /><Star className="w-2.5 h-2.5 text-logo" /><Star className="w-2.5 h-2.5 text-logo" /><Star className="w-2.5 h-2.5" /></div>
                                    <div className="flex px-2.5 justify-between items-center">
                                        <p className="">$259.99</p>
                                        <Button className="bg-logo w-5.5 h-5.5 rounded-sm"><Plus /></Button>
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
                                        <Badge variant="secondary" className="bg-logo text-white z-22 rounded-sm font-bold">New</Badge>
                                    </CardAction>
                                    <h2 className="ml-2.5 text-[12px] font-bold">SoundWave Alpha</h2>
                                    <div className="flex ml-2.5"><Star className="w-2.5 h-2.5 text-logo" /><Star className="w-2.5 h-2.5 text-logo" /><Star className="w-2.5 h-2.5 text-logo" /><Star className="w-2.5 h-2.5 text-logo" /><Star className="w-2.5 h-2.5" /></div>
                                    <div className="flex px-2.5 justify-between items-center">
                                        <p className="">$259.99</p>
                                        <Button className="bg-logo w-5.5 h-5.5 rounded-sm"><Plus /></Button>
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
                                        <Badge variant="secondary" className="bg-logo text-white z-22 rounded-sm font-bold">New</Badge>
                                    </CardAction>
                                    <h2 className="ml-2.5 text-[12px] font-bold">SoundWave Alpha</h2>
                                    <div className="flex ml-2.5"><Star className="w-2.5 h-2.5 text-logo" /><Star className="w-2.5 h-2.5 text-logo" /><Star className="w-2.5 h-2.5 text-logo" /><Star className="w-2.5 h-2.5 text-logo" /><Star className="w-2.5 h-2.5" /></div>
                                    <div className="flex px-2.5 justify-between items-center">
                                        <p className="">$259.99</p>
                                        <Button className="bg-logo w-5.5 h-5.5 rounded-sm"><Plus /></Button>
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
                                        <Badge variant="secondary" className="bg-logo text-white z-22 rounded-sm font-bold">New</Badge>
                                    </CardAction>
                                    <h2 className="ml-2.5 text-[12px] font-bold">SoundWave Alpha</h2>
                                    <div className="flex ml-2.5"><Star className="w-2.5 h-2.5 text-logo" /><Star className="w-2.5 h-2.5 text-logo" /><Star className="w-2.5 h-2.5 text-logo" /><Star className="w-2.5 h-2.5 text-logo" /><Star className="w-2.5 h-2.5" /></div>
                                    <div className="flex px-2.5 justify-between items-center">
                                        <p className="">$259.99</p>
                                        <Button className="bg-logo w-5.5 h-5.5 rounded-sm"><Plus /></Button>
                                    </div>
                                    
                                </div>
                            </Card>
                        </figure>
        
                    </div>
    )
}

function PrroductPagination() {
    return(
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                <PaginationLink href="#" isActive>2</PaginationLink>
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
    )
}

