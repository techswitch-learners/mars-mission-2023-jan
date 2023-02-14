import React from "react";
import { Link } from "react-router-dom";
import { GiSpaceShuttle } from 'react-icons/gi';
import { IoMdPlanet, IoIosCamera,IoMdCalendar,IoIosInformationCircleOutline, IoMdMenu } from 'react-icons/io';
import "./NavBar.scss";

export const Navbar: React.FunctionComponent = () => {
  return <nav>
    <ul>Logo</ul>
    <ul>
      <li><Link to="/"><IoMdPlanet /><br></br>Home</Link></li>
    </ul>
    <ul>
      <li><Link to="/"><GiSpaceShuttle /><br />Launch</Link></li>
    </ul>
    <ul>
      <li><Link to="/"><IoIosCamera /><br />Photos</Link></li>
    </ul>
    <ul>
      <li><Link to="/"><IoMdCalendar /><br />Birthday</Link></li>
    </ul>
    <ul>
      <li><Link to="/"><IoIosInformationCircleOutline /><br />Info</Link></li>
    </ul>
  </nav>;
};


/*

*/