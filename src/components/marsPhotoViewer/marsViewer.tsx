import React from "react";
import "./marsViewer.scss";
import { ImageFilter } from "./ImageFilter";

export const MarsViewer: React.FunctionComponent = () => {
  return (
    <main>
      <h1 className="photo-viewer-header">
        Mars Photo Viewer
      </h1>
      <ImageFilter/>
    {/* 
    Insert the following three components 
    <ImageViewer />
    <ImageFilter />
    <ImageSelector /> 
    */}
    </main>
  );
};