import { toast } from "react-toastify";
import request from "../../util/request";
import { PostActions } from "../slices/PostSLice";

export function fetchPosts(pageNumber) {
  return async (dispatch) => {
    try {
      const { data } = await request.get(`/api/posts?pageNumber=${pageNumber}`);
      dispatch(PostActions.fetchPosts(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}
export function getAllPosts() {
  return async (dispatch) => {
    try {
      const { data } = await request.get(`/api/posts`);
      dispatch(PostActions.fetchPosts(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}

export function PostsCount() {
  return async (dispatch) => {
    try {
      const { data } = await request.get(`/api/posts/count`);
      dispatch(PostActions.setPostsCount(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}

export function fetchCategoryPosts(category) {
  return async (dispatch) => {
    try {
      const { data } = await request.get(`/api/posts?category=${category}`);
      dispatch(PostActions.setPostsCategory(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}

export function createNewPost(newPost) {
  return async (dispatch, getState) => {
    try {
      dispatch(PostActions.setLoading());
      await request.post(`/api/posts`, newPost, {
        headers: {
          token: "Bearer " + getState().auth.user.token,
          "Content-Type": "Multipart/form-data",
        },
      });

      dispatch(PostActions.setIsPostCreated());
      setTimeout(() => {
        dispatch(PostActions.clearIsPostCreated());
      }, 2000);
    } catch (error) {
      toast.error(error.response.data.message);
      dispatch(PostActions.clearLoading());
    }
  };
}

export function fetchSinglePost(id) {
  return async (dispatch) => {
    try {
      const { data } = await request.get(`/api/posts/${id}`);
      dispatch(PostActions.setPost(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}

export function ToggleLikeBtn(id) {
  return async (dispatch, getState) => {
    try {
      const { data } = await request.put(
        `/api/posts/like/${id}`,
        {},
        {
          headers: {
            token: "Bearer " + getState().auth.user.token,
          },
        }
      );
      dispatch(PostActions.setLike(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}

export function updatePost(id, post) {
  return async (dispatch, getState) => {
    try {
      const { data } = await request.put(`/api/posts/${id}`, post, {
        headers: {
          token: "Bearer " + getState().auth.user.token,
        },
      });
      dispatch(PostActions.uploadPost(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}

export function uploadPostImage(id, newPhoto) {
  return async (dispatch, getState) => {
    try {
      await request.put(`/api/posts/update-image/${id}`, newPhoto, {
        headers: {
          token: "Bearer " + getState().auth.user.token,
          "Content-Type": "Multipart/form-data",
        },
      });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}

export function deletePost(id) {
  return async (dispatch, getState) => {
    try {
      const { data } = await request.delete(`/api/posts/${id}`, {
        headers: {
          token: "Bearer " + getState().auth.user.token,
        },
      });
      dispatch(PostActions.deletePost(data.id));
      toast.success("Post is deleted Successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}
