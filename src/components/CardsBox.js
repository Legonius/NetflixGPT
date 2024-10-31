import React, { useEffect } from "react";
import CardsScroll from "./CardsScroll";
import { addPopularList, addTopRated } from "../slices/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import { options } from "../utils/constants";
import identifier from "../utils/language";

const CardsBox = ({ nowPlayingList }) => {
  const dispatch = useDispatch();
  const popularList = useSelector((state) => state.movies.popularList);
  const topRatedList = useSelector((state) => state.movies.topRatedList);
  const lang = useSelector((state) => state.lang.language);

  const getData = async () => {
    const getfetch = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    );
    const data = await getfetch.json();
    const result = data.results.reverse();
    dispatch(addPopularList(result));
    if (data) {
      const fetchTopRated = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        options
      );
      const ratedData = await fetchTopRated.json();
      dispatch(addTopRated(ratedData.results));
    }
  };
  useEffect(() => {
    if (!popularList) {
      getData();
    }
  }, []);

  return (
    <section className="w-full flex flex-col gap-14">
      <CardsScroll title={identifier[lang].nowPlaying} list={nowPlayingList} />
      {popularList && <CardsScroll title={"Popular"} list={popularList} />}
      {topRatedList && (
        <CardsScroll title={"Top Rated Movies"} list={topRatedList} />
      )}
    </section>
  );
};

export default CardsBox;
