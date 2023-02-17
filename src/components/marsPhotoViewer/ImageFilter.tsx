import React from "react";
import { ChangeEvent } from "react";
import "./ImageFilter.scss";

interface ImageFilterProps {
    selectedRover: string;
    setSelectedRover: React.Dispatch<React.SetStateAction<string>>;
    selectedCamera: string;
    setSelectedCamera: React.Dispatch<React.SetStateAction<string>>;
    selectedDate: string;
    setSelectedDate: React.Dispatch<React.SetStateAction<string>>;
}

export function ImageFilter({selectedRover,setSelectedRover,selectedCamera,setSelectedCamera,selectedDate,setSelectedDate}:ImageFilterProps) {

    const handleRover = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectedRover(event.target.value);
    };

    const handleCamera = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectedCamera(event.target.value);
    };

    const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSelectedDate(event.target.value);
    };

    return (
        <div className="filterBlock">
            <label className="filterLabel">Rover</label>
            <label className="filterLabel">Camera</label>
            <label className="filterLabel">Select a Date</label>
            <br>
            </br>
            <select className="selectedDropdown" value={selectedRover} onChange={handleRover}>
                <option value="Curiosity">Curiosity</option>
                <option value="Spirit">Spirit</option>
                <option value="Opportunity">Opportunity</option>
            </select>
            <select className="selectedDropdown" value={selectedCamera} onChange={handleCamera}>
                {(selectedRover === "Curiosity") ?
                    <>
                        <option value="FHAZ">Front Hazard Avoidance Camera</option>
                        <option value="RHAZ">Rear Hazard Avoidance Camera</option>
                        <option value="MAST">Mast Camera</option>
                        <option value="CHEMCAM">Chemistry and Camera Complex</option>
                        <option value="MAHLI">Mars Hand Lens Imager</option>
                        <option value="MARDI">Mars Descent Imager</option>
                        <option value="NAVCAM">Navigation Camera</option>
                    </>
                    :
                    <>
                        <option value="FHAZ">Front Hazard Avoidance Camera</option>
                        <option value="RHAZ">Rear Hazard Avoidance Camera</option>
                        <option value="NAVCAM">Navigation Camera</option>
                        <option value="PANCAM">Panoramic Camera</option>
                        <option value="MINITES">Miniature Thermal Emission Spectrometer (Mini-TES)</option>
                    </>
                }
            </select>
            <input type="date" id="date" onChange={handleDateChange} value={selectedDate}/>   
        </div>
    )
}