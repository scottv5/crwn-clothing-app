// import { useContext } from "react";
// import { CategoriesContext } from "../../contexts/categories.context";
import ShopCategoryPreview from "../shop-category-preview/shop-category-preview.component";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/categories.selector";

const ShopPreview = () => {
  //const { categoriesMap } = useContext(CategoriesContext);
  const categoriesMap = useSelector(selectCategoriesMap);
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
