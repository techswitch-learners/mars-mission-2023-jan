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
import react, { useState } from "react";

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

          <li>
            
          </li>
          <li>
            <Link to="/">
              <IoMdPlanet />
              <br></br>Home
            </Link>
          </li>
          <li>
            <Link to="/">
              <GiSpaceShuttle />
              <br />
              Launch
            </Link>
          </li>
          <li>
            <Link to="/">
              <IoIosCamera />
              <br />
              Photos
            </Link>
          </li>
          <li>
            <Link to="/">
              <IoMdCalendar />
              <br />
              Birthday
            </Link>
          </li>
          <li>
            <Link to="/">
              <IoIosInformationCircleOutline />
              <br />
              Info
            </Link>
          </li>
        </ul>

    </nav>
  );
};
