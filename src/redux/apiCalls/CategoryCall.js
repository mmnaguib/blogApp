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
