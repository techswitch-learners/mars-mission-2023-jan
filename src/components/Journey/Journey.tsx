import { useState } from "react";
import { SideBar } from "./SideBar";
import { JourneyCard } from "./JourneyCard";
import './Journey.scss'
import "./JourneyCard.scss"

export function Journey() {
    const [journeyStage ,setJourneyStage ] = useState(1);

    return (
        <section className="journey-container">
            <SideBar setJourneyStage={setJourneyStage} />
            <JourneyCard journeyStage={journeyStage}/>
        </section>
    )
}