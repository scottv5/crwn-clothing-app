// import { useContext } from "react";
// import { CategoriesContext } from "../../contexts/categories.context";
import ShopCategoryPreview from "../shop-category-preview/shop-category-preview.component";
import { useSelector } from "react-redux";
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "../../store/categories/categories.selector";
import Spinner from "../spinner/spinner.component";

const ShopPreview = () => {
  //const { categoriesMap } = useContext(CategoriesContext);
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const categoriesTitleArr = Object.keys(categoriesMap);
  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        categoriesTitleArr.map((title) => {
          return (
            <ShopCategoryPreview
              key={title}
              title={title}
              products={categoriesMap[title]}
            />
          );
        })
      )}
    </div>
  );
};

export default ShopPreview;
