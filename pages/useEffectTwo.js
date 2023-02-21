import Link from "next/link"
import { useEffect, useState } from "react";
import styles from "../styles/useEffectTwo.module.css"

export default function useEffectTwo(){

    const [number, setNumber] = useState(0);
    
    useEffect(() => {
        console.log(number);
        setNumber(number + 50);
    }, []) 
    return(
        <div className={styles.displayTwo}>
        <Link href="/">Home</Link>
        <div>
            useEffectTwo
        </div>
        <div>
            {number}

        </div>
        </div>
    )
}