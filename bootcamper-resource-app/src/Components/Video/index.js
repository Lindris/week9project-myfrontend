import React, { useState, useEffect } from "react";
import VideoViewer from "./videoComponent";

// Create/Display a video component for each video

function VideoSection() {
   const [video, setVideo] = useState([]);

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

   return (
      <div className="videoSection">
         {video.map(function ({ url, title, id }) {
            //console.log(url);
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
