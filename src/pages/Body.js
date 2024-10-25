import React, { useEffect } from "react";
import Form from "../components/Form";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../slices/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { NETFLIX_LOGO } from "../utils/constants";

const Body = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        const displayName = user.displayName;
        const email = user.email;

        dispatch(addUser({ uid, displayName, email }));
        navigate("/browse");
      } else {
        console.log("out going");
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Cleanup: unsubscribe when component unmounts
    // return () => unsubscribe(); // I'm not clean up bcos this component will be unmout after login
  }, []);
  return (
    <div className="relative w-screen">
      <img
        className="h-full w-full absolute top-0 left-0 z-[-10]"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/74d734ca-0eab-4cd9-871f-bca01823d872/web/MM-en-20241021-TRIFECTA-perspective_501f7616-5f20-4d49-b4e6-ef7dcfcc2cf4_large.jpg"
        alt="bacground-image"
      />
      <div className="h-screen w-full flex flex-col bg-black/50 px-20">
        <div className="z-10 w-full ">
          <img className="h-24" src={NETFLIX_LOGO} alt="logo" />
        </div>
        <Form />
      </div>
    </div>
  );
};

export default Body;
