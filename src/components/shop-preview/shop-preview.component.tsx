import ShopCategoryPreview from "../shop-category-preview/shop-category-preview.component";
import Spinner from "../spinner/spinner.component";

import { useSelector } from "react-redux";

import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "../../store/categories/categories.selector";

const ShopPreview = () => {
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
