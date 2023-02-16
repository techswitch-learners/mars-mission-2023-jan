import React from "react"
import { useState, MouseEvent } from "react";
import "./SideBar.scss"

export const SideBar: React.FunctionComponent = () => {
  const [journeyStage ,setJourneyStage ] = useState(1);
  const [style, setStyle] = useState({
    1: "side-bar-button",
    2: "side-bar-button",
    3: "side-bar-button",
    4: "side-bar-button",
    5: "side-bar-button"
  });

 function handleButtonClick(buttonStage:number){
    setJourneyStage (buttonStage);
  }

  function changeStyle(buttonStage:number){

      switch(buttonStage){
      case 1:
            setStyle({
              ...style,
              1: "side-bar-button-2"
              })
              break;          
      case 2:
            setStyle({
              ...style,
              2: "side-bar-button-2"
              })
              break;
      case 3:
            setStyle({
              ...style,
              3: "side-bar-button-2"
              })
              break;
      case 4:
            setStyle({
              ...style,
              4: "side-bar-button-2"
              })
              break;
      case 5:
            setStyle({
              ...style,
              5: "side-bar-button-2"
              })
              break;
    }
  }

    return(
        <div className="main-side-bar" >
            <button 
              className={style[5]} 
              type="submit" 
              onClick={()=>{ handleButtonClick(5); changeStyle(5)}} >
            </button> 
            <hr 
              className="side-bar-hr" 
            /> 
            <button 
              className={style[4]} 
              type="submit" 
              onClick={()=>{ handleButtonClick(4); changeStyle(4) }}>
            </button>  
            <hr 
              className="side-bar-hr" 
            />   
            <button 
              className={style[3]} 
              type="submit" 
              onClick={()=>{ handleButtonClick(3); changeStyle(3) }} >
            </button> 
            <hr 
              className="side-bar-hr" 
            /> 
            <button 
              className={style[2]} 
              type="submit" 
              onClick={()=>{ handleButtonClick(2); changeStyle(2) }} >
            </button> 
            <hr 
              className="side-bar-hr" 
            /> 
            <button 
              className={style[1]} 
              type="submit" 
              onClick={()=>{ handleButtonClick(1); changeStyle(1)}}>
            </button> 
      </div>
    )
}