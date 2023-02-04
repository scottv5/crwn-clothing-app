import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { CATEGORIES_ACTION_TYPES, Category } from "./categories.types";
import {
  createAction,
  Action,
  ActionWithPayload,
} from "../../utils/reducer/reducer.utils";

export type FetchCategoriesStart =
  Action<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_DATA_START>;

export type FetchCategoriesSucess = ActionWithPayload<
  CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_DATA_SUCCESS,
  Category[]
>;

export type FetchCategoriesFailed = ActionWithPayload<
  CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_DATA_FAILED,
  Error
>;

export const fetchCategoriesDataStart = (): FetchCategoriesStart =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_DATA_START);

export const fetchCategoriesDataSuccess = (
  categoriesData: Category[]
): FetchCategoriesSucess =>
  createAction(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_DATA_SUCCESS,
    categoriesData
  );

export const fetchCategoriesDataFailed = (
  error: Error
): FetchCategoriesFailed =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_DATA_FAILED, error);

export type CategoryAction =
  | FetchCategoriesStart
  | FetchCategoriesSucess
  | FetchCategoriesFailed;

export const fetchCategoriesAsync = () => async (dispatch: any) => {
  dispatch(fetchCategoriesDataStart());
  try {
    const categoriesData = await getCategoriesAndDocuments();
    dispatch(fetchCategoriesDataSuccess(categoriesData as Category[]));
  } catch (error) {
    dispatch(fetchCategoriesDataFailed(error as Error));
  }
};
