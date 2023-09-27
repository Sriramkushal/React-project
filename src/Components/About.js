import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Food Is An Important Part Of A Balanced Diet
        </h1>
        <p className="primary-text">
        It provides energy to perform various physical activities performed by muscles. 
        It helps with complete body growth. It helps to repair and replace damaged parts of the body. 
        It protects us from infections and diseases.
        </p>
        <p className="primary-text">
        Food is the substance we eat every day for energy and strength. 
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          
        </div>
      </div>
    </div>
  );
};

export default About;
