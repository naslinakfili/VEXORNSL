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

function Testimonial() {
  return (
    <div className="mt-6 mx-4">
      <p className="text-logo mb-3 text-[11px] font-bold">TRUSTED BY 50,000+ CUSTUMERS</p>
      <Card className="py-4">
        <CardContent>
          <div className="flex text-logo "><Star className="w-[10px] h-[10px]"/><Star className="w-[10px] h-[10px]"/><Star className="w-[10px] h-[10px]"/><Star className="w-[10px] h-[10px]"/><Star className="w-[10px] h-[10px]"/></div>
          <blockquote className="my-3">"The engineering precision and minimalist design details are completely..."</blockquote>
          <figure className="flex gap-2">
            <Avatar className="flex gap-2">
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt="@shadcn"
                className="grayscale"/>
            </Avatar>
              <figcaption className="flex flex-col">
                <h1 className="text-[11px] font-semibold">Naslin Akfili</h1>
                <p className="text-[9px]">Developer, Frondent</p>
              </figcaption>
            
          </figure>
        </CardContent>
      </Card>
    </div>
  );
}

export default Testimonial;
