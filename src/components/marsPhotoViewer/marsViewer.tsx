import React from "react";
import "./marsViewer.scss";
import { useState } from "react";
import { ImageFilter } from "./ImageFilter";

export const MarsViewer: React.FunctionComponent = () => {

    const [selectedRover, setSelectedRover] = useState("Curiosity");
    const [selectedCamera, setSelectedCamera] = useState("");
    const [selectedDate, setSelectedDate] = useState("");

  return (
    <main>
      <h1 className="photo-viewer-header">
        Mars Photo Viewer
      </h1>
      <ImageFilter selectedRover={selectedRover} setSelectedRover={setSelectedRover} 
      selectedCamera={selectedCamera} setSelectedCamera={setSelectedCamera}
      selectedDate={selectedDate} setSelectedDate={setSelectedDate} 
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