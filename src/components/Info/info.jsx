import React from "react";
import wrapper from "./../../app.module.css";
import styles from "./info.module.css";

import googleplay from "./../../assets/imgs/googleplay.png";
import appstore from "./../../assets/imgs/appstore.png";
import phone from "./../../assets/imgs/phone.png";
import light from "./../../assets/imgs/light.png";
import ellipse from "./../../assets/imgs/ellipse_green.png";
import ellipse2 from "./../../assets/imgs/ellipse_grey.png";

const Info = () => {

    return (
        <div className={styles.about}>
            <div className={wrapper.wrapper}>
                <div className={styles.block}>
                    <div className={`${styles.item} ${styles.center}`}>
                        <img src={phone} alt="phone"/>
                        <div className={styles.subblock}>
                            <img src={light} className={styles.img} alt="gear"/>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <p className={styles.sidebar}>
                            Agile venture capital thinker-maker-doer bootstrapping fund integrate unicorn. Earned media ship it piverate latte waterfall is so 2000 and late <br/><br/> Sticky note ship it minimum viable product latte bootstrapping iterate 
                        </p>
                        <p className={styles.subtxt}>Download Now</p>
                        <div className={styles.btnblock}>
                            <a href="#" className={styles.link} rel="noopener"><img className={styles.linkimg} src={googleplay} alt="googleplay"/></a>
                            <a href="#" className={styles.link} rel="noopener"><img className={styles.linkimg} src={appstore} alt="appstore"/></a>
                        </div>
                        <img src={ellipse} className={styles.ellipse} alt="ellipse"/>
                        <img src={ellipse2} className={styles.ellipse2} alt="ellipse"/>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Info;