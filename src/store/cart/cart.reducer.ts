import { createSlice } from "@reduxjs/toolkit";

import { CartItem } from "./cart.types";
import { CategoryItem } from "../categories/categories.types";

/////////////MAIN LOGIC FOR CART ACTIONS////////////
const addItemToCartHelper = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
): CartItem[] => {
  const foundItem = cartItems.find((item) => item.id === productToAdd.id);
  if (foundItem) {
    return cartItems.map((item) => {
      if (item.id === productToAdd.id) {
        const quantity = item.quantity + 1;
        return { ...item, quantity };
      }
      return item;
    });
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const increaseItemQuantityHelper = (
  cartItems: CartItem[],
  itemToIncreaseQuantity: CartItem
): CartItem[] =>
  cartItems.map((item) => {
    if (item.id === itemToIncreaseQuantity.id) {
      const quantity = item.quantity + 1;
      return { ...item, quantity };
    }
    return item;
  });

const decreaseItemQuantityHelper = (
  cartItems: CartItem[],
  itemToDecreaseQuantity: CartItem
): CartItem[] =>
  cartItems.map((item) => {
    if (item.id === itemToDecreaseQuantity.id && item.quantity > 0) {
      const quantity = item.quantity - 1;
      return { ...item, quantity };
    }
    return item;
  });

const removeItemHelper = (
  cartItems: CartItem[],
  itemToRemove: CartItem
): CartItem[] => cartItems.filter((item) => item.id !== itemToRemove.id);
////////////////////////////////////////////////////////////

//////////////////////////CART REDUCER//////////////////////
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
    addItemToCart(state, action) {
      state.cartItems = addItemToCartHelper(state.cartItems, action.payload);
    },
    increaseItemQuantity(state, action) {
      state.cartItems = increaseItemQuantityHelper(
        state.cartItems,
        action.payload
      );
    },
    decreaseItemQuantity(state, action) {
      state.cartItems = decreaseItemQuantityHelper(
        state.cartItems,
        action.payload
      );
    },
    removeItem(state, action) {
      state.cartItems = removeItemHelper(state.cartItems, action.payload);
    },
    toggleDropdown(state) {
      state.isDropdownOpen = !state.isDropdownOpen;
    },
  },
});

export const {
  addItemToCart,
  increaseItemQuantity,
  decreaseItemQuantity,
  removeItem,
  toggleDropdown,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
////////////////////////////////////////////////////////////
