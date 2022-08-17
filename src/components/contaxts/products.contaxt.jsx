import { createContext, useState } from 'react';
import PRODUCT from '../shop-data.json';

export const ProductsContaxt = createContext({
  product: [],
});

export const ProductsProvider = ({ children }) => {
  const [product, setProduct] = useState(PRODUCT);
  const value = { product };
  return (
    <ProductsContaxt.Provider value={value}>
      {children}
    </ProductsContaxt.Provider>
  );
};
