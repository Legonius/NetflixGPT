import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import HeroSection from "../components/HeroSection";
import { options, TMDB_URL } from "../utils/constants";
import { addHeroVideo, addNowPlayingMovies } from "../slices/movieSlice";

const Browse = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const movieList = useSelector((state) => state.movies.nowPlayingMovies);

  useEffect(() => {
    if (!user.email) {
      navigate("/");
    }
  }, [user]);

  const getData = async () => {
    const fetching = await fetch(TMDB_URL, options);
    const data = await fetching.json();
    if (data.results) {
      dispatch(addNowPlayingMovies(data.results));
      if (data.results[0]) {
        const fetchData = await fetch(
          `https://api.themoviedb.org/3/movie/${data.results[0].id}/videos?language=en-US`,
          options
        );
        const videoData = await fetchData.json();
        const filteredForTrailer = videoData.results.filter(
          (vd) => vd.type === "Trailer"
        );
        dispatch(addHeroVideo(filteredForTrailer));
      }
    }
  };
  useEffect(() => {
    if (!movieList) {
      getData();
    }
  }, []);

  return (
    <div className="bg-gray-500 min-h-screen w-screen relative">
      <Navbar />
      {movieList && <HeroSection movie={movieList[0]} />}
    </div>
  );
};
/* {
      * HeroSection
        - Teaser
        - Title
      * GenereSuggest
        -sugestions
      } */
export default Browse;
