import "./Journey.scss";
import { journeyContent } from "./journeyContent";

export function JourneyCard(props:{text:string,imgUrl:string}){
    return (
        <section className="journey-card">
            <img className="journey-card-image" src=""></img>
            <article className="journey-card-text">{}</article>     
        </section>
    )
}