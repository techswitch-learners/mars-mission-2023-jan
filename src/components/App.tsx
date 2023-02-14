import React from "react";
import "./App.scss";
import { Header } from "./navigation/Header";
import { Route, Routes } from "react-router-dom";
import { LandingPage } from "./landingPage/LandingPage";

const App: React.FunctionComponent = () => {
  
  return (
    <>
      <Header />
      <Routes>
      {/* under review */}
        <Route path="/" element={<Home />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/mars-viewer" element={<MarsViewer />} />
        <Route path="/birthday" element={<Birthday />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </>
  );
};

export default App;
