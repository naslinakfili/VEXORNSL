import HeroSection from "./herosection";
import HomepageContent from "./homepagecontent";
import BannerSection from "./bannersection";
import Testimonial from "./testimonial";
import FooterSection from "../component/footersection";

export default function HomePage() {
  return (
    <div className="lg:px-16 px-4">
      <HeroSection />
      <HomepageContent />
      <BannerSection />
      <Testimonial />
      <FooterSection />
    </div>
  );
}
