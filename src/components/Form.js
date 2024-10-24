import React, { useState } from "react";

const Form = () => {
  const [signup, setSignup] = useState(false);
  return (
    <div className="flex justify-center items-center text-white">
      <div className="z-10 bg-black/80 p-8">
        <h2 className="text-2xl font-semibold mb-2">
          {signup ? "Sign Up" : "Sign In"}
        </h2>
        <form className="  flex flex-col gap-2 w-60">
          {signup && <label for="name">Name</label>}
          {signup && (
            <input
              className=" mb-2 outline-none px-2 py-1 bg-gray-600 placeholder:text-slate-300"
              type="text"
              id="name"
              name="name"
              placeholder="Full Name"
            />
          )}
          <label for="email">Email</label>
          <input
            className=" mb-2 outline-none px-2 py-1 bg-gray-600 placeholder:text-slate-300"
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
          />
          <label for="password">Password</label>
          <input
            className=" mb-2 outline-none px-2 py-1 bg-gray-600 placeholder:text-slate-300"
            type="password"
            id="password"
            name="password"
            placeholder="Password"
          />
          <button className="mt-2 bg-red-800 py-2">
            {signup ? "Sign up" : "Sign In"}
          </button>

          <p className="text-sm">
            {signup ? "Already have account? " : "Don't have account? "}
            <span
              className="text-blue-400 cursor-pointer"
              onClick={() => setSignup(!signup)}
            >
              {signup ? "Sign in here" : "Create Account"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Form;
