import { Routes, Route } from "react-router-dom";

import ShopPreview from "../../components/shop-preview/shop-preview.component";
import ShopCategoryFull from "../../components/shop-category-full/shop-category-full.component";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<ShopPreview />} />
      <Route path=":category" element={<ShopCategoryFull />} />
    </Routes>
  );
};

export default Shop;
