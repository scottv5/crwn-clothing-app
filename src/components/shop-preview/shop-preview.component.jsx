import "./shop-preview.styles.scss";
import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import ShopCategoryPreview from "../shop-category-preview/shop-category-preview.component";

const ShopPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  const categoriesTitleArr = Object.keys(categoriesMap);
  return (
    <div>
      {categoriesTitleArr.map((title) => {
        return (
          <ShopCategoryPreview
            key={title}
            title={title}
            products={categoriesMap[title]}
          />
        );
      })}
    </div>
  );
};

export default ShopPreview;
