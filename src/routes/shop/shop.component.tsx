import ShopCategoryFull from "../../components/shop-category-full/shop-category-full.component";
import ShopPreview from "../../components/shop-preview/shop-preview.component";

import { AnyAction } from "@reduxjs/toolkit";
import { Dispatch } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { fetchCategoriesAsync } from "../../store/categories/categories.reducer";

type AsyncDispatch = (<T>(dispatch: Dispatch<T>) => Promise<void>) &
  Dispatch<AnyAction>;

const Shop = () => {
  const dispatch: AsyncDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesAsync());
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<ShopPreview />} />
      <Route path=":category" element={<ShopCategoryFull />} />
    </Routes>
  );
};

export default Shop;
