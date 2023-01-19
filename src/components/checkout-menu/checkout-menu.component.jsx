import "./chekcout-menu.styles.scss";
import CheckoutItem from "../checkout-item/checkout-item.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CheckoutMenu = () => {
  const { cartItems, getPriceTotal } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <span className="header-block">Product</span>
        <span className="header-block">Description</span>
        <span className="header-block">Quantity</span>
        <span className="header-block">Price</span>
        <span className="header-block">Remove</span>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">${getPriceTotal()}</div>
    </div>
  );
};

export default CheckoutMenu;
