import { ReactComponent as ShoppingSvg } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import styled from "styled-components";

const CartIcon = () => {
  const { toggleDropdown, getQuantityTotal } = useContext(CartContext);
  return (
    <CartIconContainer onClick={() => toggleDropdown()}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{getQuantityTotal()}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;

//styles
const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const ShoppingIcon = styled(ShoppingSvg)`
  width: 24px;
  height: 24px;
`;
const ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;

// .cart-icon-container {
//   width: 45px;
//   height: 45px;
//   position: relative;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
//   .shopping-icon {
//     width: 24px;
//     height: 24px;
//   }
//   .item-count {
//     position: absolute;
//     font-size: 10px;
//     font-weight: bold;
//     bottom: 12px;
//   }
// }
