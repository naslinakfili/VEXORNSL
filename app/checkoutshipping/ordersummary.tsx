'use client'
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/lib/cart";

// Interface untuk struktur data Produk
interface ProductOrderProps {
  product?: {
    id: number; // ID unik produk
    name: string; // Nama produk
    price: number; // Harga produk
    url: string; // URL gambar produk
    color?: string;
    size?: string;
    quantity?: number;
  }[];
  source?: "cart" | "direct";
}

function OrderSummary({ product, source = "cart" }: ProductOrderProps) {
  const { items: cartItems } = useCart();

  // Jika diakses dari Buy Now (direct) gunakan data produk dari props,
  // jika diakses dari Cart gunakan data dari useCart()
  const orderItems =
    source === "direct" && product && product.length > 0
      ? product
      : cartItems;

  // Hitung subtotal, pajak (8%), dan total secara dinamis
  const subtotal = orderItems.reduce(
    (sum, item) => sum + item.price * (item.quantity ?? 1),
    0
  );
  const tax = subtotal > 0 ? subtotal * 0.08 : 0;
  const totalDue = subtotal + tax;

  return (
    <aside className="flex flex-col gap-6 md:w-115">
      <div className="w-full rounded-lg border bg-transparent p-8 text-base transition-colors md:text-sm dark:bg-input/30">
        <h1 className="text-[18px] font-bold mb-6">Order Summary</h1>
        {orderItems.length === 0 ? (
          <p className="text-sm text-gray py-4">Belum ada produk yang dipilih.</p>
        ) : (
          <ul className="flex flex-col gap-4">
            {orderItems.map((item, index) => (
              <li key={`${item.id}-${index}`} className="flex items-center gap-4">
                <Image
                  className="w-14 h-14 object-cover rounded-md shrink-0"
                  src={item.url}
                  alt={`${item.name} image`}
                  width={100}
                  height={86}
                  priority
                />
                <article className="flex gap-4 justify-between items-center w-full">
                  <div>
                    <h2 className="text-[14px] font-semibold">{item.name}</h2>
                    <p className="text-[12px] text-gray">
                      Qty {item.quantity ?? 1}
                      {item.color ? ` / ${item.color}` : ""}
                      {item.size ? ` / ${item.size}` : ""}
                    </p>
                  </div>
                  <span className="text-[14px] font-bold">
                    ${(item.price * (item.quantity ?? 1)).toFixed(2)}
                  </span>
                </article>
              </li>
            ))}
          </ul>
        )}

        <Separator className="my-6" />

        <div className="flex flex-col gap-3">
          <div className="flex justify-between">
            <p className="text-[14px] text-gray">Subtotal</p>
            <span className="text-[14px] font-semibold">
              ${subtotal.toFixed(2)}
            </span>
          </div>

          <div className="flex justify-between">
            <p className="text-[14px] text-gray">Shipping</p>
            <span className="text-[14px] font-semibold text-[#179259]">
              FREE
            </span>
          </div>

          <div className="flex justify-between">
            <p className="text-[14px] text-gray">Tax (8%)</p>
            <span className="text-[14px] font-semibold">${tax.toFixed(2)}</span>
          </div>
        </div>

        <Separator className="my-3" />

        <div className="flex justify-between items-center">
          <p className="text-[16px] font-bold">Total Due</p>
          <span className="text-[22px] font-bold">${totalDue.toFixed(2)}</span>
        </div>
      </div>

      <div className="flex flex-col gap-3 w-full rounded-lg border bg-transparent p-5 text-base transition-colors md:text-sm dark:bg-input/30">
        <p className="text-[12px] font-bold text-gray">ACCEPTED PAYMENT</p>
        <ul className="flex gap-4 text-[12px] font-bold">
          <li className="dark:bg-black px-2.5 py-1.5 rounded-md border">
            VISA
          </li>
          <li className="dark:bg-black px-2.5 py-1.5 rounded-md border">
            Apple Pay
          </li>
          <li className="dark:bg-black px-2.5 py-1.5 rounded-md border">
            MASTERCARD
          </li>
          <li className="dark:bg-black px-2.5 py-1.5 rounded-md border">Etc</li>
        </ul>
      </div>
    </aside>
  );
}

export default OrderSummary;
