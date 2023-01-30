import "./chekcout-menu.styles.scss";
import CheckoutItem from "../checkout-item/checkout-item.component";
import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectPriceTotal,
} from "../../store/cart/cart.selector";
import PaymentForm from "../payments-form/payments-form.component";

const CheckoutMenu = () => {
  const cartItems = useSelector(selectCartItems);
  const priceTotal = useSelector(selectPriceTotal);

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
      <div className="total">{priceTotal ? `Total: $${priceTotal}` : null}</div>
      <PaymentForm />
    </div>
  );
};

export default CheckoutMenu;
