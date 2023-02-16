import { useState } from "react";
import { DateNameUserInput } from "./DateNameUserInput";
import './Birthday/Birthday.scss'

export function Birthday(){
    const [name, setName] = useState("");
	const [birthday, setBirthday] = useState("")

    function handleSubmit(event:any){
        event.preventDefault();
    }

    return(
        <main>
            <h1 className="birthday-title">Capture the Magic of Your Birthday on Mars:</h1>
            <h2 className="birthday-subtitle">Enter Your Name and Birthday to Receive Your Personalized Martian Photos!</h2>
            <DateNameUserInput setName={setName} setBirthday={setBirthday} handleSubmit={handleSubmit}/>
            <div>IMPORT DROPDOWN YEAR SELECTION COMPONENT</div>
            <div>IMPORT PHOTOVIEWER COMPONENT</div>
            <div>IMPORT PDF GENERATOR COMPONENT</div>
        </main>
    )
}