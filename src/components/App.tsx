import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home/Home";
import { Journey } from "./Journey/Journey";
import { MarsViewer } from "./marsPhotoViewer/marsViewer";
import { Birthday } from "./Birthday/Birthday";
import { Navbar } from "./navigation/Navbar";
import Footer from "./navigation/Footer";


const App: React.FunctionComponent = () => {
  return (
    <>
      <header><Navbar /></ header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/journey" element={<Journey/>} />
        <Route path="/mars-viewer" element={<MarsViewer/>} />
        <Route path="/birthday" element={<Birthday/>} />
        <Route path="/info" element={<div>Info</div>} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;