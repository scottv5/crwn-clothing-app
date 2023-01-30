import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORIES_ACTION_TYPES } from "./categories.types";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

export const fetchCategoriesDataStart = () =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_DATA_START);

export const fetchCategoriesDataSuccess = (categoriesData) =>
  createAction(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_DATA_SUCCESS,
    categoriesData
  );

export const fetchCategoriesDataFailed = (error) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_DATA_FAILED, error);

export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesDataStart());
  try {
    const categoriesData = await getCategoriesAndDocuments();
    dispatch(fetchCategoriesDataSuccess(categoriesData));
  } catch (error) {
    dispatch(fetchCategoriesDataFailed(error));
  }
};
