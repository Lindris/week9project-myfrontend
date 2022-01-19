import "./App.css";

import Header from "../Header";
import VideoViewer from "../Video";

function App() {
   //render the webpage Header - defined in Header/index.js
   return (
      <div className="App">
         <Header text="Bootcamp Resources App" />
         <VideoViewer
            url="https://www.youtube.com/embed/JPGxjjpqIWM"
            title="titleSample"
         />
      </div>
   );
}

export default App;
