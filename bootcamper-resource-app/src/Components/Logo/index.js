import React from "react";
import logo from "./logo.png";
import "./logo.css";
//functional component Logo
//displays webpage Logo

//takes in logo as props
//returns Logo

function Logo() {
   return <img src={logo} alt="logo" className="logo" />;
}
export default Logo;
