'use client'
import { Plus, Minus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

//Interface Props agar InputNumber bisa menerima angka dan fungsi pengubah dari induk (product.tsx)
interface InputNumberProps {
  value?: number;
  onChange?: (quantity: number) => void;
}

export default function InputNumber({ value, onChange }: InputNumberProps) {
  //State internal jika komponen dipakai tanpa props
  const [internalQuantity, setInternalQuantity] = useState(1);
  
  //Gunakan nilai value dari props jika ada, jika tidak pakai internalQuantity
  const currentQuantity = value !== undefined ? value : internalQuantity;

  //Fungsi tombol tambah (+)
  const handleIncrement = () => {
    const nextVal = currentQuantity < 999 ? currentQuantity + 1 : 999;
    if (onChange) {
      onChange(nextVal); // Kirim angka baru ke parent/cart context
    } else {
      setInternalQuantity(nextVal);
    }
  };

  //Fungsi tombol kurang (-)
  const handleDecrement = () => {
    const nextVal = currentQuantity > 1 ? currentQuantity - 1 : 1;
    if (onChange) {
      onChange(nextVal); // Kirim angka baru ke parent/cart context
    } else {
      setInternalQuantity(nextVal);
    }
  };

  //Fungsi saat mengetik angka manual di input box
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value);
    const nextVal = isNaN(val) ? 1 : Math.min(999, Math.max(1, val));
    if (onChange) {
      onChange(nextVal);
    } else {
      setInternalQuantity(nextVal);
    }
  };

  return (
    <div className="flex w-fit h-6.5 bg-background border rounded-md">
      <Button
        onClick={handleDecrement}
        className="rounded-r-none rounded-l-md border-0 p-0 w-6.5 h-6.5 bg-transparent hover:bg-muted"
        variant="ghost"
        size="icon"
      >
        <Minus className="w-2.5 h-2.5 text-gray" />
      </Button>
      <Input
        type="number"
        min="1"
        max="999"
        value={currentQuantity}
        onChange={handleInputChange}
        maxLength={3}
        className="flex dark:bg-black! text-[13px] font-bold h-6 w-8 p-0 rounded-none border-0 text-foreground [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none ring-0! ring-offset-0! outline-none! shadow-none! focus-visible:ring-0! focus-visible:ring-offset-0! focus-visible:border-input! text-center"
      />
      <Button
        onClick={handleIncrement}
        className="rounded-l-none rounded-r-md border-0 p-0 w-6.5 h-6.5 bg-transparent hover:bg-muted"
        variant="ghost"
        size="icon"
      >
        <Plus className="w-2.5 h-2.5 text-gray" />
      </Button>
    </div>
  );
}
