import React, {useState} from "react";
import "./marsViewer.scss";
import ImageViewer from "./ImageViewer";
import image from "../../../images/homeImages/3-SpiritRover.jpg";

export const MarsViewer: React.FunctionComponent = () => {

  const [selectedImage, setSelectedImage] = useState<string>("");

  return (
    <main>
      <h1 className="photo-viewer-header">
        Mars Photo Viewer
      </h1>
      <ImageViewer  src={(!selectedImage)? image : selectedImage}/>
    </main>
  );
};