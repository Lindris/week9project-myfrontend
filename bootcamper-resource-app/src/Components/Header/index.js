import React from "react";

//functional component Title
//displays webpage Title

//takes in title as props
//returns Title

function Header({ text, subtitle }) {
  return (
    <span>
      <h1>{text}</h1>
      <h3>{subtitle}</h3>
      
    </span>
  );
}
export default Header;
