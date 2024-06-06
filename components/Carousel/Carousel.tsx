import styles from "./Carousel.module.css";
import Image from "next/image";
import React,{useEffect} from "react";

// @ts-ignore
import {techs, techsLogo} from "../../infos/techs.js";

interface Props {
    speed?: string;
    directory: string;
    info?: string;
    colored?: boolean;
}

const Carousel = ({speed, info, directory, colored} : Props) => {
    let tmp = techsLogo 
    return (
        <div className={styles.container}>
            <div className={styles.carousel}>
                <div className={styles.mask}></div>
                <div className={styles.scroll} style={{animationDuration: speed  ? speed : "40s"}}>
                    <div role={"list"} className={styles.wrapperList}>
                        {tmp.map((index, value) => {
                            return (
                                <Image src={directory + index.logo}
                                       width={80}
                                       height={80}
                                       alt={index.name}
                                       className={colored ? styles.colored : styles.image}
                                       key={"reference-" + value}/>
                            )
                        })}
                        {tmp.map((index, value) => {
                            return (
                                <Image src={directory + index.logo}
                                       width={80}
                                       height={80}
                                       alt={index.name}
                                       className={colored ? styles.colored : styles.image}
                                       key={"reference3-" + value}/>
                            )
                        })}
                    </div>
                </div>
                <div className={styles.scroll} style={{animationDuration: speed  ? speed : "40s"}}>
                    <div role={"list"} className={styles.wrapperList}>
                        {tmp.map((index, value) => {
                            return (
                                <Image src={directory + index.logo}
                                       width={80}
                                       height={80}
                                       alt={index.name}
                                       className={colored ? styles.colored : styles.image}
                                       key={"reference2-" + value}/>
                            )
                        })}
                        {tmp.map((index, value) => {
                            return (
                                <Image src={directory + index.logo}
                                       width={80}
                                       height={80}
                                       alt={index.name}
                                       className={colored ? styles.colored : styles.image}
                                       key={"reference4-" + value}/>
                            )
                        })}
                    </div>
                </div>
            </div>


        </div>
    )
};

export default Carousel;
