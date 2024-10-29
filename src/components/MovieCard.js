import React from "react";
import { IMAGE_CDN } from "../utils/constants";

const MovieCard = ({ movie }) => {
  const { backdrop_path } = movie;
  return (
    <div className="w-64 h-auto flex-shrink-0 ">
      <img
        className="w-full hover:scale-105"
        src={IMAGE_CDN + backdrop_path}
        alt="poster"
      />
    </div>
  );
};

export default MovieCard;
