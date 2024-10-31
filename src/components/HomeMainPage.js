import React from "react";
import { useSelector } from "react-redux";
import HeroSection from "./HeroSection";
import CardsBox from "./CardsBox";

const HomeMainPage = () => {
  const movieList = useSelector((state) => state.movies.nowPlayingMovies);

  return (
    <div>
      <div>{movieList && <HeroSection movie={movieList[1]} />}</div>
      <div className="-mt-32 relative z-50">
        {movieList && <CardsBox nowPlayingList={movieList} />}
      </div>
    </div>
  );
};

export default HomeMainPage;
