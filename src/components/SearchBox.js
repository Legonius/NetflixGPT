import React from "react";

const SearchBox = () => {
  return (
    <form className="h-12 w-full sm:w-[70%] md:w-[50%] grid grid-cols-12 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10  text-white">
      <input
        className="h-full col-span-10 px-3 outline-none bg-black/40 border-2 border-r-0 text-lg"
        type="text"
        placeholder="Title, People, Genres"
      />
      <button className="col-span-2 bg-red-700 font-extrabold">Search</button>
    </form>
  );
};

export default SearchBox;
