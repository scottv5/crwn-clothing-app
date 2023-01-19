import "./shop-category-full.styles.scss";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../product-card/product-card.component";

const ShopCategoryFull = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(() => categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <div className="category-full-container">
      <h2 className="title">{category[0].toUpperCase() + category.slice(1)}</h2>
      <div className="preview">
        {products &&
          products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </div>
    </div>
  );
};

export default ShopCategoryFull;
