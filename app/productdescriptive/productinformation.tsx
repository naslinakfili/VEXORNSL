import { Star, Plus, Minus, ShoppingBag, Heart } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ProductStatistic from "./productstatistic";

function ProductInformation() {
  return (
    <div>
      <h1 className="md:text-[32px] text-[22px] font-extrabold">VEXOR AirPonds Pro Max</h1>
        <div className="flex flex-col md:gap-8 gap-5 md:mb-20 mb-4">
            <div className="flex gap-3 items-center mt-4">
            <span className="flex gap-1">
                <Star className="w-2.5 h-2.5 text-logo" />
                <Star className="w-2.5 h-2.5 text-logo" />
                <Star className="w-2.5 h-2.5 text-logo" />
                <Star className="w-2.5 h-2.5 text-logo" />
                <Star className="w-2.5 h-2.5 text-surface" />
            </span>
            <p className="md:text-[14px] text-[12px] text-[#8F8FA4]">(142 customer reviews)</p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
            <p className="md:text-[28px] text-[24px] font-extrabold">$349.99</p>
            <del className="text-[16px] text-gray">$399.99</del>
            <span className="bg-orange md:px-2.5 px-2 py-1 rounded-md md:text-[12px] text-[10px] font-bold">
                Save $50
            </span>
            </div>

            <p className="md:flex hidden text-[15px] text-[#8F8FA4]">
            Experience absolute luxury in personal audio. Feacturing custom
            acoustic design, advance active noise cancellation, and
            state-of-the-art dynamic head trackinng spatial sound.
            </p>

            <fieldset className="flex flex-col gap-3">
            <p className="md:text-[12px] text-[11px] md:text-white text-gray font-bold">SELECT COLOR</p>
            <RadioGroup defaultValue="option-one" className="flex gap-4">
                <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-one" id="option-one" className="!bg-white" />
                <Label htmlFor="option-one">White</Label>
                </div>
                <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="option-two" className="!bg-black" />
                <Label htmlFor="option-two">Black</Label>
                </div>
                <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-tree" id="option-tree" className="!bg-blue-600 " />
                <Label htmlFor="option-tree">Blue</Label>
                </div>
            </RadioGroup>
            </fieldset>

            <fieldset className="flex flex-col gap-3">
            <p className="md:text-[12px] text-[11px] md:text-white text-gray font-bold">SELECT SIZE</p>
            <div className="flex flex-wrap md:gap-3 gap-2 md:text-[13px] text-[12px] font-semibold">
                <Button className="bg-logo text-white hover:bg-logo/90 py-2.5 md:px-4.5 px-4 rounded-md">
                Standard
                </Button>
                <Button className="py-2.5 md:px-4.5 px-4 rounded-md" variant="outline">
                Pro Cushions (+ $20)
                </Button>
            </div>
            </fieldset>

            <div className="flex md:justify-normal justify-between gap-6 items-center">
            <div className="flex max-w-28 py-1">
                <Button
                className="rounded-r-none border-r-0"
                variant="outline"
                size="icon"
                >
                <Minus />
                </Button>
                <Input
                type="number"
                className="w-14 text-center rounded-none border-x-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none !ring-0 !ring-offset-0 !outline-none !shadow-none focus-visible:!ring-0 focus-visible:!ring-offset-0 focus-visible:!border-input"
                ></Input>
                <Button
                className="rounded-l-none border-l-0"
                variant="outline"
                size="icon"
                >
                <Plus />
                </Button>
            </div>

            <p className="md:flex hidden text-orange text-[13px] font-semibold">
                Only 5 left in stock - order-soon
            </p>
            <p className="flex md:hidden text-orange text-[12px] font-semibold">
                Only 5 left!
            </p>
            </div>

            <div className="md:hidden flex flex-col rounded-md bg-surface gap-2.5 p-3">
                <h3 className="text-[13px] font-bold">Tecnical specs</h3>
                <p className="text-[12px] text-gray">
                    Experience absolute luxury in personal audio. Feacturing custom
                    acoustic design, advance active noise cancellation, and
                    state-of-the-art dynamic head trackinng spatial sound.
                </p>
            </div>

            <div className="flex items-center md:justify-normal justify-center gap-4 py-3 md:flex-wrap">
                <Button className="flex gap-2 py-4 md:px-12 px-10 bg-logo hover:bg-logo/90">
                    <ShoppingBag />
                    <p>Add o cart</p>
                </Button>
                <Button className="md:px-12 px-10 py-4">Buy Now</Button>
                <Button variant="outline" className="md:flex hidden">
                    <Heart />
                </Button>
            </div>
        </div>

        <div className="md:block hidden">
            <ProductStatistic />
        </div>
        
    </div>
  );
}

export default ProductInformation;
