import { createContext, useState } from "react";

//helper functions
const addCartItem = (cartItems, productToAdd) => {
  const foundItem = cartItems.find((item) => item.id === productToAdd.id);
  if (foundItem) {
    let quantity;
    return cartItems.map((item) => {
      if (item.id === productToAdd.id) {
        quantity = item.quantity + 1;
        return { ...item, quantity };
      }
      return item;
    });
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const increaseQuantity = (cartItems, itemToIncreaseQuantity) =>
  cartItems.map((item) => {
    if (item.id === itemToIncreaseQuantity.id) {
      const quantity = item.quantity + 1;
      return { ...item, quantity };
    }
    return item;
  });

const decreaseQuantity = (cartItems, itemToDecreaseQuantity) =>
  cartItems.map((item) => {
    if (item.id === itemToDecreaseQuantity.id && item.quantity > 0) {
      const quantity = item.quantity - 1;
      return { ...item, quantity };
    }
    return item;
  });

const removeItemHelper = (cartItems, itemToRemove) =>
  cartItems.filter((item) => item.id !== itemToRemove.id);

export const CartContext = createContext({
  isDropdownOpen: false,
  setIsDropdownOpen: () => null,
  cartItems: [],
  addItemToCart: () => null,
});

export const CartProvider = ({ children }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const getQuantityTotal = () =>
    cartItems.reduce((accu, curr) => {
      return accu + curr.quantity;
    }, 0);

  const getPriceTotal = () =>
    cartItems.reduce((accu, curr) => {
      return accu + curr.quantity * curr.price;
    }, 0);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const increaseItemQuantity = (itemToIncrease) => {
    setCartItems(increaseQuantity(cartItems, itemToIncrease));
  };

  const decreaseItemQuantity = (itemToDecrease) => {
    setCartItems(decreaseQuantity(cartItems, itemToDecrease));
  };

  const removeItem = (itemToRemove) => {
    setCartItems(removeItemHelper(cartItems, itemToRemove));
  };

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const value = {
    isDropdownOpen,
    toggleDropdown,
    cartItems,
    addItemToCart,
    getQuantityTotal,
    getPriceTotal,
    increaseItemQuantity,
    decreaseItemQuantity,
    removeItem,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
