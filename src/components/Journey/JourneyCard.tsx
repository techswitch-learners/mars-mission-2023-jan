import "./Journey.scss";
import { journeyContent } from "./journeyContent";

export function JourneyCard(props:{journeyStage:number}){
    
    const content = journeyContent()

    return (
        <section className="journey-card">
            {/* will change src and text in another branch */}
            <img className="journey-card-image" src={content[props.journeyStage-1].img}></img>
            <article className="journey-card-text">{content[props.journeyStage-1].text}</article>     
        </section>
    )
}