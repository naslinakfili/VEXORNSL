import { Search, ShoppingCart, User, Sun, Moon } from "lucide-react";
import {InputGroup,InputGroupAddon,InputGroupInput,} from "@/components/ui/input-group"
import Link from "next/link";
import { Button } from "@/components/ui/button"

export default function Header() {
    return (
        <header className="sticky top-0 z-50 py-5 lg:px-16 px-4 w-full border-b bg-[#0A0A0F]">
            <nav className="flex justify-between items-center gap-4">
                <div className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-logo rounded-xs"></div>
                    <h3 className="text-[18px] font-extrabold">VEXOR</h3>
                </div>

                <InputGroupDemo />

                <div className="flex items-center md:gap-5 gap-2">
                  <div className="md:flex items-center gap-5 hidden">
                    <Link className="text-[14px] font-semibold" href="/homepage">Home</Link>
                    <Link className="text-[14px] font-semibold" href="/shop">Shop</Link>
                    <Link className="text-[14px] font-semibold" href="/about">About</Link>
                  </div>
                    <Link className="flex items-center text-[0.8rem] font-semibold" href="/bag">
                      <ShoppingCart className="w-4.5 h-4.5 mx-2 my-2" />
                      <div className="flex justify-center items-center bg-logo w-4 h-4 rounded-full text-[9px] font-bold">1</div>
                    </Link>
                    <Link href="/profil" className="md:flex hidden">
                      <User className="w-4 h-4" />
                    </Link>
                    <Button variant="outline" size="icon" aria-label="theme" className="w-6 h-6 md:flex hidden">
                      <Moon className="w-6 h-6 bg-logo rounded-sm"/>
                      <Sun className="hidden" />
                    </Button>
                </div>

            </nav>
        </header>
    )
}

function InputGroupDemo() {
  return (
    <InputGroup className="max-w-xs">
      <InputGroupInput placeholder="Search..." />
      <InputGroupAddon>
        <Search />
      </InputGroupAddon>
    </InputGroup>
  )
}
