import { toast } from "react-toastify";
import request from "../../util/request";
import { profileActions } from "../slices/ProfileSlice";
import { authActions } from "../slices/AuthSlice";

export function userProfile(id) {
  return async (dispatch) => {
    try {
      const { data } = await request.get(`/api/users/profile/${id}`);
      dispatch(profileActions.setProfile(data));
    } catch (error) {
      toast.error(error.response.data.Message);
    }
  };
}

export function uploadProfileImage(newPhoto) {
  return async (dispatch, getState) => {
    try {
      const { data } = await request.post(
        "/api/users/profile/profile-photo-upload",
        newPhoto,
        {
          headers: {
            token: "Bearer " + getState().auth.user.token,
            "Content-Type": "Multipart/form-data",
          },
        }
      );
      dispatch(profileActions.setProfileImage(data.profile_photo));
      dispatch(authActions.setHeaderImage(data.profile_photo));
      toast.success(data.message);

      const user = JSON.parse(localStorage.getItem("userInfo"));
      user.profile_photo = data?.profile_photo;
      localStorage.setItem("userInfo", JSON.stringify(user));
    } catch (error) {
      toast.error(error.response.data.Message);
    }
  };
}

export function updateProfile(id, profile) {
  return async (dispatch, getState) => {
    try {
      const { data } = await request.put(`/api/users/profile/${id}`, profile, {
        headers: {
          token: "Bearer " + getState().auth.user.token,
        },
      });

      dispatch(profileActions.updateProfile(data));
      dispatch(authActions.setUserName(data.username));

      const user = JSON.parse(localStorage.getItem("userInfo"));
      user.username = data?.username;
      localStorage.setItem("userInfo", JSON.stringify(user));
    } catch (error) {
      toast.error(error.response.data.Message);

      console.log(error + "profileCall");
    }
  };
}

export function deleteProfile(id) {
  return async (dispatch, getState) => {
    try {
      dispatch(profileActions.setLoading());
      const { data } = await request.delete(`/api/users/profile/${id}`, {
        headers: {
          token: "Bearer " + getState().auth.user.token,
        },
      });
      dispatch(profileActions.setIsProfileDeleted());
      toast.success(data?.message);
      setTimeout(() => {
        dispatch(profileActions.clearIsProfileDeleted());
      }, 2000);
    } catch (err) {
      console.log(err + "profileCall");
      dispatch(profileActions.setLoading());
    }
  };
}

export function getUserCount() {
  return async (dispatch, getState) => {
    try {
      const { data } = await request.get(`/api/users/count/`, {
        headers: {
          token: "Bearer " + getState().auth.user.token,
        },
      });
      dispatch(profileActions.setUserCount(data));
    } catch (error) {
      toast.error(error.response.data.Message);
    }
  };
}

export function getUsersProfile() {
  return async (dispatch, getState) => {
    try {
      const { data } = await request.get(`/api/users/profile/`, {
        headers: {
          token: "Bearer " + getState().auth.user.token,
        },
      });
      dispatch(profileActions.setProfiles(data));
    } catch (error) {
      toast.error(error.response.data.Message);
    }
  };
}
