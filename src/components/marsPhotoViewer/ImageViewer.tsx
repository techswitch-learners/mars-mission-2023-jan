import React from "react";
import './ImageViewer.scss';

export default function ImageViewer(props: {src: string}) { 
    return (                
        <div>               
          <img src={props.src} className="displayPhoto" /> 
        </div>
    );
}