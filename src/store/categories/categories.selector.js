import { createSelector } from "reselect";

const selectCategoriesReducer = (state) => state.categories;

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
    }, {});
  }
);
