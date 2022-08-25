import { createContext, useState } from 'react';

export const CartContaxt = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const value = { isCartOpen, setIsCartOpen };
  return <CartContaxt.Provider value={value}>{children}</CartContaxt.Provider>;
};
