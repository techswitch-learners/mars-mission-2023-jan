import "./Home.scss";
import React, { useState, useEffect } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { Journey } from "../Journey/Journey";
import { Link } from "react-router-dom";
import image1 from "../../../images/homeImages/1-CuriosityRoverWithCameras.jpg";
import image2 from "../../../images/homeImages/2-PreservenceRover.jpg";
import image3 from "../../../images/homeImages/3-SpiritRover.jpg";
import image4 from "../../../images/homeImages/4-OppurtunityRover.jpg";
import image5 from "../../../images/homeImages/5-OppurtunityRoverwithCameras.jpg";
import image6 from "../../../images/homeImages/6-CuriosityRover.jpg";
import image7 from "../../../images/homeImages/7-Mars Olympus Mons.jpg";
import image8 from "../../../images/homeImages/8-mars_approach_from_space.jpeg";
import image9 from "../../../images/homeImages/9-PIA24309_-_rover_at_Jezero_-_from_animation.png";
import image10 from "../../../images/homeImages/10-PlanetMars_1.jpg";

interface homeImage {
  imageUrl: string;
  imageInfo: string;
}

export const Home: React.FunctionComponent = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  const homeImages: homeImage[] = [
    { imageUrl: image1, imageInfo: "Excluding its hazcams and navcams (but including the Mastcam), Curiosity carries 10 instruments to explore the martian environment. The rover's robotic arm also sports a drill and a scoop." },
    { imageUrl: image2, imageInfo: " Perseverance seeks signs of possible past microbial life in those habitable environments, particularly in special rocks known to preserve signs of life over time." },
    { imageUrl: image3, imageInfo: "Spirit uncovered strong evidence that Mars was once much wetter than it is now." },
    { imageUrl: image4, imageInfo: "Opportunity and its twin Spirit were tasked with studying sites on Mars where conditions may once have been favorable for life." },
    { imageUrl: image5, imageInfo: "The Rovers' instruments are state-of-the-art tools for acquiring information about Martian geology, atmosphere, environmental conditions, and potential biosignatures." },
    { imageUrl: image6, imageInfo: " Curiosity has demonstrated the ability to land a very large, heavy rover to the surface of Mars and to land more precisely in a 12.4-mile (20-kilometer) landing area" },
    { imageUrl: image7, imageInfo: "Olympus Mons, Mars' highest mountain, stands 25 km tall - two and a half times the height of Mount Everest." },
    { imageUrl: image8, imageInfo: "NASA engineers prepared intensively for over 45 days to guide Curiosity Rover through Mars' atmosphere and land successfully. " },
    { imageUrl: image9, imageInfo: "The Mars Perserverance rover touched down in the 45km wide Jezero Crater. The crater is thought to have once been filled with water - hence its name, which means 'lake' in Czech." },
    { imageUrl: image10, imageInfo: "Civilisations throughout history have known Mars for its reddish colour, reminiscent of blood. The name Mars comes from the Ancient Roman God of War." }
  ];

  function scrollNextImage() {
    selectedImage < 9 ?
      setSelectedImage(selectedImage + 1) :
      setSelectedImage(0);
  }

  useEffect(() => {
    const intervalId = setInterval(
      () => {
        scrollNextImage()
      }, 3000);
    return () => clearInterval(intervalId);
  }, [selectedImage])

  return (
    <main>
      <h1 className="main-header">Mars Exploration</h1>
      <p className="main-welcome-message">Start your 150 million km journey! </p>
      <section className="image-info-section">
        <article className="main-image">
          <img className="main-image-tag" src={homeImages[selectedImage].imageUrl}></img>
        </article>
        <article className="main-image-description">
          <p>{homeImages[selectedImage].imageInfo}</p>
        </article>
        <article className="left-right-home-buttons">
          <button className="previous-left-button"
            onClick={() => { selectedImage > 0 ? setSelectedImage(selectedImage - 1) : setSelectedImage(0) }}>
            <FaArrowCircleLeft className="button-icon" />
          </button>
          <button className="next-right-button"
            onClick={() => { scrollNextImage() }}>
            <FaArrowCircleRight
              className="button-icon" />
          </button>
        </article>
        <Link to='/journey'
          className="journey-page-button">
          Start your Journey!
        </Link>
      </section >
    </main>
  );
};
