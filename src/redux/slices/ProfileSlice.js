import { createSlice } from "@reduxjs/toolkit";

const ProfileSlice = createSlice({
  name: "auth",
  initialState: {
    profile: null,
  },
  reducers: {
    setProfile(state, action) {
      state.profile = action.payload;
    },
    setProfileImage(state, action) {
      state.profile.profile_photo = action.payload;
    },
    updateProfile(state, action) {
      state.profile = action.payload;
    },
  },
});

const profileActions = ProfileSlice.actions;
const profileReducer = ProfileSlice.reducer;

export { profileActions, profileReducer };
