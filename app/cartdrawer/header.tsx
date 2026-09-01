import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import styles from "./cartdarwer.module.css";
import InputNumber from "./inputnumber";
import Remove from "./remove";

interface Product {
  id: number;
  name: string;
  price: number;
  url: string;
  color?: string;
  size?: string;
}

interface HeaderProps {
  products: Product[];
}

export default function Header({ products }: HeaderProps) {
  return (
    <aside>
      <header className="flex justify-between">
        <h1 className="flex items-center gap-2 mb-6">
          <p className="text-[20px] font-bold">You Cart</p>
          <span className="flex justify-center items-center bg-logo text-white w-6 h-6 rounded-full text-[12px] font-bold">
            2
          </span>
        </h1>

        <Button variant="outline" className="border-none rounded-full p-2">
          <X className="w-4 h-4" />
        </Button>
      </header>

      <section className="flex flex-col gap-3 bg-surface md:bg-gray/10 border px-4 py-4 rounded-lg mb-6">
        <p className="text-[13px] font-medium">
          Spend <span className="text-logo">$25.01</span> more fro FREE shipping
        </p>
        <Progress value={33} className="h-1.5"></Progress>
      </section>

      <div
        className={`h-[325px] mb-6 overflow-y-auto overscroll-auto touch-pan-y ${styles["autohide-scrollbar"]}`}
      >
        <ul className="flex  flex-col">
          {products.map((product, index) => (
            <li key={index} className="flex flex-col bg-surface border rounded-lg mb-4">
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
                    <h2 className="font-semibold text-[12px]">{product.name}</h2>

                    <p className="font-bold text-[13px]">${product.price}</p>
                  </div>

                  <p className="text-[10px] text-gray">{product.color} / {product.size} </p>

                  <div className="flex justify-between items-center w-full">
                    <InputNumber />

                    <Remove />
                  </div>
                </div>
              </div>
            </li>
          ))}
          

          <li className="flex flex-col bg-surface border rounded-lg mb-4">
            <div className="flex gap-4 p-2.5">
              <Image
                src="/images/airphonds-white-01.png"
                alt="Product Image"
                width={80}
                height={80}
                className="w-20 h-20 object-cover rounded-md"
              />

              <div className="flex flex-col gap-2 w-full">
                <div className="flex justify-between">
                  <h2 className="font-semibold text-[12px]">
                    VEXOR Airponds Pro Max
                  </h2>

                  <p className="font-bold text-[13px]">$189.99</p>
                </div>

                <p className="text-[10px] text-gray">Space Gray / Standart</p>

                <div className="flex justify-between items-center w-full">
                  <InputNumber />

                  <Remove />
                </div>
              </div>
            </div>
          </li>

          <li className="flex flex-col bg-surface border rounded-lg mb-4">
            <div className="flex gap-4 p-2.5">
              <Image
                src="/images/airphonds-white-01.png"
                alt="Product Image"
                width={80}
                height={80}
                className="w-20 h-20 object-cover rounded-md"
              />

              <div className="flex flex-col gap-2 w-full">
                <div className="flex justify-between">
                  <h2 className="font-semibold text-[12px]">
                    VEXOR Airponds Pro Max
                  </h2>

                  <p className="font-bold text-[13px]">$189.99</p>
                </div>

                <p className="text-[10px] text-gray">Space Gray / Standart</p>

                <div className="flex justify-between items-center w-full">
                  <InputNumber />

                  <Remove />
                </div>
              </div>
            </div>
          </li>

          <li className="flex flex-col bg-surface border rounded-lg mb-4">
            <div className="flex gap-4 p-2.5">
              <Image
                src="/images/airphonds-white-01.png"
                alt="Product Image"
                width={80}
                height={80}
                className="w-20 h-20 object-cover rounded-md"
              />

              <div className="flex flex-col gap-2 w-full">
                <div className="flex justify-between">
                  <h2 className="font-semibold text-[12px]">
                    VEXOR Airponds Pro Max
                  </h2>

                  <p className="font-bold text-[13px]">$189.99</p>
                </div>

                <p className="text-[10px] text-gray">Space Gray / Standart</p>

                <div className="flex justify-between items-center w-full">
                  <InputNumber />

                  <Remove />
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
}
