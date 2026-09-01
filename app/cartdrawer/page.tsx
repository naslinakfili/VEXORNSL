"use client";

import Header from "./header";
import Footer from "./footer";
import { useCart } from "@/lib/cart";

export default function CartDrawer() {
  const { items } = useCart();

  return (
    <div className="flex w-full justify-end">
      <aside className="max-w-[440px] w-full md:bg-surface bg-black py-8 px-6">
        <Header products={items} />
        <Footer />
      </aside>
    </div>
  );
}
