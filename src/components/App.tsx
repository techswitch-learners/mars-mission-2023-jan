import React from "react";
import "./App.scss";
import { Header } from "./navigation/Header";
import { Route, Routes } from "react-router-dom";
import { Home } from "./home/Home";
import { Journey } from "./journey/Journey";

const App: React.FunctionComponent = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/journey" element={<Journey />} />
      </Routes>
    </>
  );
};

export default App;
