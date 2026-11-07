import NavCheckout from "./navigation";
import NavCheckoutphone from "./navigationphone";
import FormCheckout from "./formcheckout";
import OrderSummary from "./ordersummary";
import Footer from "@/app/component/footersection";
import FormOrderHandphone from "./formcheckoutphone";
import { products } from "@/lib/products";

interface Product {
  id: number;
  name: string;
  price: number;
  url: string;
  color?: string;
  size?: string;
  quantity?: number;
}

interface CheckoutPageProps {
  searchParams: Promise<{
    from?: string;
    productId?: string;
    qty?: string;
    color?: string;
    size?: string;
  }>;
}

export default async function CheckoutShippingPage({
  searchParams,
}: CheckoutPageProps) {
  const { from, productId, qty, color, size } = await searchParams;

  const isDirectBuy = from === "direct" && Boolean(productId);
  let directProducts: Product[] = [];

  if (isDirectBuy && productId) {
    const found = products.find((item) => item.id === Number(productId));
    if (found) {
      directProducts = [
        {
          ...found,
          quantity: qty ? Math.max(1, Number(qty)) : 1,
          color: color || found.color?.split(",")[0]?.trim() || "",
          size: size || found.size?.split(",")[0]?.trim() || "",
        },
      ];
    }
  }

  return (
    <main className="min-h-screen px-4 lg:px-16">
      <div className="md:flex hidden">
        <NavCheckout />
      </div>

      <div className="md:flex hidden gap-16 mb-20">
        <FormCheckout />
        <OrderSummary
          product={directProducts}
          source={isDirectBuy ? "direct" : "cart"}
        />
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
