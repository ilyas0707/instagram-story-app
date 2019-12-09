import React from "react";
import wrapper from "./../../app.module.css";
import styles from "./topline.module.css";

import ellipse from "./../../assets/imgs/ellipse_black.png";

const Topline = () => {

    return (
        <div className={styles.topline}>
            <div className={wrapper.wrapper}>
                <div className={styles.block}>
                    <p className={styles.txt}>Thinking About</p>
                    <h2 className={styles.heading}>Freebie Design</h2>
                    <a href="#" className={styles.link} rel="noopener">Get Started</a>
                </div>
                <div className={styles.item}>
                    <img src={ellipse} className={styles.img} alt="ellipse"/>
                </div>
            </div>
        </div>
    );

}

export default Topline;
 
