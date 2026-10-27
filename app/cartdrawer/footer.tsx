"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardAction } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { ArrowRight } from "lucide-react";
//Gunakan useCart agar footer membaca data keranjang yang sama
import { useCart } from "@/lib/cart";

interface Product {
  id: number;
  name: string;
  price: number;
  url: string;
  color?: string;
  size?: string;
  quantity?: number;
}

interface FooterProps {
  products?: Product[];
}

function Footer({ products }: FooterProps) {
  // Ambil data items dari context keranjang (atau dari props jika ada)
  const { items } = useCart();
  const cartItems = products || items;

  // Hitung subtotal dinamis dari harga x jumlah quantity
  const subtotal = cartItems.reduce(
    (total, product) => total + product.price * (product.quantity ?? 1),
    0
  );

  // Hitung estimasi pajak (8% dari subtotal jika ada barang)
  const tax = subtotal > 0 ? subtotal * 0.08 : 0;

  // Hitung total akhir belanjaan
  const total = subtotal + tax;

  return (
    <footer>

      <form action="input-promo-code" className="flex gap-2 mb-6">
        <Input
          placeholder="Promo or discount code"
          className="rounded-md px-4 py-3"
        />
        <Button className="font-semibold px-6 py-3 rounded-md text-white border md:text-logo md:border-logo dark:bg-surface/80 hover:dark:bg-surface bg-white hover:bg-white/80">
          Apply
        </Button>
      </form>

      <Separator />

      <footer className="flex flex-col mt-6 gap-3">
        <div className="flex justify-between">
          <p className="text-gray">Subtotal</p>
          {/* Nilai subtotal otomatis terupdate */}
          <span className="font-semibold">${subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between text-gray">
          <p>Shipping</p>
          <p>Calculated at checkout</p>
        </div>

        <div className="flex justify-between">
          <p className="text-gray">Tax</p>
          {/* Nilai tax otomatis terupdate */}
          <span className="font-semibold">${tax.toFixed(2)}</span>
        </div>

        <Separator />

        <div className="flex justify-between">
          <p className="text-[16px] font-bold">Total</p>
          {/* Nilai total otomatis terupdate */}
          <span className="text-[20px] font-bold">${total.toFixed(2)}</span>
        </div>

        <Link href="/checkoutshipping" className="w-full">
          <Button className="bg-logo/90 hover:bg-logo mt-1 py-4 rounded-md w-full">
            <p className="text-[16px] font-bold text-white">
              Proceed to Checkout
            </p>
            <ArrowRight className="w-4 h-4 text-white" />
          </Button>
        </Link>

        <div className="flex justify-center py-3">
          <p className="font-semibold text-gray">Countinue Shopping</p>
        </div>
      </footer>
    </footer>
  );
}

export default Footer;
