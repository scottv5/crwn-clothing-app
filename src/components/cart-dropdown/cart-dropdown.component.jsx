import Button, {
  BaseButton,
  InvertedButon,
  GoogleSignInButton,
} from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CartDropdown = () => {
  const navigate = useNavigate();
  const { cartItems, getPriceTotal } = useContext(CartContext);
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <EmptyMessage>YOUR CART IS EMPTY</EmptyMessage>
        )}
      </CartItemsContainer>
      {cartItems.length ? <div>`Total: $${getPriceTotal()}`</div> : null}
      <Button onClick={() => navigate("/checkout")}>To Checkout</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;

//styles
const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButon} {
    margin-top: auto;
  }
`;
const CartItemsContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;
const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

// .cart-dropdown-container {
//   position: absolute;
//   width: 240px;
//   height: 340px;
//   display: flex;
//   flex-direction: column;
//   padding: 20px;
//   border: 1px solid black;
//   background-color: white;
//   top: 90px;
//   right: 40px;
//   z-index: 5;
//   .empty-message {
//     font-size: 18px;
//     margin: 50px auto;
//   }
//   .cart-items {
//     height: 240px;
//     display: flex;
//     flex-direction: column;
//     overflow: scroll;
//   }
//   button {
//     margin-top: auto;
//   }
// }
