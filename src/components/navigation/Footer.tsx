import React, { useState } from "react";
import "./Footer.scss";
import { Route, Routes, Link } from "react-router-dom";
import {AstroImage} from "../AstroImage";

export default function Footer() {
    const [displayWeather, setDisplayWeather] = useState(true);
    return <div className='footerSection'>
            <div className='footerLeft'> 
                <h2>Useful Links</h2>
                <Link to="#">Terms of Use</Link><br />
                <Link to="" >Legal</Link><br />
                <a href="https://mars.nasa.gov/#red_planet/5">NASA Mars Page</a>
            </div>

            <div className='footerRight'>
                <div  id={displayWeather ? "footerRightAppear" : "footerRightWrapper"}>
                    <h2 className='footerRightTitle'>Today's Astro Image</h2>
                    <div className='footerRightContent'><AstroImage /></div>
                </div>
                <div id={displayWeather ? "footerRightWrapper" : "footerRightAppear"}>
                    <h2 className='footerRightTitle'>Fun Fact</h2>
                    <div className='footerRightContent'>Fun Fact Placeholder</div>
                </div>
                <button className="footerButton" onClick={() => setDisplayWeather(!displayWeather)}>{displayWeather ? "Check Fun Facts" : "Check Astro Image"}</button>
            </div>
        </div>
}
