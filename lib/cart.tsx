"use client";

import { createContext, useContext, useEffect, useState } from "react";

type CartItem = {
  id: number;
  name: string;
  price: number;
  url: string;
  color?: string;
  size?: string;
  quantity?: number;
};

type CartContextType = {
  items: CartItem[];
  addToCart: (product: CartItem) => void;
  // Fungsi hapus item: support nama removeToCart dan removeFromCart agar fleksibel
  removeToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
  // Fungsi untuk ubah jumlah quantity barang (tambah / kurang)
  updateQuantity: (id: number, quantity: number) => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    // 1. Pengecekan Lingkungan (Server vs Browser)
    if (typeof window === "undefined") return [];
    // 2. Mengambil data dari browser storage
    try {
      const saved = sessionStorage.getItem("cart");
      return saved ? JSON.parse(saved) : [];
    } catch {
      // 3. Fallback jika data korup/rusak
      return[];
    }
  });


  // Simpan ke sessionStorage setiap kali items berubah
  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  const addToCart = (product: CartItem) => {
    setItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity ?? 1) + 1 }
            : item,
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  //Logika untuk menghapus barang berdasarkan id produk
  const removeToCart = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };
  const removeFromCart = removeToCart; // alias agar bisa dipanggil dengan kedua nama

  //Logika untuk mengubah quantity barang (minimal 1)
  const updateQuantity = (id: number, quantity: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  return (
    //Masukkan removeFromCart dan updateQuantity ke Provider agar bisa dipakai di seluruh file
    <CartContext.Provider
      value={{ items, addToCart, removeToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}

