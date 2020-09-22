import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { navigate } from "@reach/router";
import axios from "axios";
import '../static/Convergence.css';


export default function Rules() {


    return (
        <div className="rules-div">
        <h3>Rules</h3>
        <ul className="list">
            <li>Introduce yourself</li>
            <li>Don't spam</li>
            <li>Be civil</li>
        </ul>
        </div>
    )

}