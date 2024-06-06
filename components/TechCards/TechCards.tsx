import styles from "./TechCards.module.css";
import Image from "next/image";
import React, {useEffect} from "react";

// @ts-ignore
import {techs} from "../../infos/techs.js";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";

const TechCards = () => {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to("#triggered-element3", 0.6, {
            scrollTrigger: {
                trigger: "#trigger3",
                markers: false,
                toggleActions: "play none none none"
            },
            stagger: 0.5,
            duration: 0.5,
            opacity: 1
        });
    }, [])
    
    return (
        <div className={styles.container} id={"trigger3"}>
            {techs.map((index, value) => {
                return (
                    <div key={"card-" + value} className={styles.card} id={"triggered-element3"}>
                        <Image alt={"tech"} width={50} height={50} src={"/techs/" + index.logo + ".svg"} className={styles.image}/>
                        <div className={styles.name}>{index.name}</div>
                        <div className={styles.desc}>{index.desc}</div>
                    </div>
                )
            })}
        </div>
    )
};

export default TechCards;
