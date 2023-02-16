import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./navigation/Navbar";
import Footer from "./navigation/Footer";
import {Home} from './Home/Home'
import {Journey} from './Journey/Journey'


const App: React.FunctionComponent = () => {

  return (
    <>
      <header><Navbar /></ header>
      <Routes>
      {/* under construction */}
        <Route path="/" element={<Home/>} />
        <Route path="/journey" element={<Journey/>} />
        <Route path="/mars-viewer" element={<div>MarsViewer</div>} />
        <Route path="/birthday" element={<div>Birthday</div>} />
        <Route path="/info" element={<div>Info</div>} />
      </Routes>
      <footer><Footer /></footer>
    </>
  );
};

export default App;