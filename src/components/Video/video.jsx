import React from "react";
import styles from "./video.module.css";

import video from "./../../assets/video/ocean.mp4";
import triangle from "./../../assets/imgs/triangle.png";
import cross from "./../../assets/imgs/close.svg";

export default class Video extends React.Component {

    state = {
        active: false,
        autoPlay: false
	}

	open = () => {
        this.setState({active: true})
        this.setState({autoPlay: true})
    }
    
    close = () => {
        this.setState({active: false})
        this.setState({autoPlay: false})
    }

    playVideo() {
        this.refs.vidRef.play();
    }

    pauseVideo() {
        this.refs.vidRef.pause();
    }

    render() {
        return (
            <div className={styles.block}>
                    <button className={styles.link} onClick={ () => { this.open(); this.playVideo();} }>
                        <img className={styles.img} src={triangle} alt="triangle"/>
                    </button>
                    <p className={styles.txt}>play intro video</p>
                    <button className={`${styles.close} ${this.state.active ? styles.active : null}`} onClick={ () => { this.close(); this.pauseVideo();} }>
                        <img className={styles.cross} src={cross} alt="cross"/>
                    </button>
                    <video
                        className={`${styles.video} ${this.state.active ? styles.active : null}`}
                        style={{
                            width: "101%",
                            height: "100vh"
                        }} 
                        src={video}
                        ref="vidRef"
                    />
                    {/* {this.state.autoPlay ? (
                        <video
                            className={`${styles.video} ${this.state.active ? styles.active : null}`}
                            style={{
                                width: "101%",
                                height: "100vh"
                            }} 
                            src={video}
                            autoPlay={this.state.autoPlay}
                        />
                      ) : (
                        <video
                            className={`${styles.video} ${this.state.active ? styles.active : null}`}
                            style={{
                                width: "101%",
                                height: "100vh"
                            }} 
                            src={video}
                        />
                    )} */}
            </div>
        );    
    }

}
