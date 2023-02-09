import styled from "styled-components";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart } from "../../store/cart/cart.action";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { imageUrl, name, price } = product;
  const cartItems = useSelector(selectCartItems);

  const onClickHandler = () => {
    dispatch(addItemToCart(cartItems, product));
  };
  return (
    <ProductCardContainer>
      <Image src={imageUrl} alt={name} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <ProductCardButton
        onClick={onClickHandler}
        buttonType={BUTTON_TYPE_CLASSES.inverted}
      >
        ADD TO CART
      </ProductCardButton>
    </ProductCardContainer>
  );
};

export default ProductCard;

const Image = styled.img`
  width: 100%;
  height: 95%;
  object-fit: cover;
  margin-bottom: 5px;
`;
const ProductCardButton = styled(Button)`
  width: 80%;
  opacity: 0; //0.7
  position: absolute;
  top: 255px;
  transform: translateY(22px);
  display: block;
`;
const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  &:hover {
    ${Image} {
      opacity: 0.8;
    }
    ${ProductCardButton} {
      opacity: 0.85;
      display: block;
      transform: translateY(0);
      transition: opacity 0.3s, transform 0.3s;
      transition-timing-function: ease-out;
    }
  }
`;
const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;
const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;
const Price = styled.span`
  width: 10%;
`;
