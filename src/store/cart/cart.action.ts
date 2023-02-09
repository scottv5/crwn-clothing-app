import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";
import { CartItem } from "./cart.types";
import { CategoryItem } from "../categories/categories.types";
import { ActionWithPayload, Action } from "../../utils/reducer/reducer.utils";

////////////////TYPES FOR CART ACTIONS////////////////
type UpdateCartItems = ActionWithPayload<
  CART_ACTION_TYPES.UPDATE_CART_ITEMS,
  CartItem[]
>;

type ToggleDropdown = Action<CART_ACTION_TYPES.TOGGLE_DROPDOWN>;

export type CartAction = UpdateCartItems | ToggleDropdown;
////////////////////////////////////////////////////////

/////////////BUSINESS LOGIC FOR CART ACTIONS////////////
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

///////////////////CART ACTIONS////////////////////////////
const updateCartItems = (newCartItems: CartItem[]): UpdateCartItems => {
  return createAction(CART_ACTION_TYPES.UPDATE_CART_ITEMS, newCartItems);
};

export const toggleDropdown = (): ToggleDropdown => {
  return createAction(CART_ACTION_TYPES.TOGGLE_DROPDOWN);
};

export const addItemToCart = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
): UpdateCartItems => {
  return updateCartItems(addItemToCartHelper(cartItems, productToAdd));
};

export const increaseItemQuantity = (
  cartItems: CartItem[],
  itemToIncrease: CartItem
): UpdateCartItems => {
  return updateCartItems(increaseItemQuantityHelper(cartItems, itemToIncrease));
};

export const decreaseItemQuantity = (
  cartItems: CartItem[],
  itemToDecrease: CartItem
): UpdateCartItems => {
  return updateCartItems(decreaseItemQuantityHelper(cartItems, itemToDecrease));
};

export const removeItem = (
  cartItems: CartItem[],
  itemToRemove: CartItem
): UpdateCartItems => {
  return updateCartItems(removeItemHelper(cartItems, itemToRemove));
};
