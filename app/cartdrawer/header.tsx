import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import styles from "./cartdarwer.module.css";
import InputNumber from "./inputnumber";
import Remove from "./remove";
import Close from "./close";

interface Product {
  id: number;
  name: string;
  price: number;
  url: string;
  color?: string;
  size?: string;
  quantity?: number;
}

interface HeaderProps {
  products: Product[];
}

export default function Header({ products }: HeaderProps) {
  const totalProduct = products.length; //hitung jumlah product
  const freeShippingMinimum = 50; //free ongkir min $50

  const subtotal = products.reduce(    //reduce() membaca product satu per satu sambil mengumpulkan total !!!
    (total, product) => total + product.price * (product.quantity ?? 1), //total + ... menambahkan hasilnya ke total sebelumnya
    0,  //0 nilai awal total, product.price * quantity = menghitung total harga 1 jenis product !!!
  );   //product.quantity ?? 1 = mwnghitung quantity tersedia kalo null atau undifined, gunakan 1

  const remaining = Math.max(0, freeShippingMinimum - subtotal);  //hitung sisa belanja, Math.max(0, ...) memastikan hasilnya minimal 0
  const progress = Math.min(100, (subtotal / freeShippingMinimum) * 100); //Math.min(100, ...) membatasi progesss maksimal 100% //hitung persentasse progress line subtotal / freshping * 100
  return (
    <aside>
      <header className="flex justify-between">
        <h1 className="flex items-center gap-2 mb-6">
          <p className="text-[20px] font-bold">You Cart</p>
          <span className="flex justify-center items-center bg-logo text-white w-6 h-6 rounded-full text-[12px] font-bold">
            {totalProduct}
          </span>
        </h1>
        <Close />
      </header>

      <section className="flex flex-col gap-3 bg-surface md:bg-gray/10 border px-4 py-4 rounded-lg mb-6">
        <p className="text-[13px] font-medium">
          {remaining > 0 ? (
            // tampilkan sisa belanja
            <>
              Spend <span className="text-logo">${remaining.toFixed(2)}</span>{" "}
              more for FREE shipping
            </>
          ) : (
            //tampilkan pesan free ongkir
            <span className="text-logo">You qualify for FREE shipping!</span>
          )}
        </p>
        <Progress value={progress} className="h-1.5"></Progress>
      </section>

      <div
        className={`h-81.25 mb-6 overflow-y-auto overscroll-auto touch-pan-y ${styles["autohide-scrollbar"]}`}
      >
        <ul className="flex  flex-col">
          {products.map((product, index) => (
            <li
              key={index}
              className="flex flex-col dark:bg-surface border rounded-lg mb-4"
            >
              <div className="flex gap-4 p-2.5">
                <Image
                  src={product.url} //image
                  alt="Product Image"
                  width={80}
                  height={80}
                  className="w-20 h-20 object-cover rounded-md"
                />

                <div className="flex flex-col gap-2 w-full">
                  <div className="flex justify-between">
                    <h2 className="font-semibold text-[12px]">
                      {product.name}
                    </h2>

                    <p className="font-bold text-[13px]">${product.price}</p>
                  </div>

                  <p className="text-[10px] text-gray">
                    {product.color} / {product.size}{" "}
                  </p>

                  <div className="flex justify-between items-center w-full">
                    <InputNumber />

                    <Remove />
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
