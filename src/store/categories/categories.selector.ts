import { createSelector } from "reselect";
import { CategoryMap } from "./categories.types";
import { CategoriesState } from "./categories.reducer";
import { RootState } from "../store";

const selectCategoriesReducer = (state: RootState): CategoriesState =>
  state.categories;

export const selectCategoriesData = createSelector(
  [selectCategoriesReducer],
  (categoriesReducer) => categoriesReducer.categoriesData
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoriesReducer],
  (categoriesReducer) => categoriesReducer.isLoading
);

export const selectCategoriesMap = createSelector(
  [selectCategoriesData],
  (categoriesData) => {
    return categoriesData.reduce((accu, currObj) => {
      const { title, items } = currObj;
      return { ...accu, [title.toLowerCase()]: items };
    }, {} as CategoryMap);
  }
);
