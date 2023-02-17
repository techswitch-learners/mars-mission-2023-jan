
export function journeyContent(){
    const stage1="NASA has launched 5 Mars Rovers. The last one was in 2021! The most famous, Curiosity Mars rover was launched in 2011 and is still going. It has 17 cameras, 1 spectrometer and a built in chemical lab. Its purpose is to explore the climate and geology of Mars and see if life could have ever existed.(learn more)";
    const stage2="A car-sized rover named Curiosity was launched on November 26,2011.The rover came with a $2.5 billion price tag, a cost that's being spread over a number of years.Curosity has to travel 560 million km to reach Mars. Mars 2020 mission was designed to launch at a time when Earth and Mars are in optimal positions in their orbits.It then takes less launch energy to get to Mars compared to other imes when Earth and Mars are in different positions in their orbits around the sun.";
    const stage3="Curiosity took eight months and 10 days to reach Mars. Mars is the 4th planet in our Solar System, right after Earth. We have landed rovers on Mars and the Moon, but only probes to other planets." 
    const stage4="Once Curiosity reaches Mars' atmosphere it deploys a parachute to land safely. Mars' atmosphere is over 100 times thinner than Earth's.Do you know the average temperature on Mars is about -80 degrees Fahrenheit :) You can loose weight when on Mars, if you weighed 100lbs on Earth, on Mars you will only weigh 38lbs.A year on Mars is almost twice as long as a year on Earth. (learn more)" 
    const stage5="For Curiosity, landing on Mars meant slowing from about 13,000 MPH (21,000 KPH) to a full stop in just seven minutes. Curiosity landed on Mars in August, 2012. You can see the first picture it ever took on this page. Its mission has been extended indefinitely and Curiosity is happily roaming Mars to this day." 
    
    const contentArray: Array<any> = [
        {stage: "Stage 1", text: stage1, img: "../../../../images/journeyImages/1-curiosity-diagram.jpg"},
        {stage: "Stage 2", text: stage2, img: "../../../../images/journeyImages/2-curiosity-rocket-launch.jpg"},
        {stage: "Stage 3", text: stage3, img: "../../../../images/journeyImages/3-earth-mars-journey.jpg"},
        {stage: "Stage 4", text: stage4, img: "../../../../images/journeyImages/4-curiosity-landing.jpg"},
        {stage: "Stage 5", text: stage5, img: "../../../../images/journeyImages/5-curiosity-first-image.jpg"}
    ]
    return contentArray;
}
