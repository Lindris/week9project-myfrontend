import React, { useState, useEffect } from "react";
import VideoViewer from "./videoComponent";

function VideoSection() {
   // creating (initially empty) array to store videos fetched from database
   const [video, setVideo] = useState([]);

   // fetching/getting data from database and storing it in the empty array "video"
   useEffect(() => {
      async function fetchVideos() {
         const response = await fetch(
            "https://soc-resources.herokuapp.com/links"
         );
         const data = await response.json();
         setVideo(data.payload);
      }
      fetchVideos();
   }, []);

   console.log("this is my data", video);

   // Create/Display a video component for each video fetched in array "video"
   return (
      <div className="videoSection">
         {video.map(function ({ id, url, title }) {
            // access object keys to display on page
            return (
               <div key={id}>
                  <VideoViewer url={url} title={title} />{" "}
               </div>
            );
         })}
      </div>
   );
}

export default VideoSection;
