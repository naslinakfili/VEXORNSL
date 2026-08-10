import Image from "next/image";
import HeroSection from "./herosection";
import CategoryNavigation from "./categorynavigation";
import ProductSection from "./productsection";
import BannerSection from "./bannersection";
import Testimonial from "./testimonial"
import FooterSection from "./footersection";

export default function HomePage() {


    return(
        <div>
            <HeroSection />
            <CategoryNavigation />
            <ProductSection />
            <BannerSection />
            <Testimonial />
            <FooterSection />
        </div>
    )
}