import "./App.css";
import Logo from "../Logo";

import Header from "../Header";
import VideoSection from "../Video";

function App() {
  //render the webpage Header - defined in Header/index.js
  return (
    <div className="App">
      <Header text="Untied" subtitle="Coding Boost for Bootcampers" />
      <Logo />
      <VideoSection />
    </div>
  );
}

export default App;
