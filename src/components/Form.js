import React, { useRef, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Form = () => {
  const [signup, setSignup] = useState(false);
  const [signError, setSignError] = useState(null);
  const name = useRef("");
  const email = useRef("");
  const password = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const sign = checkValidate(
      name.current?.value,
      email.current.value,
      password.current.value
    );
    setSignError(sign);
    if (sign) return;

    if (signup) {
      console.log("sign up...");
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
        })
        .then(() => {
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL: "",
          }).catch((error) => {
            console.log("error: ", error);
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, "+", errorMessage);
          setSignError("Invalid Credentials");

          // ..
        });
    } else {
      console.log("sign in...");
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, "+", errorMessage);
          setSignError("Invalid Credentials");
          // ..
        });
    }
  };
  const checkValidate = (name, email, password) => {
    if (signup) {
      // const isNameValid = /^[A-Za-z]+([\ A-Za-z]+)*/.test(name);
      const isNameValid = /^[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$/.test(name);

      if (!isNameValid) {
        return "Name is invalid.";
      }
    }
    const isEmailValid =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    if (!isEmailValid) return "Email is invalid";

    const isPasswordValid =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        password
      );
    if (!isPasswordValid) {
      if (signup) {
        return "Password is not Strong";
      }
      return "Password is incorrect";
    }

    return null;
  };

  return (
    <div className="flex flex-1 justify-center items-center text-white">
      <div className="z-10 bg-black/75 p-6 md:p-12 min-w-60 max-w-[28rem] w-full mb-20">
        <h2 className="text-2xl font-semibold mb-4">
          {signup ? "Sign Up" : "Sign In"}
        </h2>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="  flex flex-col gap-2 "
        >
          {signup && (
            <input
              className=" mb-2 outline-white/50 p-3 bg-gray-600/20 placeholder:text-slate-100/80 border border-gray-50/50 rounded"
              type="text"
              name="name"
              placeholder="Full Name"
              required
              ref={name}
            />
          )}
          <input
            className=" mb-2 outline-white/50 p-3 bg-gray-600/20 placeholder:text-slate-100/80 border border-gray-50/50 rounded"
            type="email"
            name="email"
            placeholder="Email Address"
            required
            ref={email}
          />
          <input
            className=" mb-2 outline-white/50 p-3 bg-gray-600/20 placeholder:text-slate-100/80 border border-gray-50/50 rounded"
            type="password"
            name="password"
            placeholder="Password"
            required
            ref={password}
          />
          <p className="text-sm font-semibold mt-2 text-red-600">{signError}</p>
          <button className="mt-2 bg-red-600 font-bold py-2 rounded">
            {signup ? "Sign up" : "Sign In"}
          </button>
        </form>
        <p className="text-sm mt-4">
          {signup ? "Already have account? " : "Don't have account? "}
          <span
            className="text-blue-400 cursor-pointer"
            onClick={() => setSignup(!signup)}
          >
            {signup ? "Sign in here" : "Create Account"}
          </span>
        </p>
        <p className="text-slate-500 text-sm mt-4">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          <span className="text-blue-400 cursor-pointer"> Learn more.</span>
        </p>
      </div>
    </div>
  );
};

export default Form;
