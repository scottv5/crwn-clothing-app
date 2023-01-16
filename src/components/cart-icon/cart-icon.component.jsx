import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
  const { toggleDropdown, getQuantityTotal } = useContext(CartContext);
  return (
    <div onClick={() => toggleDropdown()} className="cart-icon-container">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{getQuantityTotal()}</span>
    </div>
  );
};

export default CartIcon;
