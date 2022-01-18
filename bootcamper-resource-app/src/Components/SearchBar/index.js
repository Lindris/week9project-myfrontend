import React from "react";
import Button from "../Button";

function SearchBar() {
  //span puts search bar and button beside each other in one line
  return (
    <span>
      <input type="text" />
      <Button buttonText="Search" />
    </span>
  );
}

export default SearchBar;