import React, { useState, useEffect } from "react";
import links from "./dummyData";
import VideoViewer from "./videoComponent";

// Create/Display a video component for each video

function VideoSection() {
   const [video, setVideo] = useState();

   useEffect(() => {
      async function fetchVideos() {
         const response = await fetch("http://localhost:5000/links/?topic=CSS");
         const data = await response.json();
         setVideo(data);
      }
      fetchVideos();
   }, []);

   console.log("this is my data", video);

   return (
      <div className="videoSection">
         {links.map(function ({ url, title, id }) {
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
