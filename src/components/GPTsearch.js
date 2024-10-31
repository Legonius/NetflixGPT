import React from "react";
import { Link } from "react-router-dom";

const GPTsearch = () => {
  return (
    <Link
      to={"/browse/search"}
      className="border-2 font-semibold text-green-300 border-green-300 hover:text-black hover:bg-green-300 hover:cursor-pointer text-xl px-2 py-1 rounded"
    >
      GPTsearch
    </Link>
  );
};

export default GPTsearch;
