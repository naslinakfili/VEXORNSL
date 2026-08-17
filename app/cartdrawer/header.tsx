import { X, Trash2, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator"
import Image from "next/image";


export default function Header() {
  return (
    <aside>
        <header className="flex justify-between">
            <h1 className="flex items-center">
                <p>You Cart</p>
                <span className="flex justify-center items-center bg-logo text-white w-6 h-6 rounded-full text-xs">
                    2
                </span>
            </h1>

            <Button variant="outline" className="border-none rounded-full p-2">
                <X className="w-4 h-4" />
            </Button>
        </header>

        <section>
            <p>Spend <span>$25.01</span> more fro FREE shipping</p>
            <Progress value={33}></Progress>

        </section>

        <ul className="">
            <li className="flex flex-col">
                <div className="flex">
                    <Image
                          src="/images/airphonds-white-01.png"
                          alt="Product Image"
                          width={80}
                          height={80}
                          className="w-20 h-20 object-cover"
                        />
                
                <div className="w-full">
                    <div className="flex justify-between">
                        <h2>VEXOR Airponds Pro Max</h2>
                        <Trash2 />
                    </div>

                    <p>Space Gray / Standart</p>

                    <div className="flex justify-between items-center w-full">
                        <div className="flex w-[72px] h-[26px]">
                            <Button
                            className="rounded-r-none border-r-0 p-0 w-6 h-[26px]"
                            variant="outline"
                            size="icon"
                            >
                            <Minus className="w-3 h-3" />
                            </Button>
                            <Input
                            type="number"
                            min="1"
                            max="999"
                            maxLength={3}
                            defaultValue={1}
                            className="flex text-center h-[26px] min-w-6 p-0 rounded-none border-x-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none ring-0! ring-offset-0! outline-none! shadow-none! focus-visible:ring-0! focus-visible:ring-offset-0! focus-visible:border-input!"
                            ></Input>
                            <Button
                            className="rounded-l-none border-l-0 p-0 w-6 h-[26px]"
                            variant="outline"
                            size="icon"
                            >
                            <Plus className="w-3 h-3" />
                            </Button>
                        </div>

                        <p>$189.99</p>
                    </div>
                    
                </div>
                </div>

                <Separator />
            </li>

            <li className="flex flex-col">
                <div className="flex">
                    <Image
                          src="/images/airphonds-white-01.png"
                          alt="Product Image"
                          width={80}
                          height={80}
                          className="w-20 h-20 object-cover"
                        />
                
                <div className="w-full">
                    <div className="flex justify-between">
                        <h2>VEXOR Airponds Pro Max</h2>
                        <Trash2 />
                    </div>

                    <p>Space Gray / Standart</p>

                    <div className="flex justify-between items-center w-full">
                        <div className="flex w-[72px] h-[26px]">
                            <Button
                            className="rounded-r-none border-r-0 p-0 w-6 h-[26px]"
                            variant="outline"
                            size="icon"
                            >
                            <Minus className="w-3 h-3" />
                            </Button>
                            <Input
                            type="number"
                            min="1"
                            max="999"
                            maxLength={3}
                            defaultValue={1}
                            className="flex text-center h-[26px] min-w-6 p-0 rounded-none border-x-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none ring-0! ring-offset-0! outline-none! shadow-none! focus-visible:ring-0! focus-visible:ring-offset-0! focus-visible:border-input!"
                            ></Input>
                            <Button
                            className="rounded-l-none border-l-0 p-0 w-6 h-[26px]"
                            variant="outline"
                            size="icon"
                            >
                            <Plus className="w-3 h-3" />
                            </Button>
                        </div>

                        <p>$189.99</p>
                    </div>
                    
                </div>
                </div>

                <Separator />
            </li>
        </ul>
    </aside>
  );
}
