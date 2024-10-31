import React from "react";
import { backgroundImage } from "../utils/constants";
import SearchBox from "../components/SearchBox";

const Search = () => {
  return (
    <div className="h-screen w-screen relative">
      <img
        className="w-full h-full opacity-50"
        src={backgroundImage}
        alt="bg"
      />
      <SearchBox />
    </div>
  );
};

export default Search;
