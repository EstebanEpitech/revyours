import type { NextPage } from "next";
import Head from "next/head";
import styles from "../../styles/Contact.module.css";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import React, {useEffect, useRef} from "react";
import { useRouter } from "next/router";
import Title from "../../components/Title/Title";

const Livraison: NextPage = () => {
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
                        <div className={styles.mainTitle}>Livraison</div>
                        <div className={styles.detailTitle}>Rappel :</div>
                        <p>- Les frais de livraison prennent en compte : les frais d&apos;emballage, de manutention et
                            d&apos;expédition.</p>
                        <p>- Notez également l&apos;importance de nous fournir TOUTES les informations nécessaires afin que
                            votre colis soit correctement livré (numéro de bâtiment, lieux dit, étage etc..).</p>
                        <p>Par ailleurs, les informations personnelles fournies telles que : votre numéro de téléphone,
                            adresse mail, nom et prénom et adresse ne doivent comprendre aucune erreur. Sachez que ces
                            informations sont seulement utilisées dans le cadre du paiement et la livraison de votre
                            commande. Si vous remarquez une erreur avant que nous vous ayons notifié la livraison de
                            votre colis, merci de bien nous en tenir informé avant que celui-ci soit expédié. Dans le
                            cas d&apos;informations fournies erronées, les frais de réexpéditions seront donc à votre
                            charge.</p>
                        <div className={styles.sectionTitle}>LIVRAISON À DOMICILE PAR COLISSIMO</div>
                        <p>Dès la prise en charge de votre colis par le réseau Colissimo, vous pourrez suivre votre
                            colis à tout moment grâce à votre numéro de suivi qui vous sera envoyé par mail une fois
                            votre commande validée et envoyée.</p>
                        <p>Suivant la valeur et la taille de votre colis, ce dernier vous sera remis en mains propres,
                            déposé dans votre boite aux lettres ou dans votre bureau de Poste (remis contre signature et
                            présentation d&apos;une pièce d’identité).</p>
                        <div className={styles.detailTitle}>Délais :</div>
                        <p>-Votre colis est livré à votre domicile dans un délai de 2 à 4 jours (ouvrés). En cas
                            d’absence ou si votre colis ne peut pas être déposé dans votre boîte aux lettres, un avis de
                            passage vous sera laissé, afin de vous permettre d&apos;aller le récupérer dans votre bureau de
                            Poste (uniquement en France métropolitaine).</p>
                        <div className={styles.sectionTitle}>LIVRAISON EN POINT RELAIS</div>
                        <p>Nous vous livrons dans le point relais de votre choix (à proximité de votre domicile ou lieu de vacance). Dès la prise en charge de votre colis dans le réseau Relais Colis, vous pouvez suivre votre colis à tout moment grâce à votre numéro de suivi qui vous sera envoyé par mail une fois vôtre commande validée et envoyée.</p>
                        <p>Vous êtes automatiquement averti, par email ou SMS, de l’arrivée de votre colis dans le relais choisi. Vous pourrez procéder au retrait de votre colis aux heures d&apos;ouverture du magasin choisi. Votre colis vous sera remis contre signature et après présentation d&apos;une pièce d&apos;identité.</p>
                        <p>Si votre point relais est fermé (pour cause de vacance ou congé ponctuel), Colissimo vous averti alors automatiquement par SMS et/ou mail du changement de point relais. Vous pouvez alors leurs confirmer si celui-ci vous convient ou non.</p>
                        <div className={styles.detailTitle}>Délais :</div>
                        <p>-Votre colis est livré dans le Relais de votre choix dans un délai de 2 à 3 jours (ouvrés) pour la France Métropolitaine. Vous avez alors 10 jours pour venir retirer votre colis après qu&apos;il ait été reçu par le relais. Passé ce délai, celui-ci nous sera retourné. Les frais engendrés par cet oubli seront à votre charge.</p>
                    </div>

                    <Footer/>
                </div>

            </main>
        </>

    );
};

export default Livraison;
