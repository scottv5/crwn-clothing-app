import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../product-card/product-card.component";
import styled from "styled-components";

const ShopCategoryFull = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(() => categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <CategoryFullContainer>
      <Title>{category[0].toUpperCase() + category.slice(1)}</Title>
      <Preview>
        {products &&
          products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </Preview>
    </CategoryFullContainer>
  );
};

export default ShopCategoryFull;

//styles
const CategoryFullContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;
const Title = styled.h2`
  text-align: center;
  font-size: 28px;
  margin-bottom: 25px;
`;
const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 10px;
  row-gap: 20px;
`;

// .category-full-container {
//   display: flex;
//   flex-direction: column;
//   margin-bottom: 30px;
//   .title {
//     text-align: center;
//     font-size: 28px;
//     margin-bottom: 25px;
//   }
//   .preview {
//     display: grid;
//     grid-template-columns: repeat(4, 1fr);
//     column-gap: 10px;
//     row-gap: 20px;
//   }
// }
