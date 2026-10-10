import {
  Card,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

function BannerSection() {
  return (
    <section className="mt-6 md:mt-12 mx-4 lg:mx-16">
      <Card className="flex flex-col md:flex-row md:justify-between px-4 py-4 shadow-[0_10px_40px_-10px_#6C63FF90] ">
        <div className="mb-4">
          <p className="text-[10px] font-bold text-orange ">SPECIAL PROMOTION</p>
          <h2 className="text-[18px] my-4 font-extrabold">
            Summer Sale-Up to 40% off
          </h2>
          <p className="hidden text-[#8F8FA4] md:flex mb-4">
            Upgrade your workstation and life style suite. Discount
            automatically applied at checkout.
          </p>
        </div>

        <time className="flex items-center gap-2">
          <Badge  className="flex flex-col min-w-12.5 min-h-11.25 bg-black rounded-sm">
            <span className="text-[14px] font-extrabold text-logo">02</span>
            <p className="text-[8px] text-gray">Days</p>
          </Badge>
          <Badge  className="flex flex-col min-w-12.5 min-h-11.25 bg-black rounded-sm">
            <span className="text-[14px] font-extrabold text-logo">04</span>
            <p className="text-[8px] text-gray">hors</p>
          </Badge>
          <Badge  className="flex flex-col min-w-12.5 min-h-11.25 bg-black rounded-sm">
            <span className="text-[14px] font-extrabold text-logo">14</span>
            <p className="text-[8px] text-gray">mint</p>
          </Badge>
          <Button className="text-[11px] font-bold px-3.5 py-2.5">Claim</Button>
        </time>
      </Card>
    </section>
  );
}

export default BannerSection;
