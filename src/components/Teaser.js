import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { options } from "../utils/constants";

const Teaser = () => {
  const heroVideo = useSelector((state) => state.movies.heroVideo);
  const [trailer, setTrailer] = useState(null);

  useEffect(() => {
    if (heroVideo && !trailer) {
      getVideoDetail();
    }
  }, []);
  const getVideoDetail = async () => {
    if (heroVideo) {
      console.log(heroVideo.id);
      const fetchData = await fetch(
        `https://api.themoviedb.org/3/movie/${heroVideo.id}/videos?language=en-US`,
        options
      );
      const videoData = await fetchData.json();
      const filteredForTrailer = videoData.results.filter(
        (vd) => vd.type === "Trailer"
      );
      console.log("key:", filteredForTrailer[0].key);

      setTrailer(filteredForTrailer);
    }
  };

  if (!trailer) return;
  return (
    <div>
      {trailer[0]?.key && (
        <iframe
          className="w-full mt-[-2rem] aspect-video z-[-1]"
          src={`https://www.youtube.com/embed/${trailer[0].key}?autoplay=1&mute=1&loop=1&playlist=${trailer[0].key}`}
          title={trailer.id}
          frameBorder="0"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      )}
    </div>
  );
};

export default Teaser;
