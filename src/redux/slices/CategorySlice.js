import { createSlice } from "@reduxjs/toolkit";

const CategorySlice = createSlice({
  name: "category",
  initialState: {
    categories: [],
  },
  reducers: {
    fetchCategories(state, action) {
      state.categories = action.payload;
    },
    addCategory(state, action) {
      state.categories.push(action.payload);
    },
    deleteCategory(state, action) {
      state.categories = state.categories.filter(
        (cat) => cat._id !== action.payload
      );
    },
  },
});

const CategoryActions = CategorySlice.actions;
const CategoryReducer = CategorySlice.reducer;

export { CategoryActions, CategoryReducer };
