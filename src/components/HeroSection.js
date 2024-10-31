import React, { useEffect } from "react";
import Teaser from "./Teaser";
import Title from "./Title";

const HeroSection = ({ movie }) => {
  if (!movie) return;
  return (
    <div className="w-screen overflow-x-hidden">
      <Teaser />
      <Title movie={movie} />
    </div>
  );
};

export default HeroSection;
