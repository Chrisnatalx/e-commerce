import React, { useState } from "react";

const CartContext = React.createContext([]);

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  const isInCart = (productId) => {
    if (cart.find((x) => x.product.id === productId)) return true;
    return false;
  };

  const addProduct = (product, quantity) => {
    if (isInCart(product.id)) {
      const newCart = cart.map((x) => {
        if (x.product.id === product.id) x.quantity += quantity;
        return x;
      });
      setCart(newCart);
    } else {
      setCart([...cart, { product, quantity }]);
    }
  };

  const removeProduct = (productId) => {
    const newCart = cart.filter((x) => x.product.id !== productId);
    setCart(newCart);
  };
  const clearCart = () => {
    setCart([]);
  };
  return (
    <CartContext.Provider
      value={{ cart, addProduct, isInCart, removeProduct, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
