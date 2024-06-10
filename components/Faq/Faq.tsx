import styles from "./Faq.module.css";
import Image from "next/image";
import React, { useState } from "react";
import {useRouter} from "next/router";
import IconButton from "../IconButton/IconButton";

import { faq } from '../../infos/faq'

export default function Faq(){
    const router = useRouter();
    const [selected, setSelected] = useState(-1)

    return (
        <div className={styles.container}>
            <div className={styles.flex}>
                {faq.map((index, value) => {
                    return (
                        <div>
                            <div className={styles.questionBox} onClick={() => setSelected(selected === value ? -1 : value)}>
                                <div className={styles.question}>
                                    <div className={styles.caret}><i className="fa fa-info"></i></div>
                                    {index.question}
                                </div>
                                <div className={styles.caret}><i className="fa fa-caret-down"></i></div>
                            </div>
                            <div className={styles.answerBox} style={value === selected ? { display: "" } : {display: "none"}}>
                                <div className={styles.answer}>{index.answer}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
