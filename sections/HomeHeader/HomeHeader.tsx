import styles from "./HomeHeader.module.css";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";
import Title from "../../components/Title/Title";
import ScrollAnimation from 'react-animate-on-scroll';

const HomeHeader = () => {
    const router = useRouter();
    return (
        <div className={styles.container}>
            <ScrollAnimation animateIn="fadeIn">
            <Title 
                title={"Un outil de communication "} 
                word={"rapide"} 
                word2={"pertinent"} 
                word3={"efficace"} 
                center={true}
            />
            </ScrollAnimation>
                <div className={styles.textBox}>
                <ScrollAnimation animateIn="fadeInUp">
                    <strong>Revyours</strong> développe des solutions pour booster votre visibilité de manière organique rapidement.
                </ScrollAnimation>
            </div>
        </div>
    )
};

export default HomeHeader;
