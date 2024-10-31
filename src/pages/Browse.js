import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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
    try {
      const fetching = await fetch(TMDB_URL, options);
      const data = await fetching.json();
      if (data.results) {
        dispatch(addNowPlayingMovies(data.results));
        dispatch(addHeroVideo(data.results[0]));
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (!movieList) {
      getData();
    }
  }, []);

  return (
    <div className="bg-black min-h-screen w-screen relative overflow-hidden">
      <Navbar />
      <Outlet />
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
