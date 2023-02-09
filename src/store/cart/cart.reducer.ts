import { CART_ACTION_TYPES } from "./cart.types";
import { CartAction } from "./cart.action";
import { CartItem } from "./cart.types";

export type CartState = {
  readonly cartItems: CartItem[];
  readonly isDropdownOpen: boolean;
};

const INITIAL_STATE: CartState = {
  cartItems: [],
  isDropdownOpen: false,
};

export const cartReducer = (
  state = INITIAL_STATE,
  action = {} as CartAction
) => {
  const { isDropdownOpen } = state;
  switch (action.type) {
    case CART_ACTION_TYPES.UPDATE_CART_ITEMS:
      return { ...state, cartItems: action.payload };
    case CART_ACTION_TYPES.TOGGLE_DROPDOWN:
      return { ...state, isDropdownOpen: !isDropdownOpen };
    default:
      return state;
  }
};
