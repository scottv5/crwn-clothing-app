import styled from "styled-components";

import { CartItem as CartItemType } from "../../store/cart/cart.types";

type CartItemProps = {
  cartItem: CartItemType;
};

const CartItem = ({
  cartItem: { name, quantity, price, imageUrl },
}: CartItemProps) => {
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <ItemDetails>
        <Name>{name}</Name>
        <QuantityTimesPrice>
          {quantity} * {price}
        </QuantityTimesPrice>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;

const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
  img {
    width: 30%;
  }
`;
const ItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
`;
const Name = styled.span`
  font-size: 16px;
`;
const QuantityTimesPrice = styled.span``;
