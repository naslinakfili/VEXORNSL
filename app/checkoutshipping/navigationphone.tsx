import { ArrowLeft } from "lucide-react";
import { Progress } from "@/components/ui/progress";
export default function NavigationPhone() {
  return (
    <main className="flex justify-between items-center h-9">  
        <button >
            <ArrowLeft className="w-5" />
        </button>

        <nav className="flex gap-2">
            <div className="flex items-center gap-1">
                <div className="flex justify-center items-center bg-logo w-4 h-4 text-[0.8rem] rounded-full">1</div>
                <Progress value={0} className="w-12 h-0.5 bg-gray/20" />
            </div>
            <div className="flex items-center gap-1">
                <div className="flex justify-center items-center bg-gray/20 w-4 h-4 text-[0.8rem] rounded-full">2</div>
                <Progress value={0} className="w-12 h-0.5 bg-gray/20" />
            </div>
            <div className="flex items-center">
                <div className="flex justify-center items-center bg-gray/20 w-4 h-4 text-[0.8rem] rounded-full">3</div>
            
            </div>
             
        </nav>

        <time dateTime=""
        className="text-[13px] font-semibold text-gray"
        >12:48</time>
        

    </main>
  );
}