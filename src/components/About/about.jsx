import React from "react";
import wrapper from "./../../app.module.css";
import styles from "./about.module.css";

import googleplay from "./../../assets/imgs/googleplay.png";
import appstore from "./../../assets/imgs/appstore.png";
import phone from "./../../assets/imgs/phone.png";
import gear from "./../../assets/imgs/gear.png";
import ellipse from "./../../assets/imgs/ellipse_green.png";
import ellipse2 from "./../../assets/imgs/ellipse_grey.png";

const About = () => {

    return (
        <div className={styles.about}>
            <div className={wrapper.wrapper}>
                <div className={styles.block}>
                    <div className={styles.item}>
                        <h3 className={styles.subheading}>I think you will</h3>
                        <h2 className={styles.heading}>like this Freebie</h2>
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
                    <div className={`${styles.item} ${styles.center}`}>
                        <img src={phone} alt="phone"/>
                        <div className={styles.subblock}>
                            <img src={gear} className={styles.img} alt="gear"/>
                            <img src={gear} className={styles.imgsmall} alt="gear"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default About;