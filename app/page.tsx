import HeroSection from "./homepage/herosection";
import CategoryNavigation from "./homepage/categorynavigation";
import ProductSection from "./homepage/productsection";
import BannerSection from "./homepage/bannersection";
import Testimonial from "./homepage/testimonial";
import FooterSection from "./component/footersection";

export default function Home() {
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
