import { Star, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

function ProductRelate() {
  return (
    <section className="flex flex-col mt-6 px-4 lg:px-16">
      <div className="">
        <h2 className="text-[24px] font-bold">You May Also Like</h2>
      </div>

      <div className="flex overflow-x-auto gap-6 mt-4 md:mt-10  p-8 scrollbar-thin scrollbar-thumb-logo scrollbar-track-transparent">
        <figure className="flex-none w-[260px] md:w-[300px] lg:w-[320px]">
          <Card className="relative bg-surface mx-auto pt-0 max-h-[195px] md:min-h-[347px] w-full transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <div className="relative w-full min-h-[120px] md:min-h-[220px]">
              <Image
                src="/images/img-azer.png"
                alt="Event cover"
                fill
                className="relative aspect-video  w-full object-cover brightness-60 grayscale dark:brightness-40"
              />
            </div>
            <CardAction className="absolute top-2 left-2">
              <Badge className=" bg-logo text-white z-20 rounded-sm font-bold">
                New
              </Badge>
            </CardAction>
            <div className="">
              <h2 className="ml-2.5 text-[12px] font-bold">SoundWave Alpha</h2>
              <div className="flex ml-2.5">
                <Star className="w-2.5 h-2.5 text-logo" />
                <Star className="w-2.5 h-2.5 text-logo" />
                <Star className="w-2.5 h-2.5 text-logo" />
                <Star className="w-2.5 h-2.5 text-logo" />
                <Star className="w-2.5 h-2.5" />
              </div>
              <div className="flex px-2.5 justify-between items-center">
                <p className="">$259.99</p>
                <Button className="bg-logo w-5.5 h-5.5 rounded-sm">
                  <Plus />
                </Button>
              </div>
            </div>
          </Card>
        </figure>

        <figure className="flex-none w-[260px] md:w-[300px] lg:w-[320px]">
          <Card className="relative bg-surface mx-auto pt-0 max-h-[195px] md:min-h-[347px] w-full transition-transform duration-300 hover:scale-105 hover:shadow-lg">
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
                <Badge
                  variant="secondary"
                  className="bg-logo text-white z-22 rounded-sm font-bold"
                >
                  New
                </Badge>
              </CardAction>
              <h2 className="ml-2.5 text-[12px] font-bold">SoundWave Alpha</h2>
              <div className="flex ml-2.5">
                <Star className="w-2.5 h-2.5 text-logo" />
                <Star className="w-2.5 h-2.5 text-logo" />
                <Star className="w-2.5 h-2.5 text-logo" />
                <Star className="w-2.5 h-2.5 text-logo" />
                <Star className="w-2.5 h-2.5" />
              </div>
              <div className="flex px-2.5 justify-between items-center">
                <p className="">$259.99</p>
                <Button className="bg-logo w-5.5 h-5.5 rounded-sm">
                  <Plus />
                </Button>
              </div>
            </div>
          </Card>
        </figure>

        <figure className="flex-none w-[260px] md:w-[300px] lg:w-[320px]">
          <Card className="relative bg-surface mx-auto pt-0 max-h-[195px] md:min-h-[347px] w-full transition-transform duration-300 hover:scale-105 hover:shadow-lg">
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
                <Badge
                  variant="secondary"
                  className="bg-logo text-white z-22 rounded-sm font-bold"
                >
                  New
                </Badge>
              </CardAction>
              <h2 className="ml-2.5 text-[12px] font-bold">SoundWave Alpha</h2>
              <div className="flex ml-2.5">
                <Star className="w-2.5 h-2.5 text-logo" />
                <Star className="w-2.5 h-2.5 text-logo" />
                <Star className="w-2.5 h-2.5 text-logo" />
                <Star className="w-2.5 h-2.5 text-logo" />
                <Star className="w-2.5 h-2.5" />
              </div>
              <div className="flex px-2.5 justify-between items-center">
                <p className="">$259.99</p>
                <Button className="bg-logo w-5.5 h-5.5 rounded-sm">
                  <Plus />
                </Button>
              </div>
            </div>
          </Card>
        </figure>

        <figure className="flex-none w-[260px] md:w-[300px] lg:w-[320px]">
          <Card className="relative bg-surface mx-auto pt-0 max-h-[195px] md:min-h-[347px] w-full transition-transform duration-300 hover:scale-105 hover:shadow-lg">
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
                <Badge
                  variant="secondary"
                  className="bg-logo text-white z-22 rounded-sm font-bold"
                >
                  New
                </Badge>
              </CardAction>
              <h2 className="ml-2.5 text-[12px] font-bold">SoundWave Alpha</h2>
              <div className="flex ml-2.5">
                <Star className="w-2.5 h-2.5 text-logo" />
                <Star className="w-2.5 h-2.5 text-logo" />
                <Star className="w-2.5 h-2.5 text-logo" />
                <Star className="w-2.5 h-2.5 text-logo" />
                <Star className="w-2.5 h-2.5" />
              </div>
              <div className="flex px-2.5 justify-between items-center">
                <p className="">$259.99</p>
                <Button className="bg-logo w-5.5 h-5.5 rounded-sm">
                  <Plus />
                </Button>
              </div>
            </div>
          </Card>
        </figure>
      </div>
    </section>
  );
}

export default ProductRelate;
