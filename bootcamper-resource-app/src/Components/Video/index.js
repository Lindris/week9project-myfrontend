import React from "react";

function VideoViewer({ url, title }) {
  return (
    <div>
      <iframe src={url} title={title} width="320" height="240" controls>
        Your browser does not support the video tag.
      </iframe>
    </div>
  );
}

export default VideoViewer;
