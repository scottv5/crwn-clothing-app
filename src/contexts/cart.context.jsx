import { createContext, useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.utils";
//useState

//helper functions
const addCartItem = (cartItems, productToAdd) => {
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

const increaseQuantity = (cartItems, itemToIncreaseQuantity) =>
  cartItems.map((item) => {
    if (item.id === itemToIncreaseQuantity.id) {
      let quantity = item.quantity + 1;
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
//////////////////////////////////////////////////////////////////

export const CartContext = createContext({
  isDropdownOpen: false,
  setIsDropdownOpen: () => null,
  cartItems: [],
  addItemToCart: () => null,
});

export const CART_ACTION_TYPES = {
  UPDATE_CART_ITEMS: "UPDATE_CART_ITEMS",
  TOGGLE_DROPDOWN: "TOGGLE_DROPDOWN",
};

export const cartReducer = (state, action) => {
  const { type, payload } = action;
  const { isDropdownOpen } = state;
  switch (type) {
    case CART_ACTION_TYPES.UPDATE_CART_ITEMS:
      return { ...state, cartItems: payload };
    case CART_ACTION_TYPES.TOGGLE_DROPDOWN:
      return { ...state, isDropdownOpen: !isDropdownOpen };
    default:
      throw new Error(`Error at cart reducer. Unhandled type: ${type}`);
  }
};

const INITIAL_STATE = {
  cartItems: [],
  isDropdownOpen: false,
};

export const CartProvider = ({ children }) => {
  //const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  const { cartItems, isDropdownOpen } = state;

  const setCartItems = (newCartItemsArr) => {
    dispatch(
      createAction(CART_ACTION_TYPES.UPDATE_CART_ITEMS, newCartItemsArr)
    );
  };

  //const [cartItems, setCartItems] = useState([]);

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

  //const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleDropdown = () => {
    dispatch(createAction(CART_ACTION_TYPES.TOGGLE_DROPDOWN));
  };

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
