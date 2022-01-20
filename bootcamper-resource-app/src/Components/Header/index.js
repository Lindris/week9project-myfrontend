import React from "react";
import SearchBar from "../SearchBar";

//functional component Title
//displays webpage Title

//takes in title as props
//returns Title

function Header({ text, subtitle }) {
  return (
    <div>
      <h1>{text}</h1>
      <h3>{subtitle}</h3>
      <SearchBar />
    </div>
  );
}
export default Header;
