import React from "react";
import { useSelector } from "react-redux";

const Teaser = () => {
  const heroVideo = useSelector((state) => state.movies.heroVideo);
  if (!heroVideo) return;
  return (
    <div>
      <iframe
        className="w-full mt-[-2rem] aspect-video z-[-1]"
        src={`https://www.youtube.com/embed/${heroVideo[0].key}?autoplay=1&mute=1&loop=1&playlist=${heroVideo[0].key}`}
        title={heroVideo.id}
        frameBorder="0"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default Teaser;
