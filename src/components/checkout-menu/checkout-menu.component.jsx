import "./chekcout-menu.styles.scss";
import CheckoutItem from "../checkout-item/checkout-item.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CheckoutMenu = () => {
  const { cartItems, getPriceTotal } = useContext(CartContext);

  return (
    <div>
      <div className="header">
        <span>Product</span>
        <span>Description</span>
        <span>Quantity</span>
        <span>Price</span>
        <span>Remove</span>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div>${getPriceTotal()}</div>
    </div>
  );
};

export default CheckoutMenu;
