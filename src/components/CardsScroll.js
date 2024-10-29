import React from "react";
import MovieCard from "./MovieCard";

const CardsScroll = ({ title, list }) => {
  return (
    <div className="hiding-scroll w-full text-white text-2xl font-semibold pl-12  ">
      <h2>{title}</h2>
      <div className="hiding-scroll w-full flex flex-row gap-3 mt-4 overflow-x-scroll overflow-y-hidden">
        {list.map((mov) => (
          <MovieCard key={mov.id} movie={mov} />
        ))}
      </div>
    </div>
  );
};

export default CardsScroll;
