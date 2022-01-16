import React from "react";
import "./card.scss";
export const Card = ({ image, name, price }) => {
  return (
    <div className="card">
      <div style={{ backgroundImage: `url(${image})` }}/>
      <h1> {name} </h1>
      <p> ${price} </p>
    </div>
  );
};
