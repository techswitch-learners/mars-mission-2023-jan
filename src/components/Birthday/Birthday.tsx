import { useState } from "react";
import { DateNameUserInput } from "./DateNameUserInput";

export function Birthday(){

    const [name, setName] = useState("");
	const [birthday, setBirthday] = useState("")

    function handleSubmit(event:any){
        event.preventDefault();
    }

    return(
        <main>
            <h1 className="birthday-title">Capture the Magic of Your Birthday on Mars: Enter Your Name and Birthday to Receive Your Personalized Martian Photos!</h1>
            <DateNameUserInput setName={setName} setBirthday={setBirthday} handleSubmit={handleSubmit}/>
            <div>IMPORT DROPDOWN YEAR SELECTION COMPONENT</div>
            <div>IMPORT PHOTOVIEWER COMPONENT</div>
            <div>IMPORT PDF GENERATOR COMPONENT</div>
        </main>
    )
}