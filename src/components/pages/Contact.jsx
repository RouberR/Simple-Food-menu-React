import React from "react";
import "./contact.scss";
import bg from "../../assets/fooda.jpeg";
export const Contact = () => {
  return (
    <div className="contact">
      <div
        className="left-side"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>

      <div className="right-side">
        <h1>Contact Us</h1>
        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" type="text" placeholder="Enter your Name" />
          <label htmlFor="email">Email</label>
          <input name="email" type="email" placeholder="Enter your Email" />
          <label htmlFor="message">Message</label>
          <textarea name="message" placeholder="Enter your message" rows="7" />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};
