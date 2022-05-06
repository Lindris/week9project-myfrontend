import React, { useState } from "react";

function SearchBar({ onSearch }) {
  // record input field value, changed parameter to an {object} - this made the searchbar filter work! Now need to go to definition of onSearch function and tell it to update the UI - this is in the parent Video component

  const [inputValue, setInputValue] = useState("Search");

  function onChange(e) {
    setInputValue(e.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // setSearchParameter(inputValue);
    //to prevent browser automatically refreshing everytime form is submitted, need to call a preventDefalut function - by adding event in bracket and line below
    onSearch(inputValue);
  }

  // console.log(searchParameter);

  //span puts search bar and button beside each other in one line.
  //But better to use form element then browser is aware of what that bit of page is so screen readers and accessbility things know to read this - can put it outside the span. Put click handler inside the form element. Now it's no longer necessary for button to have handleClick. Renamed this handleSubmit
  //the onsubmit attribute of the form handles all the different ways you can submit a form - we've used enter key or search button
  //tell browser search button is a submit button with the button type attribute.
  //The default value for the type attribute for a button is submit, so may not need to add it to button, is just good practice to make it clear.
  return (
    <form onSubmit={handleSubmit}>
      <span>
        <input className="SearchBar" onChange={onChange} type="text" />
        <button className="Button" type="submit">
          Search
        </button>
      </span>
    </form>
  );
}

export default SearchBar;
