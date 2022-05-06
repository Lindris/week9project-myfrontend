import "./App.css";
import Logo from "../Logo";
// import Background from "../background.jpg";

import Header from "../Header";
import VideoSection from "../Video";

function App() {
  //render the webpage Header - defined in Header/index.js
  return (
    <div className="App">
     
    <header>
    <Logo />
    {/* <Background /> */}
      {/* <h1>Untied</h1>
      <span>Coding Boost for Bootcampers</span> */}
    </header>
      {/* <Header text="Untied" subtitle="Coding Boost for Bootcampers" /> */}
     
      <VideoSection />
      
    </div>
    
  );
}

export default App;
