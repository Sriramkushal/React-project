import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
        A customer will search for a favorite restaurant, 
        usually filtered via type of cuisine and choose from
         available items, and choose delivery or pick-up
        </p>
      </div>
      <div className="testimonial-section-bottom">
      <img src={ProfilePic} alt="" />
        <p>
          we are delivering the excellent food to the customers 
          with the help of the best cheif's.We  provide plastic  free 
          packting which helps to hold the taste and fragance.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Kushal's</h2>
        <h6>       --the place of flavours</h6>
      </div>
    </div>
  );
};

export default Testimonial;
