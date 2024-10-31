import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import movieSlice from "./slices/movieSlice";
import langSlice from "./slices/langSlice";

const store = configureStore({
  reducer: { user: userSlice, movies: movieSlice, lang: langSlice },
});

export default store;
