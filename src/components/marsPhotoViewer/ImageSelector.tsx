import React from "react";
import { useState, ChangeEvent } from "react";
import "./ImageSelector.scss";

export function ImageSelector() {

    const currentYear = new Date().getFullYear();
    const years = Array.from(new Array(20), (val, index) => currentYear - index);
    const [selectedRover, setSelectedRover] = useState("Curiosity");
    const [selectedCamera, setSelectedCamera] = useState("");
    const [selectedBeginDate, setSelectedBeginDate] = useState("");
    const [selectedEndDate, setSelectedEndDate] = useState("");

    const handleRover = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectedRover(event.target.value);
    };

    const handleCamera = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectedCamera(event.target.value);
    };

    const handleBeginDate = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectedBeginDate(event.target.value);
    };

    const handleEndDate = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectedEndDate(event.target.value);
    };

    return (
        <div>
            <select className="selectedRover" value={selectedRover} onChange={handleRover}>
                <option value="Curiosity">Curiosity</option>
                <option value="Spirit">Spirit</option>
                <option value="Opportunity">Opportunity</option>
            </select>
            <select className="selectedCamera" value={selectedCamera} onChange={handleCamera}>
                (selectedRover === "Curiosity") ?
                <option value="FHAZ">Front Hazard Avoidance Camera</option>
                <option value="RHAZ">Rear Hazard Avoidance Camera</option>
                <option value="MAST">Mast Camera</option>
                <option value="CHEMCAM">Chemistry and Camera Complex</option>
                <option value="MAHLI">Mars Hand Lens Imager</option>
                <option value="MARDI">Mars Descent Imager</option>
                <option value="NAVCAM">Navigation Camera</option>
                :
                <option value="FHAZ">Front Hazard Avoidance Camera</option>
                <option value="RHAZ">Rear Hazard Avoidance Camera</option>
                <option value="NAVCAM">Navigation Camera</option>
                <option value="PANCAM">Panoramic Camera</option>
                <option value="MINITES">Miniature Thermal Emission Spectrometer (Mini-TES)</option>
            </select>
            <select className="selectedBeginDate" value={selectedBeginDate} onChange={handleBeginDate}>
                <option value="">--PLEASE CHOOSE A YEAR--</option>
            </select>
            <select className="selectedEndDate" value={selectedEndDate} onChange={handleEndDate}>
                <option value="">--PLEASE CHOOSE A YEAR--</option>
            </select>
        </div>

    )
}