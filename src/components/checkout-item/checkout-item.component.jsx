import { useDispatch } from "react-redux";
import {
  decreaseItemQuantity,
  increaseItemQuantity,
  removeItem,
} from "../../store/cart/cart.action";
import "./checkout-item.styles.scss";
// import { useContext } from "react";
// import { CartContext } from "../../contexts/cart.context";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";

const CheckoutItem = ({ cartItem }) => {
  // const { increaseItemQuantity, decreaseItemQuantity, removeItem } =
  //   useContext(CartContext);
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const { imageUrl, name, price, quantity } = cartItem;

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity quantity-control-grouping">
        <span
          className="arrow"
          onClick={() => dispatch(decreaseItemQuantity(cartItems, cartItem))}
        >
          &#60;
        </span>
        <span className="value">{quantity}</span>
        <span
          className="arrow"
          onClick={() => dispatch(increaseItemQuantity(cartItems, cartItem))}
        >
          &#62;
        </span>
      </span>
      <span className="price">{price}</span>
      <span
        className="remove-button"
        onClick={() => dispatch(removeItem(cartItems, cartItem))}
      >
        &#10005;
      </span>
    </div>
  );
};

export default CheckoutItem;
