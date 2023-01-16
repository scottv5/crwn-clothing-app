import "./checkout-item.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = ({ cartItem }) => {
  const { increaseItemQuantity, decreaseItemQuantity, removeItem } =
    useContext(CartContext);
  const { imageUrl, name, price, quantity } = cartItem;

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span>{name}</span>
      <span className="quantity-control-grouping">
        <span onClick={() => decreaseItemQuantity(cartItem)}>
          _______left_______
        </span>
        <span>{quantity}</span>
        <span onClick={() => increaseItemQuantity(cartItem)}>
          _______right_______
        </span>
      </span>
      <span>{price}</span>
      <span onClick={() => removeItem(cartItem)}>X</span>
    </div>
  );
};

export default CheckoutItem;
