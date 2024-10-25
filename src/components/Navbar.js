import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { HiOutlineBell } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [dropDown, setDropDown] = useState(false);
  const user = useSelector((state) => state.user);

  const handleSignOutBtn = () => {
    const sO = signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
    console.log(sO);
  };
  return (
    <nav className="h-16 flex justify-between items-center bg-gradient-to-b from-black text-white px-8 select-none">
      <div className="flex gap-6 h-full">
        <img
          className="h-full"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
        <ul className="h-full flex items-center gap-6">
          <li>
            <NavLink to={"/browse"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/browse"}>TV Shows</NavLink>
          </li>
          <li>
            <NavLink to={"/browse"}>Movies</NavLink>
          </li>
          <li>
            <NavLink to={"/browse"}>Latest</NavLink>
          </li>
          <li>
            <NavLink to={"/browse"}>My List</NavLink>
          </li>
          <li>
            <NavLink to={"/browse"}>Browse by Languuages</NavLink>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-3 text-2xl h-full relative">
        <IoSearch />
        <HiOutlineBell />

        <div className="h-full flex items-center ">
          <img
            className="h-[60%]"
            src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
            alt="logo"
          />
          <IoMdArrowDropdown
            className="cursor-pointer"
            onClick={() => setDropDown(!dropDown)}
          />
        </div>
        {dropDown && (
          <ul className="text-base absolute bottom-[-5rem] right-0 bg-black border-[1px] p-2 min-w-full">
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
      </div>
    </nav>
  );
};

export default Navbar;
