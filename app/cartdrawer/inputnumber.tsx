'use client'
import { Plus, Minus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState} from "react";
export default function InputNumber() {
    const [quantity, setQuantity] = useState(1);
    const handleIncrement = () => {
    setQuantity((prev) =>(prev < 999 ? prev + 1 : 999));
  };

  const handleDecrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value);
    setQuantity(isNaN(val) ? 1 : Math.min(999, Math.max(1, val)));
};
    return(
    <div className="flex w-fit h-[26px] bg-background border rounded-md">
                    <Button
                    onClick={handleDecrement}
                      className="rounded-r-none rounded-l-md border-0 p-0 w-[26px] h-[26px] bg-transparent hover:bg-muted"
                      variant="ghost"
                      size="icon"
                    >
                      <Minus className="w-2.5 h-2.5 text-gray" />
                    </Button>
                    <Input
                      type="number"
                      min="1"
                      max="999"
                      value={quantity}
                      onChange={handleInputChange}
                      maxLength={3}
                      className="flex !bg-black text-[13px] font-bold h-[24px] w-8 p-0 rounded-none border-0 text-foreground [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none ring-0! ring-offset-0! outline-none! shadow-none! focus-visible:ring-0! focus-visible:ring-offset-0! focus-visible:border-input! text-center"
                    ></Input>
                    <Button
                    onClick={handleIncrement}
                      className="rounded-l-none rounded-r-md border-0 p-0 w-[26px] h-[26px] bg-transparent hover:bg-muted"
                      variant="ghost"
                      size="icon"
                    >
                      <Plus className="w-2.5 h-2.5 text-gray" />
                    </Button>
    </div>
    )
}