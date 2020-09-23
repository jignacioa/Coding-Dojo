import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { navigate } from "@reach/router";
import axios from "axios";
import '../static/Convergence.css';
import Header from './Header'

export default function Landing() {
    return (
        <Header header="Convergence" classname="header-convergence"/>
    )
}