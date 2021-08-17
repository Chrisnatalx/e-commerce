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
      alert("el producto ya se encuentra en el carrito");
      return;
    }

    setCart([...cart, { product, quantity }]);
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
