import { createContext, useContext } from "react";
import React from "react";
import { initialProducts } from "../Data/Product";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const products = initialProducts;

  return (
    <CartContext.Provider value={products}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
