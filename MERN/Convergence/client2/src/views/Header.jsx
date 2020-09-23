import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { navigate } from "@reach/router";
import axios from "axios";
import '../static/Convergence.css';



export default function Header(props) {

    return (
       <h1 className={props.classname}>{props.header}</h1>
    )
}