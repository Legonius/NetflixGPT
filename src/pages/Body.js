import React from "react";
import Header from "../components/Header";
import Form from "../components/Form";

const Body = () => {
  return (
    <div className="relative">
      <img
        className="h-full w-full absolute top-0 left-0 z-[-10]"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/74d734ca-0eab-4cd9-871f-bca01823d872/web/MM-en-20241021-TRIFECTA-perspective_501f7616-5f20-4d49-b4e6-ef7dcfcc2cf4_large.jpg"
        alt="bacground-image"
      />
      <div className="h-screen w-screen ">
        <Header />
        <Form />
      </div>
    </div>
  );
};

export default Body;
