// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMHNnEmm_I9DYVa3VbvFHKxoC_n5kl_wM",
  authDomain: "netflixgpt-5e8ec.firebaseapp.com",
  projectId: "netflixgpt-5e8ec",
  storageBucket: "netflixgpt-5e8ec.appspot.com",
  messagingSenderId: "730007365733",
  appId: "1:730007365733:web:d2f8c180766f9e74f03e8c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
export const auth = getAuth();
