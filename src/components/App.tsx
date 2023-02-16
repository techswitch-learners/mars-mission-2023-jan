import React from "react";
import "./App.scss";
import { Header } from "./navigation/Header";
import { Route, Routes } from "react-router-dom";
import { Birthday } from "./Birthday/Birthday";
import Footer from "./navigation/Footer";
import {Home} from './Home/Home'
import {Journey} from './Journey/Journey'

const App: React.FunctionComponent = () => {
  return (
    <>
      <Header />
      <Routes>
      {/* under construction */}
        <Route path="/" element={<Home/>} />
        <Route path="/journey" element={<Journey/>} />
        <Route path="/mars-viewer" element={<div>MarsViewer</div>} />
        <Route path="/birthday" element={<Birthday />} />
        <Route path="/info" element={<div>Info</div>} />
      </Routes>
      <footer><Footer /></footer>
    </>
  );
};

export default App;