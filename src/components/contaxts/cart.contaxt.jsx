import { createContext, useState, useEffect } from 'react';

const addCartItem = (cartItem, productToAdd) => {
  const existingCartItem = cartItem.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItem.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItem, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItem, cartItemToRemove) => {
  const existingCartItem = cartItem.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItem.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItem.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItem, cartItemToClear) => {
  return cartItem.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};

export const CartContaxt = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItem: [],
  addItemToCart: () => {},
  removeItemToCart: () => {},
  clearItemFormCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItem, setCartItem] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItem.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItem]);

  useEffect(() => {
    const newCartTotal = cartItem.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItem]);

  const addItemToCart = (productToAdd) => {
    setCartItem(addCartItem(cartItem, productToAdd));
  };

  const removeItemToCart = (cartItemToRemove) => {
    setCartItem(removeCartItem(cartItem, cartItemToRemove));
  };

  const clearItemFormCart = (cartItemToClear) => {
    setCartItem(clearCartItem(cartItem, cartItemToClear));
  };
  const value = {
    isCartOpen,
    setIsCartOpen,
    setCartTotal,
    addItemToCart,
    removeItemToCart,
    clearItemFormCart,
    cartItem,
    cartCount,
    cartTotal,
  };
  return <CartContaxt.Provider value={value}>{children}</CartContaxt.Provider>;
};
