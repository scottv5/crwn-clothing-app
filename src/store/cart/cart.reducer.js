import { CART_ACTION_TYPES } from "./cart.types";

const INITIAL_STATE = {
  cartItems: [],
  isDropdownOpen: false,
};

export const cartReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  const { isDropdownOpen } = state;
  switch (type) {
    case CART_ACTION_TYPES.UPDATE_CART_ITEMS:
      return { ...state, cartItems: payload };
    case CART_ACTION_TYPES.TOGGLE_DROPDOWN:
      return { ...state, isDropdownOpen: !isDropdownOpen };
    default:
      return state;
  }
};
