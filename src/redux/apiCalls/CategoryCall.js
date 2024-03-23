import { toast } from "react-toastify";
import request from "../../util/request";
import { CategoryActions } from "../slices/CategorySlice";

export function fetchCategories() {
  return async (dispatch) => {
    try {
      const { data } = await request.get(`/api/categories`);
      dispatch(CategoryActions.fetchCategories(data));
    } catch (error) {
      toast.error(error.response.data.Message);
    }
  };
}

export function addCategory(newCategory) {
  return async (dispatch, getState) => {
    try {
      const { data } = await request.post(`/api/categories/`, newCategory, {
        headers: {
          token: "Bearer " + getState().auth.user.token,
        },
      });
      dispatch(CategoryActions.addCategory(data));
      toast.success("category Added Successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}
export function deleteCategory(catId) {
  return async (dispatch, getState) => {
    try {
      const { data } = await request.delete(`/api/categories/${catId}`, {
        headers: {
          token: "Bearer " + getState().auth.user.token,
        },
      });
      dispatch(CategoryActions.deleteCategory(data.catId));
      toast.success(data?.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}
