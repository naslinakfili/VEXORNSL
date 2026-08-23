import { X, Trash2, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import styles from "./cartdarwer.module.css"

export default function Header() {
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

      <div className={`h-[325px] mb-6 overflow-y-auto overscroll-auto touch-pan-y ${styles["autohide-scrollbar"]}`}>
        <ul className="flex  flex-col">
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
                  <div className="flex w-fit h-[26px] bg-background border rounded-md">
                    <Button
                      className="rounded-r-none rounded-l-md border-0 p-0 w-[26px] h-[26px] bg-transparent hover:bg-muted"
                      variant="ghost"
                      size="icon"
                    >
                      <Minus className="w-2.5 h-2.5 text-gray" />
                    </Button>
                    <Input
                      type="number"
                      min="1"
                      max="999"
                      maxLength={3}
                      defaultValue={1}
                      className="flex !bg-black text-[13px] font-bold h-[24px] w-8 p-0 rounded-none border-0 text-foreground [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none ring-0! ring-offset-0! outline-none! shadow-none! focus-visible:ring-0! focus-visible:ring-offset-0! focus-visible:border-input! text-center"
                    ></Input>
                    <Button
                      className="rounded-l-none rounded-r-md border-0 p-0 w-[26px] h-[26px] bg-transparent hover:bg-muted"
                      variant="ghost"
                      size="icon"
                    >
                      <Plus className="w-2.5 h-2.5 text-gray" />
                    </Button>
                  </div>

                  <button className="text-[11px] text-[#FF3B30]">Remove</button>
                </div>
              </div>
            </div>
          </li>

          <li className="flex flex-col mb-4">
            <div className="flex gap-4">
              <Image
                src="/images/airphonds-white-01.png"
                alt="Product Image"
                width={80}
                height={80}
                className="w-20 h-20 object-cover rounded-md"
              />

              <div className="flex flex-col gap-2 w-full">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">VEXOR Airponds Pro Max</h2>
                  <button>
                    <Trash2 className="text-gray w-4 h-4" />
                  </button>
                </div>

                <p className="text-12px text-gray">Space Gray / Standart</p>

                <div className="flex justify-between items-center w-full">
                  <div className="flex w-[72px] h-[26px]">
                    <Button
                      className="rounded-r-none rounded-l-md border-r-0 p-0 w-6 h-[22px]"
                      variant="outline"
                      size="icon"
                    >
                      <Minus className="w-2.5 h-2.5 text-gray" />
                    </Button>
                    <Input
                      type="number"
                      min="1"
                      max="999"
                      maxLength={3}
                      defaultValue={1}
                      className="flex text-center text-[13px] font-bold h-[22px] min-w-6 p-0 rounded-none border-x-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none ring-0! ring-offset-0! outline-none! shadow-none! focus-visible:ring-0! focus-visible:ring-offset-0! focus-visible:border-input!"
                    ></Input>
                    <Button
                      className="rounded-l-none rounded-r-md border-l-0 p-0 w-6 h-[22px]"
                      variant="outline"
                      size="icon"
                    >
                      <Plus className="w-2.5 h-2.5 text-gray" />
                    </Button>
                  </div>

                  <p className="font-bold">$189.99</p>
                </div>
              </div>
            </div>

            <Separator className="mt-4" />
          </li>

          <li className="flex flex-col mb-4">
            <div className="flex gap-4">
              <Image
                src="/images/airphonds-white-01.png"
                alt="Product Image"
                width={80}
                height={80}
                className="w-20 h-20 object-cover rounded-md"
              />

              <div className="flex flex-col gap-2 w-full">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">VEXOR Airponds Pro Max</h2>
                  <button>
                    <Trash2 className="text-gray w-4 h-4" />
                  </button>
                </div>

                <p className="text-12px text-gray">Space Gray / Standart</p>

                <div className="flex justify-between items-center w-full">
                  <div className="flex w-[72px] h-[26px]">
                    <Button
                      className="rounded-r-none rounded-l-md border-r-0 p-0 w-6 h-[22px]"
                      variant="outline"
                      size="icon"
                    >
                      <Minus className="w-2.5 h-2.5 text-gray" />
                    </Button>
                    <Input
                      type="number"
                      min="1"
                      max="999"
                      maxLength={3}
                      defaultValue={1}
                      className="flex text-center text-[13px] font-bold h-[22px] min-w-6 p-0 rounded-none border-x-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none ring-0! ring-offset-0! outline-none! shadow-none! focus-visible:ring-0! focus-visible:ring-offset-0! focus-visible:border-input!"
                    ></Input>
                    <Button
                      className="rounded-l-none rounded-r-md border-l-0 p-0 w-6 h-[22px]"
                      variant="outline"
                      size="icon"
                    >
                      <Plus className="w-2.5 h-2.5 text-gray" />
                    </Button>
                  </div>

                  <p className="font-bold">$189.99</p>
                </div>
              </div>
            </div>

            <Separator className="mt-4" />
          </li>

          <li className="flex flex-col mb-4">
            <div className="flex gap-4">
              <Image
                src="/images/airphonds-white-01.png"
                alt="Product Image"
                width={80}
                height={80}
                className="w-20 h-20 object-cover rounded-md"
              />

              <div className="flex flex-col gap-2 w-full">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">VEXOR Airponds Pro Max</h2>
                  <button>
                    <Trash2 className="text-gray w-4 h-4" />
                  </button>
                </div>

                <p className="text-12px text-gray">Space Gray / Standart</p>

                <div className="flex justify-between items-center w-full">
                  <div className="flex w-[72px] h-[26px]">
                    <Button
                      className="rounded-r-none rounded-l-md border-r-0 p-0 w-6 h-[22px]"
                      variant="outline"
                      size="icon"
                    >
                      <Minus className="w-2.5 h-2.5 text-gray" />
                    </Button>
                    <Input
                      type="number"
                      min="1"
                      max="999"
                      maxLength={3}
                      defaultValue={1}
                      className="flex text-center text-[13px] font-bold h-[22px] min-w-6 p-0 rounded-none border-x-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none ring-0! ring-offset-0! outline-none! shadow-none! focus-visible:ring-0! focus-visible:ring-offset-0! focus-visible:border-input!"
                    ></Input>
                    <Button
                      className="rounded-l-none rounded-r-md border-l-0 p-0 w-6 h-[22px]"
                      variant="outline"
                      size="icon"
                    >
                      <Plus className="w-2.5 h-2.5 text-gray" />
                    </Button>
                  </div>

                  <p className="font-bold">$189.99</p>
                </div>
              </div>
            </div>

            <Separator className="mt-4" />
          </li>
        </ul>
      </div>
    </aside>
  );
}
