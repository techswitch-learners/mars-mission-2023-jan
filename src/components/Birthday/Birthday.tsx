import React from "react";
import { BsCalendar3 } from 'react-icons/bs'
import { DateNameUserInput } from "./DateNameUserInput";



export function Birthday(){
    return(
        <main>
            <h1 className="birthday-title">Capture the Magic of Your Birthday on Mars: Enter Your Name and Birthday to Receive Your Personalized Martian Photos!</h1>
            <DateNameUserInput />
            <div>IMPORT DROPDOWN YEAR SELECTION COMPONENT</div>
            <div>IMPORT PHOTOVIEWER COMPONENT</div>
            <div>IMPORT PDF GENERATOR COMPONENT</div>
        </main>
    )
}