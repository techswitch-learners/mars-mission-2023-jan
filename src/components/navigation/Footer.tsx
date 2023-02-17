import { useState } from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import { Facts } from "../Facts/Facts";

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
            <div className='footerRightContent' id={displayWeather ? "footerRightAppear" : "footerRightWrapper"}>
                <h2>Weather on Mars</h2>
                <div className='footerWeather'>Weather Component Placeholder</div>
            </div>
            <div className='footerRightContent' id={displayWeather ? "footerRightWrapper" : "footerRightAppear"}>
                <h2>Fun Fact</h2>
                <div><Facts /></div>
            </div>
            <button className="footerButton" onClick={() => setDisplayWeather(!displayWeather)}>{displayWeather ? "Check Fun Facts" : "Check Weather"}</button>
        </div>
    </div>
}
