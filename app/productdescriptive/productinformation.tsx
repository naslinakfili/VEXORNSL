"use client";

import { useState } from "react";
import { Star, Plus, Minus, ShoppingBag, Heart } from "lucide-react";
import Link from "next/link";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ProductStatistic from "./productstatistic";
import { useCart } from "@/lib/cart";

interface ProductInformationProps {
  product: {
    id: number;
    name: string;
    price: number;
    url: string;
    color?: string;
    size?: string;
  };
}

function ProductInformation({ product }: ProductInformationProps) {
  const colorString = product.color || "";
  const colors = colorString ? colorString.split(",").map((c) => c.trim()) : [];

  const sizeString = product.size || "";
  const sizes = sizeString ? sizeString.split(",").map((c) => c.trim()) : [];

  const [selectedColor, setSelectedColor] = useState(colors[0] || "");

  const [selectedSize, setSelectedSize] = useState(sizes[0] || "");

  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity((prev) => (prev < 999 ? prev + 1 : 999));
  };

  const handleDecrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value);
    setQuantity(isNaN(val) ? 1 : Math.min(999, Math.max(1, val)));
  };

  // controll cart
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      url: product.url,
      color: selectedColor,
      size: selectedSize,
      quantity: quantity,
    });
  };

  return (
    <div>
      <h1 className="md:text-[32px] text-[22px] font-extrabold">
        {product.name}
      </h1>
      <div className="flex flex-col md:gap-8 gap-5 md:mb-20 mb-4">
        <div className="flex gap-3 items-center mt-4">
          <span className="flex gap-1">
            <Star className="w-2.5 h-2.5 text-logo" />
            <Star className="w-2.5 h-2.5 text-logo" />
            <Star className="w-2.5 h-2.5 text-logo" />
            <Star className="w-2.5 h-2.5 text-logo" />
            <Star className="w-2.5 h-2.5 text-surface" />
          </span>
          <p className="md:text-[14px] text-[12px] text-[#8F8FA4]">
            (142 customer reviews)
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <p className="md:text-[28px] text-[24px] font-extrabold">
            ${product.price}
          </p>
        </div>

        <p className="md:flex hidden text-[15px] text-[#8F8FA4]">
          Experience absolute luxury in personal audio. Feacturing custom
          acoustic design, advance active noise cancellation, and
          state-of-the-art dynamic head trackinng spatial sound.
        </p>

        <fieldset className="flex flex-col gap-3">
          <p className="md:text-[12px] text-[11px] md:text-white text-gray font-bold">
            SELECT COLOR
          </p>
          <RadioGroup
            defaultValue={colors.length > 0 ? `color-${colors[0]}` : ""}
            className="flex gap-4"
          >
            {colors.map((colorName, index) => (
              <div key={index} className="flex items-center space-x-2">
                <RadioGroupItem
                  value={`color-${colorName}`}
                  id={`color-${colorName}`}
                  style={{ backgroundColor: colorName }}
                />
                <Label htmlFor={`color-${colorName}`}>{colorName}</Label>
              </div>
            ))}
          </RadioGroup>
        </fieldset>

        <fieldset className="flex flex-col gap-3">
          <p className="md:text-[12px] text-[11px] md:text-white text-gray font-bold">
            SELECT SIZE
          </p>
          <div className="flex flex-wrap md:gap-3 gap-2 md:text-[13px] text-[12px] font-semibold">
            {sizes.map((sizeName, index) => {
              const isSelected = selectedSize === sizeName;
              return (
                <Button
                  key={index}
                  type="button"
                  value={sizeName}
                  onClick={() => setSelectedSize(sizeName)}
                  className={`py-2.5 md:px-4.5 px-4 rounded-md transition-colors ${
                    isSelected
                      ? "bg-logo text-white hover:bg-logo/90"
                      : "bg-transparent text-gray border border-input hover:bg-surface"
                  }`}
                  variant={isSelected ? "default" : "outline"}
                >
                  {sizeName}
                </Button>
              );
            })}
          </div>
        </fieldset>

        <div className="flex md:justify-normal justify-between gap-6 items-center">
          <div className="flex max-w-28 py-1">
            <Button
              type="button"
              onClick={handleDecrement}
              className="rounded-r-none border-r-0"
              variant="outline"
              size="icon"
            >
              <Minus />
            </Button>
            <Input
              type="number"
              value={quantity}
              onChange={handleInputChange}
              min="1"
              max="999"
              className="w-14 font-bold text-center rounded-none border-x-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none !ring-0 !ring-offset-0 !outline-none !shadow-none focus-visible:!ring-0 focus-visible:!ring-offset-0 focus-visible:!border-input"
            />
            <Button
              type="button"
              onClick={handleIncrement}
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

        <div className="flex items-center md:justify-normal justify-center gap-4 py-3 flex-wrap ">
          <Button
            className="flex gap-2 py-4 md:px-12 px-10 bg-logo hover:bg-logo/90"
            onClick={handleAddToCart}
          >
            <ShoppingBag />
            <p>Add to cart</p>
          </Button>
          <Link href="/checkoutshipping">
            <Button className="md:px-12 px-10 py-4">Buy Now</Button>
          </Link>
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
