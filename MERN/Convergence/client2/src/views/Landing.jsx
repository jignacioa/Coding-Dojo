import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { navigate } from "@reach/router";
import axios from "axios";
import '../static/Convergence.css';
import Header from './Header'

export default function Landing() {
    return (
        <>
        <div className="bar">C</div>
        <div className="name-and-chatbox">
            <div className="chatbox-div">
                <div className="chat-box piece">Let's converge!</div>
            </div>
            <Header header="Convergence" classname="landing-convergence"/>
            <button className="landing-button">Enter  Chatroom</button>
        </div>
        
        <div className="bar-bottom">
            <div className="footer-message-div">
            <p className="footer-message">Convergence</p>
            <p className="footer-message">Real-time chat app for demo purposes only</p>
            </div>
        </div>
        </>

    )
}