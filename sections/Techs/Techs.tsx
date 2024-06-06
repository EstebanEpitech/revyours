import styles from "./Techs.module.css";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";
import Title from "../../components/Title/Title";
import TechCards from "../../components/TechCards/TechCards";
import ScrollAnimation from 'react-animate-on-scroll';

const Techs = () => {
    const router = useRouter();
    return (
        <div className={styles.container}>
            <div className={styles.textColumn}>
                <ScrollAnimation animateIn="fadeInLeft">
                    <Title 
                        title={"Notre valeur ajoutée pour votre "} 
                        word={"reach"}  
                        word2={"visibilité"} 
                        word3={"communauté"} 
                        small={true}
                    />
                </ScrollAnimation>
                <div className={styles.textBox}>
                    <ScrollAnimation animateIn="fadeInUp">
                    L&apos;ensemble de notre service repose sur les avancées en termes d&apos;I.A. pour vous garantir des résultats.
                    </ScrollAnimation>
                </div>
            </div>
            <div className={styles.cardColumn}>
                <TechCards/>
            </div>
        </div>
    )
};

export default Techs;
