import styled from "styled-components";

import ProductCard from "../product-card/product-card.component";

import { useNavigate } from "react-router-dom";

import { CategoryItem } from "../../store/categories/categories.types";

type ShopCategoryPreviewProps = {
  title: string;
  products: CategoryItem[];
};

const ShopCategoryPreview = ({ title, products }: ShopCategoryPreviewProps) => {
  const navigate = useNavigate();
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title onClick={() => navigate(`/shop/${title}`)}>
          {title[0].toUpperCase() + title.slice(1)}
        </Title>
      </h2>
      <Preview>
        {products.map((product, i: number) => {
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
