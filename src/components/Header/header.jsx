import React from "react";
import wrapper from "./../../app.module.css";
import styles from "./header.module.css";
                 
const NavItems = [
    { name: "About" },
    { name: "Portfolio" },
    { name: "LOGIN" }
];

export default class Header extends React.Component {

    state = {
		menu_active: false
    }
    
    hamburgerOpen = () => {
        this.setState({menu_active: !this.state.menu_active})
	}

    render() {

        const items = NavItems.map(({name}) => {
            return (
                <li key={name} className={styles.list}><a href="#" className={styles.link} rel="noopener">{ name }</a></li>
            );
        });

        return (
            <header className={styles.header}>
                <div className={wrapper.wrapper}>
                    <div className={styles.block}>
                        <div className={styles.item}>
                            <a href="#" className={styles.logo} rel="noopener">Freebie</a>
                        </div>
                        <div className={styles.item}>
                            <div className={`${styles.toggle} ${this.state.menu_active ? styles.active : null}`} id="toggle" onClick={ this.hamburgerOpen }>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <nav className={`${styles.nav} ${this.state.menu_active ? styles.active : null}`}>
                                <ul className={styles.menu}>
                                    { items }
                                    <li className={styles.list}><a href="#" className={styles.button} rel="noopener">sign up</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        );
    }

}