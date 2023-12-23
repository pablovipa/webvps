import React, { useState } from "react";

const videos = [
    "https://pablovipacontenedor.s3.amazonaws.com/videobaner.mp4",  
  "https://pablovipacontenedor.s3.amazonaws.com/Youthful+and+Dynamic+Backpack+Sale+1.mp4",
  
  // ...más videos
];

const VideoCarousel = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const nextVideo = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full h-96 relative">
      <button className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full" onClick={prevVideo}>
        Prev
      </button>
      <button className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full" onClick={nextVideo}>
        Next
      </button>
      <video className="w-full h-full object-cover" autoPlay muted loop controls>
        <source src={videos[currentVideoIndex]} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoCarousel;
