import styles from "./Footer.module.css";
import Image from "next/image";
import React from "react";
import {BiLogoTwitch, BiLogoTwitter, BiLogoYoutube} from "react-icons/bi";
import {useRouter} from "next/router";

export default function Footer(){
    const router = useRouter();


    return (
        <div className={styles.footer}>
            <div className={styles.top}>
                <div className={`${styles.topCol} ${styles.topFirst}`} onClick={() => {window.open("https://www.google.com/search?q=286+boulevard+clemenceau+59700+Marcq-en-Bar%C5%93ul+France&oq=286+boulevard+clemenceau+59700+Marcq-en-Bar%C5%93ul+France&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRigAdIBBzI2MGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8", '_blank')}}>
                    <div className={`${styles.locText1}`}>Revyours n&apos;est pas affilié avec Google et</div>
                    <div className={`${styles.locText2}`}>nous adhérons à l&apos;ensemble des guidelines</div>
                    <div className={`${styles.locText3}`}>établies par ce service.</div>
                </div>
                <div className={`${styles.topCol} ${styles.topMid}`}>
                    <div>
                        <div>Renseignements généraux</div>
                        <div className={`${styles.hoverText}`}><span className={styles.picto}><i className="fa fa-envelope-o"></i></span>
                            <a href={"mailto:contact@revyours.com"} className={`${styles.hoverText} ${styles.strong}`}>contact@revyours.com</a>
                        </div>
                    </div>
                    <div>
                        <div className={`${styles.hoverText}`}><span className={styles.picto}><i className="fa fa-info"></i></span>Mentions légales</div>
                        <div className={`${styles.hoverText}`}><span className={styles.picto}><i className="fa fa-info"></i></span>Conditions générales de ventes</div>
                    </div>
                </div>
                <div className={`${styles.topCol} ${styles.topLast}`}>
                    {/* <Image src={Logo} alt={"Logo"} className={styles.logo}/> */}
                </div>
            </div>
            <div className={styles.bottom}>
                <div>
                    Copyright © 2023 Revyours. Tous droits réservés
                </div><div>

                </div>
            </div>
        </div>
    )
}
