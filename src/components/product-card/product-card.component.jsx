import "./product-card.styles.scss";
import Button from "../button/button.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const ProductCard = ({ product }) => {
  const { imageUrl, name, price } = product;
  const { addItemToCart } = useContext(CartContext);

  const onClickHandler = () => {
    addItemToCart(product);
  };
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="foooter">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button onClick={onClickHandler} buttonType="inverted">
        ADD TO CART
      </Button>
    </div>
  );
};

export default ProductCard;
