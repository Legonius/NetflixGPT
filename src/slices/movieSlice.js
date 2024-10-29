import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    heroVideo: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addHeroVideo: (state, action) => {
      state.heroVideo = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addHeroVideo } = movieSlice.actions;
export default movieSlice.reducer;
