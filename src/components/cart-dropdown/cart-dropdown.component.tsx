import styled from "styled-components";

import Button, {
  BaseButton,
  InvertedButon,
  GoogleSignInButton,
} from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  selectCartItems,
  selectPriceTotal,
} from "../../store/cart/cart.selector";
import { CartItem as CartItemType } from "../../store/cart/cart.types";

type CartItemsContainerProps = {
  cartItemsLength: number;
};

const CartDropdown = () => {
  const navigate = useNavigate();
  const cartItems: CartItemType[] = useSelector(selectCartItems);
  const priceTotal = useSelector(selectPriceTotal);
  return (
    <CartDropdownContainer>
      <CartItemsContainer cartItemsLength={cartItems.length}>
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
const CartItemsContainer = styled.div<CartItemsContainerProps>`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-y: ${(props) => (props.cartItemsLength <= 2 ? "hidden" : "scroll")};
  padding-right: ${(props) => (props.cartItemsLength <= 2 ? "0.4em" : 0)};

  ::-webkit-scrollbar {
    width: 0.4em;
  }
`;
const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;
