"use client";

import { Progress } from "@/components/ui/progress";
import styles from "./cartdarwer.module.css";
import Product from "./product";
import Close from "./close";
// Gunakan useCart agar Header membaca data keranjang yang sama
import { useCart } from "@/lib/cart";

export default function Header() {
  // Ambil items langsung dari context keranjang global
  const { items } = useCart();

  // Hitung total jumlah barang di keranjang
  const totalProduct = items.reduce(
    (total, product) => total + (product.quantity ?? 1),
    0
  );

  const freeShippingMinimum = 50; // Minimal belanja untuk free ongkir $50

  // Hitung subtotal harga belanjaan secara otomatis
  const subtotal = items.reduce(
    (total, product) => total + product.price * (product.quantity ?? 1),
    0
  );

  // Hitung sisa belanja agar dapat free ongkir
  const remaining = Math.max(0, freeShippingMinimum - subtotal);
  // Hitung persen progress bar free shipping (maksimal 100%)
  const progress = Math.min(100, (subtotal / freeShippingMinimum) * 100);

  return (
    <aside>
      <header className="flex justify-between">
        <h1 className="flex items-center gap-2 mb-6">
          <p className="text-[20px] font-bold">You Cart</p>
          <span className="flex justify-center items-center bg-logo text-white w-6 h-6 rounded-full text-[12px] font-bold">
            {totalProduct}
          </span>
        </h1>
        <Close />
      </header>

      <section className="flex flex-col gap-3 bg-surface md:bg-gray/10 border px-4 py-4 rounded-lg mb-6">
        <p className="text-[13px] font-medium">
          {remaining > 0 ? (
            // Tampilkan sisa belanja jika belum memenuhi syarat
            <>
              Spend <span className="text-logo">${remaining.toFixed(2)}</span>{" "}
              more for FREE shipping
            </>
          ) : (
            // Tampilkan pesan jika sudah dapat free ongkir
            <span className="text-logo">You qualify for FREE shipping!</span>
          )}
        </p>
        <Progress value={progress} className="h-1.5"></Progress>
      </section>

      <div
        className={`h-81.25 mb-6 overflow-y-auto overscroll-auto touch-pan-y ${styles["autohide-scrollbar"]}`}
      >
        <ul className="flex flex-col">
          {/* Render ProductList tanpa perlu kirim props manual */}
          <Product />
        </ul>
      </div>
    </aside>
  );
}
