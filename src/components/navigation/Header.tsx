import React from "react";
import { Navbar } from "./Navbar";
import { Navbarmobile } from "./Navbarmobile";

import "./Header.scss";

export const Header: React.FunctionComponent = () => {
  return (
    <header>
      <Navbar />
      <Navbarmobile />
    </header>
  );
};
