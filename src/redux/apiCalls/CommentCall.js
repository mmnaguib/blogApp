import { toast } from "react-toastify";
import request from "../../util/request";
import { PostActions } from "../slices/PostSLice";
import { commentActions } from "../slices/CommentSlice";

export function addComment(newComment) {
  return async (dispatch, getState) => {
    try {
      const { data } = await request.post("/api/comments", newComment, {
        headers: {
          token: "Bearer " + getState().auth.user.token,
        },
      });
      dispatch(PostActions.addCommentToPost(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}

export function updateComment(id, newComment) {
  return async (dispatch, getState) => {
    try {
      const { data } = await request.put(`/api/comments/${id}`, newComment, {
        headers: {
          token: "Bearer " + getState().auth.user.token,
        },
      });
      dispatch(PostActions.updateComment(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}

export function deleteComment(id) {
  return async (dispatch, getState) => {
    try {
      await request.delete(`/api/comments/${id}`, {
        headers: {
          token: "Bearer " + getState().auth.user.token,
        },
      });
      dispatch(commentActions.deleteComment(id));
      dispatch(PostActions.deleteCommentFromPost(id));
    } catch (error) {
      toast.error(error);
    }
  };
}

export function getAllComments() {
  return async (dispatch, getState) => {
    try {
      const { data } = await request.get(`/api/comments/`, {
        headers: {
          token: "Bearer " + getState().auth.user.token,
        },
      });
      dispatch(commentActions.getAllComments(data));
    } catch (error) {
      toast.error(error);
    }
  };
}
