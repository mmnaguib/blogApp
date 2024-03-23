import { createSlice } from "@reduxjs/toolkit";

const ProfileSlice = createSlice({
  name: "auth",
  initialState: {
    profile: null,
    loading: false,
    isProfileDeleted: false,
    userCount: null,
    profiles: [],
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
    setLoading(state) {
      state.loading = true;
    },
    clearLoading(state) {
      state.loading = false;
    },
    setIsProfileDeleted(state) {
      state.isProfileDeleted = true;
      state.loading = false;
    },
    clearIsProfileDeleted(state) {
      state.isProfileDeleted = false;
    },
    setUserCount(state, action) {
      state.userCount = action.payload;
    },
    setProfiles(state, action) {
      state.profiles = action.payload;
    },
  },
});

const profileActions = ProfileSlice.actions;
const profileReducer = ProfileSlice.reducer;

export { profileActions, profileReducer };
