import { createSlice } from "@reduxjs/toolkit";

const PostSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
    postsCount: null,
    postsCategory: [],
    loading: false,
    isPostCreated: false,
    post: null,
  },
  reducers: {
    fetchPosts(state, action) {
      state.posts = action.payload;
    },
    setPostsCount(state, action) {
      state.postsCount = action.payload;
    },
    setPostsCategory(state, action) {
      state.postsCategory = action.payload;
    },
    setLoading(state) {
      state.loading = true;
    },
    clearLoading(state) {
      state.loading = false;
    },
    setIsPostCreated(state) {
      state.isPostCreated = true;
      state.loading = false;
    },
    clearIsPostCreated(state) {
      state.isPostCreated = false;
    },
    setPost(state, action) {
      state.post = action.payload;
    },
    uploadPost(state, action) {
      state.post = action.payload;
    },
    deletePost(state, action) {
      state.posts = state.posts.filter((post) => post._id !== action.payload);
    },
    setLike(state, action) {
      state.post.likes = action.payload.likes;
    },
    addCommentToPost(state, action) {
      state.post.comments.push(action.payload);
    },
    updateComment(state, action) {
      state.post.comments = state.post.comments.map((comment) =>
        comment._id === action.payload._id ? action.payload : comment
      );
    },
    deleteCommentFromPost(state, action) {
      state.post.comments = state.post.comments.filter(
        (comment) => comment._id !== action.payload
      );
    },
  },
});

const PostActions = PostSlice.actions;
const PostReducer = PostSlice.reducer;

export { PostActions, PostReducer };
