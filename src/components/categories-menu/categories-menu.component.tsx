import CategoryItem from "../category-item/category-item.component";
import styled from "styled-components";

export type HomeCategoryItem = {
  id: number;
  title: string;
  imageUrl: string;
};

const categories: HomeCategoryItem[] = [
  {
    id: 1,
    title: "hats",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
  },
  {
    id: 2,
    title: "jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
  },
  {
    id: 3,
    title: "sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
  },
  {
    id: 4,
    title: "womens",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
  },
  {
    id: 5,
    title: "mens",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
  },
];

const CategoriesMenu = () => (
  <CategoriesContainer>
    {categories.map((category) => (
      <CategoryItem key={category.id} category={category} />
    ))}
  </CategoriesContainer>
);

export default CategoriesMenu;

//styles
const CategoriesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
