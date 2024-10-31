import { createSlice } from "@reduxjs/toolkit";

const lagnSlice = createSlice({
  name: "lang",
  initialState: {
    language: "en",
  },
  reducers: {
    changeLang: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { changeLang } = lagnSlice.actions;
export default lagnSlice.reducer;
