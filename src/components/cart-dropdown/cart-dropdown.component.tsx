import Button, {
  BaseButton,
  InvertedButon,
  GoogleSignInButton,
} from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectPriceTotal,
} from "../../store/cart/cart.selector";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CartItem as CartItemType } from "../../store/cart/cart.types";

const CartDropdown = () => {
  const navigate = useNavigate();
  const cartItems: CartItemType[] = useSelector(selectCartItems);
  const priceTotal = useSelector(selectPriceTotal);
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
      {cartItems.length ? <div>`Total: $ ${priceTotal}`</div> : null}
      <Button onClick={() => navigate("/checkout")}>To Checkout</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;

//styles
const CartDropdownContainer = styled.div`
  position: absolute;
  width: 260px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 12px;
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
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 0.4em;
  }
`;
const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;
