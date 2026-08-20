import Image from "next/image";
import { Card, CardAction } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { ArrowRight } from "lucide-react";

function Footer() {
  return (
    <footer>
      <h2 className="md:block hidden text-[13px] font-bold text-gray mb-3">
        You Make Also Like
      </h2>
      <div className="md:flex hidden gap-3 mb-6 w-full">
        <figure className="">
          <Card className="relative bg-surface pt-0 min-w-[160px] max-w-[160px] h-[162px] w-full">
            <div className="relative w-full h-[90px]">
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
              <h2 className="ml-2.5 text-[13px] font-semibold">
                SoundWave Alpha
              </h2>

              <div className="flex px-2.5 justify-between items-center">
                <p className="text-[13px] font-bold">$259.99</p>
              </div>
            </div>
          </Card>
        </figure>

        <figure className="">
          <Card className="relative bg-surface pt-0 min-w-[160px] max-w-[160px] h-[162px] w-full">
            <div className="relative w-full h-[90px]">
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
              <h2 className="ml-2.5 text-[13px] font-semibold">
                SoundWave Alpha
              </h2>

              <div className="flex px-2.5 justify-between items-center">
                <p className="text-[13px] font-bold">$259.99</p>
              </div>
            </div>
          </Card>
        </figure>
      </div>

      <form action="input-promo-code" className="flex gap-2 mb-6">
        <Input
          placeholder="Promo or discount code"
          className="rounded-md px-4 py-3"
        />
        <Button className="text-semibold px-6 py-3 bg-surface/90 rounded-md hover:bg-surface text-white border md:text-logo md:border-logo">
          Apply
        </Button>
      </form>

      <Separator />

      <footer className="flex flex-col mt-6 gap-3">
        <div className="flex justify-between">
          <p className="text-gray">Subtotal</p>
          <span className="font-semibold">$539.98</span>
        </div>

        <div className="flex justify-between text-gray">
          <p>Shipping</p>
          <p>Calculated at checkout</p>
        </div>

        <div className="flex justify-between">
          <p className="text-gray">Tax</p>
          <span className="font-semibold">$44.55</span>
        </div>

        <Separator />

        <div className="flex justify-between">
          <p className="text-[16px] font-bold">Total</p>
          <span className="text-[20px] font-bold">$584.53</span>
        </div>

        <Button className="bg-logo/90 hover:bg-logo mt-1 py-4 rounded-md">
          <p className="text-[16px] font-bold text-white">
            Proceed to Checkout
          </p>
          <ArrowRight className="w-4 h-4 text-white" />
        </Button>

        <div className="flex justify-center py-3">
          <p className="font-semibold text-gray">Countinue Shopping</p>
        </div>
      </footer>
    </footer>
  );
}

export default Footer;
