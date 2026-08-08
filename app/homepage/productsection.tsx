import { Star, Plus } from "lucide-react";
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from 'next/image';

function ProductSection() {


    return(
        <section className="flex flex-col mt-6 md:mt-10 px-4 lg:px-16">
            <div className="flex items-center justify-between w-full">
                <h2 className="text-[20px] font-bold">Treding Now</h2>
                <Button className="text-[12px] font-semibold text-logo" variant="link">View All Product</Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-3 mt-4 md:mt-10">
                <figure className="w-full">
                    <Card className="relative bg-surface mx-auto pt-0 max-h-[195px] md:min-h-[347px] w-full">
                        
                        <div className="relative w-full min-h-[120px] md:min-h-[220px]">
                            <Image
                            src="/images/img-azer.png"
                            alt="Event cover"
                            fill
                            className="relative aspect-video  w-full object-cover brightness-60 grayscale dark:brightness-40"
                        />
                        </div>
                        <CardAction className="absolute top-2 left-2">
                                <Badge className=" bg-logo text-white z-20 rounded-sm font-bold">New</Badge>
                            </CardAction>
                        <div className="">
                            
                            <h2 className="ml-2.5 text-[12px] font-bold">SoundWave Alpha</h2>
                            <div className="flex ml-2.5"><Star className="w-2.5 h-2.5 text-logo" /><Star className="w-2.5 h-2.5 text-logo" /><Star className="w-2.5 h-2.5 text-logo" /><Star className="w-2.5 h-2.5 text-logo" /><Star className="w-2.5 h-2.5" /></div>
                            <div className="flex px-2.5 justify-between items-center">
                                <p className="">$259.99</p>
                                <Button className="bg-logo w-5.5 h-5.5 rounded-sm"><Plus /></Button>
                            </div>
                            
                        </div>
                    </Card>
                </figure>

                <figure className="w-full">
                    <Card className="relative bg-surface mx-auto pt-0 max-h-[195px] md:min-h-[347px] w-full">
                        
                        <div className="relative w-full min-h-[120px] md:min-h-[220px]">
                            <Image
                            src="/images/img-azer.png"
                            alt="Event cover"
                            fill
                            className="relative aspect-video  w-full object-cover brightness-60 grayscale dark:brightness-40"
                        />
                        </div>
                        <div className="">
                            <CardAction className="absolute top-2 left-2">
                                <Badge variant="secondary" className="bg-logo text-white z-22 rounded-sm font-bold">New</Badge>
                            </CardAction>
                            <h2 className="ml-2.5 text-[12px] font-bold">SoundWave Alpha</h2>
                            <div className="flex ml-2.5"><Star className="w-2.5 h-2.5 text-logo" /><Star className="w-2.5 h-2.5 text-logo" /><Star className="w-2.5 h-2.5 text-logo" /><Star className="w-2.5 h-2.5 text-logo" /><Star className="w-2.5 h-2.5" /></div>
                            <div className="flex px-2.5 justify-between items-center">
                                <p className="">$259.99</p>
                                <Button className="bg-logo w-5.5 h-5.5 rounded-sm"><Plus /></Button>
                            </div>
                            
                        </div>
                    </Card>
                </figure>

                <figure className="w-full">
                    <Card className="relative bg-surface mx-auto pt-0 max-h-[195px] md:min-h-[347px] w-full">
                        
                        <div className="relative w-full min-h-[120px] md:min-h-[220px]">
                            <Image
                            src="/images/img-azer.png"
                            alt="Event cover"
                            fill
                            className="relative aspect-video  w-full object-cover brightness-60 grayscale dark:brightness-40"
                        />
                        </div>
                        <div className="">
                            <CardAction className="absolute top-2 left-2">
                                <Badge variant="secondary" className="bg-logo text-white z-22 rounded-sm font-bold">New</Badge>
                            </CardAction>
                            <h2 className="ml-2.5 text-[12px] font-bold">SoundWave Alpha</h2>
                            <div className="flex ml-2.5"><Star className="w-2.5 h-2.5 text-logo" /><Star className="w-2.5 h-2.5 text-logo" /><Star className="w-2.5 h-2.5 text-logo" /><Star className="w-2.5 h-2.5 text-logo" /><Star className="w-2.5 h-2.5" /></div>
                            <div className="flex px-2.5 justify-between items-center">
                                <p className="">$259.99</p>
                                <Button className="bg-logo w-5.5 h-5.5 rounded-sm"><Plus /></Button>
                            </div>
                            
                        </div>
                    </Card>
                </figure>



                <figure className="w-full">
                    <Card className="relative bg-surface mx-auto pt-0 max-h-[195px] md:min-h-[347px] w-full">
                        
                        <div className="relative w-full min-h-[120px] md:min-h-[220px]">
                            <Image
                            src="/images/img-azer.png"
                            alt="Event cover"
                            fill
                            className="relative aspect-video  w-full object-cover brightness-60 grayscale dark:brightness-40"
                        />
                        </div>
                        <div className="">
                            <CardAction className="absolute top-2 left-2">
                                <Badge variant="secondary" className="bg-logo text-white z-22 rounded-sm font-bold">New</Badge>
                            </CardAction>
                            <h2 className="ml-2.5 text-[12px] font-bold">SoundWave Alpha</h2>
                            <div className="flex ml-2.5"><Star className="w-2.5 h-2.5 text-logo" /><Star className="w-2.5 h-2.5 text-logo" /><Star className="w-2.5 h-2.5 text-logo" /><Star className="w-2.5 h-2.5 text-logo" /><Star className="w-2.5 h-2.5" /></div>
                            <div className="flex px-2.5 justify-between items-center">
                                <p className="">$259.99</p>
                                <Button className="bg-logo w-5.5 h-5.5 rounded-sm"><Plus /></Button>
                            </div>
                            
                        </div>
                    </Card>
                </figure>

            </div>

        </section>
    )
}

export default ProductSection