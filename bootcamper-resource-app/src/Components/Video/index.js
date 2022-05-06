import React, { useState, useEffect } from "react";
import VideoViewer from "./videoComponent";
import SearchBar from "../SearchBar";
function VideoSection() {
  // creating (initially empty) array to store videos fetched from database
  //create variable
  const [allVideos, setAllVideos] = useState([]);
  //create new variable for videos that are filtered by search bar, without overriding the all video variable ( so you don't lose other videos)
  const [filteredVideos, setFilteredVideos] = useState([]);
  //this useState gives filteredVideos an intial empty array. the use effect hook  when page loads, runs and gets the payload for allVideos when nothing is searched for, or filtered videos when

  // import Searchbar and insert <SearchBar/> above videos
  //function to filter videos by string input in searchbar. give variable a name in ()
  //filter video array to fetch only videos needed

  function filterVideos(searchTerm) {
    //update this function to update UI with filtered videos once searched for in search bar
    //   going through each item in array and deciding if it returns a true keep in or else discard it
    //create variable called filteredVideso that filters through the video titles and selects video where title includes the searchTerm input by user
    const allVideosFiltered = allVideos.filter((selectedVideo) => {
      
      if (selectedVideo.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        return true;
        // help from: https://stackoverflow.com/questions/44469548/es6-filter-data-with-case-insensitive-termA perhaps easier and safer approach is to convert the strings to lowercase and compare:

        // A shorter way is:
        // const allVideosFiltered = allVideos.filter((selectedVideo) => selectedVideo.title.toLowerCase().includes(searchTerm.toLowerCase()))

// data.filter(x => x.title.toLowerCase().includes(term.toLowerCase()))
//         if(selectedVideo.toLowerCase() === searchTerm.toLowerCase()){
//           return true; //names are the same
//       }
      
    } 
    return false;
  });
    setFilteredVideos(allVideosFiltered);
    //this sets the value of filteredVideos to the value of allVideosFiltered
  }

  // fetching/getting data from database and storing it in the empty array "video"
  useEffect(() => {
    async function fetchVideos() {
      const response = await fetch("https://soc-resources.herokuapp.com/links");
      const data = await response.json();
      setAllVideos(data.payload); //for initial load this line doesn't get used, as AllVideos is not told to render in the UI. The UI can only use the filteredVideos array and never sees AllVideos (the UI is the search bar and the videos beneath)
      // set video variable to contain data (payload) coming back from back end. So will available when useEffect  runs.
      setFilteredVideos(data.payload);
      //this gives filtered videos a value, tells it that filteredVideos to equal all videos on initial load, even when looking at UI for filteredVideos. On initial load, AllVideos and FilteredVideos have the same value and 'set' gives the variables the values - they get the same thing on initial load, but once searchbar is used, AllVideos stays as a list of all the videos, and FilteredVideos now gets only the videos searched for. anything inside useEffect only runs once, unless given dependencies. When search the FilterVideos function runs, but the AllVideos variable remains the same.
    }
    fetchVideos();
  }, []);

  console.log("this is my data", allVideos);

  // Create/Display a video component for each video fetched in array "video"
  return (
    <div className="videoSection">
      {/* pass the filterVideos function into the searchBar so it can be used. Also in SearchBar component update it to be able to use the function */}
      <SearchBar onSearch={filterVideos} />
      {filteredVideos.map(function ({ id, url, title }) {
        // access object keys to display on page
        //to access the filtered videos here, you can't use the variable allVideosFiltered because it is outside the scope of this function. Instead use the variable filteredVideos because this is defined in the function VideoSection which this return in line 43 to 62 is still part of that function.

        //when this component is rendered it puts everything from line 46 onwards in the browser - browser looks at FilteredVideos array and creates a div with video and title and puts on page on search and on initial load

        return (
          <div key={id}>
            <VideoViewer url={url} title={title} />
          </div>
        );
      })}
    </div>
  );
}

export default VideoSection;

//todo:  set filteredVideos value on initial load to show all videos before search is done. Set in same way as the allVideos variable see line 34
