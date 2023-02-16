import "./Journey.scss";
import { journeyContent } from "./journeyContent";

export function JourneyCard(props:{journeyStage:number}){
    
    const content = journeyContent()

    return (
        <section className="journey-card">
            {/* will change src and text in another branch */}
            <img className="journey-card-image" src={content[props.journeyStage-1].img}></img>

            {/* need a h4 tag to put stage title here */}
            {/* <h4 className="journey-card-text">{content[props.journeyStage-1].stage}</h4>  */}
            <p className="journey-card-text">{content[props.journeyStage-1].text}</p>     
        </section>
    )
}