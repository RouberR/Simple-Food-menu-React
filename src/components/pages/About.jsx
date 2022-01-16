import React from "react";
import bg from "../../assets/photo.jpeg";
import "./about.scss";
export const About = () => {
  return (
    <div className="about">
      <div
        className="about-top"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>
      <div className="about-bottom">
        <h1>About Us</h1>
        <p>
          The best food at low prices. European quality. Come to us. We work
          24/7. Address: Milky Way opposite the planet Venus. Hot meals. Cold
          drinks. Lack of staff. Take what you want! The best equipment! Waiting
          for you!
        </p>
      </div>
    </div>
  );
};
