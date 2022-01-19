import "./App.css";

import Header from "../Header";
import VideoSection from "../Video";

function App() {
   //render the webpage Header - defined in Header/index.js
   return (
      <div className="App">
         <Header text="Bootcamp Resources App" />
         <VideoSection />
      </div>
   );
}

export default App;

