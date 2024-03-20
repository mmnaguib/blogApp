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
  },
});

const CategoryActions = CategorySlice.actions;
const CategoryReducer = CategorySlice.reducer;

export { CategoryActions, CategoryReducer };
