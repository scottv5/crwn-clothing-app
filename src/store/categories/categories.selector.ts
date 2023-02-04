import { createSelector } from "reselect";
import { CategoryMap } from "./categories.types";
import { CategoriesState } from "./categories.reducer";

const selectCategoriesReducer = (state: any): CategoriesState =>
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
