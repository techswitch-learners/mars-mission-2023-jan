import React from "react";
import "./Home.scss" 

export const Home: React.FunctionComponent = () => {
  return (
    <main>
      <h1 className="main-header">Mars Exploration</h1>
      <p className="main-welcome-message">Start your 150 million km journey!</p>
      <section className = "main-image"></section>
      <section className ="main-image-description"></section>
    </main>
  );
};
