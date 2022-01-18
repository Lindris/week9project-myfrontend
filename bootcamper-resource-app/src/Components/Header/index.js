import React from "react";
import SearchBar from "../SearchBar";

//functional component Title
//displays webpage Title

//takes in title as props
//returns Title

function Header({ text }) {
  return (
    <div>
      <h1>{text}</h1>
      <SearchBar />
    </div>
  );
}
export default Header;
