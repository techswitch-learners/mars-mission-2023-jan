import React from "react";
import "./marsViewer.scss";
import { useState } from "react";
import { ImageFilter } from "./ImageFilter";

export const MarsViewer: React.FunctionComponent = () => {
  const [date, setDate] = useState<string>("2020-1-1");
  const [rover, setRover] = useState<string>("curiosity");
  const [camera, setCamera] = useState<string>("NAVCAM");
  
  return (
    <main>
      <h1 className="photo-viewer-header">
        Mars Photo Viewer
      </h1>
      <ImageFilter rover={rover} setRover={setRover} 
      camera={camera} setCamera={setCamera}
      date={date} setDate={setDate} 
      />
    {/* 
    Insert the following three components 
    <ImageViewer />
    <ImageFilter />
    <ImageSelector /> 
    */}
    </main>
  );
};