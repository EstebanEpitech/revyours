import styles from "./Pillars.module.css";
import Image from "next/image";
import React, {useEffect} from "react";
import { useRouter } from "next/router";

import svg1 from '../../public/pillars/devIcon.svg'
import svg2 from '../../public/pillars/trophyIcon.svg'
import svg3 from '../../public/pillars/expertiseIcon.svg'

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";

const Pillars = () => {
    const router = useRouter();
    const [customDashOffset, setCustomDashOffset] = React.useState(500);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to("#triggered-element", 0.4, {
            scrollTrigger: {
                trigger: "#trigger",
                markers: false,
                toggleActions: "play none none none"
            },
            stagger: 1,
            duration: 0.4,
            opacity: 1
        });
    }, [])

    useEffect(() => {
        
        const animate = () => {
            setCustomDashOffset(customDashOffset > 0 ? customDashOffset - 1 : 0)
        }
        
        console.log(customDashOffset)
        animate()
        const interval = setInterval(animate, 100); // Répétez l'animation toutes les 10 secondes
        return () => clearInterval(interval);
    }, [customDashOffset]);
    
    return (
        <div className={styles.container} id={"trigger"}>

            <div className={styles.content} id={"triggered-element"}>
                
                    <Image src={svg1}
                           width={50} height={50}
                           alt="Pragma Team"
                           title="Anim Horizontal"
                           className={styles.svg}/>
                    
                <div className={styles.svgTitle}>Support</div>
                <div className={styles.svgText}>Une équipe disponible pour répondre à toutes vos questions.
                </div>
            </div>
            <div className={styles.content} id={"triggered-element"}>
                
                <Image src={svg2}
                       width={50} height={50}
                       alt="Pragma Team"
                       title="Anim Horizontal"
                       className={styles.svg}/>
                
                <div className={styles.svgTitle}>I.A.</div>
                <div className={styles.svgText}>Reviews permanentes et authentiques créées par I.A.
                </div>
            </div>
            <div className={styles.content} id={"triggered-element"}>

         
                <Image src={svg3}
                       width={50} height={50}
                       alt="Pragma Team"
                       title="Anim Horizontal"
                       className={styles.svg}/>

                <div className={styles.svgTitle}>Diversité</div>
                <div className={styles.svgText}> Vous pouvez demander des reviews dans plus d&apos;une dizaine de langues.
                </div>
            </div>
        </div>
    )
};

export default Pillars;
