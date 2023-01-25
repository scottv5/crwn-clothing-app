import { Routes, Route } from "react-router-dom";
import ShopPreview from "../../components/shop-preview/shop-preview.component";
import ShopCategoryFull from "../../components/shop-category-full/shop-category-full.component";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { setCategoriesData } from "../../store/categories/categories.action";

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategoriesData = async () => {
      const res = await getCategoriesAndDocuments();
      dispatch(setCategoriesData(res));
    };
    getCategoriesData();
    // getCategoriesAndDocuments().then((res) => {
    //   console.log("RES", res);
    //   dispatch(setCategoriesData(res));
    // });
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<ShopPreview />} />
      <Route path=":category" element={<ShopCategoryFull />} />
    </Routes>
  );
};

export default Shop;
