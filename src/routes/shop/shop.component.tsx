import { Routes, Route } from "react-router-dom";
import ShopPreview from "../../components/shop-preview/shop-preview.component";
import ShopCategoryFull from "../../components/shop-category-full/shop-category-full.component";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCategoriesAsync } from "../../store/categories/categories.thunk";
import { Dispatch } from "react";
import { AnyAction } from "@reduxjs/toolkit";

type asyncDispatch = <T>(dispatch: Dispatch<T>) => Promise<void>;

type ExtendedDispatch = Dispatch<AnyAction> & asyncDispatch;

const Shop = () => {
  const dispatch: ExtendedDispatch = useDispatch();

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
