import styled from "styled-components";

import { useDispatch } from "react-redux";

import {
  decreaseItemQuantity,
  increaseItemQuantity,
  removeItem,
} from "../../store/cart/cart.reducer";
import { CartItem } from "../../store/cart/cart.types";

type CheckoutItemProps = {
  cartItem: CartItem;
};

const CheckoutItem = ({ cartItem }: CheckoutItemProps) => {
  const dispatch = useDispatch();
  const { imageUrl, name, price, quantity } = cartItem;

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <QuantityControlGroup>
        <Arrow onClick={() => dispatch(decreaseItemQuantity(cartItem))}>
          &#60;
        </Arrow>
        <QuantityValue>{quantity}</QuantityValue>
        <Arrow onClick={() => dispatch(increaseItemQuantity(cartItem))}>
          &#62;
        </Arrow>
      </QuantityControlGroup>
      <Price>{price}</Price>
      <XMark onClick={() => dispatch(removeItem(cartItem))}>&#10005;</XMark>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;

//styles
const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;
const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
  img {
    width: 100%;
    height: 100%;
  }
`;
const Name = styled.span`
  width: 23%;
`;
const Price = styled.span`
  width: 23%;
`;
const QuantityControlGroup = styled.span`
  display: flex;
  width: 23%;
`;
const Arrow = styled.span`
  cursor: pointer;
`;
const QuantityValue = styled.span`
  margin: 0 10px;
`;
const XMark = styled.span`
  padding-left: 12px;
  cursor: pointer;
`;
