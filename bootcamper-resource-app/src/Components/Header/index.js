import React from "react";
import SearchBar from "../SearchBar";
import Logo from "../Logo";
import "./header.css";

//functional component Title
//displays webpage Title

//takes in title as props
//returns Title

function Header({ text, subtitle }) {
  return (
    <div className="Header">
      <h1>{text}</h1>
      <Logo />
      <h3>{subtitle}</h3>
      <SearchBar />
    </div>
  );
}
export default Header;
