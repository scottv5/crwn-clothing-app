import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { Dispatch, AnyAction } from "redux";
import {
  fetchCategoriesDataStart,
  fetchCategoriesDataSuccess,
  fetchCategoriesDataFailed,
} from "./categories.reducer";

export const fetchCategoriesAsync =
  () => async (dispatch: Dispatch<AnyAction>) => {
    dispatch(fetchCategoriesDataStart());
    try {
      const categoriesData = await getCategoriesAndDocuments();
      dispatch(fetchCategoriesDataSuccess(categoriesData));
    } catch (error) {
      dispatch(fetchCategoriesDataFailed(error as Error));
    }
  };
