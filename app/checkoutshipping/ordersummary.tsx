import Image from "next/image";
import laptopImg from "@/public/images/products/electronics/labtop/labtop-azer-main/labtop-azer-main01.png";
import { Separator } from "@/components/ui/separator";

function OrderSummary() {
  return (
    <aside className="flex flex-col gap-6 md:w-[460px]">
        <div className="w-full rounded-lg border bg-transparent p-8 text-base transition-colors md:text-sm dark:bg-input/30">
                <h1 className="text-[18px] font-bold mb-6">Order Summary</h1>
            <ul className="flex flex-col gap-4">
                <li className="flex gap-4 items-center">
                    <Image className="w-14 h-14 object-cover rounded-md" src={laptopImg} alt="Azer laptop product image" width={100} height={86} priority />
                    <article className="flex gap-4 justify-between items-center w-full">
                        <div>
                            <h2 className="text-[14px] font-semibold">Azer Labtops Max</h2>
                            <p className="text-[12px] text-gray">Qty 1 / Space Gray</p>
                        </div>
                        <span className="text-14px font-bold">$349.99</span>
                    </article>
                </li>

                <li className="flex gap-4 items-center">
                    <Image className="w-14 h-14 object-cover rounded-md" src={laptopImg} alt="Azer laptop product image" width={100} height={86} priority />
                    <article className="flex gap-4 justify-between items-center w-full">
                        <div>
                            <h2 className="text-[14px] font-semibold">Azer Labtops Max</h2>
                            <p className="text-[12px] text-gray">Qty 1 / Space Gray</p>
                        </div>
                        <span className="text-14px font-bold">$349.99</span>
                    </article>
                </li>
            </ul>

            <Separator className="my-6"/>

            <div className="flex flex-col gap-3">
                <div className="flex justify-between">
                    <p className="text-[14px] text-gray">Subtotal</p>
                    <span className="text-[14px] font-semibold">$539.98</span>
                </div>

                <div className="flex justify-between">
                    <p className="text-[14px] text-gray">Shipping</p>
                    <span className="text-[14px] font-semibold text-[#179259]">FREE</span>
                </div>

                <div className="flex justify-between">
                    <p className="text-[14px] text-gray">Tax</p>
                    <span className="text-[14px] font-semibold">$44.55</span>
                </div>

                <div className="flex justify-between">
                    <p className="text-[14px] text-gray">Promo Code (SUMMER40)</p>
                    <span className="text-[14px] font-bold text-logo">-$50.00</span>
                </div>
            </div>

            <Separator className="my-3"/>

            <div className="flex justify-between items-center">
                <p className="text-[16px] font-bold">Total Due</p>
                <span className="text-[22px] font-bold">$534.53</span>
            </div>
        </div>
        
        <div className="flex flex-col gap-3 w-full rounded-lg border bg-transparent p-5 text-base transition-colors md:text-sm dark:bg-input/30">
            <p className="text-[12px] font-bold text-gray">ACCEPTED PAYMENT</p>
            <ul className="flex gap-4 text-[12px] font-bold">
                <li className="bg-black px-2.5 py-1.5 rounded-md border">VISA</li>
                <li className="bg-black px-2.5 py-1.5 rounded-md border">Apple Pay</li>
                <li className="bg-black px-2.5 py-1.5 rounded-md border">MASTERCARD</li>
            </ul>
        </div>

    </aside>
  );
}

export default OrderSummary