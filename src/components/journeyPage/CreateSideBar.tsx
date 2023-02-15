import React from "react"
import { useState, MouseEvent } from "react";
import "./CreateSideBar.scss"

export const CreateSideBar: React.FunctionComponent = () => {
  const [buttonState,setButtonState] = useState(1);
  const [style, setStyle] = useState({
    1: "side-bar-button",
    2: "side-bar-button",
    3: "side-bar-button",
    4: "side-bar-button",
    5: "side-bar-button"
  });

 function handleButtonState(number:number){
    setButtonState(number);
  }

  function changeStyle(number:number){
          if(number === 1){
            setStyle({
              ...style,
              1: "side-bar-button-2"
              })
            }   
          if(number === 2){
            setStyle({
              ...style,
              2: "side-bar-button-2"
              })
          }
          if(number === 3){
            setStyle({
              ...style,
              3: "side-bar-button-2"
              })
          }
          if(number === 4){
            setStyle({
              ...style,
              4: "side-bar-button-2"
              })
          }
          if(number === 5){
            setStyle({
              ...style,
              5: "side-bar-button-2"
              })
          }
    }

    return(
        <div className="main-side-bar" >
            <button className={style[5]} type="submit" onClick={()=>{ handleButtonState(5); changeStyle(5)}} ></button> 
            <hr className="side-bar-hr" style={{color: "black", width: 5, height: 30}}/> 
            <button className={style[4]} type="submit" onClick={()=>{ handleButtonState(4); changeStyle(4) }}></button>  
            <hr className="side-bar-hr" style={{color: "black", width: 5, height: 30}}/>   
            <button className={style[3]} type="submit" onClick={()=>{ handleButtonState(3); changeStyle(3) }} ></button> 
            <hr className="side-bar-hr" style={{color: "black", width: 5, height: 30}}/> 
            <button className={style[2]} type="submit" onClick={()=>{ handleButtonState(2); changeStyle(2) }} ></button> 
            <hr className="side-bar-hr" style={{color: "black", width: 5, height: 30,}}/> 
            <button className={style[1]} type="submit" onClick={()=>{ handleButtonState(1); changeStyle(1)}}></button> 
      </div>
    )
}