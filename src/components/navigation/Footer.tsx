import React from "react";
import "./Footer.scss";
import { Route, Routes, Link } from "react-router-dom";

export default function Footer() {
    return (<div className='footerSection'>
        <div className='footerLeft'>
            <h2>Useful Links</h2>
            <Link to="#">Terms of Use</Link><br />
            <Link to="" >Legal</Link><br />
            <a href="https://mars.nasa.gov/#red_planet/5">NASA Mars Page</a>
        </div>

        <div className='footerRight'>
            <h2>Latest Weather on Mars</h2>
            <div className='footerWeather'>Weather Component Placeholder</div>
        </div>
    </div>)
}

// Add Mars Mission logo & TechSwitch logo with links - should stick to the bottom of the page

// Footer should have two sections:

// - Left section must contains links : Terms of Use, Legal, relevant links (e.g. to NASA site). Left section may contain a sign-up newsletter form (which will not operational
// - Right section must contain either a weather report section or a fun fact section. Real-time weather ticket is preferred, if this is impossible move to fun fact ticket see separate tickets which should be linked below
//   - Real-time Mars weather report ticket - [https://trello.com/c/HmgQbTFj](https://trello.com/c/HmgQbTFj "smartCard-inline")
//   - Fun fact ticket-  [https://trello.com/c/5YiRCzox](https://trello.com/c/5YiRCzox "smartCard-inline")
