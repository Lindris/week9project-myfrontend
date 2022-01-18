import React from 'react';

//functional component Button
//takes in buttonText and handleClick function - using props { }

//returns button component

function Button({buttonText, handleClick}) {
return (<button onClick={handleClick}>{buttonText}</button>);
}

export default Button;