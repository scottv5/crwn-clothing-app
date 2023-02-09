import CheckoutItem from "../checkout-item/checkout-item.component";
import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectPriceTotal,
} from "../../store/cart/cart.selector";
import PaymentForm from "../payments-form/payments-form.component";
import styled from "styled-components";
import { CartItem } from "../../store/cart/cart.types";

const CheckoutMenu = () => {
  const cartItems: CartItem[] = useSelector(selectCartItems);
  const priceTotal = useSelector(selectPriceTotal);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>Product</HeaderBlock>
        <HeaderBlock>Description</HeaderBlock>
        <HeaderBlock>Quantity</HeaderBlock>
        <HeaderBlock>Price</HeaderBlock>
        <HeaderBlock>Remove</HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <PriceTotal>{priceTotal ? `Total: $${priceTotal}` : null}</PriceTotal>
      <PaymentForm />
    </CheckoutContainer>
  );
};

export default CheckoutMenu;

//styles
const CheckoutContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`;
const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;
const HeaderBlock = styled.span`
  text-transform: capitalize;
  width: 23%;
  &:last-child {
    width: 8%;
  }
`;
const PriceTotal = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;
