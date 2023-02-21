import Carousel from "@/components/carousel";
import Link from "next/link";


export default function CarouselPage(){
    return(
        <div>
            <Link href="/">Home</Link>
            <Carousel/>
        </div>
    )
}