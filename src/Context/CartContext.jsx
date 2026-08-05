import { createContext, useContext, useMemo, useState } from "react";
import React from "react";
import { toast, Zoom, ToastContainer } from "react-toastify";
import { initialProducts } from "../Data/Product";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const products = initialProducts;

  // Add item to cart
  const addToCart = (product) => {
    toast.success("Item Added to Cart", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Zoom,
    });

    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Remove item from cart
  const removeFromCart = (productId, removeAll = false) => {
    toast.error("Item Removed to Cart", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Zoom,
    });
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === productId);
      if (!existingItem) {
        return prevCart;
      }
      if (removeAll || existingItem.quantity === 1) {
        return prevCart.filter((item) => item.id !== productId);
      } else {
        return prevCart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        );
      }
    });
  };

  const clearCart = () => setCart([]);

  const cartCount = useMemo(
    () => cart.reduce((total, item) => total + item.quantity, 0),
    [cart],
  );

  const cartTotal = useMemo(
    () => cart.reduce((total, item) => total + item.price * item.quantity, 0),
    [cart],
  );

  console.log("My Cart : ", cart);

  return (
    <CartContext.Provider
      value={{
        products,
        cart,
        addToCart,
        clearCart,
        cartTotal,
        cartCount,
        removeFromCart,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
