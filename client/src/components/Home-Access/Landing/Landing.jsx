import React from "react";
import "./Landing.css"
import LandNav from "../Nav/LandNav"



function Landing() {
    return (
        <div className = "homepage">
            <LandNav />
            <div className = "roam"><span id = "r">R</span>OAM</div>
        </div>
    );
}

export default Landing