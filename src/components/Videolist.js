import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video) => {
    return (
      <div className="item" key={video.id.videoId}>
        <VideoItem video={video} onVideoSelect={onVideoSelect} />
      </div>
    );
  });
  return (
    <div>
      <div className="ui relaxed divided list">{renderedList}</div>
    </div>
  );
};

export default VideoList;
