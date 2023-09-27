import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "Select the food offered by different cusions from various options",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "You can get the food by click on order button",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "The least time to deliver the food to the customer at his location",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
        A customer will search for a favorite restaurant, 
        usually filtered via type of cuisine and choose from
         available items, and choose delivery or pick-up
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;