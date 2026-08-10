import Image from "next/image";
import HeroSection from "./homepage/herosection";
import CategoryNavigation from "./homepage/categorynavigation";
import ProductSection from "./homepage/productsection";
import BannerSection from "./homepage/bannersection";
import Testimonial from "./homepage/testimonial"
import FooterSection from "./homepage/footersection";

export default function Home() {
  return (
 <div>
  <HeroSection />
  <CategoryNavigation />
  <ProductSection />
  <BannerSection />
  <Testimonial />
  <FooterSection />
 </div>
  );
}
