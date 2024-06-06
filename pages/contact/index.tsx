import type { NextPage } from "next";
import Head from "next/head";
import styles from "../../styles/Contact.module.css";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import React, {useEffect, useRef} from "react";
import { useRouter } from "next/router";
import Title from "../../components/Title/Title";

const Contact: NextPage = () => {
    const router = useRouter();

    useEffect(() => {

    }, []);


    return (
        <>
            <Head>
                <title>
                    Esprit Shonen
                </title>
                <meta name="description" content="Esprit Shonen"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="theme-color" content="#000000"/>
                <meta name="keywords"
                      content="Esprit Shonen, esport"/>

                <link rel="icon" href="/Esprit/Logo-ES-Gradient.png"/>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/Esprit/Logo-ES-Gradient.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/Esprit/Logo-ES-Gradient.png"/>
                <link rel="manifest" href="/manifest.json"/>
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
                <meta name="msapplication-TileColor" content="#da532c"/>
                {/*<link
                    rel="canonical"
                    href="https://www.pragma-team.com/"
                    key="canonical"
                />*/}
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            </Head>
            <main>
                <div className={styles.container}>
                    <NavBar/>
                    <div className={styles.content}>
                        <div className={styles.mainTitle}>Contact</div>
                        <p><strong>Esprit-shonen</strong> met tout en œuvre pour répondre à vos questions et satisfaire
                            vos demandes.</p>
                        <p>Pour cela nous mettons à disposition cet email : <a
                            href={"mailto:shonen.sav@gmail.com"}><strong>Shonen.sav@gmail.com</strong></a></p>
                        <p>Nous vous recontacterons dès que possible.</p>
                    </div>

                    <Footer/>
                </div>

            </main>
        </>

    );
};

export default Contact;
