import Image from "next/image";
import HeroSection from "./herosection";
import CategoryNavigation from "./categorynavigation";
import ProductSection from "./productsection";
import BannerSection from "./bannersection";
import Testimonial from "./testimonial";
import FooterSection from "../component/footersection";

export default function HomePage() {
  return (
    <div className="lg:px-16 px-4">
      <HeroSection />
      <CategoryNavigation />
      <ProductSection />
      <BannerSection />
      <Testimonial />
      <FooterSection />
    </div>
  );
}
