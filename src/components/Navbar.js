import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { HiOutlineBell } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
import { NETFLIX_LOGO } from "../utils/constants";
import identifier from "../utils/language";
import LangSelect from "./LangSelect";
import GPTsearch from "./GPTsearch";

const Navbar = () => {
  const [dropDown, setDropDown] = useState(false);
  const user = useSelector((state) => state.user);
  const lang = useSelector((state) => state.lang.language);

  const handleSignOutBtn = () => {
    if (user.email) {
      const sO = signOut(auth)
        .then(() => {
          //can do logic if needed
        })
        .catch((error) => {
          console.log(error);
        });
      console.log(sO);
    }
  };
  return (
    <nav className="h-16 w-screen flex justify-between items-center bg-gradient-to-b from-black text-white px-8 select-none fixed z-10">
      <div className="flex gap-6 h-full">
        <Link to={"/"}>
          <img className="h-full" src={NETFLIX_LOGO} alt="logo" />
        </Link>
        <ul className="h-full flex items-center gap-6">
          <li>
            <NavLink to={"/browse"}>{identifier[lang].home}</NavLink>
          </li>
          <li>
            <NavLink to={"/browse"}>{identifier[lang].tvShows}</NavLink>
          </li>
          <li>
            <NavLink to={"/browse"}>{identifier[lang].movies}</NavLink>
          </li>
          <li>
            <NavLink to={"/browse"}>{identifier[lang].latest}</NavLink>
          </li>
          <li>
            <NavLink to={"/browse"}>{identifier[lang].myList}</NavLink>
          </li>
          <li>
            <NavLink to={"/browse"}>
              {identifier[lang].browseByLanguage}
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-3 text-2xl h-full relative">
        <GPTsearch />
        <IoSearch />
        <HiOutlineBell />

        <div className="h-full flex items-center ">
          <img
            className="h-[60%]"
            src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
            alt="logo"
          />
          <IoMdArrowDropdown
            className={`cursor-pointer ${
              dropDown ? "rotate-90" : ""
            } transition-all`}
            onClick={() => setDropDown(!dropDown)}
          />
        </div>
        {dropDown && (
          <ul className="text-base absolute bottom-[-5rem] right-0 bg-black border-[1px] p-2 min-w-fit">
            <li className="w-full cursor-pointer p-1 hover:bg-gray-700 ">
              {user.displayName}
            </li>
            <li
              onClick={handleSignOutBtn}
              className="w-full cursor-pointer p-1 hover:bg-gray-700 "
            >
              Sign Out
            </li>
          </ul>
        )}
        <LangSelect />
      </div>
    </nav>
  );
};

export default Navbar;
