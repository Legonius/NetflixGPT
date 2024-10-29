import React from "react";
import { FaPlay } from "react-icons/fa";
import { BsInfoCircle } from "react-icons/bs";

const Title = ({ movie }) => {
  if (!movie) return;
  return (
    <div className="absolute flex items-center pl-14 top-0 left-0 h-full w-full bg-slate-950/10 select-none">
      <div className="mt-20 text-white drop-shadow-sm">
        <h1 className="text-3xl font-bold ">{movie.title}</h1>
        <p className="w-5/12 mt-5 text-shadow">{movie.overview}</p>
        <div className="mt-4 flex items-center gap-3">
          <button className="flex gap-2 items-center px-8 py-2 bg-white rounded text-black hover:bg-white/70 font-semibold text-xl">
            <FaPlay /> Play
          </button>
          <button className="flex gap-2 items-center px-8 py-2 bg-black/20 rounded hover:bg-black/40 font-semibold text-xl ">
            <BsInfoCircle /> More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Title;
