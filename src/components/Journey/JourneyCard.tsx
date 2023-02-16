import "./Journey.scss";
import { journeyContent } from "./journeyContent";

export function JourneyCard(){
    const content = journeyContent()

    return (
        <section className="journey-card">
            {/* will change src and text in another branch */}
            <img className="journey-card-image" src={content[0].img}></img>
            <article className="journey-card-text">{content[0].text}</article>     
        </section>
    )
}