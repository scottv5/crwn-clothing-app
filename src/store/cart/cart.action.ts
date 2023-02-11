import { CartItem } from "./cart.types";
import { CategoryItem } from "../categories/categories.types";
import { updateCartItems } from "./cart.reducer";

/////////////BUSINESS LOGIC FOR CART////////////
const addItemToCartArrayCreator = (
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

const increaseItemQuantityArrayCreator = (
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

const decreaseItemQuantityArrayCreator = (
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

const removeItemArrayCreator = (
  cartItems: CartItem[],
  itemToRemove: CartItem
): CartItem[] => cartItems.filter((item) => item.id !== itemToRemove.id);
////////////////////////////////////////////////////////////

////////////////CART ACTION CREATORS////////////////////////
export const addItemToCart = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
) => {
  return updateCartItems(addItemToCartArrayCreator(cartItems, productToAdd));
};

export const increaseItemQuantity = (
  cartItems: CartItem[],
  itemToIncrease: CartItem
) => {
  return updateCartItems(
    increaseItemQuantityArrayCreator(cartItems, itemToIncrease)
  );
};

export const decreaseItemQuantity = (
  cartItems: CartItem[],
  itemToDecrease: CartItem
) => {
  return updateCartItems(
    decreaseItemQuantityArrayCreator(cartItems, itemToDecrease)
  );
};

export const removeItem = (cartItems: CartItem[], itemToRemove: CartItem) => {
  return updateCartItems(removeItemArrayCreator(cartItems, itemToRemove));
};
/////////////////////////////////////////////////////////
