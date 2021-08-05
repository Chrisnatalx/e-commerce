import React, { useState } from "react";

const CartContext = React.createContext([]);

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  const isInCart = (productId) => {
    if (cart.find((x) => x.productId === productId)) return true;
    return false;
  };

  const addProduct = (productId, quantity) => {
    if (isInCart(productId)) {
      alert("el producto ya se encuentra en el carrito");
      return;
    }
    setCart([...cart, { productId, quantity }]);
  };

  return (
    <CartContext.Provider value={{ cart, addProduct, isInCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
