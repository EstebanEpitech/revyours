import styles from "./Title.module.css";
import React,{useEffect,useState} from "react";
import { useRouter } from "next/router";
import { gsap } from "gsap"
import { TextPlugin } from "gsap/dist/TextPlugin";

interface Props {
    title?: string;
    word?: string;
    word2?: string;
    word3?: string;
    small?: boolean;
    center?: boolean;
    duration_time?: number;
    delay_time?: number;
}



const Title = ({title, word, word2, word3, small, center, duration_time, delay_time} : Props) => {
    const router = useRouter();
    
    useEffect(() => {
        
        // Quand on reproduit ces actions au sein d'une boucle ca ne fonctionne plus
        // TODO : trouver un moyen de loop génériquement la dessus
        // On arrete les anims au bout d'un moment (~2mn) pour eviter une charge inutile sur un site inactif
        
        gsap.registerPlugin(TextPlugin)
        if (word && word2 && word3) {
            let toLast = duration_time ? duration_time : 1 // durée par défaut en secondes
            let toDelay = delay_time ? delay_time : 5 // délai par défaut en secondes
            toDelay += toLast // on ajoute la durée de l'anim au délai entre les anims
            gsap.to("#scramble-" + word, {duration: toLast, text: word2, delay: toDelay});
            gsap.to("#scramble-" + word, {duration: toLast, text: word3, delay: toDelay * 2});
            gsap.to("#scramble-" + word, {duration: toLast, text: word, delay: toDelay * 3});
            gsap.to("#scramble-" + word, {duration: toLast, text: word2, delay: toDelay * 4});
            gsap.to("#scramble-" + word, {duration: toLast, text: word3, delay: toDelay * 5});
            gsap.to("#scramble-" + word, {duration: toLast, text: word, delay: toDelay * 6});
            gsap.to("#scramble-" + word, {duration: toLast, text: word2, delay: toDelay * 7});
            gsap.to("#scramble-" + word, {duration: toLast, text: word3, delay: toDelay * 8});
            gsap.to("#scramble-" + word, {duration: toLast, text: word, delay: toDelay * 9});
            gsap.to("#scramble-" + word, {duration: toLast, text: word2, delay: toDelay * 10});
            gsap.to("#scramble-" + word, {duration: toLast, text: word3, delay: toDelay * 11});
            gsap.to("#scramble-" + word, {duration: toLast, text: word, delay: toDelay * 12});
            gsap.to("#scramble-" + word, {duration: toLast, text: word2, delay: toDelay * 13});
            gsap.to("#scramble-" + word, {duration: toLast, text: word3, delay: toDelay * 14});
            gsap.to("#scramble-" + word, {duration: toLast, text: word, delay: toDelay * 15});
        }
    }, [word2]); // On relance une seconde fois le useEffect quand word2 est setup pour eviter une undefined ref
    
    return (

        <div className={styles.content}>
            <div className={(small === true ? `${styles.titleBox} ${styles.centerBox}` : `${styles.titleBox}`)}>
                <div
                    className={(small === true ? `${styles.title} ${styles.small}` : (center === true ? `${styles.title} ${styles.center}` : `${styles.title}`))}>
                    {title}
                    <span id={"myText"} className={styles.anim}><strong id={"scramble-" + word} className={styles.mix}>{word}</strong></span>

                </div>
            </div>
        </div>
    )
};

export default Title;
