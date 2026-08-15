import { Progress } from "@/components/ui/progress"
import { Star } from "lucide-react";
function ProductStatistic() {
    return(
        <section>
            <aside className="flex flex-col p-8 gap-6 bg-surface rounded-lg border">
                <h2 className="text-[18px] font-bold">Rating Distribution</h2>
                <div className="flex items-center gap-4">
                    <p className="text-[48px] font-extrabold">4.9</p>
                    <div className="flex flex-col gap-1">
                        <p className="flex"><Star className="w-3 h-3 text-logo" /><Star className="w-3 h-3 text-logo" /><Star className="w-3 h-3 text-logo" /><Star className="w-3 h-3 text-logo" /><Star className="w-3 h-3" /></p>
                        <p className="text-[12px] text-gray">Based on 142 ratings</p>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-4 text-[12px]">
                        <p className="flex gap-1 text-gray"><span>5</span><span>Star</span></p>
                        <Progress value={92} className="w-full max-w-sm bg-gray" />
                        <p className="text-gray">92%</p> 
                    </div>
                    <div className="flex items-center gap-4 text-[12px]">
                        <p className="flex gap-1 text-gray"><span>4</span><span>Star</span></p>
                        <Progress value={6} className="w-full max-w-sm bg-gray" />
                        <p className="text-gray">6%</p> 
                    </div>
                    <div className="flex items-center gap-4 text-[12px]">
                        <p className="flex gap-1 text-gray"><span>3</span><span>Star</span></p>
                        <Progress value={1} className="w-full max-w-sm bg-gray" />
                        <p className="text-gray">1%</p> 
                    </div>
                    <div className="flex items-center gap-4 text-[12px]">
                        <p className="flex gap-1 text-gray"><span>2</span><span>Star</span></p>
                        <Progress value={1} className="w-full max-w-sm bg-gray" />
                        <p className="text-gray">1%</p> 
                    </div>
                    <div className="flex items-center gap-4 text-[12px]">
                        <p className="flex gap-1 text-gray"><span>1</span><span>Star</span></p>
                        <Progress value={0} className="w-full max-w-sm bg-gray" />
                        <p className="text-gray">0%</p> 
                    </div>
                </div>            
            </aside>
        </section>
    )
}

export default ProductStatistic