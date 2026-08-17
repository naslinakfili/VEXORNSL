import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react";
import User  from "@/public/images/nsl1.png"

function Testimonial() {
  return (
    <div className="flex flex-col items-center mt-6 md:mt-12 w-full md:pt-12">
      <p className="text-logo ml-4 mb-3 text-[11px] font-bold lg:ml-16">TRUSTED BY 50,000+ CUSTUMERS</p>
      <Card className="md:py-8 py-4 mx-4 md:mt-8 lg:mx-16 md:max-w-[640px]">
        <CardContent className="flex flex-col md:items-center md:mx-8">
          <div className="flex text-logo "><Star className="w-[10px] h-[10px]"/><Star className="w-[10px] h-[10px]"/><Star className="w-[10px] h-[10px]"/><Star className="w-[10px] h-[10px]"/><Star className="w-[10px] h-[10px]"/></div>
          <blockquote className="my-3 md:hidden">"The engineering precision and minimalist design details are completely..."</blockquote>
          <blockquote className="hidden md:flex text-center my-5">"The engineering precision and minimalist design details are completely unmatched. SoundWafe Alpha headphones deliver audio fidelity that easily competes with sistems twice the price"</blockquote>
          <figure className="flex gap-2">
            <Avatar className="flex gap-2">
              <AvatarImage
                src={User.src}
                alt="@shadcn"
                className="grayscale"/>
            </Avatar>
              <figcaption className="flex flex-col">
                <h1 className="text-[11px] font-semibold">Naslin Akfili</h1>
                <p className="text-[9px] text-[#8F8FA4]">Developer, Frondent</p>
              </figcaption>
            
          </figure>
        </CardContent>
      </Card>
    </div>
  );
}

export default Testimonial;
