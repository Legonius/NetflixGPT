import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Browse = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    if (!user.email) {
      navigate("/");
    }
  }, [user]);
  return (
    <div className="bg-gray-500 min-h-screen w-screen">
      <Navbar />
    </div>
  );
};

export default Browse;
