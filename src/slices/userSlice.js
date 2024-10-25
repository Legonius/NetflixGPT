import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userData",
  initialState: {},
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },
    removeUser: (state) => {
      state = {};
      return state;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
