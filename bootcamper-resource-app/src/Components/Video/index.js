import React from "react";
import links from "./dummyData";
import VideoViewer from "./videoComponent";

// Create/Display a video component for each video

function VideoSection() {
   return (
      <div className="videoSection">
         {links.map(function ({ url, title, id }) {
            console.log(url);
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
