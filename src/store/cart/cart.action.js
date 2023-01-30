import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";

const updateCartItems = (newCartItems) => {
  return createAction(CART_ACTION_TYPES.UPDATE_CART_ITEMS, newCartItems);
};

export const toggleDropdown = () => {
  return createAction(CART_ACTION_TYPES.TOGGLE_DROPDOWN);
};

/////////////HELPER FUNCTIONS START/////////////////////
const addItemToCartHelper = (cartItems, productToAdd) => {
  const foundItem = cartItems.find((item) => item.id === productToAdd.id);
  if (foundItem) {
    return cartItems.map((item) => {
      if (item.id === productToAdd.id) {
        let quantity = item.quantity + 1;
        return { ...item, quantity };
      }
      return item;
    });
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const increaseItemQuantityHelper = (cartItems, itemToIncreaseQuantity) =>
  cartItems.map((item) => {
    if (item.id === itemToIncreaseQuantity.id) {
      let quantity = item.quantity + 1;
      return { ...item, quantity };
    }
    return item;
  });

const decreaseItemQuantityHelper = (cartItems, itemToDecreaseQuantity) =>
  cartItems.map((item) => {
    if (item.id === itemToDecreaseQuantity.id && item.quantity > 0) {
      const quantity = item.quantity - 1;
      return { ...item, quantity };
    }
    return item;
  });

const removeItemHelper = (cartItems, itemToRemove) =>
  cartItems.filter((item) => item.id !== itemToRemove.id);
/////////////HELPER FUNCTIONS END/////////////////////

export const addItemToCart = (cartItems, productToAdd) => {
  return updateCartItems(addItemToCartHelper(cartItems, productToAdd));
};

export const increaseItemQuantity = (cartItems, itemToIncrease) => {
  return updateCartItems(increaseItemQuantityHelper(cartItems, itemToIncrease));
};

export const decreaseItemQuantity = (cartItems, itemToDecrease) => {
  return updateCartItems(decreaseItemQuantityHelper(cartItems, itemToDecrease));
};

export const removeItem = (cartItems, itemToRemove) => {
  return updateCartItems(removeItemHelper(cartItems, itemToRemove));
};
