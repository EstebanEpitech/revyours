import type { NextPage } from "next";
import Head from "next/head";
import styles from "../../styles/Shop.module.css";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import React, {useEffect, useRef} from "react";
import { useRouter } from "next/router";
import bg from "../../public/Esprit/Background.png"
import { website_infos } from "../../infos/website_infos";

const Shop: NextPage = () => {
    const router = useRouter();

    useEffect(() => {

    }, []);


    return (
        <>
            <Head>
                <title>
                    {website_infos.title}
                </title>
                <meta name="description" content={website_infos.title}/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="theme-color" content="#000000"/>
                <meta name="keywords"
                      content="Esprit Shonen, esport"/>

                <link rel="icon" href={website_infos.icon_location}/>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href={website_infos.icon_location}/>
                <link rel="icon" type="image/png" sizes="16x16" href={website_infos.icon_location}/>
                <link rel="manifest" href="/manifest.json"/>
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
                <meta name="msapplication-TileColor" content="#da532c"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            </Head>
            <main>

                <NavBar/>
                <div className={styles.content}>
                </div>
                <Footer/>

            </main>
        </>

    );
};

export default Shop;
