"use client";
import { useTheme } from "next-themes";

import { useEffect, useState } from "react";
import { Search, ShoppingCart, User, Sun, Moon, X } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { createClient } from "@/lib/supabase/client";
import type { User as SupabaseUser } from "@supabase/supabase-js";
import { useCart } from "@/lib/cart";


export default function Header() {
  const [user, setUser] = useState<SupabaseUser | null>(null);

  const [form, setForm] = useState(false);

  
   // Ambil items langsung dari context keranjang global
  const { items } = useCart();

  // Hitung total jumlah barang di keranjang
  const totalProduct = items.reduce(
    (total, product) => total + (product.quantity ?? 1),
    0
  );

  useEffect(() => {
    const supabase = createClient();

    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };

    fetchUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

 

    return () => subscription.unsubscribe();
  }, []);

  const { resolvedTheme, setTheme } = useTheme();

  return (
    <header
      className={`${() => (resolvedTheme === "dark" ? "bg-dark" : "bg-[#0A0A0F]")}sticky top-0 z-50 py-5 lg:px-16 px-4 w-full border-b`}
    >
      <nav className="flex justify-between items-center gap-4">
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-logo rounded-xs"></div>
          <h3 className="text-[18px] font-extrabold">VEXOR</h3>
        </div>

        <div className="flex items-center md:gap-5 gap-2">
          <button
            type="button"
            className={`md:hidden ${form === false ? "block" : "hidden"}`}
            onClick={() => setForm((prev) => !prev)}
          >
            <Search aria-hidden="true" />
          </button>
          <form
            action="/shop"
            className={`${
              form
                ? "flex"
                : "hidden"
            } `}
          >
            <InputGroup className="md:flex w-full h-11 ">
              <InputGroupAddon>
                <InputGroupButton type="submit">
                  <Search aria-hidden="true" />
                </InputGroupButton>
              </InputGroupAddon>
              <InputGroupInput
                id="search"
                name="search"
                type="search"
                placeholder="Search products..."
                aria-label="Search products"
                autoFocus={form}
              />


            </InputGroup>
          </form>

          <div className="md:flex items-center gap-5 hidden">
            <Link className="text-[14px] font-semibold" href="/homepage">
              Home
            </Link>
            <Link className="text-[14px] font-semibold" href="/shop">
              Shop
            </Link>
            <a className="text-[14px] font-semibold" href="#about">
              About
            </a>
          </div>
          <Link
            className="flex items-center text-[0.8rem] font-semibold"
            href="/cartdrawer"
          >
            <ShoppingCart className="w-4.5 h-4.5 mx-2 my-2" />
            <div className="flex justify-center items-center bg-logo w-4 h-4 rounded-full text-[9px] font-bold">
              {totalProduct}
            </div>
          </Link>
          {user ? (
            <Link href="/profile" className="flex items-center">
              {user.user_metadata?.avatar_url ? (
                <Image
                  src={user.user_metadata.avatar_url}
                  alt="Profile"
                  width={28}
                  height={28}
                  unoptimized
                  className="rounded-full border border-gray-600 object-cover"
                />
              ) : (
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-logo text-xs font-semibold text-white">
                  {user.user_metadata?.full_name?.charAt(0) ||
                    user.email?.charAt(0).toUpperCase()}
                </span>
              )}
            </Link>
          ) : (
            <Link href="/login" className="flex">
              <User className="w-4 h-4" />
            </Link>
          )}
          <Button
            variant="outline"
            size="icon"
            aria-label="theme"
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
            className="flex w-8 h-8"
          >
            <Sun className="hidden h-4 w-4 dark:block" />
            <Moon className="block h-4 w-4 dark:hidden" />
          </Button>
        </div>
      </nav>
    </header>
  );
}
