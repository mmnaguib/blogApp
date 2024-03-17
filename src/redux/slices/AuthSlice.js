import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    user: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
  reducers: {
    login(state, action) {
      state.user = action.payload;
    },
  },
});

const authActions = AuthSlice.actions;
const authReducer = AuthSlice.reducer;

export { authActions, authReducer };
