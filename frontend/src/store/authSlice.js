import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    error: null,
  },
  reducers: {
    signupSuccess: (state, action) => {
      state.user = action.payload;
      state.error = null;
    },
    signupFailure: (state, action) => {
      state.error = action.payload;
    },
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { loginSuccess, loginFailure, signupFailure, signupSuccess } = authSlice.actions;
export default authSlice;
