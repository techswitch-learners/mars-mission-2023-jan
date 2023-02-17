import "./JourneyCard.scss";
import { journeyContent } from "./journeyContent";

export function JourneyCard(props:{journeyStage:number}){
    
    const content = journeyContent()

    return (
        <section className="journey-card">
            {/* will change src and text in another branch */}
            <img className="journey-card-image" src={content[props.journeyStage-1].img}></img>

            <div className="journey-card-text">
                <h2 className="journey-card-title">{content[props.journeyStage-1].stage}</h2> 
                <p className="journey-card-info">{content[props.journeyStage-1].text}</p> 
            </div>    
        </section>
    )
}