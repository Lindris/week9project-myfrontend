import React, { useState } from "react";
import Button from "../Button";
import "./search.css";

function SearchBar() {
  // record input field value

  const [inputValue, setInputValue] = useState("Search");
  const [searchParameter, setSearchParameter] = useState("SearchParameter");

  function onChange(e) {
    setInputValue(e.target.value);
  }

  function handleClick() {
    setSearchParameter(inputValue);
  }

  console.log(searchParameter);

  //span puts search bar and button beside each other in one line
  return (
    <span>
      <input onChange={onChange} type="text" className="search" />
      <Button buttonText="Search" handleClick={() => handleClick(inputValue)} />
    </span>
  );
}

export default SearchBar;
