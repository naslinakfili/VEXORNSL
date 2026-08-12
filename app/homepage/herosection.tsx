import { ArrowRight, PlayCircle} from "lucide-react";
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from 'next/image';
import LinkShopinHeroBanner from "./linkshop"
import Link from "next/link";


function HeroSection () {
    return (
        <section className="hero flex md:flex-row flex-col  justify-between w-full px-4 lg:px-16 lg:pt-16 mt-4 lg:gap-16 md:gap-4 md:mt-16">
            
            <div className="flex flex-col lg:max-w-[648px] w-full">
                <Badge variant="outline" className="flex items-center text-[12px] font-bold md:mb-8 mb-2">
                    <div className="bg-logo w-2 h-2 rounded-md"></div>
                    <p className="text-[10px] font-semibold">LAUNCH EDITION</p>
                </Badge>

                <h1 className="lg:text-[64px] text-[32px] text-4xl font-extrabold mb-2">Engineered for Tomorrow</h1>
                <p className="lg:text-[18px] text-[14px] lg:font-semibold text-white/30">Step into the future of sound and performance. Expirience ultra-premium hardware designed specifically for modern  digital creators.</p>

               <LinkShopinHeroBanner />
            </div>

            <div className="relative lg:min-w-[550px] lg:min-h-[400px] w-full min-h-[180px]">
                        <Image src="/images/Hero-Right-Media.png" alt="Hero Image" fill className="object-cover rounded-2xl" />
            </div>
        
        </section>

    )
}

export default HeroSection