import React from "react";
import { Link } from "react-router-dom";
import { GiSpaceShuttle } from "react-icons/gi";
import {
  IoMdPlanet,
  IoIosCamera,
  IoMdCalendar,
  IoIosInformationCircleOutline,
  IoMdMenu,
} from "react-icons/io";
import "./NavBar.scss";
import Hamburger from "./Hamburger";
import react, { useState, useEffect, useRef } from "react";

export const Navbar: React.FunctionComponent = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <nav>
      <div className="burger-button" onClick={toggleHamburger}>
              <Hamburger isOpen={hamburgerOpen} />
            </div>
      <ul className={hamburgerOpen? "hamburger-open" : "hamburger-closed"}>
        <li></li>
          <li>
            <Link className="navigation-button" to="/">
              <IoMdPlanet />
              <br></br>Home
            </Link>
          </li>
          <li>
            <Link className="navigation-button" to="/journey">
              <GiSpaceShuttle />
              <br />
              Journey
            </Link>
          </li>
          <li>
            <Link className="navigation-button" to="/mars-viewer">
              <IoIosCamera />
              <br />
              Mars Viewer
            </Link>
          </li>
          <li>
            <Link className="navigation-button" to="/birthday">
              <IoMdCalendar />
              <br />
              Birthday
            </Link>
          </li>
          <li>
            <Link className="navigation-button" to="/info">
              <IoIosInformationCircleOutline />
              <br />
              Info
            </Link>
          </li>
        </ul>

    </nav>
  );
};
