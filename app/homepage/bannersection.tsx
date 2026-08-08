import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

function BannerSection() {
  return (
    <section className="mt-6 mx-4">
      <Card className="px-4 py-4  shadow-[0_10px_40px_-10px_#6C63FF90] ">
        <div className="mb-4">
          <p className="text-[10px] font-bold text-orange ">SPECIAL PROMOTION</p>
          <h2 className="text-[18px] font-extrabold">
            Summer Sale-Up to 40% off
          </h2>
          <p className="hidden md:flex mb-4">
            Upgrade your workstation and life style suite. Discount
            automatically applied at checkout.
          </p>
        </div>
        <time className="flex items-center gap-2">
          <Badge variant="outline" className="flex flex-col min-w-[50px] min-h-[45px] bg-black rounded-sm">
            <span className="text-[14px] font-extrabold text-logo">02</span>
            <p className="text-[8px]">Days</p>
          </Badge>
          <Badge variant="outline" className="flex flex-col min-w-[50px] min-h-[45px] bg-black rounded-sm">
            <span className="text-[14px] font-extrabold text-logo">04</span>
            <p className="text-[8px]">hors</p>
          </Badge>
          <Badge variant="outline" className="flex flex-col min-w-[50px] min-h-[45px] bg-black rounded-sm">
            <span className="text-[14px] font-extrabold text-logo">14</span>
            <p className="text-[8px]">mint</p>
          </Badge>
          <Button className="text-[11px] font-bold px-3.5 py-2.5">Claim</Button>
        </time>
      </Card>
    </section>
  );
}

export default BannerSection;
