import ProductGallery from "./productgallery"
import ProductInformation from "./productinformation";
import Image from "next/image";
function ProductDescriptive() {
    return(
        <div className="md:flex gap-16 md:px-16 px-4">
            <ProductGallery />
            <ProductInformation />
        </div>
    )
}

export default ProductDescriptive