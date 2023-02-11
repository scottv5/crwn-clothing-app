import { CartItem } from "./cart.types";
import { createSlice } from "@reduxjs/toolkit";

export type CartState = {
  readonly cartItems: CartItem[];
  readonly isDropdownOpen: boolean;
};

const INITIAL_STATE: CartState = {
  cartItems: [],
  isDropdownOpen: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    updateCartItems(state, action) {
      state.cartItems = action.payload;
    },
    toggleDropdown(state) {
      state.isDropdownOpen = !state.isDropdownOpen;
    },
  },
});

export const { updateCartItems, toggleDropdown } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
