import React from "react";
import "./App.scss";
import { Header } from "./navigation/Header";
import { Route, Routes } from "react-router-dom";
import { LandingPage } from "./landingPage/LandingPage";
import Footer from "./navigation/Footer";

const App: React.FunctionComponent = () => {
  return (
    <>
      <Header />
      <Routes>
      {/* under review */}
        <Route path="/" element={<div>Home</div>} />
        <Route path="/journey" element={<div>Journey</div>} />
        <Route path="/mars-viewer" element={<div>MarsViewer</div>} />
        <Route path="/birthday" element={<div>Birthday</div>} />
        <Route path="/info" element={<div>Info</div>} />
      </Routes>
      <footer><Footer /></footer>
    </>
  );
};

export default App;