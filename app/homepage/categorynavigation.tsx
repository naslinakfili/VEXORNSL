import { Button } from "@/components/ui/button"

function CategoryNavigation() {


    return(
        <nav className="mt-6 md:mt-16 px-4 lg:px-16">
            <ul className="flex gap-2 text-white/40">
                <li><Button variant="outline" className="rounded-full px-4">All</Button></li>
                <li><Button variant="outline" className="rounded-full px-4">Audio</Button></li>
                <li><Button variant="outline" className="rounded-full px-4">Labtops</Button></li>
                <li><Button variant="outline" className="rounded-full px-4">Warables</Button></li>
            </ul>
        </nav>
    )
}

export default CategoryNavigation