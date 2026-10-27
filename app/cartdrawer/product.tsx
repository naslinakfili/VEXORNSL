"use client";

import InputNumber from "./inputnumber";
import Image from "next/image";
// Gunakan useCart dari global context agar data tersinkron di semua file
import { useCart } from "@/lib/cart";

export default function ProductList() {
  // Ambil data barang (items), fungsi hapus (removeFromCart), dan ubah jumlah (updateQuantity)
  const { items, removeFromCart, updateQuantity } = useCart();

  // Jika tidak ada produk di keranjang, tampilkan pesan kosong
  if (items.length === 0) {
    return (
      <p className="text-center text-sm text-gray py-8">
        Keranjang Anda kosong
      </p>
    );
  }

  return (
    <>
      {/* Looping langsung dari data context (items) bukan lagi dari state lokal */}
      {items.map((product) => (
        <li
          key={product.id}
          className="flex flex-col dark:bg-surface border rounded-lg mb-4"
        >
          <div className="flex gap-4 p-2.5">
            <Image
              src={product.url}
              alt={product.name || "Product Image"}
              width={80}
              height={80}
              className="w-20 h-20 object-cover rounded-md"
            />

            <div className="flex flex-col gap-2 w-full">
              <div className="flex justify-between">
                <h2 className="font-semibold text-[12px]">{product.name}</h2>
                <p className="font-bold text-[13px]">${product.price}</p>
              </div>

              <p className="text-[10px] text-gray">
                {product.color} / {product.size}{" "}
              </p>

              <div className="flex justify-between items-center w-full">
                {/* Hubungkan jumlah barang & fungsi update ke InputNumber */}
                <InputNumber
                  value={product.quantity ?? 1}
                  onChange={(newQty) => updateQuantity(product.id, newQty)}
                />

                {/* Saat tombol Remove diklik, hapus produk dari context */}
                <button
                  type="button"
                  onClick={() => removeFromCart(product.id)}
                  className="text-[11px] text-[#FF3B30] hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </li>
      ))}
    </>
  );
}
