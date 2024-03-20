import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/AuthSlice";
import { profileReducer } from "./slices/ProfileSlice";
import { PostReducer } from "./slices/PostSLice";
import { CategoryReducer } from "./slices/CategorySlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    post: PostReducer,
    category: CategoryReducer,
  },
});

export default store;
