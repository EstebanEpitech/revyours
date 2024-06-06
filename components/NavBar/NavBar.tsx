/* eslint-disable */

import styles from "./NavBar.module.css";
import React, { Key, useState, useEffect } from "react";
import Image from "next/image";
import {BiLogoTwitch, BiLogoTwitter, BiLogoYoutube} from "react-icons/bi";
import { useRouter } from "next/router";

export default function NavBar() {
    const [scrolled, setScrolled] = React.useState(false);
    const[element, setElement] = React.useState(null)
    const router = useRouter();
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

    }, [])
    const handleScroll = () => {
        const offset = window.scrollY;

        if (offset > 120) {
            setScrolled(true);
        }
        else {
            setScrolled(false);
        }
    }

    return (
        <div className={styles.navbar}>
            
        </div>
    );
};
