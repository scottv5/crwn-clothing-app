import { createContext, useState } from "react";
import SHOP_DATA from "../shop.json";

export const ProductsContext = createContext({
  products: [],
  setProducts: () => [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(SHOP_DATA);
  const value = { products, setProducts };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
