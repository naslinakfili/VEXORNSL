import ProductCollection from "./productcollectio";
import FooterSection from "../component/footersection";

type ShopProps = {
  searchParams : Promise<{ search?: string}>;
};

async function Shop({ searchParams }: ShopProps) {
  const { search = "" } = await searchParams;

  return (
    <div className="md:px-16" >
      <ProductCollection search={search} />
      <FooterSection />
    </div>
  );
}

export default Shop;
