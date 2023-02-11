import { createSelector } from "reselect";

import { CartItem } from "./cart.types";
import { RootState } from "../store";

const selectCartReducer = (state: RootState) => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cartReducer) => cartReducer.cartItems
);

export const selectQuantityTotal = createSelector(
  [selectCartItems],
  (cartItems: CartItem[]): number =>
    cartItems.reduce((accu, curr) => {
      return accu + curr.quantity;
    }, 0)
);

export const selectPriceTotal = createSelector(
  [selectCartItems],
  (cartItems: CartItem[]): number =>
    cartItems.reduce((accu, curr) => {
      return accu + curr.quantity * curr.price;
    }, 0)
);

export const selectIsDropdownOpen = createSelector(
  [selectCartReducer],
  (cartReducer) => cartReducer.isDropdownOpen
);
