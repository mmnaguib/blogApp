import { createSlice } from "@reduxjs/toolkit";

const CommentSlice = createSlice({
  name: "comment",
  initialState: {
    comments: [],
  },
  reducers: {
    getAllComments(state, action) {
      state.comments = action.payload;
    },
    deleteComment(state, action) {
      state.comments = state.comments.filter(
        (comment) => comment._id !== action.payload
      );
    },
  },
});

const commentActions = CommentSlice.actions;
const commentReducer = CommentSlice.reducer;

export { commentActions, commentReducer };
