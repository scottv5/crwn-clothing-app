import { Category } from "./categories.types";
import { createSlice } from "@reduxjs/toolkit";

export type CategoriesState = {
  readonly categoriesData: Category[];
  readonly isLoading: boolean;
  readonly error: null | Error;
};

const INITIAL_STATE: CategoriesState = {
  categoriesData: [],
  isLoading: false,
  error: null,
};

export const categoriesSlice = createSlice({
  name: "category",
  initialState: INITIAL_STATE,
  reducers: {
    fetchCategoriesDataStart(state) {
      state.isLoading = true;
    },
    fetchCategoriesDataSuccess(state, action) {
      state.categoriesData = action.payload;
      state.isLoading = false;
    },
    fetchCategoriesDataFailed(state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const {
  fetchCategoriesDataStart,
  fetchCategoriesDataSuccess,
  fetchCategoriesDataFailed,
} = categoriesSlice.actions;

export const categoriesReducer = categoriesSlice.reducer;
