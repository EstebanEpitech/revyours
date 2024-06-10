import styles from "./PricePanel.module.css";
import Image from "next/image";
import React from "react";
import {useRouter} from "next/router";
import IconButton from "../IconButton/IconButton";

export default function PricePanel(){
    const router = useRouter();


    return (
        <div className={styles.container}>
            <div className={styles.flex}>
                <div className={styles.selectRow}>
                    <span className={`${styles.picto} ${styles.absolute}` }><i className="fa fa-google"></i></span>
                    <select className={styles.customSelect} id="diffSelect">
                        <option value="10">15 Commentaires - 350€</option>
                        <option value="15">30 Commentaires - 500€</option>
                        <option value="25">50 Commentaires - 750€</option>
                        <option value="38">100 Commentaires - 1000€</option>                                      
                    </select>
                </div>
                <div className={styles.pictoRow}>
                    <div className={``}><span className={styles.picto}><i className="fa fa-shield"></i></span>Livraison guarantie</div>
                    <div className={``}><span className={styles.picto}><i className="fa fa-key"></i></span>Commentaires de qualité</div>
                    <div className={``}><span className={styles.picto}><i className="fa fa-lock"></i></span>100% privé et sécurisé</div>
                    <div className={``}><span className={styles.picto}><i className="fa fa-user"></i></span>On répond à vos questions</div>
                </div>
                <div>
                    <IconButton href="" children="Acheter maintenant"/>
                </div>
            </div>
        </div>
    )
}
