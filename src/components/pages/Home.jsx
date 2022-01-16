import React from "react";
import { Link } from "react-router-dom";
import "./home.scss";
export const Home = () => {
  return (
    <div className="home">
      <div className="headerContainer">
        <h1>Food Corner</h1>
        <p>The best dishes from around the world</p>
        <Link to="/"><button>Order Now</button></Link>
      </div>
    </div>
  );
};
