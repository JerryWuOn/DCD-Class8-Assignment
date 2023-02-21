import Image from "next/image" 
import { useState } from "react";
import styles from '../carousel/Carousel.module.css'


export default function Carousel(){

    const [img, setImg] = useState(0);

    const changeImage = (change) => {
        if(change == "backward") {
            setImg(img - 1);

            if(img == 0) {
                setImg(5);
            }
            console.group(img);

        } else if(change == "forward"){
            setImg(img + 1);

            if(img == 5) {
                setImg(0)
            }
            console.log(img)
        }

    }
    return(
        <div className={styles.carouselStyle}>
            <div className={styles.carousel} style={{
                            backgroundImage: "url(/carousel-images/" + img + ".jpg)",
                            backgroundSize: 'cover',
                            backgroundRepeat: "no-repeat",
                            width: 500,
                            height: 300
            }}>
            </div>
            <div className={styles.arrowsContainer}>
                <div className={styles.arrows}>
                    <Image
                            src={"/icons/leftArrow.png"}
                            alt={"/icons/leftArrow.png"}
                            width={100}
                            height={100}
                            onClick={() => changeImage("backward")}
                        />
                        <Image
                            src={"/icons/rightArrow.png"}
                            alt={"/icons/rightArrow.png"}
                            width={100}
                            height={100}
                            onClick={() => changeImage("forward")}
                        />
                        </div>
                </div>
        </div>
    )
}