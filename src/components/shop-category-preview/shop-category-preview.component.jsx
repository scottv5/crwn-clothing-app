import "./shop-category-preview.styles.scss";
import { useNavigate } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";

const ShopCategoryPreview = ({ title, products }) => {
  const navigate = useNavigate();
  return (
    <div className="category-preview-container">
      <h2>
        <span className="title" onClick={() => navigate(`/shop/${title}`)}>
          {title[0].toUpperCase() + title.slice(1)}
        </span>
      </h2>
      <div className="preview">
        {products.map((product, i) => {
          if (i < 4) {
            return <ProductCard key={product.id} product={product} />;
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default ShopCategoryPreview;
