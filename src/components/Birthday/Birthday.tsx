import { useState } from "react";
import { DateNameUserInput } from "./DateNameUserInput";
// import { ImageViewer,ImageSelector } from "../marsPhotoViewer/marsViewer";
import './Birthday.scss'

export function Birthday() {
    const [name, setName] = useState("");
    const [birthday, setBirthday] = useState("");
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth();
    const birthMonth = parseInt(birthday.slice(5, 7));
    const birthYear = parseInt(birthday.slice(0, 4));
    //this still needs to consier date to get an accurate age 
    const earthAge = birthMonth > currentMonth ? currentYear - birthYear - 1 : currentYear - birthYear;
    //A mars year is 1.88 earth years. toFixed() function returns a string, not an integer
    const marsAge = (earthAge / 1.88).toFixed(2);

    function handleSubmit(event: any) {
        event.preventDefault();
    }

    return (
        <main>
            <h1 className="birthday-title">Capture the Magic of Your Birthday on Mars:</h1>
            <h2 className="birthday-subtitle">Enter Your Name and Birthday to Receive Your Personalized Martian Photos!</h2>
            <DateNameUserInput setName={setName} setBirthday={setBirthday} handleSubmit={handleSubmit} />
            {/* <div>IMPORT DROPDOWN YEAR SELECTION COMPONENT</div> */}
            {/* <ImageViewer />
            <ImageSelector />  */}
            <section className={(earthAge) ? "" : "Mars-Age-hidden"} >
                <article>
                    <p>You are {marsAge} Mars years old! </p>
                </article>
            </section>
            {/* <div>IMPORT PDF GENERATOR COMPONENT</div> */}
        </main>
    )
}