"use client";

import { useEffect, useState } from "react";
import { Search, ShoppingCart, User, Sun, Moon } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { createClient } from "@/lib/supabase/client";
import type { User as SupabaseUser } from "@supabase/supabase-js";

export default function Header() {
  const [user, setUser] = useState<SupabaseUser | null>(null);

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

  return (
    <header className="sticky top-0 z-50 py-5 lg:px-16 px-4 w-full border-b bg-[#0A0A0F]">
      <nav className="flex justify-between items-center gap-4">
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-logo rounded-xs"></div>
          <h3 className="text-[18px] font-extrabold">VEXOR</h3>
        </div>

        <form action="/shop" className="flex-1 max-w-xl">
          <InputGroup className="h-11">
            <InputGroupAddon>
              <Search aria-hidden="true" />
            </InputGroupAddon>
            <InputGroupInput
              id="search"
              name="search"
              type="search"
              placeholder="Search products..."
              aria-label="Search products"
            />
          </InputGroup>
        </form>

        <div className="flex items-center md:gap-5 gap-2">
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
              1
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
            className="w-6 h-6 md:flex hidden"
          >
            <Moon className="w-6 h-6 bg-logo rounded-sm" />
            <Sun className="hidden" />
          </Button>
        </div>
      </nav>
    </header>
  );
}
