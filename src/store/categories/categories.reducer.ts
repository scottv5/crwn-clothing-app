import { CATEGORIES_ACTION_TYPES } from "./categories.types";
import { CategoryAction } from "./categories.action";
import { Category } from "./categories.types";

export type CategoriesState = {
  readonly categoriesData: Category[];
  readonly isLoading: boolean;
  readonly error: null | Error;
};

const CATEGORIES_INITIAL_STATE: CategoriesState = {
  categoriesData: [],
  isLoading: false,
  error: null,
};

export const categoriesReducer = (
  state = CATEGORIES_INITIAL_STATE,
  action = {} as CategoryAction
) => {
  switch (action.type) {
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_DATA_START:
      return { ...state, isLoading: true };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_DATA_SUCCESS:
      return { ...state, isLoading: false, categoriesData: action.payload };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_DATA_FAILED:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};
