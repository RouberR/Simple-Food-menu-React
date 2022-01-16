import React from "react";
import "./navbar.scss";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="leftSide">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};
