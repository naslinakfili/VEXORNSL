"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function HeroSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="hero flex flex-col justify-between w-full gap-8 mt-4 md:flex-row md:gap-4 md:mt-16 lg:gap-16">
      <div className="flex w-full flex-col lg:max-w-162">
        <Badge
          variant="outline"
          className="flex items-center text-[12px] font-bold md:mb-8 mb-2"
        >
          <div className="bg-logo w-2 h-2 rounded-md"></div>
          <p className="text-[10px] font-semibold">LAUNCH EDITION</p>
        </Badge>

        <h1 className="lg:text-[64px] text-[32px] text-4xl font-extrabold mb-2">
          Engineered for Tomorrow
        </h1>
        <p className="lg:text-[18px] text-[14px] lg:font-semibold text-white/30">
          Step into the future of sound and performance. Expirience
          ultra-premium hardware designed specifically for modern digital
          creators.
        </p>

        <div className="flex items-center w-full gap-4 md:mb-0 md:mt-8 mt-4">
          <Link
            href="./shop"
            className="flex w-full items-center justify-center gap-2 md:w-auto"
          >
            <Button className="flex-1 rounded-sm bg-logo px-5 text-[1rem] text-white hover:bg-logo/85 md:flex-none md:py-0 py-5">
              Shop Collection
              <ArrowRight />
            </Button>
          </Link>
          <Button
            type="button"
            variant="outline"
            onClick={() => setIsVideoOpen(true)}
            className="flex rounded-sm px-5 text-[1rem]"
          >
            Watch Film
            <PlayCircle />
          </Button>
        </div>
      </div>

      <div className="relative aspect-4/3 w-full min-h-45 lg:min-h-100 lg:min-w-137.5">
        {isVideoOpen ? (
          <video
            src="/vidios/hero1.mp4"
            autoPlay
            controls
            playsInline
            onEnded={() => setIsVideoOpen(false)}
            className="absolute inset-0 h-full w-full rounded-2xl object-cover"
          />
        ) : (
          <button
            type="button"
            aria-label="Putar video hero"
            onClick={() => setIsVideoOpen(true)}
            className="group absolute inset-0 h-full w-full overflow-hidden rounded-2xl text-left"
          >
            <Image
              src="/images/Hero-Right-Media.png"
              alt="Preview video hero"
              fill
              priority
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </button>
        )}
      </div>
    </section>
  );
}

export default HeroSection;
