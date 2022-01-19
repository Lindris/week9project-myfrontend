import React from "react";

function VideoViewer({ url, title }) {
   return (
      <div>
         <h3>{title}</h3>
         <iframe
            src={url}
            title={title}
            width="320"
            height="240"
            frameborder="0"
            controls
            allow="fullscreen"
         >
            Your browser does not support the video tag.
         </iframe>
      </div>
   );
}

export default VideoViewer;


