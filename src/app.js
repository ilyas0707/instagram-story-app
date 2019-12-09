import React from "react";
import "./app.module.css";
import ReactDOM from 'react-dom';
import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Header from "./components/Header/header";
import Topline from "./components/Topline/topline";
import About from "./components/About/about";
import Get from "./components/Get/get";
import Info from "./components/Info/info";
import Video from "./components/Video/video";
import Footer from "./components/Footer/footer";

export default class App extends React.Component {

    render() {
        return (
            <div>
                <Router>
                    <div>
                        <ul
                            style={{
                                margin: "0",
                                padding: "0"
                            }}>
                            <li
                                style={{
                                    listStyle: "none"
                                }}>
                                <Link 
                                    to='/'
                                    style={{
                                        display: "block",
                                        width: "50%",
                                        height: "100vh",
                                        background: "transparent",
                                        position: "absolute",
                                        top: "0",
                                        left: "0",
                                        zIndex: "99"
                                    }}>
                                </Link>
                            </li>
                            <li
                                style={{
                                    listStyle: "none"
                                }}>
                                <Link
                                    to="/about"
                                    style={{
                                        display: "block",
                                        width: "50%",
                                        height: "100vh",
                                        background: "transparent",
                                        position: "absolute",
                                        top: "0",
                                        right: "0",
                                        zIndex: "99"
                                    }}>
                                </Link>
                            </li>
                        </ul>
                        <Switch>
                            <Route exact path="/" component={Topline}/>
                            <Route path="/about" component={About} />
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }

}

