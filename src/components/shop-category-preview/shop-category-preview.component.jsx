import { useNavigate } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";
import styled from "styled-components";

const ShopCategoryPreview = ({ title, products }) => {
  const navigate = useNavigate();
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title onClick={() => navigate(`/shop/${title}`)}>
          {title[0].toUpperCase() + title.slice(1)}
        </Title>
      </h2>
      <Preview>
        {products.map((product, i) => {
          if (i < 4) {
            return <ProductCard key={product.id} product={product} />;
          }
          return null;
        })}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default ShopCategoryPreview;

const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;
const Title = styled.span`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
`;
const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
`;

// .category-preview-container {
//   display: flex;
//   flex-direction: column;
//   margin-bottom: 30px;
//   .title {
//     font-size: 28px;
//     margin-bottom: 25px;
//     cursor: pointer;
//   }
//   .preview {
//     display: grid;
//     grid-template-columns: repeat(4, 1fr);
//     column-gap: 20px;
//   }
// }
