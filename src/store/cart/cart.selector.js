import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cartReducer) => cartReducer.cartItems
);

export const selectQuantityTotal = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((accu, curr) => {
      return accu + curr.quantity;
    }, 0)
);

export const selectPriceTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((accu, curr) => {
    return accu + curr.quantity * curr.price;
  }, 0)
);

export const selectIsDropdownOpen = createSelector(
  [selectCartReducer],
  (cartReducer) => cartReducer.isDropdownOpen
);
