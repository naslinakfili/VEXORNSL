import ProductGallery from "./productgallery";
import ProductInformation from "./productinformation";
import ProductRelate from "./productrelate";
import FooterSection from "../component/footersection";
function ProductDescriptive() {
  return (
    <div className="flex flex-col md:px-16 px-4 pt-6">
      <div className="flex flex-col lg:flex-row gap-4 md:gap-16 w-full">
        <div className="flex-1 w-full">
          <ProductGallery />
        </div>
        <div className="flex-1 w-full">
          <ProductInformation />
        </div>
      </div>

      <div className="md:block hidden w-full">
        <ProductRelate />
        <FooterSection />
      </div>
    </div>
  );
}

export default ProductDescriptive;
