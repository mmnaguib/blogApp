import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    user: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
    registerMessage: null,
  },
  reducers: {
    register(state, action) {
      state.registerMessage = action.payload;
    },
    login(state, action) {
      state.user = action.payload;
    },
    logout(state) {
      state.user = null;
    },
    setHeaderImage(state, action) {
      state.user.profile_photo = action.payload;
    },
    setUserName(state, action) {
      state.user.username = action.payload;
    },
  },
});

const authActions = AuthSlice.actions;
const authReducer = AuthSlice.reducer;

export { authActions, authReducer };
