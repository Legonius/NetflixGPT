import React from "react";
import { useDispatch } from "react-redux";
import { changeLang } from "../slices/langSlice";

const LangSelect = () => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(changeLang(e.target.value.toLowerCase()));
  };
  return (
    <select
      onChange={(e) => handleChange(e)}
      defaultValue={"EN"}
      className="bg-transparent outline-none text-white border-2 opacity-45 text-lg"
    >
      <option>EN</option>
      <option>TH</option>
      <option>MM</option>
    </select>
  );
};

export default LangSelect;
