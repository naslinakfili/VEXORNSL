import Image from "next/image";
import ProductAcordion from "./productacordion";

function ProductGallery() {
  return (
    <main className="">
      <figure className="flex flex-col gap-6 lg:min-w-[600px] md:min-w-[480px] lg:mb-20">
        <Image
          src="/images/airphonds-white-01.png"
          alt="Product Image"
          width={680}
          height={480}
        />

        <div className="md:grid hidden grid-cols-4 gap-4">
          <Image
            className="rounded-lg w-full h-auto"
            src="/images/img-pro-max-main05.png"
            alt="Product Image"
            width={148}
            height={100}
          />
          <Image
            className="rounded-lg w-full h-auto"
            src="/images/img-pro-max-main04.png"
            alt="Product Image"
            width={148}
            height={100}
          />
          <Image
            className="rounded-lg w-full h-auto"
            src="/images/img-pro-max-main03.png"
            alt="Product Image"
            width={148}
            height={100}
          />
          <Image
            className="rounded-lg w-full h-auto"
            src="/images/img-pro-max-main02.png"
            alt="Product Image"
            width={148}
            height={100}
          />
        </div>
      </figure>
      <div className="lg:flex hidden">
        <ProductAcordion />
      </div>
    </main>
  );
}

export default ProductGallery;
