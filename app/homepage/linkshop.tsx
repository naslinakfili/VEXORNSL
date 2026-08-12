
import Link from "next/link";
import { Button } from "@/components/ui/button"
import { ArrowRight, PlayCircle} from "lucide-react";
function LinkShopinHeroBanner() {


    return(
         <div className="flex gap-4 md:mt-8 mt-4 mb-4 md:mb-0 w-full">
            <Link href="./shop" className="w-full md:w-auto flex justify-center items-center gap-2">
                <Button className="flex-1 md:flex-none text-[1rem] text-white rounded-sm  bg-logo hover:bg-logo/85 px-5 md:py-0 py-5" >
                    
                        Shop Collection
                        <ArrowRight />
                    
                </Button>
            </Link>
            <Button variant="outline" className="md:flex hidden text-[1rem] rounded-sm px-5 ">Watch Film
                <PlayCircle />
            </Button>
                            
            </div>
        
    )
}

export default LinkShopinHeroBanner