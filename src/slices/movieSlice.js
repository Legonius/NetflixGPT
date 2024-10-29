import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    heroVideo: null,
    popularList: null,
    topRatedList: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addHeroVideo: (state, action) => {
      state.heroVideo = action.payload;
    },
    addPopularList: (state, action) => {
      state.popularList = action.payload;
    },
    addTopRated: (state, action) => {
      state.topRatedList = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addHeroVideo,
  addPopularList,
  addTopRated,
} = movieSlice.actions;
export default movieSlice.reducer;
