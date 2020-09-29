import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { navigate } from "@reach/router";
import axios from "axios";
import '../static/Convergence.css';
import Header from './Header'

export default function Landing() {
    return (
        <>
        <div className="bar"></div>
        <div className="name-and-chatbox">
        <div className="chatbox-div">
        <div className="chat-box piece">Let's converge!</div>
        </div>
        <Header header="Convergence" classname="landing-convergence"/>
        </div>
        <div className="bar-bottom"></div>
        <button>Enter  Chatroom</button>
        </>

    )
}