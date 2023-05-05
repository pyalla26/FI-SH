import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      console.log(action.payload);
      // console.log("Success");
      // return action.payload;
      state.user = action.payload;
    },
    logout: (state) => {
      // console.log(initialState);
      // console.log("Failure");
      // return null;
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => {
  return state.user.user;
};

export default userSlice.reducer;
