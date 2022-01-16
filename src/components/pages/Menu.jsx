import React from "react";
import { Data } from "../../Data.js";
import { Card } from "../Card/Card.jsx";
import "./menu.scss";
export const Menu = () => {
  console.log(Data);
  return (
    <div className="menu-container">
      <div className="menu-title">
        <h1>Menu</h1>
        <div className="menu-list">
          {Data.map((item, index) => (
            <Card
              name={item.name}
              price={item.price}
              image={item.image}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
