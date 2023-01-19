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
      <span className="name">{name}</span>
      <span className="quantity quantity-control-grouping">
        <span className="arrow" onClick={() => decreaseItemQuantity(cartItem)}>
          &#60;
        </span>
        <span className="value">{quantity}</span>
        <span className="arrow" onClick={() => increaseItemQuantity(cartItem)}>
          &#62;
        </span>
      </span>
      <span className="price">{price}</span>
      <span className="remove-button" onClick={() => removeItem(cartItem)}>
        &#10005;
      </span>
    </div>
  );
};

export default CheckoutItem;
