import React from "react";
import styles from "./get.module.css";

import ellipse from "./../../assets/imgs/ellipse_grey.png";

const Get = () => {

    return (
        <div className={styles.get}>
            <div className={styles.block}>
                <div className={`${styles.item} ${styles.colored}`}></div>
                <div className={`${styles.item} ${styles.position}`}>
                    <h3 className={styles.subheading}>Get your</h3>
                    <h2 className={styles.heading}>Freebie Design</h2>
                    <p className={styles.txt}>Agile venture capital thinker-maker-doer bootstrapping fund integrate unicorn. Earned media ship it piverate latte waterfall is so 2000 and lat <br/><br/> Sticky note ship it minimum viable</p>
                    <a href="#" className={styles.link} rel="noopener">Get Started</a>
                    <img src={ellipse} className={styles.ellipse} alt="ellipse"/>
                </div>
            </div>
        </div>
    );

}

export default Get;

 


 

