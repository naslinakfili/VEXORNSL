import NavCheckout from "../navigation";
import NavCheckoutphone from "../navigationphone";
import FormCheckout from "../formcheckout";
import OrderSummary from "../ordersummary";
import Footer from "@/app/component/footersection";
import FormOrderHandphone from "../formcheckoutphone";
import { products } from "@/lib/products";

// Interface untuk struktur data Produk
interface Product {
  id: number; // ID unik produk
  name: string; // Nama produk
  price: number; // Harga produk
  url: string; // URL gambar produk
  color?: string;
  size?: string;
  quantity?: number;
}

interface ProductDescriptiveProps{
    params: Promise<{ id?: string}>;
} 


async function CheckoutShipping({params} : ProductDescriptiveProps ) {


    // menunggu id dari Searchparams / mengambil nilai id
    const { id } = await params;

    const productList: Product[] = products;

    const product = productList.filter(item => item.id === Number(id));



  return (
    <main className="min-h-screen px-4 lg:px-16">
      <div className="md:flex hidden">
        <NavCheckout />
      </div>

      <div className="md:flex hidden gap-16 mb-20">
        <FormCheckout />
        <OrderSummary product={product} source="direct" />
      </div>

      {/* handphone device */}

      <div className="md:hidden">
        <NavCheckoutphone />
      </div>

      <div className="md:hidden h-full">
        <FormOrderHandphone />
      </div>

      {/* all device */}
      <Footer />
    </main>
  );
}

export default CheckoutShipping;
