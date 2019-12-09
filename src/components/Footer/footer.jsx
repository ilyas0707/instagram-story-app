import React from "react";
import wrapper from "./../../app.module.css";
import styles from "./footer.module.css";

import twitter from "./../../assets/imgs/twitter.png";
import facebook from "./../../assets/imgs/facebook.png";
import googleplus from "./../../assets/imgs/googleplus.png";
import instagram from "./../../assets/imgs/instagram.png";
import ellipse from "./../../assets/imgs/ellipse_green.png";

const elements = [
    { name: "About us", link: "Loriam ipsom", link2: "Dolor info", link3: "Specialozation mask", link4: "Combine with" }, 
    { name: "Process", link: "Loriam ipsom", link2: "Dolor info", link3: "Specialozation mask", link4: "Great information", link5: "Loriam ipsom", link6: "Dolor information" }, 
    { name: "Quick Links", link: "Home page", link2: "Why Choose Trave", link3: "How it works", link4: "Contact us" }
];

const social = [
    { name: "twitter", src: twitter },
    { name: "facebook", src: facebook },
    { name: "googleplus", src: googleplus },
    { name: "instagram", src: instagram }
];

const Footer = () => {

    const links = elements.map(({ name, link, link2, link3, link4, link5, link6 }) => {
        return (
            <div key={ name } className={styles.box}>
                <h3 className={styles.heading}>{ name }</h3>
                <a className={styles.link} href="#" rel="noopener">{ link }</a>
                <a className={styles.link} href="#" rel="noopener">{ link2 }</a>
                <a className={styles.link} href="#" rel="noopener">{ link3 }</a>
                <a className={styles.link} href="#" rel="noopener">{ link4 }</a>
                <a className={styles.link} href="#" rel="noopener">{ link5 }</a>
                <a className={styles.link} href="#" rel="noopener">{ link6 }</a>
            </div>
        );
    })

    const btns = social.map(({ name, src }) => {
        return (
            <a key={ name } href="#" className={styles.socialbtn} rel="noopener">
                <img className={styles.img} src={ src } alt={ name } />
            </a>
        );
    })

    return (
        <footer className={styles.footer}>
            <div className={wrapper.wrapper}>
                <div className={styles.block}>
                    <div className={`${styles.item} ${styles.flex}`}>
                        { links }
                    </div>
                    <div className={`${styles.item} ${styles.flexno}`}>
                        <h3 className={styles.heading}>Contact Information</h3>
                        <p className={styles.txt}>Loriam ipsom dolor information is in here so it is most importent</p>
                        <a className={styles.btn} href="#" rel="noopener">helpline@gmail.com</a>
                        <div className={styles.social}>
                            { btns }
                        </div>
                    </div>
                    <img className={styles.ellipse} src={ellipse} alt="ellipse"/>
                </div>
            </div>
        </footer>
    );

}

export default Footer;








