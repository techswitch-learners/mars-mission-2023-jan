import { useState } from "react";
import { SideBar } from "./SideBar";
import { JourneyCard } from "./JourneyCard";
import './Journey.scss'

export function Journey() {
    const [journeyStage ,setJourneyStage ] = useState(1);

    return (
        <section className="journey-container">
            <SideBar setJourneyStage={setJourneyStage} />
            <JourneyCard journeyStage={journeyStage}/>
            {/* <div className="journey-timeline-container"></div>
            <div className="journey-image-container"></div>
            <div className="journey-info-container"></div> */}
        </section>
    )
}