import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import React, {useEffect, useRef} from "react";
import { useRouter } from "next/router";
import Script from 'next/script'
import { website_infos } from "../infos/website_infos";
import ScrollAnimation from 'react-animate-on-scroll';

import HomeHeader from "../sections/HomeHeader/HomeHeader";
import Techs from "../sections/Techs/Techs";
import Title from "../components/Title/Title";
import Carousel from "../components/Carousel/Carousel";
import Pillars from "../components/Pillars/Pillars";
import IconButton from "../components/IconButton/IconButton";

const Home: NextPage = () => {
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
                <HomeHeader/>
                <Pillars/>
                <ScrollAnimation animateIn="fadeInDown">
                    <Title
                            title={"Ils nous ont fait "}
                            word={"confiance"}
                            word2={"apprendre"}
                            word3={"confiance"}
                            center={true}
                            duration_time={5}
                        />
                </ScrollAnimation>
                <Carousel directory="/techs/"/>
                <Techs/>
                <Footer/>
            </main>
        </>

    );
};

export default Home;
