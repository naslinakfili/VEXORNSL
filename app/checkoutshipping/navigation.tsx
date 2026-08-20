import { ChevronLeft } from "lucide-react";
import { Progress } from "@/components/ui/progress";

function NavCheckout() {
  return (
    <header className="flex justify-between items-center py-8">
      <button className="flex items-center gap-2">
        <ChevronLeft className="w-3.5 h-3.5 text-gray"/>
        <p className="text-[14px] text-gray font-semibold">Back to Shopping</p>
      </button>

      <nav className="flex gap-4">
        <div className="flex items-center w-40 gap-6">
          <div className="flex items-center gap-1">
            <span className="flex justify-center items-center bg-logo text-white w-7 h-7 rounded-full text-[13px] font-bold">
              1
            </span>
            <p className="text-[14px] font-semibold">Shipping</p>
          </div>
          <Progress value={0} className="w-12 h-0.5 bg-gray/20" />
        </div>

        <div className="flex items-center w-40 gap-6">
          <div className="flex items-center gap-1">
            <span className="flex justify-center items-center text-gray w-7 h-7 rounded-full border bg-transparent transition-colors  dark:bg-input/30">
              2
            </span>
            <p className="text-[14px] text-gray">Payment</p>
          </div>
          <Progress value={0} className="w-12 h-0.5 bg-gray/20" />
        </div>

        <div className="flex items-center w-24">
          <div className="flex items-center gap-1">
            <span className="flex justify-center items-center text-gray w-7 h-7 rounded-full border bg-transparent transition-colors  dark:bg-input/30">
              3
            </span>
            <p className="text-[14px] text-gray">Review</p>
          </div>
        </div>
      </nav>

      <div className="flex text-[14px] text-[#5F5F7A]">
        <p>Session Timeout: </p>
        <time dateTime="">14:59</time>
      </div>
    </header>
  );
}

export default NavCheckout;
