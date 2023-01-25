import { CATEGORIES_ACTION_TYPES } from "./categories.types";

const CATEGORIES_INITIAL_STATE = {
  categoriesData: [],
};

export const categoriesReducer = (
  state = CATEGORIES_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORIES_ACTION_TYPES.SET_CATEGORIES_DATA:
      return { ...state, categoriesData: payload };
    default:
      return state;
  }
};
