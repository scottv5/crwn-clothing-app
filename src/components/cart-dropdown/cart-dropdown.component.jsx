import Button from "../button/button.component";
import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { Link } from "react-router-dom";

const CartDropdown = () => {
  const { cartItems, getPriceTotal } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <div>Total: ${getPriceTotal()}</div>
      <Link to="/checkout">
        <Button>To Checkout</Button>
      </Link>
    </div>
  );
};

export default CartDropdown;
